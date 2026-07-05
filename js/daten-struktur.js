/* =====================================================================
   Das Kompetenzhaus — Strukturdaten (Blaupause, Regeln, Kompetenzen)
   Quelle: Modulkatalog BSc 06B-7200-120 / MSc 06M-7200-120 (05.06.2026),
   Mustercurricula (gültig ab 1.8.2026),
   Kompetenzaufbaumodell PSYCH BSc/MSc (Entwurf, 02.07.2026).
   IDs sind kanonisch: Fa1–Fa10, KI1–KI6, Fu1–Fu3.
   Alle Texte {de,en}. Schweizer Rechtschreibung.
   ===================================================================== */
window.STRUKTUR = {
  meta: {
    version: "1.0",
    stand: "2026-07-03",
    hinweis: {
      de: "Basiert auf dem Kompetenzaufbaumodell vom 02.07.2026 — ein Entwurf als Gesprächsbasis, kein beschlossenes Curriculum.",
      en: "Based on the competence build-up model of 2 July 2026 — a draft intended as a basis for discussion, not an approved curriculum."
    }
  },

  /* ---------- Kompetenzfelder & 19 Kompetenzen ---------- */
  felder: {
    fa: { name: { de: "Fachkompetenzen", en: "Domain competences" }, farbe: "#1a3e8f" },
    ki: { name: { de: "KI-Kompetenzen", en: "AI competences" }, farbe: "#0e8f7e" },
    fu: { name: { de: "Future Skills", en: "Future skills" }, farbe: "#4a90d9" }
  },
  kompetenzen: [
    { id: "Fa1",  feld: "fa", name: { de: "Fachwissen", en: "Disciplinary knowledge" }, ich: { de: "Ich kenne die Theorien und Befunde der Psychologie.", en: "I know the theories and findings of psychology." } },
    { id: "Fa2",  feld: "fa", name: { de: "Forschungsmethoden & Design", en: "Research methods & design" }, ich: { de: "Ich kann Studien planen, verstehen und beurteilen.", en: "I can plan, understand and appraise studies." } },
    { id: "Fa3",  feld: "fa", name: { de: "Statistik, R & Daten", en: "Statistics, R & data" }, ich: { de: "Ich kann Daten auswerten (z.B. mit R) und Ergebnisse richtig deuten.", en: "I can analyse data (e.g. in R) and interpret results correctly." } },
    { id: "Fa4",  feld: "fa", name: { de: "wissenschaftliches/kritisches Denken", en: "Scientific/critical thinking" }, ich: { de: "Ich prüfe Behauptungen an Evidenz, statt sie zu glauben.", en: "I test claims against evidence instead of believing them." } },
    { id: "Fa5",  feld: "fa", name: { de: "Diagnostik, Testtheorie & Assessment", en: "Diagnostics, test theory & assessment" }, ich: { de: "Ich kann psychologische Tests beurteilen, anwenden und interpretieren.", en: "I can appraise, administer and interpret psychological tests." } },
    { id: "Fa6",  feld: "fa", name: { de: "Schreiben & Kommunikation", en: "Writing & communication" }, ich: { de: "Ich kann wissenschaftlich schreiben und Ergebnisse verständlich vermitteln.", en: "I can write scientifically and communicate results clearly." } },
    { id: "Fa7",  feld: "fa", name: { de: "Ethik & Integrität", en: "Ethics & integrity" }, ich: { de: "Ich handle nach wissenschaftlichen und berufsethischen Regeln.", en: "I act according to scientific and professional-ethical rules." } },
    { id: "Fa8",  feld: "fa", name: { de: "evidenzbasierte Praxis/Transfer", en: "Evidence-based practice/transfer" }, ich: { de: "Ich wende psychologisches Wissen fundiert auf echte Probleme an.", en: "I apply psychological knowledge soundly to real problems." } },
    { id: "Fa9",  feld: "fa", name: { de: "Diversität & Kontext", en: "Diversity & context" }, ich: { de: "Ich berücksichtige Vielfalt und Kontext von Menschen.", en: "I take people's diversity and context into account." } },
    { id: "Fa10", feld: "fa", name: { de: "Selbstmanagement", en: "Self-management" }, ich: { de: "Ich organisiere mein Lernen und meine berufliche Entwicklung.", en: "I organise my learning and my professional development." } },
    { id: "KI1",  feld: "ki", name: { de: "Anwenden", en: "Applying" }, ich: { de: "Ich nutze KI-Werkzeuge gezielt für Studium und Arbeit.", en: "I use AI tools purposefully for study and work." } },
    { id: "KI2",  feld: "ki", name: { de: "Gestalten", en: "Creating" }, ich: { de: "Ich entwickle mit KI Neues — Lernhilfen, Workflows, eigene Bots.", en: "I create new things with AI — learning aids, workflows, my own bots." } },
    { id: "KI3",  feld: "ki", name: { de: "Zusammenarbeiten", en: "Collaborating" }, ich: { de: "Ich arbeite mit Menschen und KI zusammen — und weiss, was die KI übernehmen darf.", en: "I work with people and AI — and know what AI may take on." } },
    { id: "KI4",  feld: "ki", name: { de: "Verstehen", en: "Understanding" }, ich: { de: "Ich verstehe, wie KI funktioniert — und warum sie überzeugen kann, ohne richtig zu liegen.", en: "I understand how AI works — and why it can convince without being right." } },
    { id: "KI5",  feld: "ki", name: { de: "Verantworten", en: "Taking responsibility" }, ich: { de: "Ich gehe verantwortungsvoll mit KI um: deklarieren, Daten schützen, verantwortlich bleiben.", en: "I use AI responsibly: declare, protect data, stay accountable." } },
    { id: "KI6",  feld: "ki", name: { de: "Evaluieren", en: "Evaluating" }, ich: { de: "Ich prüfe KI-Ergebnisse so kritisch wie jede andere Quelle.", en: "I scrutinise AI outputs as critically as any other source." } },
    { id: "Fu1",  feld: "fu", name: { de: "Arbeiten/Gestalten (mit und ohne KI)", en: "Working/creating (with & without AI)" }, ich: { de: "Ich setze Ideen um und gestalte Lösungen — mit und ohne KI.", en: "I turn ideas into solutions — with and without AI." },
      sub: [
        { id: "FS1", name: { de: "Aktivitäts- & Umsetzungskompetenz", en: "Activity & implementation competence" }, proxy: ["KI1"] },
        { id: "FS2", name: { de: "Systemdesignkompetenz", en: "System design competence" }, proxy: ["KI2"] },
        { id: "FS3", name: { de: "Kreative Problemlösekompetenz", en: "Creative problem-solving competence" }, proxy: ["KI2", "Fa4"] },
        { id: "FS4", name: { de: "Kritische digitale Kompetenz", en: "Critical digital competence" }, proxy: ["KI6", "KI4"] },
        { id: "FS5", name: { de: "Entscheidungskompetenz", en: "Decision-making competence" }, proxy: ["KI6", "Fu2"] }
      ] },
    { id: "Fu2",  feld: "fu", name: { de: "Persönliche Fähigkeiten", en: "Personal capabilities" }, ich: { de: "Ich steuere mein Lernen selbst und traue mir Neues zu.", en: "I direct my own learning and trust myself with the new." },
      sub: [
        { id: "FS6", name: { de: "Selbstwirksamkeit", en: "Self-efficacy" }, proxy: ["Fu2"] },
        { id: "FS7", name: { de: "Kritisches Denken", en: "Critical thinking" }, proxy: ["Fa4", "KI6"] },
        { id: "FS8", name: { de: "Aktive Steuerung & Selbstmanagement", en: "Active self-regulation & self-management" }, proxy: ["Fu2", "Fa10"] },
        { id: "FS9", name: { de: "Selbstbestimmtheit", en: "Self-determination" }, proxy: ["Fu2"] }
      ] },
    { id: "Fu3",  feld: "fu", name: { de: "Soziales Umfeld gestalten", en: "Shaping the social environment" }, ich: { de: "Ich gestalte Zusammenarbeit, Kommunikation und Ethik aktiv mit.", en: "I actively shape collaboration, communication and ethics." },
      sub: [
        { id: "FS10", name: { de: "Ethische Kompetenz", en: "Ethical competence" }, proxy: ["KI5", "Fa7"] },
        { id: "FS11", name: { de: "Kooperationskompetenz", en: "Cooperation competence" }, proxy: ["KI3"] },
        { id: "FS12", name: { de: "Kommunikationskompetenz", en: "Communication competence" }, proxy: ["KI3", "Fa6"] }
      ] }
  ],
  /* Quelle der 12 Felder: AIComp (Ehlers et al., 2024); Proxy = Spiel-Kompetenzen, über die das Feld trainiert wird. */

  stufen: [
    { n: 1, name: { de: "Orientieren und eigenes Können sichern", en: "Orient and secure core skills" }, anker: { de: "BSc Sem. 1–2", en: "BSc sem. 1–2" } },
    { n: 2, name: { de: "Vertiefen, anwenden und prüfen", en: "Deepen, apply and examine" }, anker: { de: "BSc Sem. 3–6", en: "BSc sem. 3–6" } },
    { n: 3, name: { de: "Professionell integrieren, gestalten und verantworten", en: "Integrate, design and take responsibility professionally" }, anker: { de: "MSc Sem. 1–2", en: "MSc sem. 1–2" } },
    { n: 4, name: { de: "Eigenständig forschen, komplex handeln und professionell verantworten", en: "Research independently, act in complexity, own it professionally" }, anker: { de: "MSc Sem. 3–4", en: "MSc sem. 3–4" } }
  ],

  pruefungslogik: {
    A: { name: { de: "[A] KI-frei", en: "[A] AI-free" }, farbe: "#0a7d40", def: { de: "Kernfertigkeiten ohne KI zeigen", en: "Demonstrate core skills without AI" } },
    B: { name: { de: "[B] teilweise KI-integriert", en: "[B] partially AI-integrated" }, farbe: "#b35c00", def: { de: "Einzelne Schritte mit KI, andere ohne — mit Disclosure und Prozesslog", en: "Some steps with AI, others without — with disclosure and process log" } },
    C: { name: { de: "[C] KI-integriert", en: "[C] AI-integrated" }, farbe: "#a50028", def: { de: "KI in jedem Arbeitsschritt; anspruchsvolles Newskilling", en: "AI in every step; demanding newskilling" } }
  },

  /* ---------- Modulgruppen (Farben der Bausteine) ---------- */
  gruppen: {
    prop:   { name: { de: "Propädeutikum", en: "Propaedeutic year" },                          farbe: "#3f6cc8" },
    meth:   { name: { de: "Statistik, Forschungsmethoden & Testtheorie", en: "Statistics, methods & test theory" }, farbe: "#7c5cbf" },
    enk:    { name: { de: "Entwicklung, Neurowissenschaft, Kognition", en: "Development, neuroscience, cognition" }, farbe: "#2a9d8f" },
    swod:   { name: { de: "Sozial-, Wirtschafts-, Organisations-, Differentielle Psych.", en: "Social, economic, organisational, differential psych." }, farbe: "#d9a441" },
    klin:   { name: { de: "Klinische Psychologie & Gesundheitspsychologie", en: "Clinical & health psychology" },   farbe: "#d96a4b" },
    abschl: { name: { de: "Abschluss BSc", en: "BSc completion" },                             farbe: "#0028a5" },
    mein:   { name: { de: "Einstieg Masterstudium", en: "Master entry block" },                farbe: "#264673" },
    vert:   { name: { de: "Vertiefungen", en: "Specialisation seminars" },                     farbe: "#5e60ce" },
    erg:    { name: { de: "Ergänzung", en: "Electives" },                                      farbe: "#e0b34c" },
    prax:   { name: { de: "Forschungs- & Berufspraxis", en: "Research & professional practice" }, farbe: "#4d96c9" },
    mabschl:{ name: { de: "Abschluss MSc", en: "MSc completion" },                             farbe: "#0028a5" }
  },

  schwerpunkte: {
    DeNC: { name: { de: "Developmental & Cognitive Neuroscience (DeNC)", en: "Developmental & Cognitive Neuroscience (DeNC)" }, farbe: "#6c5ce7" },
    HEA:  { name: { de: "Health, Emotion & Adjustment (HEA)", en: "Health, Emotion & Adjustment (HEA)" },                       farbe: "#e17055" },
    SEOP: { name: { de: "Social, Economic & Organisational Psychology (SEOP)", en: "Social, Economic & Organisational Psychology (SEOP)" }, farbe: "#00b877" }
  },

  /* ---------- Baustil-Varianten (Design-Anpassung pro Baustein) ---------- */
  stile: [
    { id: "klassisch", name: { de: "Klassisch", en: "Classic" } },
    { id: "hell",      name: { de: "Hell verputzt", en: "Light render" } },
    { id: "holz",      name: { de: "Holzfassade", en: "Timber façade" } },
    { id: "glas",      name: { de: "Glas & Stahl", en: "Glass & steel" } }
  ],

  /* ---------- Slots = platzierbare Bausteine ----------
     pos: Zellen relativ zum Hausursprung. y = Geschoss (0 Fundament).
     w/d in Zellen, h relative Blockhöhe. form: box|slab|step|bay|roof|tower|spire|lantern|wing
     voraus: Slot-IDs, die zuvor gebaut sein müssen (harte Statik/Regeln).
     empf: weiche Empfehlungen (Hinweis, blockiert nicht).
     sem: empfohlenes Semester (Mustercurriculum), rhythmus: HS|FS|beide, sem2: zweisemestrig.
  ---------------------------------------------------------------- */
  haeuser: {
    bsc: { name: { de: "Bachelor-Haus (120 ECTS)", en: "Bachelor house (120 ECTS)" }, origin: [-11, 0, 0], breite: 8, tiefe: 5 },
    msc: { name: { de: "Master-Haus (120 ECTS)", en: "Master house (120 ECTS)" },   origin: [ 11, 0, 0], breite: 6, tiefe: 5 }
  },

  slots: [
    /* ===== BSc — Fundament (Stufe 1) ===== */
    { slot: "001", code: "06SM200-001", haus: "bsc", gruppe: "prop", ects: 18, kategorie: "Pflicht", stufe: 1, sem: 1, sem2: true, rhythmus: "HS",
      titel: { de: "Einführung Statistik, Emotions-, Motivations-, Sozialpsychologie", en: "Introduction: statistics, emotion, motivation, social psychology" },
      kurz: { de: "Fundament West", en: "Foundation west" },
      form: "slab", pos: { x: -2, y: 0, z: 0, w: 4, d: 5, h: 0.55 }, voraus: [], empf: [] },
    { slot: "002", code: "06SM200-002", haus: "bsc", gruppe: "prop", ects: 18, kategorie: "Pflicht", stufe: 1, sem: 1, sem2: true, rhythmus: "HS",
      titel: { de: "Einführung Methoden, Kognition, Entwicklungs-, Biologische Psychologie", en: "Introduction: methods, cognition, developmental, biological psychology" },
      kurz: { de: "Fundament Ost", en: "Foundation east" },
      form: "slab", pos: { x: 2, y: 0, z: 0, w: 4, d: 5, h: 0.55 }, voraus: [], empf: [] },
    { slot: "003", code: "06SM200-003", haus: "bsc", gruppe: "prop", ects: 2, kategorie: "Pflicht", stufe: 1, sem: 1, sem2: false, rhythmus: "HS",
      titel: { de: "Interaktives Proseminar (IPS)", en: "Interactive proseminar (IPS)" },
      kurz: { de: "Eingangsstufe", en: "Entrance step" },
      form: "step", pos: { x: 0, y: 0, z: 3.1, w: 2, d: 1.2, h: 0.35 }, voraus: [], empf: [] },

    /* ===== BSc — Erdgeschoss (Studienjahr 2, Stufe 2) ===== */
    { slot: "100", code: "06SM200-100", haus: "bsc", gruppe: "meth", ects: 4, kategorie: "Pflicht", stufe: 2, sem: 3, sem2: false, rhythmus: "HS",
      titel: { de: "Testtheorie", en: "Test theory" }, kurz: { de: "EG vorne links", en: "Ground floor, front left" },
      form: "box", pos: { x: -3, y: 1, z: 1.25, w: 2, d: 2.5, h: 1 }, voraus: ["001", "002"], empf: [] },
    { slot: "101", code: "06SM200-101", haus: "bsc", gruppe: "meth", ects: 4, kategorie: "Pflicht", stufe: 2, sem: 3, sem2: false, rhythmus: "HS",
      titel: { de: "Rechnergestützte Datenauswertung", en: "Computer-based data analysis" }, kurz: { de: "EG vorne Mitte", en: "Ground floor, front centre" },
      form: "box", pos: { x: -1, y: 1, z: 1.25, w: 2, d: 2.5, h: 1 }, voraus: ["001", "002"], empf: [] },
    { slot: "400", code: "06SM200-400", haus: "bsc", gruppe: "klin", ects: 8, kategorie: "Pflicht", stufe: 2, sem: 3, sem2: true, rhythmus: "HS",
      titel: { de: "Einführung in die Klinische Psychologie und Psychopathologie", en: "Introduction to clinical psychology and psychopathology" }, kurz: { de: "EG vorne rechts (Doppelraum)", en: "Ground floor, front right (double room)" },
      form: "box", pos: { x: 2, y: 1, z: 1.25, w: 4, d: 2.5, h: 1 }, voraus: ["001", "002"], empf: [] },
    { slot: "200", code: "06SM200-200", haus: "bsc", gruppe: "enk", ects: 4, kategorie: "Pflicht", stufe: 2, sem: 3, sem2: false, rhythmus: "HS",
      titel: { de: "Kognitionspsychologie 2", en: "Cognitive psychology 2" }, kurz: { de: "EG hinten links", en: "Ground floor, back left" },
      form: "box", pos: { x: -3, y: 1, z: -1.25, w: 2, d: 2.5, h: 1 }, voraus: ["001", "002"], empf: [] },
    { slot: "201", code: "06SM200-201", haus: "bsc", gruppe: "enk", ects: 4, kategorie: "Pflicht", stufe: 2, sem: 4, sem2: false, rhythmus: "FS",
      titel: { de: "Kognitive Neurowissenschaften", en: "Cognitive neuroscience" }, kurz: { de: "EG hinten Mitte", en: "Ground floor, back centre" },
      form: "box", pos: { x: -1, y: 1, z: -1.25, w: 2, d: 2.5, h: 1 }, voraus: ["001", "002"], empf: [] },
    { slot: "102", code: "06SM200-102", haus: "bsc", gruppe: "meth", ects: 8, kategorie: "Pflicht", stufe: 2, sem: 4, sem2: false, rhythmus: "FS",
      titel: { de: "Experimentalpsychologisches Praktikum (ExPra)", en: "Experimental psychology lab (ExPra)" }, kurz: { de: "EG hinten rechts (Doppelraum)", en: "Ground floor, back right (double room)" },
      form: "box", pos: { x: 2, y: 1, z: -1.25, w: 4, d: 2.5, h: 1 }, voraus: ["001", "002"], empf: ["101"] },
    { slot: "s11", code: "06SM200-s11", haus: "bsc", gruppe: "enk", ects: 4, kategorie: "Wahl", stufe: 2, sem: 3, sem2: false, rhythmus: "beide",
      titel: { de: "Wahlseminar: Themen der Entwicklungspsychologie der Lebensspanne", en: "Elective seminar: topics in lifespan developmental psychology" }, kurz: { de: "Erker West (EG)", en: "Bay window west (ground floor)" },
      form: "bay", pos: { x: -4.6, y: 1, z: 0, w: 1.2, d: 2, h: 1 }, voraus: ["001", "002"], empf: [] },

    /* ===== BSc — Obergeschoss (Studienjahr 3, Stufe 2) ===== */
    { slot: "103", code: "06SM200-103", haus: "bsc", gruppe: "meth", ects: 8, kategorie: "Pflicht", stufe: 2, sem: 5, sem2: true, rhythmus: "HS",
      titel: { de: "Statistik 2", en: "Statistics 2" }, kurz: { de: "OG hinten links (Doppelraum)", en: "Upper floor, back left (double room)" },
      form: "box", pos: { x: -2, y: 2, z: -1.25, w: 4, d: 2.5, h: 1 }, voraus: ["200", "201"], empf: [] },
    { slot: "401", code: "06SM200-401", haus: "bsc", gruppe: "klin", ects: 4, kategorie: "Pflicht", stufe: 2, sem: 5, sem2: false, rhythmus: "HS",
      titel: { de: "Klinische Biopsychologie", en: "Clinical biopsychology" }, kurz: { de: "OG hinten Mitte", en: "Upper floor, back centre" },
      form: "box", pos: { x: 1, y: 2, z: -1.25, w: 2, d: 2.5, h: 1 }, voraus: ["102"], empf: [] },
    { slot: "402", code: "06SM200-402", haus: "bsc", gruppe: "klin", ects: 4, kategorie: "Pflicht", stufe: 2, sem: 5, sem2: true, rhythmus: "HS",
      titel: { de: "Ausgewählte Themen der Psychopathologie (PTO)", en: "Selected topics in psychopathology (PTO)" }, kurz: { de: "OG hinten rechts", en: "Upper floor, back right" },
      form: "box", pos: { x: 3, y: 2, z: -1.25, w: 2, d: 2.5, h: 1 }, voraus: ["400"], empf: ["400"] },
    { slot: "300", code: "06SM200-300", haus: "bsc", gruppe: "swod", ects: 4, kategorie: "Pflicht", stufe: 2, sem: 4, sem2: false, rhythmus: "FS",
      titel: { de: "Persönlichkeitspsychologie", en: "Personality psychology" }, kurz: { de: "OG vorne links", en: "Upper floor, front left" },
      form: "box", pos: { x: -3, y: 2, z: 1.25, w: 2, d: 2.5, h: 1 }, voraus: ["100"], empf: ["100"] },
    { slot: "301", code: "06SM200-301", haus: "bsc", gruppe: "swod", ects: 4, kategorie: "Pflicht", stufe: 2, sem: 5, sem2: false, rhythmus: "HS",
      titel: { de: "Arbeits- und Organisationspsychologie 1", en: "Work and organisational psychology 1" }, kurz: { de: "OG vorne Mitte links", en: "Upper floor, front centre-left" },
      form: "box", pos: { x: -1, y: 2, z: 1.25, w: 2, d: 2.5, h: 1 }, voraus: ["100", "101"], empf: [] },
    { slot: "302", code: "06SM200-302", haus: "bsc", gruppe: "swod", ects: 4, kategorie: "Pflicht", stufe: 2, sem: 6, sem2: false, rhythmus: "FS",
      titel: { de: "Arbeits- und Organisationspsychologie 2", en: "Work and organisational psychology 2" }, kurz: { de: "OG vorne Mitte rechts", en: "Upper floor, front centre-right" },
      form: "box", pos: { x: 1, y: 2, z: 1.25, w: 2, d: 2.5, h: 1 }, voraus: ["301"], empf: [] },
    { slot: "403", code: "06SM200-403", haus: "bsc", gruppe: "klin", ects: 4, kategorie: "Pflicht", stufe: 2, sem: 5, sem2: false, rhythmus: "HS",
      titel: { de: "Klinische Paar- und Familienpsychologie", en: "Clinical couple and family psychology" }, kurz: { de: "OG vorne rechts", en: "Upper floor, front right" },
      form: "box", pos: { x: 3, y: 2, z: 1.25, w: 2, d: 2.5, h: 1 }, voraus: ["400"], empf: [] },
    { slot: "s12", code: "06SM200-s12", haus: "bsc", gruppe: "klin", ects: 4, kategorie: "Wahl", stufe: 2, sem: 5, sem2: false, rhythmus: "beide",
      titel: { de: "Wahlseminar: Themen der Klinischen und Gesundheitspsychologie", en: "Elective seminar: topics in clinical and health psychology" }, kurz: { de: "Erker West (OG)", en: "Bay window west (upper floor)" },
      form: "bay", pos: { x: -4.6, y: 2, z: 0, w: 1.2, d: 2, h: 1 }, voraus: ["400"], empf: [] },
    { slot: "s13", code: "06SM200-s13", haus: "bsc", gruppe: "swod", ects: 4, kategorie: "Wahl", stufe: 2, sem: 6, sem2: false, rhythmus: "beide",
      titel: { de: "Wahlseminar: Themen Soz.-, Wirtschafts-, Organisations-, Different. Psych.", en: "Elective seminar: social, economic, organisational, differential psych." }, kurz: { de: "Erker Ost (OG)", en: "Bay window east (upper floor)" },
      form: "bay", pos: { x: 4.6, y: 2, z: 0, w: 1.2, d: 2, h: 1 }, voraus: ["001", "002"], empf: [] },

    /* ===== BSc — Dach ===== */
    { slot: "BA", code: "06SM200-BA", haus: "bsc", gruppe: "abschl", ects: 6, kategorie: "Pflicht", stufe: 2, sem: 6, sem2: false, rhythmus: "beide",
      titel: { de: "Bachelorarbeit", en: "Bachelor's thesis" }, kurz: { de: "Das Dach", en: "The roof" },
      form: "roof", pos: { x: 0, y: 3, z: 0, w: 8.4, d: 5.6, h: 1.5 },
      voraus: ["100", "101", "102", "103", "200", "201", "300", "301", "302", "400", "401", "402", "403"], empf: [] },

    /* ===== MSc — Sockel (Einstieg, Stufe 3) ===== */
    { slot: "500", code: "06SM200-500", haus: "msc", gruppe: "mein", ects: 4, kategorie: "Pflicht", stufe: 3, sem: 1, sem2: false, rhythmus: "HS",
      titel: { de: "Statistics 3", en: "Statistics 3" }, kurz: { de: "Sockel West", en: "Base west" },
      form: "slab", pos: { x: -2, y: 0, z: 0, w: 2, d: 5, h: 0.55 }, voraus: [], empf: [] },
    { slot: "501", code: "06SM200-501", haus: "msc", gruppe: "mein", ects: 4, kategorie: "Pflicht", stufe: 3, sem: 1, sem2: false, rhythmus: "HS",
      titel: { de: "Psychologische Diagnostik", en: "Psychological assessment" }, kurz: { de: "Sockel Mitte", en: "Base centre" },
      form: "slab", pos: { x: 0, y: 0, z: 0, w: 2, d: 5, h: 0.55 }, voraus: [], empf: [] },
    { slot: "502", code: "06SM200-502", haus: "msc", gruppe: "mein", ects: 4, kategorie: "Pflicht", stufe: 3, sem: 1, sem2: false, rhythmus: "HS",
      titel: { de: "Gesundheitspsychologie", en: "Health psychology" }, kurz: { de: "Sockel Ost", en: "Base east" },
      form: "slab", pos: { x: 2, y: 0, z: 0, w: 2, d: 5, h: 0.55 }, voraus: [], empf: [] },

    /* ===== MSc — Erdgeschoss ===== */
    { slot: "s04", code: "06SM200-s04", haus: "msc", gruppe: "vert", ects: 4, kategorie: "Wahl", stufe: 3, sem: 2, sem2: false, rhythmus: "beide", schwerpunktwahl: true,
      titel: { de: "Vertiefung 1", en: "Specialisation 1" }, kurz: { de: "EG vorne links", en: "Ground floor, front left" },
      form: "box", pos: { x: -2, y: 1, z: 1.25, w: 2, d: 2.5, h: 1 }, voraus: ["500", "501", "502"], empf: [] },
    { slot: "s05", code: "06SM200-s05", haus: "msc", gruppe: "vert", ects: 4, kategorie: "Wahl", stufe: 3, sem: 2, sem2: false, rhythmus: "beide", schwerpunktwahl: true,
      titel: { de: "Vertiefung 2", en: "Specialisation 2" }, kurz: { de: "EG vorne Mitte", en: "Ground floor, front centre" },
      form: "box", pos: { x: 0, y: 1, z: 1.25, w: 2, d: 2.5, h: 1 }, voraus: ["500", "501", "502"], empf: [] },
    { slot: "s06", code: "06SM200-s06", haus: "msc", gruppe: "vert", ects: 4, kategorie: "Wahl", stufe: 3, sem: 2, sem2: false, rhythmus: "beide", schwerpunktwahl: true,
      titel: { de: "Vertiefung 3", en: "Specialisation 3" }, kurz: { de: "EG vorne rechts", en: "Ground floor, front right" },
      form: "box", pos: { x: 2, y: 1, z: 1.25, w: 2, d: 2.5, h: 1 }, voraus: ["500", "501", "502"], empf: [] },
    { slot: "wp", code: "06SM200-510", haus: "msc", gruppe: "erg", ects: 4, kategorie: "Wahlpflicht", stufe: 3, sem: 1, sem2: false, rhythmus: "HS",
      optionen: ["06SM200-510", "06SM200-511"],
      titel: { de: "Wahlpflicht: Economic and Consumer Psychology ODER Klinische Neuropsychologie", en: "Compulsory elective: Economic and Consumer Psychology OR Clinical Neuropsychology" },
      kurz: { de: "EG hinten links", en: "Ground floor, back left" },
      form: "box", pos: { x: -2, y: 1, z: -1.25, w: 2, d: 2.5, h: 1 }, voraus: [], empf: ["500"] },
    { slot: "s01a", code: "06SM200-s01", haus: "msc", gruppe: "erg", ects: 4, kategorie: "Wahl", stufe: 3, sem: 1, sem2: false, rhythmus: "beide",
      titel: { de: "Ergänzung Wahlmodul I", en: "Elective module I" }, kurz: { de: "EG hinten Mitte", en: "Ground floor, back centre" },
      form: "box", pos: { x: 0, y: 1, z: -1.25, w: 2, d: 2.5, h: 1 }, voraus: [], empf: [] },
    { slot: "s01b", code: "06SM200-s01", haus: "msc", gruppe: "erg", ects: 4, kategorie: "Wahl", stufe: 3, sem: 1, sem2: false, rhythmus: "beide",
      titel: { de: "Ergänzung Wahlmodul II", en: "Elective module II" }, kurz: { de: "EG hinten rechts", en: "Ground floor, back right" },
      form: "box", pos: { x: 2, y: 1, z: -1.25, w: 2, d: 2.5, h: 1 }, voraus: [], empf: [] },

    /* ===== MSc — Obergeschoss ===== */
    { slot: "s07", code: "06SM200-s07", haus: "msc", gruppe: "vert", ects: 4, kategorie: "Wahl", stufe: 3, sem: 3, sem2: false, rhythmus: "beide", schwerpunktwahl: true,
      titel: { de: "Vertiefung 4", en: "Specialisation 4" }, kurz: { de: "OG vorne links", en: "Upper floor, front left" },
      form: "box", pos: { x: -2, y: 2, z: 1.25, w: 2, d: 2.5, h: 1 }, voraus: ["s04"], empf: [] },
    { slot: "s08", code: "06SM200-s08", haus: "msc", gruppe: "vert", ects: 4, kategorie: "Wahl", stufe: 3, sem: 3, sem2: false, rhythmus: "beide", schwerpunktwahl: true,
      titel: { de: "Vertiefung 5", en: "Specialisation 5" }, kurz: { de: "OG vorne Mitte", en: "Upper floor, front centre" },
      form: "box", pos: { x: 0, y: 2, z: 1.25, w: 2, d: 2.5, h: 1 }, voraus: ["s05"], empf: [] },
    { slot: "s09", code: "06SM200-s09", haus: "msc", gruppe: "vert", ects: 4, kategorie: "Wahl", stufe: 3, sem: 3, sem2: false, rhythmus: "beide", schwerpunktwahl: true,
      titel: { de: "Vertiefung 6", en: "Specialisation 6" }, kurz: { de: "OG vorne rechts", en: "Upper floor, front right" },
      form: "box", pos: { x: 2, y: 2, z: 1.25, w: 2, d: 2.5, h: 1 }, voraus: ["s06"], empf: [] },
    { slot: "s01c", code: "06SM200-s01", haus: "msc", gruppe: "erg", ects: 4, kategorie: "Wahl", stufe: 3, sem: 2, sem2: false, rhythmus: "beide",
      optionen: ["06SM200-s01", "10SMSTS-505"],
      titel: { de: "Ergänzung Wahlmodul III (oder Mentoring)", en: "Elective module III (or mentoring)" }, kurz: { de: "OG hinten links", en: "Upper floor, back left" },
      form: "box", pos: { x: -2, y: 2, z: -1.25, w: 2, d: 2.5, h: 1 }, voraus: ["wp"], empf: [] },
    { slot: "s03", code: "06SM200-s03", haus: "msc", gruppe: "prax", ects: 4, kategorie: "Wahl", stufe: 3, sem: 3, sem2: false, rhythmus: "beide",
      titel: { de: "Fortgeschrittene Methoden", en: "Advanced methods" }, kurz: { de: "OG hinten Mitte", en: "Upper floor, back centre" },
      form: "box", pos: { x: 0, y: 2, z: -1.25, w: 4, d: 2.5, h: 1 }, voraus: ["500"], empf: [] },

    /* ===== MSc — Seitenflügel & Laternen ===== */
    { slot: "600", code: "06SM200-600", haus: "msc", gruppe: "prax", ects: 16, kategorie: "Pflicht", stufe: 3, sem: 2, sem2: false, rhythmus: "beide",
      titel: { de: "Praktikum (500 Stunden)", en: "Internship (500 hours)" }, kurz: { de: "Seitenflügel Ost", en: "East wing" },
      form: "wing", pos: { x: 4.4, y: 0, z: 0, w: 2.4, d: 3.4, h: 2.1 }, voraus: [], empf: [] },
    { slot: "s02a", code: "06SM200-s02", haus: "msc", gruppe: "prax", ects: 1, kategorie: "Wahl", stufe: 3, sem: 1, sem2: false, rhythmus: "beide",
      titel: { de: "Gästekolloquium I", en: "Guest colloquium I" }, kurz: { de: "Laterne links", en: "Lantern left" },
      form: "lantern", pos: { x: -1.6, y: 0, z: 3.2, w: 0.5, d: 0.5, h: 1.5 }, voraus: [], empf: [] },
    { slot: "s02b", code: "06SM200-s02", haus: "msc", gruppe: "prax", ects: 1, kategorie: "Wahl", stufe: 3, sem: 2, sem2: false, rhythmus: "beide",
      titel: { de: "Gästekolloquium II", en: "Guest colloquium II" }, kurz: { de: "Laterne rechts", en: "Lantern right" },
      form: "lantern", pos: { x: 1.6, y: 0, z: 3.2, w: 0.5, d: 0.5, h: 1.5 }, voraus: [], empf: [] },

    /* ===== MSc — Abschlussturm (Stufe 4) ===== */
    { slot: "MA", code: "06SM200-MA", haus: "msc", gruppe: "mabschl", ects: 30, kategorie: "Pflicht", stufe: 4, sem: 3, sem2: true, rhythmus: "beide",
      titel: { de: "Masterarbeit", en: "Master's thesis" }, kurz: { de: "Der Turm", en: "The tower" },
      form: "tower", pos: { x: 0, y: 3, z: 0, w: 3, d: 3, h: 2.2 }, voraus: ["500", "501", "502"], empf: [] },
    { slot: "901", code: "06SM200-901", haus: "msc", gruppe: "mabschl", ects: 2, kategorie: "Wahlpflicht", stufe: 4, sem: 3, sem2: false, rhythmus: "beide",
      titel: { de: "Masterarbeitsgruppe 1", en: "Master's thesis group 1" }, kurz: { de: "Turmkonsole West unten", en: "Tower bracket west, lower" },
      form: "box", pos: { x: -2.2, y: 3, z: 0, w: 1.2, d: 1.6, h: 0.9 }, voraus: ["500", "501", "502"], empf: [] },
    { slot: "902", code: "06SM200-902", haus: "msc", gruppe: "mabschl", ects: 2, kategorie: "Wahlpflicht", stufe: 4, sem: 3, sem2: false, rhythmus: "beide",
      titel: { de: "Forschungskolloquium 1", en: "Research colloquium 1" }, kurz: { de: "Turmkonsole Ost unten", en: "Tower bracket east, lower" },
      form: "box", pos: { x: 2.2, y: 3, z: 0, w: 1.2, d: 1.6, h: 0.9 }, voraus: ["500", "501", "502"], empf: ["901"] },
    { slot: "903", code: "06SM200-903", haus: "msc", gruppe: "mabschl", ects: 2, kategorie: "Wahlpflicht", stufe: 4, sem: 4, sem2: false, rhythmus: "beide",
      titel: { de: "Masterarbeitsgruppe 2", en: "Master's thesis group 2" }, kurz: { de: "Turmkonsole West oben", en: "Tower bracket west, upper" },
      form: "box", pos: { x: -2.2, y: 4, z: 0, w: 1.2, d: 1.6, h: 0.9 }, voraus: ["901"], empf: [] },
    { slot: "904", code: "06SM200-904", haus: "msc", gruppe: "mabschl", ects: 2, kategorie: "Wahlpflicht", stufe: 4, sem: 4, sem2: false, rhythmus: "beide",
      titel: { de: "Forschungskolloquium 2", en: "Research colloquium 2" }, kurz: { de: "Turmkonsole Ost oben", en: "Tower bracket east, upper" },
      form: "box", pos: { x: 2.2, y: 4, z: 0, w: 1.2, d: 1.6, h: 0.9 }, voraus: ["902"], empf: [] },
    { slot: "909", code: "06SM200-909", haus: "msc", gruppe: "mabschl", ects: 8, kategorie: "Pflicht", stufe: 4, sem: 4, sem2: false, rhythmus: "beide",
      titel: { de: "Masterprüfung", en: "Master's examination" }, kurz: { de: "Turmspitze mit Fahne", en: "Spire with flag" },
      form: "spire", pos: { x: 0, y: 5, z: 0, w: 2, d: 2, h: 1.6 }, voraus: ["MA", "901", "902"], empf: [] }
  ],

  /* Zusatzmodule, die über Slot-Optionen erreichbar sind (Texte via Code) */
  optionsmodule: [
    { code: "06SM200-510", titel: { de: "Economic and Consumer Psychology", en: "Economic and Consumer Psychology" }, ects: 4, kategorie: "Wahlpflicht", gruppe: "erg" },
    { code: "06SM200-511", titel: { de: "Klinische Neuropsychologie", en: "Clinical neuropsychology" }, ects: 4, kategorie: "Wahlpflicht", gruppe: "erg" },
    { code: "10SMSTS-505", titel: { de: "Mentoring für die nächste Generation", en: "Mentoring the next generation" }, ects: 6, kategorie: "Wahl", gruppe: "erg" }
  ],

  /* 8er-Baukasten aktivierender Elemente (skaliert auf Grossveranstaltungen) */
  baukasten: {
    defs: {
      PI:  { name: { de: "Peer Instruction", en: "Peer instruction" }, kurz: { de: "Konzeptfrage → Nachdenken → Austausch → erneut abstimmen (KlickerUZH)", en: "Concept question → think → pair → re-vote (KlickerUZH)" } },
      LC:  { name: { de: "Live-Check", en: "Live check" }, kurz: { de: "«Stimmt das, was die KI sagt?» — KI-Antwort live im Plenum prüfen", en: "'Is the AI right?' — checking an AI answer live in class" } },
      JT:  { name: { de: "JiTT-WarmUp", en: "JiTT warm-up" }, kurz: { de: "Kurzquiz vor der Vorlesung; Antworten steuern die Sitzung", en: "Short pre-lecture quiz; answers steer the session" } },
      AC:  { name: { de: "AI-Critique", en: "AI critique" }, kurz: { de: "KI-Output systematisch gegen Primärliteratur prüfen", en: "Systematically testing AI output against the primary literature" } },
      TB:  { name: { de: "Tutoring-Bot", en: "Tutoring bot" }, kurz: { de: "Sokratischer hint-only-Bot als 24/7-Übungspartner", en: "Socratic hint-only bot as a 24/7 practice partner" } },
      RS:  { name: { de: "KI-Rollenspiel", en: "AI role-play" }, kurz: { de: "KI simuliert Klient:in/Gegenüber — risikofrei üben", en: "AI simulates a client/counterpart — risk-free practice" } },
      TSQ: { name: { de: "Two-Stage-Quiz", en: "Two-stage quiz" }, kurz: { de: "Erst einzeln, dann im Team lösen", en: "Solve individually first, then as a team" } },
      PD:  { name: { de: "Prompt-&-Disclosure-Übung", en: "Prompt & disclosure exercise" }, kurz: { de: "KI-Nutzung dokumentieren und deklarieren lernen", en: "Learning to document and declare AI use" } }
    },
    zuordnung: {
      "001": ["PI", "LC", "TB", "TSQ"], "002": ["JT", "PI"], "003": ["PD", "LC", "AC"],
      "100": ["AC", "PI"], "101": ["TB", "LC"], "102": ["PD", "PI"], "103": ["LC", "AC"],
      "200": ["PI", "LC"], "201": ["LC", "PI"], "s11": ["AC", "PD"],
      "300": ["AC", "TSQ"], "301": ["RS", "JT"], "302": ["RS", "JT"], "s13": ["AC", "PD"],
      "400": ["RS", "AC"], "401": ["LC"], "402": ["AC", "PD"], "403": ["AC"], "s12": ["AC", "PD"],
      "BA": ["PD", "AC"],
      "500": ["PI", "LC", "TB"], "501": ["AC", "PI"], "502": ["RS", "AC"],
      "wp": ["LC", "TSQ"],
      "s04": ["AC", "PD"], "s05": ["AC", "RS"], "s06": ["RS", "PD"], "s07": ["AC", "LC"], "s08": ["RS", "AC"], "s09": ["AC", "PD"],
      "s01a": ["PD"], "s01b": ["PD"], "s01c": ["PD"], "600": ["PD", "RS"], "s02a": ["LC", "AC"], "s02b": ["LC", "AC"], "s03": ["AC", "PD"],
      "MA": ["PD", "AC"], "901": ["PD", "PI"], "902": ["RS", "PI"], "903": ["AC", "LC"], "904": ["RS", "PI"], "909": ["RS", "LC"]
    }
  },

  /* Vorstufe ⓪ — Selbstcheck Vorwissen (Gymnasium, v.a. SPF PPP); kleiner Startbonus (Endowed Progress) */
  vorstufe: [
    { text: { de: "Ich kann wissenschaftliche von alltagspsychologischen Erklärungen unterscheiden (z.B. anhand Falsifizierbarkeit).", en: "I can distinguish scientific from folk-psychological explanations (e.g. via falsifiability)." }, ids: ["Fa4"] },
    { text: { de: "Ich kenne grundlegende Forschungsdesigns und Kennwerte (Mittelwert, Streuung) — z.B. aus dem PPP-Unterricht.", en: "I know basic research designs and statistics (mean, dispersion) — e.g. from PPP classes." }, ids: ["Fa2", "Fa3"] },
    { text: { de: "Ich kenne einige klassische Studien und Theorien der Psychologie.", en: "I know some classic studies and theories of psychology." }, ids: ["Fa1"] },
    { text: { de: "Ich habe KI-Tools schon fürs Lernen genutzt und ihre Antworten mindestens einmal kritisch geprüft.", en: "I have used AI tools for learning and critically checked their answers at least once." }, ids: ["KI1", "KI6"] }
  ],

  /* Meilensteine (Richtfeste) */
  meilensteine: [
    { id: "grundstein",  haus: "bsc", slots: ["003"], name: { de: "Grundsteinlegung", en: "Laying the foundation stone" },
      text: { de: "Dein Studium hat begonnen — das Interaktive Proseminar ist deine Eingangsstufe.", en: "Your studies have begun — the interactive proseminar is your entrance step." } },
    { id: "richtfest1",  haus: "bsc", slots: ["001", "002", "003"], name: { de: "Richtfest: Fundament komplett!", en: "Topping-out: foundation complete!" },
      text: { de: "38 ECTS Propädeutikum tragen jetzt alles, was kommt. Stufe 1 geschafft: Orientieren und eigenes Können sichern.", en: "38 ECTS of propaedeutic modules now carry everything to come. Stage 1 complete." } },
    { id: "richtfest2",  haus: "bsc", slots: ["100", "101", "102", "200", "201", "400"], name: { de: "Richtfest: Erdgeschoss steht!", en: "Topping-out: ground floor up!" },
      text: { de: "Methoden-Backbone und erste Fachräume sind gebaut — mitten in Stufe 2: Vertiefen, anwenden und prüfen.", en: "The methods backbone and first subject rooms are built — deep in stage 2." } },
    { id: "richtfest3",  haus: "bsc", slots: ["103", "300", "301", "302", "401", "402", "403"], name: { de: "Richtfest: Obergeschoss steht!", en: "Topping-out: upper floor up!" },
      text: { de: "Statistik 2, AO- und Klinik-Räume komplett — das Haus wartet auf sein Dach.", en: "Statistics 2, W&O and clinical rooms complete — the house awaits its roof." } },
    { id: "bsc_fertig",  haus: "bsc", slots: ["BA"], name: { de: "Schlüsselübergabe: Bachelor-Haus fertig!", en: "Key handover: Bachelor house complete!" },
      text: { de: "Die Bachelorarbeit setzt das Dach — deine «Gesellenprüfung» mit AI Use Plan, Disclosure und Verifikation. Das MSc-Grundstück ist jetzt frei.", en: "The Bachelor's thesis tops the house — your journeyman's piece with AI use plan, disclosure and verification. The MSc plot is now open." } },
    { id: "msc_sockel",  haus: "msc", slots: ["500", "501", "502"], name: { de: "Richtfest: Master-Sockel steht!", en: "Topping-out: Master base laid!" },
      text: { de: "Der Einstiegs-Dreierblock ist der Schlüsselstein — ohne ihn bleibt der ganze Abschlussturm gesperrt.", en: "The entry block is the keystone — without it the completion tower stays locked." } },
    { id: "msc_profil",  haus: "msc", slots: ["s04", "s05", "s06", "s07", "s08", "s09"], name: { de: "Richtfest: Profil komplett!", en: "Topping-out: profile complete!" },
      text: { de: "Sechs Vertiefungen gesetzt — deine Fassade zeigt jetzt dein Profil aus DeNC, HEA und SEOP.", en: "Six specialisations placed — your façade now shows your DeNC/HEA/SEOP profile." } },
    { id: "msc_fertig",  haus: "msc", slots: ["909"], name: { de: "Fahne gehisst: Master-Haus fertig!", en: "Flag raised: Master house complete!" },
      text: { de: "Masterprüfung bestanden — «Verteidigung mit/gegen KI» auf höchster Stufe. Dein Kompetenzhaus ist komplett. Zeit für den Kompetenzpass!", en: "Master's examination passed — 'defending with/against AI' at the highest level. Your competence house is complete. Time for the competence passport!" } }
  ],

  /* Geführte Bau-Reihenfolge (Mustercurriculum) — Slot-IDs pro Semester */
  bauplan: {
    bsc: [
      { sem: 1, hs: true,  slots: ["003", "001", "002"] },
      { sem: 2, hs: false, slots: [] },
      { sem: 3, hs: true,  slots: ["100", "101", "200", "400", "s11"] },
      { sem: 4, hs: false, slots: ["102", "201", "300"] },
      { sem: 5, hs: true,  slots: ["103", "401", "402", "403", "301", "s12"] },
      { sem: 6, hs: false, slots: ["302", "s13", "BA"] }
    ],
    msc: [
      { sem: 1, hs: true,  slots: ["500", "501", "502", "wp", "s01a", "s01b", "s02a"] },
      { sem: 2, hs: false, slots: ["s04", "s05", "s06", "600", "s01c", "s02b"] },
      { sem: 3, hs: true,  slots: ["s07", "s08", "s09", "s03", "901", "902", "MA"] },
      { sem: 4, hs: false, slots: ["903", "904", "909"] }
    ]
  }
};
