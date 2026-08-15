# Companion-Chat-Artifact «KI-Baututor» — Anleitung

> ## ⚠️ OFFEN: v5 ist gebaut, aber noch nicht publiziert (Stand 08.08.2026)
>
> Die publizierte Fassung unter **https://claude.ai/public/artifacts/f5f07577-cae4-4a98-9b67-fced673c88b3** ist noch v4.2. Die Änderungen von v5 (Exemplare je Feedbackdimension, steuerbarer Anspruch der Gegenrolle, Zwischenhinweis im Gespräch, Wartezustand) liegen fertig und geprüft im Repository, sind aber **nicht live**.
>
> **Warum nicht automatisch:** Die Browser-Automation kann die Zwischenablage nicht in das claude.ai-Eingabefeld einfügen (synthetische Tastenereignisse haben keinen Zugriff darauf), und den Datei-Anhang-Dialog von macOS kann sie ebenfalls nicht bedienen. Der Schritt braucht zwei Minuten von Hand.
>
> **So geht es (Datei: `dist/ki-baututor-publish.html`, 144 KB — die verdichtete Versandfassung aus `tools/baututor-build.mjs`, nicht die kommentierte Quelle):**
>
> 1. claude.ai öffnen, **neuen Chat** starten.
> 2. `dist/ki-baututor-publish.html` **als Anhang** hochladen (Büroklammer, nicht einfügen).
> 3. Dazu genau diesen Text schreiben:
>
>    > Erstelle aus dieser HTML-Datei ein HTML-Artifact. Übernimm den Code **exakt Zeichen für Zeichen**, ohne jede Änderung: nichts kürzen, nichts zusammenfassen, nichts verbessern, keine Platzhalter wie «… (gekürzt)», keine Kommentare ergänzen oder entfernen. Erfinde insbesondere **keine** Inhalte — keine Lohnangaben, keine Zahlen, keine Quellen, die nicht in der Datei stehen. Wenn die Datei zu lang für eine Antwort ist, sag das, statt zu kürzen.
>
> 4. **Kurztest im Artifact:** Tab «Baututor» → «Was bedeutet [B]?» — kommt eine Antwort, funktioniert `window.claude`. Dann Tab «Fallgespräch» → Szenario starten: Es müssen drei Anspruchsstufen (zugänglich / realistisch / anspruchsvoll) und nach der Schwerpunktwahl der Block «So klingt das» erscheinen. Fehlt eines davon, wurde gekürzt — **nicht publizieren**, neu versuchen.
> 5. **Vollständigkeit prüfen:** Artifact herunterladen und `diff` gegen `dist/ki-baututor-publish.html`. Nur bei Byte-Gleichheit weiter.
> 6. «Publish» → Link kopieren → an Claude Code zurückgeben. Dann wird `TUTOR_URL` in `js/main.js` nachgezogen und Spiel, Pages und Code-Artifact neu deployed.
>
> **Grösse ist das Risiko:** Bei einer früheren Runde hat das Modell eine 90-KB-Datei stillschweigend gekürzt und dabei eine Lohnquelle erfunden; erst eine auf 69 KB verdichtete Fassung kam byte-identisch durch. Die heutige Datei ist 144 KB. Deshalb Schritt 4 und 5 nicht überspringen.

> **✅ ERLEDIGT, Stand 08.07.2026 (fachlogische Revision, via Chrome mit Fable Max):** Aktuelle publizierte Fassung:
> **https://claude.ai/public/artifacts/f5f07577-cae4-4a98-9b67-fced673c88b3**
> (Quell-Chat: claude.ai → «HTML-Code als Artifact erstellen»; Download aus dem Chat ist byte-identisch mit `ki-baututor-artifact.html` in diesem Ordner). Die URL ist als `TUTOR_URL` in `js/main.js` eingetragen — der 🤖-Button im Spiel öffnet sie überall dort, wo `window.claude` fehlt (GitHub Pages + Code-Artifact).
>
> **Wichtig fürs nächste Update:** «Publish» nach einer Artifact-Änderung erzeugt eine **neue** öffentliche URL — danach `TUTOR_URL` nachziehen und das Spiel neu deployen. Die Vorversion (…/a4a2c241-0740-…) bleibt parallel online; sie kann in den claude.ai-Einstellungen des Chats unpublished werden, ist aber unschädlich. Die Schritte unten braucht es nur, falls das Artifact komplett neu erstellt werden muss.

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
