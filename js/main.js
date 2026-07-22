/* =====================================================================
   Das Kompetenzhaus — 3D-Bauspiel (Three.js)
   Statik = Studienlogik · Kompetenzen = Profil · keine Ranglisten.
   ===================================================================== */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const ST = window.STRUKTUR, TEXTE = window.MODUL_TEXTE || {};
const CELL = 1.6, FH = 1.9;
const KELLER_T = 2.1; // unterirdische Kellertiefe (Weltmeter) — Sockelblöcke ragen in den Boden
const STORE = "uzh-kompetenzhaus-v1";

/* ---------- Fallback-Kompetenzmapping (bis die Volltexte generiert sind) ---------- */
const FALLBACK = {
  "001": { fa:["Fa1","Fa3","Fa4"], ki:["KI1","KI6"], fu:["Fu2"], haupt:["Fa1","Fa3"], kat:"A" },
  "002": { fa:["Fa1","Fa2","Fa4","Fa9"], ki:["KI4"], fu:["Fu2"], haupt:["Fa1","Fa2"], kat:"A" },
  "003": { fa:["Fa10","Fa6","Fa7"], ki:["KI1","KI4","KI5","KI6"], fu:["Fu1","Fu2","Fu3"], haupt:["Fa10","KI5"], kat:"B" },
  "100": { fa:["Fa5","Fa3","Fa4","Fa10"], ki:["KI4","KI6"], fu:["Fu2"], haupt:["Fa5","Fa3"], kat:"A+B" },
  "101": { fa:["Fa3","Fa2","Fa4"], ki:["KI1","KI6"], fu:["Fu1"], haupt:["Fa3"], kat:"B" },
  "102": { fa:["Fa2","Fa6","Fa3","Fa7","Fa10"], ki:["KI1","KI2","KI3","KI5"], fu:["Fu1","Fu3"], haupt:["Fa2","Fa6"], kat:"B" },
  "103": { fa:["Fa3","Fa2","Fa4"], ki:["KI4","KI6","KI1"], fu:["Fu2"], haupt:["Fa3","KI4"], kat:"A" },
  "200": { fa:["Fa1","Fa4"], ki:["KI4"], fu:["Fu2"], haupt:["Fa1","Fa4"], kat:"A" },
  "201": { fa:["Fa1","Fa2"], ki:["KI4"], fu:["Fu2"], haupt:["Fa1"], kat:"A" },
  "s11": { fa:["Fa4","Fa6","Fa1"], ki:["KI6","KI1"], fu:["Fu1"], haupt:["Fa4","Fa6"], kat:"B" },
  "300": { fa:["Fa1","Fa5","Fa4","Fa9"], ki:["KI6"], fu:["Fu2"], haupt:["Fa1","Fa5"], kat:"A" },
  "301": { fa:["Fa1","Fa8","Fa5"], ki:["KI3"], fu:["Fu3"], haupt:["Fa1","Fa8"], kat:"A+B" },
  "302": { fa:["Fa1","Fa8","Fa5"], ki:["KI3"], fu:["Fu3"], haupt:["Fa1","Fa8"], kat:"A+B" },
  "s13": { fa:["Fa4","Fa6","Fa1"], ki:["KI1","KI6","KI5"], fu:["Fu1"], haupt:["Fa4","Fa6"], kat:"B" },
  "400": { fa:["Fa1","Fa8","Fa5","Fa7","Fa9"], ki:["KI5","KI6","KI3"], fu:["Fu3"], haupt:["Fa1","Fa8","Fa7"], kat:"A+B" },
  "401": { fa:["Fa1","Fa8"], ki:[], fu:[], haupt:["Fa1"], kat:"A" },
  "402": { fa:["Fa8","Fa1","Fa10"], ki:["KI6"], fu:["Fu2"], haupt:["Fa8","Fa1"], kat:"B" },
  "403": { fa:["Fa1","Fa8","Fa9"], ki:[], fu:[], haupt:["Fa1"], kat:"A" },
  "s12": { fa:["Fa4","Fa6","Fa1"], ki:["KI6","KI2"], fu:["Fu1"], haupt:["Fa4","Fa6"], kat:"B" },
  "BA":  { fa:["Fa6","Fa4","Fa2","Fa7","Fa10"], ki:["KI5","KI6","KI3","KI1"], fu:["Fu1","Fu2","Fu3"], haupt:["Fa6","Fa4","Fa7"], kat:"B" },
  "500": { fa:["Fa3","Fa2","Fa4"], ki:["KI4","KI1"], fu:["Fu2"], haupt:["Fa3","KI4"], kat:"A+B" },
  "501": { fa:["Fa5","Fa7","Fa4","Fa6"], ki:["KI6","KI5"], fu:["Fu1"], haupt:["Fa5","KI6"], kat:"B/C" },
  "502": { fa:["Fa1","Fa8"], ki:["KI5"], fu:["Fu3"], haupt:["Fa1","Fa8"], kat:"B" },
  "wp":  { fa:["Fa1","Fa4","Fa8"], ki:["KI6"], fu:["Fu1"], haupt:["Fa1"], kat:"A" },
  "s04": { fa:["Fa1","Fa4","Fa6"], ki:["KI4","KI6","KI3"], fu:["Fu1","Fu2"], haupt:["Fa1","Fa4"], kat:"B" },
  "s05": { fa:["Fa1","Fa4","Fa6"], ki:["KI4","KI6","KI3"], fu:["Fu1","Fu2"], haupt:["Fa1","Fa4"], kat:"B" },
  "s06": { fa:["Fa1","Fa4","Fa6"], ki:["KI4","KI6","KI3"], fu:["Fu1","Fu2"], haupt:["Fa1","Fa4"], kat:"B" },
  "s07": { fa:["Fa1","Fa4","Fa6"], ki:["KI4","KI6","KI3"], fu:["Fu1","Fu2"], haupt:["Fa1","Fa4"], kat:"B" },
  "s08": { fa:["Fa1","Fa4","Fa6"], ki:["KI4","KI6","KI3"], fu:["Fu1","Fu2"], haupt:["Fa1","Fa4"], kat:"B" },
  "s09": { fa:["Fa1","Fa4","Fa6"], ki:["KI4","KI6","KI3"], fu:["Fu1","Fu2"], haupt:["Fa1","Fa4"], kat:"B" },
  "s01a": { fa:["Fa1","Fa4","Fa6"], ki:["KI2"], fu:["Fu1"], haupt:["KI2"], kat:"C" },
  "s01b": { fa:["Fa1","Fa4","Fa6"], ki:["KI2"], fu:["Fu1"], haupt:["KI2"], kat:"C" },
  "s01c": { fa:["Fa1","Fa4","Fa6"], ki:["KI2"], fu:["Fu1"], haupt:["KI2"], kat:"C" },
  "s01d": { fa:["Fa1","Fa4","Fa6"], ki:["KI2"], fu:["Fu1"], haupt:["KI2"], kat:"C" },
  "600": { fa:["Fa8","Fa10","Fa7","Fa6"], ki:["KI5","KI3","KI1"], fu:["Fu3","Fu2"], haupt:["Fa8","Fa10"], kat:"B" },
  "s02a": { fa:["Fa1","Fa4"], ki:[], fu:[], haupt:["Fa1","Fa4"], kat:"A" },
  "s02b": { fa:["Fa1","Fa4"], ki:[], fu:[], haupt:["Fa1","Fa4"], kat:"A" },
  "s03": { fa:["Fa2","Fa3"], ki:["KI1","KI4","KI2"], fu:["Fu1"], haupt:["Fa2","Fa3"], kat:"B/C" },
  "MA":  { fa:["Fa2","Fa3","Fa6","Fa7","Fa10"], ki:["KI1","KI2","KI3","KI5","KI6"], fu:["Fu1","Fu2","Fu3"], haupt:["Fa2","Fa3","Fa6"], kat:"B" },
  "901": { fa:["Fa2","Fa6"], ki:[], fu:["Fu2"], haupt:["Fa2"], kat:"A" },
  "902": { fa:["Fa6","Fa4"], ki:["KI6"], fu:["Fu2"], haupt:["Fa6","Fa4"], kat:"A" },
  "903": { fa:["Fa2","Fa6"], ki:[], fu:["Fu2"], haupt:["Fa2"], kat:"A" },
  "904": { fa:["Fa6","Fa4"], ki:["KI6"], fu:["Fu2"], haupt:["Fa6","Fa4"], kat:"A" },
  "909": { fa:["Fa1","Fa4","Fa6"], ki:["KI5","KI6"], fu:["Fu2"], haupt:["Fa1","Fa4"], kat:"A" }
};

/* ---------- State ---------- */
const defaultState = () => ({
  v: 3, lang: "de", mode: "frei", name: "", direktMSc: false, onboarded: false,
  placed: { frei: {}, serious: {} }, bestanden: {}, quests: {}, quiz: {}, fb: {},
  msSeen: { frei: [], serious: [] }, nachbarn: [], season: autoSeason(), tod: 35,
  sound: true, envAuto: true, p0: [false, false, false, false], minor: [false, false, false, false, false, false],
  pal: { bsc: "uzh", msc: "uzh" }, wzSeen: { frei: [], serious: [] }
});
function autoSeason() {
  const m = new Date().getMonth() + 1;
  return m >= 3 && m <= 5 ? "fruehling" : m >= 6 && m <= 8 ? "sommer" : m >= 9 && m <= 11 ? "herbst" : "winter";
}
let storageOK = true;
try { localStorage.setItem(STORE + "-t", "1"); localStorage.removeItem(STORE + "-t"); } catch (e) { storageOK = false; }
let S = defaultState();
if (storageOK) { try { const raw = localStorage.getItem(STORE); if (raw) S = Object.assign(defaultState(), JSON.parse(raw)); } catch (e) {} }
let saveTimer = null;
function save() {
  if (!storageOK) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => { try { localStorage.setItem(STORE, JSON.stringify(S)); } catch (e) {} }, 300);
}

/* ---------- i18n ---------- */
const t = (k) => (window.T[S.lang] && window.T[S.lang][k]) || window.T.de[k] || k;
const L = (obj) => (obj && (obj[S.lang] || obj.de)) || "";
function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n"); const v = t(k);
    if (v) el.innerHTML = v.startsWith("⬇") || v.startsWith("⤒") || v.startsWith("🗑") || v.startsWith("❓") || v.startsWith("🔒") || v.startsWith("ℹ️") ? v : el.tagName === "LI" ? v : v;
    if (v) el.innerHTML = v;
  });
  document.getElementById("btnLang").textContent = S.lang === "de" ? "EN" : "DE";
  document.documentElement.lang = S.lang;
}

/* ---------- Registry ---------- */
const SLOTS = {}; ST.slots.forEach((s) => (SLOTS[s.slot] = s));
const OPTMOD = {}; (ST.optionsmodule || []).forEach((m) => (OPTMOD[m.code] = m));
const KOMP = {}; ST.kompetenzen.forEach((k) => (KOMP[k.id] = k));
function slotText(slot) {
  const p = S.placed[S.mode][slot.slot];
  // vor dem Platzieren folgt die Karte der gewählten Option (pendingOpt), danach der gespeicherten
  const pend = typeof pendingOpt !== "undefined" && slot.optionen && slot.optionen.includes(pendingOpt) && selectedId === slot.slot ? pendingOpt : null;
  const code = (p && p.opt) || pend || slot.code;
  return TEXTE[code] || null;
}
function slotKomp(slot) {
  const tx = slotText(slot);
  if (tx && tx.komp) return { komp: tx.komp, haupt: tx.haupt || [], kat: tx.kat || (FALLBACK[slot.slot] || {}).kat || "B" };
  const f = FALLBACK[slot.slot] || { fa: [], ki: [], fu: [], haupt: [], kat: "B" };
  return { komp: { fa: f.fa, ki: f.ki, fu: f.fu }, haupt: f.haupt, kat: f.kat };
}
function slotTitel(slot) {
  const p = S.placed[S.mode][slot.slot];
  if (p && p.opt && OPTMOD[p.opt]) return L(OPTMOD[p.opt].titel);
  return L(slot.titel);
}
const visitor = { active: false, data: null };

/* ---------- Wahlprofil: Themen, Richtungen, Schwerpunkt-Profil, Paletten ---------- */
const THEMEN = ST.themen || {};
const PAL = {}; (ST.paletten || []).forEach((p) => (PAL[p.id] = p));
function palFor(hausId) { return PAL[(S.pal && S.pal[hausId]) || "uzh"] || PAL.uzh || { rahmen: "#f2f0e9", dach: null, holz: "#8a6642", akzent: "#0028a5" }; }
function themaFor(slotId, state) {
  const p = state || S.placed[S.mode][slotId];
  if (!p || !p.thema) return null;
  return (THEMEN[slotId] || []).find((t) => t.id === p.thema) || null;
}
/* BSc-Interessensrichtung: Mehrheit der Themen-Tags aus s11/s12/s13 + BA-Themenfeld.
   Mindestens 2 gleiche Tags und keine geteilte Spitze — sonst (noch) kein Profil. */
function bscRichtung() {
  const counts = { klin: 0, ekn: 0, swo: 0 };
  for (const sid of ["s11", "s12", "s13", "BA"]) {
    const th = themaFor(sid);
    if (th && counts[th.r] !== undefined) counts[th.r]++;
  }
  let best = null, bn = 0, tie = false;
  for (const r of Object.keys(counts)) {
    if (counts[r] > bn) { best = r; bn = counts[r]; tie = false; }
    else if (counts[r] === bn && bn > 0) tie = true;
  }
  return { counts, r: bn >= 2 && !tie ? best : null };
}
/* MSc-Profil: Verteilung der Schwerpunktwahlen über die 6 Vertiefungen; Dominanz ab 4/6. */
function mscProfil() {
  const counts = { DeNC: 0, HEA: 0, SEOP: 0 };
  for (const sid of ["s04", "s05", "s06", "s07", "s08", "s09"]) {
    const p = S.placed[S.mode][sid];
    if (p && p.sp && counts[p.sp] !== undefined) counts[p.sp]++;
  }
  let dom = null;
  for (const sp of Object.keys(counts)) if (counts[sp] >= 4) dom = sp;
  return { counts, dom, total: counts.DeNC + counts.HEA + counts.SEOP };
}
/* Gewählte Wahlpflicht-Option (510 Economic/Consumer vs. 511 Klin. Neuropsychologie) */
function wpWahl() { const p = S.placed[S.mode]["wp"]; return (p && p.opt) || null; }
/* Bachelorarbeit neu: gewählte Beispiel-Fragestellung und AIAS-5-Artefakt */
function baFrage() {
  const p = S.placed[S.mode]["BA"];
  if (!p || !p.thema || !p.frage) return null;
  return ((ST.baFragen || {})[p.thema] || []).find((f) => f.id === p.frage) || null;
}
function baArtefakt() {
  const p = S.placed[S.mode]["BA"];
  if (!p || !p.artefakt) return null;
  return (ST.baArtefakte || []).find((a) => a.id === p.artefakt) || null;
}

/* ---------- Regeln ---------- */
function isPlaced(id, mode) { return !!S.placed[mode || S.mode][id]; }
function mscOpen(mode) { return isPlaced("BA", mode || S.mode) || S.direktMSc; }
function quizCode(slot) {
  if (slot.optionen) {
    const p = S.placed[S.mode][slot.slot];
    return (p && p.opt) || (typeof pendingOpt !== "undefined" && pendingOpt) || slot.optionen[0];
  }
  return slot.code;
}
function quizFor(slot) { return (window.QUIZ || {})[quizCode(slot)] || null; }
function quizOk(slot) { return !!S.quiz[quizCode(slot)]; }
function canPlace(slot, mode) {
  mode = mode || S.mode;
  if (visitor.active) return { ok: false, reason: "" };
  if (isPlaced(slot.slot, mode)) return { ok: false, reason: "" };
  if (slot.haus === "msc" && !mscOpen(mode)) return { ok: false, reason: t("grund_msc") };
  const missing = (slot.voraus || []).filter((v) => !isPlaced(v, mode));
  if (missing.length) {
    const names = missing.slice(0, 3).map((m) => L(SLOTS[m].titel).split(",")[0]).join(" · ");
    return { ok: false, reason: t("grund_voraus") + names + (missing.length > 3 ? " …" : "") };
  }
  if (mode === "serious" && !S.bestanden[slot.slot]) return { ok: false, reason: t("grund_bestanden") };
  if (mode === "serious" && quizFor(slot) && !quizOk(slot)) return { ok: false, reason: t("grund_quiz") };
  return { ok: true, reason: "" };
}

/* ---------- Three.js Grundgerüst ---------- */
const canvas = document.getElementById("c3d");
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
} catch (e) {
  document.body.insertAdjacentHTML("beforeend",
    `<div style="position:fixed;inset:0;z-index:99;display:grid;place-items:center;background:#f4f6fb;padding:24px"><div style="max-width:420px;text-align:center;font-family:Helvetica,Arial,sans-serif"><div style="font-size:40px">🏗️</div><h2 style="color:#0028a5;margin:10px 0">3D wird hier nicht unterstützt</h2><p style="color:#3c4356;line-height:1.5">Dein Browser kann WebGL gerade nicht starten. Bitte öffne das Kompetenzhaus in Safari, Chrome oder Firefox (nicht im In-App-Browser) — oder auf einem anderen Gerät.</p></div></div>`);
  throw e;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 400);
camera.position.set(-23, 17, 30);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; controls.dampingFactor = 0.06;
controls.maxPolarAngle = Math.PI * 0.49; controls.minDistance = 6; controls.maxDistance = 105;
controls.target.set(-7, 3, 0);
const hemi = new THREE.HemisphereLight(0xbfd9ff, 0x8a7a55, 0.75); scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffe9c4, 2.2);
sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -48; sun.shadow.camera.right = 48; sun.shadow.camera.top = 48; sun.shadow.camera.bottom = -48;
sun.shadow.camera.far = 120; sun.shadow.bias = -0.0004; sun.shadow.radius = 6;
scene.add(sun); scene.add(sun.target);
scene.fog = new THREE.Fog(0xbfe0f5, 60, 160);

/* Boden & Umgebung */
const worldGroup = new THREE.Group(); scene.add(worldGroup);
const grassMat = new THREE.MeshStandardMaterial({ color: 0x6faf52, roughness: 1 });
const ground = new THREE.Mesh(new THREE.CylinderGeometry(90, 90, 0.6, 48), grassMat);
ground.position.y = -0.3; ground.receiveShadow = true; worldGroup.add(ground);
const plotMat = new THREE.MeshStandardMaterial({ color: 0xcabfa8, roughness: 0.95 });
const pathMat = new THREE.MeshStandardMaterial({ color: 0xd8d2c2, roughness: 1 });
const betonMat = new THREE.MeshStandardMaterial({ color: 0x9b978c, roughness: 0.95 });
function makePlot(hausId) {
  const h = ST.haeuser[hausId];
  const g = new THREE.Group();
  const w = (h.breite + 3.6) * CELL, d = (h.tiefe + 3.6) * CELL;
  const p = new THREE.Mesh(new THREE.BoxGeometry(w, 0.24, d), plotMat);
  p.position.set(h.origin[0], 0.12, h.origin[2]); p.receiveShadow = true;
  g.add(p); worldGroup.add(g);
  return g;
}
makePlot("bsc"); const mscPlotGroup = makePlot("msc");
const path = new THREE.Mesh(new THREE.BoxGeometry(9, 0.18, 2.4), pathMat);
path.position.set(0, 0.09, 0); path.receiveShadow = true; worldGroup.add(path);

/* Bäume (prozedural, low-poly) */
const foliageMat = new THREE.MeshStandardMaterial({ color: 0x4e9440, roughness: 1, flatShading: true });
const trunkMat = new THREE.MeshStandardMaterial({ color: 0x7a5a3a, roughness: 1 });
const treePositions = [[-26, -12], [-30, 4], [-20, 14], [26, -13], [31, 3], [22, 15], [-2, -17], [4, 18], [-14, -18], [16, -18]];
treePositions.forEach(([x, z], i) => {
  const tr = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.32, 1.6, 6), trunkMat);
  trunk.position.y = 0.8; trunk.castShadow = true;
  const s = 1 + (i % 3) * 0.35;
  if (i % 3 === 2) { // Nadelbaum für Abwechslung
    const fol = new THREE.Mesh(new THREE.ConeGeometry(1.1 * s, 2.6 * s, 7), foliageMat);
    fol.position.y = 1.6 + 1.1 * s; fol.castShadow = true; tr.add(fol);
  } else {
    const fol = new THREE.Mesh(new THREE.IcosahedronGeometry(1.35 * s, 0), foliageMat);
    fol.position.y = 2.2 + 0.5 * s; fol.castShadow = true; tr.add(fol);
    if (i % 3 === 1) { const fol2 = new THREE.Mesh(new THREE.IcosahedronGeometry(0.8 * s, 0), foliageMat); fol2.position.set(0.7, 1.8 + 0.4 * s, 0.3); fol2.castShadow = true; tr.add(fol2); }
  }
  tr.add(trunk); tr.position.set(x, 0, z); tr.rotation.y = i * 1.7; worldGroup.add(tr);
});

/* Hügelkette am Horizont */
const hillMat = new THREE.MeshStandardMaterial({ color: 0x5e9a48, roughness: 1, flatShading: true });
[[-62, -42, 26], [55, -48, 30], [-72, 22, 22], [66, 28, 24], [-6, -75, 36], [-42, 62, 26], [48, 60, 22], [8, 70, 28]].forEach(([x, z, r]) => {
  const h = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 7), hillMat);
  h.position.set(x, -r * 0.62, z); h.scale.y = 0.55;
  worldGroup.add(h);
});
/* Felsen */
const rockMat = new THREE.MeshStandardMaterial({ color: 0x9aa2b5, roughness: 1, flatShading: true });
[[-7, 9, 0.5], [19, -9, 0.7], [-19, -10, 0.45], [3, -13, 0.6]].forEach(([x, z, s]) => {
  const r = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 0), rockMat);
  r.position.set(x, s * 0.55, z); r.rotation.set(s, x, z); r.castShadow = true;
  worldGroup.add(r);
});
/* Blumen (Frühling/Sommer) */
const flowerGeo = new THREE.IcosahedronGeometry(0.09, 0);
const flowerMat = new THREE.MeshBasicMaterial();
const flowers = new THREE.InstancedMesh(flowerGeo, flowerMat, 90);
{
  const cols = [0xffffff, 0xf7b7d4, 0xf3d34e, 0xc9a0ff];
  const m4 = new THREE.Matrix4();
  let n = 0;
  while (n < 90) {
    const x = (Math.random() - 0.5) * 76, z = (Math.random() - 0.5) * 52;
    if (Math.abs(x) < 22 && Math.abs(z) < 9) continue; // Grundstücke frei halten
    m4.makeScale(1, 1 + Math.random(), 1); m4.setPosition(x, 0.12, z);
    flowers.setMatrixAt(n, m4);
    flowers.setColorAt(n, new THREE.Color(cols[n % cols.length]));
    n++;
  }
  worldGroup.add(flowers);
}
/* Wolken */
const cloudMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true, transparent: true, opacity: 0.92 });
const clouds = [];
for (let i = 0; i < 6; i++) {
  const c = new THREE.Group();
  const nPuff = 3 + (i % 3);
  for (let p = 0; p < nPuff; p++) {
    const s = 1.6 + Math.random() * 2.2;
    const puff = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 0), cloudMat);
    puff.position.set(p * 2.4 - nPuff, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 1.6);
    puff.scale.y = 0.55;
    c.add(puff);
  }
  c.position.set((Math.random() - 0.5) * 120, 22 + Math.random() * 8, (Math.random() - 0.5) * 80 - 10);
  c.userData.v = 0.25 + Math.random() * 0.4;
  clouds.push(c); scene.add(c);
}
/* Briefkasten «Vorstufe ⓪» am Gartenweg */
const briefkasten = new THREE.Group();
{
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.9, 6), new THREE.MeshStandardMaterial({ color: 0x8a6642, roughness: 0.9 }));
  post.position.y = 0.45;
  const box = new THREE.Mesh(new RoundedBoxGeometry(0.55, 0.35, 0.32, 2, 0.06), new THREE.MeshStandardMaterial({ color: 0x0028a5, roughness: 0.55 }));
  box.position.y = 1.02;
  const schlitz = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.045), new THREE.MeshStandardMaterial({ color: 0xf4f4f0 }));
  schlitz.position.set(0, 1.06, 0.17);
  const faehnchen = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.11), new THREE.MeshStandardMaterial({ color: 0xd96a4b, side: THREE.DoubleSide }));
  faehnchen.position.set(0.32, 1.12, 0);
  briefkasten.add(post, box, schlitz, faehnchen);
  briefkasten.position.set(-3.4, 0.24, 4.7);
  briefkasten.rotation.y = 0.4;
  briefkasten.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.userData.action = "p0"; } });
  scene.add(briefkasten);
}
/* Minor-Beet neben dem Bachelor-Haus */
const beetGroup = new THREE.Group();
{
  const erde = new THREE.Mesh(new RoundedBoxGeometry(4.4, 0.22, 1.5, 2, 0.06), new THREE.MeshStandardMaterial({ color: 0x6b5138, roughness: 1 }));
  erde.position.y = 0.11;
  erde.receiveShadow = true;
  beetGroup.add(erde);
  beetGroup.position.set(-4.2, 0.24, 8.2); // rechts vom Eingang, gibt die Porch frei
  beetGroup.traverse((o) => { if (o.isMesh) o.userData.action = "minor"; });
  scene.add(beetGroup);
}
const beetPflanzen = new THREE.Group(); beetGroup.add(beetPflanzen);
function growMinor() {
  beetPflanzen.clear();
  const cols = [0xe4572e, 0xf3d34e, 0xc9a0ff, 0xffffff, 0xf7b7d4, 0x7fc36a];
  (S.minor || []).forEach((done, i) => {
    if (!done) return;
    for (let p = 0; p < 3; p++) {
      const stiel = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.28, 5), new THREE.MeshStandardMaterial({ color: 0x4e9440 }));
      stiel.position.set(-1.85 + i * 0.74, 0.34, -0.4 + p * 0.4);
      const bluete = new THREE.Mesh(new THREE.IcosahedronGeometry(0.09, 0), new THREE.MeshBasicMaterial({ color: cols[i] }));
      bluete.position.set(-1.85 + i * 0.74, 0.52, -0.4 + p * 0.4);
      stiel.userData.action = "minor"; bluete.userData.action = "minor";
      beetPflanzen.add(stiel, bluete);
    }
  });
}
/* Bauhütte — erklärt, WIE hier gebaut (gelehrt) wird: 8 aktivierende Elemente + Evidenz */
const bauhuette = new THREE.Group();
{
  const holz = new THREE.MeshStandardMaterial({ color: 0x9a7550, roughness: 0.95 });
  const holzD = new THREE.MeshStandardMaterial({ color: 0x6b4f33, roughness: 0.95 });
  const korpus = new THREE.Mesh(new RoundedBoxGeometry(2.6, 1.9, 1.9, 2, 0.06), holz);
  korpus.position.y = 0.95;
  const dach = new THREE.Mesh(prismGeometry(3.0, 2.3, 0.75), new THREE.MeshStandardMaterial({ color: 0x39415a, roughness: 0.85, flatShading: true, side: THREE.DoubleSide }));
  dach.position.y = 1.9;
  const tuer = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1.3), holzD);
  tuer.position.set(-0.55, 0.66, 0.96);
  const fenster = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.55), new THREE.MeshStandardMaterial({ color: 0x2a3550, roughness: 0.3, metalness: 0.3 }));
  fenster.position.set(0.6, 1.2, 0.96);
  const schild = textSprite("🛠️", "#0028a5");
  schild.scale.set(1.2, 0.48, 1); schild.position.set(0, 3.05, 0);
  bauhuette.add(korpus, dach, tuer, fenster, schild);
  bauhuette.position.set(-19.5, 0.02, 10.4);
  bauhuette.rotation.y = 0.55;
  bauhuette.traverse((o) => { if (o.isMesh) o.castShadow = true; o.userData.action = "bauhuette"; });
  scene.add(bauhuette);
}

/* Geräteschuppen — der KI-Tool-Stack der UZH mit Reifegrad-Ampel (Quelle: KI-im-Curriculum-Kompass, 16.07.2026) */
const geraeteschuppen = new THREE.Group();
{
  const wand = new THREE.MeshStandardMaterial({ color: 0x7d8a6a, roughness: 0.95 });
  const wandD = new THREE.MeshStandardMaterial({ color: 0x5e6b4e, roughness: 0.95 });
  const korpus = new THREE.Mesh(new RoundedBoxGeometry(1.9, 1.5, 1.3, 2, 0.05), wand);
  korpus.position.y = 0.75;
  const dach = new THREE.Mesh(new THREE.BoxGeometry(2.15, 0.09, 1.6), new THREE.MeshStandardMaterial({ color: 0x39415a, roughness: 0.85 }));
  dach.position.y = 1.58; dach.rotation.x = -0.12;
  const tuer = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 1.1), wandD);
  tuer.position.set(-0.35, 0.57, 0.66);
  const schild = textSprite("🧰", "#0e8f7e");
  schild.scale.set(1.05, 0.42, 1); schild.position.set(0, 2.35, 0);
  geraeteschuppen.add(korpus, dach, tuer, schild);
  geraeteschuppen.position.set(-24.2, 0.02, 5.6);
  geraeteschuppen.rotation.y = 0.9;
  geraeteschuppen.traverse((o) => { if (o.isMesh) o.castShadow = true; o.userData.action = "geraete"; });
  scene.add(geraeteschuppen);
}

/* Sterne & Glühwürmchen */
function makePoints(n, size, color, spread, yMin, yMax) {
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = (Math.random() - 0.5) * spread;
    pos[i * 3 + 1] = yMin + Math.random() * (yMax - yMin);
    pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const m = new THREE.PointsMaterial({ size, color, transparent: true, opacity: 0, sizeAttenuation: true, depthWrite: false });
  const pts = new THREE.Points(g, m);
  scene.add(pts);
  return pts;
}
const stars = makePoints(320, 0.5, 0xffffff, 220, 28, 90);
const fireflies = makePoints(26, 0.35, 0xffd166, 46, 0.6, 3.2);

/* ---------- Tweens ---------- */
const tweens = [];
const easeOutCubic = (k) => 1 - Math.pow(1 - k, 3);
const easeInQuad = (k) => k * k; // beschleunigender Fall — Schwerkraft statt Abbremsen
const easeOutBack = (k) => { const c = 1.9; return 1 + (c + 1) * Math.pow(k - 1, 3) + c * Math.pow(k - 1, 2); };
const easeInOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
function tween(dur, fn, ease = easeOutCubic, onDone = null) { tweens.push({ t: 0, dur, fn, ease, onDone }); }
let shakeT = 0, hitstopT = 0;
const REDUCE_MOTION = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
/* KI-Funktionen nur, wenn die Umgebung sie bereitstellt (Claude-Artifact) */
const HAS_AI = !!(window.claude && typeof window.claude.complete === "function");
/* Fallback: Companion-Chat-Artifact «KI-Baututor» auf claude.ai (v4, publiziert 21.07.2026) */
const TUTOR_URL = "https://claude.ai/public/artifacts/a21eaa67-43cd-4ece-a7cf-069e7f24a561";
async function aiComplete(prompt) { return String(await window.claude.complete(prompt)).trim(); }
let tutorCtl = null;

