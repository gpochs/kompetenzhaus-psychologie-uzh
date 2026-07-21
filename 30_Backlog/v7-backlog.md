# v7/v8-Backlog «Das Kompetenzhaus» — die grossen Würfe

Stand: 21.07.2026 (nach v8). Quellen: Benchmark-Recherche (Duolingo/Brilliant/ustwo u.a.), UX-Audit, Ordner-Tiefenprüfung — Volltexte in `90_Recherche/` bzw. Session-Memory.

**In v8 umgesetzt (21.07.2026) — «Das Wahlprofil wird zum Haus»:** Themenwahl in s11/s12/s13 + BA-Themenfeld → abgeleitete BSc-Richtung (klin/ekn/swo, ab 2 gleichen Tags) mit Richtungsfarben, Signatur-Elementen (Rundfenster/Pflanzkästen/Glasband) und kleinem Wahrzeichen; MSc anteilige Schwerpunkt-Architektur pro Vertiefung, ab 4/6 grosses Wahrzeichen (DeNC-Observatorium/HEA-Therapiegarten/SEOP-Glasatrium); Wahlpflicht (gold) vs. Wahl (weiss) als Eckleisten + Chips/Badges; Statik: Konsolen an Turmkonsolen, Stützen unter Auskragendem (generischer Footprint-Check); 5 kuratierte Farbwelten pro Haus + 2 neue Baustile (Backstein, Sichtbeton); Karriere-Tab v2 mit 9 Pfaden (neu: Psychotherapie, Neuropsychologie), Soll-Radar, Zielstufen-Lückenanalyse (auf Curriculum-Maximum geklemmt), Wahl-Passung-Chips und verifizierten «Nach dem Master»-Roadmaps (Recherche `90_Recherche/web_karrierewege-nach-msc.md`); Karrierebrief-PDF v2 mit Soll-Overlay + Literaturverzeichnis; Masterarbeit als «Meisterstück» (6 Teilleistungen mit AIAS/Two-Lane-Prüfungslogik, AI Use Plan prospektiv+retrospektiv, OSF-Präregistrierung, agentische KI, explorative Verteidigung; `90_Recherche/web_masterarbeit-stufe4.md`; auch in 10_Modulkatalog-Zukunft MD+DOCX nachgeführt); **B13 Geräteschuppen ✅** (UZH-KI-Tool-Stack mit Reifegrad-Ampel aus dem KI-im-Curriculum-Kompass, Stand Juli 2026); Baututor v4 (Tab «🧭 Karriere», Wahlprofil-Import). Gestaltungs-Evidenz: `90_Recherche/web_gestaltung-choice-evidenz.md` (kuratierte 2–4er-Wahlen optimal, Patall et al. 2008).

**In v7 umgesetzt (06.07.2026):** A1 Erstbau-Sequenz ✅ · B8 Bauhütte ✅ · C15 Ampel-Feedback ✅ · dazu das **Architektur-Paket** (Gians Wunsch, ausserhalb dieses Backlogs): Sockelblöcke ragen ins Erdreich (KELLER_T=2.1), Keller-Innenansicht wirklich unter Bodenniveau (offene Decke, Boden-Fade, Treppe), Innenräume 1:1 aus Aussenmassen (kein erfundener Raum mehr), Haus vergrössert (CELL 1.35→1.6, FH 1.5→1.9), Porch mit Vordach/Pfosten/Stufen, Sprossenfenster mit Sims, beschleunigender Drop + Mikro-Bounce, Gruppenname im Hover-Tooltip.

