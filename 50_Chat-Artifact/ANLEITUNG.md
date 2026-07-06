# Companion-Chat-Artifact «KI-Baututor» — Anleitung

**Warum:** Der Test hat gezeigt, dass publizierte **Claude-Code-Artifacts kein `window.claude` bereitstellen** — die GenAI-Suite im Spiel bleibt dort stumm. **Chat-Artifacts** (in einem normalen claude.ai-Chat erstellt) haben die KI-Schnittstelle dagegen eingebaut. Darum läuft der KI-Baututor als eigenes, kleines Chat-Artifact, auf das das Spiel verlinkt (Backlog-Punkt D, Variante a).

## Was die Datei kann

`ki-baututor-artifact.html` — eigenständig, de/en, UZH-Design:

1. **💬 Baututor** — Fragen zu Modulen, Kompetenzen (Fa/KI/Fu), Prüfungslogik [A]/[B]/[C], nächster Bauschritt.
2. **🩺 Fallgespräch** — 4 fiktive Übungsszenarien (Klinik-Erstgespräch, Testrückmeldung, Gesundheitsberatung, AO-Teamkonflikt) mit dem Sicherheitsrahmen aus dem Spiel (alles fiktiv, keine Krisen-Schilderungen, Verweis 143/147, «Stopp» beendet die Rolle mit einer Reflexionsfrage).
3. **📝 CV-Baustein** — Kompetenz + Zielrolle → genau ein bewerbungstauglicher Satz.
4. **🏠 Spielstand-Import** — JSON aus «Haus exportieren» einfügen; der Tutor kennt dann die gebauten Module (nur Modul-IDs werden gelesen).

## Schritt für Schritt (≈3 Minuten)

1. **claude.ai** im Browser öffnen (eingeloggt), **neuen Chat** starten.
2. Die Datei `50_Chat-Artifact/ki-baututor-artifact.html` **als Anhang hochladen** (Büroklammer) und dazuschreiben:
   > Erstelle aus dieser HTML-Datei ein HTML-Artifact. Übernimm den Code exakt 1:1, ohne Änderungen.
3. Das Artifact öffnet sich rechts. **Kurztest:** Im Tab «Baututor» eine Frage stellen (z.B. «Was bedeutet [B]?») — kommt eine Antwort, funktioniert `window.claude`.
4. Oben rechts am Artifact **«Veröffentlichen»/«Publish»** wählen und den **Link kopieren** (Form: `https://claude.ai/public/artifacts/…`).
5. **Link an Claude Code zurückgeben** («Der Baututor-Link ist: …»). Dann wird er als `TUTOR_URL` in `js/main.js` eingetragen und Spiel + Pages + Code-Artifact neu deployed — ab dann zeigt das Spiel überall den 🤖-Button, der das Chat-Artifact in einem neuen Tab öffnet.

## Hinweise

- **Wer den Link nutzt:** Öffentlich publizierte Chat-Artifacts kann jede Person mit dem Link öffnen; für die KI-Antworten ist ein (kostenloses) claude.ai-Login nötig. Die Nutzung läuft über das Konto der jeweiligen Besucher:in — es entstehen dir keine API-Kosten (das war der Vorteil gegenüber Variante b, Cloudflare-Worker).
- **Datenschutz:** Die Fusszeile im Artifact weist darauf hin, dass Eingaben an Claude (Anthropic) gehen und keine echten Personendaten/Falldaten eingegeben werden sollen.
- **Aktualisieren:** Bei Änderungen die Datei anpassen, im selben claude.ai-Chat neu hochladen («aktualisiere das Artifact 1:1») und erneut veröffentlichen — der Publish-Link bleibt in der Regel stabil.