let camTween = null;
function flyTo(pos, target, dur = 1.6, after = null) {
  if (camTween) { const i = tweens.indexOf(camTween); if (i >= 0) tweens.splice(i, 1); } // laufenden Flug abbrechen
  const p0 = camera.position.clone(), t0 = controls.target.clone();
  controls.enabled = false;
  camTween = { t: 0, dur, ease: easeInOut, fn: (k) => {
    camera.position.lerpVectors(p0, pos, k);
    controls.target.lerpVectors(t0, target, k);
  }, onDone: () => { camTween = null; controls.enabled = true; if (after) after(); } };
  tweens.push(camTween);
}

/* ---------- Material-Stile ---------- */
function colFor(slot, state) {
  const p = state || S.placed[S.mode][slot.slot]; // state: z.B. Nachbarhäuser mit eigenem Spielstand
  if (slot.schwerpunktwahl && p && p.sp && ST.schwerpunkte[p.sp]) return new THREE.Color(ST.schwerpunkte[p.sp].farbe);
  const th = p && p.thema ? (THEMEN[slot.slot] || []).find((t) => t.id === p.thema) : null;
  if (th && ST.richtungen && ST.richtungen[th.r]) {
    return new THREE.Color(ST.gruppen[slot.gruppe].farbe).lerp(new THREE.Color(ST.richtungen[th.r].farbe), 0.72);
  }
  return new THREE.Color(ST.gruppen[slot.gruppe].farbe);
}
function styleMat(baseColor, stil) {
  const c = baseColor.clone();
  let rough = 0.85, metal = 0.02;
  if (stil === "hell") c.lerp(new THREE.Color(0xffffff), 0.45);
  if (stil === "holz") { c.lerp(new THREE.Color(0x8a6642), 0.55); rough = 0.95; }
  if (stil === "glas") { c.lerp(new THREE.Color(0x9db8d9), 0.5); rough = 0.28; metal = 0.35; }
  if (stil === "backstein") { c.lerp(new THREE.Color(0x9c4a35), 0.6); rough = 0.92; }
  if (stil === "beton") { c.lerp(new THREE.Color(0xb9bdc4), 0.55); rough = 0.6; }
  return new THREE.MeshStandardMaterial({ color: c, roughness: rough, metalness: metal });
}
const windowMats = [];
function windowMat() {
  const m = new THREE.MeshStandardMaterial({ color: 0x2a3550, roughness: 0.25, metalness: 0.4, emissive: 0xffc96b, emissiveIntensity: 0 });
  windowMats.push(m); return m;
}
const roofDarken = (c) => c.clone().lerp(new THREE.Color(0x14203c), 0.45);

/* ---------- Block-Fabrik ---------- */
const blockGroup = new THREE.Group(); scene.add(blockGroup);
const blockMeshes = {}; // slot -> Group
const floorBase = (y) => (y === 0 ? 0 : 0.55 + (y - 1)) * FH + 0.24;

/* ---------- Statik: getragen oder auskragend? ----------
   Ein Block gilt als getragen, wenn unter seiner Grundfläche (Zellkoordinaten)
   ein platzierter Block des Geschosses darunter liegt. Auskragende Blöcke
   erhalten sichtbare Stützen bis zum tragenden Niveau — nichts schwebt. */
const KONSOLEN = new Set(["901", "902", "903", "904"]); // Turmkonsolen: immer mit Konsolstein zum Turm hin
function footOverlap(a, b) {
  return Math.abs(a.x - b.x) * 2 < (a.w + b.w) - 0.01 && Math.abs(a.z - b.z) * 2 < (a.d + b.d) - 0.01;
}
function isSupported(slot, state) {
  if (slot.pos.y === 0) return true;
  for (const s of ST.slots) {
    if (s.haus !== slot.haus || s.slot === slot.slot) continue;
    const below = s.pos.y === slot.pos.y - 1 || (s.form === "wing" && slot.pos.y <= 2);
    if (!below) continue;
    const placedS = state ? !!state[s.slot] : isPlaced(s.slot);
    if (placedS && footOverlap(slot.pos, s.pos)) return true;
  }
  return false;
}
/* Konsolstein (Kragstein): schräge Stütze unter der Innenkante eines angebauten Blocks */
function addKonsole(g, slot, mat) {
  const W = slot.pos.w * CELL, D = slot.pos.d * CELL;
  const innen = slot.pos.x >= 0 ? -1 : 1; // zur Hausmitte hin
  for (const pz of [-0.32, 0.32]) {
    const k = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.14, 0.55, 4), mat);
    k.rotation.y = Math.PI / 4;
    k.position.set(innen * (W / 2 - 0.18), -0.27, pz * D);
    g.add(k);
  }
}
/* Signatur-Elemente: machen die gewählte Richtung / den Schwerpunkt architektonisch sichtbar */
function addSignatur(g, slot, key, pal) {
  const pos = slot.pos, W = pos.w * CELL, D = pos.d * CELL, H = pos.h * FH;
  const col = ((ST.schwerpunkte || {})[key] || (ST.richtungen || {})[key] || {}).farbe || "#ffffff";
  const cm = new THREE.MeshStandardMaterial({ color: new THREE.Color(col), roughness: 0.55 });
  const faceZ = Math.abs(pos.z) < 0.01 ? 1 : (pos.z >= 0 ? 1 : -1);
  const band = new THREE.Mesh(new THREE.BoxGeometry(W + 0.06, 0.1, 0.06), cm); // Zierband an der Traufkante
  band.position.set(0, H - 0.16, faceZ * (D / 2 + 0.02));
  if (faceZ < 0) band.rotation.y = Math.PI;
  g.add(band);
  const typ = { DeNC: "rund", ekn: "rund", HEA: "gruen", klin: "gruen", SEOP: "glas", swo: "glas" }[key];
  if (typ === "rund") { // Rundfenster — Observatoriums-Motiv
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.16, 0.23, 20), cm);
    ring.position.set(0, H * 0.84, faceZ * (D / 2 + 0.02));
    const glasR = new THREE.Mesh(new THREE.CircleGeometry(0.17, 20), windowMat());
    glasR.position.set(0, H * 0.84, faceZ * (D / 2 + 0.014));
    for (const el of [ring, glasR]) { if (faceZ < 0) el.rotation.y = Math.PI; g.add(el); }
  } else if (typ === "gruen") { // Pflanzkästen — Gesundheits-/Therapiegarten-Motiv
    const nWin = Math.max(1, Math.round(pos.w));
    for (let i = 0; i < nWin; i++) {
      const fx = (i - (nWin - 1) / 2) * (W / nWin);
      const kasten = new THREE.Mesh(new RoundedBoxGeometry(0.66, 0.14, 0.16, 2, 0.04), cm);
      kasten.position.set(fx, H * 0.55 - 0.62, faceZ * (D / 2 + 0.1));
      g.add(kasten);
      for (let b = 0; b < 3; b++) {
        const bl = new THREE.Mesh(new THREE.IcosahedronGeometry(0.055, 0), new THREE.MeshBasicMaterial({ color: [0xe4572e, 0xf3d34e, 0xffffff][b] }));
        bl.position.set(fx + (b - 1) * 0.18, H * 0.55 - 0.5, faceZ * (D / 2 + 0.1));
        g.add(bl);
      }
    }
  } else if (typ === "glas") { // Glasband mit Metallleiste — Atrium-/Office-Motiv
    const gb = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.82, 0.3), windowMat());
    gb.position.set(0, H * 0.87, faceZ * (D / 2 + 0.012));
    const leiste = new THREE.Mesh(new THREE.BoxGeometry(W * 0.85, 0.05, 0.05),
      new THREE.MeshStandardMaterial({ color: new THREE.Color(col), metalness: 0.55, roughness: 0.35 }));
    leiste.position.set(0, H * 0.72, faceZ * (D / 2 + 0.03));
    for (const el of [gb, leiste]) { if (faceZ < 0) el.rotation.y = Math.PI; g.add(el); }
  }
}
/* Stützpfeiler: vom Blockboden bis auf das tragende Niveau (oder den Boden) */
function addStuetzen(g, slot, mat) {
  const W = slot.pos.w * CELL, D = slot.pos.d * CELL;
  const len = floorBase(slot.pos.y) - 0.24;
  if (len < 0.4) return;
  const grp = new THREE.Group(); grp.name = "stuetzen";
  for (const [px, pz] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, len, 8), mat);
    p.position.set(px * (W / 2 - 0.18), -len / 2, pz * (D / 2 - 0.18));
    grp.add(p);
  }
  if (len > 2.2) { // Querstrebe für lange Stelzen — wirkt konstruktiv statt gestapelt
    for (const pz of [-1, 1]) {
      const q = new THREE.Mesh(new THREE.BoxGeometry(W - 0.3, 0.09, 0.09), mat);
      q.position.set(0, -len * 0.55, pz * (D / 2 - 0.18));
      grp.add(q);
    }
  }
  g.add(grp);
}

function prismGeometry(w, d, h) { // Satteldach entlang x
  const hw = w / 2, hd = d / 2;
  const g = new THREE.BufferGeometry();
  const v = [
    -hw, 0, -hd, hw, 0, -hd, hw, 0, hd, -hw, 0, hd, // Basis
    -hw, h, 0, hw, h, 0 // First
  ];
  const idx = [0, 1, 5, 0, 5, 4, 3, 4, 5, 3, 5, 2, 0, 4, 3, 1, 2, 5, 0, 3, 2, 0, 2, 1];
  g.setAttribute("position", new THREE.Float32BufferAttribute(v, 3));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}

function buildBlockMesh(slot, opts = {}) {
  const p = opts.state || S.placed[S.mode][slot.slot] || {};
  const stil = p.stil || "klassisch";
  const base = colFor(slot, opts.state);
  const pal = palFor(slot.haus);
  const g = new THREE.Group();
  const pos = slot.pos;
  const W = pos.w * CELL, D = pos.d * CELL;
  let H = pos.h * FH;
  if (slot.form === "wing") H = 1.7 * FH;
  const mat = styleMat(base, stil);
  let main;
  const rb = (w, h, d, r = 0.09) => new RoundedBoxGeometry(w, h, d, 2, r);

  const roofMat = () => {
    const c = pal.dach ? roofDarken(base).lerp(new THREE.Color(pal.dach), 0.6) : roofDarken(base);
    return new THREE.MeshStandardMaterial({ color: c, roughness: 0.8, flatShading: true, side: THREE.DoubleSide });
  };
  if (slot.form === "slab" || slot.form === "step") {
    main = new THREE.Mesh(rb(W, H, D, 0.07), mat);
    main.position.y = H / 2;
    g.add(main);
    // Sockel ragt in den Boden: unterirdischer Kellerteil + sichtbare Fundamentlippe
    const ug = new THREE.Mesh(new THREE.BoxGeometry(W, KELLER_T, D), betonMat.clone());
    ug.position.y = -KELLER_T / 2 + 0.02;
    ug.userData.noShadow = true; ug.userData.nopick = true; // unterirdisch: kein Schatten, kein Raycast durchs Terrain
    g.add(ug);
    const lip = new THREE.Mesh(new THREE.BoxGeometry(W + 0.16, 0.16, D + 0.16), betonMat.clone());
    lip.position.y = 0.08;
    lip.receiveShadow = true;
    g.add(lip);
    if (slot.form === "step") { // Porch am IPS: Haustür, Pfosten, Vordach, Stufen
      const woodMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(pal.holz), roughness: 0.9 });
      const door = new THREE.Mesh(new THREE.PlaneGeometry(0.92, 1.5), new THREE.MeshStandardMaterial({ color: 0x5a3d26, roughness: 0.8 }));
      door.position.set(0, H + 0.75, -D / 2 + 0.02);
      g.add(door);
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshStandardMaterial({ color: 0xd9b23e, metalness: 0.7, roughness: 0.35 }));
      knob.position.set(0.3, H + 0.68, -D / 2 + 0.06);
      g.add(knob);
      for (const px of [-1, 1]) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 1.9, 8), woodMat);
        post.position.set(px * (W / 2 - 0.16), H + 0.95, D / 2 - 0.16);
        g.add(post);
      }
      const canopy = new THREE.Mesh(prismGeometry(W * 1.14, D * 1.25, 0.42), roofMat());
      canopy.position.y = H + 1.9;
      g.add(canopy);
      for (let s = 0; s < 2; s++) { // Stufen hinunter zum Gartenweg
        const tread = new THREE.Mesh(new THREE.BoxGeometry(W * 0.55, H * (2 - s) / 3, 0.34), betonMat.clone());
        tread.position.set(0, (H * (2 - s) / 3) / 2, D / 2 + 0.17 + s * 0.34);
        tread.receiveShadow = true;
        g.add(tread);
      }
    }
  } else if (slot.form === "roof") {
    main = new THREE.Mesh(prismGeometry(W, D, H * 0.72), roofMat());
    g.add(main);
    const chimney = new THREE.Mesh(rb(0.55, 1.25, 0.55, 0.05), styleMat(base, stil));
    chimney.position.set(W * 0.28, H * 0.62, 0); g.add(chimney);
    /* AIAS-5-Artefakt der neuen Bachelorarbeit: sichtbar auf dem Dach */
    if (p.artefakt === "agent") { // Antennenmast mit Schüssel — der agentische Rechercheworkflow funkt
      const metall = new THREE.MeshStandardMaterial({ color: 0x9aa2b5, metalness: 0.6, roughness: 0.35 });
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 1.35, 6), metall);
      mast.position.set(-W * 0.26, H * 0.72 + 0.62, 0); g.add(mast);
      const quer = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 5), metall);
      quer.rotation.z = Math.PI / 2; quer.position.set(-W * 0.26, H * 0.72 + 1.05, 0); g.add(quer);
      const dish = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.4), new THREE.MeshStandardMaterial({ color: 0xe8e4da, metalness: 0.3, roughness: 0.4, side: THREE.DoubleSide }));
      dish.rotation.x = Math.PI * 0.62; dish.position.set(-W * 0.26, H * 0.72 + 0.78, 0.16); g.add(dish);
    } else if (p.artefakt === "app") { // glänzendes Panel auf der Dachschräge — die vibe-coded App leuchtet
      const slope = Math.atan2(H * 0.72, D / 2);
      const panel = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.05, 0.7), new THREE.MeshStandardMaterial({ color: 0x14224a, roughness: 0.2, metalness: 0.45, emissive: 0x2a6cd4, emissiveIntensity: 0.18 }));
      panel.rotation.x = -slope;
      panel.position.set(-W * 0.24, H * 0.4, D * 0.26); g.add(panel);
      const rahmen = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.03, 0.8), new THREE.MeshStandardMaterial({ color: 0xf2f0e9, roughness: 0.6 }));
      rahmen.rotation.x = -slope;
      rahmen.position.set(-W * 0.24, H * 0.38, D * 0.26); g.add(rahmen);
      windowMats.push(panel.material);
    }
  } else if (slot.form === "spire") {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(W * CELL * 0.42, H, 4), roofMat());
    cone.rotation.y = Math.PI / 4; cone.position.y = H / 2; g.add(cone); main = cone;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.5, 6), new THREE.MeshStandardMaterial({ color: 0x888, roughness: 0.4, metalness: 0.7 }));
    pole.position.y = H + 0.7; g.add(pole);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.6), new THREE.MeshStandardMaterial({ color: new THREE.Color(pal.akzent), side: THREE.DoubleSide, roughness: 0.7 }));
    flag.position.set(0.58, H + 1.15, 0); flag.name = "flag"; g.add(flag);
  } else if (slot.form === "lantern") {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, H, 6), new THREE.MeshStandardMaterial({ color: 0x39415a, roughness: 0.6, metalness: 0.4 }));
    pole.position.y = H / 2; g.add(pole); main = pole;
    const lamp = new THREE.Mesh(new THREE.OctahedronGeometry(0.28, 0), new THREE.MeshStandardMaterial({ color: 0xffd98a, emissive: 0xffb347, emissiveIntensity: 0.15 }));
    lamp.position.y = H + 0.15; lamp.name = "lamp"; g.add(lamp);
    windowMats.push(lamp.material);
  } else { // box, bay, tower, wing
    main = new THREE.Mesh(rb(W, H, D, 0.1), mat);
    main.position.y = H / 2; g.add(main);
    // Fenster auf Aussenseite
    const outward = pos.z >= 0 ? 1 : -1;
    const faceZ = slot.haus && Math.abs(pos.z) < 0.01 ? 1 : outward;
    const wm = windowMat();
    const frameMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(pal.rahmen), roughness: 0.7 });
    const nWin = Math.max(1, Math.round(pos.w));
    const wy = H * 0.55;
    for (let i = 0; i < nWin; i++) {
      const fx = (i - (nWin - 1) / 2) * (W / nWin);
      const frame = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.0), frameMat);
      frame.position.set(fx, wy, faceZ * (D / 2 + 0.008));
      const win = new THREE.Mesh(new THREE.PlaneGeometry(0.64, 0.84), wm);
      win.position.set(fx, wy, faceZ * (D / 2 + 0.016));
      const mullH = new THREE.Mesh(new THREE.PlaneGeometry(0.64, 0.035), frameMat);
      mullH.position.set(fx, wy, faceZ * (D / 2 + 0.022));
      const mullV = new THREE.Mesh(new THREE.PlaneGeometry(0.035, 0.84), frameMat);
      mullV.position.set(fx, wy, faceZ * (D / 2 + 0.022));
      const sill = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.06, 0.1), frameMat);
      sill.position.set(fx, wy - 0.56, faceZ * (D / 2 + 0.04));
      for (const el of [frame, win, mullH, mullV, sill]) { if (faceZ < 0) el.rotation.y = Math.PI; g.add(el); }
    }
    if (slot.form === "bay" || slot.form === "wing") {
      const cap = new THREE.Mesh(prismGeometry(W * 1.06, D * 1.06, 0.5 * FH * 0.5), roofMat());
      cap.position.y = H; g.add(cap);
    }
    if (slot.form === "tower") {
      for (const [px, pz] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) {
        const pil = new THREE.Mesh(rb(0.22, H, 0.22, 0.04), styleMat(base.clone().lerp(new THREE.Color(0xffffff), 0.25), stil));
        pil.position.set(px * (W / 2 - 0.08), H / 2, pz * (D / 2 - 0.08));
        g.add(pil);
      }
    }
  }
  /* Wahl-Architektur: Schwerpunkt-/Themen-Signatur macht den gewählten Pfad am Baustein sichtbar */
  const sigKey = (slot.schwerpunktwahl && p.sp) ? p.sp
    : (p.thema ? ((THEMEN[slot.slot] || []).find((th) => th.id === p.thema) || {}).r : null);
  if (sigKey && ["box", "bay"].includes(slot.form)) addSignatur(g, slot, sigKey, pal);
  /* Wahlpflicht (gold) vs. freie Wahl (weiss): Eckleiste an der Aussenkante */
  if (["box", "bay", "wing"].includes(slot.form) && (slot.kategorie === "Wahl" || slot.kategorie === "Wahlpflicht")) {
    const wpGold = slot.kategorie === "Wahlpflicht";
    const fz = Math.abs(pos.z) < 0.01 ? 1 : (pos.z >= 0 ? 1 : -1);
    const kante = new THREE.Mesh(new THREE.BoxGeometry(0.075, H * 0.86, 0.075),
      new THREE.MeshStandardMaterial({ color: wpGold ? 0xd9a441 : 0xffffff, roughness: 0.45, metalness: wpGold ? 0.5 : 0.05 }));
    kante.position.set(-(W / 2 - 0.02), H / 2, fz * (D / 2 - 0.02));
    g.add(kante);
  }
  /* Statik: Auskragendes wird sichtbar getragen — Konsolen am Turm, Stützen bis zum tragenden Niveau */
  if (["box", "bay", "tower"].includes(slot.form) && pos.y > 0) {
    const supMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(pal.holz).lerp(new THREE.Color(0x39415a), 0.35), roughness: 0.7, metalness: 0.15 });
    const maSteht = opts.placedMap ? !!opts.placedMap.MA : isPlaced("MA");
    const carried = isSupported(slot, opts.placedMap || null) || (KONSOLEN.has(slot.slot) && maSteht);
    if (KONSOLEN.has(slot.slot)) addKonsole(g, slot, supMat);
    if (!carried) addStuetzen(g, slot, supMat);
  }
  g.traverse((o) => { if (o.isMesh && !o.userData.noShadow) { o.castShadow = true; o.receiveShadow = true; } });
  const h = ST.haeuser[slot.haus];
  g.position.set(h.origin[0] + pos.x * CELL, floorBase(pos.y), h.origin[2] + pos.z * CELL);
  g.userData.slot = slot.slot;
  return g;
}

function addSparkle(group, slot) {
  if (group.getObjectByName("sparkle")) return;
  const sp = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), new THREE.MeshStandardMaterial({ color: 0xffd23e, emissive: 0xffb300, emissiveIntensity: 0.9 }));
  sp.name = "sparkle";
  const H = slot.pos.h * FH;
  sp.position.y = (slot.form === "roof" || slot.form === "spire" ? H : H) + 0.6;
  group.add(sp);
}
function removeSparkle(group) { const s = group.getObjectByName("sparkle"); if (s) group.remove(s); }

/* ---------- Quest-/Quiz-Belohnungen: Wimpel, Blumenkasten, Garten ---------- */
function addPennant(group, slot) {
  if (group.getObjectByName("pennant")) return;
  const g = new THREE.Group(); g.name = "pennant";
  const H = slot.pos.h * FH;
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.9, 6), new THREE.MeshStandardMaterial({ color: 0x8a6642, roughness: 0.8 }));
  pole.position.y = H + 0.45;
  const flag = new THREE.Mesh(new THREE.BufferGeometry().setFromPoints ? (() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 0.55, -0.12, 0, 0, -0.24, 0], 3));
    geo.setIndex([0, 1, 2]); geo.computeVertexNormals(); return geo;
  })() : new THREE.PlaneGeometry(0.5, 0.25), new THREE.MeshStandardMaterial({ color: 0xd9a441, side: THREE.DoubleSide, roughness: 0.7 }));
  flag.position.set(0.03, H + 0.85, 0); flag.name = "pflag";
  g.add(pole, flag);
  g.position.set(slot.pos.w * CELL * 0.38, 0, slot.pos.d * CELL * 0.38);
  group.add(g);
}
function addFlowerBox(group, slot) {
  if (group.getObjectByName("flowerbox") || !["box", "bay", "wing", "tower"].includes(slot.form)) return;
  const g = new THREE.Group(); g.name = "flowerbox";
  const D = slot.pos.d * CELL, H = slot.pos.h * FH;
  const faceZ = slot.pos.z >= 0 ? 1 : -1;
  const box = new THREE.Mesh(new RoundedBoxGeometry(0.7, 0.16, 0.18, 2, 0.04), new THREE.MeshStandardMaterial({ color: 0x8a6642, roughness: 0.9 }));
  box.position.set(0, H * 0.55 - 0.45, faceZ * (D / 2 + 0.1));
  g.add(box);
  [0xe4572e, 0xf3d34e, 0xc9a0ff].forEach((c, i) => {
    const bl = new THREE.Mesh(new THREE.IcosahedronGeometry(0.07, 0), new THREE.MeshBasicMaterial({ color: c }));
    bl.position.set((i - 1) * 0.2, H * 0.55 - 0.33, faceZ * (D / 2 + 0.1));
    g.add(bl);
  });
  group.add(g);
}
/* Meister-Upgrade: Quiz UND Praxis-Quest erfüllt → sichtbares Architektur-Element je nach Bausteinform */
function addUpgrade(group, slot) {
  if (group.getObjectByName("upgrade")) return;
  const g = new THREE.Group(); g.name = "upgrade";
  const W = slot.pos.w * CELL, D = slot.pos.d * CELL, H = slot.pos.h * FH;
  const holz = new THREE.MeshStandardMaterial({ color: 0x3d5a3d, roughness: 0.85 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xd9a441, metalness: 0.75, roughness: 0.3 });
  const gruen = new THREE.MeshStandardMaterial({ color: 0x4e9440, roughness: 1, flatShading: true });
  if (["box", "tower"].includes(slot.form)) { // Fensterläden an jedem Fenster der Aussenseite
    const outward = slot.pos.z >= 0 ? 1 : -1;
    const faceZ = slot.haus && Math.abs(slot.pos.z) < 0.01 ? 1 : outward;
    const nWin = Math.max(1, Math.round(slot.pos.w));
    for (let i = 0; i < nWin; i++) {
      const fx = (i - (nWin - 1) / 2) * (W / nWin);
      for (const s of [-1, 1]) {
        const laden = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.98, 0.03), holz);
        laden.position.set(fx + s * 0.52, H * 0.55, faceZ * (D / 2 + 0.02));
        if (faceZ < 0) laden.rotation.y = Math.PI;
        g.add(laden);
      }
    }
  } else if (slot.form === "bay" || slot.form === "wing") { // Efeu an der Vorderkante
    for (let i = 0; i < 5; i++) {
      const blatt = new THREE.Mesh(new THREE.IcosahedronGeometry(0.16 + (i % 3) * 0.05, 0), gruen);
      blatt.position.set(W * 0.42, H * (0.15 + i * 0.18), D / 2 + 0.06);
      g.add(blatt);
    }
  } else if (slot.form === "slab" || slot.form === "step") { // Büsche an der Fundamentlippe
    for (const px of [-1, 1]) {
      const busch = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 0), gruen);
      busch.position.set(px * (W / 2 - 0.4), 0.3, D / 2 + 0.34);
      g.add(busch);
    }
  } else if (slot.form === "roof") { // goldene Wetterfahne auf dem First
    const stab = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.7, 6), gold);
    stab.position.set(-W * 0.3, H * 0.72 + 0.35, 0);
    const hahn = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.34, 4), gold);
    hahn.rotation.z = -Math.PI / 2; hahn.position.set(-W * 0.3 + 0.16, H * 0.72 + 0.62, 0); hahn.name = "flag";
    g.add(stab, hahn);
  } else { // spire, lantern: goldene Kugel
    const kugel = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), gold);
    kugel.position.y = slot.pos.h * FH + (slot.form === "spire" ? 1.55 : 0.5);
    g.add(kugel);
  }
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  group.add(g);
}
function decorateBlock(group, slot) {
  const code = slot.optionen ? ((S.placed[S.mode][slot.slot] || {}).opt || slot.code) : slot.code;
  const questDone = S.quests[slot.slot] && S.quests[slot.slot].done;
  if (S.quiz[code]) addPennant(group, slot);
  if (questDone) { addSparkle(group, slot); addFlowerBox(group, slot); }
  if (S.quiz[code] && questDone) addUpgrade(group, slot);
}
const gardenGroup = new THREE.Group(); scene.add(gardenGroup);
function rebuildGarden() {
  gardenGroup.clear();
  const n = Object.values(S.quiz).filter(Boolean).length + Object.values(S.quests).filter((q) => q.done).length;
  const wood = new THREE.MeshStandardMaterial({ color: 0x8a6642, roughness: 0.9 });
  if (n >= 5) { // Gartenbank am Weg
    const bank = new THREE.Group();
    const sitz = new THREE.Mesh(new RoundedBoxGeometry(1.5, 0.1, 0.45, 2, 0.03), wood); sitz.position.y = 0.45;
    const lehne = new THREE.Mesh(new RoundedBoxGeometry(1.5, 0.5, 0.08, 2, 0.03), wood); lehne.position.set(0, 0.72, -0.2);
    const f1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.45, 0.4), wood); f1.position.set(-0.6, 0.22, 0);
    const f2 = f1.clone(); f2.position.x = 0.6;
    bank.add(sitz, lehne, f1, f2);
    bank.position.set(0, 0.24, 4.2); bank.rotation.y = Math.PI;
    bank.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    gardenGroup.add(bank);
  }
  if (n >= 10) { // Sonnenkollektor
    const sp = new THREE.Group();
    const panel = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.06, 1.1), new THREE.MeshStandardMaterial({ color: 0x1b2c50, roughness: 0.25, metalness: 0.5 }));
    panel.rotation.x = -0.5; panel.position.y = 0.7;
    const fuss = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.7, 6), new THREE.MeshStandardMaterial({ color: 0x9aa2b5 }));
    fuss.position.y = 0.35;
    sp.add(panel, fuss);
    sp.position.set(-4, 0.24, 6); sp.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    gardenGroup.add(sp);
  }
  if (n >= 15) { // Fahnenmast mit UZH-blauer Fahne
    const fm = new THREE.Group();
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 5, 8), new THREE.MeshStandardMaterial({ color: 0xd8dce6, roughness: 0.4, metalness: 0.6 }));
    mast.position.y = 2.5;
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.8), new THREE.MeshStandardMaterial({ color: 0x0028a5, side: THREE.DoubleSide }));
    fl.position.set(0.72, 4.4, 0); fl.name = "flag";
    fm.add(mast, fl);
    fm.position.set(4.5, 0.24, 6); fm.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    gardenGroup.add(fm);
  }
  if (n >= 20) { // Brunnen
    const br = new THREE.Group();
    const becken = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1, 0.4, 14), new THREE.MeshStandardMaterial({ color: 0xb9c0cf, roughness: 0.8, flatShading: true }));
    becken.position.y = 0.2;
    const wasser = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.78, 0.06, 14), new THREE.MeshStandardMaterial({ color: 0x6db3d9, roughness: 0.15, metalness: 0.2 }));
    wasser.position.y = 0.4;
    const saeule = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.8, 8), becken.material);
    saeule.position.y = 0.7;
    br.add(becken, wasser, saeule);
    br.position.set(0, 0.24, -5.2); br.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    gardenGroup.add(br);
  }
  if (n >= 28) { // Gewächshaus neben dem Beet
    const gh = new THREE.Group();
    const glas = new THREE.MeshStandardMaterial({ color: 0xbdd9e8, roughness: 0.15, metalness: 0.25, transparent: true, opacity: 0.55 });
    const korpus = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.2, 1.5), glas);
    korpus.position.y = 0.6;
    const dach = new THREE.Mesh(prismGeometry(2.3, 1.6, 0.55), glas);
    dach.position.y = 1.2;
    const beetIn = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.2, 1), new THREE.MeshStandardMaterial({ color: 0x6b5138, roughness: 1 }));
    beetIn.position.y = 0.12;
    gh.add(korpus, dach, beetIn);
    gh.position.set(1.2, 0.24, 8.4);
    gardenGroup.add(gh);
  }
  if (n >= 40) { // Pergola mit Kletterpflanzen am Gartenweg
    const pg = new THREE.Group();
    const wood = new THREE.MeshStandardMaterial({ color: 0x8a6642, roughness: 0.9 });
    for (const [px, pz] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) {
      const pf = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.8, 0.12), wood);
      pf.position.set(px * 1.1, 0.9, pz * 0.8);
      pg.add(pf);
    }
    for (let i = 0; i < 5; i++) {
      const latte = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.06, 0.12), wood);
      latte.position.set(0, 1.85, -0.8 + i * 0.4);
      pg.add(latte);
    }
    const gruen = new THREE.MeshStandardMaterial({ color: 0x4e9440, roughness: 1, flatShading: true });
    [[-1.1, 1.2, 0.8], [1.1, 1.5, -0.8], [0, 1.9, 0]].forEach(([x, y, z]) => {
      const ranke = new THREE.Mesh(new THREE.IcosahedronGeometry(0.28, 0), gruen);
      ranke.position.set(x, y, z);
      pg.add(ranke);
    });
    pg.position.set(6.5, 0.24, 5.6);
    pg.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    gardenGroup.add(pg);
  }
}

