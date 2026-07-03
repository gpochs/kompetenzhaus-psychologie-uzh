/* Kleiner WebAudio-Synth — keine Audiodateien nötig. */
window.SND = (function () {
  let ctx = null, master = null, enabled = true;
  function ac() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.35;
      master.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function env(gainNode, t0, a, d, peak) {
    gainNode.gain.setValueAtTime(0.0001, t0);
    gainNode.gain.exponentialRampToValueAtTime(peak, t0 + a);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, t0 + a + d);
  }
  function tone(freq, t0, a, d, peak, type, dest) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || "sine"; o.frequency.value = freq;
    env(g, t0, a, d, peak);
    o.connect(g); g.connect(dest || master);
    o.start(t0); o.stop(t0 + a + d + 0.05);
  }
  function noise(t0, dur, peak, cutoff) {
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = cutoff || 900;
    const g = ctx.createGain(); g.gain.value = peak;
    src.connect(f); f.connect(g); g.connect(master);
    src.start(t0);
  }
  return {
    set enabled(v) { enabled = v; },
    get enabled() { return enabled; },
    unlock() { ac(); },
    thock() { // Baustein setzen: dumpfer Holz-Plock mit Tonhöhen-Variation
      if (!enabled || !ac()) return;
      const t = ctx.currentTime, p = 1 + (Math.random() * 0.2 - 0.1);
      noise(t, 0.08, 0.5, 1400);
      tone(170 * p, t, 0.005, 0.13, 0.5, "triangle");
      tone(85 * p, t, 0.005, 0.18, 0.35, "sine");
    },
    err() {
      if (!enabled || !ac()) return;
      const t = ctx.currentTime;
      tone(160, t, 0.01, 0.12, 0.25, "square");
      tone(120, t + 0.11, 0.01, 0.16, 0.22, "square");
    },
    pick() {
      if (!enabled || !ac()) return;
      tone(520, ctx.currentTime, 0.005, 0.07, 0.12, "sine");
    },
    quest() { // Quest abgeschlossen: heller Doppelklang
      if (!enabled || !ac()) return;
      const t = ctx.currentTime;
      tone(880, t, 0.005, 0.18, 0.22, "sine");
      tone(1320, t + 0.09, 0.005, 0.25, 0.2, "sine");
    },
    fanfare() { // Richtfest: aufsteigendes Arpeggio
      if (!enabled || !ac()) return;
      const t = ctx.currentTime, base = [523.25, 659.25, 783.99, 1046.5];
      base.forEach((f, i) => {
        tone(f, t + i * 0.12, 0.01, 0.5, 0.28, "triangle");
        tone(f / 2, t + i * 0.12, 0.01, 0.5, 0.14, "sine");
      });
      tone(1318.5, t + 0.55, 0.01, 0.9, 0.22, "triangle");
    },
    firework() {
      if (!enabled || !ac()) return;
      const t = ctx.currentTime;
      noise(t, 0.5, 0.6, 2500);
      tone(2200 - Math.random() * 800, t + 0.02, 0.005, 0.4, 0.1, "sawtooth");
    }
  };
})();
