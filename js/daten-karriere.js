/* Karrierepfade v8 (21.07.2026): 9 Pfade mit Gewichtung (w), Zielstufen (ziel), Soll-Radar (soll,
   6 Achsen wie RADAR_ACHSEN), Wahl-Empfehlung (wahl: r=BSc-Richtung, sp=MSc-Schwerpunkt, wp=Wahlpflichtmodul)
   und «Nach dem Master»-Roadmaps. Fakten adversarial verifiziert — Quelle: 90_Recherche/web_karrierewege-nach-msc.md.
   cv (Bewerbungs-Textbausteine pro Kompetenz × Stufe) unverändert aus v3. */
window.KARRIERE =
{
 "pfade": [
  {
   "id": "phd",
   "icon": "🔬",
   "name": {
    "de": "PhD & Forschung",
    "en": "PhD & research"
   },
   "hint": {
    "de": "Promotion, wissenschaftliche Mitarbeit, akademische Laufbahn",
    "en": "Doctorate, research positions, academic career"
   },
   "w": {
    "Fa1": 1,
    "Fa2": 3,
    "Fa3": 3,
    "Fa4": 2,
    "Fa6": 2,
    "Fa7": 2,
    "Fa10": 1,
    "KI1": 2,
    "KI2": 2,
    "KI4": 1,
    "KI6": 2,
    "Fu1": 1,
    "Fu2": 1
   },
   "ziel": {
    "Fa2": 4,
    "Fa3": 4,
    "Fa4": 4,
    "Fa6": 4,
    "Fa7": 3,
    "KI2": 3,
    "KI6": 4,
    "Fu2": 3
   },
   "soll": [
    0.7,
    0.95,
    0.9,
    0.8,
    0.9,
    0.7
   ],
   "wahl": {
    "r": null,
    "sp": null,
    "wp": null,
    "hinweis": {
     "de": "Methoden- und Statistikstärke und eine starke Masterarbeit zählen mehr als der Schwerpunkt — wähle Vertiefungen im Feld deiner geplanten Promotion.",
     "en": "Methodological and statistical strength plus a strong thesis count more than the track — pick specialisations in the field of your intended doctorate."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Doktorat (3–5 Jahre)",
      "en": "Doctorate (3–5 years)"
     },
     "d": {
      "de": "Anstellung meist über SNF-Projektförderung (Gesuch stellt die betreuende Forschungsperson, Anstellung max. 4 Jahre) oder Universitätsmittel — das Instrument Doc.CH wurde eingestellt.",
      "en": "Usually employed via SNSF project funding (the supervisor applies; employment max. 4 years) or university funds — the Doc.CH scheme has been discontinued."
     }
    },
    {
     "t": {
      "de": "Postdoc mit Mobilität",
      "en": "Postdoc with mobility"
     },
     "d": {
      "de": "Postdoc.Mobility (letzte Eingabe 2027) und Ambizione (letzte Eingabe 2026) werden 2028 durch ein neues SNF-Postdoc-Instrument ersetzt; danach SNSF Starting Grants.",
      "en": "Postdoc.Mobility (last call 2027) and Ambizione (last call 2026) are replaced by a new SNSF postdoc scheme in 2028; then SNSF Starting Grants."
     }
    },
    {
     "t": {
      "de": "Eigenes Projekt & Profil",
      "en": "Own project & profile"
     },
     "d": {
      "de": "Publikationen, Drittmittel und Lehre bauen das akademische Profil zur Etablierung auf.",
      "en": "Publications, third-party funding and teaching build the academic profile towards establishment."
     }
    }
   ]
  },
  {
   "id": "klinik",
   "icon": "🩺",
   "name": {
    "de": "Klinische Praxis & Gesundheit",
    "en": "Clinical practice & health"
   },
   "hint": {
    "de": "Fachtitel Klinische Psychologie/Gesundheitspsychologie, Klinik, Beratung, Prävention",
    "en": "Specialist titles in clinical/health psychology, clinics, counselling, prevention"
   },
   "w": {
    "Fa1": 2,
    "Fa5": 3,
    "Fa7": 2,
    "Fa8": 3,
    "Fa9": 2,
    "Fa6": 1,
    "KI3": 1,
    "KI5": 2,
    "KI6": 1,
    "Fu2": 1,
    "Fu3": 2
   },
   "ziel": {
    "Fa1": 3,
    "Fa5": 4,
    "Fa7": 4,
    "Fa8": 4,
    "Fa9": 3,
    "KI5": 4,
    "KI6": 3,
    "Fu3": 3
   },
   "soll": [
    0.9,
    0.8,
    0.85,
    0.6,
    0.85,
    0.75
   ],
   "wahl": {
    "r": "klin",
    "sp": "HEA",
    "wp": null,
    "hinweis": {
     "de": "Psychopathologie- und Diagnostik-Module gehören ins Profil; die klinische BSc-Richtung und HEA-Vertiefungen sind die sicherste Route.",
     "en": "Psychopathology and assessment modules belong in the profile; the clinical BSc direction and HEA specialisations are the safest route."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Einstieg in die Versorgung",
      "en": "Entry into care settings"
     },
     "d": {
      "de": "Klinisch-psychologische Anstellung in Klinik, Psychiatrie oder psychosozialer Versorgung, parallel zur berufsbegleitenden Weiterbildung.",
      "en": "Clinical-psychology position in a clinic, psychiatry or psychosocial services, alongside part-time further training."
     }
    },
    {
     "t": {
      "de": "Fachtitel Klinische Psychologie (SVKP/FSP)",
      "en": "Specialist title in clinical psychology (SVKP/FSP)"
     },
     "d": {
      "de": "5 Jahre Weiterbildung (Vollzeitäquivalent; Anstellungen unter 50 % zählen nicht): 4 Jahre klinische Praxis mit mind. 1 Jahr Psychiatrie plus 1025 Weiterbildungsstunden (Diagnostik, Beratung, Psychotherapie, Selbsterfahrung, Supervision).",
      "en": "5 years of training (full-time equivalent; posts below 50% do not count): 4 years of clinical practice incl. at least 1 year in psychiatry plus 1,025 training hours (assessment, counselling, psychotherapy, self-experience, supervision)."
     }
    },
    {
     "t": {
      "de": "Alternativer eidgenössischer Weg",
      "en": "Alternative federal route"
     },
     "d": {
      "de": "Daneben existiert der eidgenössische Weiterbildungstitel «klinische Psychologie» (Art. 8 PsyG) — einer von fünf staatlich geregelten Titeln.",
      "en": "There is also the federal advanced title in clinical psychology (Art. 8 PsyA) — one of five state-regulated titles."
     }
    }
   ]
  },
  {
   "id": "psycho",
   "icon": "🛋️",
   "name": {
    "de": "Psychotherapie",
    "en": "Psychotherapy"
   },
   "hint": {
    "de": "Eidgenössisch anerkannte:r Psychotherapeut:in — der lange Turm mit klaren Etappen",
    "en": "Federally recognised psychotherapist — the tall tower with clear stages"
   },
   "w": {
    "Fa1": 2,
    "Fa5": 2,
    "Fa7": 3,
    "Fa8": 3,
    "Fa9": 2,
    "Fa6": 2,
    "KI3": 1,
    "KI5": 2,
    "KI6": 1,
    "Fu2": 2,
    "Fu3": 2
   },
   "ziel": {
    "Fa1": 3,
    "Fa5": 4,
    "Fa6": 3,
    "Fa7": 4,
    "Fa8": 4,
    "Fa9": 3,
    "KI5": 4,
    "KI6": 3,
    "Fu2": 3,
    "Fu3": 4
   },
   "soll": [
    0.9,
    0.8,
    0.9,
    0.55,
    0.85,
    0.8
   ],
   "wahl": {
    "r": "klin",
    "sp": "HEA",
    "wp": null,
    "hinweis": {
     "de": "Mit UZH-BSc und -MSc sind die FSP-empfohlenen Zulassungsvoraussetzungen unabhängig vom Schwerpunkt erfüllt (24 ECTS Psychopathologie schon im BSc) — klinische Themenwahl und HEA-Vertiefungen bleiben die sicherste Route, weil einzelne Anbieter mehr verlangen.",
     "en": "With a UZH BSc plus MSc, the FSP-recommended admission requirements are met regardless of track (24 ECTS of psychopathology already in the BSc) — clinical topic choices and HEA specialisations remain the safest route, as individual providers may ask for more."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Zulassung sichern (im Studium!)",
      "en": "Secure admission (during your studies!)"
     },
     "d": {
      "de": "Art. 7 PsyG verlangt genügende Studienleistungen in klinischer Psychologie und Psychopathologie; Branchenstandard sind mind. 12 ECTS Psychopathologie. Klinische Wahlmodule sind die sicherste Route.",
      "en": "Art. 7 PsyA requires sufficient coursework in clinical psychology and psychopathology; the industry standard is at least 12 ECTS of psychopathology. Clinical electives are the safest route."
     }
    },
    {
     "t": {
      "de": "Einstieg als Assistenzpsychotherapeut:in",
      "en": "Entry as assistant psychotherapist"
     },
     "d": {
      "de": "Anstellung in einer psychiatrisch-psychotherapeutischen Institution; Lohn anfangs oft ca. CHF 2'800–4'600/Monat, empfohlener Anstellungsgrad 70–80 % neben der Weiterbildung.",
      "en": "Employment in a psychiatric-psychotherapeutic institution; starting pay often around CHF 2,800–4,600/month, with 70–80% employment recommended alongside the training."
     }
    },
    {
     "t": {
      "de": "Akkreditierte Weiterbildung (4–6 Jahre)",
      "en": "Accredited training (4–6 years)"
     },
     "d": {
      "de": "500 Einheiten Theorie, 500 Einheiten eigene Therapie mit 10 supervidierten Fällen, 150 Einheiten Supervision, 100 Selbsterfahrung, 2 Klinikjahre (davon 1 in der Psychiatrie); Kosten ca. CHF 35'000–60'000 — der UZH-MAS in KVT und Verhaltensmedizin dauert 8 Semester (72 ECTS, gesamt ca. CHF 44'000).",
      "en": "500 units of theory, 500 units of own therapy with 10 supervised cases, 150 units of supervision, 100 of self-experience, 2 clinical years (1 in psychiatry); costs approx. CHF 35,000–60,000 — the UZH MAS in CBT and behavioural medicine takes 8 semesters (72 ECTS, approx. CHF 44,000 in total)."
     }
    },
    {
     "t": {
      "de": "Eidg. Titel + kantonale Bewilligung",
      "en": "Federal title + cantonal licence"
     },
     "d": {
      "de": "Der akkreditierte Abschluss führt zum eidgenössischen Titel mit automatischem PsyReg-Eintrag; für eigenverantwortliche Psychotherapie braucht es zusätzlich die kantonale Berufsausübungsbewilligung (ZH: u. a. Deutsch B2).",
      "en": "The accredited qualification leads to the federal title with automatic PsyReg entry; independent psychotherapy additionally requires the cantonal practice licence (ZH: incl. German B2)."
     }
    },
    {
     "t": {
      "de": "OKP-Zulassung & eigene Praxis",
      "en": "Health-insurance admission & own practice"
     },
     "d": {
      "de": "Für die Grundversicherung: 3 Jahre Praxis (Vollzeitäquivalent), davon 12 Monate an einer SIWF-Weiterbildungsstätte A/B/C («drittes klinisches Jahr»); danach eigene Praxis im Anordnungsmodell (max. 15 Sitzungen pro Anordnung, Kostengutsprache nach 30).",
      "en": "For basic insurance: 3 years of practice (full-time equivalent) incl. 12 months at an SIWF training site A/B/C (the 'third clinical year'); then your own practice under the prescription model (max. 15 sessions per prescription, cost approval after 30)."
     }
    }
   ]
  },
  {
   "id": "neuro",
   "icon": "🧠",
   "name": {
    "de": "Neuropsychologie",
    "en": "Neuropsychology"
   },
   "hint": {
    "de": "Klinische Neuropsychologie, Diagnostik und Rehabilitation nach Hirnschädigungen",
    "en": "Clinical neuropsychology, assessment and rehabilitation after brain injury"
   },
   "w": {
    "Fa1": 2,
    "Fa2": 2,
    "Fa5": 3,
    "Fa7": 2,
    "Fa8": 2,
    "Fa9": 1,
    "KI4": 2,
    "KI5": 1,
    "KI6": 2,
    "Fu2": 1,
    "Fu3": 1
   },
   "ziel": {
    "Fa1": 4,
    "Fa2": 3,
    "Fa5": 4,
    "Fa7": 3,
    "Fa8": 3,
    "KI4": 3,
    "KI6": 3,
    "Fu2": 2
   },
   "soll": [
    0.9,
    0.9,
    0.8,
    0.55,
    0.8,
    0.65
   ],
   "wahl": {
    "r": "ekn",
    "sp": "DeNC",
    "wp": "06SM200-511",
    "hinweis": {
     "de": "Wer keine neuropsychologischen Module baut, verbaut sich diesen Turm: Klinische Neuropsychologie (Wahlpflicht), DeNC-Vertiefungen und neurowissenschaftliche Themenwahl sind faktisch Pflicht (Richtwert Genf: ~18 ECTS prägradual).",
     "en": "Without neuropsychology modules this tower stays locked: Clinical Neuropsychology (compulsory elective), DeNC specialisations and neuroscience topic choices are de facto required (Geneva benchmark: ~18 pre-graduate ECTS)."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Voraussetzung im Studium",
      "en": "Prerequisite during the degree"
     },
     "d": {
      "de": "Neuropsychologische/neurowissenschaftliche Module im BSc/MSc — die Universität Genf setzt rund 18 ECTS prägraduale Neuropsychologie voraus.",
      "en": "Neuropsychology/neuroscience modules in the BSc/MSc — the University of Geneva requires around 18 pre-graduate ECTS in neuropsychology."
     }
    },
    {
     "t": {
      "de": "Einstieg Klinik/Rehabilitation",
      "en": "Entry into clinic/rehabilitation"
     },
     "d": {
      "de": "Neuropsychologische Diagnostik und Therapie unter Supervision, parallel zur Weiterbildung.",
      "en": "Neuropsychological assessment and therapy under supervision, alongside the training."
     }
    },
    {
     "t": {
      "de": "MAS Neuropsychologie (EAN), UZH oder Genf",
      "en": "MAS in Neuropsychology (EAN), UZH or Geneva"
     },
     "d": {
      "de": "5 Jahre berufsbegleitend (2 Jahre DAS + 3 Jahre MAS), in Zürich 800 Theorieeinheiten plus 3 Jahre supervidierte Praxis; der alte FSP-Fachtitel-Weg läuft aus (Neustart nur noch über den eidgenössisch anerkannten MAS).",
      "en": "5 years part-time (2-year DAS + 3-year MAS); in Zurich 800 theory units plus 3 years of supervised practice; the old FSP route is being phased out (new entrants take the federally recognised MAS)."
     }
    },
    {
     "t": {
      "de": "OKP-Diagnostik",
      "en": "Insurance-funded assessment"
     },
     "d": {
      "de": "Neuropsychologische Diagnostik auf ärztliche Anordnung wird seit 1.7.2017 von der Grundversicherung vergütet (Art. 50b KVV) — mit eidgenössischem bzw. FSP-Titel.",
      "en": "Physician-prescribed neuropsychological assessment has been covered by basic insurance since 1 July 2017 (Art. 50b KVV) — with the federal or FSP title."
     }
    }
   ]
  },
  {
   "id": "wirtschaft",
   "icon": "🏢",
   "name": {
    "de": "Wirtschaft, HR & Beratung",
    "en": "Business, HR & consulting"
   },
   "hint": {
    "de": "Personalauswahl und -entwicklung, Organisationsberatung, Marketing",
    "en": "Personnel selection and development, organisational consulting, marketing"
   },
   "w": {
    "Fa5": 2,
    "Fa6": 2,
    "Fa8": 2,
    "Fa9": 1,
    "Fa10": 2,
    "KI1": 2,
    "KI3": 2,
    "KI5": 1,
    "KI6": 1,
    "Fu1": 2,
    "Fu3": 2
   },
   "ziel": {
    "Fa5": 3,
    "Fa6": 3,
    "Fa8": 3,
    "Fa10": 3,
    "KI1": 3,
    "KI3": 3,
    "Fu1": 3,
    "Fu3": 3
   },
   "soll": [
    0.75,
    0.7,
    0.8,
    0.85,
    0.7,
    0.9
   ],
   "wahl": {
    "r": "swo",
    "sp": "SEOP",
    "wp": "06SM200-510",
    "hinweis": {
     "de": "SWO-Themenwahl, SEOP-Vertiefungen und Economic & Consumer Psychology schärfen das Wirtschaftsprofil; Diagnostik/Assessment nicht vernachlässigen.",
     "en": "SWO topic choices, SEOP specialisations and Economic & Consumer Psychology sharpen the business profile; don't neglect assessment."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Direkteinstieg möglich",
      "en": "Direct entry possible"
     },
     "d": {
      "de": "HR, Recruiting, Personal- und Organisationsentwicklung oder Beratung — unreguliertes Feld ohne Titelpflicht; die Konkurrenz ist hoch, Praktika und Praxisprojekte zählen.",
      "en": "HR, recruiting, personnel and organisational development or consulting — an unregulated field with no title requirement; competition is high, internships and applied projects count."
     }
    },
    {
     "t": {
      "de": "Optional: Fachtitel Laufbahn- und Personalpsychologie FSP",
      "en": "Optional: FSP specialist title in career & personnel psychology"
     },
     "d": {
      "de": "Über FSP-anerkannte DAS/MAS-Programme (z. B. CC&HRM der Universitäten Bern und Freiburg); seit 2026 zusätzlich dokumentierte Supervision/Intervision. FSP-Fachtitel dauern generell 2–6 Jahre.",
      "en": "Via FSP-recognised DAS/MAS programmes (e.g. CC&HRM at the Universities of Bern and Fribourg); since 2026 documented supervision/intervision is also required. FSP titles generally take 2–6 years."
     }
    },
    {
     "t": {
      "de": "CAS/MAS als Ausbaustufen",
      "en": "CAS/MAS as further stages"
     },
     "d": {
      "de": "Breiter Markt (u. a. FHNW, ZHAW IAP) für Leadership-, HR- und arbeitspsychologische Spezialisierungen.",
      "en": "A broad market (incl. FHNW, ZHAW IAP) for leadership, HR and work-psychology specialisations."
     }
    }
   ]
  },
  {
   "id": "data",
   "icon": "📊",
   "name": {
    "de": "Data, Tech & UX",
    "en": "Data, tech & UX"
   },
   "hint": {
    "de": "Data Science, People Analytics, UX Research, KI-Entwicklung",
    "en": "Data science, people analytics, UX research, AI development"
   },
   "w": {
    "Fa2": 2,
    "Fa3": 3,
    "Fa4": 2,
    "Fa9": 1,
    "KI1": 2,
    "KI2": 3,
    "KI4": 2,
    "KI6": 2,
    "Fu1": 2,
    "Fu2": 1
   },
   "ziel": {
    "Fa2": 3,
    "Fa3": 4,
    "Fa4": 3,
    "KI1": 3,
    "KI2": 4,
    "KI4": 3,
    "KI6": 3,
    "Fu1": 3
   },
   "soll": [
    0.6,
    0.95,
    0.7,
    0.95,
    0.85,
    0.8
   ],
   "wahl": {
    "r": null,
    "sp": null,
    "wp": null,
    "hinweis": {
     "de": "Kein vorgeschriebener Weg: Fortgeschrittene Methoden, Statistik und kognitionspsychologisches Grundwissen sind nützlich (nicht vorgeschrieben); DeNC oder SEOP passen je nach Ausrichtung.",
     "en": "No prescribed route: advanced methods, statistics and cognitive-psychology foundations are useful (not required); DeNC or SEOP fit depending on your direction."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Portfolio statt Titel",
      "en": "Portfolio over titles"
     },
     "d": {
      "de": "Unreguliertes Feld — Methoden-/Statistikprofil, eigene Projekte und Praxiserfahrung zählen; die Jobsuche kann 6–12 Monate dauern.",
      "en": "An unregulated field — your methods/statistics profile, own projects and practical experience count; the job search can take 6–12 months."
     }
    },
    {
     "t": {
      "de": "Typische Einstiegsfelder",
      "en": "Typical entry fields"
     },
     "d": {
      "de": "UX-Research, Marktforschung, People-/HR-Analytics, Case Management bei Versicherungen, Gesundheits-Apps und Start-ups.",
      "en": "UX research, market research, people/HR analytics, insurance case management, health apps and start-ups."
     }
    },
    {
     "t": {
      "de": "Gezielte Weiterbildung & Netzwerk",
      "en": "Targeted training & network"
     },
     "d": {
      "de": "Praxisorientierte CAS/DAS, Netzwerkaufbau (u. a. LinkedIn) und Initiativbewerbungen beschleunigen den Einstieg.",
      "en": "Practice-oriented CAS/DAS, networking (incl. LinkedIn) and speculative applications speed up entry."
     }
    }
   ]
  },
  {
   "id": "schule",
   "icon": "🏫",
   "name": {
    "de": "Schulpsychologie & Bildung",
    "en": "School psychology & education"
   },
   "hint": {
    "de": "Schulpsychologische Dienste, Beratung von Kindern, Eltern und Lehrpersonen",
    "en": "School psychology services, counselling children, parents and teachers"
   },
   "w": {
    "Fa1": 2,
    "Fa5": 2,
    "Fa8": 2,
    "Fa9": 3,
    "Fa6": 2,
    "Fa7": 1,
    "KI5": 1,
    "KI6": 1,
    "Fu3": 2,
    "Fu2": 1
   },
   "ziel": {
    "Fa1": 3,
    "Fa5": 3,
    "Fa6": 3,
    "Fa8": 3,
    "Fa9": 4,
    "KI5": 3,
    "Fu3": 3
   },
   "soll": [
    0.9,
    0.75,
    0.85,
    0.55,
    0.7,
    0.8
   ],
   "wahl": {
    "r": "klin",
    "sp": "HEA",
    "wp": null,
    "hinweis": {
     "de": "Entwicklungspsychologische Themenwahl (s11), klinisch-diagnostische Module und Praktika mit Kindern und Jugendlichen öffnen die nötige 40-%-Feldstelle.",
     "en": "Developmental topic choices (s11), clinical-diagnostic modules and internships with children and adolescents open the required 40% field position."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Türöffner: Feldstelle",
      "en": "Door opener: a field position"
     },
     "d": {
      "de": "Für den eidgenössischen Weg braucht es eine Anstellung von mindestens 40 % in der psychosozialen Versorgung von Kindern/Jugendlichen (SPD, Erziehungsberatung, KJP) — ohne Feldstelle startet die Weiterbildung nicht.",
      "en": "The federal route requires a position of at least 40% in psychosocial services for children/adolescents (school psychology service, educational counselling, CAP) — without a field position the training cannot start."
     }
    },
    {
     "t": {
      "de": "EA KJP (Universität Basel)",
      "en": "EA KJP (University of Basel)"
     },
     "d": {
      "de": "Eidg. Titel Kinder- und Jugendpsychologie: 2–3 Jahre (max. 6), mind. 1795 Einheiten mit 50 Kurstagen und 80 Supervisionseinheiten; Kosten ca. CHF 16'850 plus Supervision (rechnerisch ca. CHF 6'000–12'000).",
      "en": "Federal title in child and adolescent psychology: 2–3 years (max. 6), at least 1,795 units incl. 50 course days and 80 supervision units; costs approx. CHF 16,850 plus supervision (roughly CHF 6,000–12,000)."
     }
    },
    {
     "t": {
      "de": "MAS Schulpsychologie (UZH)",
      "en": "MAS in School Psychology (UZH)"
     },
     "d": {
      "de": "Berufsbegleitend, 60 ECTS, 2–3 Jahre, CHF 18'800 (exkl. Gebühren/Supervision); an den FSP-Fachtitel Kinder- und Jugendpsychologie anrechenbar.",
      "en": "Part-time, 60 ECTS, 2–3 years, CHF 18,800 (excl. fees/supervision); creditable towards the FSP title in child and adolescent psychology."
     }
    },
    {
     "t": {
      "de": "Kantonale Anforderungen prüfen",
      "en": "Check cantonal requirements"
     },
     "d": {
      "de": "Die Anstellungsanforderungen schulpsychologischer Dienste sind kantonal unterschiedlich geregelt.",
      "en": "Employment requirements of school psychology services differ by canton."
     }
    }
   ]
  },
  {
   "id": "gutachten",
   "icon": "⚖️",
   "name": {
    "de": "Diagnostik & Gutachten",
    "en": "Assessment & expert reports"
   },
   "hint": {
    "de": "Forensische, verkehrs- und versicherungspsychologische Begutachtung",
    "en": "Forensic, traffic and insurance psychology assessment"
   },
   "w": {
    "Fa5": 3,
    "Fa7": 3,
    "Fa6": 2,
    "Fa4": 2,
    "Fa1": 1,
    "KI6": 2,
    "KI5": 2,
    "Fu2": 1
   },
   "ziel": {
    "Fa1": 3,
    "Fa4": 4,
    "Fa5": 4,
    "Fa6": 4,
    "Fa7": 4,
    "KI5": 3,
    "KI6": 4,
    "Fu3": 3
   },
   "soll": [
    0.85,
    0.95,
    0.95,
    0.5,
    0.9,
    0.7
   ],
   "wahl": {
    "r": "klin",
    "sp": "HEA",
    "wp": "06SM200-511",
    "hinweis": {
     "de": "Der neue SGFP-Weg setzt den eidgenössischen Psychotherapie-Titel voraus — ein klinisches Profil ist zwingend; Klinische Neuropsychologie stärkt die Diagnostik.",
     "en": "The new SGFP route requires the federal psychotherapy title — a clinical profile is essential; Clinical Neuropsychology strengthens assessment."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Systemwechsel ab 1.4.2026",
      "en": "System change from 1 April 2026"
     },
     "d": {
      "de": "Neu gilt das «Zertifikat Forensische Psychologie SGFP» mit vier Vertiefungen (Begutachtung im Straf- bzw. Zivilrecht, deliktpräventive Psychotherapie, Aussagepsychologie); der FSP-Fachtitel Rechtspsychologie ist mit einem Aufnahmestopp belegt.",
      "en": "The new SGFP certificate in forensic psychology applies, with four specialisations (criminal- and civil-law assessment, offence-preventive psychotherapy, statement analysis); the FSP title in legal psychology has an admissions freeze."
     }
    },
    {
     "t": {
      "de": "Grundvoraussetzung: Psychotherapie-Titel",
      "en": "Prerequisite: psychotherapy title"
     },
     "d": {
      "de": "Die eidgenössische Anerkennung als Psychotherapeut:in ist Grundvoraussetzung aller vier Zertifikate — der Forensik-Weg baut auf dem Psychotherapie-Turm auf.",
      "en": "Federal recognition as a psychotherapist is the basic requirement for all four certificates — the forensic route builds on the psychotherapy tower."
     }
    },
    {
     "t": {
      "de": "Breites Fachprofil aufbauen",
      "en": "Build a broad specialist profile"
     },
     "d": {
      "de": "Psychopathologie, Aussagepsychologie, Kriminologie, Entwicklungs-, Sozial- und Familienpsychologie sowie Schweizer Straf- und Zivilrecht.",
      "en": "Psychopathology, statement psychology, criminology, developmental, social and family psychology, plus Swiss criminal and civil law."
     }
    },
    {
     "t": {
      "de": "Begutachtungspraxis",
      "en": "Assessment practice"
     },
     "d": {
      "de": "Aufbau in forensischen Institutionen; Übergangsfrist bis 31.3.2028 für den erleichterten Zertifikatserwerb sur dossier.",
      "en": "Built up in forensic institutions; transition period until 31 March 2028 for simplified certificate acquisition sur dossier."
     }
    }
   ]
  },
  {
   "id": "ppp",
   "icon": "🎓",
   "name": {
    "de": "PPP-Lehrperson (Gymnasium)",
    "en": "PPP teacher (high school)"
   },
   "hint": {
    "de": "Unterricht im Schwerpunktfach Philosophie/Pädagogik/Psychologie, der Kreis zur Vorstufe ⓪ schliesst sich",
    "en": "Teaching the PPP major, closing the loop to stage ⓪"
   },
   "w": {
    "Fa1": 3,
    "Fa6": 3,
    "Fa4": 2,
    "Fa9": 2,
    "Fa10": 1,
    "KI1": 1,
    "KI4": 1,
    "KI5": 1,
    "Fu3": 2,
    "Fu1": 1
   },
   "ziel": {
    "Fa1": 4,
    "Fa4": 3,
    "Fa6": 4,
    "Fa9": 3,
    "KI1": 3,
    "KI5": 3,
    "Fu3": 3
   },
   "soll": [
    0.95,
    0.6,
    0.9,
    0.7,
    0.75,
    0.85
   ],
   "wahl": {
    "r": null,
    "sp": null,
    "wp": null,
    "hinweis": {
     "de": "Breite schlägt Spezialisierung: eine gemischte Themenwahl und ein bewusst gemischtes MSc-Profil passen zum Lehrberuf.",
     "en": "Breadth beats specialisation: mixed topic choices and a deliberately mixed MSc profile suit the teaching route."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Lehrdiplom für Maturitätsschulen",
      "en": "Teaching diploma for upper-secondary schools"
     },
     "d": {
      "de": "Nach dem Master folgt das Lehrdiplom im Fach Pädagogik/Psychologie (Details je nach Hochschule und Kanton — für diesen Pfad liegen noch keine verifizierten Detailangaben vor; vor der Planung direkt bei UZH/PH prüfen).",
      "en": "After the Master's comes the teaching diploma in education/psychology (details depend on institution and canton — no verified specifics are available yet for this route; check directly with UZH/PH before planning)."
     }
    },
    {
     "t": {
      "de": "Unterricht am Gymnasium",
      "en": "Teaching at upper-secondary school"
     },
     "d": {
      "de": "Unterricht im Schwerpunktfach PPP — der Kreis zur Vorstufe ⓪ schliesst sich.",
      "en": "Teaching the PPP major — closing the loop back to stage ⓪."
     }
    }
   ]
  }
 ],
 "cv": {
  "Fa1": {
   "1": {
    "de": "Kennt die Grundbegriffe, Theorien und klassischen Befunde der Psychologie aus Kognition, Entwicklung, Sozial- und Biopsychologie und ordnet sie korrekt ein.",
    "en": "Knows the core concepts, theories and classic findings of psychology across cognition, development, social and biological psychology and situates them accurately."
   },
   "2": {
    "de": "Verknüpft Theorien und aktuelle Befunde über Teilgebiete hinweg selbständig und wendet sie auf neue Fragestellungen an.",
    "en": "Independently connects theories and current findings across subfields and applies them to new questions."
   },
   "3": {
    "de": "Integriert forschungsnahes Spezialwissen aus einem Vertiefungsgebiet (z.B. klinische, Neuro- oder Organisationspsychologie) in professionelle Problemstellungen.",
    "en": "Integrates research-level specialist knowledge from a focus area (e.g. clinical, neuro- or organisational psychology) into professional problem-solving."
   },
   "4": {
    "de": "Erschliesst den Forschungsstand eines Spezialgebiets eigenständig, identifiziert Forschungslücken und leitet daraus eigene, begründete Untersuchungen ab.",
    "en": "Independently maps the state of research in a specialist field, identifies gaps and derives and justifies original studies from them."
   }
  },
  "Fa2": {
   "1": {
    "de": "Kennt die zentralen Untersuchungsdesigns (Experiment, Korrelations-, Längsschnittstudie) und liest empirische Studien angeleitet und strukturiert.",
    "en": "Knows the main study designs (experimental, correlational, longitudinal) and reads empirical studies in a guided, structured way."
   },
   "2": {
    "de": "Plant und dokumentiert Experimente selbständig (z.B. im Experimentalpraktikum) und beurteilt Studien kritisch nach Validität und Stichprobenqualität.",
    "en": "Independently plans and documents experiments (e.g. in the experimental lab course) and critically appraises studies for validity and sample quality."
   },
   "3": {
    "de": "Entwickelt Studiendesigns und Analysepläne für eigene Forschungs- und Praxisfragen, inklusive Powerplanung und Open-Science-Standards.",
    "en": "Designs studies and analysis plans for original research and applied questions, including power analysis and open-science standards."
   },
   "4": {
    "de": "Verantwortet ein vollständiges Forschungsprojekt von der Präregistrierung bis zum Bericht und verteidigt Designentscheidungen vor Fachpublikum.",
    "en": "Owns a complete research project from preregistration to final report and defends design decisions before an expert audience."
   }
  },
  "Fa3": {
   "1": {
    "de": "Berechnet und interpretiert deskriptive Statistiken und einfache Inferenztests und arbeitet mit ersten R-Skripten.",
    "en": "Computes and interprets descriptive statistics and basic inferential tests and works with first R scripts."
   },
   "2": {
    "de": "Wertet Datensätze selbständig in R aus (Regression, Varianzanalyse, erste Machine-Learning-Verfahren) und prüft statistische Voraussetzungen kritisch.",
    "en": "Independently analyses datasets in R (regression, ANOVA, introductory machine-learning methods) and critically checks statistical assumptions."
   },
   "3": {
    "de": "Wendet Mehrebenenmodelle und Strukturgleichungsmodelle in R an, validiert Modellannahmen und dokumentiert Analysen reproduzierbar.",
    "en": "Applies multilevel and structural equation models in R, validates model assumptions and documents analyses reproducibly."
   },
   "4": {
    "de": "Verantwortet die komplette Datenpipeline eines Forschungsprojekts, von Datenmanagement über Analyse bis zum reproduzierbaren R-Code, und leitet andere im Skript-Review an.",
    "en": "Owns a research project's full data pipeline, from data management through analysis to reproducible R code, and guides others through script reviews."
   }
  },
  "Fa4": {
   "1": {
    "de": "Unterscheidet Alltagsbehauptungen von empirischer Evidenz und prüft Aussagen angeleitet gegen Lehrbuch und Fachliteratur.",
    "en": "Distinguishes everyday claims from empirical evidence and, with guidance, checks statements against textbooks and the research literature."
   },
   "2": {
    "de": "Beurteilt Studien und Medienberichte selbständig auf methodische Schwächen, Effektstärken und alternative Erklärungen.",
    "en": "Independently appraises studies and media reports for methodological weaknesses, effect sizes and alternative explanations."
   },
   "3": {
    "de": "Wägt widersprüchliche Evidenz systematisch ab (z.B. in Reviews und Gutachten) und begründet Schlussfolgerungen transparent.",
    "en": "Systematically weighs conflicting evidence (e.g. in reviews and expert reports) and justifies conclusions transparently."
   },
   "4": {
    "de": "Verteidigt eigene Analyseentscheidungen und Schlussfolgerungen in Kolloquium und Prüfung und legt die Grenzen der eigenen Befunde offen.",
    "en": "Defends own analytic choices and conclusions in colloquia and examinations and openly addresses the limitations of own findings."
   }
  },
  "Fa5": {
   "1": {
    "de": "Kennt die klassischen Gütekriterien psychologischer Tests (Objektivität, Reliabilität, Validität) und deren Bedeutung für die Testauswahl.",
    "en": "Knows the classic psychometric quality criteria (objectivity, reliability, validity) and their relevance for test selection."
   },
   "2": {
    "de": "Beurteilt Tests und Fragebogen selbständig anhand testtheoretischer Kennwerte und wählt Erhebungsinstrumente begründet aus.",
    "en": "Independently appraises tests and questionnaires against psychometric indicators and makes well-reasoned instrument choices."
   },
   "3": {
    "de": "Führt psychologische Assessments professionell durch, integriert Befunde zu einem Gutachten und beurteilt die Testqualität eingesetzter Verfahren.",
    "en": "Professionally administers psychological assessments, integrates results into formal reports and evaluates the quality of the instruments used."
   },
   "4": {
    "de": "Setzt Diagnostik eigenverantwortlich in Forschungs- und Praxiskontexten ein und vertritt Befunde und Empfehlungen gegenüber Fachpersonen.",
    "en": "Deploys psychological assessment autonomously in research and applied settings and communicates findings and recommendations to professional audiences."
   }
  },
  "Fa6": {
   "1": {
    "de": "Verfasst kurze wissenschaftliche Texte nach APA-Richtlinien und präsentiert Grundlagenthemen verständlich.",
    "en": "Writes short academic texts to APA standards and presents foundational topics clearly."
   },
   "2": {
    "de": "Schreibt vollständige empirische Berichte (ExPra-Bericht, Bachelorarbeit) selbständig und präsentiert Ergebnisse adressatengerecht.",
    "en": "Independently writes complete empirical reports (lab report, Bachelor's thesis) and presents results tailored to the audience."
   },
   "3": {
    "de": "Kommuniziert komplexe Befunde professionell in Fachberichten, Gutachten und Präsentationen für Wissenschaft und Praxis.",
    "en": "Communicates complex findings professionally in technical reports, expert reports and presentations for academic and applied audiences."
   },
   "4": {
    "de": "Berichtet eigene Forschung transparent nach Open-Science-Standards und vermittelt Ergebnisse überzeugend an Fach- und Laienpublikum.",
    "en": "Reports own research transparently to open-science standards and conveys results convincingly to expert and lay audiences."
   }
  },
  "Fa7": {
   "1": {
    "de": "Kennt die Grundregeln wissenschaftlicher Integrität (Zitieren, Plagiat, Datenehrlichkeit) und wendet sie in eigenen Arbeiten an.",
    "en": "Knows the basic rules of academic integrity (citation, plagiarism, honest data handling) and applies them in own work."
   },
   "2": {
    "de": "Setzt forschungsethische Standards selbständig um: informierte Einwilligung, Datenschutz und korrekte Deklaration von Hilfsmitteln in empirischen Arbeiten.",
    "en": "Independently implements research-ethics standards: informed consent, data protection and correct declaration of tools and aids in empirical work."
   },
   "3": {
    "de": "Beurteilt ethische Implikationen von Forschung und Praxis (z.B. Umgang mit sensiblen Diagnostik- und Gesundheitsdaten) und handelt nach berufsethischen Richtlinien.",
    "en": "Assesses the ethical implications of research and practice (e.g. handling sensitive assessment and health data) and acts according to professional-ethics guidelines."
   },
   "4": {
    "de": "Trägt die ethische Verantwortung für eigene Forschung, von Ethikantrag über Datenlebenszyklus bis zur transparenten Berichterstattung, und vertritt Integritätsstandards im Team.",
    "en": "Takes ethical ownership of own research, from ethics application through the data lifecycle to transparent reporting, and champions integrity standards within teams."
   }
  },
  "Fa8": {
   "1": {
    "de": "Erkennt, wie psychologische Grundlagenbefunde mit Alltags- und Praxisfragen zusammenhängen, und illustriert Theorien an konkreten Beispielen.",
    "en": "Recognises how basic psychological findings relate to everyday and applied questions and illustrates theories with concrete examples."
   },
   "2": {
    "de": "Überträgt Forschungsbefunde selbständig auf konkrete Anwendungsfälle (z.B. Klinik, Arbeit und Organisation) und prüft deren Übertragbarkeit kritisch.",
    "en": "Independently transfers research findings to concrete applied cases (e.g. clinical, work and organisational settings) and critically examines their generalisability."
   },
   "3": {
    "de": "Entwickelt evidenzbasierte Lösungen für reale Problemstellungen aus Gesundheit, Wirtschaft oder Bildung und begründet Interventionsentscheide mit der Studienlage.",
    "en": "Develops evidence-based solutions for real-world problems in health, business or education and grounds intervention decisions in the research literature."
   },
   "4": {
    "de": "Verantwortet den Transfer eigener Forschungsergebnisse in Praxis und Berufsfeld und berät Stakeholder evidenzbasiert.",
    "en": "Owns the transfer of own research results into professional practice and advises stakeholders on a sound evidence base."
   }
  },
  "Fa9": {
   "1": {
    "de": "Kennt zentrale Konzepte zu Diversität, Kultur und Kontext und erkennt deren Einfluss auf Erleben und Verhalten.",
    "en": "Knows key concepts of diversity, culture and context and recognises their influence on experience and behaviour."
   },
   "2": {
    "de": "Berücksichtigt Stichprobenzusammensetzung, kulturelle Verzerrungen und Kontextfaktoren selbständig bei der Interpretation von Studien.",
    "en": "Independently accounts for sample composition, cultural bias and contextual factors when interpreting studies."
   },
   "3": {
    "de": "Gestaltet Forschung und Assessment diversitätssensibel (z.B. faire Testverwendung, kontextangepasste Interventionen) und reflektiert eigene Perspektiven kritisch.",
    "en": "Designs research and assessment in a diversity-sensitive way (e.g. fair test use, context-adapted interventions) and critically reflects on own perspectives."
   },
   "4": {
    "de": "Verantwortet inklusive Forschungs- und Praxisentscheide, prüft Verfahren auf Fairness gegenüber unterschiedlichen Gruppen und berät andere darin.",
    "en": "Takes responsibility for inclusive research and practice decisions, audits procedures for fairness across different groups and advises others on doing so."
   }
  },
  "Fa10": {
   "1": {
    "de": "Organisiert Lernpensum und Prüfungsvorbereitung zuverlässig und holt gezielt Feedback ein.",
    "en": "Reliably organises study workload and exam preparation and actively seeks feedback."
   },
   "2": {
    "de": "Steuert mehrere parallele Projekte (Fachmodule, Experimentalpraktikum, Bachelorarbeit) selbständig mit realistischer Zeit- und Ressourcenplanung.",
    "en": "Independently manages several parallel projects (subject modules, lab course, Bachelor's thesis) with realistic time and resource planning."
   },
   "3": {
    "de": "Plant die eigene professionelle Entwicklung strategisch (Vertiefungswahl, Praktikum, Methodenprofil) und arbeitet in anspruchsvollen Settings zuverlässig selbstorganisiert.",
    "en": "Strategically plans own professional development (specialisation choices, internship, methods profile) and works reliably self-organised in demanding settings."
   },
   "4": {
    "de": "Führt ein mehrmonatiges Forschungsprojekt (Masterarbeit) eigenverantwortlich von der Planung bis zum Abschluss und setzt Prioritäten auch unter Unsicherheit.",
    "en": "Independently drives a multi-month research project (Master's thesis) from planning to completion and manages priorities under uncertainty."
   }
  },
  "KI1": {
   "1": {
    "de": "Nutzt KI-Tools gezielt als Lernhilfe (z.B. sokratische Lernprompts, Erklärdialoge) und kennt deren Grenzen im Studienalltag.",
    "en": "Uses AI tools purposefully as study aids (e.g. Socratic tutoring prompts, explanation dialogues) and knows their limits in day-to-day study."
   },
   "2": {
    "de": "Setzt KI selbständig für fachliche Arbeitsschritte ein — Literatur-Mapping, APA-Checks, Textfeedback, und prüft die Resultate gegen Fachquellen.",
    "en": "Independently deploys AI for subject-specific work steps, literature mapping, APA checks, feedback on drafts, and verifies outputs against scholarly sources."
   },
   "3": {
    "de": "Integriert KI professionell in Forschungs- und Praxisworkflows, z.B. RAG-gestützte Literaturübersichten und KI-unterstützte Analysevorbereitung.",
    "en": "Professionally integrates AI into research and practice workflows, e.g. RAG-based literature reviews and AI-assisted analysis preparation."
   },
   "4": {
    "de": "Betreibt eine KI-gestützte Forschungspipeline eigenverantwortlich — Literaturmonitoring, Präregistrierung, Datenmanagement, Skript-Review, und leitet andere in deren Nutzung an.",
    "en": "Runs an AI-supported research pipeline autonomously, literature monitoring, preregistration, data management, script review, and coaches others in its use."
   }
  },
  "KI2": {
   "1": {
    "de": "Erstellt erste eigene Prompt-Vorlagen für wiederkehrende Lern- und Schreibaufgaben und verbessert sie nach Anleitung.",
    "en": "Creates first reusable prompt templates for recurring study and writing tasks and refines them with guidance."
   },
   "2": {
    "de": "Baut selbständig kleine KI-Workflows, z.B. einen R-Debugging-Workflow oder einen Lern-Bot für Kursinhalte, und optimiert sie iterativ.",
    "en": "Independently builds small AI workflows, such as an R debugging workflow or a course study bot, and optimises them iteratively."
   },
   "3": {
    "de": "Entwickelt mit KI-Unterstützung eigene Analyse- und Demonstrations-Artefakte (R-Skripte, Shiny-Apps, Python-Tools) und stellt deren fachliche Korrektheit sicher.",
    "en": "Develops own analysis and demonstration artefacts with AI support (R scripts, Shiny apps, Python tools) and ensures their technical correctness."
   },
   "4": {
    "de": "Konfiguriert, begrenzt und überwacht agentische KI-Workflows für Forschungsaufgaben (Agentic Engineering) und verantwortet deren Ergebnisse.",
    "en": "Configures, constrains and monitors agentic AI workflows for research tasks (agentic engineering) and takes responsibility for their outputs."
   }
  },
  "KI3": {
   "1": {
    "de": "Kennt Grundregeln der Arbeitsteilung zwischen Mensch und KI und legt in Studienarbeiten offen, welche Schritte KI-unterstützt sind.",
    "en": "Knows basic rules for dividing work between humans and AI and discloses which steps in coursework are AI-assisted."
   },
   "2": {
    "de": "Klärt in Gruppenprojekten (z.B. Experimentalpraktikum) selbständig die Rollen von Team und KI und dokumentiert die Zusammenarbeit im Prozesslog.",
    "en": "Independently clarifies team and AI roles in group projects (e.g. the experimental lab course) and documents the collaboration in a process log."
   },
   "3": {
    "de": "Gestaltet Mensch-KI-Kollaboration in Projekten professionell: definiert, welche Aufgaben delegierbar sind, und sichert menschliche Kontrolle über kritische Entscheidungen.",
    "en": "Professionally shapes human-AI collaboration in projects: defines which tasks can be delegated and keeps humans in control of critical decisions."
   },
   "4": {
    "de": "Verantwortet die Arbeitsteilung zwischen Forschenden, Team und KI in eigenen Projekten und leitet Peers zu wirksamer Mensch-KI-Kollaboration an.",
    "en": "Owns the division of labour between researchers, team and AI in own projects and coaches peers in effective human-AI collaboration."
   }
  },
  "KI4": {
   "1": {
    "de": "Versteht die Grundfunktionsweise von Sprachmodellen (Trainingsdaten, Wahrscheinlichkeiten, Halluzinationen) und erklärt, warum KI überzeugend irren kann.",
    "en": "Understands the basic workings of language models (training data, probabilities, hallucinations) and can explain why AI can be convincingly wrong."
   },
   "2": {
    "de": "Beurteilt selbständig, welche Modelle und Verfahren für eine Aufgabe geeignet sind, und erkennt typische Fehlerquellen wie Overfitting oder verzerrte Trainingsdaten.",
    "en": "Independently judges which models and methods suit a given task and spots typical failure modes such as overfitting or biased training data."
   },
   "3": {
    "de": "Beurteilt Erklärbarkeit und Grenzen von KI-Verfahren im Fachkontext (z.B. Explainability in Statistik und Testtheorie) und begründet die Modellwahl.",
    "en": "Evaluates the explainability and limits of AI methods in domain context (e.g. explainability in statistics and psychometrics) and justifies model choices."
   },
   "4": {
    "de": "Beurteilt neue KI-Verfahren eigenständig auf ihre Eignung für Forschungsfragen und erklärt deren Funktionsweise und Grenzen im Fachdiskurs und in der Anleitung anderer.",
    "en": "Independently assesses new AI methods for research suitability and explains how they work, and where they fail, in expert discussion and when guiding others."
   }
  },
  "KI5": {
   "1": {
    "de": "Deklariert KI-Nutzung transparent (Disclosure-Formular) und beachtet die Grundregeln zu Datenschutz und erlaubter Nutzung.",
    "en": "Transparently declares AI use (disclosure form) and follows the basic rules on data protection and permitted use."
   },
   "2": {
    "de": "Setzt Disclosure und Prozesslog in empirischen Arbeiten selbständig um und schützt Versuchspersonendaten konsequent vor unzulässiger KI-Verarbeitung.",
    "en": "Independently applies disclosure and process logs in empirical work and consistently protects participant data from impermissible AI processing."
   },
   "3": {
    "de": "Verantwortet den regelkonformen KI-Einsatz mit sensiblen Diagnostik-, Gesundheits- und Praktikumsdaten und belässt kritische Entscheidungen beim Menschen.",
    "en": "Manages compliant AI use with sensitive assessment, health and internship data and keeps critical decisions with humans."
   },
   "4": {
    "de": "Trägt die Endverantwortung für KI-gestützte Forschung: definiert Nutzungsregeln im Projekt, auditiert deren Einhaltung und steht für die Ergebnisse ein.",
    "en": "Carries final accountability for AI-supported research: sets project rules for AI use, audits compliance and stands behind the results."
   }
  },
  "KI6": {
   "1": {
    "de": "Prüft KI-Antworten zu Fachinhalten angeleitet gegen Lehrbuch, Kursmaterial und PsycINFO.",
    "en": "Checks AI answers on course content against textbooks, course materials and PsycINFO, with guidance."
   },
   "2": {
    "de": "Verifiziert KI-generierte Quellenangaben, Fakten und R-Code selbständig durch Tests und Abgleich mit der Fachliteratur.",
    "en": "Independently verifies AI-generated references, facts and R code through testing and cross-checking against the literature."
   },
   "3": {
    "de": "Auditiert KI-Ergebnisse professionell auf Bias und Fairness (z.B. Fairness-Audit bei Assessment-Tools) und beurteilt sie nach fachlichen Gütekriterien.",
    "en": "Professionally audits AI outputs for bias and fairness (e.g. fairness audits of assessment tools) and evaluates them against psychometric quality criteria."
   },
   "4": {
    "de": "Etabliert Validierungs- und Auditroutinen für KI-Ergebnisse in eigenen Forschungsprojekten und verantwortet deren wissenschaftliche Belastbarkeit.",
    "en": "Establishes validation and audit routines for AI outputs in own research projects and vouches for their scientific robustness."
   }
  },
  "Fu1": {
   "1": {
    "de": "Setzt klar umrissene Aufgaben zuverlässig um und erprobt digitale und KI-Werkzeuge strukturiert.",
    "en": "Reliably completes well-defined tasks and explores digital and AI tools in a structured way."
   },
   "2": {
    "de": "Entwickelt selbständig Lösungen für offene Aufgabenstellungen (z.B. Studienmaterialien, Auswertungsworkflows) und entscheidet begründet, wo KI hilft, und wo nicht.",
    "en": "Independently develops solutions for open-ended tasks (e.g. study materials, analysis workflows) and makes reasoned calls on where AI helps, and where it doesn't."
   },
   "3": {
    "de": "Gestaltet komplexe Arbeitsprozesse in Projekten aktiv mit (Systemdesign, Workflow-Aufbau) und trifft nachvollziehbar begründete Entscheidungen unter Zeitdruck.",
    "en": "Actively shapes complex work processes in projects (system design, workflow building) and makes transparently reasoned decisions under time pressure."
   },
   "4": {
    "de": "Konzipiert und verantwortet komplette Arbeits- und Forschungsprozesse von der Idee bis zum Resultat und bleibt dabei auch ohne KI voll handlungsfähig.",
    "en": "Designs and owns complete work and research processes from idea to result, and remains fully capable of delivering without AI."
   }
  },
  "Fu2": {
   "1": {
    "de": "Reflektiert das eigene Lernen regelmässig, nutzt Feedback gezielt und baut Vertrauen in die eigenen Fähigkeiten auf.",
    "en": "Regularly reflects on own learning, uses feedback deliberately and builds confidence in own abilities."
   },
   "2": {
    "de": "Steuert Lernstrategien und die eigene KI-Nutzung bewusst und sichert das eigene Verständnis durch KI-freie Kontrollpunkte.",
    "en": "Deliberately self-directs learning strategies and own AI use and safeguards genuine understanding through AI-free checkpoints."
   },
   "3": {
    "de": "Arbeitet sich selbstgesteuert in neue Methoden und Werkzeuge ein und trifft eigenverantwortliche Entscheidungen in unklaren Situationen.",
    "en": "Self-directedly masters new methods and tools and takes ownership of decisions in ambiguous situations."
   },
   "4": {
    "de": "Entwickelt das eigene professionelle Profil eigenverantwortlich weiter, bleibt unter hoher Komplexität urteils- und handlungsfähig und behält die Verantwortung, wo KI beteiligt ist.",
    "en": "Drives own professional growth autonomously, maintains sound judgement under high complexity and retains responsibility wherever AI is involved."
   }
  },
  "Fu3": {
   "1": {
    "de": "Arbeitet konstruktiv in Lerngruppen mit, kommuniziert verlässlich und hält vereinbarte Regeln, auch zur KI-Nutzung, ein.",
    "en": "Contributes constructively to study groups, communicates reliably and keeps agreed rules, including on AI use."
   },
   "2": {
    "de": "Organisiert die Zusammenarbeit in Projektteams selbständig mit, spricht Konflikte an und macht KI-Beiträge im Team transparent.",
    "en": "Independently co-organises project-team collaboration, addresses conflicts directly and makes AI contributions transparent within the team."
   },
   "3": {
    "de": "Gestaltet Team- und Stakeholder-Kommunikation in professionellen Kontexten aktiv, klärt Mensch-KI-Rollen und verankert ethische Standards in der Zusammenarbeit.",
    "en": "Actively shapes team and stakeholder communication in professional settings, clarifies human-AI roles and anchors ethical standards in collaboration."
   },
   "4": {
    "de": "Übernimmt Verantwortung für die Kooperationskultur in Forschungs- und Arbeitskontexten, moderiert Aushandlungsprozesse und setzt Standards für transparente, ethische Zusammenarbeit mit und ohne KI.",
    "en": "Takes responsibility for the collaboration culture in research and work settings, facilitates negotiation processes and sets standards for transparent, ethical collaboration with and without AI."
   }
  }
 },
 "lit": [
  {
   "apa": "Bundesamt für Gesundheit. (o. D.). Häufige Fragen (FAQ) zum Psychologieberufegesetz (PsyG).",
   "url": "https://www.bag.admin.ch/de/haeufige-fragen-faq-zum-psychologieberufegesetz-psyg"
  },
  {
   "apa": "Bundesamt für Gesundheit. (o. D.). Neuregelung der psychologischen Psychotherapie ab 1. Juli 2022.",
   "url": "https://www.bag.admin.ch/de/neuregelung-der-psychologischen-psychotherapie-ab-1-juli-2022"
  },
  {
   "apa": "Bundesgesetz über die Psychologieberufe (PsyG) vom 18. März 2011, SR 935.81.",
   "url": "https://www.fedlex.admin.ch/eli/cc/2013/259/de"
  },
  {
   "apa": "Eidgenössisches Departement des Innern. (2020). AkkredV-PsyG, SR 935.811.1, Anhang 1: Fachgebiet Psychotherapie.",
   "url": "https://www.fedlex.admin.ch/eli/cc/2013/768/de"
  },
  {
   "apa": "Gesundheitsdirektion Kanton Zürich. (2024). Merkblatt psychologische Psychotherapie.",
   "url": "https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/gesundheit/gesundheitsberufe/merkblaetter_neu/merkblatt_psychotherapeuten_apr_2024.pdf"
  },
  {
   "apa": "Schweizerische Gesellschaft für Forensische Psychiatrie. (2025). Curriculum Zertifikat forensische Psychologie SGFP (gültig ab 1. April 2026).",
   "url": "https://www.swissforensic.ch/fileadmin/SGFP/user_upload/d_Curriculum_Zertifikat_forensischePsy_fin.pdf"
  },
  {
   "apa": "Schweizerische Gesellschaft für Laufbahn- und Personalpsychologie. (o. D.). Fachtitel Laufbahn- und Personalpsychologie FSP.",
   "url": "https://www.sglp.ch/fachtitel-fsp/"
  },
  {
   "apa": "Schweizerische Vereinigung für Neuropsychologie. (o. D.). Postgraduale Weiterbildung.",
   "url": "https://neuro.psychologie.ch/de/aus-und-weiterbildung"
  },
  {
   "apa": "Schweizerische Vereinigung Klinischer Psychologinnen und Psychologen. (2005). Curriculum zur Postgraduierten-Weiterbildung in Klinischer Psychologie.",
   "url": "https://svkp-aspc.ch/media/general/SVKP-D-Curriculum-KP-2021-03-14.pdf"
  },
  {
   "apa": "Schweizerischer Nationalfonds. (o. D.). Reform of career funding schemes.",
   "url": "https://www.snf.ch/en/jcm85VTr3a7XDkK0/news/reform-of-career-funding-schemes"
  },
  {
   "apa": "Universität Basel. (o. D.). EA KJP: Organisation.",
   "url": "https://wb-kjp.unibas.ch/studiengaenge/ea-kjp/organisation/"
  },
  {
   "apa": "Universität Bern. (o. D.). MAS Psychotherapie (Kosten, Dauer, ECTS).",
   "url": "https://www.unibe.ch/weiterbildungsangebote/mas_psychotherapie/index_ger.html"
  },
  {
   "apa": "Universität Zürich. (o. D.). MAS in Kognitiver Verhaltenstherapie und Verhaltensmedizin.",
   "url": "https://www.weiterbildung.uzh.ch/whp/programme/kurs/kognitiver-verhaltenstherapie-und-verhaltensmedizin"
  },
  {
   "apa": "Universität Zürich, Psychologisches Institut. (o. D.). Create your own profile.",
   "url": "https://www.psychologie.uzh.ch/de/studium/bscmsc/master/cyop.html"
  },
  {
   "apa": "Universität Zürich, Psychologisches Institut. (o. D.). MAS in Schulpsychologie.",
   "url": "https://www.psychologie.uzh.ch/de/bereiche/hea/kjpsych/weiterbildung/mas-schulpsychologie.html"
  }
 ]
};