/* ---------- Wahrzeichen: der gewählte Pfad wird zum Bauwerk ----------
   BSc: abgeleitete Interessensrichtung (ab 2 gleichen Themen-Tags) baut ein kleines
   Wahrzeichen neben dem Bachelor-Haus. MSc: Dominanz eines Schwerpunkts (≥4 von 6
   Vertiefungen) baut ein grosses Wahrzeichen neben dem Master-Haus. Gemischte
   Profile bleiben ehrlich gemischt — sie zeigen sich an den Bausteinen selbst. */
const wahrzeichenGroup = new THREE.Group(); scene.add(wahrzeichenGroup);
function wzSternwarte(colHex, gross) {
  const s = gross ? 1 : 0.72, g = new THREE.Group();
  const wand = new THREE.MeshStandardMaterial({ color: 0xe8e4da, roughness: 0.9 });
  const kup = new THREE.MeshStandardMaterial({ color: new THREE.Color(colHex).lerp(new THREE.Color(0x39415a), 0.35), roughness: 0.5, metalness: 0.3, flatShading: true });
  const basis = new THREE.Mesh(new THREE.CylinderGeometry(1.15 * s, 1.25 * s, 1.5 * s, 14), wand);
  basis.position.y = 0.75 * s; g.add(basis);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(1.18 * s, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.52), kup);
  dome.position.y = 1.5 * s; g.add(dome);
  const spalt = new THREE.Mesh(new THREE.BoxGeometry(0.28 * s, 1.05 * s, 0.1), new THREE.MeshStandardMaterial({ color: 0x141c38, roughness: 0.4 }));
  spalt.position.set(0, 1.95 * s, 0.82 * s); spalt.rotation.x = -0.62; g.add(spalt);
  const rohr = new THREE.Mesh(new THREE.CylinderGeometry(0.1 * s, 0.14 * s, 1.15 * s, 10), new THREE.MeshStandardMaterial({ color: 0x9aa2b5, metalness: 0.6, roughness: 0.3 }));
  rohr.position.set(0, 2.2 * s, 0.55 * s); rohr.rotation.x = -0.7; g.add(rohr);
  const tuer = new THREE.Mesh(new THREE.PlaneGeometry(0.5 * s, 0.9 * s), new THREE.MeshStandardMaterial({ color: 0x5a3d26, roughness: 0.85 }));
  tuer.position.set(0, 0.45 * s, 1.21 * s); g.add(tuer);
  return g;
}
function wzGarten(colHex, gross) {
  const s = gross ? 1 : 0.72, g = new THREE.Group();
  const holz = new THREE.MeshStandardMaterial({ color: 0x8a6642, roughness: 0.9 });
  const gruen = new THREE.MeshStandardMaterial({ color: 0x4e9440, roughness: 1, flatShading: true });
  for (const [px, pz] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) { // Pavillon
    const pf = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2 * s, 0.12), holz);
    pf.position.set(px * 1.05 * s, s, pz * 1.05 * s); g.add(pf);
  }
  const dach = new THREE.Mesh(new THREE.ConeGeometry(1.8 * s, 0.7 * s, 4), new THREE.MeshStandardMaterial({ color: new THREE.Color(colHex).lerp(new THREE.Color(0x39415a), 0.25), roughness: 0.8, flatShading: true }));
  dach.rotation.y = Math.PI / 4; dach.position.y = 2.3 * s; g.add(dach);
  const bank = new THREE.Mesh(new RoundedBoxGeometry(1.15 * s, 0.09, 0.4 * s, 2, 0.03), holz);
  bank.position.y = 0.42 * s; g.add(bank);
  for (const f of [-1, 1]) { const fu = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.4 * s, 0.34 * s), holz); fu.position.set(f * 0.45 * s, 0.2 * s, 0); g.add(fu); }
  for (const bx of [-1, 1]) { // Beete mit Blüten in Signaturfarbe
    const beet = new THREE.Mesh(new RoundedBoxGeometry(1.5 * s, 0.2, 0.6 * s, 2, 0.05), new THREE.MeshStandardMaterial({ color: 0x6b5138, roughness: 1 }));
    beet.position.set(bx * 1.9 * s, 0.1, 0.4 * s); g.add(beet);
    for (let i = 0; i < 4; i++) {
      const bl = new THREE.Mesh(new THREE.IcosahedronGeometry(0.09 * s, 0), new THREE.MeshBasicMaterial({ color: i % 2 ? new THREE.Color(colHex) : new THREE.Color(0xffffff) }));
      bl.position.set(bx * 1.9 * s - 0.5 * s + i * 0.34 * s, 0.3, 0.4 * s); g.add(bl);
      const st = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.2, 5), gruen);
      st.position.set(bx * 1.9 * s - 0.5 * s + i * 0.34 * s, 0.2, 0.4 * s); g.add(st);
    }
  }
  const lat = new THREE.Mesh(new THREE.OctahedronGeometry(0.16 * s, 0), new THREE.MeshStandardMaterial({ color: 0xffd98a, emissive: 0xffb347, emissiveIntensity: 0.25 }));
  lat.position.set(0, 1.75 * s, 1.05 * s); g.add(lat); windowMats.push(lat.material);
  return g;
}
function wzAtrium(colHex, gross) {
  const s = gross ? 1 : 0.72, g = new THREE.Group();
  const glas = new THREE.MeshStandardMaterial({ color: 0xbdd9e8, roughness: 0.12, metalness: 0.3, transparent: true, opacity: 0.5 });
  const metall = new THREE.MeshStandardMaterial({ color: new THREE.Color(colHex), metalness: 0.6, roughness: 0.3 });
  const kubus = new THREE.Mesh(new THREE.BoxGeometry(2.4 * s, 1.9 * s, 2.4 * s), glas);
  kubus.position.y = 0.95 * s; g.add(kubus);
  for (const [px, pz] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) { // Rahmenkanten
    const k = new THREE.Mesh(new THREE.BoxGeometry(0.09, 1.9 * s, 0.09), metall);
    k.position.set(px * 1.2 * s, 0.95 * s, pz * 1.2 * s); g.add(k);
  }
  const deckel = new THREE.Mesh(new THREE.BoxGeometry(2.6 * s, 0.12, 2.6 * s), metall);
  deckel.position.y = 1.95 * s; g.add(deckel);
  const tisch = new THREE.Mesh(new THREE.CylinderGeometry(0.5 * s, 0.5 * s, 0.06, 12), new THREE.MeshStandardMaterial({ color: 0xf2f0e9, roughness: 0.6 }));
  tisch.position.y = 0.5 * s; g.add(tisch);
  const fuss = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, 0.5 * s, 8), metall);
  fuss.position.y = 0.25 * s; g.add(fuss);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.5;
    const stuhl = new THREE.Mesh(new RoundedBoxGeometry(0.3 * s, 0.34 * s, 0.3 * s, 2, 0.05), new THREE.MeshStandardMaterial({ color: 0xd9a441, roughness: 0.8 }));
    stuhl.position.set(Math.cos(a) * 0.85 * s, 0.17 * s, Math.sin(a) * 0.85 * s); g.add(stuhl);
  }
  return g;
}
function rebuildWahrzeichen() {
  wahrzeichenGroup.clear();
  if (!S.wzSeen) S.wzSeen = { frei: [], serious: [] };
  const items = [];
  const br = bscRichtung();
  if (br.r && ST.richtungen[br.r]) {
    const mk = { klin: wzGarten, ekn: wzSternwarte, swo: wzAtrium }[br.r];
    items.push({ key: "bsc:" + br.r, x: -17.5, z: -8.5, rot: 0.5, mesh: mk(ST.richtungen[br.r].farbe, false), name: t("wz_" + br.r) });
  }
  const mp = mscProfil();
  if (mp.dom && ST.schwerpunkte[mp.dom]) {
    const mk = { DeNC: wzSternwarte, HEA: wzGarten, SEOP: wzAtrium }[mp.dom];
    items.push({ key: "msc:" + mp.dom, x: 20.5, z: -9, rot: -0.5, mesh: mk(ST.schwerpunkte[mp.dom].farbe, true), name: t("wz_" + mp.dom) });
  }
  for (const it of items) {
    it.mesh.position.set(it.x, 0.24, it.z);
    it.mesh.rotation.y = it.rot;
    it.mesh.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    wahrzeichenGroup.add(it.mesh);
    if (!visitor.active && !S.wzSeen[S.mode].includes(it.key)) {
      S.wzSeen[S.mode].push(it.key); save();
      burstConfetti(it.x, 4, it.z, 70, 3);
      toast("🏛 " + t("wz_neu") + " " + it.name);
      SND.fanfare();
    }
  }
}

/* ---------- Geist-Vorschau ---------- */
let ghost = null, ghostSlot = null, ghostOK = false;
function showGhost(slot) {
  clearGhost();
  ghostSlot = slot;
  const chk = canPlace(slot);
  ghostOK = chk.ok;
  ghost = buildBlockMesh(slot, { state: { stil: "klassisch" } });
  ghost.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = false; o.receiveShadow = false;
      o.material = new THREE.MeshStandardMaterial({ color: chk.ok ? 0x2ecc71 : 0xd94f4f, transparent: true, opacity: 0.45, depthWrite: false });
    }
  });
  scene.add(ghost);
}
function clearGhost() { if (ghost) { scene.remove(ghost); ghost = null; ghostSlot = null; } }

/* ---------- Partikel: Staub, Konfetti, Ambient ---------- */
function burstDust(x, y, z) {
  const n = 14, geo = new THREE.SphereGeometry(0.09, 5, 4);
  const mat = new THREE.MeshBasicMaterial({ color: 0xd8cdb4, transparent: true, opacity: 0.85 });
  const im = new THREE.InstancedMesh(geo, mat, n);
  const vel = [];
  const m4 = new THREE.Matrix4();
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    vel.push(new THREE.Vector3(Math.cos(a) * (1.2 + Math.random()), 0.6 + Math.random() * 0.8, Math.sin(a) * (1.2 + Math.random())));
    m4.setPosition(x, y, z); im.setMatrixAt(i, m4);
  }
  scene.add(im);
  const pos = Array.from({ length: n }, () => new THREE.Vector3(x, y, z));
  tween(0.7, (k) => {
    for (let i = 0; i < n; i++) {
      pos[i].addScaledVector(vel[i], 0.016);
      vel[i].y -= 0.05;
      const s = 1 - k;
      m4.makeScale(s, s, s); m4.setPosition(pos[i]);
      im.setMatrixAt(i, m4);
    }
    im.instanceMatrix.needsUpdate = true;
    mat.opacity = 0.85 * (1 - k);
  }, easeOutCubic, () => { scene.remove(im); geo.dispose(); mat.dispose(); });
}

function burstConfetti(cx, cy, cz, n = 140, spread = 6) {
  const geo = new THREE.PlaneGeometry(0.16, 0.26);
  const mat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, vertexColors: false, transparent: true });
  const im = new THREE.InstancedMesh(geo, mat, n);
  const palette = [0x0028a5, 0x3f6cc8, 0x0e8f7e, 0xd9a441, 0xd96a4b, 0x5e60ce, 0xffffff];
  const parts = [];
  for (let i = 0; i < n; i++) {
    im.setColorAt(i, new THREE.Color(palette[i % palette.length]));
    parts.push({
      p: new THREE.Vector3(cx, cy, cz),
      v: new THREE.Vector3((Math.random() - 0.5) * spread, 4 + Math.random() * 5, (Math.random() - 0.5) * spread),
      r: Math.random() * Math.PI, rs: (Math.random() - 0.5) * 8
    });
  }
  if (im.instanceColor) im.instanceColor.needsUpdate = true;
  scene.add(im);
  const m4 = new THREE.Matrix4(), e = new THREE.Euler();
  tween(2.6, (k) => {
    for (let i = 0; i < n; i++) {
      const pt = parts[i];
      pt.v.y -= 0.09; pt.p.addScaledVector(pt.v, 0.016); pt.r += pt.rs * 0.016;
      e.set(pt.r, pt.r * 0.7, pt.r * 0.3);
      m4.makeRotationFromEuler(e); m4.setPosition(pt.p);
      im.setMatrixAt(i, m4);
    }
    im.instanceMatrix.needsUpdate = true;
    mat.opacity = k > 0.75 ? 1 - (k - 0.75) / 0.25 : 1;
  }, (k) => k, () => { scene.remove(im); geo.dispose(); mat.dispose(); });
}

function shockRing(x, y, z, maxR) {
  const geo = new THREE.RingGeometry(0.42, 0.55, 40);
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75, side: THREE.DoubleSide, depthWrite: false });
  const ring = new THREE.Mesh(geo, mat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(x, y + 0.04, z);
  scene.add(ring);
  tween(0.55, (k) => {
    const s = 1 + k * maxR;
    ring.scale.set(s, s, 1);
    mat.opacity = 0.75 * (1 - k);
  }, easeOutCubic, () => { scene.remove(ring); geo.dispose(); mat.dispose(); });
}

function textSprite(txt, bg, fg = "#ffffff") {
  const c = document.createElement("canvas"); c.width = 256; c.height = 96;
  const x = c.getContext("2d");
  x.font = "800 44px Helvetica, Arial";
  const w = x.measureText(txt).width + 52;
  x.fillStyle = bg;
  x.beginPath(); x.roundRect((256 - w) / 2, 14, w, 68, 34); x.fill();
  x.fillStyle = fg; x.textAlign = "center"; x.textBaseline = "middle";
  x.fillText(txt, 128, 50);
  const tex = new THREE.CanvasTexture(c);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
  sp.scale.set(2.4, 0.9, 1);
  return sp;
}

function floatKompChips(g, slot) {
  const { haupt } = slotKomp(slot);
  const top = (slot.pos.h || 1) * FH + 0.4;
  (haupt || []).slice(0, 3).forEach((id, i) => {
    const k = KOMP[id]; if (!k) return;
    setTimeout(() => {
      const sp = textSprite("+" + id, ST.felder[k.feld].farbe);
      sp.position.set(g.position.x + (i - 1) * 0.7, g.position.y + top, g.position.z);
      scene.add(sp);
      const y0 = sp.position.y;
      tween(1.5, (kk) => {
        sp.position.y = y0 + kk * 2.1;
        sp.material.opacity = kk < 0.65 ? 1 : 1 - (kk - 0.65) / 0.35;
      }, easeOutCubic, () => { scene.remove(sp); sp.material.map.dispose(); sp.material.dispose(); });
    }, 240 + i * 200);
  });
}

/* Ambient-Partikel (Blätter/Schnee/Blüten) */
const AMB_N = 70;
const ambGeo = new THREE.PlaneGeometry(0.22, 0.22);
const ambMat = new THREE.MeshBasicMaterial({ color: 0xc97b3d, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
const amb = new THREE.InstancedMesh(ambGeo, ambMat, AMB_N);
const ambParts = Array.from({ length: AMB_N }, () => ({
  p: new THREE.Vector3((Math.random() - 0.5) * 70, Math.random() * 18 + 2, (Math.random() - 0.5) * 50),
  s: 0.4 + Math.random() * 0.9, ph: Math.random() * 6.28
}));
scene.add(amb); amb.visible = false;

/* ---------- Jahreszeit & Tageszeit ---------- */
const SEASONS = {
  fruehling: { bg: 0xcfe6f7, grass: 0x79b463, foliage: 0x8fce7a, amb: 0xf7b7d4, ambFall: 0.35, sun: 0xfff2d8, hemi: 0.8 },
  sommer:    { bg: 0xbfe0f5, grass: 0x6faf52, foliage: 0x4e9440, amb: null, ambFall: 0, sun: 0xffe9c4, hemi: 0.85 },
  herbst:    { bg: 0xe8d9c3, grass: 0x9a9a54, foliage: 0xc97b3d, amb: 0xc97b3d, ambFall: 0.9, sun: 0xffd9a0, hemi: 0.7 },
  winter:    { bg: 0xdfe6ee, grass: 0xe9edf4, foliage: 0x5e7a68, amb: 0xffffff, ambFall: 0.5, sun: 0xeef2ff, hemi: 0.65 }
};
const NIGHT = new THREE.Color(0x141c38);
function updateEnvironment() {
  const cfg = SEASONS[S.season] || SEASONS.sommer;
  const dayK = S.tod / 100; // 0 Morgen … 1 Nacht
  const nightK = Math.max(0, (dayK - 0.68) / 0.32);
  const ang = Math.PI * (0.12 + dayK * 0.82);
  sun.position.set(Math.cos(ang) * 40, Math.sin(ang) * 34 + 6, 18);
  sun.intensity = Math.max(0.05, Math.sin(Math.min(Math.PI, ang)) * 2.2) * (1 - nightK * 0.95);
  sun.color.set(cfg.sun).lerp(new THREE.Color(0xff9a5e), Math.pow(Math.abs(dayK - 0.5) * 2, 2) * 0.6);
  hemi.intensity = cfg.hemi * (1 - nightK * 0.75) + 0.12;
  const bg = new THREE.Color(cfg.bg).lerp(NIGHT, nightK);
  scene.background = bg; scene.fog.color.copy(bg);
  grassMat.color.set(cfg.grass).lerp(NIGHT, nightK * 0.55);
  foliageMat.color.set(cfg.foliage).lerp(NIGHT, nightK * 0.5);
  hillMat.color.set(cfg.grass).multiplyScalar(0.82).lerp(NIGHT, nightK * 0.6);
  cloudMat.color.set(0xffffff).lerp(new THREE.Color(0x39415a), nightK * 0.8);
  cloudMat.opacity = S.season === "winter" ? 0.98 : 0.9;
  stars.material.opacity = Math.max(0, nightK - 0.15) * 0.95;
  fireflies.material.opacity = nightK > 0.4 && (S.season === "sommer" || S.season === "fruehling") ? 0.9 : 0;
  flowers.visible = S.season === "sommer" || S.season === "fruehling";
  windowMats.forEach((m) => (m.emissiveIntensity = nightK > 0.25 ? 0.9 : 0));
  amb.visible = !!cfg.amb;
  if (cfg.amb) ambMat.color.set(cfg.amb);
  document.getElementById("todIcon").textContent = nightK > 0.3 ? "🌙" : dayK > 0.45 ? "🌤️" : "🌅";
  document.querySelectorAll("#envRow .envbtn[data-season]").forEach((b) => b.classList.toggle("on", b.dataset.season === S.season));
  const ea = document.getElementById("btnEnvAuto");
  if (ea) ea.classList.toggle("on", !!S.envAuto);
  SND.ambientMode(!S.sound ? "off" : nightK > 0.45 ? "night" : sun.intensity > 0.4 ? "day" : "off");
}

/* ---------- Avatar ---------- */
const avatar = new THREE.Group();
{
  const skin = new THREE.MeshStandardMaterial({ color: 0xe8b98a, roughness: 0.9 });
  const shirt = new THREE.MeshStandardMaterial({ color: 0x0028a5, roughness: 0.9 });
  const pants = new THREE.MeshStandardMaterial({ color: 0x39415a, roughness: 0.95 });
  const legL = new THREE.Mesh(new RoundedBoxGeometry(0.16, 0.42, 0.16, 2, 0.05), pants); legL.position.set(-0.11, 0.21, 0);
  const legR = legL.clone(); legR.position.x = 0.11;
  const body = new THREE.Mesh(new RoundedBoxGeometry(0.46, 0.55, 0.3, 2, 0.1), shirt); body.position.y = 0.68;
  const armL = new THREE.Mesh(new RoundedBoxGeometry(0.11, 0.4, 0.11, 2, 0.04), shirt); armL.position.set(-0.3, 0.72, 0);
  const armR = armL.clone(); armR.position.x = 0.3;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), skin); head.position.y = 1.12;
  const helmMat = new THREE.MeshStandardMaterial({ color: 0xf3c623, roughness: 0.5 });
  const helm = new THREE.Mesh(new THREE.SphereGeometry(0.21, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), helmMat); helm.position.y = 1.17;
  const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.27, 0.035, 14), helmMat); brim.position.y = 1.16;
  avatar.add(legL, legR, body, armL, armR, head, helm, brim);
  avatar.userData.legs = [legL, legR];
  avatar.userData.arms = [armL, armR];
  avatar.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  avatar.position.set(-5, 0.24, 6);
  scene.add(avatar);
}
let avatarWalk = null;
/* Der Bauarbeiter steht immer NEBEN dem Haus: Zielpunkte werden aus den
   Grundrissen (beide Häuser + Seitenflügel) an den nächstgelegenen Rand geschoben. */
function avatarClamp(x, z) {
  const rects = [];
  for (const hid of ["bsc", "msc"]) {
    const h = ST.haeuser[hid];
    rects.push({ cx: h.origin[0], cz: h.origin[2], hw: (h.breite * CELL) / 2 + 1.0, hd: (h.tiefe * CELL) / 2 + 1.0 });
  }
  if (isPlaced("600")) { // Seitenflügel Ost des MSc-Hauses
    const h = ST.haeuser.msc, p = SLOTS["600"].pos;
    rects.push({ cx: h.origin[0] + p.x * CELL, cz: h.origin[2] + p.z * CELL, hw: (p.w * CELL) / 2 + 0.9, hd: (p.d * CELL) / 2 + 0.9 });
  }
  for (let pass = 0; pass < 2; pass++) { // zwei Pässe: das Herausschieben aus dem Flügel darf nicht ins Haupthaus führen
    for (const r of rects) {
      const dx = x - r.cx, dz = z - r.cz;
      if (Math.abs(dx) < r.hw && Math.abs(dz) < r.hd) {
        if (r.hd - Math.abs(dz) <= r.hw - Math.abs(dx)) z = r.cz + (dz >= 0 ? r.hd : -r.hd);
        else x = r.cx + (dx >= 0 ? r.hw : -r.hw);
      }
    }
  }
  return [x, z];
}
const escHtml = (s) => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
function avatarGoTo(x, z, celebrate = false) {
  [x, z] = avatarClamp(x, z);
  const from = avatar.position.clone(), to = new THREE.Vector3(x, 0.24, z);
  const dist = from.distanceTo(to);
  avatar.lookAt(to.x, 0.24, to.z);
  avatarWalk = { k: 0 };
  tween(Math.min(2.2, 0.3 + dist * 0.09), (k) => {
    avatar.position.lerpVectors(from, to, k);
    avatar.position.y = 0.24 + Math.abs(Math.sin(k * dist * 2.2)) * 0.09;
  }, (k) => k, () => {
    avatarWalk = null; avatar.position.y = 0.24;
    avatar.userData.legs.forEach((l) => (l.rotation.x = 0));
    avatar.userData.arms.forEach((a) => (a.rotation.x = 0));
    if (celebrate) {
      tween(0.9, (k) => {
        avatar.position.y = 0.24 + Math.abs(Math.sin(k * Math.PI * 2)) * 0.5;
        avatar.userData.arms.forEach((a, i) => (a.rotation.z = (i ? 1 : -1) * Math.sin(k * Math.PI * 4) * 1.9));
      }, (k) => k, () => avatar.userData.arms.forEach((a) => (a.rotation.z = 0)));
    }
  });
}

/* ---------- Platzieren ---------- */
function rebuildAll() {
  windowMats.length = 0; // verwaiste Fenstermaterialien nicht endlos ansammeln
  Object.keys(blockMeshes).forEach((id) => { blockGroup.remove(blockMeshes[id]); delete blockMeshes[id]; });
  Object.keys(S.placed[S.mode]).forEach((id) => {
    const slot = SLOTS[id]; if (!slot) return;
    const g = buildBlockMesh(slot);
    decorateBlock(g, slot);
    blockGroup.add(g); blockMeshes[id] = g;
  });
  rebuildGarden();
  rebuildWahrzeichen();
  mscPlotGroup.visible = true;
}
/* Blöcke direkt über dem veränderten Slot neu bauen: Stützen erscheinen/verschwinden korrekt */
function refreshDependents(slot) {
  for (const s of ST.slots) {
    if (s.haus !== slot.haus || s.slot === slot.slot || !isPlaced(s.slot)) continue;
    const above = s.pos.y === slot.pos.y + 1 || (slot.form === "wing" && s.pos.y <= 2);
    if (above && footOverlap(s.pos, slot.pos)) refreshBlock(s.slot);
    if (KONSOLEN.has(s.slot) && slot.slot === "MA") refreshBlock(s.slot);
  }
}
function placeSlot(slot) {
  const chk = canPlace(slot);
  if (!chk.ok) { SND.err(); toast(chk.reason || t("gesperrt")); return false; }
  const entry = { stil: pendingStil, sp: slot.schwerpunktwahl ? pendingSp : null, opt: slot.optionen ? pendingOpt : null, thema: THEMEN[slot.slot] ? pendingThema : null,
    frage: slot.slot === "BA" ? pendingFrage : null, artefakt: slot.slot === "BA" ? pendingArtefakt : null };
  S.placed[S.mode][slot.slot] = entry;
  save();
  const g = buildBlockMesh(slot);
  decorateBlock(g, slot);
  blockGroup.add(g); blockMeshes[slot.slot] = g;
  refreshDependents(slot);
  rebuildWahrzeichen();
  // Drop-Animation
  const endY = g.position.y;
  g.position.y = endY + 9;
  const inner = g;
  // Anticipation: wachsender Landeschatten, dann Drop
  const fp = Math.max(slot.pos.w, slot.pos.d) * CELL * 0.42;
  const blobMat = new THREE.MeshBasicMaterial({ color: 0x0a1230, transparent: true, opacity: 0.22, depthWrite: false });
  const blob = new THREE.Mesh(new THREE.CircleGeometry(fp, 22), blobMat);
  blob.rotation.x = -Math.PI / 2;
  blob.position.set(g.position.x, endY + 0.03, g.position.z);
  scene.add(blob);
  tween(0.14, (k) => blob.scale.setScalar(0.15 + 0.85 * k), easeOutCubic);
  tween(0.5 + 0.15, () => {}, (k) => k, () => { scene.remove(blob); blob.geometry.dispose(); blobMat.dispose(); });
  tween(0.5, (k) => { inner.position.y = endY + 10 * (1 - k); }, easeInQuad, () => {
    inner.position.y = endY;
    try {
      tween(0.22, (k) => {
        const sq = Math.sin(k * Math.PI);
        inner.scale.set(1 + sq * 0.09, 1 - sq * 0.14, 1 + sq * 0.09);
      }, (k) => k, () => inner.scale.set(1, 1, 1));
      tween(0.18, (k) => { inner.position.y = endY + Math.sin(k * Math.PI) * 0.07; }, (k) => k, () => { inner.position.y = endY; }); // Mikro-Bounce
      burstDust(g.position.x, endY + 0.1, g.position.z);
      if (slot.ects >= 8) shockRing(g.position.x, endY, g.position.z, Math.max(slot.pos.w, slot.pos.d) * CELL * 0.9); // grosse Steine dürfen beben
      floatKompChips(g, slot);
      SND.thock();
      if (!REDUCE_MOTION) { shakeT = 0.22; hitstopT = 0.07; }
      if (navigator.vibrate) { try { navigator.vibrate(12); } catch (e) {} }
    } catch (err) { console.error("juice", err); }
    checkMilestones();
  });
  const h = ST.haeuser[slot.haus];
  avatarGoTo(h.origin[0] + slot.pos.x * CELL + 2.6, h.origin[2] + slot.pos.z * CELL + 4);
  clearGhost();
  const { komp } = slotKomp(slot);
  renderPlan(); renderProfil([...(komp.fa || []), ...(komp.ki || []), ...(komp.fu || [])]);
  if (S.onboarded) openCard(slot.slot);
  else { // Erstbau: erst bauen, erklären später
    document.getElementById("coach").classList.remove("open");
    if (slot.slot !== "003") setTimeout(() => { // ohne Grundstein-Meilenstein käme das Onboarding sonst nie
      if (!S.onboarded && !visitor.active) { document.getElementById("obStart").textContent = t("tour_fertig"); openModal("onboard"); }
    }, 1400);
  }
  return true;
}
function removeSlot(id) {
  if (S.mode === "serious" && !confirm(t("entfernen_confirm"))) return;
  const dependents = ST.slots.filter((s) => isPlaced(s.slot) && (s.voraus || []).includes(id));
  if (dependents.length) { toast(t("grund_voraus") + dependents.map((d) => L(d.titel).split(",")[0]).slice(0, 2).join(" · ")); SND.err(); return; }
  delete S.placed[S.mode][id]; save();
  const g = blockMeshes[id];
  if (g) { blockGroup.remove(g); delete blockMeshes[id]; }
  refreshDependents(SLOTS[id]);
  rebuildWahrzeichen();
  renderPlan(); renderProfil(); closeCard();
}

/* ---------- Meilensteine ---------- */
function checkMilestones() {
  if (!S.msSeen) S.msSeen = { frei: [], serious: [] };
  const seen = S.msSeen[S.mode];
  for (const ms of ST.meilensteine) {
    if (seen.includes(ms.id)) continue;
    if (ms.slots.every((sl) => isPlaced(sl))) {
      seen.push(ms.id); save();
      triggerMilestone(ms);
      break;
    }
  }
}
function triggerMilestone(ms) {
  const h = ST.haeuser[ms.haus];
  const cx = h.origin[0], cz = h.origin[2];
  const big = ms.id === "bsc_fertig" || ms.id === "msc_fertig";
  flyTo(new THREE.Vector3(cx + (ms.haus === "bsc" ? -17 : 17), 12, 26), new THREE.Vector3(cx, 3.5, cz), 1.4, () => {
    burstConfetti(cx, 8, cz, big ? 220 : 120, big ? 10 : 6);
    SND.fanfare();
    if (big) {
      let i = 0;
      const iv = setInterval(() => {
        burstConfetti(cx + (Math.random() - 0.5) * 10, 9 + Math.random() * 4, cz + (Math.random() - 0.5) * 6, 80, 4);
        SND.firework();
        if (++i >= 3) clearInterval(iv);
      }, 450);
    }
    avatarGoTo(cx, cz + 6.5, true);
    setTimeout(() => {
      document.getElementById("msEmoji").textContent = big ? "🎆" : "🎉";
      document.getElementById("msTitle").textContent = L(ms.name);
      document.getElementById("msText").textContent = L(ms.text);
      document.getElementById("milestone").classList.add("open");
    }, big ? 1400 : 700);
  });
}
document.getElementById("msClose").onclick = () => {
  document.getElementById("milestone").classList.remove("open");
  if (!S.onboarded && !visitor.active) { // Erstbau-Sequenz: Erklärungen kommen NACH dem ersten Stein
    document.getElementById("obStart").textContent = t("tour_fertig");
    openModal("onboard");
  }
};