## A. Erlebnis & Session-Rhythmus (Benchmark-Recherche)
1. ✅ **v7** — **Erstbau in 60 Sekunden** statt Onboarding-Modal: QR-Besucher landen direkt in einer geführten Erstbau-Sequenz (Kamera → pulsierender Baustein → Klick → Drop mit voller Juice-Ladung); Erklärungen erst danach (Onboarding-Modal + Tour NACH dem Grundstein-Meilenstein). Vorbild Duolingo «gradual engagement».
2. **Tagesbrief im Briefkasten**: täglich 1–3 druckfreie Mini-Aufgaben («Betritt einen Raum, den du noch nie gesehen hast»), Belohnung Deko — keine Streaks/Verluste. Duolingo Quests × Animal Crossing. Aufwand M.
3. **Session-Abschlusskarte**: Kompetenz-Delta direkt nach der Aktion animiert («+2% KI»); beim Verlassen ruhige «Heute gebaut»-Karte mit genau einem Vorschlag fürs nächste Mal. Aufwand M.
4. **Deko-Vitrine** (Gartenschuppen/Kellerregal): Erhaltenes farbig, Künftiges als graue Silhouette mit neugierig machendem Namen — nie Countdown/Verfall (Forest, IKEA-Effekt). Aufwand M.
5. **Share-Postkarte** aus dem Foto-Modus: Screenshot + gestalteter Rahmen, Hausname, ECTS-Stempel, QR zurück ins Spiel. Viraler Loop ohne Rangliste. Aufwand M.
6. **Kuratierte Lichtstimmungen** (4–6 Presets: Golden Hour, Morgennebel, Abendrosa, Winterblau) statt rein berechnetem Zyklus — «every screen is a piece of art» (ustwo/MV3). Aufwand M.
7. **Sokratische KI-Hints** (Khanmigo-Stil): gestufte Leitfragen statt Lösungen bei Quiz/Quest (baut auf HAS_AI auf). Aufwand S.

## B. Inhalt aus dem Projektordner (Tiefenprüfung)
8. ✅ **v7** — **Bauhütte**: anklickbare Holzhütte auf dem Grundstück; Modal erklärt die 8 aktivierenden Lehrelemente MIT Evidenz (Hake g .23→.48, Kestin ~0.73 SD, Freeman, Deslauriers-«warum anstrengender»-Box) + APA-Literatur mit DOIs, de/en. Quelle: 04_TIC_Umsetzungsleitfaden §3.
9. **Kohorten-Zeitstrahl**: «Ich starte HS26/27 …» → zeigt, welche umgebauten Vorlesungen die eigene Kohorte real erlebt (Roadmap aus Kompetenz-App `roadmap`). ACHTUNG: Als separate Info-Ebene gestalten — Gians Entscheid: das HAUS selbst zeigt den Zielzustand, keine Bauschilder an Blöcken. Aufwand M.
10. **Etagen-Selbstchecks P1–P3**: die 17 Ich-Sätze aus Kompetenz-App `pass` als Checkliste bei jedem Richtfest; fliesst in Radar/Evidenz/Pass. Aufwand M.
11. **Teilkompetenz-Sammelkarten**: die 16 kuratierten Teilkompetenzen (RAG-Literacy, Silicon Samples, Agenten-Literacy …) mit klickbaren APA-Quellen, auffindbar in passenden Räumen. Quelle: App `teilkompetenzen`. Aufwand M.
12. **Statik-Check**: Knopf prüft die [A]/[B]/[C]-Balance des gebauten Hauses gegen die Two-Lane-Regel (jede Kernkompetenz ≥1 [A], jede KI-Kompetenz ≥1 [B]/[C]) → Plakette. Quelle: 04 §4.1. Aufwand S–M.
13. ✅ **v8** — **Geräteschuppen**: anklickbarer Schuppen mit Tool-Stack-Karten (Copilot Chat, KlickerUZH+AI Buddy, OLAT-KI, BaltiBot, EducationAI, Copilot Premium/GitHub Copilot) mit Reifegrad-Ampel 🟢🟡🔴 + Informationsklassen-Regeln. Quelle: KI-im-Curriculum-Kompass (16.07.2026) §2.1/2.2, Stand Juli 2026.
14. **Bauamt-Vitrine**: «Warum das alles?» — 5 Kernaussagen des Begleitmemos + Beschlussstatus B1–B6 als Schautafeln («Baugenehmigung: Entwurf»). Quelle: 10_Begleitmemo §3–4. Aufwand S.

