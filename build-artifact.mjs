/* Baut dist/kompetenzhaus-single.html: alles inline (Artifact-tauglich, offline-fähig).
   Vorher ausführen: npx esbuild js/main.js --bundle --minify --format=iife
     --alias:three=./lib/three.module.min.js
     --alias:three/addons/controls/OrbitControls.js=./lib/OrbitControls.js
     --alias:three/addons/geometries/RoundedBoxGeometry.js=./lib/RoundedBoxGeometry.js
     --outfile=dist/game.bundle.js */
import fs from 'fs';
const esc = (s) => s.replace(/<\/script>/gi, '<\\/script>');
const inline = (f) => esc(fs.readFileSync(f, 'utf8'));
let html = fs.readFileSync('index.html', 'utf8');
html = html
  .replace('<script src="js/daten-struktur.js"></script>', () => '<script>\n' + inline('js/daten-struktur.js') + '\n</script>')
  .replace(/<script src="js\/daten-texte\.js"[^>]*><\/script>/, () => '<script>\n' + inline('js/daten-texte.js') + '\n</script>')
  .replace('<script src="js/i18n.js"></script>', () => '<script>\n' + inline('js/i18n.js') + '\n</script>')
  .replace('<script src="js/audio.js"></script>', () => '<script>\n' + inline('js/audio.js') + '\n</script>')
  .replace(/<script type="importmap">[\s\S]*?<\/script>\s*/, '')
  .replace('<script type="module" src="js/main.js"></script>', () => '<script>\n' + inline('dist/game.bundle.js') + '\n</script>');
fs.writeFileSync('dist/kompetenzhaus-single.html', html);
console.log('dist/kompetenzhaus-single.html:', (fs.statSync('dist/kompetenzhaus-single.html').size / 1024).toFixed(0), 'KB');