/* ---------- Raycast / Hover ---------- */
const ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
const tip = document.getElementById("tip");
let hoverId = null;
function pick(e) {
  const r = canvas.getBoundingClientRect();
  ptr.x = ((e.clientX - r.left) / r.width) * 2 - 1;
  ptr.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  ray.setFromCamera(ptr, camera);
  const objs = [...Object.values(blockMeshes)];
  if (ghost) objs.push(ghost);
  const hits = ray.intersectObjects(objs, true).filter((h) => !h.object.userData.nopick);
  if (!hits.length) return null;
  let o = hits[0].object;
  while (o && !o.userData.slot) o = o.parent;
  return o ? o.userData.slot : null;
}
function setGlow(id, on) {
  const g = blockMeshes[id]; if (!g) return;
  g.traverse((o) => {
    if (o.isMesh && o.material && o.material.emissive && !windowMats.includes(o.material)) {
      o.material.emissive.setHex(on ? 0x18306e : 0x000000);
      o.material.emissiveIntensity = on ? 0.35 : 0;
    }
  });
}
canvas.addEventListener("pointermove", (e) => {
  const id = pick(e);
  if (id !== hoverId) { setGlow(hoverId, false); setGlow(id, true); }
  hoverId = id;
  if (id && !visitor.active) {
    const slot = SLOTS[id];
    tip.style.display = "block";
    tip.style.left = e.clientX + 14 + "px"; tip.style.top = e.clientY + 14 + "px";
    const q = S.quests[id];
    tip.innerHTML = `<b>${slotTitel(slot)}</b><br>${slot.ects} ${t("ects")} · ${t("stufe")} ${slot.stufe}${q && q.done ? " · ✦" : ""}<br><span style="opacity:.72">${L(ST.gruppen[slot.gruppe].name)}</span>`;
    canvas.style.cursor = "pointer";
  } else { tip.style.display = "none"; canvas.style.cursor = "default"; }
});
let downAt = null;
canvas.addEventListener("pointerdown", (e) => { downAt = [e.clientX, e.clientY]; SND.unlock(); });
canvas.addEventListener("pointerup", (e) => {
  if (!downAt) return;
  const moved = Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]);
  downAt = null;
  if (moved > 6) return; // war Kamerabewegung
  if (interior) { // Kompetenz-Tafeln im Raum anklicken
    const r = canvas.getBoundingClientRect();
    ptr.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    ptr.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(ptr, camera);
    const hits = ray.intersectObjects(interior.group.children, true);
    for (const h of hits) {
      let o = h.object;
      while (o && !o.userData.kompId && !o.userData.info) o = o.parent;
      if (o && o.userData.info) { toast(L(o.userData.info)); SND.pick(); return; }
      if (o && o.userData.kompId) {
        const k = KOMP[o.userData.kompId];
        if (k) { toast(`${k.id} · ${L(k.name)} — «${L(k.ich)}»`); SND.pick(); }
        return;
      }
    }
    return;
  }
  { // Briefkasten, Minor-Beet & Bauhütte anklickbar
    const r = canvas.getBoundingClientRect();
    ptr.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    ptr.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(ptr, camera);
    // Hausblöcke als Occluder mitschneiden: nur wenn das NÄCHSTE Objekt eine Aktion trägt, zählt der Klick
    const hits = ray.intersectObjects([briefkasten, beetGroup, bauhuette, geraeteschuppen, blockGroup], true).filter((h) => !h.object.userData.nopick);
    if (hits.length) {
      let o = hits[0].object, act = null;
      while (o && !act) { act = o.userData.action || null; o = o.parent; }
      if (act === "p0") { openP0(); SND.pick(); return; }
      if (act === "minor") { openMinor(); SND.pick(); return; }
      if (act === "bauhuette") { openBauhuette(); SND.pick(); return; }
      if (act === "geraete") { openGeraete(); SND.pick(); return; }
    }
  }
  if (ghost && ghostSlot) {
    const id = pick(e);
    if (id === ghostSlot.slot || id === null) { placeSlot(ghostSlot); return; }
  }
  const id = pick(e);
  if (id) { openCard(id); SND.pick(); }
});
function openP0() {
  const list = document.getElementById("p0List");
  list.innerHTML = "";
  (ST.vorstufe || []).forEach((v, i) => {
    const lab = document.createElement("label"); lab.className = "sw"; lab.style.alignItems = "flex-start";
    lab.innerHTML = `<input type="checkbox" ${S.p0[i] ? "checked" : ""} style="margin-top:2px"> <span style="font-size:12.5px;line-height:1.45">${L(v.text)} <span style="color:#8b94ab">(${v.ids.join(", ")})</span></span>`;
    lab.querySelector("input").onchange = (e) => { S.p0[i] = e.target.checked; save(); renderProfil(); };
    list.appendChild(lab);
  });
  openModal("p0");
}
function openMinor() {
  const list = document.getElementById("minorList");
  list.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const lab = document.createElement("label"); lab.className = "sw";
    lab.innerHTML = `<input type="checkbox" ${S.minor[i] ? "checked" : ""}> <span>${t("minor_sem").replace("{n}", i + 1)}</span>`;
    lab.querySelector("input").onchange = (e) => { S.minor[i] = e.target.checked; save(); growMinor(); if (e.target.checked) SND.quest(); };
    list.appendChild(lab);
  }
  openModal("minor");
}
/* Bauhütte: Evidenz zu den 8 aktivierenden Lehrelementen (Quelle: TIC-Umsetzungsleitfaden §3) */
const BH_EV = {
  de: {
    ev: {
      PI: "Hake (1998, N≈6500): Lernzuwachs ~verdoppelt (⟨g⟩ .23 → .48) — skaliert exzellent auf Grossveranstaltungen.",
      LC: "KI-Antworten live prüfen verbindet kritisches Denken mit AI Literacy — der KI-Output ist das Übungsobjekt.",
      JT: "Kurzer Feedback-Loop vor der Sitzung: Die Lehre startet bei den häufigsten Fehlkonzepten statt bei Folie 1.",
      AC: "Richmond & Nicholls (2025, UNSW, N=363): rubrikbasierte KI-Kritik fördert Fach-, KI- und Informationskompetenz zugleich.",
      TB: "Kestin et al. (2025, Harvard-RCT): ~0.73 SD über aktivem Lernen — aber nur mit Hint-only-Design (nie die Lösung verraten).",
      RS: "Simulierte Klient:innen erlauben risikofreies Üben (deliberate practice) mit weniger Performanzangst.",
      TSQ: "Erst einzeln, dann im Team: höhere Leistung und weniger Prüfungsangst — in 200–300er-Klassen erprobt.",
      PD: "Verankert die KI-Spielregeln (deklarieren, dokumentieren, verifizieren) als wöchentliche Praxis statt Papier."
    },
    effort: `<b>Warum sich das anstrengender anfühlt — und trotzdem mehr bringt:</b> Aktives Lernen fühlt sich subjektiv mühsamer an als eine brillante Vorlesung, führt aber messbar zu mehr Lernen (Deslauriers et al., 2019). Und der Klassiker: Aktivierende Formate senken die Durchfallquoten deutlich (Freeman et al., 2014, Metaanalyse über 225 Studien).`,
    lit_titel: "Literatur"
  },
  en: {
    ev: {
      PI: "Hake (1998, N≈6,500): learning gains roughly doubled (⟨g⟩ .23 → .48) — scales excellently to large classes.",
      LC: "Checking AI answers live combines critical thinking with AI literacy — the AI output is the practice object.",
      JT: "A short pre-session feedback loop: teaching starts from the most common misconceptions, not from slide 1.",
      AC: "Richmond & Nicholls (2025, UNSW, N=363): rubric-based AI critique builds domain, AI and information literacy at once.",
      TB: "Kestin et al. (2025, Harvard RCT): ~0.73 SD above active learning — but only with a hint-only design (never reveal the solution).",
      RS: "Simulated clients enable risk-free deliberate practice with less performance anxiety.",
      TSQ: "Solo first, then as a team: higher performance and less test anxiety — proven in classes of 200–300.",
      PD: "Anchors the AI ground rules (declare, document, verify) as weekly practice instead of paper."
    },
    effort: `<b>Why this feels harder — and still teaches more:</b> active learning subjectively feels more effortful than a brilliant lecture, yet measurably produces more learning (Deslauriers et al., 2019). And the classic: active formats substantially cut failure rates (Freeman et al., 2014, meta-analysis of 225 studies).`,
    lit_titel: "References"
  },
  lit: `<ul style="font-size:11px;line-height:1.5">
    <li>Deslauriers, L., McCarty, L. S., Miller, K., Callaghan, K., & Kestin, G. (2019). Measuring actual learning versus feeling of learning in response to being actively engaged in the classroom. <i>PNAS, 116</i>(39), 19251–19257. <a href="https://doi.org/10.1073/pnas.1821936116" target="_blank" rel="noopener">doi.org/10.1073/pnas.1821936116</a></li>
    <li>Freeman, S., Eddy, S. L., McDonough, M., Smith, M. K., Okoroafor, N., Jordt, H., & Wenderoth, M. P. (2014). Active learning increases student performance in science, engineering, and mathematics. <i>PNAS, 111</i>(23), 8410–8415. <a href="https://doi.org/10.1073/pnas.1319030111" target="_blank" rel="noopener">doi.org/10.1073/pnas.1319030111</a></li>
    <li>Hake, R. R. (1998). Interactive-engagement versus traditional methods: A six-thousand-student survey of mechanics test data for introductory physics courses. <i>American Journal of Physics, 66</i>(1), 64–74. <a href="https://doi.org/10.1119/1.18809" target="_blank" rel="noopener">doi.org/10.1119/1.18809</a></li>
    <li>Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: An RCT introducing a novel research-based design in an authentic educational setting. <i>Scientific Reports, 15</i>, 17458. <a href="https://doi.org/10.1038/s41598-025-97652-6" target="_blank" rel="noopener">doi.org/10.1038/s41598-025-97652-6</a></li>
    <li>Richmond, J. L., & Nicholls, K. (2025). Using generative AI to promote psychological, feedback, and artificial intelligence literacies in undergraduate psychology. <i>Teaching of Psychology</i>. <a href="https://doi.org/10.1177/00986283241287203" target="_blank" rel="noopener">doi.org/10.1177/00986283241287203</a></li>
    <li>Crouch, C. H., & Mazur, E. (2001). Peer Instruction: Ten years of experience and results. <i>American Journal of Physics, 69</i>(9), 970–977. <a href="https://doi.org/10.1119/1.1374249" target="_blank" rel="noopener">doi.org/10.1119/1.1374249</a></li>
  </ul>`
};
function openBauhuette() {
  const EV = BH_EV[S.lang] || BH_EV.de;
  const order = ["PI", "LC", "JT", "AC", "TB", "RS", "TSQ", "PD"];
  document.getElementById("bhList").innerHTML = order.map((id) => {
    const d = ST.baukasten.defs[id]; if (!d) return "";
    return `<div class="bhrow"><b>${L(d.name)}</b><p>${L(d.kurz)}</p>${EV.ev[id] ? `<p class="bhev">📊 ${EV.ev[id]}</p>` : ""}</div>`;
  }).join("");
  document.getElementById("bhEffort").innerHTML = EV.effort;
  document.getElementById("bhLit").innerHTML = `<div class="subhead" style="margin:10px 0 4px;font:700 10.5px var(--font);text-transform:uppercase;letter-spacing:.5px;color:#5b6478">${EV.lit_titel}</div>` + BH_EV.lit;
  openModal("bauhuette");
}

/* Geräteschuppen: UZH-KI-Tool-Stack mit Reifegrad-Ampel — Quelle: KI-im-Curriculum-Kompass UZH (Ochsner, 16.07.2026), Stand Juli 2026 */
const GS_TOOLS = [
  { amp: "g", name: "Microsoft 365 Copilot Chat (Basic)",
    de: "Allgemeiner KI-Zugang für alle UZH-Angehörigen, in der M365-Lizenz enthalten. Freigegeben für öffentliche und interne Informationen; Verarbeitung in der Microsoft-Cloud (EU), Inhalte werden nicht fürs Modelltraining verwendet. Eigene Agents: derzeit nur eingeschränkt verlässlich.",
    en: "General AI access for all UZH members, included in the M365 licence. Approved for public and internal information; processed in the Microsoft cloud (EU), content is not used for model training. Own agents: currently only partially reliable." },
  { amp: "y", name: "KlickerUZH + AI Buddy (askUZH)",
    de: "Kursbezogene Chatbots, KI-Feedback und KI-generierte Übungsinhalte; Lehrende richten Bots im Self-Service ein und geben sie frei. Public Beta ab HS26; Zugang über Kurs-Login, nutzungsabhängige Kosten.",
    en: "Course-linked chatbots, AI feedback and AI-generated practice content; teachers configure and release bots via self-service. Public beta from autumn 2026; access via course login, usage-based costs." },
  { amp: "y", name: "OLAT-KI-Angebot",
    de: "Dialog mit freigegebenen OLAT-Kursinhalten (Materialien, Quizzes). Übergangslösung ab HS26, offizielle OLAT-Integration ab FS27 geplant — wichtig für die Skalierung, weil alle Fakultäten OLAT nutzen.",
    en: "Dialogue with released OLAT course content (materials, quizzes). Interim solution from autumn 2026, official OLAT integration planned for spring 2027 — key for scaling, as all faculties use OLAT." },
  { amp: "y", name: "BaltiBot",
    de: "Unterstützt Studienprogrammverantwortliche ab Sommer 2026 bei der Orientierung im Studienprogrammentwicklungs-Prozess (ISSP) — auf Basis einer kuratierten Dokumentensammlung.",
    en: "From summer 2026, supports programme directors in navigating the programme-development process (ISSP), based on a curated document collection." },
  { amp: "y", name: "EducationAI",
    de: "Intern getestete Anwendung für Lehrende: greift auf die Teaching Tools UZH zu und unterstützt Planung und Weiterentwicklung der Lehre (DPA mit dem LLM-Anbieter).",
    en: "Internally tested application for teachers: draws on the UZH Teaching Tools and supports planning and developing courses (DPA with the LLM provider)." },
  { amp: "r", name: "M365 Copilot Premium · GitHub Copilot",
    de: "Nur für Mitarbeitende mit kostenpflichtiger Zusatzlizenz. Ein studentischer Zugang zu einer KI-Entwicklungsumgebung (agentische KI, Vibe Coding) ist noch offen — für datennahe Profile relevant.",
    en: "Staff only, with a paid add-on licence. Student access to an AI development environment (agentic AI, vibe coding) is still open — relevant for data-oriented profiles." }
];
const GS_REGELN = {
  de: `<b>Spielregeln für alle Werkzeuge:</b> Studierende dürfen nicht zu kostenpflichtigen Tools oder Tools mit persönlicher Registrierung verpflichtet werden. Informationsklassen beachten: Prüfungen und akademische Arbeiten gelten als <b>vertraulich</b>, bestimmte psychologische Forschungs- und Klientendaten als <b>geheim</b> — sie gehören in kein nicht dafür freigegebenes KI-System. Nicht von der UZH bereitgestellte Tools nur mit öffentlichen Informationen verwenden.`,
  en: `<b>Ground rules for all tools:</b> students must not be required to use paid tools or tools needing personal registration. Mind the information classes: examinations and academic papers are <b>confidential</b>, certain psychological research and client data are <b>secret</b> — they belong in no AI system not approved for that class. Tools not provided by UZH may only be used with public information.`
};
function openGeraete() {
  const AMP = { g: "🟢", y: "🟡", r: "🔴" };
  document.getElementById("gsList").innerHTML = GS_TOOLS.map((tl) =>
    `<div class="bhrow"><b>${AMP[tl.amp]} ${escHtml(tl.name)}</b><p>${S.lang === "de" ? tl.de : tl.en}</p></div>`).join("");
  document.getElementById("gsRegeln").innerHTML = GS_REGELN[S.lang] || GS_REGELN.de;
  document.getElementById("gsQuelle").textContent = S.lang === "de"
    ? "Quelle: KI-im-Curriculum-Kompass UZH (Ochsner, 2026), Stand Juli 2026 — Angaben ändern sich laufend."
    : "Source: UZH AI-in-the-Curriculum Compass (Ochsner, 2026), as of July 2026 — details change continuously.";
  openModal("geraete");
}

window.addEventListener("keydown", (e) => {
  const typing = e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA");
  if (e.key === "Enter" && ghostSlot && !typing) placeSlot(ghostSlot);
  if (e.key === "Escape") {
    if (interior) { leaveRoom(); return; }
    document.getElementById("tutor").classList.remove("open");
    clearGhost(); closeCard();
    document.querySelectorAll(".modal.open").forEach((m) => m.classList.remove("open"));
  }
});

/* ---------- HUD: Bauplan ---------- */
const planList = document.getElementById("planList");
let selectedId = null;
function chipState(slot) {
  if (isPlaced(slot.slot)) return "built";
  return canPlace(slot).ok ? "avail" : "locked";
}
function nextRecommended() {
  for (const hausId of ["bsc", "msc"]) {
    for (const sem of ST.bauplan[hausId]) {
      for (const id of sem.slots) {
        const slot = SLOTS[id];
        if (!isPlaced(id) && canPlace(slot).ok) return id;
      }
    }
  }
  return null;
}
function renderPlan() {
  const nextId = visitor.active ? null : nextRecommended();
  const frag = document.createDocumentFragment();
  for (const hausId of ["bsc", "msc"]) {
    const h = document.createElement("div");
    h.className = "semblock";
    h.innerHTML = `<div class="semhead" style="font-size:12px;color:var(--blue)">${hausId === "bsc" ? "🏠 " + t("haus_bsc") : "🏰 " + t("haus_msc")}<span>${ectsSum(hausId)}/120 ${t("ects")}</span></div>`;
    frag.appendChild(h);
    for (const sem of ST.bauplan[hausId]) {
      if (!sem.slots.length) continue;
      const built = sem.slots.filter((id) => isPlaced(id)).length;
      const sb = document.createElement("div");
      sb.className = "semblock";
      sb.innerHTML = `<div class="semhead"><span>${t("sem")} ${sem.sem} · ${sem.hs ? t("hs") : t("fs")}</span><span class="semprog">${built}/${sem.slots.length}</span></div>`;
      for (const id of sem.slots) {
        const slot = SLOTS[id];
        const st = chipState(slot);
        const b = document.createElement("button");
        b.className = "chip " + (st === "built" ? "built" : st === "locked" ? "locked" : "");
        if (selectedId === id) b.classList.add("sel");
        if (id === nextId) b.classList.add("next");
        const q = S.quests[id];
        const col = "#" + colFor(slot).getHexString();
        const katTag = slot.kategorie === "Wahlpflicht" ? `<span class="ckat wp" title="${t("kat_wahlpflicht")}">WP</span>` : slot.kategorie === "Wahl" ? `<span class="ckat" title="${t("kat_wahl")}">W</span>` : "";
        b.innerHTML = `<span class="cdot" style="background:${col}"></span>
          <span class="cname">${slotTitel(slot)}</span>
          ${katTag}
          ${id === nextId ? `<span class="nextbadge">🔨 ${t("naechstes")}</span>` : ""}
          ${S.quiz[quizCode(slot)] ? '<span class="quest-star" title="Quiz ✓">🚩</span>' : ""}
          ${q && q.done ? '<span class="quest-star">✦</span>' : ""}
          ${st === "built" ? '<span class="tick">✔</span>' : S.mode === "serious" && S.bestanden[id] ? '<span class="tick">☑</span>' : ""}
          <span class="cects">${slot.ects}</span>`;
        b.onclick = () => { selectSlot(id); };
        sb.appendChild(b);
      }
      frag.appendChild(sb);
    }
  }
  planList.innerHTML = "";
  planList.appendChild(frag);
  document.getElementById("planHint").textContent = S.mode === "serious" ? "☑ = " + t("bestanden") : "";
  document.getElementById("planLegende").textContent = t("legende");
  // Mobiler CTA-Chip: nächster empfohlener Baustein
  const cta = document.getElementById("nextCta");
  if (cta) {
    if (nextId && !visitor.active) {
      cta.textContent = `${t("cta_naechster")} ${slotTitel(SLOTS[nextId]).split(",")[0]}`;
      cta.title = slotTitel(SLOTS[nextId]);
      cta.onclick = () => { selectSlot(nextId); };
      cta.style.visibility = "visible";
    } else cta.style.visibility = "hidden";
  }
}
function ectsSum(hausId) {
  return ST.slots.filter((s) => s.haus === hausId && isPlaced(s.slot))
    .reduce((n, s) => { const p = S.placed[S.mode][s.slot]; const e = p && p.opt && OPTMOD[p.opt] ? OPTMOD[p.opt].ects : s.ects; return n + e; }, 0);
}
function selectSlot(id) {
  if (interior) leaveRoom(); // sonst bliebe der Boden ausgeblendet, während man anderswo weiterbaut
  selectedId = id;
  const slot = SLOTS[id];
  SND.pick();
  if (!isPlaced(id) && !visitor.active) showGhost(slot); else clearGhost();
  openCard(id);
  renderPlan();
  // Kamera sanft hinschwenken
  const h = ST.haeuser[slot.haus];
  const target = new THREE.Vector3(h.origin[0] + slot.pos.x * CELL, floorBase(slot.pos.y) + 1, h.origin[2] + slot.pos.z * CELL);
  const dir = camera.position.clone().sub(controls.target).normalize().multiplyScalar(Math.min(30, camera.position.distanceTo(target) + 7));
  flyTo(target.clone().add(dir), target, 0.9);
}

/* ---------- HUD: Kompetenzprofil ---------- */
function profilWerte() {
  const score = {}, max = {};
  ST.kompetenzen.forEach((k) => { score[k.id] = 0; max[k.id] = 0; });
  for (const slot of ST.slots) {
    const { komp, haupt } = slotKomp(slot);
    const all = [...(komp.fa || []), ...(komp.ki || []), ...(komp.fu || [])];
    for (const id of all) {
      if (!(id in max)) continue;
      const w = (haupt || []).includes(id) ? 2 : 1;
      max[id] += w * slot.ects;
      if (isPlaced(slot.slot)) score[id] += w * slot.ects;
    }
  }
  // Vorstufe ⓪: kleiner Startbonus (Endowed Progress) pro Selbstcheck-Häkchen
  (ST.vorstufe || []).forEach((v, i) => {
    if (S.p0 && S.p0[i]) v.ids.forEach((id) => { if (max[id]) score[id] = Math.min(max[id], score[id] + 0.025 * max[id]); });
  });
  return { score, max };
}
let profilView = null; // null = Übersicht, sonst Kompetenz-ID
let profilTab = "profil"; // profil | karriere

/* Radar mit 6 Achsen (Aggregate) — Begriffe entlang des Entwurfs vom 02.07.2026; «|» = Zeilenumbruch */
const RADAR_ACHSEN = [
  { ids: ["Fa1", "Fa8", "Fa9"], name: { de: "Fachwissen &|Transfer", en: "Knowledge &|transfer" }, farbe: "#1a3e8f" },
  { ids: ["Fa2", "Fa3", "Fa5"], name: { de: "Methoden, Daten|& Diagnostik", en: "Methods, data|& diagnostics" }, farbe: "#1a3e8f" },
  { ids: ["Fa4", "Fa6", "Fa7", "Fa10"], name: { de: "Denken, Ethik &|Kommunikation", en: "Thinking, ethics|& communication" }, farbe: "#1a3e8f" },
  { ids: ["KI1", "KI2", "KI3"], name: { de: "Mit KI arbeiten|& gestalten", en: "Working & creating|with AI" }, farbe: "#0e8f7e" },
  { ids: ["KI4", "KI5", "KI6"], name: { de: "KI verstehen, prüfen|& verantworten", en: "Understanding, auditing|& owning AI" }, farbe: "#0e8f7e" },
  { ids: ["Fu1", "Fu2", "Fu3"], name: { de: "Future Skills|(mit & ohne KI)", en: "Future skills|(with & without AI)" }, farbe: "#4a90d9" }
];
function radarSVG(score, max, size = 210, soll = null) {
  const c = size / 2, r0 = size * 0.315, n = RADAR_ACHSEN.length;
  const pt = (i, r) => { const a = -Math.PI / 2 + (i / n) * Math.PI * 2; return [c + Math.cos(a) * r, c + Math.sin(a) * r]; };
  let grid = "";
  for (const f of [0.33, 0.66, 1]) {
    grid += `<polygon points="${[...Array(n)].map((_, i) => pt(i, r0 * f).join(",")).join(" ")}" fill="none" stroke="#dbe1ef" stroke-width="1"/>`;
  }
  let axes = "", labels = "";
  RADAR_ACHSEN.forEach((ax, i) => {
    const [x, y] = pt(i, r0);
    axes += `<line x1="${c}" y1="${c}" x2="${x}" y2="${y}" stroke="#dbe1ef" stroke-width="1"/>`;
    const [lx, ly] = pt(i, r0 + 13);
    const lines = L(ax.name).split("|"); // zweizeilige Labels: nichts wird mehr abgeschnitten
    const y0 = ly - (lines.length - 1) * 4.5 + (i === 0 ? -3 : ly > c ? 5 : 0);
    labels += `<text x="${lx}" y="${y0}" font-size="7.5" font-weight="700" fill="${ax.farbe}" text-anchor="middle" dominant-baseline="middle">` +
      lines.map((ln, li) => `<tspan x="${lx}" dy="${li ? 9 : 0}">${ln.replace(/&/g, "&amp;")}</tspan>`).join("") + `</text>`;
  });
  const vals = RADAR_ACHSEN.map((ax) => {
    const s = ax.ids.reduce((a, id) => a + (score[id] || 0), 0), m = ax.ids.reduce((a, id) => a + (max[id] || 0), 0);
    return m ? s / m : 0;
  });
  const poly = vals.map((v, i) => pt(i, Math.max(0.03, v) * r0).join(",")).join(" ");
  const dots = vals.map((v, i) => { const [x, y] = pt(i, Math.max(0.03, v) * r0); return `<circle cx="${x}" cy="${y}" r="2.6" fill="#0028a5"/>`; }).join("");
  const sollPoly = soll && soll.length === n
    ? `<polygon points="${soll.map((v, i) => pt(i, Math.max(0.03, Math.min(1, v)) * r0).join(",")).join(" ")}" fill="none" stroke="#b3831d" stroke-width="1.8" stroke-dasharray="5 4" stroke-linejoin="round"/>`
    : "";
  return `<svg viewBox="0 0 ${size} ${size}" style="width:100%;max-width:230px;display:block;margin:2px auto 6px">
    ${grid}${axes}
    ${sollPoly}
    <polygon points="${poly}" fill="rgba(0,40,165,.16)" stroke="#0028a5" stroke-width="2" stroke-linejoin="round"/>
    ${dots}${labels}</svg>`;
}

/* Verlauf: Kompetenzgewicht pro Semester (gestapelt Fa/KI/Fu) */
function verlaufHTML() {
  const sems = [];
  for (const hausId of ["bsc", "msc"]) {
    for (const sem of ST.bauplan[hausId]) {
      if (!sem.slots.length && hausId === "bsc" && sem.sem === 2) { sems.push({ lbl: "B2", fa: 0, ki: 0, fu: 0 }); continue; }
      const e = { lbl: (hausId === "bsc" ? "B" : "M") + sem.sem, fa: 0, ki: 0, fu: 0 };
      for (const id of sem.slots) {
        if (!isPlaced(id)) continue;
        const slot = SLOTS[id];
        const { komp } = slotKomp(slot);
        e.fa += (komp.fa || []).length * slot.ects;
        e.ki += (komp.ki || []).length * slot.ects;
        e.fu += (komp.fu || []).length * slot.ects;
      }
      sems.push(e);
    }
  }
  const maxSum = Math.max(1, ...sems.map((s) => s.fa + s.ki + s.fu));
  const bar = (s) => {
    const h = (v) => Math.round((v / maxSum) * 100);
    return `<div class="vbar" title="${s.lbl}">
      <span class="vseg" style="height:${h(s.fu)}%;background:${ST.felder.fu.farbe}"></span>
      <span class="vseg" style="height:${h(s.ki)}%;background:${ST.felder.ki.farbe}"></span>
      <span class="vseg" style="height:${h(s.fa)}%;background:${ST.felder.fa.farbe}"></span>
    </div>`;
  };
  return `<div class="kfeld" style="margin-top:14px">${t("verlauf_titel")}</div>
    <div class="verlauf">${sems.map(bar).join("")}</div>
    <div class="verlauf-lbl">${sems.map((s) => `<span>${s.lbl}</span>`).join("")}</div>`;
}