## C. Spiel als Validierungsinstrument (FAPS/AG Lehre)
15. ✅ **v7** — **Ampel-Feedback** 🚦 in jeder Modul-Karte (Grün/Gelb/Rot + Freitext, nochmals klicken = zurückziehen), lokal in `S.fb`, CSV-Export im Menü (Semikolon+BOM für Excel) → Schiene-C-Protokoll; Changelog-Tafel «Was ist neu?» für den Rückmelde-Loop. Quelle: 09_Validierungskonzept.
16. **Workshop-Modus «FAPS-Rundgang»**: geführte 20-Min-Tour entlang der 5 Validierungsfragen + Priorisierungs-Minispiel («3 Bau-Punkte verteilen»). Aufwand L.
17. **MAILS-10-Selbsttest** (Carolus et al., 2023) + 4 Survey-Items als optionaler «Bau-Tauglichkeitstest» (erster/letzter Besuch, anonymer Export) → liefert TIC die Baseline. Aufwand M.

## D. KI-Features für alle — ENTSCHIEDEN (07.07.2026)
- **Testergebnis (Gian, 06.07.2026): 🤖-Button NICHT sichtbar** → publizierte Claude-Code-Artifacts stellen kein `window.claude` bereit.
- **Gewählt und UMGESETZT (07.07., revidiert 08.07., v7.5 08.07.2026): Variante (a)** Companion-Chat-Artifact «KI-Baututor», live unter **https://claude.ai/public/artifacts/a21eaa67-43cd-4ece-a7cf-069e7f24a561** (v4, 21.07.2026: Tab «🧭 Karriere» mit 9 verifizierten Berufswegen, Wahlprofil-Import) (Baututor-Chat, 4 Fallgespräch-Szenarien mit Sicherheitsrahmen 143/147, CV-Formulierer, Spielstand-Import, de/en; Quelle in `50_Chat-Artifact/`). URL ist als `TUTOR_URL` in `js/main.js` eingetragen — ohne `window.claude` öffnet der 🤖-Button dieses Artifact (Pages + Code-Artifact). KI-Antworten erfordern ein claude.ai-Login der Besucher:in; Kosten laufen nicht über das Institut.
- Variante (b) Cloudflare-Worker-Proxy bleibt als spätere Option, falls KI ohne claude.ai-Login gewünscht ist (Kosten/Datenschutz vorher klären).

## Betriebs-Spickzettel
- Live: https://gpochs.github.io/kompetenzhaus-psychologie-uzh/ · Repo: github.com/gpochs/kompetenzhaus-psychologie-uzh · Artifact: https://claude.ai/code/artifact/8f899be9-b298-4e45-b0de-2918b3ff8fc9 (Redeploy: gleiche Datei erneut publizieren)
- Build: `npx esbuild js/main.js --bundle --minify --format=iife --alias:three=./lib/three.module.min.js "--alias:three/addons/controls/OrbitControls.js=./lib/OrbitControls.js" "--alias:three/addons/geometries/RoundedBoxGeometry.js=./lib/RoundedBoxGeometry.js" --outfile=dist/game.bundle.js` → `node build-artifact.mjs`
- Dev-Server: Preview «kompetenzhaus» (node server.js, Port 8642) · gh CLI: /opt/homebrew/bin/gh (Account gpochs)
- Leitplanken: Spiel = Zielzustand (keine Bauschilder!); keine Punkte/Leaderboards (SDT); Schweizer Rechtschreibung, {de,en} überall; [A]/[B]/[C]-Terminologie des Entwurfs 02.07.2026; localStorage-only.
