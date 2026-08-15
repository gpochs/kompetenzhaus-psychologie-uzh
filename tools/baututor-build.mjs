/* Verdichtet den Baututor fuer die Veroeffentlichung als Chat-Artifact.
   Der Grund ist nicht Ladezeit, sondern Zuverlaessigkeit: Ein Artifact entsteht,
   indem ein Modell die Datei wortgetreu ausgibt. Je laenger sie ist, desto groesser
   die Gefahr, dass gekuerzt wird — und eine stille Kuerzung in einem studentischen
   Werkzeug ist schlimmer als eine haessliche Datei. Die kommentierte Fassung in
   50_Chat-Artifact/ bleibt die Quelle; hier entsteht nur die Versandfassung.
   Bewusst konservativ: keine Umbenennung, keine Ausdruecke anfassen. */
import fs from 'node:fs';

const QUELLE = '50_Chat-Artifact/ki-baututor-artifact.html';
const ZIEL = 'dist/ki-baututor-publish.html';

let h = fs.readFileSync(QUELLE, 'utf8');
const vorher = Buffer.byteLength(h, 'utf8');

// Nur ausserhalb von Strings/Regex arbeiten: ein Zeichen-Scanner statt regulaerer Ausdruecke.
function kommentareWeg(js) {
  let out = '', i = 0;
  const n = js.length;
  let str = null;          // ' " ` oder null
  let inRegex = false;
  let letztesSinnvolle = '';
  while (i < n) {
    const c = js[i], c2 = js[i + 1];
    if (str) {
      out += c;
      if (c === '\\') { out += js[i + 1] ?? ''; i += 2; continue; }
      if (c === str) str = null;
      i++; continue;
    }
    if (inRegex) {
      out += c;
      if (c === '\\') { out += js[i + 1] ?? ''; i += 2; continue; }
      if (c === '/') inRegex = false;
      i++; continue;
    }
    if (c === '"' || c === "'" || c === '`') { str = c; out += c; i++; letztesSinnvolle = c; continue; }
    if (c === '/' && c2 === '/') { while (i < n && js[i] !== '\n') i++; continue; }
    if (c === '/' && c2 === '*') { i += 2; while (i < n && !(js[i] === '*' && js[i + 1] === '/')) i++; i += 2; continue; }
    if (c === '/') {
      // Regex nur, wenn davor kein Wert stand (sonst ist es Division)
      if (!/[\w)\]]$/.test(letztesSinnvolle)) inRegex = true;
      out += c; i++; letztesSinnvolle = c; continue;
    }
    out += c;
    if (!/\s/.test(c)) letztesSinnvolle = c;
    i++;
  }
  return out;
}

// Nur den grossen <script>-Block anfassen, nicht die Datenattribute im Markup
h = h.replace(/<script>([\s\S]*?)<\/script>/g, (m, js) => {
  if (js.length < 2000) return m; // kleine Bloecke in Ruhe lassen
  let k = kommentareWeg(js);
  k = k.split('\n').map((z) => z.replace(/[ \t]+$/, '')).filter((z) => z.trim() !== '').join('\n');
  return '<script>' + k + '</script>';
});

// CSS-Kommentare und Leerzeilen im <style>
h = h.replace(/<style>([\s\S]*?)<\/style>/g, (m, css) => {
  const k = css.replace(/\/\*[\s\S]*?\*\//g, '')
    .split('\n').map((z) => z.replace(/[ \t]+$/, '')).filter((z) => z.trim() !== '').join('\n');
  return '<style>' + k + '</style>';
});

// HTML-Kommentare
h = h.replace(/<!--(?!\[if)[\s\S]*?-->/g, '');

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync(ZIEL, h);
const nachher = Buffer.byteLength(h, 'utf8');
console.log(`${QUELLE}: ${(vorher / 1024).toFixed(0)} KB → ${ZIEL}: ${(nachher / 1024).toFixed(0)} KB (${Math.round((1 - nachher / vorher) * 100)} % kleiner)`);