/* Wahlprofil-Zusammenfassung (BSc-Richtung + MSc-Schwerpunkte) als HTML-Block */
function wahlprofilHTML(kompakt) {
  const br = bscRichtung(), mp = mscProfil();
  const rTxt = br.r
    ? `${ST.richtungen[br.r].icon} <b style="color:${ST.richtungen[br.r].farbe}">${L(ST.richtungen[br.r].kurz)}</b>`
    : `<span style="color:#8b94ab">${t("richtung_keine")}</span>`;
  const spTxt = mp.total
    ? Object.entries(mp.counts).filter(([, n]) => n > 0).map(([sp, n]) => `<b style="color:${ST.schwerpunkte[sp].farbe}">${sp} ${n}</b>`).join(" · ")
      + (mp.dom ? "" : ` <span style="color:#8b94ab">(${t("msc_mix")})</span>`)
    : `<span style="color:#8b94ab">—</span>`;
  const bf = baFrage(), ba = baArtefakt();
  const baTxt = bf || ba
    ? `<br>BA: ${bf ? `${((ST.baFormen || {})[bf.form] || {}).icon || ""} ${escHtml(L(bf.name))}` : ""}${ba ? ` · ${ba.icon} ${escHtml(L(ba.name))}` : ""}`
    : "";
  return `<div style="border:1.5px solid #dbe1ef;border-radius:10px;padding:7px 10px;margin:0 4px 8px;font-size:11px;line-height:1.6">
    <b style="font-size:11.5px">🧭 ${t("richtung_titel")}</b><br>
    ${t("richtung_bsc")}: ${rTxt}<br>
    ${t("richtung_msc")}: ${spTxt}${baTxt}${kompakt ? "" : `<br><span style="color:#8b94ab;font-size:10px">${t("msc_dom_hint")}</span>`}
  </div>`;
}
/* Wahl-Empfehlungs-Check pro Pfad: ✓/○-Chips für Richtung, Schwerpunkt, Wahlpflichtmodul */
function passungChips(p) {
  if (!p.wahl) return "";
  const br = bscRichtung(), mp = mscProfil();
  const chips = [];
  if (p.wahl.r && ST.richtungen[p.wahl.r]) {
    const ok = br.r === p.wahl.r;
    chips.push({ ok, txt: `BSc: ${L(ST.richtungen[p.wahl.r].kurz)}`, col: ST.richtungen[p.wahl.r].farbe });
  }
  if (p.wahl.sp && ST.schwerpunkte[p.wahl.sp]) {
    const ok = (mp.counts[p.wahl.sp] || 0) >= 3;
    chips.push({ ok, txt: `MSc: ${p.wahl.sp}`, col: ST.schwerpunkte[p.wahl.sp].farbe });
  }
  if (p.wahl.wp && OPTMOD[p.wahl.wp]) {
    const ok = wpWahl() === p.wahl.wp;
    chips.push({ ok, txt: L(OPTMOD[p.wahl.wp].titel), col: "#b3831d" });
  }
  const bf = baFrage(); // gewählte BA-Fragestellung stärkt passende Pfade sichtbar
  if (bf && (bf.pfade || []).includes(p.id)) {
    chips.push({ ok: true, txt: t("ba_chip"), col: "#0028a5" });
  }
  if (!chips.length) return "";
  const alle = chips.every((c) => c.ok);
  return `<div style="display:flex;flex-wrap:wrap;gap:4px;align-items:center;margin:4px 0 2px;font-size:10px">
    <span style="color:#5b6478;font-weight:700">${alle ? "✓ " + t("passung_ok") : t("passung_titel")}</span>
    ${chips.map((c) => `<span style="border:1px solid ${c.col};color:${c.ok ? "#fff" : c.col};background:${c.ok ? c.col : "transparent"};border-radius:999px;padding:1px 7px">${c.ok ? "✓ " : ""}${escHtml(c.txt)}</span>`).join("")}
  </div>` + (p.wahl.hinweis && !alle ? `<p style="font-size:10px;color:#8b94ab;margin:2px 0 0">${L(p.wahl.hinweis)}</p>` : "");
}
/* Lückenanalyse: Zielstufen des Pfads vs. erreichte Stufen.
   Zielstufen werden auf das im Curriculum Erreichbare geklemmt — eine Lücke,
   die kein Baustein schliessen kann, wäre irreführend (Rest ist Weiterbildung). */
let MAX_STUFE = null;
function maxStufeFor(id) {
  if (!MAX_STUFE) {
    MAX_STUFE = {};
    for (const s of ST.slots) {
      const { komp } = slotKomp(s);
      for (const k of [...(komp.fa || []), ...(komp.ki || []), ...(komp.fu || [])]) {
        MAX_STUFE[k] = Math.max(MAX_STUFE[k] || 0, s.stufe);
      }
    }
  }
  return MAX_STUFE[id] || 0;
}
function gapList(p) {
  if (!p.ziel) return [];
  return Object.entries(p.ziel)
    .map(([id, zielSt]) => ({ id, ziel: Math.min(zielSt, maxStufeFor(id)), ist: kompStufe(id) }))
    .filter((g) => g.ist < g.ziel)
    .sort((a, b) => (b.ziel - b.ist) - (a.ziel - a.ist));
}
/* Karriere-Ansicht */
function renderKarriere() {
  const { score, max } = profilWerte();
  const pct = {}; ST.kompetenzen.forEach((k) => (pct[k.id] = max[k.id] ? score[k.id] / max[k.id] : 0));
  const el = document.getElementById("profilList");
  let html = `<p style="font-size:11px;color:#5b6478;margin:2px 6px 6px;line-height:1.45">${t("karriere_info")}</p>`;
  html += wahlprofilHTML(false);
  for (const p of (window.KARRIERE.pfade || [])) {
    const wSum = Object.values(p.w).reduce((a, b) => a + b, 0);
    const ready = Math.round(Object.entries(p.w).reduce((a, [id, w]) => a + w * (pct[id] || 0), 0) / wSum * 100);
    // Nächste Bausteine für diesen Pfad
    const cand = ST.slots.filter((s) => !isPlaced(s.slot)).map((s) => {
      const { komp, haupt } = slotKomp(s);
      const ids = [...(komp.fa || []), ...(komp.ki || []), ...(komp.fu || [])];
      const v = ids.reduce((a, id) => a + (p.w[id] || 0) * ((haupt || []).includes(id) ? 2 : 1), 0);
      return { s, v, ok: canPlace(s).ok };
    }).filter((x) => x.v > 0).sort((a, b) => (b.ok - a.ok) || (b.v - a.v)).slice(0, 3);
    const gaps = gapList(p);
    const gapHtml = p.ziel ? `<details style="margin:4px 0 0"><summary style="cursor:pointer;font:700 10.5px var(--font);color:#5b6478">🎯 ${t("soll_titel")}</summary>
      ${gaps.length
        ? `<div style="display:flex;flex-wrap:wrap;gap:4px;margin:4px 0"><span style="font-size:10px;color:#5b6478">${t("gap_titel")}:</span>${gaps.map((g) => { const k = KOMP[g.id]; const f = k ? ST.felder[k.feld] : null; return `<span style="font-size:10px;border:1px solid ${f ? f.farbe : "#b9c2d9"};color:${f ? f.farbe : "#5b6478"};border-radius:999px;padding:1px 7px" title="${k ? escHtml(L(k.name)) : ""}">${g.id} ${g.ist}→${g.ziel}</span>`; }).join("")}</div>`
        : `<p style="font-size:10.5px;color:var(--ok);margin:4px 0">✓ ${t("gap_ok")}</p>`}</details>` : "";
    const rmHtml = p.roadmap && p.roadmap.length ? `<details style="margin:3px 0 0"><summary style="cursor:pointer;font:700 10.5px var(--font);color:#5b6478">🚀 ${t("roadmap_titel")}</summary>
      <ol style="font-size:10.5px;line-height:1.5;padding-left:16px;margin:4px 0">${p.roadmap.map((r) => `<li style="margin:3px 0"><b>${L(r.t)}</b> — ${L(r.d)}</li>`).join("")}</ol></details>` : "";
    html += `<div class="pfad">
      <div class="phead"><span>${p.icon}</span><span>${L(p.name)}</span><span class="pct">${ready}%</span></div>
      <div class="phint">${L(p.hint)}</div>
      <div class="track"><div class="fill" style="width:${ready}%;background:linear-gradient(90deg,#3f6cc8,#0028a5)"></div></div>
      ${passungChips(p)}
      ${gapHtml}
      ${rmHtml}
      ${cand.length ? `<div class="pnext">${t("pfad_next")} ${cand.map((c) => { const voll = slotTitel(c.s).split(",")[0]; return `<button data-slot="${c.s.slot}" title="${slotTitel(c.s).replace(/"/g, "&quot;")}">${voll.length > 34 ? voll.slice(0, 33) + "…" : voll}</button>`; }).join("")}</div>` : ""}
    </div>`;
  }
  html += `<button class="ghostbtn" data-steckbrief style="margin:8px 4px;width:calc(100% - 8px)">🖨 ${t("karriere_pdf")}</button>`;
  html += verlaufHTML();
  el.innerHTML = html;
  el.querySelectorAll(".pnext button").forEach((b) => (b.onclick = () => selectSlot(b.dataset.slot)));
  const sb = el.querySelector("[data-steckbrief]");
  if (sb) sb.onclick = karriereSteckbrief;
}

/* ---------- Karrieresteckbrief als druckbares PDF ---------- */
function karriereSteckbrief() {
  const { score, max } = profilWerte();
  const pct = {}; ST.kompetenzen.forEach((k) => (pct[k.id] = max[k.id] ? score[k.id] / max[k.id] : 0));
  const dat = new Date().toLocaleDateString(S.lang === "de" ? "de-CH" : "en-GB");
  const pfade = (window.KARRIERE.pfade || []).map((p) => {
    const wSum = Object.values(p.w).reduce((a, b) => a + b, 0);
    const ready = Math.round(Object.entries(p.w).reduce((a, [id, w]) => a + w * (pct[id] || 0), 0) / wSum * 100);
    const traeger = Object.entries(p.w).map(([id, w]) => ({ id, v: w * (pct[id] || 0) }))
      .sort((a, b) => b.v - a.v).slice(0, 3).filter((x) => x.v > 0);
    const cand = ST.slots.filter((s) => !isPlaced(s.slot)).map((s) => {
      const { komp, haupt } = slotKomp(s);
      const ids = [...(komp.fa || []), ...(komp.ki || []), ...(komp.fu || [])];
      const v = ids.reduce((a, id) => a + (p.w[id] || 0) * ((haupt || []).includes(id) ? 2 : 1), 0);
      return { s, v };
    }).filter((x) => x.v > 0).sort((a, b) => b.v - a.v).slice(0, 3);
    return { p, ready, traeger, cand };
  }).sort((a, b) => b.ready - a.ready);
  const br = bscRichtung(), mp = mscProfil();
  let rows = "";
  for (const { p, ready, traeger, cand } of pfade) {
    const gaps = gapList(p);
    const gapTxt = p.ziel
      ? (gaps.length
        ? `<p style="font-size:10.5px;margin:2px 0"><b>🎯 ${t("gap_titel")}:</b> ${gaps.map((g) => { const k = KOMP[g.id]; return `${g.id} ${k ? L(k.name) : ""} (${t("stufe")} ${g.ist}→${g.ziel})`; }).join(" · ")}</p>`
        : `<p style="font-size:10.5px;margin:2px 0;color:#0a7d40"><b>✓ ${t("gap_ok")}</b></p>`)
      : "";
    const wahlTxt = p.wahl && p.wahl.hinweis ? `<p style="font-size:10.5px;margin:2px 0"><b>🧭 ${t("passung_titel")}</b> ${L(p.wahl.hinweis)}</p>` : "";
    const rmTxt = p.roadmap && p.roadmap.length
      ? `<p style="font-size:10.5px;margin:5px 0 2px"><b>🚀 ${t("roadmap_titel")}:</b></p>
         <ol style="font-size:10.5px;line-height:1.55;margin:0 0 2px;padding-left:18px">${p.roadmap.map((r) => `<li style="margin:2px 0"><b>${L(r.t)}</b> — ${L(r.d)}</li>`).join("")}</ol>`
      : "";
    rows += `<div style="border:1.5px solid #dbe1ef;border-radius:12px;padding:10px 14px;margin:8px 0;page-break-inside:avoid">
      <div style="display:flex;align-items:center;gap:8px"><span style="font-size:17px">${p.icon}</span>
        <b style="font-size:13px;flex:1">${L(p.name)}</b>
        <b style="color:#0028a5;font-variant-numeric:tabular-nums">${ready}%</b></div>
      <div style="height:8px;border-radius:4px;background:#e8ebf4;overflow:hidden;margin:5px 0"><span style="display:block;height:100%;width:${ready}%;background:linear-gradient(90deg,#3f6cc8,#0028a5)"></span></div>
      <p style="font-size:10.5px;color:#5b6478;margin:2px 0 5px">${L(p.hint)}</p>
      ${traeger.length ? `<p style="font-size:10.5px;margin:2px 0"><b>${t("steck_traeger")}</b> ${traeger.map((x) => { const k = KOMP[x.id]; return `${x.id} ${L(k.name)} (${Math.round((pct[x.id] || 0) * 100)}%)`; }).join(" · ")}</p>` : ""}
      ${wahlTxt}
      ${gapTxt}
      ${cand.length ? `<p style="font-size:10.5px;margin:2px 0"><b>${t("steck_next")}</b> ${cand.map((c) => slotTitel(c.s).split(",")[0]).join(" · ")}</p>` : ""}
      ${rmTxt}
    </div>`;
  }
  const top = pfade[0];
  const profilBlock = `<div style="border:1.5px solid #dbe1ef;border-radius:12px;padding:8px 14px;margin:8px 0;font-size:11.5px;line-height:1.6">
    <b>🧭 ${t("richtung_titel")}</b><br>
    ${t("richtung_bsc")}: ${br.r ? `<b style="color:${ST.richtungen[br.r].farbe}">${ST.richtungen[br.r].icon} ${L(ST.richtungen[br.r].kurz)}</b>` : t("richtung_keine")}<br>
    ${t("richtung_msc")}: ${mp.total ? Object.entries(mp.counts).filter(([, n]) => n > 0).map(([sp, n]) => `<b style="color:${ST.schwerpunkte[sp].farbe}">${sp} ${n}/6</b>`).join(" · ") + (mp.dom ? "" : ` (${t("msc_mix")})`) : "—"}
    ${wpWahl() && OPTMOD[wpWahl()] ? `<br>${t("kat_wahlpflicht")}: <b>${L(OPTMOD[wpWahl()].titel)}</b>` : ""}
    ${baFrage() ? `<br>${t("ba_chip")}: <b>${((ST.baFormen || {})[baFrage().form] || {}).icon || ""} ${escHtml(L(baFrage().name))}</b>` : ""}
    ${baArtefakt() ? `<br>${t("artefakt")} <b>${baArtefakt().icon} ${escHtml(L(baArtefakt().name))}</b>` : ""}
  </div>`;
  const radarBlock = top && top.p.soll
    ? `<div style="page-break-inside:avoid">${radarSVG(score, max, 230, top.p.soll).replace("max-width:230px", "max-width:300px")}
       <p style="text-align:center;font-size:10px;color:#5b6478;margin:0 0 6px">${t("soll_legende")} (${top.p.icon} ${L(top.p.name)})</p></div>`
    : "";
  const lit = (window.KARRIERE.lit || []).length
    ? `<h2>📚 ${S.lang === "de" ? "Literatur & offizielle Quellen" : "References & official sources"}</h2>
       <ul style="font-size:10px;line-height:1.55;padding-left:18px">${window.KARRIERE.lit.map((x) => `<li style="margin:3px 0">${x.apa}${x.url ? ` <a href="${x.url}" target="_blank" rel="noopener" style="color:#0028a5">${x.url.replace(/^https?:\/\//, "")}</a>` : ""}</li>`).join("")}</ul>`
    : "";
  let cvs = "";
  for (const feld of ["fa", "ki", "fu"]) {
    for (const k of ST.kompetenzen.filter((k) => k.feld === feld)) {
      const st = kompStufe(k.id);
      const txt = cvText(k.id, st);
      if (!txt) continue;
      cvs += `<p style="font-size:11px;margin:5px 0;page-break-inside:avoid">«${txt}» <span style="color:#8b94ab;font-size:9.5px;white-space:nowrap">— ${k.id} ${L(k.name)}, ${t("stufe")} ${st}</span></p>`;
    }
  }
  const html = `<!DOCTYPE html><html lang="${S.lang}"><head><meta charset="utf-8"><title>${t("steck_titel")}</title>
  <style>*{-webkit-print-color-adjust:exact !important;print-color-adjust:exact !important}
  body{font-family:"Helvetica Neue",Arial,sans-serif;color:#1c2333;max-width:780px;margin:24px auto;padding:0 16px}
  h1{color:#0028a5;font-size:23px} h2{color:#0028a5;font-size:15px;margin:18px 0 4px}
  .hint{font-size:10px;color:#5b6478;margin-top:16px;line-height:1.5}
  @media print {.noprint{display:none}}</style></head><body>
  <div class="noprint" style="float:right;text-align:right">
    <button onclick="print()" style="padding:10px 20px;border:0;background:#0028a5;color:#fff;border-radius:10px;cursor:pointer;font-weight:700;font-size:14px">💾 ${S.lang === "de" ? "Als PDF speichern" : "Save as PDF"}</button>
    <div style="font-size:10px;color:#5b6478;margin-top:4px">${S.lang === "de" ? "Im Druckdialog «Als PDF sichern» wählen" : "Choose 'Save as PDF' in the print dialog"}</div>
  </div>
  <h1>💼 ${t("steck_titel")} — ${escHtml(S.name) || "—"}</h1>
  <p style="font-size:12px;color:#5b6478">${t("passdatum")}: ${dat} · BSc ${ectsSum("bsc")}/120 · MSc ${ectsSum("msc")}/120 ${t("ects")} · ${S.mode === "serious" ? t("modus_serious") : t("modus_frei")}</p>
  <p style="font-size:11px;color:#5b6478;line-height:1.5">${t("karriere_info")}</p>
  ${profilBlock}
  ${radarBlock}
  ${rows}
  ${cvs ? `<h2>📝 ${t("steck_cv")}</h2>${cvs}` : ""}
  ${lit}
  <p class="hint">${L(ST.meta.hinweis)} ${t("steck_fussnote")}</p>
  </body></html>`;
  const w = window.open("about:blank");
  if (w && w.document) { w.document.write(html); w.document.close(); }
  else download("karrieresteckbrief.html", html, "text/html");
  SND.pick();
}

function renderProfil(changed = []) {
  document.getElementById("ptabProfil").classList.toggle("on", profilTab === "profil");
  document.getElementById("ptabKarriere").classList.toggle("on", profilTab === "karriere");
  if (profilTab === "karriere") { renderKarriere(); return; }
  if (profilView) { renderKompDetail(profilView); return; }
  const { score, max } = profilWerte();
  const el = document.getElementById("profilList");
  let html = `<div class="ects-summary">
    <div class="box"><b>${ectsSum("bsc")}</b><span>BSc / 120 ${t("ects")}</span></div>
    <div class="box"><b>${ectsSum("msc")}</b><span>MSc / 120 ${t("ects")}</span></div>
  </div><div class="donuts">`;
  for (const feld of ["fa", "ki", "fu"]) {
    const f = ST.felder[feld];
    const ids = ST.kompetenzen.filter((k) => k.feld === feld).map((k) => k.id);
    const sSum = ids.reduce((n, i) => n + score[i], 0), mSum = ids.reduce((n, i) => n + max[i], 0);
    const pct = mSum ? Math.round((sSum / mSum) * 100) : 0;
    html += `<div class="donut"><div class="ring" style="background:conic-gradient(${f.farbe} ${pct * 3.6}deg, #e8ebf4 0)"><b>${pct}%</b></div><span>${feld === "fa" ? "Fach" : feld === "ki" ? "KI" : "Future"}</span></div>`;
  }
  html += `</div>`;
  html += radarSVG(score, max);
  for (const feld of ["fa", "ki", "fu"]) {
    const f = ST.felder[feld];
    html += `<div class="kfeld"><span class="fdot" style="background:${f.farbe}"></span>${L(f.name)}</div>`;
    for (const k of ST.kompetenzen.filter((k) => k.feld === feld)) {
      const pct = max[k.id] ? Math.round((score[k.id] / max[k.id]) * 100) : 0;
      html += `<button class="kbar ${changed.includes(k.id) ? "bump" : ""}" data-k="${k.id}"><div class="klabel"><span><span class="kid">${k.id}</span>${L(k.name)}</span><span>${pct}%</span></div>
        <div class="track"><div class="fill" style="background:${f.farbe};width:${pct}%"></div></div></button>`;
    }
  }
  el.innerHTML = html;
  el.querySelectorAll(".kbar").forEach((b) => (b.onclick = () => { profilView = b.dataset.k; SND.pick(); renderProfil(); }));
}
document.getElementById("ptabProfil").onclick = () => { profilTab = "profil"; profilView = null; renderProfil(); };
document.getElementById("ptabKarriere").onclick = () => { profilTab = "karriere"; profilView = null; SND.pick(); renderProfil(); };

function kompStufe(id) {
  let s = 0;
  for (const slot of ST.slots) {
    if (!isPlaced(slot.slot)) continue;
    const { komp } = slotKomp(slot);
    if ([...(komp.fa || []), ...(komp.ki || []), ...(komp.fu || [])].includes(id)) s = Math.max(s, slot.stufe);
  }
  return s;
}
function renderKompDetail(id) {
  const k = KOMP[id]; if (!k) { profilView = null; renderProfil(); return; }
  const f = ST.felder[k.feld];
  const { score, max } = profilWerte();
  const pct = max[id] ? Math.round((score[id] / max[id]) * 100) : 0;
  const el = document.getElementById("profilList");
  const rows = [];
  for (const slot of ST.slots) {
    const { komp, haupt } = slotKomp(slot);
    const all = [...(komp.fa || []), ...(komp.ki || []), ...(komp.fu || [])];
    if (!all.includes(id)) continue;
    rows.push({ slot, haupt: (haupt || []).includes(id), built: isPlaced(slot.slot), w: ((haupt || []).includes(id) ? 2 : 1) * slot.ects });
  }
  rows.sort((a, b) => (b.built - a.built) || (b.w - a.w));
  const builtRows = rows.filter((r) => r.built);
  const nextRows = rows.filter((r) => !r.built).sort((a, b) => (canPlace(b.slot).ok - canPlace(a.slot).ok) || (b.w - a.w)).slice(0, 4);
  const stufeNow = kompStufe(id);
  const row = (r) => {
    const col = ST.gruppen[r.slot.gruppe].farbe;
    return `<button class="modrow ${r.built ? "builtrow" : ""}" data-slot="${r.slot.slot}" style="border:0;width:100%;text-align:left;cursor:pointer;background:${r.built ? "#eef7f1" : "transparent"}">
      <span class="mdot" style="background:${col}"></span>
      <span style="flex:1">${slotTitel(r.slot)}</span>
      ${r.haupt ? `<span class="haupt-tag" title="${t("hauptkomp")}">★</span>` : ""}
      <span style="color:#8b94ab;font-variant-numeric:tabular-nums">${r.slot.ects}</span>
    </button>`;
  };
  el.innerHTML = `
    <button class="kdetail-back">${t("zurueck")}</button>
    <div class="kdetail">
      <h4><span style="color:${f.farbe}">${id}</span> ${L(k.name)}</h4>
      <p class="ich">«${L(k.ich)}»</p>
      <div class="kbar" style="cursor:default"><div class="klabel"><span>${L(f.name)}</span><span>${pct}%</span></div>
        <div class="track"><div class="fill" style="background:${f.farbe};width:${pct}%"></div></div></div>
      <div class="subhead">${t("stufe_erreicht")}</div>
      <div class="stufen">${[1, 2, 3, 4].map((n) => `<span class="sdot ${stufeNow >= n ? "on" : ""}" title="${L(ST.stufen[n - 1].name)}">${n}</span>`).join("")}
        <span style="font-size:10.5px;color:#5b6478;margin-left:4px">${stufeNow ? L(ST.stufen[stufeNow - 1].name) : "—"}</span></div>
      ${fs12Block(k, score, max)}
      <div class="subhead">${t("k_aufgebaut")} (${builtRows.length})</div>
      ${builtRows.length ? builtRows.map(row).join("") : `<p style="font-size:11.5px;color:#8b94ab;margin:2px 6px">${t("k_keine")}</p>`}
      ${cvBlock(id, stufeNow)}
      ${evidenzBlock(id, builtRows)}
      ${nextRows.length ? `<div class="subhead">${t("k_naechste")}</div>` + nextRows.map(row).join("") : ""}
    </div>`;
  el.querySelector(".kdetail-back").onclick = () => { profilView = null; renderProfil(); };
  el.querySelectorAll(".modrow").forEach((b) => (b.onclick = () => selectSlot(b.dataset.slot)));
  const cp = el.querySelector("[data-cvcopy]");
  if (cp) cp.onclick = async () => {
    try { await navigator.clipboard.writeText(cp.dataset.cvcopy); } catch (e) {}
    cp.textContent = "✓ " + t("cv_copied");
    SND.pick();
  };
  const cvai = el.querySelector("[data-cvai]");
  if (cvai) cvai.onclick = async () => {
    const role = el.querySelector("[data-cvrole]").value.trim(); if (!role) return;
    const out = el.querySelector("[data-cvaiout]"); out.style.display = "flex";
    out.querySelector("p").textContent = t("ai_wartet");
    try {
      const base = cvText(id, kompStufe(id));
      const res = await aiComplete(`Formuliere GENAU EINEN CV-tauglichen Satz (${S.lang === "de" ? "Deutsch, Schweizer Rechtschreibung" : "English"}, dritte Person ohne Subjekt, keine Übertreibung) für die Kompetenz «${L(KOMP[id].name)}» — zugeschnitten auf diese Zielrolle: ${role}. Ausgangsbaustein: «${base}». Nur der Satz, nichts anderes.`);
      out.querySelector("p").textContent = "«" + res.replace(/^«|»$/g, "") + "»";
      out.querySelector("[data-cvaicopy]").onclick = async () => { try { await navigator.clipboard.writeText(res); } catch (e) {} SND.pick(); };
    } catch (e) { out.querySelector("p").textContent = t("tutor_err"); }
  };
}
function cvText(id, stufe) {
  const cv = (window.KARRIERE && window.KARRIERE.cv) || {};
  const e = cv[id];
  if (!e || !stufe) return null;
  const s = e[stufe] || e[String(stufe)] || (Array.isArray(e.stufen) ? e.stufen[stufe - 1] : null);
  return s ? L(s) : null;
}
function cvBlock(id, stufe) {
  const txt = cvText(id, stufe);
  if (!txt) return "";
  const ai = HAS_AI ? `<div style="display:flex;gap:6px;margin:2px 4px 6px">
    <input data-cvrole type="text" placeholder="${t("ai_cv_ph")}" style="flex:1;border:1.5px solid #dbe1ef;border-radius:8px;padding:6px 9px;font:500 11px var(--font)">
    <button class="ghostbtn" data-cvai style="padding:6px 9px;font-size:10.5px">${t("ai_cv_btn")}</button>
  </div><div data-cvaiout style="display:none" class="cvrow"><p></p><button data-cvaicopy>📋</button></div>` : "";
  return `<div class="subhead">📝 ${t("cv_titel")} (${t("stufe")} ${stufe})</div>
    <div class="cvrow"><p>«${txt}»</p><button data-cvcopy="${txt.replace(/"/g, "&quot;")}">📋 ${t("cv_copy")}</button></div>${ai}`;
}
function fs12Pct(sub, score, max) {
  const vals = sub.proxy.map((pid) => (max[pid] ? score[pid] / max[pid] : 0));
  return Math.round((vals.reduce((a, b) => a + b, 0) / Math.max(1, vals.length)) * 100);
}
function fs12Block(k, score, max) {
  if (!k.sub || !k.sub.length) return "";
  const f = ST.felder.fu;
  let html = `<div class="subhead">🧭 ${t("fs12_titel")} (${k.sub.length})</div>
    <p style="font-size:10px;color:#8b94ab;margin:0 6px 4px">${t("fs12_hint")}</p>`;
  for (const s of k.sub) {
    const pct = fs12Pct(s, score, max);
    html += `<div class="kbar" style="cursor:default"><div class="klabel"><span><span class="kid">${s.id}</span>${L(s.name)}</span><span>${pct}%</span></div>
      <div class="track"><div class="fill" style="background:${f.farbe};width:${pct}%"></div></div></div>`;
  }
  return html;
}
function evidenzBlock(id, builtRows) {
  const items = [];
  for (const r of builtRows) {
    const code = quizCode(r.slot);
    if (S.quiz[code]) items.push(`<div class="evrow"><span class="evic">🚩</span><span>${t("ev_quiz")}: ${slotTitel(r.slot).split(",")[0]}</span></div>`);
    const q = S.quests[r.slot.slot];
    if (q && q.done) items.push(`<div class="evrow"><span class="evic">✦</span><span>${t("ev_quest")}: ${slotTitel(r.slot).split(",")[0]}${q.note ? ` — <i>«${escHtml(q.note)}»</i>` : ""}</span></div>`);
  }
  if (!items.length) return "";
  return `<div class="subhead">🗂 ${t("evidenz_titel")} (${items.length})</div>` + items.join("");
}

/* ---------- HUD: Info-Karte ---------- */
const card = document.getElementById("card");
let cardTab = "zukunft", pendingStil = "klassisch", pendingSp = "DeNC", pendingOpt = null, pendingThema = null, pendingFrage = null, pendingArtefakt = null;
function openCard(id) {
  const slot = SLOTS[id]; if (!slot) return;
  selectedId = id;
  const placed = isPlaced(id);
  const st = S.placed[S.mode][id] || {};
  pendingStil = st.stil || pendingStil;
  pendingSp = st.sp || pendingSp;
  pendingOpt = st.opt || (slot.optionen ? slot.optionen[0] : null);
  pendingThema = st.thema || null;
  pendingFrage = st.frage || null;
  pendingArtefakt = st.artefakt || null;
  const { kat } = slotKomp(slot);
  document.getElementById("cardDot").style.background = "#" + colFor(slot).getHexString();
  document.getElementById("cardTitle").textContent = slotTitel(slot);
  document.getElementById("cardCode").textContent = `${(st.opt) || slot.code} · ${L(ST.gruppen[slot.gruppe].name)}`;
  const katList = (kat || "B").split(/[+/]/).map((x) => x.trim()).filter((x) => ST.pruefungslogik[x]);
  const katBadge = slot.kategorie === "Wahlpflicht"
    ? `<span class="badge" style="background:#b3831d">★ ${t("kat_wahlpflicht")}</span>`
    : slot.kategorie === "Wahl"
      ? `<span class="badge" style="background:#6b7a99">☆ ${t("kat_wahl")}</span>`
      : `<span class="badge" style="background:#3c4356">${t("kat_pflicht")}</span>`;
  document.getElementById("cardBadges").innerHTML =
    `<span class="badge" style="background:#5b6478">${slot.ects} ${t("ects")}</span>` + katBadge +
    `<span class="badge" style="background:#39415a">${t("stufe")} ${slot.stufe}</span>
     <span class="badge" style="background:#7a86a3">${t(slot.rhythmus === "beide" ? "beide" : slot.rhythmus.toLowerCase())}${slot.sem2 ? " · " + t("zweisem") : ""}</span>` +
    katList.map((x) => `<span class="badge" style="background:${ST.pruefungslogik[x].farbe}">${L(ST.pruefungslogik[x].name)}</span>`).join("");
  renderCardBody(slot);
  renderCardActions(slot);
  renderFbRow(slot);
  card.classList.add("open");
  document.body.classList.add("card-open");
}
/* Ampel-Feedback (Schiene C, Validierung): 🟢🟡🔴 + Freitext pro Zukunftsmodul, lokal, exportierbar */
function renderFbRow(slot) {
  const el = document.getElementById("fbRow");
  if (!el) return;
  if (visitor.active) { el.style.display = "none"; return; }
  el.style.display = "flex";
  const fb = (S.fb || {})[slot.slot] || {};
  el.innerHTML = `<span class="fblbl">🚦 ${t("fb_frage")}</span>
    ${["g", "y", "r"].map((a) => `<button class="fbamp ${fb.a === a ? "on" : ""}" data-amp="${a}" title="${t("fb_" + a)}" aria-label="${t("fb_" + a)}">${a === "g" ? "🟢" : a === "y" ? "🟡" : "🔴"}</button>`).join("")}
    ${fb.a ? `<input type="text" data-fbnote maxlength="200" placeholder="${t("fb_ph")}" value="${escHtml(fb.note)}">` : ""}`;
  el.querySelectorAll(".fbamp").forEach((b) => (b.onclick = () => {
    if (!S.fb) S.fb = {};
    const cur = S.fb[slot.slot] || {};
    if (cur.a === b.dataset.amp) delete S.fb[slot.slot]; // nochmals klicken = zurückziehen
    else { S.fb[slot.slot] = { a: b.dataset.amp, note: cur.note || "", ts: new Date().toISOString().slice(0, 10) }; if (!cur.a) toast(t("fb_danke")); }
    save(); SND.pick(); renderFbRow(slot);
  }));
  const note = el.querySelector("[data-fbnote]");
  if (note) note.onchange = () => { if (S.fb && S.fb[slot.slot]) { S.fb[slot.slot].note = note.value.trim().slice(0, 200); save(); } };
}
function closeCard() { card.classList.remove("open"); document.body.classList.remove("card-open"); selectedId = null; renderPlan(); }
document.getElementById("cardClose").onclick = () => { closeCard(); clearGhost(); };
document.getElementById("cardTabs").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  cardTab = b.dataset.tab;
  document.querySelectorAll("#cardTabs button").forEach((x) => x.classList.toggle("on", x === b));
  if (selectedId) renderCardBody(SLOTS[selectedId]);
});
function kompPills(slot) {
  const { komp, haupt } = slotKomp(slot);
  const all = [...(komp.fa || []), ...(komp.ki || []), ...(komp.fu || [])];
  return `<div class="komp-pills">` + all.map((id) => {
    const k = KOMP[id]; if (!k) return "";
    const f = ST.felder[k.feld];
    return `<span class="kpill ${haupt.includes(id) ? "haupt" : ""}" style="border-color:${f.farbe};color:${f.farbe}">${id} ${L(k.name)}</span>`;
  }).join("") + `</div>`;
}
/* Spezifische Kompetenz-IDs für ein einzelnes Lernziel: aus dem Feld-Tag (F/K/S)
   und den Haupt-/Modulkompetenzen des Moduls abgeleitet — priorisiert Hauptkompetenzen. */
function lzKompIds(slot, bTags) {
  const { komp, haupt } = slotKomp(slot);
  const felder = { F: komp.fa || [], K: komp.ki || [], S: komp.fu || [] };
  const ids = [];
  for (const tag of (bTags || [])) {
    const pool = felder[tag] || [];
    const h = pool.filter((id) => (haupt || []).includes(id));
    (h.length ? h : pool.slice(0, 1)).forEach((id) => { if (!ids.includes(id)) ids.push(id); });
  }
  return ids;
}
function lzKompBadges(slot, z) {
  const ids = lzKompIds(slot, z.b);
  return ids.map((id) => { const k = KOMP[id]; if (!k) return ""; const f = ST.felder[k.feld];
    return `<span class="lz-kid" style="color:${f.farbe};border-color:${f.farbe}" title="${L(k.name)}">${id}</span>`; }).join("");
}
/* «Die Studierenden erwerben …»: kompakter Kompetenzsatz pro Modul (aus Hauptkompetenzen) */
function modulKompetenzSatz(slot) {
  const { komp, haupt } = slotKomp(slot);
  const all = [...(komp.fa || []), ...(komp.ki || []), ...(komp.fu || [])];
  const list = (haupt && haupt.length ? haupt : all).filter((id) => KOMP[id]).slice(0, 5);
  if (!list.length) return "";
  const namen = list.map((id) => `${id} ${L(KOMP[id].name)}`).join(", ");
  const txt = S.lang === "de"
    ? `<b>Die Studierenden</b> bauen in diesem Modul vor allem folgende Kompetenzen auf: ${namen}.`
    : `<b>Students</b> primarily build the following competences in this module: ${namen}.`;
  return `<p style="margin-top:8px;font-size:12px;color:#3c4356;line-height:1.5">${txt}</p>`;
}
function renderCardBody(slot) {
  const tx = slotText(slot);
  const el = document.getElementById("cardBody");
  const none = `<p style="color:#5b6478;font-style:italic">${t("keine_texte")}</p>`;
  if (cardTab === "zukunft") {
    const bk = (ST.baukasten && ST.baukasten.zuordnung[slot.slot]) || [];
    const bkHtml = bk.length ? `<div style="margin-top:10px"><span style="font:700 11px var(--font);color:#5b6478">${t("baukasten_titel")}:</span>
      <span class="komp-pills" style="display:inline-flex;margin-left:4px">${bk.map((id) => { const d = ST.baukasten.defs[id]; return d ? `<span class="kpill" data-bk="${id}" role="button" tabindex="0" title="${L(d.kurz)}" style="border-color:#b9c2d9;cursor:pointer">${L(d.name)}</span>` : ""; }).join("")}</span></div>` : "";
    el.innerHTML = (tx ? `<p style="color:#5b6478;font-size:12px">${L(tx.heute)}</p><p style="margin-top:6px">${L(tx.zukunft)}</p>` : none) + modulKompetenzSatz(slot) + kompPills(slot) + bkHtml;
    el.querySelectorAll("[data-bk]").forEach((b) => (b.onclick = () => { const d = ST.baukasten.defs[b.dataset.bk]; if (d) { toast(L(d.name) + ": " + L(d.kurz)); SND.pick(); } }));
  } else if (cardTab === "lernziele") {
    el.innerHTML = tx && tx.lernziele && tx.lernziele.length
      ? `<p style="font-size:10.5px;color:#8b94ab;margin:0 2px 6px">${t("lz_hint")}</p><ul style="list-style:none;padding-left:2px">${tx.lernziele.map((z) => `<li style="margin:5px 0"><span class="lz-kids">${lzKompBadges(slot, z)}</span>${L(z)}</li>`).join("")}</ul>`
      : none;
  } else if (cardTab === "ki") {
    const { kat } = slotKomp(slot);
    const katList = (kat || "B").split(/[+/]/).map((x) => x.trim()).filter((x) => ST.pruefungslogik[x]);
    el.innerHTML = (tx ? `<p>${L(tx.ki)}</p>` : none) +
      `<ul style="margin-top:8px">` + katList.map((x) => `<li><b style="color:${ST.pruefungslogik[x].farbe}">${L(ST.pruefungslogik[x].name)}</b> — ${L(ST.pruefungslogik[x].def)}</li>`).join("") + `</ul>`;
  } else if (cardTab === "quest") {
    renderQuestTab(slot, el, tx, none);
  }
}
/* ---------- Quiz im Quest-Tab ---------- */
const REAKT = {
  de: { ok: ["Sauber hergeleitet! 🧠", "Signifikant richtig.", "Das sitzt — weiter so!", "Evidenzbasiert geantwortet. ✓", "Dein Hippocampus liefert."],
        no: ["Fast! Schau dir das Warum an:", "Guter Versuch — hier steckt der Denkfehler:", "Kein Drama: Fehler = Lernmoment.", "Knapp daneben — die Erklärung hilft:", "Das war der beliebteste Distraktor:"] },
  en: { ok: ["Cleanly reasoned! 🧠", "Significantly correct.", "That one stuck — keep going!", "An evidence-based answer. ✓", "Your hippocampus delivers."],
        no: ["Almost! Check the why:", "Good try — here's the catch:", "No drama: errors are learning moments.", "Close — the explanation helps:", "That was the most popular distractor:"] }
};
let cardQuiz = null; // { code, i, oks: [bool,...], picked: idx|null, order: [..] }
function qShuffle(n) { const a = [...Array(n).keys()]; for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function renderQuestTab(slot, el, tx, none) {
  const fragen = quizFor(slot);
  const code = quizCode(slot);
  let html = "";
  if (fragen && fragen.length) {
    if (S.quiz[code]) {
      html += `<div class="quiz-done-banner">🚩 ${t("quiz_bestanden")}</div>`;
    } else {
      if (!cardQuiz || cardQuiz.code !== code) cardQuiz = { code, i: 0, oks: [], picked: null, order: qShuffle(fragen[0].a.length) };
      const qz = cardQuiz;
      const f = fragen[qz.i];
      if (!qz.order || qz.order.length !== f.a.length) qz.order = qShuffle(f.a.length);
      html += `<p style="font-weight:800;margin-bottom:2px">🧩 ${t("quiz_titel")}</p>`;
      if (S.mode === "serious" && !isPlaced(slot.slot)) html += `<p style="font-size:11px;color:#b35c00;margin-bottom:6px">${t("quiz_gate_hint")}</p>`;
      html += `<div class="quiz-progress">${[0, 1, 2].map((n) => `<span class="qp ${qz.oks[n] ? "done" : n === qz.i ? "cur" : ""}"></span>`).join("")}</div>`;
      html += `<p style="font-size:10.5px;color:#5b6478">${t("quiz_von").replace("{i}", qz.i + 1)}</p>`;
      html += `<p class="quiz-q">${L(f.q)}</p>`;
      qz.order.forEach((ai) => {
        const a = f.a[ai];
        let cls = "";
        if (qz.picked !== null) cls = ai === f.korrekt ? "ok" : ai === qz.picked ? "no" : "";
        html += `<button class="quiz-a ${cls}" data-ai="${ai}" ${qz.picked !== null ? "disabled" : ""}>${L(a)}</button>`;
      });
      if (qz.picked !== null) {
        const richtig = qz.picked === f.korrekt;
        const rk = REAKT[S.lang] || REAKT.de;
        const flavor = (richtig ? rk.ok : rk.no)[(qz.i + f.korrekt) % 5];
        html += `<div class="quiz-erkl"><b>${richtig ? "✅ " : "❌ "}${flavor}</b><br>${L(f.erkl)}</div>`;
        if (HAS_AI && !richtig) html += `<button class="ghostbtn" data-qai style="margin-top:6px">${t("ai_quizhilfe")}</button><div data-qaiout class="quiz-erkl" style="display:none;margin-top:6px"></div>`;
        const last = qz.i === fragen.length - 1;
        if (!richtig) html += `<button class="primary" style="margin-top:8px" data-qredo>↺ ${t("quiz_nochmal")}</button>`;
        else if (!last) html += `<button class="primary" style="margin-top:8px" data-qnext>${t("quiz_weiter")} →</button>`;
      }
    }
  } else if (S.mode === "serious") {
    html += `<p style="font-size:11.5px;color:#8b94ab">${t("quiz_fehlt")}</p>`;
  }
  // Praxis-Quest darunter
  const q = S.quests[slot.slot] || {};
  const qt = tx && tx.quest;
  html += `<p style="font-weight:800;margin:12px 0 2px">✦ ${t("praxis_quest")}</p>`;
  html += qt ? `<p><b>${L(qt.titel)}</b></p><p style="margin-top:4px">${L(qt.text)}</p>` : none;
  if (q.done) html += `<p style="color:var(--ok);margin-top:8px"><b>✓ ${t("quest_abgeschlossen")}</b></p>`;
  // Notizen zum Modul: immer verfügbar, werden lokal gespeichert und erscheinen im Kompetenzpass
  html += `<p style="font-weight:700;font-size:12px;margin:10px 0 3px">📝 ${t("notiz_titel")}</p>
    <textarea data-qnote rows="3" maxlength="500" placeholder="${t("notiz_ph")}" style="width:100%;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 10px;font:500 12px var(--font);resize:vertical">${escHtml(q.note)}</textarea>
    <p data-qnotesaved style="font-size:10px;color:#8b94ab;margin:2px 0 0;visibility:hidden">✓ ${t("notiz_gespeichert")}</p>`;
  if (HAS_AI && qt) {
    html += `<details style="margin-top:10px"><summary style="cursor:pointer;font:700 12px var(--font);color:var(--blue)">${t("ai_feedback")}</summary>
      <textarea data-aiq rows="3" placeholder="${t("ai_feedback_ph")}" style="width:100%;margin-top:6px;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 10px;font:500 12px var(--font)"></textarea>
      <button class="primary" data-aiqbtn style="margin-top:6px">${t("ai_senden")}</button>
      <div data-aiqout class="quiz-erkl" style="display:none;margin-top:6px"></div></details>`;
  }
  const VIGN = ["400", "402", "403", "501", "502", "511", "s05", "s06", "s08"];
  if (HAS_AI && VIGN.includes(slot.slot) && tutorCtl) {
    html += `<button class="ghostbtn" data-aivig style="margin-top:10px">${t("ai_vignette")}</button>`;
  }
  el.innerHTML = html;
  const aiBtn = el.querySelector("[data-aiqbtn]");
  if (aiBtn) aiBtn.onclick = async () => {
    const ta = el.querySelector("[data-aiq]"), out = el.querySelector("[data-aiqout]");
    const sol = ta.value.trim(); if (!sol) return;
    out.style.display = "block"; out.textContent = t("ai_wartet");
    try {
      out.textContent = await aiComplete(`Du bist Tutor:in im Psychologiestudium UZH. Gib formatives Feedback (${S.lang === "de" ? "Deutsch, Schweizer Rechtschreibung" : "English"}, max. 90 Wörter, keine Note) auf die Lösung einer Übungsaufgabe. Nenne genau EINE Stärke und EINEN konkreten Verbesserungspunkt, freundlich und fachlich präzise.\nAufgabe («${L(qt.titel)}»): ${L(qt.text)}\nLösung der/des Studierenden: ${sol}\nFeedback:`);
    } catch (e) { out.textContent = t("tutor_err"); }
  };
  const vigBtn = el.querySelector("[data-aivig]");
  if (vigBtn) vigBtn.onclick = () => tutorCtl.open("vignette", slot);
  const qnote = el.querySelector("[data-qnote]");
  if (qnote) {
    let indTimer = null;
    qnote.addEventListener("input", () => {
      // sofort in den Zustand schreiben (kein Verlust bei Re-Render); save() ist selbst gedrosselt
      const cur = S.quests[slot.slot] || { done: false, note: "" };
      cur.note = qnote.value.trim().slice(0, 500);
      S.quests[slot.slot] = cur;
      save();
      clearTimeout(indTimer);
      indTimer = setTimeout(() => {
        const ind = el.querySelector("[data-qnotesaved]");
        if (ind) { ind.style.visibility = "visible"; setTimeout(() => { ind.style.visibility = "hidden"; }, 1600); }
      }, 500);
    });
  }

  el.querySelectorAll(".quiz-a").forEach((b) => (b.onclick = () => {
    if (!cardQuiz || cardQuiz.picked !== null) return;
    const ai = +b.dataset.ai;
    const f = fragen[cardQuiz.i];
    cardQuiz.picked = ai;
    cardQuiz.oks[cardQuiz.i] = ai === f.korrekt;
    if (ai === f.korrekt) SND.quest(); else SND.err();
    const last = cardQuiz.i === fragen.length - 1;
    if (last && cardQuiz.oks.every(Boolean) && cardQuiz.oks.length === fragen.length) {
      S.quiz[code] = true; save();
      setTimeout(() => {
        SND.fanfare();
        const g = blockMeshes[slot.slot];
        if (g) burstConfetti(g.position.x, g.position.y + 2.5, g.position.z, 60, 3);
        if (isPlaced(slot.slot)) refreshBlock(slot.slot); // Wimpel und ggf. Meister-Upgrade anbringen
        rebuildGarden();
        renderPlan(); renderCardBody(slot); renderCardActions(slot);
      }, 900);
    }
    renderCardBody(slot);
  }));
  const nx = el.querySelector("[data-qnext]");
  if (nx) nx.onclick = () => { cardQuiz.i++; cardQuiz.picked = null; cardQuiz.order = null; renderCardBody(slot); };
  const rd = el.querySelector("[data-qredo]");
  if (rd) rd.onclick = () => { cardQuiz.picked = null; cardQuiz.order = qShuffle(fragen[cardQuiz.i].a.length); renderCardBody(slot); };
  const qa = el.querySelector("[data-qai]");
  if (qa) qa.onclick = async () => {
    const out = el.querySelector("[data-qaiout]");
    out.style.display = "block"; out.textContent = t("ai_wartet");
    const f = fragen[cardQuiz.i];
    try {
      out.innerHTML = (await aiComplete(`Du bist Tutor:in im Psychologiestudium UZH. Eine Person hat diese Quizfrage falsch beantwortet. Erkläre das Konzept in 2 Sätzen NEU (anders als die Standarderklärung) und stelle dann GENAU EINE kurze Übungsfrage dazu, gefolgt von «Musterantwort:» und einer 1-Satz-Musterantwort. Sprache: ${S.lang === "de" ? "Deutsch (Schweizer Rechtschreibung)" : "English"}.\nFrage: ${L(f.q)}\nRichtige Antwort: ${L(f.a[f.korrekt])}\nGewählte falsche Antwort: ${L(f.a[cardQuiz.picked])}`))
        .replace(/Musterantwort:([\s\S]*)$/i, (m, rest) => `<details style="margin-top:4px"><summary style="cursor:pointer;font-weight:700">${S.lang === "de" ? "Musterantwort anzeigen" : "Show model answer"}</summary>${rest.trim()}</details>`);
    } catch (e) { out.textContent = t("tutor_err"); }
  };
}

function renderCardActions(slot) {
  const el = document.getElementById("cardActions");
  el.innerHTML = "";
  if (visitor.active) return;
  const placed = isPlaced(slot.slot);
  // Optionen-Wahl (WP / Mentoring)
  if (slot.optionen && !placed) {
    const d = document.createElement("div"); d.className = "optpick";
    d.innerHTML = `<span>${t("optionwahl")}</span>`;
    slot.optionen.forEach((code) => {
      const b = document.createElement("button");
      b.textContent = OPTMOD[code] ? L(OPTMOD[code].titel) : code;
      b.classList.toggle("on", pendingOpt === code);
      b.onclick = () => { pendingOpt = code; renderCardActions(slot); renderCardBody(slot); };
      d.appendChild(b);
    });
    el.appendChild(d);
  }
  // Schwerpunkt-Wahl
  if (slot.schwerpunktwahl) {
    const d = document.createElement("div"); d.className = "schwerpick";
    d.innerHTML = `<span>${t("schwerpunkt")}</span>`;
    Object.keys(ST.schwerpunkte).forEach((sp) => {
      const b = document.createElement("button");
      b.textContent = sp;
      b.title = L(ST.schwerpunkte[sp].name);
      b.setAttribute("aria-label", L(ST.schwerpunkte[sp].name));
      b.style.borderColor = ST.schwerpunkte[sp].farbe;
      const cur = placed ? (S.placed[S.mode][slot.slot].sp || "DeNC") : pendingSp;
      b.classList.toggle("on", cur === sp);
      b.onclick = () => {
        if (placed) { S.placed[S.mode][slot.slot].sp = sp; save(); refreshBlock(slot.slot); } else pendingSp = sp;
        renderCardActions(slot); renderPlan();
      };
      d.appendChild(b);
    });
    el.appendChild(d);
  }
  // Themen-Wahl (Wahlseminare s11/s12/s13 + BA-Themenfeld): prägt die BSc-Richtung
  if (THEMEN[slot.slot]) {
    const d = document.createElement("div"); d.className = "schwerpick themapick";
    d.innerHTML = `<span>${t("thema")}</span>`;
    THEMEN[slot.slot].forEach((th) => {
      const b = document.createElement("button");
      b.textContent = L(th.name);
      b.title = L((ST.richtungen[th.r] || {}).kurz || th.name);
      b.style.borderColor = (ST.richtungen[th.r] || {}).farbe || "#b9c2d9";
      const cur = placed ? (S.placed[S.mode][slot.slot].thema || null) : pendingThema;
      b.classList.toggle("on", cur === th.id);
      b.onclick = () => {
        if (placed) {
          S.placed[S.mode][slot.slot].thema = (S.placed[S.mode][slot.slot].thema === th.id) ? null : th.id;
          if (slot.slot === "BA") S.placed[S.mode].BA.frage = null; // Fragestellung gehört zum Gebiet
          save(); refreshBlock(slot.slot);
        } else {
          pendingThema = pendingThema === th.id ? null : th.id;
          if (slot.slot === "BA") pendingFrage = null;
          if (ghostSlot) showGhost(ghostSlot);
        }
        renderCardActions(slot); renderPlan(); renderProfil();
      };
      d.appendChild(b);
    });
    const hint = document.createElement("p");
    hint.style.cssText = "font-size:10px;color:#8b94ab;margin:2px 4px 0";
    hint.textContent = t("thema_hint");
    d.appendChild(hint);
    el.appendChild(d);
  }
  // Bachelorarbeit neu: vorgegebene Beispiel-Fragestellung (nach Gebietswahl) + AIAS-5-Artefakt
  if (slot.slot === "BA" && ST.baFragen) {
    const curThema = placed ? (S.placed[S.mode].BA.thema || null) : pendingThema;
    if (curThema && ST.baFragen[curThema]) {
      const d = document.createElement("div"); d.className = "schwerpick themapick";
      d.innerHTML = `<span>${t("frage")}</span>`;
      ST.baFragen[curThema].forEach((f) => {
        const form = (ST.baFormen || {})[f.form] || {};
        const b = document.createElement("button");
        b.textContent = `${form.icon || ""} ${L(f.name)}`;
        b.title = L(form.name || f.name);
        const cur = placed ? (S.placed[S.mode].BA.frage || null) : pendingFrage;
        b.classList.toggle("on", cur === f.id);
        b.onclick = () => {
          if (placed) { S.placed[S.mode].BA.frage = (S.placed[S.mode].BA.frage === f.id) ? null : f.id; save(); }
          else pendingFrage = pendingFrage === f.id ? null : f.id;
          renderCardActions(slot); renderProfil();
        };
        d.appendChild(b);
      });
      const hint = document.createElement("p");
      hint.style.cssText = "font-size:10px;color:#8b94ab;margin:2px 4px 0";
      hint.textContent = t("frage_hint");
      d.appendChild(hint);
      el.appendChild(d);
    }
    {
      const d = document.createElement("div"); d.className = "schwerpick themapick";
      d.innerHTML = `<span>${t("artefakt")}</span>`;
      (ST.baArtefakte || []).forEach((a) => {
        const b = document.createElement("button");
        b.textContent = `${a.icon} ${L(a.name)}`;
        b.title = L(a.kurz);
        const cur = placed ? (S.placed[S.mode].BA.artefakt || null) : pendingArtefakt;
        b.classList.toggle("on", cur === a.id);
        b.onclick = () => {
          if (placed) { S.placed[S.mode].BA.artefakt = (S.placed[S.mode].BA.artefakt === a.id) ? null : a.id; save(); refreshBlock("BA"); }
          else pendingArtefakt = pendingArtefakt === a.id ? null : a.id;
          renderCardActions(slot);
        };
        d.appendChild(b);
      });
      const hint = document.createElement("p");
      hint.style.cssText = "font-size:10px;color:#8b94ab;margin:2px 4px 0";
      hint.textContent = t("artefakt_hint");
      d.appendChild(hint);
      el.appendChild(d);
    }
  }
  // Stil-Wahl
  {
    const d = document.createElement("div"); d.className = "stilpick";
    d.innerHTML = `<span>${t("stil")}</span>`;
    ST.stile.forEach((sd) => {
      const b = document.createElement("button");
      b.textContent = L(sd.name);
      const cur = placed ? (S.placed[S.mode][slot.slot].stil || "klassisch") : pendingStil;
      b.classList.toggle("on", cur === sd.id);
      b.onclick = () => {
        if (placed) { S.placed[S.mode][slot.slot].stil = sd.id; save(); refreshBlock(slot.slot); } else { pendingStil = sd.id; if (ghostSlot) showGhost(ghostSlot); }
        renderCardActions(slot);
      };
      d.appendChild(b);
    });
    el.appendChild(d);
  }
  // Serious: bestanden-Häkchen
  if (S.mode === "serious" && !placed) {
    const lab = document.createElement("label"); lab.className = "sw";
    lab.innerHTML = `<input type="checkbox" ${S.bestanden[slot.slot] ? "checked" : ""}> <span>${t("bestanden")}</span>`;
    lab.querySelector("input").onchange = (e) => { S.bestanden[slot.slot] = e.target.checked; save(); renderPlan(); if (ghostSlot) showGhost(ghostSlot); renderCardActions(slot); };
    el.appendChild(lab);
  }
  // Empfehlung-Hinweis
  const empf = (slot.empf || []).filter((x) => !isPlaced(x));
  if (!placed && empf.length) {
    const r = document.createElement("div"); r.className = "reason"; r.style.color = "#b35c00";
    r.textContent = t("empf_hinweis") + empf.map((m) => L(SLOTS[m].titel).split(",")[0]).join(" · ");
    el.appendChild(r);
  }
  // Hauptaktion
  if (!placed) {
    const chk = canPlace(slot);
    const b = document.createElement("button"); b.className = "primary";
    b.textContent = t("bauen");
    b.disabled = !chk.ok;
    b.onclick = () => placeSlot(slot);
    el.appendChild(b);
    if (!chk.ok && chk.reason) { const r = document.createElement("div"); r.className = "reason"; r.textContent = chk.reason; el.appendChild(r); }
  } else {
    const q = S.quests[slot.slot] || {};
    const bq = document.createElement("button");
    bq.className = q.done ? "ghostbtn" : "primary";
    bq.textContent = q.done ? t("quest_undone") : t("quest_done");
    bq.onclick = () => {
      const cur = S.quests[slot.slot] || { done: false, note: "" }; // Notizen bleiben in beiden Richtungen erhalten
      if (q.done) {
        S.quests[slot.slot] = { done: false, note: cur.note || "" };
        removeSparkle(blockMeshes[slot.slot]);
        refreshBlock(slot.slot);
      } else {
        S.quests[slot.slot] = { done: true, note: cur.note || "" };
        addSparkle(blockMeshes[slot.slot], slot);
        SND.quest();
        const bm = blockMeshes[slot.slot];
        burstConfetti(bm.position.x, bm.position.y + 2, bm.position.z, 40, 2.5);
        refreshBlock(slot.slot);
      }
      save(); renderPlan(); renderCardActions(slot); renderCardBody(slot);
    };
    el.appendChild(bq);
    if (["box", "tower", "wing", "bay", "slab", "step"].includes(slot.form)) {
      const be = document.createElement("button"); be.className = "ghostbtn";
      be.textContent = slot.form === "slab" || slot.form === "step" ? "🔦 " + t("keller") : t("betreten");
      be.onclick = () => enterRoom(slot.slot);
      el.appendChild(be);
    }
    {
      const br = document.createElement("button"); br.className = "ghostbtn";
      br.textContent = t("entfernen");
      br.onclick = () => removeSlot(slot.slot);
      el.appendChild(br);
    }
  }
}
function refreshBlock(id) {
  const slot = SLOTS[id];
  const old = blockMeshes[id];
  if (old) blockGroup.remove(old);
  const g = buildBlockMesh(slot);
  decorateBlock(g, slot);
  blockGroup.add(g); blockMeshes[id] = g;
  rebuildWahrzeichen(); // Themen-/Schwerpunktwechsel kann das Wahrzeichen ändern
}

/* ---------- Modus, Sprache, Menü ---------- */
function setMode(m) {
  if (m === "serious" && !S.seriousSeen) {
    S.seriousSeen = true;
    setTimeout(() => alert(t("serious_erklaert")), 150);
  }
  S.mode = m; save();
  document.getElementById("modeFrei").classList.toggle("on", m === "frei");
  document.getElementById("modeSerious").classList.toggle("on", m === "serious");
  clearGhost(); closeCard(); rebuildAll(); renderPlan(); renderProfil();
  toast(t(m === "serious" ? "serious_info" : "frei_info"));
}
document.getElementById("modeFrei").onclick = () => setMode("frei");
document.getElementById("modeSerious").onclick = () => setMode("serious");
if (typeof S.sound === "undefined") S.sound = true;
SND.enabled = S.sound;
const btnSound = document.getElementById("btnSound");
btnSound.textContent = S.sound ? "🔊" : "🔇";
btnSound.onclick = () => {
  S.sound = !S.sound; SND.enabled = S.sound; save();
  btnSound.textContent = S.sound ? "🔊" : "🔇";
  if (S.sound) SND.pick();
};
document.getElementById("btnLang").onclick = () => {
  S.lang = S.lang === "de" ? "en" : "de"; save();
  applyI18n(); renderPlan(); renderProfil();
  if (selectedId) openCard(selectedId);
  fillModals();
};
const modals = { menu: "modalMenu", help: "modalHelp", privacy: "modalPrivacy", about: "modalAbout", share: "modalShare", onboard: "modalOnboard", p0: "modalP0", minor: "modalMinor", bauhuette: "modalBauhuette", geraete: "modalGeraete", changelog: "modalChangelog" };
function openModal(k) { document.getElementById(modals[k]).classList.add("open"); }
document.querySelectorAll(".modal").forEach((m) => {
  m.addEventListener("click", (e) => { if (e.target === m || e.target.hasAttribute("data-close")) m.classList.remove("open"); });
});
document.getElementById("btnMenu").onclick = () => openModal("menu");
document.getElementById("btnHelp").onclick = () => { openModal("help"); };
document.getElementById("btnPrivacy").onclick = () => openModal("privacy");
document.getElementById("btnAbout").onclick = () => openModal("about");
function fillModals() {
  document.getElementById("helpBox").innerHTML = window.HELP_HTML[S.lang] + `<div class="mactions"><button class="primary" data-close>${t("schliessen")}</button></div>`;
  document.getElementById("privacyBox").innerHTML = window.PRIVACY_HTML[S.lang] + `<div class="mactions"><button class="primary" data-close>${t("schliessen")}</button></div>`;
  document.getElementById("aboutBox").innerHTML = window.ABOUT_HTML[S.lang] + `<div class="mactions"><button class="primary" data-close>${t("schliessen")}</button></div>`;
  const ck = document.getElementById("ckDirektMsc");
  if (ck) { ck.checked = S.direktMSc; ck.onchange = (e) => { S.direktMSc = e.target.checked; save(); renderPlan(); toast(t("direkt_msc")); }; }
  renderPalRows();
}
/* Farbwelt-Wahl: kuratierte Paletten pro Haus (Menü) */
function renderPalRows() {
  for (const hausId of ["bsc", "msc"]) {
    const row = document.getElementById(hausId === "bsc" ? "palRowBsc" : "palRowMsc");
    if (!row) continue;
    row.innerHTML = `<span>${hausId === "bsc" ? "🏠" : "🏰"}</span>`;
    (ST.paletten || []).forEach((p) => {
      const b = document.createElement("button");
      b.textContent = L(p.name);
      b.style.borderColor = p.akzent;
      b.classList.toggle("on", ((S.pal || {})[hausId] || "uzh") === p.id);
      b.onclick = () => {
        if (!S.pal) S.pal = { bsc: "uzh", msc: "uzh" };
        S.pal[hausId] = p.id; save();
        rebuildAll(); renderPalRows(); SND.pick();
      };
      row.appendChild(b);
    });
  }
}

/* Export / Import / Reset */
document.getElementById("btnExport").onclick = () => {
  const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "kompetenzhaus-" + new Date().toISOString().slice(0, 10) + ".json";
  a.click(); URL.revokeObjectURL(a.href);
};
document.getElementById("btnImport").onclick = () => document.getElementById("fileImport").click();
document.getElementById("fileImport").onchange = (e) => {
  const f = e.target.files[0]; if (!f) return;
  if (!confirm(t("import_confirm"))) { e.target.value = ""; return; }
  const rd = new FileReader();
  rd.onload = () => {
    try {
      S = Object.assign(defaultState(), JSON.parse(rd.result)); save();
      applyI18n(); rebuildAll(); renderPlan(); renderProfil(); updateEnvironment(); setMode(S.mode);
      toast(t("import_ok"));
    } catch (err) { toast(t("import_err")); }
  };
  rd.readAsText(f);
};
document.getElementById("btnReset").onclick = () => {
  if (!confirm(t("reset_confirm"))) return;
  S = defaultState(); S.onboarded = true; save();
  clearGhost(); closeCard(); rebuildAll(); renderPlan(); renderProfil(); updateEnvironment();
};

/* ---------- Teilen & Besuch ---------- */
function encodeShare() {
  const o = { n: S.name, p: S.placed[S.mode], q: Object.fromEntries(Object.entries(S.quests).filter(([k, v]) => v.done).map(([k, v]) => [k, 1])) };
  return btoa(unescape(encodeURIComponent(JSON.stringify(o))));
}
document.getElementById("btnShare").onclick = () => {
  const url = location.origin === "null" || location.protocol === "file:" ? location.href.split("#")[0] : location.href.split("#")[0];
  document.getElementById("shareLink").value = url + "#h=" + encodeShare();
  openModal("share");
};
document.getElementById("btnCopy").onclick = async () => {
  const inp = document.getElementById("shareLink");
  inp.select();
  try { await navigator.clipboard.writeText(inp.value); } catch (e) { document.execCommand("copy"); }
  toast(t("kopiert"));
};
function tryVisitor() {
  if (!location.hash.startsWith("#h=")) return false;
  try {
    const o = JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(3)))));
    visitor.active = true; visitor.data = o;
    S.placed = { frei: o.p || {}, serious: {} };
    S.mode = "frei";
    S.quests = Object.fromEntries(Object.entries(o.q || {}).map(([k]) => [k, { done: true, note: "" }]));
    document.getElementById("visitorText").textContent = `${t("besuch_bei")} ${o.n || "?"} 🏠`;
    document.getElementById("visitor").classList.add("open");
    document.getElementById("panelL").style.display = "none";
    document.getElementById("modeSeg").style.display = "none";
    return true;
  } catch (e) { return false; }
}
document.getElementById("visitorOwn").onclick = () => { location.hash = ""; location.reload(); };
document.getElementById("visitorSave").onclick = () => {
  try {
    const stored = storageOK ? JSON.parse(localStorage.getItem(STORE) || "null") || defaultState() : defaultState();
    stored.nachbarn = (stored.nachbarn || []).filter((n) => n.n !== visitor.data.n).slice(0, 2);
    stored.nachbarn.push(visitor.data);
    localStorage.setItem(STORE, JSON.stringify(stored));
    toast(t("nachbar_gespeichert"));
  } catch (e) {}
};

