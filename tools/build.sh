#!/bin/sh
# Vollständige Build-Kette. Der reine build-artifact.mjs-Aufruf bündelt main.js NICHT neu —
# genau dieser Fehler hat schon einmal eine Stunde Fehlersuche gekostet.
set -e
cd "$(dirname "$0")/.."
npx --yes esbuild js/main.js --bundle --minify --format=iife \
  --alias:three=./lib/three.module.min.js \
  --alias:three/addons/controls/OrbitControls.js=./lib/OrbitControls.js \
  --alias:three/addons/geometries/RoundedBoxGeometry.js=./lib/RoundedBoxGeometry.js \
  --outfile=dist/game.bundle.js
node build-artifact.mjs
node -e "
const fs=require('fs');
let h=fs.readFileSync('dist/kompetenzhaus-single.html','utf8');
h=h.slice(h.indexOf('<title>')).replace(/<\/body>\s*<\/html>\s*\$/,'');
fs.writeFileSync('dist/kompetenzhaus-artifact.html',h);
console.log('dist/kompetenzhaus-artifact.html:', (h.length/1024).toFixed(0),'KB');
"
