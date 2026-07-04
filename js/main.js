/* =====================================================================
   Das Kompetenzhaus — 3D-Bauspiel (Three.js)
   Statik = Studienlogik · Kompetenzen = Profil · keine Ranglisten.
   ===================================================================== */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const ST = window.STRUKTUR, TEXTE = window.MODUL_TEXTE || {};
const CELL = 1.35, FH = 1.5;
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
  v: 2, lang: "de", mode: "frei", name: "", direktMSc: false, onboarded: false,
  placed: { frei: {}, serious: {} }, bestanden: {}, quests: {}, quiz: {},
  msSeen: { frei: [], serious: [] }, nachbarn: [], season: autoSeason(), tod: 35,
  sound: true, envAuto: true
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
  const code = (p && p.opt) || slot.code;
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
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 400);
camera.position.set(-20, 15, 26);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; controls.dampingFactor = 0.06;
controls.maxPolarAngle = Math.PI * 0.49; controls.minDistance = 6; controls.maxDistance = 90;
controls.target.set(-6, 2.5, 0);
const hemi = new THREE.HemisphereLight(0xbfd9ff, 0x8a7a55, 0.75); scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffe9c4, 2.2);
sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -40; sun.shadow.camera.right = 40; sun.shadow.camera.top = 40; sun.shadow.camera.bottom = -40;
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
    const x = (Math.random() - 0.5) * 70, z = (Math.random() - 0.5) * 48;
    if (Math.abs(x) < 20 && Math.abs(z) < 8) continue; // Grundstücke frei halten
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
const easeOutBack = (k) => { const c = 1.9; return 1 + (c + 1) * Math.pow(k - 1, 3) + c * Math.pow(k - 1, 2); };
const easeInOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
function tween(dur, fn, ease = easeOutCubic, onDone = null) { tweens.push({ t: 0, dur, fn, ease, onDone }); }
let shakeT = 0;

function flyTo(pos, target, dur = 1.6, after = null) {
  const p0 = camera.position.clone(), t0 = controls.target.clone();
  controls.enabled = false;
  tween(dur, (k) => {
    camera.position.lerpVectors(p0, pos, k);
    controls.target.lerpVectors(t0, target, k);
  }, easeInOut, () => { controls.enabled = !visitor.active ? true : true; controls.enabled = true; if (after) after(); });
}