/* ---------- Campus ---------- */
let campusOn = false;
const neighborGroup = new THREE.Group(); scene.add(neighborGroup);
function nameSprite(txt) {
  const c = document.createElement("canvas"); c.width = 512; c.height = 128;
  const x = c.getContext("2d");
  x.font = "700 52px Helvetica, Arial"; x.textAlign = "center";
  x.fillStyle = "rgba(255,255,255,.92)";
  const w = x.measureText(txt).width + 60;
  x.beginPath(); x.roundRect((512 - w) / 2, 18, w, 92, 26); x.fill();
  x.fillStyle = "#0028a5"; x.fillText(txt, 256, 82);
  const tex = new THREE.CanvasTexture(c);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
  sp.scale.set(7, 1.75, 1);
  return sp;
}
function buildNeighborHouses() {
  neighborGroup.clear();
  const bases = [[-27, -23], [0, -28], [27, -23]];
  const SC = 0.75;
  (S.nachbarn || []).slice(0, 3).forEach((nb, i) => {
    const [ox, oz] = bases[i];
    const grp = new THREE.Group();
    for (const [id, st] of Object.entries(nb.p || {})) {
      const slot = SLOTS[id]; if (!slot) continue;
      const g = buildBlockMesh(slot, { state: st, placedMap: nb.p });
      const h = ST.haeuser[slot.haus];
      // relativ zum Nachbar-Grundstück: beide Häuser zusammenrücken, Höhen mitskalieren
      g.position.set(ox + (h.origin[0] * 0.45) + slot.pos.x * CELL * SC, floorBase(slot.pos.y) * SC, oz + slot.pos.z * CELL * SC);
      g.scale.set(SC, SC, SC);
      grp.add(g);
    }
    const label = nameSprite(nb.n || "?");
    label.position.set(ox, 9, oz);
    grp.add(label);
    neighborGroup.add(grp);
  });
  neighborGroup.visible = campusOn;
}
document.getElementById("btnCampus").onclick = () => {
  campusOn = !campusOn;
  buildNeighborHouses();
  neighborGroup.visible = campusOn;
  if (campusOn) {
    flyTo(new THREE.Vector3(0, 40, 52), new THREE.Vector3(0, 2, -7), 1.6);
    toast(t("campus_an"));
  } else {
    flyTo(new THREE.Vector3(-23, 17, 30), new THREE.Vector3(-7, 3, 0), 1.4);
    toast(t("campus_aus"));
  }
};

