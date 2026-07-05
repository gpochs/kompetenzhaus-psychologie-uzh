# v7-Backlog «Das Kompetenzhaus» — die grossen Würfe

Stand: 05.07.2026 (nach v6, Commit 9e68ea2). Quellen: Benchmark-Recherche (Duolingo/Brilliant/ustwo u.a.), UX-Audit, Ordner-Tiefenprüfung — Volltexte in `90_Recherche/` bzw. Session-Memory.

## A. Erlebnis & Session-Rhythmus (Benchmark-Recherche)
1. **Erstbau in 60 Sekunden** statt Onboarding-Modal: QR-Besucher landen direkt in einer geführten Erstbau-Sequenz (Kamera → pulsierender Baustein → Klick → Drop mit voller Juice-Ladung); Erklärungen erst danach. Vorbild Duolingo «gradual engagement». Aufwand M.
2. **Tagesbrief im Briefkasten**: täglich 1–3 druckfreie Mini-Aufgaben («Betritt einen Raum, den du noch nie gesehen hast»), Belohnung Deko — keine Streaks/Verluste. Duolingo Quests × Animal Crossing. Aufwand M.
3. **Session-Abschlusskarte**: Kompetenz-Delta direkt nach der Aktion animiert («+2% KI»); beim Verlassen ruhige «Heute gebaut»-Karte mit genau einem Vorschlag fürs nächste Mal. Aufwand M.
4. **Deko-Vitrine** (Gartenschuppen/Kellerregal): Erhaltenes farbig, Künftiges als graue Silhouette mit neugierig machendem Namen — nie Countdown/Verfall (Forest, IKEA-Effekt). Aufwand M.
5. **Share-Postkarte** aus dem Foto-Modus: Screenshot + gestalteter Rahmen, Hausname, ECTS-Stempel, QR zurück ins Spiel. Viraler Loop ohne Rangliste. Aufwand M.
6. **Kuratierte Lichtstimmungen** (4–6 Presets: Golden Hour, Morgennebel, Abendrosa, Winterblau) statt rein berechnetem Zyklus — «every screen is a piece of art» (ustwo/MV3). Aufwand M.
7. **Sokratische KI-Hints** (Khanmigo-Stil): gestufte Leitfragen statt Lösungen bei Quiz/Quest (baut auf HAS_AI auf). Aufwand S.

## B. Inhalt aus dem Projektordner (Tiefenprüfung)
8. **Bauhütte**: begehbarer Ort, der die 8 aktivierenden Lehrelemente MIT Evidenz erklärt (Hake g .23→.48, Kestin ~0.73 SD, Freeman +0.47 SD; «warum sich aktives Lernen anstrengender anfühlt»). Quelle: 04_TIC_Umsetzungsleitfaden §3. Aufwand M.
9. **Kohorten-Zeitstrahl**: «Ich starte HS26/27 …» → zeigt, welche umgebauten Vorlesungen die eigene Kohorte real erlebt (Roadmap aus Kompetenz-App `roadmap`). ACHTUNG: Als separate Info-Ebene gestalten — Gians Entscheid: das HAUS selbst zeigt den Zielzustand, keine Bauschilder an Blöcken. Aufwand M.
10. **Etagen-Selbstchecks P1–P3**: die 17 Ich-Sätze aus Kompetenz-App `pass` als Checkliste bei jedem Richtfest; fliesst in Radar/Evidenz/Pass. Aufwand M.
11. **Teilkompetenz-Sammelkarten**: die 16 kuratierten Teilkompetenzen (RAG-Literacy, Silicon Samples, Agenten-Literacy …) mit klickbaren APA-Quellen, auffindbar in passenden Räumen. Quelle: App `teilkompetenzen`. Aufwand M.
12. **Statik-Check**: Knopf prüft die [A]/[B]/[C]-Balance des gebauten Hauses gegen die Two-Lane-Regel (jede Kernkompetenz ≥1 [A], jede KI-Kompetenz ≥1 [B]/[C]) → Plakette. Quelle: 04 §4.1. Aufwand S–M.
13. **Geräteschuppen**: Tool-Stack-Karten (OLAT, KlickerUZH+KI-Beta, Copilot Chat, AI Buddy PoC) mit Reifegrad-Ampel + Datenschutz-Hinweis. Quelle: 04 §5. Aufwand S–M.
14. **Bauamt-Vitrine**: «Warum das alles?» — 5 Kernaussagen des Begleitmemos + Beschlussstatus B1–B6 als Schautafeln («Baugenehmigung: Entwurf»). Quelle: 10_Begleitmemo §3–4. Aufwand S.

## C. Spiel als Validierungsinstrument (FAPS/AG Lehre)
15. **Ampel-Feedback** an jedem Zukunftsmodul/jeder Tafel (Grün/Gelb/Rot + Freitext), lokal gesammelt, als JSON/CSV exportierbar → Schiene-C-Protokoll; Changelog-Tafel für den Rückmelde-Loop. Quelle: 09_Validierungskonzept. Aufwand M.
16. **Workshop-Modus «FAPS-Rundgang»**: geführte 20-Min-Tour entlang der 5 Validierungsfragen + Priorisierungs-Minispiel («3 Bau-Punkte verteilen»). Aufwand L.
17. **MAILS-10-Selbsttest** (Carolus et al., 2023) + 4 Survey-Items als optionaler «Bau-Tauglichkeitstest» (erster/letzter Besuch, anonymer Export) → liefert TIC die Baseline. Aufwand M.

## D. Offene Entscheidung: KI-Features für alle
- **Selbsttest ausstehend:** Erscheint im publizierten Artifact (claude.ai/code/artifact/…) der 🤖-Button unten rechts? Ja → `window.claude` vorhanden, GenAI-Suite läuft dort.
- Falls nein, zwei Wege: **(a)** Companion-Chat-Artifact «KI-Baututor» (klein, in claude.ai erstellt, vom Spiel verlinkt); **(b)** Cloudflare-Worker-Proxy mit eigenem API-Key → KI auf der GitHub-Pages-URL für alle ohne Konto (Kosten/Datenschutz vorher klären).

## Betriebs-Spickzettel
- Live: https://gpochs.github.io/kompetenzhaus-psychologie-uzh/ · Repo: github.com/gpochs/kompetenzhaus-psychologie-uzh · Artifact: https://claude.ai/code/artifact/8f899be9-b298-4e45-b0de-2918b3ff8fc9 (Redeploy: gleiche Datei erneut publizieren)
- Build: `npx esbuild js/main.js --bundle --minify --format=iife --alias:three=./lib/three.module.min.js "--alias:three/addons/controls/OrbitControls.js=./lib/OrbitControls.js" "--alias:three/addons/geometries/RoundedBoxGeometry.js=./lib/RoundedBoxGeometry.js" --outfile=dist/game.bundle.js` → `node build-artifact.mjs`
- Dev-Server: Preview «kompetenzhaus» (node server.js, Port 8642) · gh CLI: /opt/homebrew/bin/gh (Account gpochs)
- Leitplanken: Spiel = Zielzustand (keine Bauschilder!); keine Punkte/Leaderboards (SDT); Schweizer Rechtschreibung, {de,en} überall; [A]/[B]/[C]-Terminologie des Entwurfs 02.07.2026; localStorage-only.