/* ---------- Material-Stile ---------- */
function colFor(slot) {
  const p = S.placed[S.mode][slot.slot];
  if (slot.schwerpunktwahl && p && p.sp) return new THREE.Color(ST.schwerpunkte[p.sp].farbe);
  return new THREE.Color(ST.gruppen[slot.gruppe].farbe);
}
function styleMat(baseColor, stil) {
  const c = baseColor.clone();
  let rough = 0.85, metal = 0.02;
  if (stil === "hell") c.lerp(new THREE.Color(0xffffff), 0.45);
  if (stil === "holz") { c.lerp(new THREE.Color(0x8a6642), 0.55); rough = 0.95; }
  if (stil === "glas") { c.lerp(new THREE.Color(0x9db8d9), 0.5); rough = 0.28; metal = 0.35; }
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
  const base = colFor(slot);
  const g = new THREE.Group();
  const pos = slot.pos;
  const W = pos.w * CELL, D = pos.d * CELL;
  let H = pos.h * FH;
  if (slot.form === "wing") H = 1.7 * FH;
  const mat = styleMat(base, stil);
  let main;
  const rb = (w, h, d, r = 0.09) => new RoundedBoxGeometry(w, h, d, 2, r);

  const roofMat = () => new THREE.MeshStandardMaterial({ color: roofDarken(base), roughness: 0.8, flatShading: true, side: THREE.DoubleSide });
  if (slot.form === "slab" || slot.form === "step") {
    main = new THREE.Mesh(rb(W, H, D, 0.07), mat);
    main.position.y = H / 2;
    g.add(main);
    if (slot.form === "step") { // Eingangstür am IPS
      const door = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 1.1), new THREE.MeshStandardMaterial({ color: 0x5a3d26, roughness: 0.8 }));
      door.position.set(0, H + 0.55, -D / 2 + 0.02);
      g.add(door);
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), new THREE.MeshStandardMaterial({ color: 0xd9b23e, metalness: 0.7, roughness: 0.35 }));
      knob.position.set(0.22, H + 0.5, -D / 2 + 0.05);
      g.add(knob);
    }
  } else if (slot.form === "roof") {
    main = new THREE.Mesh(prismGeometry(W, D, H * 0.72), roofMat());
    g.add(main);
    const chimney = new THREE.Mesh(rb(0.5, 1, 0.5, 0.05), styleMat(base, stil));
    chimney.position.set(W * 0.28, H * 0.6, 0); g.add(chimney);
  } else if (slot.form === "spire") {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(W * CELL * 0.42, H, 4), roofMat());
    cone.rotation.y = Math.PI / 4; cone.position.y = H / 2; g.add(cone); main = cone;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.5, 6), new THREE.MeshStandardMaterial({ color: 0x888, roughness: 0.4, metalness: 0.7 }));
    pole.position.y = H + 0.7; g.add(pole);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.6), new THREE.MeshStandardMaterial({ color: 0x0028a5, side: THREE.DoubleSide, roughness: 0.7 }));
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
    const frameMat = new THREE.MeshStandardMaterial({ color: 0xf2f0e9, roughness: 0.7 });
    const nWin = Math.max(1, Math.round(pos.w));
    for (let i = 0; i < nWin; i++) {
      const fx = (i - (nWin - 1) / 2) * (W / nWin);
      const frame = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.76), frameMat);
      frame.position.set(fx, H * 0.55, faceZ * (D / 2 + 0.008));
      if (faceZ < 0) frame.rotation.y = Math.PI;
      g.add(frame);
      const win = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.62), wm);
      win.position.set(fx, H * 0.55, faceZ * (D / 2 + 0.016));
      if (faceZ < 0) win.rotation.y = Math.PI;
      g.add(win);
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
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
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
function decorateBlock(group, slot) {
  const code = slot.optionen ? ((S.placed[S.mode][slot.slot] || {}).opt || slot.code) : slot.code;
  if (S.quiz[code]) addPennant(group, slot);
  if (S.quests[slot.slot] && S.quests[slot.slot].done) { addSparkle(group, slot); addFlowerBox(group, slot); }
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
function avatarGoTo(x, z, celebrate = false) {
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
  Object.keys(blockMeshes).forEach((id) => { blockGroup.remove(blockMeshes[id]); delete blockMeshes[id]; });
  Object.keys(S.placed[S.mode]).forEach((id) => {
    const slot = SLOTS[id]; if (!slot) return;
    const g = buildBlockMesh(slot);
    decorateBlock(g, slot);
    blockGroup.add(g); blockMeshes[id] = g;
  });
  rebuildGarden();
  mscPlotGroup.visible = true;
}
function placeSlot(slot) {
  const chk = canPlace(slot);
  if (!chk.ok) { SND.err(); toast(chk.reason || t("gesperrt")); return false; }
  const entry = { stil: pendingStil, sp: slot.schwerpunktwahl ? pendingSp : null, opt: slot.optionen ? pendingOpt : null };
  S.placed[S.mode][slot.slot] = entry;
  save();
  const g = buildBlockMesh(slot);
  decorateBlock(g, slot);
  blockGroup.add(g); blockMeshes[slot.slot] = g;
  // Drop-Animation
  const endY = g.position.y;
  g.position.y = endY + 9;
  const inner = g;
  tween(0.55, (k) => { inner.position.y = endY + 9 * (1 - k); }, easeOutCubic, () => {
    inner.position.y = endY;
    try {
      tween(0.22, (k) => {
        const sq = Math.sin(k * Math.PI);
        inner.scale.set(1 + sq * 0.09, 1 - sq * 0.14, 1 + sq * 0.09);
      }, (k) => k, () => inner.scale.set(1, 1, 1));
      burstDust(g.position.x, endY + 0.1, g.position.z);
      shockRing(g.position.x, endY, g.position.z, Math.max(slot.pos.w, slot.pos.d) * CELL * 0.9);
      floatKompChips(g, slot);
      SND.thock();
      shakeT = 0.22;
      if (navigator.vibrate) { try { navigator.vibrate(12); } catch (e) {} }
    } catch (err) { console.error("juice", err); }
    checkMilestones();
  });
  const h = ST.haeuser[slot.haus];
  avatarGoTo(h.origin[0] + slot.pos.x * CELL + 2.2, h.origin[2] + slot.pos.z * CELL + 3.4);
  clearGhost();
  const { komp } = slotKomp(slot);
  renderPlan(); renderProfil([...(komp.fa || []), ...(komp.ki || []), ...(komp.fu || [])]);
  openCard(slot.slot);
  return true;
}
function removeSlot(id) {
  if (S.mode !== "frei") return;
  const dependents = ST.slots.filter((s) => isPlaced(s.slot) && (s.voraus || []).includes(id));
  if (dependents.length) { toast(t("grund_voraus") + dependents.map((d) => L(d.titel).split(",")[0]).slice(0, 2).join(" · ")); SND.err(); return; }
  delete S.placed[S.mode][id]; save();
  const g = blockMeshes[id];
  if (g) { blockGroup.remove(g); delete blockMeshes[id]; }
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
  flyTo(new THREE.Vector3(cx + (ms.haus === "bsc" ? -14 : 14), 10, 22), new THREE.Vector3(cx, 3, cz), 1.4, () => {
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
document.getElementById("msClose").onclick = () => document.getElementById("milestone").classList.remove("open");

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
  const hits = ray.intersectObjects(objs, true);
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
    tip.innerHTML = `<b>${slotTitel(slot)}</b><br>${slot.ects} ${t("ects")} · ${t("stufe")} ${slot.stufe}${q && q.done ? " · ✦" : ""}`;
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
      while (o && !o.userData.kompId) o = o.parent;
      if (o && o.userData.kompId) {
        const k = KOMP[o.userData.kompId];
        if (k) { toast(`${k.id} · ${L(k.name)} — «${L(k.ich)}»`); SND.pick(); }
        return;
      }
    }
    return;
  }
  if (ghost && ghostSlot) {
    const id = pick(e);
    if (id === ghostSlot.slot || id === null) { placeSlot(ghostSlot); return; }
  }
  const id = pick(e);
  if (id) { openCard(id); SND.pick(); }
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && ghostSlot) placeSlot(ghostSlot);
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
        const col = slot.schwerpunktwahl && S.placed[S.mode][id] && S.placed[S.mode][id].sp ? ST.schwerpunkte[S.placed[S.mode][id].sp].farbe : ST.gruppen[slot.gruppe].farbe;
        b.innerHTML = `<span class="cdot" style="background:${col}"></span>
          <span class="cname">${slotTitel(slot)}</span>
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
}
function ectsSum(hausId) {
  return ST.slots.filter((s) => s.haus === hausId && isPlaced(s.slot))
    .reduce((n, s) => { const p = S.placed[S.mode][s.slot]; const e = p && p.opt && OPTMOD[p.opt] ? OPTMOD[p.opt].ects : s.ects; return n + e; }, 0);
}
function selectSlot(id) {
  selectedId = id;
  const slot = SLOTS[id];
  SND.pick();
  if (!isPlaced(id) && !visitor.active) showGhost(slot); else clearGhost();
  openCard(id);
  renderPlan();
  // Kamera sanft hinschwenken
  const h = ST.haeuser[slot.haus];
  const target = new THREE.Vector3(h.origin[0] + slot.pos.x * CELL, floorBase(slot.pos.y) + 1, h.origin[2] + slot.pos.z * CELL);
  const dir = camera.position.clone().sub(controls.target).normalize().multiplyScalar(Math.min(26, camera.position.distanceTo(target) + 6));
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
  return { score, max };
}
let profilView = null; // null = Übersicht, sonst Kompetenz-ID
let profilTab = "profil"; // profil | karriere

/* Radar mit 6 Achsen (Aggregate) */
const RADAR_ACHSEN = [
  { ids: ["Fa1", "Fa8", "Fa9"], name: { de: "Fachwissen & Praxis", en: "Knowledge & practice" }, farbe: "#1a3e8f" },
  { ids: ["Fa2", "Fa3", "Fa5"], name: { de: "Methoden & Daten", en: "Methods & data" }, farbe: "#1a3e8f" },
  { ids: ["Fa4", "Fa6", "Fa7", "Fa10"], name: { de: "Denken & Kommunikation", en: "Thinking & communication" }, farbe: "#1a3e8f" },
  { ids: ["KI1", "KI2", "KI3"], name: { de: "KI anwenden & gestalten", en: "Applying & creating AI" }, farbe: "#0e8f7e" },
  { ids: ["KI4", "KI5", "KI6"], name: { de: "KI verstehen & prüfen", en: "Understanding & auditing AI" }, farbe: "#0e8f7e" },
  { ids: ["Fu1", "Fu2", "Fu3"], name: { de: "Future Skills", en: "Future skills" }, farbe: "#4a90d9" }
];
function radarSVG(score, max, size = 210) {
  const c = size / 2, r0 = size * 0.36, n = RADAR_ACHSEN.length;
  const pt = (i, r) => { const a = -Math.PI / 2 + (i / n) * Math.PI * 2; return [c + Math.cos(a) * r, c + Math.sin(a) * r]; };
  let grid = "";
  for (const f of [0.33, 0.66, 1]) {
    grid += `<polygon points="${[...Array(n)].map((_, i) => pt(i, r0 * f).join(",")).join(" ")}" fill="none" stroke="#dbe1ef" stroke-width="1"/>`;
  }
  let axes = "", labels = "";
  RADAR_ACHSEN.forEach((ax, i) => {
    const [x, y] = pt(i, r0);
    axes += `<line x1="${c}" y1="${c}" x2="${x}" y2="${y}" stroke="#dbe1ef" stroke-width="1"/>`;
    const [lx, ly] = pt(i, r0 + 16);
    labels += `<text x="${lx}" y="${ly}" font-size="7.5" font-weight="700" fill="${ax.farbe}" text-anchor="middle" dominant-baseline="middle">${L(ax.name).replace("&", "&amp;")}</text>`;
  });
  const vals = RADAR_ACHSEN.map((ax) => {
    const s = ax.ids.reduce((a, id) => a + (score[id] || 0), 0), m = ax.ids.reduce((a, id) => a + (max[id] || 0), 0);
    return m ? s / m : 0;
  });
  const poly = vals.map((v, i) => pt(i, Math.max(0.03, v) * r0).join(",")).join(" ");
  const dots = vals.map((v, i) => { const [x, y] = pt(i, Math.max(0.03, v) * r0); return `<circle cx="${x}" cy="${y}" r="2.6" fill="#0028a5"/>`; }).join("");
  return `<svg viewBox="0 0 ${size} ${size}" style="width:100%;max-width:230px;display:block;margin:2px auto 6px">
    ${grid}${axes}
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

/* Karriere-Ansicht */
function renderKarriere() {
  const { score, max } = profilWerte();
  const pct = {}; ST.kompetenzen.forEach((k) => (pct[k.id] = max[k.id] ? score[k.id] / max[k.id] : 0));
  const el = document.getElementById("profilList");
  let html = `<p style="font-size:11px;color:#5b6478;margin:2px 6px 6px;line-height:1.45">${t("karriere_info")}</p>`;
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
    html += `<div class="pfad">
      <div class="phead"><span>${p.icon}</span><span>${L(p.name)}</span><span class="pct">${ready}%</span></div>
      <div class="phint">${L(p.hint)}</div>
      <div class="track"><div class="fill" style="width:${ready}%;background:linear-gradient(90deg,#3f6cc8,#0028a5)"></div></div>
      ${cand.length ? `<div class="pnext">${t("pfad_next")} ${cand.map((c) => `<button data-slot="${c.s.slot}">${slotTitel(c.s).split(",")[0].slice(0, 34)}</button>`).join("")}</div>` : ""}
    </div>`;
  }
  html += verlaufHTML();
  el.innerHTML = html;
  el.querySelectorAll(".pnext button").forEach((b) => (b.onclick = () => selectSlot(b.dataset.slot)));
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
  return `<div class="subhead">📝 ${t("cv_titel")} (${t("stufe")} ${stufe})</div>
    <div class="cvrow"><p>«${txt}»</p><button data-cvcopy="${txt.replace(/"/g, "&quot;")}">📋 ${t("cv_copy")}</button></div>`;
}
function evidenzBlock(id, builtRows) {
  const items = [];
  for (const r of builtRows) {
    const code = quizCode(r.slot);
    if (S.quiz[code]) items.push(`<div class="evrow"><span class="evic">🚩</span><span>${t("ev_quiz")}: ${slotTitel(r.slot).split(",")[0]}</span></div>`);
    const q = S.quests[r.slot.slot];
    if (q && q.done) items.push(`<div class="evrow"><span class="evic">✦</span><span>${t("ev_quest")}: ${slotTitel(r.slot).split(",")[0]}${q.note ? ` — <i>«${q.note}»</i>` : ""}</span></div>`);
  }
  if (!items.length) return "";
  return `<div class="subhead">🗂 ${t("evidenz_titel")} (${items.length})</div>` + items.join("");
}