/* ---------- Kompetenzpass ---------- */
document.getElementById("btnPass").onclick = () => {
  const { score, max } = profilWerte();
  const dat = new Date().toLocaleDateString(S.lang === "de" ? "de-CH" : "en-GB");
  let rows = "";
  for (const slot of ST.slots) {
    if (!isPlaced(slot.slot)) continue;
    const p = S.placed[S.mode][slot.slot];
    const q = S.quests[slot.slot] || {};
    const { kat } = slotKomp(slot);
    const e = p && p.opt && OPTMOD[p.opt] ? OPTMOD[p.opt].ects : slot.ects;
    const thName = (() => {
      const th = themaFor(slot.slot);
      let s = th ? " · " + L(th.name) : "";
      if (slot.slot === "BA") { // neue BA: gewählte Fragestellung + AIAS-5-Artefakt im Pass ausweisen
        const bf = baFrage(), ba = baArtefakt();
        if (bf) s += " · " + (((ST.baFormen || {})[bf.form] || {}).icon || "") + " " + L(bf.name);
        if (ba) s += " · " + ba.icon + " " + L(ba.name);
      }
      return s;
    })();
    rows += `<tr><td>${(p && p.opt) || slot.code}</td><td>${slotTitel(slot)}${p && p.sp ? " · " + p.sp : ""}${thName}</td><td style="text-align:center">${e}</td><td style="text-align:center">[${kat}]</td><td>${q.done ? "✦ " : ""}${q.note ? (q.done ? "" : "📝 ") + escHtml(q.note) : ""}</td></tr>`;
  }
  let bars = "";
  for (const feld of ["fa", "ki", "fu"]) {
    const f = ST.felder[feld];
    bars += `<h3 style="margin:14px 0 6px;color:${f.farbe}">${L(f.name)}</h3>`;
    for (const k of ST.kompetenzen.filter((k) => k.feld === feld)) {
      const pct = max[k.id] ? Math.round((score[k.id] / max[k.id]) * 100) : 0;
      bars += `<div style="display:flex;align-items:center;gap:8px;margin:3px 0;font-size:12px">
        <span style="width:260px">${k.id} · ${L(k.name)}</span>
        <span style="flex:1;background:#eee;border-radius:4px;height:10px;overflow:hidden"><span style="display:block;height:100%;width:${pct}%;background:${f.farbe}"></span></span>
        <span style="width:36px;text-align:right">${pct}%</span></div>`;
      if (k.sub && k.sub.length) { // 12 AIComp-Future-Skills-Felder als Detailebene
        for (const s of k.sub) {
          const sp = fs12Pct(s, score, max);
          bars += `<div style="display:flex;align-items:center;gap:8px;margin:1px 0 1px 22px;font-size:10.5px;color:#555">
            <span style="width:238px">${s.id} · ${L(s.name)}</span>
            <span style="flex:1;background:#f2f2f2;border-radius:3px;height:6px;overflow:hidden"><span style="display:block;height:100%;width:${sp}%;background:${f.farbe};opacity:.65"></span></span>
            <span style="width:36px;text-align:right">${sp}%</span></div>`;
        }
      }
    }
  }
  bars += `<p style="font-size:9.5px;color:#8b94ab;margin-top:4px">FS1–FS12: AIComp-Future-Skills-Felder (Ehlers et al., 2024) — Detailebene zu Fu1–Fu3.</p>`;
  /* ---- Seite 2: «Ich kann …» — Kompetenznachweis im Detail (nach Kompetenzen gruppiert) ---- */
  const ICHS = window.ICH_STUFEN || {}, ICHL = window.ICH_LERNZIELE || {};
  let ich = `<div style="page-break-before:always"></div>
  <h2 style="color:#0028a5;margin:8px 0 2px">🧭 ${t("ich_titel")}</h2>
  <p style="font-size:11px;color:#5b6478;line-height:1.5;margin-bottom:6px">${t("ich_intro")}</p>`;
  for (const feld of ["fa", "ki", "fu"]) {
    const f = ST.felder[feld];
    const tag = feld === "fa" ? "F" : feld === "ki" ? "K" : "S";
    ich += `<h3 style="color:${f.farbe};border-bottom:2.5px solid ${f.farbe};padding-bottom:3px;margin:16px 0 6px">${L(f.name)}</h3>`;
    let any = false;
    for (const k of ST.kompetenzen.filter((k) => k.feld === feld)) {
      const st = kompStufe(k.id);
      if (!st) continue;
      any = true;
      const anker = (ICHS[k.id] || [])[st - 1];
      ich += `<div style="margin:8px 0 2px;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap">
        <b style="font-size:12px">${k.id} · ${L(k.name)}</b>
        <span style="font-size:9px;font-weight:700;color:#fff;background:${f.farbe};border-radius:999px;padding:2px 8px;white-space:nowrap">${t("stufe")} ${st} · ${L(ST.stufen[st - 1].name)}</span></div>`;
      if (anker) ich += `<p style="font-size:11.5px;font-style:italic;color:#2c3550;margin:0 0 2px 2px">«${L(anker)}»</p>`;
    }
    if (!any) { ich += `<p style="font-size:10.5px;color:#8b94ab">${t("ich_keine")}</p>`; continue; }
    let rowsIch = "";
    for (const slot of ST.slots) {
      if (!isPlaced(slot.slot)) continue;
      const code = (S.placed[S.mode][slot.slot] || {}).opt || slot.code;
      (ICHL[code] || []).forEach((z) => {
        if (!(z.b || []).includes(tag)) return;
        const ids = lzKompIds(slot, [tag]).map((id) => `<b style="color:${f.farbe}">${id}</b>`).join(" ");
        rowsIch += `<li style="margin:3px 0">${ids ? ids + " — " : ""}${L(z)} <span style="color:#8b94ab;font-size:9px;white-space:nowrap">· ${slotTitel(slot).split(",")[0]}</span></li>`;
      });
    }
    if (rowsIch) ich += `<p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#5b6478;margin:9px 0 2px">✓ ${t("ich_konkret")}</p>
      <ul style="font-size:10.5px;line-height:1.5;padding-left:16px;margin:0 0 8px">${rowsIch}</ul>`;
  }
  ich += `<p style="font-size:9.5px;color:#8b94ab;margin-top:6px">${t("ich_fussnote")}</p>`;
  const foto = hausFoto();
  const html = `<!DOCTYPE html><html lang="${S.lang}"><head><meta charset="utf-8"><title>Kompetenzpass</title>
  <style>*{-webkit-print-color-adjust:exact !important;print-color-adjust:exact !important}
  body{font-family:"Helvetica Neue",Arial,sans-serif;color:#1c2333;max-width:820px;margin:24px auto;padding:0 16px}
  h1{color:#0028a5;font-size:24px} table{border-collapse:collapse;width:100%;font-size:11.5px;margin-top:10px}
  td,th{border:1px solid #d8dce8;padding:5px 8px;text-align:left} th{background:#f0f3fa}
  .hint{font-size:10.5px;color:#5b6478;margin-top:18px;line-height:1.5}
  @media print {.noprint{display:none}}</style></head><body>
  <div class="noprint" style="float:right;text-align:right">
    <button onclick="print()" style="padding:10px 20px;border:0;background:#0028a5;color:#fff;border-radius:10px;cursor:pointer;font-weight:700;font-size:14px">💾 ${S.lang === "de" ? "Als PDF speichern" : "Save as PDF"}</button>
    <div style="font-size:10px;color:#5b6478;margin-top:4px">${S.lang === "de" ? "Im Druckdialog «Als PDF sichern» wählen" : "Choose 'Save as PDF' in the print dialog"}</div>
  </div>
  <h1>🎓 ${t("pass")} — ${escHtml(S.name) || "—"}</h1>
  <p style="font-size:12.5px;color:#5b6478">${t("passdatum")}: ${dat} · ${S.mode === "serious" ? t("modus_serious") : t("modus_frei")} · BSc: ${ectsSum("bsc")}/120 · MSc: ${ectsSum("msc")}/120 ${t("ects")}</p>
  ${foto ? `<img src="${foto}" alt="Kompetenzhaus" style="width:100%;border-radius:12px;margin:8px 0">` : ""}
  ${bars}
  ${ich}
  <h3 style="margin-top:18px">${t("bauplan")}</h3>
  <table><tr><th>Code</th><th>Modul</th><th>${t("ects")}</th><th>[A/B/C]</th><th>Quest ✦</th></tr>${rows}</table>
  <p class="hint">${L(ST.meta.hinweis)}<br>Kompetenzmodell: APA (2023); DGPs (2014); QAA (2023); Bass et al. (2025); Miao et al. (2024); Ehlers et al. (2024); Perkins et al. (2025).</p>
  </body></html>`;
  const w = window.open("about:blank");
  if (w && w.document) { w.document.write(html); w.document.close(); }
  else {
    const blob = new Blob([html], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "kompetenzpass.html";
    a.click(); URL.revokeObjectURL(a.href);
  }
};

/* ---------- Umgebungs-Steuerung & Echtzeit ---------- */
function applyRealEnv() {
  if (!S.envAuto) return;
  S.season = autoSeason();
  const now = new Date();
  const h = now.getHours() + now.getMinutes() / 60;
  S.tod = Math.max(0, Math.min(100, Math.round(((h - 5.5) / 17) * 100)));
  const slider = document.getElementById("todSlider");
  if (slider) slider.value = S.tod;
  updateEnvironment();
}
document.querySelectorAll("#envRow .envbtn[data-season]").forEach((b) => {
  b.onclick = () => { S.envAuto = false; S.season = b.dataset.season; save(); updateEnvironment(); };
});
document.getElementById("todSlider").oninput = (e) => { S.envAuto = false; S.tod = +e.target.value; save(); updateEnvironment(); };
document.getElementById("btnEnvAuto").onclick = () => {
  S.envAuto = !S.envAuto; save();
  if (S.envAuto) applyRealEnv();
  updateEnvironment();
  toast(t(S.envAuto ? "envauto_an" : "envauto_aus"));
};
setInterval(applyRealEnv, 60000);

/* ---------- Foto-Modus ---------- */
document.getElementById("btnFoto").onclick = () => {
  document.body.classList.add("foto");
  const p0 = camera.position.clone(), t0 = controls.target.clone();
  const focus = mscOpen() && ectsSum("msc") > 0 ? new THREE.Vector3(0, 3.5, 0) : new THREE.Vector3(-11, 3.5, 0);
  flyTo(new THREE.Vector3(focus.x - 19, 13, 28), focus, 1.2, () => {
    step();
    renderer.render(scene, camera);
    try {
      const a = document.createElement("a");
      a.href = renderer.domElement.toDataURL("image/png");
      a.download = "kompetenzhaus-" + new Date().toISOString().slice(0, 10) + ".png";
      a.click();
      toast("📷 " + t("foto_hint"));
    } catch (e) {}
    setTimeout(() => {
      document.body.classList.remove("foto");
      flyTo(p0, t0, 1);
    }, 600);
  });
};
function hausFoto() { // für den Kompetenzpass
  renderer.render(scene, camera);
  try { return renderer.domElement.toDataURL("image/jpeg", 0.82); } catch (e) { return null; }
}

/* Panels mobil */
document.getElementById("togL").onclick = () => document.getElementById("panelL").classList.toggle("open");
document.getElementById("togR").onclick = () => document.getElementById("panelR").classList.toggle("open");

/* ---------- Innenansicht ---------- */
let interior = null; // { id, group, saved: [{mat, opacity, transparent}], btn, prevMin }
function propBox(w, h, d, color, x, y, z, ry = 0) {
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, Math.min(0.04, w / 4)), new THREE.MeshStandardMaterial({ color, roughness: 0.85 }));
  m.position.set(x, y, z); m.rotation.y = ry;
  return m;
}
function buildRoom(slot, W, H, D) {
  const g = new THREE.Group();
  const keller = slot.form === "slab" || slot.form === "step";
  const wallMat = new THREE.MeshStandardMaterial({ color: keller ? 0xd9d5cb : 0xf3efe6, roughness: 0.97, side: THREE.DoubleSide });
  const floorMat = new THREE.MeshStandardMaterial({ color: keller ? 0xb4b0a6 : 0xc9a877, roughness: 0.92 });
  const iw = W - 0.2, ih = H - 0.15, idp = D - 0.2;
  const floor = new THREE.Mesh(new THREE.BoxGeometry(iw, 0.06, idp), floorMat); floor.position.y = 0.05; g.add(floor);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(iw, ih), wallMat); back.position.set(0, ih / 2, -idp / 2); g.add(back);
  back.userData.wallN = new THREE.Vector3(0, 0, 1);
  const left = new THREE.Mesh(new THREE.PlaneGeometry(idp, ih), wallMat.clone()); left.rotation.y = Math.PI / 2; left.position.set(-iw / 2, ih / 2, 0); g.add(left);
  left.userData.wallN = new THREE.Vector3(1, 0, 0);
  const right = new THREE.Mesh(new THREE.PlaneGeometry(idp, ih), wallMat.clone()); right.rotation.y = -Math.PI / 2; right.position.set(iw / 2, ih / 2, 0); g.add(right);
  right.userData.wallN = new THREE.Vector3(-1, 0, 0);
  // Möblierung: Keller-Themen (Fundament/Sockel) vor Gruppen-Themen
  const gr = slot.gruppe;
  const y0 = 0.08;
  const code = slot.code;
  if (keller && code === "06SM200-001") { // Waschküche
    for (let i = 0; i < 2; i++) {
      const wm = propBox(0.52, 0.6, 0.5, 0xf4f4f0, -iw * 0.3 + i * 0.62, y0 + 0.3, -idp * 0.32);
      g.add(wm);
      const bull = new THREE.Mesh(new THREE.CircleGeometry(0.15, 18), new THREE.MeshStandardMaterial({ color: 0x1c2740, roughness: 0.25, metalness: 0.3 }));
      bull.position.set(-iw * 0.3 + i * 0.62, y0 + 0.32, -idp * 0.32 + 0.26);
      g.add(bull);
    }
    const korb = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 0.26, 9), new THREE.MeshStandardMaterial({ color: 0xd9a441, roughness: 1, flatShading: true }));
    korb.position.set(iw * 0.22, y0 + 0.13, idp * 0.1); g.add(korb);
    const leine = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, iw * 0.7, 5), new THREE.MeshStandardMaterial({ color: 0x8b94ab }));
    leine.rotation.z = Math.PI / 2; leine.position.set(0, ih * 0.78, idp * 0.2); g.add(leine);
    [0xd96a4b, 0x4a90d9, 0xf3d34e].forEach((c, i) => g.add(propBox(0.16, 0.22, 0.02, c, -0.3 + i * 0.3, ih * 0.78 - 0.12, idp * 0.2)));
  } else if (keller && code === "06SM200-002") { // Heizung & Technik
    const kessel = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.85, 12), new THREE.MeshStandardMaterial({ color: 0xc94f3d, roughness: 0.55, metalness: 0.25 }));
    kessel.position.set(-iw * 0.28, y0 + 0.43, -idp * 0.28); g.add(kessel);
    const rohr = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, iw * 0.75, 8), new THREE.MeshStandardMaterial({ color: 0x9aa2b5, metalness: 0.6, roughness: 0.35 }));
    rohr.rotation.z = Math.PI / 2; rohr.position.set(0, ih * 0.85, -idp / 2 + 0.12); g.add(rohr);
    const rohr2 = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, ih * 0.7, 8), rohr.material);
    rohr2.position.set(-iw * 0.28, ih * 0.5, -idp / 2 + 0.12); g.add(rohr2);
    g.add(propBox(0.42, 0.55, 0.16, 0x8b94ab, iw * 0.28, ih * 0.55, -idp / 2 + 0.12)); // Sicherungskasten
    const wz = new THREE.Mesh(new THREE.CircleGeometry(0.09, 14), new THREE.MeshStandardMaterial({ color: 0xf4f4f0 }));
    wz.position.set(iw * 0.28, ih * 0.55, -idp / 2 + 0.22); g.add(wz);
  } else if (keller && (code === "06SM200-003")) { // Garderobe am Eingang
    const stange = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, iw * 0.7, 6), new THREE.MeshStandardMaterial({ color: 0x8a6642 }));
    stange.rotation.z = Math.PI / 2; stange.position.set(0, ih * 0.7, -idp * 0.3); g.add(stange);
    [0x0028a5, 0xd96a4b, 0x2a9d8f].forEach((c, i) => g.add(propBox(0.2, 0.34, 0.06, c, -0.3 + i * 0.3, ih * 0.7 - 0.2, -idp * 0.3)));
    g.add(propBox(iw * 0.6, 0.09, 0.28, 0x8a6642, 0, y0 + 0.1, idp * 0.2)); // Schuhbank
  } else if (keller && code === "06SM200-500") { // Statistik-Serverraum
    for (let i = 0; i < 2; i++) {
      const rack = propBox(0.42, 1.0, 0.4, 0x1c2333, -iw * 0.25 + i * 0.6, y0 + 0.5, -idp * 0.3);
      g.add(rack);
      for (let l = 0; l < 4; l++) {
        const led = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.02), new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: l % 2 ? 0x35d07f : 0x4a90d9, emissiveIntensity: 0.9 }));
        led.position.set(-iw * 0.25 + i * 0.6, y0 + 0.24 + l * 0.2, -idp * 0.3 + 0.21);
        g.add(led);
      }
    }
    g.add(propBox(0.7, 0.06, 0.4, 0x8a6642, iw * 0.24, y0 + 0.36, idp * 0.12)); // Arbeitstisch
  } else if (keller && code === "06SM200-501") { // Test-Archiv
    const regal = propBox(1.1, 1.05, 0.26, 0x8a6642, -iw * 0.2, y0 + 0.53, -idp * 0.32);
    g.add(regal);
    [0xd96a4b, 0x0028a5, 0x2a9d8f, 0xd9a441, 0x5e60ce, 0xe17055].forEach((c, i) => g.add(propBox(0.26, 0.09, 0.2, c, -iw * 0.2 - 0.38 + (i % 3) * 0.38, y0 + 0.4 + Math.floor(i / 3) * 0.34, -idp * 0.32)));
  } else if (keller && code === "06SM200-502") { // Vorrats-/Archivkeller
    for (let i = 0; i < 2; i++) g.add(propBox(0.9, 0.95, 0.24, 0x9a8a72, -iw * 0.22 + i * 1.0, y0 + 0.48, -idp * 0.33));
    [0xcabfa8, 0xb9c0cf, 0xd9a441, 0xcabfa8].forEach((c, i) => g.add(propBox(0.3, 0.22, 0.3, c, -iw * 0.3 + (i % 2) * 0.5, y0 + 0.3 + Math.floor(i / 2) * 0.35, -idp * 0.33)));
  } else if (gr === "meth" || gr === "mein") {
    g.add(propBox(0.9, 0.06, 0.5, 0x8a6642, -iw * 0.2, y0 + 0.38, -idp * 0.25));
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.32), new THREE.MeshStandardMaterial({ color: 0x0c1830, emissive: 0x7fb4e8, emissiveIntensity: 0.55 }));
    screen.position.set(-iw * 0.2, y0 + 0.62, -idp * 0.25); g.add(screen);
    g.add(propBox(0.34, 0.5, 0.34, 0x39415a, -iw * 0.2, y0 + 0.25, idp * 0.05));
  } else if (gr === "prop") {
    for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) g.add(propBox(0.34, 0.42, 0.3, 0x3f6cc8, (c - 1) * 0.5, y0 + 0.21, idp * 0.05 + r * 0.45));
    g.add(propBox(0.8, 0.55, 0.35, 0x8a6642, 0, y0 + 0.28, -idp * 0.3));
  } else if (gr === "klin") {
    g.add(propBox(0.45, 0.4, 0.42, 0xd96a4b, -iw * 0.22, y0 + 0.2, 0, 0.5));
    g.add(propBox(0.45, 0.4, 0.42, 0x2a9d8f, iw * 0.22, y0 + 0.2, 0, -0.5));
    g.add(propBox(0.32, 0.3, 0.32, 0x8a6642, 0, y0 + 0.15, -idp * 0.05));
    const plant = new THREE.Mesh(new THREE.IcosahedronGeometry(0.16, 0), new THREE.MeshStandardMaterial({ color: 0x4e9440, flatShading: true }));
    plant.position.set(iw * 0.34, y0 + 0.45, -idp * 0.32); g.add(plant);
    g.add(propBox(0.1, 0.28, 0.1, 0xb98a5a, iw * 0.34, y0 + 0.14, -idp * 0.32));
  } else if (gr === "enk") {
    g.add(propBox(0.3, 0.55, 0.3, 0xd8dce6, 0, y0 + 0.28, -idp * 0.15));
    const brain = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 1), new THREE.MeshStandardMaterial({ color: 0xe8a0b4, roughness: 0.6, flatShading: true }));
    brain.position.set(0, y0 + 0.72, -idp * 0.15); brain.name = "spin"; g.add(brain);
  } else if (gr === "swod") {
    const tisch = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.06, 12), new THREE.MeshStandardMaterial({ color: 0x8a6642, roughness: 0.85 }));
    tisch.position.set(0, y0 + 0.4, 0); g.add(tisch);
    g.add(propBox(0.08, 0.4, 0.08, 0x6b5138, 0, y0 + 0.2, 0));
    for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2; g.add(propBox(0.3, 0.38, 0.28, 0xd9a441, Math.cos(a) * 0.72, y0 + 0.19, Math.sin(a) * 0.72, -a)); }
  } else { // Bibliothek/Studierzimmer
    const shelf = propBox(1.1, 1.1, 0.24, 0x8a6642, -iw * 0.24, y0 + 0.55, -idp * 0.36);
    g.add(shelf);
    [0xd96a4b, 0x2a9d8f, 0x3f6cc8, 0xd9a441, 0x5e60ce].forEach((c, i) => g.add(propBox(0.1, 0.26, 0.16, c, -iw * 0.24 - 0.4 + i * 0.2, y0 + 0.78, -idp * 0.36)));
    g.add(propBox(0.7, 0.06, 0.45, 0xa9855e, iw * 0.2, y0 + 0.38, 0));
    g.add(propBox(0.3, 0.44, 0.3, 0x39415a, iw * 0.2, y0 + 0.22, idp * 0.28));
  }
  // Raum-Polish: Licht, Decke, Teppich, Wandbild
  const lampe = new THREE.PointLight(0xffe3b3, keller ? 0.75 : 0.95, Math.max(iw, idp) * 3.2, 1.8);
  lampe.position.set(0, ih * 0.86, 0);
  g.add(lampe);
  const schirm = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.12, 10, 1, true), new THREE.MeshStandardMaterial({ color: 0xf3d34e, side: THREE.DoubleSide, emissive: 0xffe3b3, emissiveIntensity: 0.35 }));
  schirm.position.set(0, ih * 0.9, 0);
  g.add(schirm);
  if (!keller) { // Kellerräume bleiben oben offen — Puppenhaus-Blick in die Grube
    const decke = new THREE.Mesh(new THREE.PlaneGeometry(iw, idp), new THREE.MeshStandardMaterial({ color: 0xe8e4da, side: THREE.DoubleSide, roughness: 1 }));
    decke.rotation.x = Math.PI / 2; decke.position.y = ih; g.add(decke);
  }
  if (!keller) {
    const teppich = new THREE.Mesh(new THREE.CircleGeometry(Math.min(iw, idp) * 0.32, 22), new THREE.MeshStandardMaterial({ color: new THREE.Color(ST.gruppen[slot.gruppe].farbe).lerp(new THREE.Color(0xffffff), 0.62), roughness: 1 }));
    teppich.rotation.x = -Math.PI / 2; teppich.position.y = 0.09; g.add(teppich);
    const bildRahmen = propBox(0.5, 0.38, 0.03, 0xf2f0e9, iw / 2 - 0.06, ih * 0.6, 0, Math.PI / 2);
    g.add(bildRahmen);
    const bild = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.28), new THREE.MeshStandardMaterial({ color: 0x9ec3e0 }));
    bild.rotation.y = -Math.PI / 2; bild.position.set(iw / 2 - 0.085, ih * 0.6, 0); g.add(bild);
    const berg = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.12, 4), new THREE.MeshStandardMaterial({ color: 0x4e7a5a, flatShading: true }));
    berg.rotation.y = -Math.PI / 2; berg.position.set(iw / 2 - 0.09, ih * 0.57, 0.03); g.add(berg);
  } else { // Kellerfenster (Lichtschächte) mit Tageslicht-Schimmer + Treppe nach oben
    for (const fx of [-iw * 0.28, iw * 0.28]) {
      const kf = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.2), new THREE.MeshStandardMaterial({ color: 0xbcd8ee, emissive: 0xbcd8ee, emissiveIntensity: 0.4 }));
      kf.position.set(fx, ih * 0.9, -idp / 2 + 0.02); g.add(kf);
    }
    if (idp > 3.2) { // Treppe nach oben (nur in grossen Kellerräumen)
      const nSt = 6, sh = ih / (nSt + 1);
      for (let s = 0; s < nSt; s++) {
        const st = new THREE.Mesh(new THREE.BoxGeometry(0.78, sh, 0.36), betonMat.clone());
        st.position.set(iw / 2 - 0.44, sh / 2 + s * sh, idp / 2 - 0.28 - (nSt - 1 - s) * 0.37);
        g.add(st);
      }
    }
  }
  // IPS-Grundpfeiler-Poster (P1–P4) in der Garderobe
  if (slot.code === "06SM200-003") {
    const PS = [
      { p: "P1", info: { de: "P1 · «Wie ‹denkt› ein LLM?» — Live-Demo, Falschinfo finden (KI4)", en: "P1 · 'How does an LLM think?' — live demo, spotting misinformation (KI4)" } },
      { p: "P2", info: { de: "P2 · Spielregeln & Disclosure — «assistieren, nicht ersetzen — deklarieren — verifizieren» (KI5)", en: "P2 · Rules & disclosure — 'assist, don't replace — declare — verify' (KI5)" } },
      { p: "P3", info: { de: "P3 · Fakten-Check — erfundene Referenzen gegen das Lehrbuch prüfen (KI6)", en: "P3 · Fact check — testing invented references against the textbook (KI6)" } },
      { p: "P4", info: { de: "P4 · Erste Nutzung mit Haltung — Prompt-Duell, Mit-/Ohne-KI-Reflexion (KI1)", en: "P4 · First use with attitude — prompt duel, with/without-AI reflection (KI1)" } }
    ];
    PS.forEach((ps, i) => {
      const poster = new THREE.Group();
      const bg2 = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.44), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 }));
      const lbl = textSprite(ps.p, "#0028a5");
      lbl.scale.set(0.4, 0.16, 1); lbl.position.z = 0.02;
      poster.add(bg2, lbl);
      poster.rotation.y = Math.PI / 2;
      poster.position.set(-iw / 2 + 0.03, ih * 0.55, -idp * 0.3 + i * 0.5);
      poster.children.forEach((ch) => (ch.userData.info = ps.info));
      poster.userData.info = ps.info;
      g.add(poster);
    });
  }
  // Kompetenz-Tafeln an der Rückwand (Klick → Ich-Satz)
  const { komp, haupt } = slotKomp(slot);
  const all = [...(komp.fa || []), ...(komp.ki || []), ...(komp.fu || [])].slice(0, 6);
  all.forEach((id, i) => {
    const k = KOMP[id]; if (!k) return;
    const col = ST.felder[k.feld].farbe;
    const plq = new THREE.Group();
    const frame = new THREE.Mesh(new THREE.PlaneGeometry(0.56, 0.42), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 }));
    const sp = textSprite(id, col);
    sp.scale.set(0.62, 0.24, 1); sp.position.z = 0.02;
    plq.add(frame, sp);
    const cols = Math.min(3, all.length);
    const cx = ((i % cols) - (cols - 1) / 2) * 0.75;
    const cy = ih * 0.62 - Math.floor(i / cols) * 0.55;
    plq.position.set(cx, cy, -idp / 2 + 0.03);
    plq.userData.kompId = id;
    plq.children.forEach((ch) => (ch.userData.kompId = id));
    g.add(plq);
  });
  g.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });
  return g;
}
function enterRoom(id) {
  if (interior) leaveRoom();
  const slot = SLOTS[id]; const bg = blockMeshes[id];
  if (!slot || !bg || !["box", "tower", "wing", "bay", "slab", "step"].includes(slot.form)) return;
  const kellerRaum = slot.form === "slab" || slot.form === "step";
  // Innen = Aussen: Raummasse 1:1 aus der Aussenhülle des Blocks abgeleitet
  const W = slot.pos.w * CELL;
  const D = slot.pos.d * CELL;
  const H = kellerRaum ? KELLER_T - 0.12 : (slot.form === "wing" ? 1.7 : slot.pos.h) * FH;
  const room = buildRoom(slot, W, H, D);
  room.position.copy(bg.position);
  if (kellerRaum) room.position.y = 0.24 - KELLER_T; // der Keller liegt wirklich unter dem Bodenniveau
  scene.add(room);
  const saved = [];
  bg.traverse((o) => {
    if (o.isMesh && o.material) {
      saved.push({ mat: o.material, opacity: o.material.opacity, transparent: o.material.transparent });
      o.material.transparent = true; o.material.opacity = 0.13; o.material.depthWrite = false;
      o.material.needsUpdate = true;
    }
  });
  if (kellerRaum) { // Boden ausblenden, damit der Blick in die Grube frei ist
    for (const m of [grassMat, plotMat, pathMat]) { m.transparent = true; m.opacity = 0.14; m.depthWrite = false; m.needsUpdate = true; }
  }
  const faceZ = slot.pos.z >= 0 || slot.form === "wing" ? 1 : -1;
  const target = room.position.clone().add(new THREE.Vector3(0, H * 0.45, 0));
  const camDist = kellerRaum ? D * 0.62 + 1.6 : D * 1.9 + 1.2;
  const camPos = kellerRaum
    ? room.position.clone().add(new THREE.Vector3(0, KELLER_T + 2.6, faceZ * camDist))
    : bg.position.clone().add(new THREE.Vector3(0, H * 0.55, faceZ * camDist));
  const prevMin = controls.minDistance;
  controls.minDistance = 0.4;
  document.body.classList.add("inroom");
  flyTo(camPos, target, 1.1);
  const btn = document.createElement("button");
  btn.className = "iconbtn blue";
  btn.style.cssText = "position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:26";
  btn.textContent = "🚪 " + t("verlassen");
  btn.onclick = leaveRoom;
  document.body.appendChild(btn);
  closeCard();
  interior = { id, group: room, saved, btn, prevMin, keller: kellerRaum };
  SND.pick();
}
function leaveRoom() {
  if (!interior) return;
  document.body.classList.remove("inroom");
  scene.remove(interior.group);
  interior.saved.forEach((s) => { s.mat.opacity = s.opacity; s.mat.transparent = s.transparent; s.mat.depthWrite = true; s.mat.needsUpdate = true; });
  if (interior.keller) for (const m of [grassMat, plotMat, pathMat]) { m.opacity = 1; m.transparent = false; m.depthWrite = true; m.needsUpdate = true; }
  interior.btn.remove();
  controls.minDistance = interior.prevMin;
  const bg = blockMeshes[interior.id];
  if (bg) flyTo(bg.position.clone().add(new THREE.Vector3(-9, 8, 15)), bg.position.clone(), 1);
  interior = null;
}

