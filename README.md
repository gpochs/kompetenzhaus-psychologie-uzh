# Das Kompetenzhaus — Psychologie UZH (Entwurf)

Ein browserbasiertes 3D-Bauspiel: Studierende bauen ihr Psychologiestudium (BSc 06B-7200-120, MSc 06M-7200-120) Modul für Modul zu einem Haus — und mit jedem Baustein wächst ihr Kompetenzprofil aus **Fachkompetenzen (Fa1–Fa10)**, **KI-Kompetenzen (KI1–KI6)** und **Future Skills (Fu1–Fu3)**.

> Grundlage ist das **Kompetenzaufbaumodell vom 02.07.2026** — ein Entwurf als Gesprächsbasis für das Psychologische Institut der UZH, **kein beschlossenes Curriculum**. Die «Zukunftsmodul»-Beschreibungen sind Diskussionsvorschläge.

## Spielidee

- **Statik = Studienlogik.** Ohne Fundament (Propädeutikum, 38 ECTS) trägt nichts; das Dach ist die Bachelorarbeit; im Master ist der Einstiegs-Dreierblock der Schlüsselstein für den Abschlussturm mit der Masterprüfungs-Fahne.
- **Zwei Modi.** *Freies Bauen* (Kombinationen testen) und *Serious Mode* (nur selbst als bestanden markierte Module — das Haus zeigt den echten Studienstand).
- **Quests ✦.** Jeder Baustein trägt eine 5–15-Minuten-Mini-Aufgabe aus dem Kompetenzaufbaumodell (z. B. eine KI-Antwort gegen das Lehrbuch prüfen).
- **Kompetenzpass.** Druckbares Kompetenzprofil (PDF) mit Modulen, [A]/[B]/[C]-Prüfungslogik, Quests und eigenen Merksätzen — für Standortgespräche, Bewerbungen, PhD-Dossiers.
- **Teilen & Campus.** Haus als Link teilen (alles im URL-Hash, kein Server), Häuser von Kolleg:innen als Nachbarhäuser speichern. Bewusst **ohne Ranglisten** — das Spieldesign folgt der Evidenz zu Gamification in der Hochschullehre (u. a. Sailer & Homner, 2020; Hanus & Fox, 2015; Deci et al., 1999).
- Jahreszeiten im Semesterrhythmus, Tag/Nacht, Baustile pro Baustein, Schwerpunkt-Fassaden (DeNC/HEA/SEOP) im Master.

## Nutzung

Einfach `index.html` öffnen — kein Build, kein Server, keine Konten. Für lokale Entwicklung: `node server.js` → <http://localhost:8642>.

Alle Daten bleiben **lokal im Browser** (localStorage); Export/Import als JSON. Details: Menü → Datenschutz.

## Architektur

| Datei | Inhalt |
|---|---|
| `index.html` | HUD, Panels, Modals, Styles |
| `js/daten-struktur.js` | Blaupause: Slots, Bauregeln (Mustercurriculum), 19 Kompetenzen, Meilensteine |
| `js/daten-texte.js` | Zukunftsmodul-Texte, Lernziele, KI-Integration, Quests (de/en) |
| `js/main.js` | Three.js-Engine: Placement, Statik-Regeln, Juice, Jahreszeiten, Avatar, Kompetenzpass |
| `js/i18n.js`, `js/audio.js` | UI-Texte de/en, WebAudio-Synth (keine Audiodateien) |
| `lib/` | Three.js 0.180 (lokal gebündelt, keine CDN-Abhängigkeit) |

Entwickelt am Psychologischen Institut der Universität Zürich (Lehrentwicklung), 2026.