/* ---------- HUD: Info-Karte ---------- */
const card = document.getElementById("card");
let cardTab = "zukunft", pendingStil = "klassisch", pendingSp = "DeNC", pendingOpt = null;
function openCard(id) {
  const slot = SLOTS[id]; if (!slot) return;
  selectedId = id;
  const placed = isPlaced(id);
  const st = S.placed[S.mode][id] || {};
  pendingStil = st.stil || pendingStil;
  pendingSp = st.sp || pendingSp;
  pendingOpt = st.opt || (slot.optionen ? slot.optionen[0] : null);
  const { kat } = slotKomp(slot);
  document.getElementById("cardDot").style.background = slot.schwerpunktwahl && st.sp ? ST.schwerpunkte[st.sp].farbe : ST.gruppen[slot.gruppe].farbe;
  document.getElementById("cardTitle").textContent = slotTitel(slot);
  document.getElementById("cardCode").textContent = `${(st.opt) || slot.code} · ${L(ST.gruppen[slot.gruppe].name)}`;
  const katList = (kat || "B").split(/[+/]/).map((x) => x.trim()).filter((x) => ST.pruefungslogik[x]);
  document.getElementById("cardBadges").innerHTML =
    `<span class="badge" style="background:#5b6478">${slot.ects} ${t("ects")}</span>
     <span class="badge" style="background:#39415a">${t("stufe")} ${slot.stufe}</span>
     <span class="badge" style="background:#7a86a3">${t(slot.rhythmus === "beide" ? "beide" : slot.rhythmus.toLowerCase())}${slot.sem2 ? " · " + t("zweisem") : ""}</span>` +
    katList.map((x) => `<span class="badge" style="background:${ST.pruefungslogik[x].farbe}">${L(ST.pruefungslogik[x].name)}</span>`).join("");
  renderCardBody(slot);
  renderCardActions(slot);
  card.classList.add("open");
}
function closeCard() { card.classList.remove("open"); selectedId = null; renderPlan(); }
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
function renderCardBody(slot) {
  const tx = slotText(slot);
  const el = document.getElementById("cardBody");
  const none = `<p style="color:#5b6478;font-style:italic">${t("keine_texte")}</p>`;
  if (cardTab === "zukunft") {
    el.innerHTML = (tx ? `<p style="color:#5b6478;font-size:12px">${L(tx.heute)}</p><p style="margin-top:6px">${L(tx.zukunft)}</p>` : none) + kompPills(slot);
  } else if (cardTab === "lernziele") {
    const dot = (tags, b, col, ti) => `<i class="${(tags || []).includes(b) ? "on" : ""}" style="background:${col}" title="${ti}"></i>`;
    const dots = (z) => `<span class="lz-dots">${dot(z.b, "F", ST.felder.fa.farbe, L(ST.felder.fa.name))}${dot(z.b, "K", ST.felder.ki.farbe, L(ST.felder.ki.name))}${dot(z.b, "S", ST.felder.fu.farbe, L(ST.felder.fu.name))}</span>`;
    el.innerHTML = tx && tx.lernziele && tx.lernziele.length
      ? `<ul style="list-style:none;padding-left:2px">${tx.lernziele.map((z) => `<li>${dots(z)}${L(z)}</li>`).join("")}</ul>`
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
let cardQuiz = null; // { code, i, oks: [bool,bool,bool], picked: idx|null }
function renderQuestTab(slot, el, tx, none) {
  const fragen = quizFor(slot);
  const code = quizCode(slot);
  let html = "";
  if (fragen && fragen.length) {
    if (S.quiz[code]) {
      html += `<div class="quiz-done-banner">🚩 ${t("quiz_bestanden")}</div>`;
    } else {
      if (!cardQuiz || cardQuiz.code !== code) cardQuiz = { code, i: 0, oks: [], picked: null };
      const qz = cardQuiz;
      const f = fragen[qz.i];
      html += `<p style="font-weight:800;margin-bottom:2px">🧩 ${t("quiz_titel")}</p>`;
      if (S.mode === "serious" && !isPlaced(slot.slot)) html += `<p style="font-size:11px;color:#b35c00;margin-bottom:6px">${t("quiz_gate_hint")}</p>`;
      html += `<div class="quiz-progress">${[0, 1, 2].map((n) => `<span class="qp ${qz.oks[n] ? "done" : n === qz.i ? "cur" : ""}"></span>`).join("")}</div>`;
      html += `<p style="font-size:10.5px;color:#8b94ab">${t("quiz_von").replace("{i}", qz.i + 1)}</p>`;
      html += `<p class="quiz-q">${L(f.q)}</p>`;
      f.a.forEach((a, ai) => {
        let cls = "";
        if (qz.picked !== null) cls = ai === f.korrekt ? "ok" : ai === qz.picked ? "no" : "";
        html += `<button class="quiz-a ${cls}" data-ai="${ai}" ${qz.picked !== null ? "disabled" : ""}>${L(a)}</button>`;
      });
      if (qz.picked !== null) {
        html += `<div class="quiz-erkl">${qz.picked === f.korrekt ? "✅" : "❌"} ${L(f.erkl)}</div>`;
        const last = qz.i === fragen.length - 1;
        const allOk = qz.oks.every(Boolean) && qz.oks.length === fragen.length;
        if (!last) html += `<button class="primary" style="margin-top:8px" data-qnext>${t("quiz_weiter")} →</button>`;
        else if (!allOk) html += `<button class="ghostbtn" style="margin-top:8px" data-qretry>↺ ${t("quiz_retry")}</button>`;
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
  if (q.done) html += `<p style="color:var(--ok);margin-top:8px"><b>✓ ${t("quest_abgeschlossen")}</b>${q.note ? ` — «${q.note}»` : ""}</p>`;
  el.innerHTML = html;

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
        if (g) { addPennant(g, slot); burstConfetti(g.position.x, g.position.y + 2.5, g.position.z, 60, 3); }
        rebuildGarden();
        renderPlan(); renderCardBody(slot); renderCardActions(slot);
      }, 900);
    }
    renderCardBody(slot);
  }));
  const nx = el.querySelector("[data-qnext]");
  if (nx) nx.onclick = () => { cardQuiz.i++; cardQuiz.picked = null; renderCardBody(slot); };
  const rt = el.querySelector("[data-qretry]");
  if (rt) rt.onclick = () => { cardQuiz = { code, i: 0, oks: [], picked: null }; renderCardBody(slot); };
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
      if (q.done) {
        S.quests[slot.slot] = { done: false, note: "" };
        removeSparkle(blockMeshes[slot.slot]);
        save(); renderPlan(); renderCardActions(slot); renderCardBody(slot);
      } else {
        el.innerHTML = "";
        const wrap = document.createElement("div");
        wrap.style.cssText = "display:flex;gap:6px;flex:1;align-items:center;flex-wrap:wrap";
        const lbl = document.createElement("span");
        lbl.style.cssText = "font-size:11.5px;color:#5b6478;flex-basis:100%";
        lbl.textContent = t("quest_frage");
        const inp = document.createElement("input");
        inp.type = "text"; inp.maxLength = 140;
        inp.style.cssText = "flex:1;min-width:180px;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 12px;font:500 12.5px var(--font)";
        const ok = document.createElement("button"); ok.className = "primary"; ok.textContent = "✦ OK";
        ok.onclick = () => {
          S.quests[slot.slot] = { done: true, note: inp.value.trim().slice(0, 140) };
          addSparkle(blockMeshes[slot.slot], slot);
          SND.quest();
          const bm = blockMeshes[slot.slot];
          burstConfetti(bm.position.x, bm.position.y + 2, bm.position.z, 40, 2.5);
          save(); renderPlan(); renderCardActions(slot); renderCardBody(slot);
        };
        wrap.append(lbl, inp, ok);
        el.appendChild(wrap);
        inp.focus();
      }
    };
    el.appendChild(bq);
    if (["box", "tower", "wing", "bay"].includes(slot.form)) {
      const be = document.createElement("button"); be.className = "ghostbtn";
      be.textContent = t("betreten");
      be.onclick = () => enterRoom(slot.slot);
      el.appendChild(be);
    }
    if (S.mode === "frei") {
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
}