/* ---------- Erstbau in 60 Sekunden (statt Onboarding-Modal) ---------- */
function startFirstBuild() {
  const coach = document.getElementById("coach");
  if (isPlaced("003")) { // z.B. Reload, bevor das Onboarding abgeschlossen war
    document.getElementById("obStart").textContent = t("tour_fertig");
    openModal("onboard");
    return;
  }
  const slot = SLOTS["003"];
  const h = ST.haeuser[slot.haus];
  const p = new THREE.Vector3(h.origin[0] + slot.pos.x * CELL, 0.7, h.origin[2] + slot.pos.z * CELL);
  const mob = window.innerWidth < 720; // mobil weiter weg, sonst füllt die Porch den Schirm
  flyTo(new THREE.Vector3(p.x + 3, mob ? 6.5 : 4.5, p.z + (mob ? 13 : 8)), p, 1.7, () => {
    if (!isPlaced("003") && !S.onboarded && coach.classList.contains("open")) { showGhost(slot); selectedId = "003"; renderPlan(); }
  });
  coach.style.cssText = "left:50%;transform:translateX(-50%);bottom:26px";
  coach.innerHTML = `<b>${t("fb1_t")}</b>${t("fb1")}<div class="cactions"><button data-fbskip style="background:rgba(255,255,255,.18);color:#fff">${t("fb1_skip")}</button><button data-fbgo>${t("fb1_go")}</button></div>`;
  coach.classList.add("open");
  coach.querySelector("[data-fbgo]").onclick = () => { SND.unlock(); if (!isPlaced("003")) placeSlot(SLOTS["003"]); };
  coach.querySelector("[data-fbskip]").onclick = () => { coach.classList.remove("open"); clearGhost(); openModal("onboard"); };
}

/* ---------- Onboarding-Tour: 8 Schritte mit Kameraflügen zu allen wichtigen Elementen ---------- */
function startTour(force) {
  if (S.tourDone && !force) return;
  if (document.getElementById("milestone").classList.contains("open")) { setTimeout(() => startTour(force), 2500); return; }
  const coach = document.getElementById("coach");
  const mobil = window.innerWidth <= 1080;
  const camP = camera.position.clone(), camT = controls.target.clone();
  const unten = "left:50%;transform:translateX(-50%);bottom:26px";
  const fabAn = document.getElementById("tutorFab").style.display === "block";
  const flyAt = (x, z, dx, dz) => [new THREE.Vector3(x + dx, 3.6, z + dz), new THREE.Vector3(x, 0.9, z)];
  const steps = [
    { sel: "#panelL", open: "panelL", tt: "tour1_t", tx: "tour1", css: mobil ? unten : "left:322px;top:120px" },
    { sel: "#card", tt: "tour2_t", tx: "tour2", css: "left:50%;transform:translateX(-50%);bottom:calc(46vh + 20px)" },
    { sel: "#panelR", open: "panelR", tt: "tour3_t", tx: "tour3", css: mobil ? unten : "right:322px;top:120px;left:auto" },
    { sel: "#btnPass", tt: "tour4_t", tx: "tour4", css: mobil ? unten : "right:12px;top:66px;left:auto" },
    { fly: flyAt(briefkasten.position.x, briefkasten.position.z, 3.2, 4.5), tt: "tour5_t", tx: "tour5", css: unten },
    { fly: flyAt(beetGroup.position.x, beetGroup.position.z, 3, 4.5), tt: "tour6_t", tx: "tour6", css: unten },
    { fly: flyAt(bauhuette.position.x, bauhuette.position.z, 4, 5.5), tt: "tour7_t", tx: "tour7", css: unten },
    fabAn ? { sel: "#tutorFab", tt: "tour8_t", tx: "tour8", css: mobil ? "right:12px;bottom:80px;left:auto" : "right:320px;bottom:80px;left:auto" } : null
  ].filter(Boolean);
  let i = 0;
  const ende = () => {
    document.querySelectorAll(".coach-target").forEach((e) => e.classList.remove("coach-target"));
    coach.classList.remove("open");
    S.tourDone = true; save();
    flyTo(camP, camT, 1.2);
  };
  const show = () => {
    document.querySelectorAll(".coach-target").forEach((e) => e.classList.remove("coach-target"));
    if (mobil) { document.getElementById("panelL").classList.remove("open"); document.getElementById("panelR").classList.remove("open"); }
    if (i >= steps.length) { ende(); return; }
    const s = steps[i];
    if (mobil && s.open) document.getElementById(s.open).classList.add("open");
    if (s.sel === "#card" && !document.getElementById("card").classList.contains("open")) {
      const nxt = selectedId || nextRecommended(); // die Tour zeigt die Karte an einem echten Baustein
      if (nxt) selectSlot(nxt);
    }
    if (s.sel) {
      const tgt = document.querySelector(s.sel);
      if (tgt && tgt.offsetParent !== null) tgt.classList.add("coach-target");
    }
    if (s.fly) flyTo(s.fly[0], s.fly[1], 1.3);
    coach.style.cssText = s.css;
    coach.innerHTML = `<b>${t(s.tt)}</b>${t(s.tx)}<div class="cactions"><span class="cstep">${i + 1}/${steps.length}</span><span style="display:flex;gap:6px"><button data-skip style="background:rgba(255,255,255,.18);color:#fff">${t("tour_skip")}</button><button data-next>${i === steps.length - 1 ? t("tour_fertig") : t("tour_weiter")}</button></span></div>`;
    coach.classList.add("open");
    coach.querySelector("[data-next]").onclick = () => { i++; SND.pick(); show(); };
    coach.querySelector("[data-skip]").onclick = () => { SND.pick(); ende(); };
  };
  show();
}

/* ---------- KI-Baututor (nur wenn window.claude verfügbar, z.B. Artifact) ---------- */
function initTutor() {
  const api = window.claude && typeof window.claude.complete === "function" ? window.claude.complete.bind(window.claude) : null;
  if (!api) {
    if (TUTOR_URL) { // ohne window.claude: 🤖-Button öffnet das Companion-Chat-Artifact
      const fab = document.getElementById("tutorFab");
      fab.style.display = "block";
      fab.title = t("tutor_ext");
      fab.setAttribute("aria-label", t("tutor_ext"));
      fab.onclick = () => window.open(TUTOR_URL, "_blank", "noopener");
    }
    return;
  }
  const fab = document.getElementById("tutorFab"), box = document.getElementById("tutor"), msgs = document.getElementById("tutorMsgs");
  fab.style.display = "block";
  let hist = [];
  let mode = "tutor", vignSlot = null;
  const add = (who, txt) => {
    const d = document.createElement("div");
    d.className = "tmsg " + who; d.textContent = txt;
    msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
    return d;
  };
  fab.onclick = () => { box.classList.toggle("open"); if (box.classList.contains("open") && !msgs.children.length) add("bot", t("tutor_hi")); };
  document.getElementById("tutorClose").onclick = () => box.classList.remove("open");
  const ctx = () => {
    if (mode === "vignette" && vignSlot) {
      const tx = slotText(vignSlot);
      return `ROLLENSPIEL-MODUS im Lernspiel «Das Kompetenzhaus» (Psychologiestudium UZH). Du spielst eine FIKTIVE Klientin/Person passend zum Modul «${slotTitel(vignSlot)}» (Kontext: ${tx ? L(tx.heute).slice(0, 240) : ""}). Regeln: (1) Alles ist erfunden — keine realen Ratschläge, keine echten Diagnosen an die Nutzenden. (2) Bleibe konsequent in der Rolle, antworte kurz (2–4 Sätze), realistisch, aber didaktisch ergiebig. (3) KEINE Schilderung akuter Suizidalität oder schwerer Krisen; falls die Nutzenden solche Themen einbringen, verlasse die Rolle und verweise auf professionelle Hilfe (in der Schweiz: 143 / 147). (4) Wenn die Nutzenden «Stopp» schreiben, verlasse die Rolle und stelle GENAU EINE kurze Reflexionsfrage zum Gespräch. Sprache: ${S.lang === "de" ? "Deutsch (Schweizer Rechtschreibung)" : "English"}.`;
    }
    const built = ST.slots.filter((s) => isPlaced(s.slot)).map((s) => slotTitel(s)).join("; ") || "-";
    const next = nextRecommended();
    return `Du bist der «KI-Baututor» im Lernspiel «Das Kompetenzhaus» (Psychologiestudium UZH, BSc/MSc; Module = Bausteine eines Hauses; Kompetenzen: Fa1–Fa10 fachlich, KI1–KI6 KI, Fu1–Fu3 Future Skills; Prüfungslogik [A] KI-frei / [B] teilweise / [C] KI-integriert; Basis: Kompetenzaufbaumodell 02.07.2026, ein ENTWURF als Gesprächsbasis). Antworte kurz (max. 120 Wörter), freundlich, auf ${S.lang === "de" ? "Deutsch (Schweizer Rechtschreibung)" : "English"}. Keine Rechtsauskünfte; verweise bei Studienberatung an die Studienprogrammleitung. Spielstand: gebaut = ${built}. Empfohlener nächster Baustein: ${next ? slotTitel(SLOTS[next]) : "-"}.`;
  };
  tutorCtl = {
    open(newMode, slot) {
      mode = newMode || "tutor"; vignSlot = slot || null; hist = [];
      box.classList.add("open");
      if (mode === "vignette") {
        msgs.innerHTML = "";
        add("bot", t("ai_vignette_sys"));
        send("(Beginne das Gespräch mit einer kurzen Vorstellung deiner fiktiven Rolle.)", true);
      }
    }
  };
  const send = async (forced, silent) => {
    const inp = document.getElementById("tutorInput");
    const q = forced || inp.value.trim(); if (!q) return;
    if (!forced) inp.value = "";
    if (!silent) add("me", q);
    const wait = add("bot", "…");
    const who = mode === "vignette" ? "Studierende:r" : "Studierende:r";
    const bot = mode === "vignette" ? "Klientin" : "Baututor";
    hist.push(who + ": " + q);
    try {
      const out = await api(ctx() + "\n\n" + hist.slice(-8).join("\n") + "\n" + bot + ":");
      wait.textContent = String(out).trim();
      hist.push(bot + ": " + wait.textContent);
    } catch (e) { wait.textContent = t("tutor_err"); }
    if (mode === "vignette" && (q.toLowerCase().startsWith("stopp") || q.toLowerCase().startsWith("stop"))) { mode = "tutor"; vignSlot = null; hist = []; }
  };
  document.getElementById("tutorSend").onclick = () => send();
  document.getElementById("tutorInput").addEventListener("keydown", (e) => { if (e.key === "Enter") send(); });
}

/* ---------- Exporte: Open Badges & Portfolio ---------- */
function download(name, text, type = "application/json") {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type }));
  a.download = name; a.click(); URL.revokeObjectURL(a.href);
}
function badgesExport() {
  const seen = S.msSeen[S.mode] || [];
  const badges = ST.meilensteine.filter((m) => seen.includes(m.id)).map((m) => ({
    "@context": "https://www.w3.org/ns/credentials/v2",
    type: ["VerifiableCredential", "OpenBadgeCredential"],
    name: m.name.de,
    description: m.text.de,
    credentialSubject: {
      type: ["AchievementSubject"],
      identifier: S.name || "anonym",
      achievement: {
        type: ["Achievement"],
        name: m.name.de,
        description: m.text.de,
        criteria: { narrative: "Meilenstein im Kompetenzhaus (Selbstdeklaration, unsigniert — Entwurf)" },
        alignment: ST.kompetenzen.map((k) => ({ type: ["Alignment"], targetName: k.id + " " + k.name.de }))
      }
    },
    issuer: { type: ["Profile"], name: "Das Kompetenzhaus — Psychologisches Institut UZH (Entwurf, unsigniert)" },
    validFrom: new Date().toISOString(),
    proof: []
  }));
  download("kompetenzhaus-badges.json", JSON.stringify(badges, null, 2));
}
function olatExport() {
  const { score, max } = profilWerte();
  let md = `# Kompetenzportfolio — ${S.name || "—"}\n\n_${t("passdatum")}: ${new Date().toLocaleDateString("de-CH")} · ${S.mode === "serious" ? "Serious Mode" : "Freies Bauen"} · BSc ${ectsSum("bsc")}/120 ECTS · MSc ${ectsSum("msc")}/120 ECTS_\n\n> Entwurf auf Basis des Kompetenzaufbaumodells vom 02.07.2026 — Selbstdeklaration, kein offizieller Leistungsnachweis.\n\n## Kompetenzprofil\n\n`;
  for (const feld of ["fa", "ki", "fu"]) {
    md += `### ${ST.felder[feld].name.de}\n\n`;
    for (const k of ST.kompetenzen.filter((k) => k.feld === feld)) {
      const pct = max[k.id] ? Math.round((score[k.id] / max[k.id]) * 100) : 0;
      const st = kompStufe(k.id);
      md += `- **${k.id} ${k.name.de}** — ${pct}%${st ? `, Stufe ${st}` : ""}${cvText(k.id, st) ? `\n  - _${cvText(k.id, st)}_` : ""}\n`;
    }
    md += "\n";
  }
  md += `## Module & Reflexionen\n\n`;
  for (const slot of ST.slots) {
    if (!isPlaced(slot.slot)) continue;
    const q = S.quests[slot.slot] || {};
    const code = quizCode(slot);
    md += `- **${slotTitel(slot)}** (${slot.ects} ECTS)${S.quiz[code] ? " · Quiz ✓" : ""}${q.done ? " · Quest ✦" : ""}${q.note ? `\n  - Merksatz: «${q.note}»` : ""}\n`;
  }
  download("kompetenzhaus-portfolio.md", md, "text/markdown");
}

/* ---------- Toast ---------- */
let toastTimer = null;
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg; el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}

/* ---------- Onboarding ---------- */
document.getElementById("obStart").onclick = () => {
  S.name = document.getElementById("obName").value.trim().slice(0, 40);
  S.onboarded = true; save();
  document.getElementById("modalOnboard").classList.remove("open");
  SND.unlock();
  const nxt = isPlaced("003") ? nextRecommended() : "003"; // nach dem Erstbau direkt den nächsten Schritt zeigen
  if (nxt) selectSlot(nxt);
  setTimeout(startTour, 900);
};
/* Backdrop-Schliessen des Onboardings zählt als «ohne Namen abschliessen» — sonst bliebe S.onboarded für immer false */
document.getElementById("modalOnboard").addEventListener("click", (e) => {
  if ((e.target === document.getElementById("modalOnboard") || e.target.hasAttribute("data-close")) && !S.onboarded && !visitor.active) {
    S.onboarded = true; save();
    setTimeout(startTour, 900);
  }
});
document.getElementById("btnBadges").onclick = badgesExport;
document.getElementById("btnOlat").onclick = olatExport;

/* Ampel-Feedback-Export (CSV, für FAPS/AG Lehre — Schiene-C-Protokoll) */
document.getElementById("btnFb").onclick = () => {
  const rows = Object.entries(S.fb || {});
  if (!rows.length) { toast(t("fb_leer")); return; }
  const esc = (s) => '"' + String(s || "").replace(/"/g, '""') + '"';
  const AMP = { g: "gruen", y: "gelb", r: "rot" };
  let csv = "﻿code;modul;ampel;kommentar;datum\n"; // BOM für Excel
  for (const [id, fb] of rows) {
    const slot = SLOTS[id]; if (!slot) continue;
    const code = (S.placed[S.mode][id] || {}).opt || slot.code;
    csv += [esc(code), esc(slotTitel(slot)), AMP[fb.a] || "", esc(fb.note), fb.ts || ""].join(";") + "\n";
  }
  download("kompetenzhaus-feedback-" + new Date().toISOString().slice(0, 10) + ".csv", csv, "text/csv;charset=utf-8");
  toast("🚦 " + t("fb_exported").replace("{n}", rows.length));
};

/* Changelog-Tafel: der Rückmelde-Loop wird sichtbar */
const CHANGELOG = {
  de: [
    ["v8 · Juli 2026", "Dein Wahlprofil wird zum Haus: Themenwahl in den drei BSc-Wahlseminaren und im BA-Themenfeld prägt Erker, Dach und ein eigenes Wahrzeichen; im Master zeigt jede Vertiefung ihren Schwerpunkt architektonisch, ab 4 von 6 im selben Schwerpunkt entsteht ein grosses Wahrzeichen (Observatorium, Therapiegarten, Glasatrium). Wahlpflicht (goldene Kante) und freie Wahl (weisse Kante) sind sichtbar unterschieden, Auskragendes wird von Konsolen und Stützen getragen. Neu ausserdem: kuratierte Farbwelten pro Haus, zwei neue Baustile, Karriere-Tab mit Soll-Profilen, Lückenanalyse und «Nach dem Master»-Roadmaps (inkl. Psychotherapie- und Neuropsychologie-Weg), Masterarbeit als «Meisterstück» der Stufe 4."],
    ["v7 · Juli 2026", "Echter Keller unter dem Bodenniveau (Sockel ragen ins Erdreich), Haus vergrössert & Innenräume 1:1 an die Aussenhülle gekoppelt, Porch mit Vordach und Stufen, Erstbau-Sequenz für neue Besucher:innen, Bauhütte mit Evidenz zu den 8 Lehrelementen, Ampel-Feedback 🚦 an jedem Modul mit CSV-Export."],
    ["v6 · Juli 2026", "Mobile-Überarbeitung (Tour, Kontraste, grössere Ziele), Quiz mit Erklärung und Sofort-Wiederholung, 7 Karrierewege, Faktenkorrektur IPS-Leistungsnachweis [B]."],
    ["v5 · Juli 2026", "Baukasten-Chips in der Modul-Karte, Vorstufe-⓪-Briefkasten, Minor-Beet, KI-Suite in der Artifact-Version."],
    ["v4 · Juli 2026", "Begehbare Kellerräume, 12 Future-Skills-Felder (AIComp), Innenraum-Politur, Kompetenzpass als PDF."],
    ["v3 · Juli 2026", "Quiz-Gate im Serious Mode, Karriere-Profil, Innenansicht mit Kompetenz-Tafeln, Foto-Modus, Open-Badges- und Portfolio-Export."]
  ],
  en: [
    ["v8 · July 2026", "Your elective profile becomes the house: topic choices in the three BSc elective seminars and the thesis field shape bay windows, roof and a landmark of your own; in the Master's each specialisation shows its track architecturally, and 4 of 6 in the same track build a large landmark (observatory, therapy garden, glass atrium). Compulsory electives (gold edge) and free electives (white edge) are visibly distinct, and everything cantilevered is carried by corbels and columns. Also new: curated colour worlds per house, two new building styles, a career tab with target profiles, gap analysis and post-Master roadmaps (incl. the psychotherapy and neuropsychology routes), and the Master's thesis as a level-4 «masterpiece»."],
    ["v7 · July 2026", "A real basement below ground level (plinths reach into the earth), bigger house with interiors matched 1:1 to the exterior shell, porch with canopy and steps, first-build sequence for new visitors, site hut with evidence for the 8 teaching elements, traffic-light feedback 🚦 on every module with CSV export."],
    ["v6 · July 2026", "Mobile overhaul (tour, contrast, larger targets), quiz with explanations and instant retry, 7 career paths, factual fix for the IPS assessment [B]."],
    ["v5 · July 2026", "Teaching-toolkit chips on module cards, stage-⓪ mailbox, minor garden bed, AI suite in the artifact edition."],
    ["v4 · July 2026", "Walkable basement rooms, 12 future-skills fields (AIComp), interior polish, passport as PDF."],
    ["v3 · July 2026", "Quiz gate in serious mode, career profile, interior view with competence plaques, photo mode, Open Badges and portfolio export."]
  ]
};
document.getElementById("btnTour").onclick = () => {
  document.getElementById("modalMenu").classList.remove("open");
  if (visitor.active) return;
  closeCard();
  startTour(true);
};
document.getElementById("btnChangelog").onclick = () => {
  const list = CHANGELOG[S.lang] || CHANGELOG.de;
  document.getElementById("clogList").innerHTML = list.map(([v, tx]) => `<div class="bhrow"><b>${v}</b><p>${tx}</p></div>`).join("");
  document.getElementById("modalMenu").classList.remove("open");
  openModal("changelog");
};

/* ---------- Render-Loop ---------- */
const clock = new THREE.Clock();
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.updateProjectionMatrix();
}
window.addEventListener("resize", resize); resize();

let elapsed = 0, lastTick = 0;
function animate() {
  requestAnimationFrame(animate);
  step();
}
function step() {
  lastTick = performance.now();
  const dtRaw = Math.min(0.5, clock.getDelta());
  let dt = dtRaw;
  if (hitstopT > 0) { hitstopT -= dtRaw; dt = 0; } // Hitstop: Welt friert 70 ms beim Einrasten
  elapsed += dt;
  // Tweens
  for (let i = tweens.length - 1; i >= 0; i--) {
    const tw = tweens[i];
    tw.t += dt;
    const k = Math.min(1, tw.t / tw.dur);
    tw.fn(tw.ease(k));
    if (k >= 1) { tweens.splice(i, 1); if (tw.onDone) tw.onDone(); }
  }
  // Geist pulsieren
  if (ghost) {
    const s = 1 + Math.sin(elapsed * 5) * 0.02;
    ghost.scale.set(s, s, s);
  }
  // Funkeln, Fahnen, Wimpel drehen
  for (const g of Object.values(blockMeshes)) {
    const sp = g.getObjectByName("sparkle");
    if (sp) { sp.rotation.y += dt * 2.4; sp.position.y += Math.sin(elapsed * 3) * 0.0022; }
    const flag = g.getObjectByName("flag");
    if (flag) flag.rotation.y = Math.sin(elapsed * 2.2) * 0.25;
    const pf = g.getObjectByName("pennant");
    if (pf) { const w = pf.getObjectByName("pflag"); if (w) w.rotation.y = Math.sin(elapsed * 3.1 + g.position.x) * 0.35; }
  }
  gardenGroup.traverse((o) => { if (o.name === "flag") o.rotation.y = Math.sin(elapsed * 1.8) * 0.3; });
  if (interior) {
    interior.group.traverse((o) => {
      if (o.name === "spin") o.rotation.y += dt * 0.8;
      if (o.userData.wallN) { // Sims-Cutaway: kamerazugewandte Wände absenken
        const toCam = camera.position.clone().sub(interior.group.position).normalize();
        const facing = o.userData.wallN.dot(toCam) < -0.25;
        const ziel = facing ? 0.12 : 1;
        o.scale.y += (ziel - o.scale.y) * Math.min(1, dt * 9);
        o.position.y = (o.geometry.parameters.height / 2) * o.scale.y;
      }
    });
  }
  // Fensterlicht flackert nachts ganz leicht (Kerzen-Feeling)
  if (windowMats.length && windowMats[0].emissiveIntensity > 0) {
    const flicker = 0.9 + Math.sin(elapsed * 7.3) * 0.04 + Math.sin(elapsed * 13.7) * 0.03;
    for (const m of windowMats) if (m.emissiveIntensity > 0) m.emissiveIntensity = flicker;
  }
  // Ambient-Partikel
  if (amb.visible) {
    const cfg = SEASONS[S.season];
    const m4 = new THREE.Matrix4(), e = new THREE.Euler();
    for (let i = 0; i < AMB_N; i++) {
      const pt = ambParts[i];
      pt.p.y -= cfg.ambFall * dt * (0.6 + pt.s * 0.5);
      pt.p.x += Math.sin(elapsed * 0.8 + pt.ph) * dt * 0.7;
      if (pt.p.y < 0.2) pt.p.y = 16 + Math.random() * 5;
      e.set(elapsed * 1.4 + pt.ph, pt.ph, elapsed * 0.9);
      m4.makeRotationFromEuler(e);
      m4.scale(new THREE.Vector3(pt.s, pt.s, pt.s));
      m4.setPosition(pt.p);
      amb.setMatrixAt(i, m4);
    }
    amb.instanceMatrix.needsUpdate = true;
  }
  // Avatar: Gehzyklus & Idle
  if (avatarWalk) {
    const sw = Math.sin(elapsed * 13);
    avatar.userData.legs.forEach((l, i) => (l.rotation.x = (i ? 1 : -1) * sw * 0.65));
    avatar.userData.arms.forEach((a, i) => (a.rotation.x = (i ? -1 : 1) * sw * 0.5));
  } else {
    avatar.rotation.y += Math.sin(elapsed * 0.6) * 0.0012;
  }
  // Wolkendrift
  for (const c of clouds) {
    c.position.x += c.userData.v * dt;
    if (c.position.x > 75) c.position.x = -75;
  }
  // Glühwürmchen wandern
  if (fireflies.material.opacity > 0) {
    const fp = fireflies.geometry.attributes.position;
    for (let i = 0; i < fp.count; i++) {
      fp.setY(i, 0.7 + Math.abs(Math.sin(elapsed * 0.7 + i * 2.1)) * 2.2);
      fp.setX(i, fp.getX(i) + Math.sin(elapsed * 0.5 + i) * 0.008);
    }
    fp.needsUpdate = true;
    fireflies.material.size = 0.3 + Math.sin(elapsed * 4) * 0.08;
  }
  controls.update();
  // Kamera-Shake
  if (shakeT > 0) {
    shakeT -= dt;
    const a = shakeT * 0.5;
    camera.position.x += (Math.random() - 0.5) * a;
    camera.position.y += (Math.random() - 0.5) * a;
  }
  renderer.render(scene, camera);
}

/* ---------- Boot ---------- */
applyI18n();
fillModals();
const isVisitor = tryVisitor();
rebuildAll();
growMinor();
renderPlan();
renderProfil();
/* Erstbesuch: Golden Hour als Postkarten-Start; Echtzeit erst nach dem Onboarding */
if (!S.onboarded) { S.season = autoSeason(); S.tod = 62; }
else if (S.envAuto) applyRealEnv();
updateEnvironment();
document.getElementById("todSlider").value = S.tod;
initTutor();
if (!storageOK) setTimeout(() => toast(t("storage_warn")), 1500);
if (!isVisitor && !S.onboarded) setTimeout(startFirstBuild, 700);
else if (!isVisitor && !S.tourDone && Object.keys(S.placed[S.mode]).length < 3) setTimeout(startTour, 1200);
/* Mobile-Menü-Duplikate */
const wireM = (mid, target) => { const b = document.getElementById(mid); if (b && target) b.onclick = () => { document.getElementById("modalMenu").classList.remove("open"); target.click(); }; };
wireM("btnCampusM", document.getElementById("btnCampus"));
wireM("btnShareM", document.getElementById("btnShare"));
wireM("btnSoundM", document.getElementById("btnSound"));
wireM("btnFotoM", document.getElementById("btnFoto"));
window.__game = { get state() { return S; }, checkMilestones, save, step, enterRoom, leaveRoom, openBauhuette, avatarClamp, get avatarPos() { return { x: avatar.position.x, z: avatar.position.z }; }, get interior() { return interior ? { id: interior.id, opacity: interior.saved[0] ? interior.saved[0].mat.opacity : null } : null; }, get tweens() { return tweens.map((t) => ({ t: t.t, dur: t.dur })); }, get frame() { return elapsed; }, placeByChip: (id) => { const s = SLOTS[id]; if (s) { selectSlot(id); return placeSlot(s); } return false; } };
animate();
/* Fallback: läuft weiter, wenn der Tab gedrosselt ist (rAF pausiert) */
setInterval(() => { if (performance.now() - lastTick > 400) step(); }, 250);