/* ---------- Modus, Sprache, Menü ---------- */
function setMode(m) {
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
const modals = { menu: "modalMenu", help: "modalHelp", privacy: "modalPrivacy", about: "modalAbout", share: "modalShare", onboard: "modalOnboard" };
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
  const bases = [[-24, -22], [0, -26], [24, -22]];
  (S.nachbarn || []).slice(0, 3).forEach((nb, i) => {
    const [ox, oz] = bases[i];
    const grp = new THREE.Group();
    for (const [id, st] of Object.entries(nb.p || {})) {
      const slot = SLOTS[id]; if (!slot) continue;
      const g = buildBlockMesh(slot, { state: st });
      const h = ST.haeuser[slot.haus];
      // relativ zum Nachbar-Grundstück: beide Häuser zusammenrücken
      g.position.set(ox + (h.origin[0] * 0.5) + slot.pos.x * CELL * 0.9, floorBase(slot.pos.y), oz + slot.pos.z * CELL * 0.9);
      g.scale.set(0.9, 0.9, 0.9);
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
    flyTo(new THREE.Vector3(0, 34, 44), new THREE.Vector3(0, 2, -6), 1.6);
    toast(t("campus_an"));
  } else {
    flyTo(new THREE.Vector3(-20, 15, 26), new THREE.Vector3(-6, 2.5, 0), 1.4);
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
    rows += `<tr><td>${(p && p.opt) || slot.code}</td><td>${slotTitel(slot)}${p && p.sp ? " · " + p.sp : ""}</td><td style="text-align:center">${e}</td><td style="text-align:center">[${kat}]</td><td>${q.done ? "✦ " + (q.note || "") : ""}</td></tr>`;
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
    }
  }
  const foto = hausFoto();
  const html = `<!DOCTYPE html><html lang="${S.lang}"><head><meta charset="utf-8"><title>Kompetenzpass</title>
  <style>body{font-family:"Helvetica Neue",Arial,sans-serif;color:#1c2333;max-width:820px;margin:24px auto;padding:0 16px}
  h1{color:#0028a5;font-size:24px} table{border-collapse:collapse;width:100%;font-size:11.5px;margin-top:10px}
  td,th{border:1px solid #d8dce8;padding:5px 8px;text-align:left} th{background:#f0f3fa}
  .hint{font-size:10.5px;color:#5b6478;margin-top:18px;line-height:1.5}
  @media print {.noprint{display:none}}</style></head><body>
  <button class="noprint" onclick="print()" style="float:right;padding:8px 16px;border:0;background:#0028a5;color:#fff;border-radius:8px;cursor:pointer">🖨 PDF</button>
  <h1>🎓 ${t("pass")} — ${S.name || "—"}</h1>
  <p style="font-size:12.5px;color:#5b6478">${t("passdatum")}: ${dat} · ${S.mode === "serious" ? t("modus_serious") : t("modus_frei")} · BSc: ${ectsSum("bsc")}/120 · MSc: ${ectsSum("msc")}/120 ${t("ects")}</p>
  ${foto ? `<img src="${foto}" alt="Kompetenzhaus" style="width:100%;border-radius:12px;margin:8px 0">` : ""}
  ${bars}
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
  const focus = mscOpen() && ectsSum("msc") > 0 ? new THREE.Vector3(0, 3, 0) : new THREE.Vector3(-11, 3, 0);
  flyTo(new THREE.Vector3(focus.x - 16, 11, 24), focus, 1.2, () => {
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
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xf3efe6, roughness: 0.95, side: THREE.DoubleSide });
  const floorMat = new THREE.MeshStandardMaterial({ color: 0xc9a877, roughness: 0.9 });
  const iw = W - 0.2, ih = H - 0.15, idp = D - 0.2;
  const floor = new THREE.Mesh(new THREE.BoxGeometry(iw, 0.06, idp), floorMat); floor.position.y = 0.05; g.add(floor);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(iw, ih), wallMat); back.position.set(0, ih / 2, -idp / 2); g.add(back);
  const left = new THREE.Mesh(new THREE.PlaneGeometry(idp, ih), wallMat); left.rotation.y = Math.PI / 2; left.position.set(-iw / 2, ih / 2, 0); g.add(left);
  const right = left.clone(); right.rotation.y = -Math.PI / 2; right.position.x = iw / 2; g.add(right);
  // Möblierung nach Modulgruppe
  const gr = slot.gruppe;
  const y0 = 0.08;
  if (gr === "meth" || gr === "mein") {
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
  if (!slot || !bg || !["box", "tower", "wing", "bay"].includes(slot.form)) return;
  const W = slot.pos.w * CELL, D = slot.form === "wing" ? slot.pos.d * CELL : slot.pos.d * CELL, H = (slot.form === "wing" ? 1.7 : slot.pos.h) * FH;
  const room = buildRoom(slot, W, H, D);
  room.position.copy(bg.position);
  scene.add(room);
  const saved = [];
  bg.traverse((o) => {
    if (o.isMesh && o.material) {
      saved.push({ mat: o.material, opacity: o.material.opacity, transparent: o.material.transparent });
      o.material.transparent = true; o.material.opacity = 0.13; o.material.depthWrite = false;
      o.material.needsUpdate = true;
    }
  });
  const faceZ = slot.pos.z >= 0 || slot.form === "wing" ? 1 : -1;
  const target = bg.position.clone().add(new THREE.Vector3(0, H * 0.45, 0));
  const camPos = bg.position.clone().add(new THREE.Vector3(0, H * 0.55, faceZ * (D * 1.9 + 1.2)));
  const prevMin = controls.minDistance;
  controls.minDistance = 0.4;
  flyTo(camPos, target, 1.1);
  const btn = document.createElement("button");
  btn.className = "iconbtn blue";
  btn.style.cssText = "position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:26";
  btn.textContent = "🚪 " + t("verlassen");
  btn.onclick = leaveRoom;
  document.body.appendChild(btn);
  closeCard();
  interior = { id, group: room, saved, btn, prevMin };
  SND.pick();
}
function leaveRoom() {
  if (!interior) return;
  scene.remove(interior.group);
  interior.saved.forEach((s) => { s.mat.opacity = s.opacity; s.mat.transparent = s.transparent; s.mat.depthWrite = true; s.mat.needsUpdate = true; });
  interior.btn.remove();
  controls.minDistance = interior.prevMin;
  const bg = blockMeshes[interior.id];
  if (bg) flyTo(bg.position.clone().add(new THREE.Vector3(-8, 7, 13)), bg.position.clone(), 1);
  interior = null;
}

/* ---------- Onboarding-Tour ---------- */
function startTour() {
  if (S.tourDone) return;
  if (document.getElementById("milestone").classList.contains("open")) { setTimeout(startTour, 2500); return; }
  const coach = document.getElementById("coach");
  const steps = [
    { sel: "#panelL", tt: "tour1_t", tx: "tour1", css: "left:322px;top:120px" },
    { sel: "#card", tt: "tour2_t", tx: "tour2", css: "left:50%;transform:translateX(-50%);bottom:calc(46vh + 20px)" },
    { sel: "#panelR", tt: "tour3_t", tx: "tour3", css: "right:322px;top:120px;left:auto" }
  ];
  let i = 0;
  const show = () => {
    document.querySelectorAll(".coach-target").forEach((e) => e.classList.remove("coach-target"));
    if (i >= steps.length) { coach.classList.remove("open"); S.tourDone = true; save(); return; }
    const s = steps[i];
    const tgt = document.querySelector(s.sel);
    if (tgt && tgt.offsetParent !== null) tgt.classList.add("coach-target");
    coach.style.cssText = s.css;
    coach.innerHTML = `<b>${t(s.tt)}</b>${t(s.tx)}<div class="cactions"><span class="cstep">${i + 1}/3</span><button>${i === steps.length - 1 ? t("tour_fertig") : t("tour_weiter")}</button></div>`;
    coach.classList.add("open");
    coach.querySelector("button").onclick = () => { i++; SND.pick(); show(); };
  };
  show();
}

/* ---------- KI-Baututor (nur wenn window.claude verfügbar, z.B. Artifact) ---------- */
function initTutor() {
  const api = window.claude && typeof window.claude.complete === "function" ? window.claude.complete.bind(window.claude) : null;
  if (!api) return;
  const fab = document.getElementById("tutorFab"), box = document.getElementById("tutor"), msgs = document.getElementById("tutorMsgs");
  fab.style.display = "block";
  const hist = [];
  const add = (who, txt) => {
    const d = document.createElement("div");
    d.className = "tmsg " + who; d.textContent = txt;
    msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
    return d;
  };
  fab.onclick = () => { box.classList.toggle("open"); if (box.classList.contains("open") && !msgs.children.length) add("bot", t("tutor_hi")); };
  document.getElementById("tutorClose").onclick = () => box.classList.remove("open");
  const ctx = () => {
    const built = ST.slots.filter((s) => isPlaced(s.slot)).map((s) => slotTitel(s)).join("; ") || "-";
    const next = nextRecommended();
    return `Du bist der «KI-Baututor» im Lernspiel «Das Kompetenzhaus» (Psychologiestudium UZH, BSc/MSc; Module = Bausteine eines Hauses; Kompetenzen: Fa1–Fa10 fachlich, KI1–KI6 KI, Fu1–Fu3 Future Skills; Prüfungslogik [A] KI-frei / [B] teilweise / [C] KI-integriert; Basis: Kompetenzaufbaumodell 02.07.2026, ein ENTWURF als Gesprächsbasis). Antworte kurz (max. 120 Wörter), freundlich, auf ${S.lang === "de" ? "Deutsch (Schweizer Rechtschreibung)" : "English"}. Keine Rechtsauskünfte; verweise bei Studienberatung an die Studienprogrammleitung. Spielstand: gebaut = ${built}. Empfohlener nächster Baustein: ${next ? slotTitel(SLOTS[next]) : "-"}.`;
  };
  const send = async () => {
    const inp = document.getElementById("tutorInput");
    const q = inp.value.trim(); if (!q) return;
    inp.value = "";
    add("me", q);
    const wait = add("bot", "…");
    hist.push("Studierende:r: " + q);
    try {
      const out = await api(ctx() + "\n\n" + hist.slice(-6).join("\n") + "\nBaututor:");
      wait.textContent = String(out).trim();
      hist.push("Baututor: " + wait.textContent);
    } catch (e) { wait.textContent = t("tutor_err"); }
  };
  document.getElementById("tutorSend").onclick = send;
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
  if (!isPlaced("003")) selectSlot("003");
  setTimeout(startTour, 900);
};
document.getElementById("btnBadges").onclick = badgesExport;
document.getElementById("btnOlat").onclick = olatExport;

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
  const dt = Math.min(0.5, clock.getDelta());
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
  if (interior) interior.group.traverse((o) => { if (o.name === "spin") o.rotation.y += dt * 0.8; });
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
renderPlan();
renderProfil();
if (S.envAuto) applyRealEnv();
updateEnvironment();
document.getElementById("todSlider").value = S.tod;
initTutor();
if (!isVisitor && !S.onboarded) openModal("onboard");
else if (!isVisitor && !S.tourDone && Object.keys(S.placed[S.mode]).length < 3) setTimeout(startTour, 1200);
window.__game = { get state() { return S; }, checkMilestones, save, step, enterRoom, leaveRoom, get interior() { return interior ? { id: interior.id, opacity: interior.saved[0] ? interior.saved[0].mat.opacity : null } : null; }, get tweens() { return tweens.map((t) => ({ t: t.t, dur: t.dur })); }, get frame() { return elapsed; }, placeByChip: (id) => { const s = SLOTS[id]; if (s) { selectSlot(id); return placeSlot(s); } return false; } };
animate();
/* Fallback: läuft weiter, wenn der Tab gedrosselt ist (rAF pausiert) */
setInterval(() => { if (performance.now() - lastTick > 400) step(); }, 250);
