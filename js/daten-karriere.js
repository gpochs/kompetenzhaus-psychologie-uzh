/* Karrierepfade v10.2 (01.08.2026): 12 Wege aus den Fachbereichen des Studiums, je mit realistischem Stellenprofil.
   Alle Lohn- und Rechtsangaben wurden adversarial nachgeprüft (6 Skeptiker-Agenten, 45 Teilbehauptungen,
   32 bestätigt, 13 korrigiert — Korrekturprotokoll in 90_Recherche/web_stellenprofile-ch-2026.md, Anhang).
   Wichtigste Korrekturen: Gymnasium mit Lehrdiplom = Lohnklasse 21 (CHF 120'775, Tabelle ab 1.1.2026),
   nicht Klasse 20; der eidg. Titel im Feld Schule heisst EA KJP, der MAS ist ein Zusatztitel;
   der MAS Gesundheitspsychologie ist ein gemeinsamer Studiengang von UZH und Universität Bern;
   Schulpsychologie-Löhne stammen aus einem Portal, nicht aus einer amtlichen Tabelle (lohnQ = tief).
   Je Pfad: w (Gewichtung 0-3), ziel, soll, wahl, roadmap, stelle.
   Quellen: 90_Recherche/web_stellenprofile-ch-2026.md, web_karrierepfade-aus-fachbereichen.md,
   web_karrierewege-nach-msc.md. */
window.KARRIERE =
{
 "pfade": [
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
   ],
   "stelle": {
    "titel": {
     "de": "Psycholog:in / PG-Psycholog:in (in Weiterbildung)",
     "en": "Psychologist / postgraduate psychologist (in training)"
    },
    "pensum": {
     "de": "80–100 % — die Weiterbildungsstätten verlangen für die Anrechnung der Praxisjahre ein hohes Pensum",
     "en": "80–100 % — training institutions require a high workload for the practice years to count"
    },
    "wo": {
     "de": "Psychiatrische und universitäre Kliniken, Ambulatorien, psychosomatische und Rehabilitationskliniken, grosse Praxisverbünde (UPK Basel, PUK Zürich, PDAG, ipw Winterthur, UPZ Bern)",
     "en": "Psychiatric and university clinics, outpatient units, psychosomatic and rehabilitation clinics, large group practices (UPK Basel, PUK Zurich, PDAG, ipw Winterthur, UPZ Bern)"
    },
    "aufgaben": [
     {
      "de": "Fallführende psychotherapeutische Behandlungen im Einzel- und Gruppensetting",
      "en": "Case-responsible psychotherapeutic treatment in individual and group settings"
     },
     {
      "de": "Psychiatrisch-psychotherapeutische Abklärungsgespräche und Diagnosestellung nach Guidelines",
      "en": "Psychiatric-psychotherapeutic assessment interviews and diagnosis according to guidelines"
     },
     {
      "de": "Ambulante Behandlung unter ärztlicher Supervision",
      "en": "Outpatient treatment under medical supervision"
     },
     {
      "de": "Dokumentation, Fachberichte, Mitarbeit im multiprofessionellen Team",
      "en": "Documentation, specialist reports, work in a multi-professional team"
     }
    ],
    "anforderungen": [
     {
      "de": "MSc Psychologie mit klinischem Schwerpunkt inkl. Psychopathologie",
      "en": "MSc in psychology with a clinical focus including psychopathology"
     },
     {
      "de": "Begonnene oder geplante eidgenössisch anerkannte Psychotherapieweiterbildung an einem akkreditierten Institut",
      "en": "Federally recognised psychotherapy training started or planned at an accredited institute"
     },
     {
      "de": "Deutsch mindestens auf Niveau C1",
      "en": "German at least at level C1"
     },
     {
      "de": "Klinische Berufserfahrung — einzelne Stellen verlangen bis zu vier Jahre nach Studienabschluss",
      "en": "Clinical experience — some positions require up to four years after graduation"
     }
    ],
    "lohn": {
     "de": "CHF 80'000–95'000 pro Jahr bei 100 % in der Weiterbildungsphase; nach dem eidgenössischen Titel CHF 100'000–120'000",
     "en": "CHF 80,000–95,000 per year at 100 % during training; CHF 100,000–120,000 after the federal title"
    },
    "lohnQ": "mittel",
    "lohnBeleg": {
     "de": "jobs.ch-Lohnrechner «Psychologe», n = 764; Lohnbuch Schweiz 2025",
     "en": "jobs.ch salary calculator “psychologist”, n = 764; Lohnbuch Schweiz 2025"
    },
    "wann": {
     "de": "Einstieg direkt nach dem MSc. Der eidgenössische Titel folgt nach 4–6 Jahren berufsbegleitender Weiterbildung, die man selbst bezahlt (CHF 25'000–48'750).",
     "en": "Entry directly after the MSc. The federal title follows after 4–6 years of part-time training, paid for privately (CHF 25,000–48,750)."
    }
   }
  },
  {
   "id": "klinik",
   "icon": "🩺",
   "name": {
    "de": "Klinische Psychologie",
    "en": "Clinical psychology"
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
   ],
   "stelle": {
    "titel": {
     "de": "Psycholog:in / Assistenzpsycholog:in",
     "en": "Psychologist / assistant psychologist"
    },
    "pensum": {
     "de": "60–100 % — in Kliniken meist 80–100 %, in Beratungsstellen häufig 60–80 %",
     "en": "60–100 % — usually 80–100 % in clinics, often 60–80 % in counselling services"
    },
    "wo": {
     "de": "Psychiatrische, psychosomatische und Rehabilitationskliniken, Suchtfachstellen, kantonale Fachstellen, Opferberatung, Wohn- und Sozialinstitutionen (Kliniken Valens, Oberwaid, Psychiatrie Baselland, Arud Zürich)",
     "en": "Psychiatric, psychosomatic and rehabilitation clinics, addiction services, cantonal specialist units, victim support, residential and social institutions (Kliniken Valens, Oberwaid, Psychiatrie Baselland, Arud Zurich)"
    },
    "aufgaben": [
     {
      "de": "Klinische und testpsychologische Diagnostik, selbständige Durchführung psychodiagnostischer Verfahren",
      "en": "Clinical and psychometric assessment, independently administering diagnostic instruments"
     },
     {
      "de": "Beratung von Patient:innen und Angehörigen, Fallführung im interprofessionellen Team",
      "en": "Counselling patients and relatives, case management in an interprofessional team"
     },
     {
      "de": "Berichterstattung, Dokumentation, Verfassen von Fachberichten",
      "en": "Reporting, documentation, writing specialist reports"
     },
     {
      "de": "In Suchtfachstellen: Beratung, Fallbegleitung, Vernetzung mit Behörden",
      "en": "In addiction services: counselling, case support, liaison with authorities"
     }
    ],
    "anforderungen": [
     {
      "de": "MSc Psychologie (Universität oder Fachhochschule)",
      "en": "MSc in psychology (university or university of applied sciences)"
     },
     {
      "de": "Klinische Erfahrung und breites diagnostisches Wissen",
      "en": "Clinical experience and broad diagnostic knowledge"
     },
     {
      "de": "Sehr gute Deutschkenntnisse (in der Regel C1 oder Muttersprache)",
      "en": "Very good German (usually C1 or native)"
     },
     {
      "de": "Hohe Sozialkompetenz, Kommunikationsfähigkeit, Belastbarkeit",
      "en": "Strong social skills, communication ability, resilience"
     }
    ],
    "lohn": {
     "de": "CHF 78'000–92'000 pro Jahr bei 100 % — typischerweise die tiefer bezahlte Variante gegenüber der Psychotherapie-Schiene",
     "en": "CHF 78,000–92,000 per year at 100 % — typically the lower-paid variant compared with the psychotherapy track"
    },
    "lohnQ": "mittel",
    "lohnBeleg": {
     "de": "jobs.ch-Lohnrechner «Psychologe», n = 764; Kanton Zürich Lohnklasse 19 für Stellen mit Therapietätigkeit",
     "en": "jobs.ch salary calculator “psychologist”, n = 764; Canton of Zurich salary class 19 for posts with therapeutic duties"
    },
    "wann": {
     "de": "Direkt nach dem MSc — neben der Promotion das einzige Feld mit breitem Zugang ohne postgraduale Weiterbildung.",
     "en": "Directly after the MSc — alongside the doctorate the only field with broad access without postgraduate training."
    }
   }
  },
  {
   "id": "gesundheit",
   "icon": "🌱",
   "name": {
    "de": "Gesundheitsförderung & Prävention",
    "en": "Health promotion & prevention"
   },
   "hint": {
    "de": "Gesundheitspsychologie: Prävention, betriebliche Gesundheit, Public Health — einer der fünf eidgenössischen Titel",
    "en": "Health psychology: prevention, workplace health, public health — one of the five federal titles"
   },
   "w": {
    "Fa1": 2,
    "Fa2": 2,
    "Fa4": 2,
    "Fa6": 2,
    "Fa8": 3,
    "Fa9": 3,
    "Fa7": 2,
    "KI1": 1,
    "KI5": 2,
    "KI6": 2,
    "Fu1": 2,
    "Fu3": 2
   },
   "ziel": {
    "Fa1": 3,
    "Fa2": 3,
    "Fa6": 3,
    "Fa8": 3,
    "Fa9": 3,
    "Fa7": 3,
    "KI6": 3,
    "Fu3": 3
   },
   "soll": [
    0.9,
    0.7,
    0.85,
    0.55,
    0.7,
    0.85
   ],
   "wahl": {
    "r": "klin",
    "sp": "HEA",
    "wp": null,
    "hinweis": {
     "de": "Gesundheitspsychologie ist MSc-Pflichtmodul; HEA-Vertiefungen zu Prävention, Diagnostik und Intervention sowie eine gesundheitsbezogene Themenwahl schärfen das Profil.",
     "en": "Health psychology is a compulsory MSc module; HEA specialisations in prevention, assessment and intervention plus a health-related topic choice sharpen the profile."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Einstieg ohne Titelpflicht möglich",
      "en": "Entry possible without a protected title"
     },
     "d": {
      "de": "Betriebliche Gesundheitsförderung, Präventionsprogramme von Kantonen und NGO, Suchtprävention, Gesundheitskommunikation — hier zählen Projekt- und Evaluationskompetenz.",
      "en": "Workplace health promotion, prevention programmes of cantons and NGOs, addiction prevention, health communication — project and evaluation skills count here."
     }
    },
    {
     "t": {
      "de": "MAS Gesundheitspsychologie (UZH + Universität Bern)",
      "en": "MAS in Health Psychology (UZH + University of Bern)"
     },
     "d": {
      "de": "Vier Semester berufsbegleitend, 60 ECTS, mit E-Learning, praktischer Arbeit, Supervision und Abschlussarbeit; er umfasst drei von vier CAS der beiden Universitäten und führt nach der geplanten Akkreditierung zum eidgenössischen Fachtitel.",
      "en": "Four semesters part-time, 60 ECTS, with e-learning, practical work, supervision and a thesis; it includes three of the four CAS run by the two universities and leads to the federal specialist title once accreditation is in place."
     }
    },
    {
     "t": {
      "de": "Alternative: modulare SGGPsy-Weiterbildung",
      "en": "Alternative: modular SGGPsy training"
     },
     "d": {
      "de": "Der Fachtitel Gesundheitspsychologie FSP ist auch über die modulare Weiterbildung der Schweizerischen Gesellschaft für Gesundheitspsychologie erreichbar.",
      "en": "The FSP title in health psychology can also be obtained through the modular training of the Swiss Society of Health Psychology."
     }
    },
    {
     "t": {
      "de": "Angrenzendes Wachstumsfeld: E-Mental-Health",
      "en": "Adjacent growth field: e-mental health"
     },
     "d": {
      "de": "Digitale Gesundheitsinterventionen wachsen (etwa das Centre for Digital Health Interventions von UZH, ETH und Universität St. Gallen). Achtung: klinisch-therapeutische Rollen setzen den eidgenössischen Psychotherapie-Titel voraus, offen sind Forschungs-, Studien- und Produktrollen.",
      "en": "Digital health interventions are growing (for example the Centre for Digital Health Interventions of UZH, ETH and the University of St. Gallen). Note: clinical-therapeutic roles require the federal psychotherapy title; research, study and product roles are open."
     }
    },
    {
     "t": {
      "de": "⚠️ Akkreditierung noch offen",
      "en": "⚠️ Accreditation still pending"
     },
     "d": {
      "de": "Der MAS in Gesundheitspsychologie wird gemeinsam von UZH und Universität Bern getragen; die Universitäten halten fest, dass er erst «nach geplanter Akkreditierung» zum eidgenössischen Fachtitel führt. Der Titel ist damit derzeit nur eingeschränkt erreichbar — vor der Anmeldung den aktuellen Stand prüfen.",
      "en": "The MAS in health psychology is run jointly by UZH and the University of Bern; the universities state that it leads to the federal specialist title only “after the planned accreditation”. The title is therefore currently only conditionally attainable — check the current status before applying."
     }
    }
   ],
   "stelle": {
    "titel": {
     "de": "Fachmitarbeiter:in Prävention / Projektleiter:in Gesundheitsförderung",
     "en": "Prevention officer / health promotion project manager"
    },
    "pensum": {
     "de": "50–80 % ist hier der Normalfall, nicht 100 % — häufig befristet und projektfinanziert",
     "en": "50–80 % is the norm here, not 100 % — often fixed-term and project-funded"
    },
    "wo": {
     "de": "Kantonale Fachstellen für Prävention und Gesundheitsförderung, regionale Suchtpräventionsstellen, NPO und Stiftungen, Krankenversicherer, Gesundheitsdirektionen, Hochschulinstitute",
     "en": "Cantonal prevention and health promotion units, regional addiction prevention services, NPOs and foundations, health insurers, health directorates, university institutes"
    },
    "aufgaben": [
     {
      "de": "Beratung von Schulen und Gemeinden, Betreuung eines Gemeindeportfolios",
      "en": "Advising schools and municipalities, managing a portfolio of municipalities"
     },
     {
      "de": "Entwicklung und Begleitung von Präventionsprogrammen",
      "en": "Developing and supporting prevention programmes"
     },
     {
      "de": "Planung, Umsetzung und Evaluation von Massnahmen zur Gesundheitsförderung",
      "en": "Planning, implementing and evaluating health promotion measures"
     },
     {
      "de": "Öffentlichkeitsarbeit, Veranstaltungen, Netzwerkkoordination",
      "en": "Public relations, events, network coordination"
     }
    ],
    "anforderungen": [
     {
      "de": "Hochschulabschluss im psychologischen, pädagogischen, sozialen oder gesundheitswissenschaftlichen Bereich",
      "en": "University degree in psychology, education, social work or health sciences"
     },
     {
      "de": "Weiterbildungen in Prävention und Gesundheitsförderung",
      "en": "Continuing education in prevention and health promotion"
     },
     {
      "de": "Kommunikations- und Moderationsfähigkeiten, Selbstständigkeit",
      "en": "Communication and facilitation skills, ability to work independently"
     },
     {
      "de": "Flexibilität bei Arbeitszeiten — Abend- und Wochenendeinsätze gehören dazu",
      "en": "Flexible working hours — evening and weekend commitments are part of the role"
     }
    ],
    "lohn": {
     "de": "Kein berufsspezifischer Wert publiziert. Aus den kantonalen Lohnklassen abgeleitet CHF 85'000–100'000 bei 100 % — wegen der üblichen Pensen von 60–80 % liegt der effektive Jahreslohn oft bei CHF 55'000–75'000.",
     "en": "No occupation-specific figure published. Derived from cantonal salary classes: CHF 85,000–100,000 at 100 % — with the usual 60–80 % workloads the effective annual salary is often CHF 55,000–75,000."
    },
    "lohnQ": "tief",
    "lohnBeleg": {
     "de": "Kanton Zürich Lohnklassen 17/18; kein Lohnrechner-Eintrag für Gesundheitspsychologie, keine der abgerufenen Ausschreibungen nennt einen Lohn",
     "en": "Canton of Zurich salary classes 17/18; no salary-calculator entry for health psychology, none of the job ads retrieved states a salary"
    },
    "wann": {
     "de": "Einstieg direkt nach dem MSc möglich, meist über Projektstellen und in Konkurrenz zu Public Health. Der Weg zum eidgenössischen Fachtitel führt über den gemeinsamen MAS von UZH und Universität Bern (60 ECTS, 2 Jahre berufsbegleitend, CHF 29'400 zuzüglich Supervisionsgebühren, Immatrikulation an der UZH). Achtung: Die Universitäten halten fest, dass der MAS erst «nach geplanter Akkreditierung» zum Titel führt — die Akkreditierung ist noch nicht abgeschlossen.",
     "en": "Entry possible directly after the MSc, mostly via project posts and in competition with public health graduates. The route to the federal title runs through the joint MAS of UZH and the University of Bern (60 ECTS, 2 years part-time, CHF 29,400 plus supervision fees, enrolment at UZH). Note: the universities state that the MAS leads to the title only “after the planned accreditation” — accreditation is not yet complete."
    }
   }
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
   ],
   "stelle": {
    "titel": {
     "de": "Neuropsycholog:in in EAN-Ausbildung",
     "en": "Neuropsychologist in federal (EAN) training"
    },
    "pensum": {
     "de": "60–100 % — in der Weiterbildungsphase häufig 60 %",
     "en": "60–100 % — often 60 % during the training phase"
    },
    "wo": {
     "de": "Akutspitäler (Neurologie, Memory Clinics), Rehabilitationskliniken, psychiatrische Kliniken, forensische Dienste, neuropsychologische Praxen (KS Winterthur, KS Graubünden, Spital Thurgau, Clienia, PUK Zürich)",
     "en": "Acute hospitals (neurology, memory clinics), rehabilitation clinics, psychiatric clinics, forensic services, neuropsychological practices (KS Winterthur, KS Graubünden, Spital Thurgau, Clienia, PUK Zurich)"
    },
    "aufgaben": [
     {
      "de": "Indikationsstellung und Klärung des Abklärungsauftrags",
      "en": "Establishing indications and clarifying the assessment request"
     },
     {
      "de": "Planung und Durchführung neuropsychologischer Testungen",
      "en": "Planning and conducting neuropsychological testing"
     },
     {
      "de": "Befunde erstellen, Empfehlungen formulieren, Abschlussgespräche führen",
      "en": "Writing findings, formulating recommendations, conducting feedback sessions"
     },
     {
      "de": "Neuropsychologische Begleitung ausgewählter Patient:innen",
      "en": "Neuropsychological support for selected patients"
     }
    ],
    "anforderungen": [
     {
      "de": "MSc Psychologie plus Aufnahme in die EAN-Weiterbildung — für fertige Stellen der Fachtitel selbst",
      "en": "MSc in psychology plus admission to EAN training — for qualified posts the specialist title itself"
     },
     {
      "de": "Berufserfahrung mit der jeweiligen Zielgruppe (Kinder und Jugendliche bzw. Erwachsene)",
      "en": "Experience with the relevant target group (children and adolescents or adults)"
     },
     {
      "de": "Freude an interdisziplinärer Zusammenarbeit im Team",
      "en": "Enjoyment of interdisciplinary teamwork"
     },
     {
      "de": "Fliessend Deutsch",
      "en": "Fluent German"
     }
    ],
    "lohn": {
     "de": "In der Weiterbildungsphase analog Psycholog:in CHF 80'000–92'000 bei 100 %, bei 60 % Pensum entsprechend CHF 48'000–55'000. Nach Titelerwerb im Mittel CHF 100'600.",
     "en": "During training comparable to a psychologist, CHF 80,000–92,000 at 100 %, i.e. CHF 48,000–55,000 at a 60 % workload. After the title, a mean of CHF 100,600."
    },
    "lohnQ": "mittel",
    "lohnBeleg": {
     "de": "jobs.ch-Lohnrechner «Neuropsychologe», n = 42 — kleine Fallzahl, mit Vorsicht zu lesen",
     "en": "jobs.ch salary calculator “neuropsychologist”, n = 42 — small sample, read with caution"
    },
    "wann": {
     "de": "Weiterbildungsstelle direkt nach dem MSc. Der eidgenössisch anerkannte Neuropsychologietitel (EAN, UZH) dauert fünf Jahre berufsbegleitend — Vollqualifikation also frühestens fünf Jahre nach dem Master. Der frühere FSP-Fachtitel nach dem Curriculum 2018 liess sich noch bis 31.3.2026 abschliessen, sofern die Weiterbildung dort begonnen worden war; Neueinsteigende absolvieren direkt das aktuelle Curriculum.",
     "en": "Training post directly after the MSc. The federally recognised neuropsychology title (EAN, UZH) takes five years part-time — full qualification therefore at the earliest five years after the Master's. The former FSP title under the 2018 curriculum could still be completed until 31 March 2026 for those who had started under it; new entrants take the current curriculum directly."
    }
   }
  },
  {
   "id": "schule",
   "icon": "🏫",
   "name": {
    "de": "Kinder-, Jugend- & Schulpsychologie",
    "en": "Child, adolescent & school psychology"
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
   ],
   "stelle": {
    "titel": {
     "de": "Schulpsycholog:in (nach dem Assistenzjahr)",
     "en": "School psychologist (after the assistantship year)"
    },
    "pensum": {
     "de": "50–100 % — schulpsychologische Dienste schreiben auffällig oft Teilpensen aus",
     "en": "50–100 % — school psychology services strikingly often advertise part-time posts"
    },
    "wo": {
     "de": "Kommunale und regionale Schulpsychologische Dienste, kantonale Dienste, Kinder- und Jugendpsychiatrische Dienste, Erziehungsberatungen (Stadt Winterthur, KJPD St. Gallen, SPD Kanton Aargau, PUK Zürich)",
     "en": "Municipal and regional school psychology services, cantonal services, child and adolescent psychiatric services, educational counselling (City of Winterthur, KJPD St. Gallen, SPD Canton Aargau, PUK Zurich)"
    },
    "aufgaben": [
     {
      "de": "Schulpsychologische Abklärungen und Beratung von Kindern, Eltern, Lehrpersonen und Schulleitungen",
      "en": "School psychological assessments and counselling of children, parents, teachers and school management"
     },
     {
      "de": "Sonderschulabklärungen nach standardisiertem Verfahren",
      "en": "Special-education assessments using a standardised procedure"
     },
     {
      "de": "Planung und Begleitung sonderpädagogischer und therapeutischer Massnahmen",
      "en": "Planning and monitoring special-education and therapeutic measures"
     },
     {
      "de": "Vernetzung mit Fachstellen, Mitwirkung in Schulentwicklungsprozessen",
      "en": "Liaison with specialist services, contributing to school development processes"
     }
    ],
    "anforderungen": [
     {
      "de": "MSc Psychologie (Universität oder Fachhochschule)",
      "en": "MSc in psychology (university or university of applied sciences)"
     },
     {
      "de": "Berufserfahrung als Schulpsycholog:in oder abgeschlossenes Assistenzjahr — der typische Schweizer Einstiegspfad",
      "en": "Experience as a school psychologist or a completed assistantship year — the typical Swiss entry route"
     },
     {
      "de": "Systemische und lösungsorientierte Arbeitsweise",
      "en": "Systemic and solution-focused approach"
     },
     {
      "de": "Kommunikative, belastbare Persönlichkeit mit Interesse an interdisziplinärer Zusammenarbeit",
      "en": "Communicative, resilient personality interested in interdisciplinary collaboration"
     }
    ],
    "lohn": {
     "de": "Rund CHF 111'000 pro Jahr bei 100 % — eines der am besten bezahlten Felder für Master-Absolvierende, aber mit hohem Teilzeitanteil.",
     "en": "Around CHF 111,000 per year at 100 % — one of the best-paid fields for Master's graduates, but with a high share of part-time posts."
    },
    "lohnQ": "tief",
    "lohnBeleg": {
     "de": "Keine amtliche Tabelle: Die Schulpsychologischen Dienste werden von Gemeinden und Bezirken geführt. Der Wert stammt aus dem Portal jobs.ch (48 Selbstangaben, Gesamtspanne CHF 65'000–150'000). Für den Kanton Zürich weist das Portal für Berufseinsteigende gar keinen Wert aus — die dort genannten CHF 120'433 sind ein Durchschnitt über alle Erfahrungsstufen.",
     "en": "No official table: school psychology services are run by municipalities and districts. The figure comes from the jobs.ch portal (48 self-reports, overall range CHF 65,000–150,000). For the Canton of Zurich the portal reports no entry-level figure at all — the CHF 120,433 quoted there is an average across all experience levels."
    },
    "wann": {
     "de": "Assistenzjahr direkt nach dem MSc, danach Festanstellung. Der eidgenössische Titel heisst «Eidgenössisch anerkannte:r Kinder- und Jugendpsycholog:in» (EA KJP); der Weiterbildungsgang der Universität Basel ist der einzige dafür akkreditierte. Kosten rund CHF 19'600 ohne die obligatorischen 80 Einheiten externe Supervision, die mehrere Tausend Franken zusätzlich ausmachen. Zulassung nur mit einer Anstellung von mindestens 40 % im Feld; Titel nach zwei bis vier Jahren.",
     "en": "Assistantship year directly after the MSc, then a permanent post. The federal title is “federally recognised child and adolescent psychologist” (EA KJP); the University of Basel programme is the only accredited route. Costs around CHF 19,600 excluding the mandatory 80 units of external supervision, which add several thousand francs. Admission requires employment of at least 40 % in the field; title after two to four years."
    }
   }
  },
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
   ],
   "stelle": {
    "titel": {
     "de": "Doktorand:in / Assistent:in",
     "en": "Doctoral researcher / assistant"
    },
    "pensum": {
     "de": "60–100 % — der UZH-Standard für Doktorierende liegt seit 2024 bei 80 %, SNF-Projektstellen oft bei 60 %",
     "en": "60–100 % — the UZH standard for doctoral researchers has been 80 % since 2024, SNSF project posts often 60 %"
    },
    "wo": {
     "de": "Universitäten (UZH, Basel, Bern, Freiburg, Lausanne, Genf), ETH und EPFL, Pädagogische Hochschulen, Fachhochschulen, Universitätsspitäler",
     "en": "Universities (UZH, Basel, Bern, Fribourg, Lausanne, Geneva), ETH and EPFL, universities of teacher education, universities of applied sciences, university hospitals"
    },
    "aufgaben": [
     {
      "de": "Literaturrecherche, Fragebogenerstellung, Datenerhebung und -analyse",
      "en": "Literature review, questionnaire development, data collection and analysis"
     },
     {
      "de": "Betreuung von Studienteilnehmenden, Laborerhebungen, Anleitung von Semesterassistierenden",
      "en": "Supporting study participants, running lab sessions, supervising semester assistants"
     },
     {
      "de": "Publikationen und Vorträge an nationalen und internationalen Kongressen",
      "en": "Publications and talks at national and international conferences"
     },
     {
      "de": "Wissenschaftliche Weiterqualifikation, bei Assistierenden zusätzlich Lehre",
      "en": "Academic qualification; assistants additionally teach"
     }
    ],
    "anforderungen": [
     {
      "de": "Sehr guter Abschluss im Hauptfach Psychologie",
      "en": "Very good degree with psychology as the main subject"
     },
     {
      "de": "Nachweis erster Forschungserfahrung, etwa durch eine sehr gute empirische Abschlussarbeit",
      "en": "Evidence of initial research experience, e.g. a very good empirical thesis"
     },
     {
      "de": "Fundierte Kenntnisse empirischer Methoden und weiterführender Statistik (u.a. Mehrebenenanalyse, R, SPSS)",
      "en": "Sound knowledge of empirical methods and advanced statistics (incl. multilevel analysis, R, SPSS)"
     },
     {
      "de": "Sehr gute Englischkenntnisse, Interesse an internationalen Forschungsaufenthalten",
      "en": "Very good English, interest in international research stays"
     }
    ],
    "lohn": {
     "de": "UZH-Ansatz nach SNF-Bandbreite bei 80 %: CHF 50'504 im ersten, CHF 52'115 im zweiten, CHF 53'725 ab dem dritten Jahr. Das ist der tiefste Einstieg im ganzen Set — und die Stelle ist befristet.",
     "en": "UZH rate based on the SNSF range at 80 %: CHF 50,504 in year one, CHF 52,115 in year two, CHF 53,725 from year three. This is the lowest entry salary in the whole set — and the post is fixed-term."
    },
    "lohnQ": "hoch",
    "lohnBeleg": {
     "de": "UZH-Einreihungsrichtlinien für wissenschaftliche Funktionen, Stand 08.01.2026; SNF-Lohnbandbreite ab 1.1.2026",
     "en": "UZH salary guidelines for academic functions, as of 8 Jan 2026; SNSF salary range from 1 Jan 2026"
    },
    "wann": {
     "de": "Direkt nach dem MSc. Befristung in der Regel drei Jahre; die Gesamtdauer als Doktorierende und Assistierende ist auf sechs Jahre angelegt, auf begründeten Antrag ist bei familiären, gesundheitlichen oder militärischen Verzögerungen mehr möglich. Eine unbefristete akademische Stelle ist die grosse Ausnahme.",
     "en": "Directly after the MSc. Normally limited to three years; the combined duration as doctoral researcher and assistant is designed for six years, with more possible on justified request in cases of family, health or military-service delays. A permanent academic post is the rare exception."
    }
   }
  },
  {
   "id": "gutachten",
   "icon": "⚖️",
   "name": {
    "de": "Diagnostik & Rechtspsychologie",
    "en": "Assessment & legal psychology"
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
    },
    {
     "t": {
      "de": "⚠️ Aufnahmestopp beim Fachtitel",
      "en": "⚠️ Admission suspended for the specialist title"
     },
     "d": {
      "de": "Die Schweizerische Gesellschaft für Rechtspsychologie hat für ihr Fachtitel-Curriculum einen Aufnahmestopp verfügt; der Vorstand prüft die Zukunft des Titels, insbesondere nach den Änderungen bei der Psychotherapieregulierung. Für forensische Psychotherapie ist ohnehin der eidgenössische Psychotherapietitel zwingend.",
      "en": "The Swiss Society for Legal Psychology has suspended admission to its specialist-title curriculum; the board is reviewing the title's future, particularly following the changes to psychotherapy regulation. Forensic psychotherapy requires the federal psychotherapy title in any case."
     }
    }
   ],
   "stelle": {
    "titel": {
     "de": "Assistenzpsycholog:in Forensik",
     "en": "Assistant psychologist, forensics"
    },
    "pensum": {
     "de": "60–100 % — Bereitschaftsdienste gehören dazu",
     "en": "60–100 % — on-call duties are part of the role"
    },
    "wo": {
     "de": "Forensisch-psychiatrische Kliniken und Institute, Justizvollzug, private Gutachterinstitute, verkehrspsychologische Abklärungsstellen (PDAG Windisch, UPZ Bern, UPK Basel, Kanton Zürich JuWe)",
     "en": "Forensic psychiatric clinics and institutes, correctional services, private expert institutes, traffic psychology assessment centres (PDAG Windisch, UPZ Bern, UPK Basel, Canton Zurich JuWe)"
    },
    "aufgaben": [
     {
      "de": "Fallführung bei Massnahmenpatient:innen auf einer geschlossen geführten Station, unter Supervision",
      "en": "Case management for patients under court-ordered measures on a secure ward, under supervision"
     },
     {
      "de": "Risikoeinschätzungen erstellen",
      "en": "Producing risk assessments"
     },
     {
      "de": "Selbständige Planung, Durchführung und Dokumentation testdiagnostischer Abklärungen",
      "en": "Independently planning, conducting and documenting psychometric assessments"
     },
     {
      "de": "Zusammenarbeit mit interprofessionellen Teams und Justizbehörden",
      "en": "Working with interprofessional teams and judicial authorities"
     }
    ],
    "anforderungen": [
     {
      "de": "MSc Psychologie sowie eine begonnene eidgenössisch anerkannte Psychotherapieausbildung",
      "en": "MSc in psychology plus federally recognised psychotherapy training already started"
     },
     {
      "de": "Für neuropsychologische Gutachten: fortgeschrittene postgraduale Weiterbildung in Neuropsychologie",
      "en": "For neuropsychological expert reports: advanced postgraduate training in neuropsychology"
     },
     {
      "de": "Sorgfältige, präzise schriftliche Arbeit — das Gutachten ist das Produkt",
      "en": "Careful, precise written work — the expert report is the product"
     },
     {
      "de": "Hohe Sozialkompetenz, Flexibilität und Belastbarkeit",
      "en": "Strong social skills, flexibility and resilience"
     }
    ],
    "lohn": {
     "de": "Kein berufsspezifischer Wert publiziert. Näherung über Psycholog:innenlöhne: CHF 80'000–95'000 bei 100 % als Assistenzpsycholog:in. Erfahrene Gutachter:innen liegen deutlich höher, dazu gibt es keine publizierten Schweizer Zahlen.",
     "en": "No occupation-specific figure published. Approximated from psychologist salaries: CHF 80,000–95,000 at 100 % as an assistant psychologist. Experienced experts earn considerably more, but no published Swiss figures exist."
    },
    "lohnQ": "tief",
    "lohnBeleg": {
     "de": "jobs.ch-Lohnrechner «Psychologe»; kantonale Lohnklassen 19–20 für Stellen im Psychiatrisch-Psychologischen Dienst — keines der abgerufenen Inserate nennt einen Lohn",
     "en": "jobs.ch salary calculator “psychologist”; cantonal salary classes 19–20 for posts in the psychiatric-psychological service — none of the job ads retrieved states a salary"
    },
    "wann": {
     "de": "Einstieg direkt nach dem MSc, sofern die Psychotherapieweiterbildung begonnen ist. Eigenständig Gutachten erst nach vier bis sechs Jahren. Master und drei Jahre Berufserfahrung sind erst die Zulassung zum SGRP-Curriculum; dazu kommen der Weiterbildungsgang selbst (zwei bis sechs Jahre, 400 Einheiten Wissen und Können, 150 Einheiten Supervision, zehn Fallberichte, Schlussprüfung) und die FSP-Mitgliedschaft. Achtung: Die Schweizerische Gesellschaft für Rechtspsychologie hat für dieses Curriculum einen Aufnahmestopp verfügt.",
     "en": "Entry directly after the MSc, provided psychotherapy training has started. Independent expert reports only after four to six years. A Master's plus three years of experience merely grant admission to the SGRP curriculum; the programme itself follows (two to six years, 400 units of knowledge and skills, 150 units of supervision, ten case reports, final examination) plus FSP membership. Note: the Swiss Society for Legal Psychology has suspended admission to this curriculum."
    }
   }
  },
  {
   "id": "wirtschaft",
   "icon": "🏢",
   "name": {
    "de": "Arbeits- & Organisationspsychologie",
    "en": "Work & organisational psychology"
   },
   "hint": {
    "de": "Personalauswahl und -entwicklung, Führung, Teams, Arbeitsgestaltung — das grösste nicht-klinische Berufsfeld",
    "en": "Personnel selection and development, leadership, teams, work design — the largest non-clinical field"
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
    },
    {
     "t": {
      "de": "Ausbaustufe: People Analytics",
      "en": "Advanced step: people analytics"
     },
     "d": {
      "de": "Datenbasierte Personalarbeit wächst, ist aber kein eigener Einstiegsberuf: Laut einer Schweizer Befragung (n = 133) haben 49 Prozent der Unternehmen eine HR-Analytics-Funktion, meist mit einer Stelle, und fast nur ab 250 Mitarbeitenden; der Reifegrad liegt auf Reporting-Niveau. Realistisch als Spezialisierung aus einer HR- oder Analyse-Rolle heraus (CAS Human Capital Analytics, ZHAW, 12 ECTS).",
      "en": "Data-based HR work is growing but is not a separate entry profession: a Swiss survey (n = 133) found 49 percent of firms have an HR analytics function, mostly one post, and almost only from 250 employees upwards; maturity is at reporting level. Realistic as a specialisation from an HR or analyst role (CAS Human Capital Analytics, ZHAW, 12 ECTS)."
     }
    }
   ],
   "stelle": {
    "titel": {
     "de": "Junior HR Business Partner / Fachspezialist:in Personalentwicklung",
     "en": "Junior HR business partner / L&D specialist"
    },
    "pensum": {
     "de": "80–100 % — neben dem Gymnasium das Feld mit den höchsten Pensen",
     "en": "80–100 % — alongside teaching the field with the highest workloads"
    },
    "wo": {
     "de": "Grossunternehmen aus Industrie, Handel, Banken, Versicherungen und Pharma, Beratungsunternehmen, Personaldienstleister, öffentliche Verwaltungen, Krankenkassen",
     "en": "Large companies in industry, retail, banking, insurance and pharma, consultancies, staffing firms, public administrations, health insurers"
    },
    "aufgaben": [
     {
      "de": "Rekrutierung, Analyse und Auswahl von Mitarbeitenden",
      "en": "Recruiting, analysing and selecting staff"
     },
     {
      "de": "Betreuung des Mitarbeiterlebenszyklus von Onboarding bis Weiterentwicklung",
      "en": "Managing the employee life cycle from onboarding to development"
     },
     {
      "de": "Beratung und Coaching von Führungskräften, Konfliktlösung",
      "en": "Advising and coaching managers, conflict resolution"
     },
     {
      "de": "Anwendung und Weiterentwicklung von HR-Richtlinien und -Prozessen",
      "en": "Applying and further developing HR policies and processes"
     }
    ],
    "anforderungen": [
     {
      "de": "Hochschulabschluss — der Psychologie-Master ist ein Zugangsweg, kein Titel",
      "en": "University degree — the psychology Master's is a route in, not a title"
     },
     {
      "de": "Realitätscheck: Der klassische Schweizer HR-Weg führt über KV plus HR-Fachausweis, nicht zwingend über den Master",
      "en": "Reality check: the classic Swiss HR route runs via commercial apprenticeship plus HR certificate, not necessarily via a Master's"
     },
     {
      "de": "Hohe Sozialkompetenz, ausgeprägte Zuhörfähigkeit, diplomatisches Auftreten",
      "en": "Strong social skills, marked listening ability, diplomatic manner"
     },
     {
      "de": "Deutsch und Französisch oder Englisch — Mehrsprachigkeit ist in Schweizer Konzernen die Regel",
      "en": "German and French or English — multilingualism is the norm in Swiss corporations"
     }
    ],
    "lohn": {
     "de": "CHF 78'000–93'000 pro Jahr bei 100 %",
     "en": "CHF 78,000–93,000 per year at 100 %"
    },
    "lohnQ": "hoch",
    "lohnBeleg": {
     "de": "jobs.ch-Lohnrechner «HR Business Partner», n = 6'374 — die grösste Fallzahl im ganzen Set; ergänzend «Personalentwickler», n = 591",
     "en": "jobs.ch salary calculator “HR business partner”, n = 6,374 — the largest sample in the whole set; plus “L&D specialist”, n = 591"
    },
    "wann": {
     "de": "Direkt nach dem MSc, typischerweise über eine Junior-Position und in starker Konkurrenz zu BWL-Profilen. Kein Fachtitel nötig. Optional der FSP-Fachtitel Laufbahn- und Personalpsychologie über eine anerkannte DAS- oder MAS-Weiterbildung.",
     "en": "Directly after the MSc, typically via a junior position and in strong competition with business graduates. No specialist title required. Optionally the FSP title in career and personnel psychology via a recognised DAS or MAS programme."
    }
   }
  },
  {
   "id": "laufbahn",
   "icon": "🧭",
   "name": {
    "de": "Berufs-, Studien- & Laufbahnberatung",
    "en": "Career, study & vocational counselling"
   },
   "hint": {
    "de": "Menschen bei Berufswahl, Laufbahnentscheiden und Neuorientierung begleiten — mit Diagnostik und Beratung",
    "en": "Supporting people in career choice, career decisions and reorientation — with assessment and counselling"
   },
   "w": {
    "Fa1": 2,
    "Fa5": 3,
    "Fa6": 3,
    "Fa8": 2,
    "Fa9": 3,
    "Fa7": 2,
    "Fa10": 2,
    "KI3": 2,
    "KI5": 2,
    "KI6": 2,
    "Fu2": 2,
    "Fu3": 3
   },
   "ziel": {
    "Fa5": 3,
    "Fa6": 3,
    "Fa8": 3,
    "Fa9": 3,
    "Fa7": 3,
    "KI6": 3,
    "Fu3": 3
   },
   "soll": [
    0.75,
    0.85,
    0.9,
    0.5,
    0.75,
    0.9
   ],
   "wahl": {
    "r": "swo",
    "sp": "SEOP",
    "wp": null,
    "hinweis": {
     "de": "Persönlichkeitspsychologie, Psychologische Diagnostik und SEOP-Vertiefungen tragen diesen Weg; Interessen- und Eignungsdiagnostik ist das tägliche Handwerk.",
     "en": "Personality psychology, psychological assessment and SEOP specialisations carry this route; interest and aptitude assessment is the daily craft."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Einstieg in Beratungsdienste",
      "en": "Entry into counselling services"
     },
     "d": {
      "de": "Kantonale Berufs-, Studien- und Laufbahnberatung, Laufbahnzentren, Hochschul-Studienberatung, Outplacement und RAV-nahe Angebote.",
      "en": "Cantonal career and study counselling services, career centres, university study advising, outplacement and services around regional employment offices."
     }
    },
    {
     "t": {
      "de": "FSP-Fachtitel Laufbahn- und Personalpsychologie",
      "en": "FSP title in career and personnel psychology"
     },
     "d": {
      "de": "Voraussetzungen: Psychologie-Master einer Schweizer Hochschule, eine FSP-anerkannte postgraduale Weiterbildung (DAS/MAS) und ordentliche FSP-Mitgliedschaft; anerkannt sind der MAS/DAS CC&HRM der Universitäten Bern und Freiburg sowie der MAS MRHC der Universität Lausanne. Seit 2026 sind zusätzlich Supervision und Intervision zu dokumentieren.",
      "en": "Requirements: a psychology Master's from a Swiss university, an FSP-recognised postgraduate qualification (DAS/MAS) and full FSP membership; recognised are the MAS/DAS CC&HRM of the Universities of Bern and Fribourg and the MAS MRHC of the University of Lausanne. Since 2026 supervision and intervision must also be documented."
     }
    },
    {
     "t": {
      "de": "Profil schärfen",
      "en": "Sharpen the profile"
     },
     "d": {
      "de": "Beratungskompetenz, Interessen- und Eignungsdiagnostik, Kenntnis des Schweizer Bildungssystems und der Arbeitsmarktentwicklung.",
      "en": "Counselling skills, interest and aptitude assessment, knowledge of the Swiss education system and of labour-market developments."
     }
    }
   ],
   "stelle": {
    "titel": {
     "de": "Berufs-, Studien- und Laufbahnberater:in (in Ausbildung)",
     "en": "Career, study and vocational counsellor (in training)"
    },
    "pensum": {
     "de": "60–100 %, mit klarem Schwerpunkt bei 60–80 %",
     "en": "60–100 %, with a clear emphasis on 60–80 %"
    },
    "wo": {
     "de": "Kantonale Berufsinformationszentren (biz/BIZ), kantonale Beratungsdienste, IV-Stellen und Sozialversicherungsanstalten, Hochschul-Studienberatungen, grosse Betriebe, private Coaching- und Outplacement-Anbieter",
     "en": "Cantonal career information centres, cantonal counselling services, disability insurance offices, university student advisory services, large companies, private coaching and outplacement providers"
    },
    "aufgaben": [
     {
      "de": "Erstausbildungsberatung von Jugendlichen, Betreuung zugeteilter Schulen",
      "en": "Advising young people on initial vocational training, supporting assigned schools"
     },
     {
      "de": "Klassen- und Elternorientierungen, Schulhaussprechstunden",
      "en": "Class and parent information sessions, school-based consultation hours"
     },
     {
      "de": "Laufbahnberatungen, auch mithilfe von Tests; Infotheksdienst",
      "en": "Career counselling, also using tests; information desk service"
     },
     {
      "de": "Workshop- und Veranstaltungsleitung, Bewerbungswerkstatt",
      "en": "Leading workshops and events, application clinic"
     }
    ],
    "anforderungen": [
     {
      "de": "Abgeschlossene oder weit fortgeschrittene Ausbildung in Berufs-, Studien- und Laufbahnberatung (MAS)",
      "en": "Completed or well-advanced training in career, study and vocational counselling (MAS)"
     },
     {
      "de": "Hohe Dienstleistungsbereitschaft, Freude an der Beratung, Arbeitsmarktkenntnis",
      "en": "Strong service orientation, enjoyment of counselling, knowledge of the labour market"
     },
     {
      "de": "Gute organisatorische und kommunikative Fähigkeiten",
      "en": "Good organisational and communication skills"
     },
     {
      "de": "Fremdsprachenkenntnisse",
      "en": "Foreign language skills"
     }
    ],
    "lohn": {
     "de": "CHF 85'000–95'000 pro Jahr bei 100 %; bei den üblichen 60–80 % also CHF 51'000–76'000 effektiv",
     "en": "CHF 85,000–95,000 per year at 100 %; at the usual 60–80 % therefore CHF 51,000–76,000 effectively"
    },
    "lohnQ": "mittel",
    "lohnBeleg": {
     "de": "jobs.ch-Lohnrechner «Berufsberater», n = 208; Kanton Zürich Lohnklasse 18 aufwärts",
     "en": "jobs.ch salary calculator “career counsellor”, n = 208; Canton of Zurich salary class 18 upwards"
    },
    "wann": {
     "de": "Nicht direkt nach dem MSc: Der Titel «dipl. Berufs-, Studien- und Laufbahnberater:in» ist bundesrechtlich reglementiert. Viele Kantone stellen aber schon mit weit fortgeschrittenem Studium ein. Der MAS BSLB der ZHAW (70 ECTS, CHF 26'800) dauert 2,5 bis 3 Jahre und verlangt zusätzlich mindestens 16 Wochen betriebliche Praxis. Achtung: Die Akkreditierung des Programms durch das SBFI ist laut Programmseite erst angestrebt — die Titelberechtigung ist entsprechend im Konjunktiv formuliert.",
     "en": "Not directly after the MSc: the title of certified career counsellor is regulated by federal law. Many cantons do hire candidates whose studies are well advanced. The ZHAW programme (70 ECTS, CHF 26,800) takes 2.5 to 3 years and additionally requires at least 16 weeks of workplace practice. Note: according to the programme page, SBFI accreditation is still being sought — the entitlement to the title is worded conditionally."
    }
   }
  },
  {
   "id": "konsum",
   "icon": "🛒",
   "name": {
    "de": "Markt- & Konsumentenpsychologie",
    "en": "Market & consumer psychology"
   },
   "hint": {
    "de": "Entscheidungsverhalten, Werbewirkung und Marktforschung — psychologisch fundiert statt bauchgetrieben",
    "en": "Decision behaviour, advertising effects and market research — psychologically grounded rather than gut-driven"
   },
   "w": {
    "Fa2": 3,
    "Fa3": 3,
    "Fa4": 3,
    "Fa6": 2,
    "Fa1": 2,
    "Fa9": 1,
    "KI1": 2,
    "KI6": 2,
    "Fu1": 2,
    "Fu3": 1
   },
   "ziel": {
    "Fa2": 3,
    "Fa3": 3,
    "Fa4": 3,
    "Fa6": 3,
    "Fa1": 3,
    "KI6": 3
   },
   "soll": [
    0.7,
    0.95,
    0.8,
    0.65,
    0.7,
    0.6
   ],
   "wahl": {
    "r": "swo",
    "sp": "SEOP",
    "wp": "06SM200-510",
    "hinweis": {
     "de": "Economic and Consumer Psychology ist das Kernmodul dieses Wegs; SEOP-Vertiefungen und ein starkes Methodenprofil (Statistik, Fragebogenkonstruktion) sind die Eintrittskarte.",
     "en": "Economic and Consumer Psychology is the core module of this route; SEOP specialisations and a strong methods profile (statistics, questionnaire construction) are the entry ticket."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Einstieg über Praktikum oder Volontariat",
      "en": "Entry via internship or traineeship"
     },
     "d": {
      "de": "Marktforschungsinstitute stellen typisch über Praktikum oder Volontariat ein, danach folgt die Projektleitung. Ehrlich bleiben: Psychologie ist hier ein konkurrenzfähiger, aber kein privilegierter Zugang — Marketing-, Wirtschafts- und Sozialwissenschaften bewerben sich auf dieselben Stellen.",
      "en": "Market research institutes typically recruit via internship or traineeship, followed by project management. To be honest: psychology is a competitive but not privileged entry here — marketing, business and social sciences apply for the same posts."
     }
    },
    {
     "t": {
      "de": "Die Branche",
      "en": "The sector"
     },
     "d": {
      "de": "Der Verband SWISS INSIGHTS beziffert den Umsatz seiner Mitgliedsinstitute auf rund 200 Millionen Franken; über 30 Institute tragen das Qualitätslabel. Konsumgüter und öffentlicher Sektor stellen zusammen etwa 40 Prozent der Nachfrage.",
      "en": "The SWISS INSIGHTS association puts the turnover of its member institutes at around 200 million francs; over 30 institutes carry its quality label. Consumer goods and the public sector together account for about 40 percent of demand."
     }
    },
    {
     "t": {
      "de": "Weiterbildung wo nötig",
      "en": "Further training where needed"
     },
     "d": {
      "de": "CAS Werbe- und Konsumentenpsychologie (Kalaidos, ein Semester, rund CHF 5'700), CAS Customer Behavior & Psychology (HWZ, 16 Tage) oder CAS Behavioral Insights for Marketing (ZHAW, 12 ECTS).",
      "en": "CAS in advertising and consumer psychology (Kalaidos, one semester, around CHF 5,700), CAS Customer Behavior & Psychology (HWZ, 16 days) or CAS Behavioral Insights for Marketing (ZHAW, 12 ECTS)."
     }
    }
   ],
   "stelle": {
    "titel": {
     "de": "Junior Research Consultant / Research Assistant",
     "en": "Junior research consultant / research assistant"
    },
    "pensum": {
     "de": "60–100 %, in Instituten und Konzernen meist 80–100 %",
     "en": "60–100 %, usually 80–100 % in institutes and corporations"
    },
    "wo": {
     "de": "Marktforschungsinstitute, Insights-Abteilungen von Grossunternehmen, Media- und Werbeagenturen, Verbände (intervista, AmPuls, LINK, gfs.bern, gfs-zürich, Migros-Genossenschafts-Bund)",
     "en": "Market research institutes, insights departments of large companies, media and advertising agencies, associations (intervista, AmPuls, LINK, gfs.bern, gfs-zürich, Migros)"
    },
    "aufgaben": [
     {
      "de": "Studiendesigns entwickeln, Fragebogen konstruieren und testen",
      "en": "Developing study designs, constructing and testing questionnaires"
     },
     {
      "de": "Offene Antworten codieren, Daten kontrollieren, Reports erstellen",
      "en": "Coding open responses, checking data, producing reports"
     },
     {
      "de": "Analysen rechnen und für Kundinnen und Kunden aufbereiten",
      "en": "Running analyses and preparing them for clients"
     },
     {
      "de": "Ergebnisse präsentieren und im Team abstimmen",
      "en": "Presenting findings and coordinating within the team"
     }
    ],
    "anforderungen": [
     {
      "de": "Hochschulabschluss in Psychologie, Soziologie oder Wirtschaft",
      "en": "University degree in psychology, sociology or economics"
     },
     {
      "de": "Quantitative Methodenkompetenz und Statistiksoftware (SPSS, R)",
      "en": "Quantitative methods expertise and statistical software (SPSS, R)"
     },
     {
      "de": "Präsentations- und Kundenkompetenz",
      "en": "Presentation and client skills"
     },
     {
      "de": "Sehr gutes Deutsch, dazu Englisch und Französisch",
      "en": "Very good German, plus English and French"
     }
    ],
    "lohn": {
     "de": "CHF 75'000–90'000 pro Jahr bei 100 %. Praktikumslöhne liegen deutlich darunter und werden nicht publiziert.",
     "en": "CHF 75,000–90,000 per year at 100 %. Internship salaries are considerably lower and are not published."
    },
    "lohnQ": "mittel",
    "lohnBeleg": {
     "de": "jobs.ch-Lohnrechner «Marketing Analyst», n = 4'486 (belastbarer) und «Marktforscher», n = 170",
     "en": "jobs.ch salary calculator “marketing analyst”, n = 4,486 (more robust) and “market researcher”, n = 170"
    },
    "wann": {
     "de": "Direkt nach dem MSc, häufig über ein bezahltes Praktikum von sechs bis zwölf Monaten. Kein Fachtitel, keine Regulierung. Achtung: Der Schweizer Markt ist klein — die Suche nach «Marktforschung» ergab schweizweit acht offene Stellen.",
     "en": "Directly after the MSc, often via a paid internship of six to twelve months. No specialist title, no regulation. Note: the Swiss market is small — a search for “market research” returned eight open positions nationwide."
    }
   }
  },
  {
   "id": "ux",
   "icon": "🖥️",
   "name": {
    "de": "Nutzer- & Medienpsychologie (UX-Research)",
    "en": "User & media psychology (UX research)"
   },
   "hint": {
    "de": "Wie Menschen digitale Produkte wahrnehmen, verstehen und nutzen — Kognition und Methodik werden zum Beruf",
    "en": "How people perceive, understand and use digital products — cognition and methodology become a profession"
   },
   "w": {
    "Fa2": 3,
    "Fa3": 2,
    "Fa4": 3,
    "Fa1": 2,
    "Fa6": 3,
    "Fa9": 2,
    "KI1": 2,
    "KI2": 2,
    "KI4": 2,
    "KI6": 2,
    "Fu1": 2,
    "Fu3": 2
   },
   "ziel": {
    "Fa2": 3,
    "Fa4": 3,
    "Fa6": 3,
    "Fa1": 3,
    "KI4": 3,
    "KI6": 3,
    "Fu1": 3
   },
   "soll": [
    0.7,
    0.85,
    0.85,
    0.75,
    0.8,
    0.8
   ],
   "wahl": {
    "r": "ekn",
    "sp": "DeNC",
    "wp": null,
    "hinweis": {
     "de": "Kognitionspsychologie, Kognitive Neurowissenschaften und das Experimentalpraktikum sind das fachliche Fundament; DeNC-Vertiefungen und ein sauberes Methodenprofil zahlen direkt ein.",
     "en": "Cognitive psychology, cognitive neuroscience and the experimental lab course are the foundation; DeNC specialisations and a clean methods profile pay in directly."
    }
   },
   "roadmap": [
    {
     "t": {
      "de": "Einstieg als Junior UX Researcher",
      "en": "Entry as a junior UX researcher"
     },
     "d": {
      "de": "In Agenturen, Medienhäusern, Spitälern oder Produktorganisationen, oft in Teilzeit. Stelleninserate nennen Psychologie ausdrücklich neben Design und Data Science; ein Portfolio mit eigenen Usability-Tests ist praktisch Voraussetzung.",
      "en": "In agencies, media houses, hospitals or product organisations, often part-time. Job ads name psychology explicitly alongside design and data science; a portfolio of your own usability tests is effectively required."
     }
    },
    {
     "t": {
      "de": "MAS Human Computer Interaction Design",
      "en": "MAS in Human Computer Interaction Design"
     },
     "d": {
      "de": "Getragen von der OST, der Fakultät für Psychologie der Universität Basel und der HGK Basel FHNW; zwei bis drei Jahre, 60 ECTS, rund CHF 30'500. Die Zielgruppe nennt Psychologie ausdrücklich. Kleiner Einstieg: CAS UX Research der OST (23 Tage, 16 ECTS, rund CHF 9'800).",
      "en": "Run by OST, the Faculty of Psychology of the University of Basel and HGK Basel FHNW; two to three years, 60 ECTS, around CHF 30,500. Psychology is named explicitly among the target groups. Smaller entry: OST's CAS in UX Research (23 days, 16 ECTS, around CHF 9,800)."
     }
    },
    {
     "t": {
      "de": "Was du mitbringst, was andere nicht haben",
      "en": "What you bring that others don't"
     },
     "d": {
      "de": "Experimentelles Design, Stichprobenlogik, Fragebogenkonstruktion, Wahrnehmungs- und Gedächtnispsychologie — genau die Stellen, an denen Nutzerforschung sonst methodisch schwach wird.",
      "en": "Experimental design, sampling logic, questionnaire construction, perception and memory psychology — exactly where user research otherwise becomes methodologically weak."
     }
    }
   ],
   "stelle": {
    "titel": {
     "de": "Junior UX/UI Designer / UX Researcher",
     "en": "Junior UX/UI designer / UX researcher"
    },
    "pensum": {
     "de": "80–100 %, überwiegend 100 % — Teilzeit ist in diesem Feld unüblich",
     "en": "80–100 %, mostly 100 % — part-time work is unusual in this field"
    },
    "wo": {
     "de": "Digitalunternehmen und Plattformen, Banken und Versicherungen, Telekom, Medtech, Digital- und UX-Agenturen, öffentliche Digitalisierungsprojekte",
     "en": "Digital companies and platforms, banks and insurers, telecoms, medtech, digital and UX agencies, public-sector digitalisation projects"
    },
    "aufgaben": [
     {
      "de": "Qualitative und quantitative Nutzerstudien planen und durchführen (Interviews, Usability-Tests, Tagebuchstudien)",
      "en": "Planning and running qualitative and quantitative user studies (interviews, usability tests, diary studies)"
     },
     {
      "de": "Erkenntnisse auswerten und für Produktteams aufbereiten",
      "en": "Analysing findings and preparing them for product teams"
     },
     {
      "de": "A/B-Tests und Analyse von Verhaltensdaten",
      "en": "A/B tests and analysis of behavioural data"
     },
     {
      "de": "Research-Repositories, Personas und Journey Maps aufbauen und pflegen",
      "en": "Building and maintaining research repositories, personas and journey maps"
     }
    ],
    "anforderungen": [
     {
      "de": "Studium in Psychologie, Soziologie, Kommunikationswissenschaft oder Informatik",
      "en": "Degree in psychology, sociology, communication science or computer science"
     },
     {
      "de": "Portfolio mit Fallstudien — praktische Erfahrung zählt oft so viel wie die formale Ausbildung",
      "en": "Portfolio with case studies — practical experience often counts as much as formal education"
     },
     {
      "de": "Methodenkompetenz und Werkzeuge wie Figma, Dovetail, UserTesting",
      "en": "Methods expertise and tools such as Figma, Dovetail, UserTesting"
     },
     {
      "de": "Englisch als Arbeitssprache",
      "en": "English as the working language"
     }
    ],
    "lohn": {
     "de": "CHF 68'000–80'000 pro Jahr bei 100 % — zusammen mit der Promotion der tiefste Einstieg im Set. Das spricht gegen die verbreitete Wahrnehmung von UX als besonders lukrativem Ausstieg.",
     "en": "CHF 68,000–80,000 per year at 100 % — together with the doctorate the lowest entry in the set. This contradicts the widespread perception of UX as a particularly lucrative exit."
    },
    "lohnQ": "mittel",
    "lohnBeleg": {
     "de": "jobs.ch-Lohnrechner «UX Designer», n = 1'101; ITBoard Gehaltsreport 2025/26. Für «UX Researcher» allein existiert kein Schweizer Einstiegswert.",
     "en": "jobs.ch salary calculator “UX designer”, n = 1,101; ITBoard salary report 2025/26. No Swiss entry figure exists for “UX researcher” alone."
    },
    "wann": {
     "de": "Direkt nach dem MSc möglich, praktisch aber nur mit Portfolio und Praxiserfahrung. Reine UX-Research-Stellen sind in der Schweiz selten und meist Senior-Positionen; der Einstieg führt über Design-, Product- oder Human-Factors-Rollen.",
     "en": "Possible directly after the MSc, but in practice only with a portfolio and hands-on experience. Pure UX research posts are rare in Switzerland and mostly senior; entry usually runs via design, product or human factors roles."
    }
   }
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
   ],
   "stelle": {
    "titel": {
     "de": "Mittelschullehrperson Pädagogik/Psychologie",
     "en": "Upper-secondary teacher, education and psychology"
    },
    "pensum": {
     "de": "Gerechnet wird in Pflichtlektionen, nicht in Prozent: 23 Normallektionen pro Woche sind ein Vollpensum. Für Einsteigende realistisch 40–70 %, weil Pädagogik/Psychologie an vielen Schulen ein kleines Fachpensum hat.",
     "en": "Measured in mandatory lessons rather than per cent: 23 standard lessons per week make a full load. Realistically 40–70 % for newcomers, as education/psychology carries a small share at many schools."
    },
    "wo": {
     "de": "Kantonsschulen und Gymnasien, Fachmittelschulen, Berufsmaturitätsschulen, private Gymnasien",
     "en": "Cantonal schools and grammar schools, specialised secondary schools, vocational baccalaureate schools, private grammar schools"
    },
    "aufgaben": [
     {
      "de": "Unterricht in Pädagogik/Psychologie und im Zweitfach auf gymnasialer Stufe",
      "en": "Teaching education/psychology and a second subject at upper-secondary level"
     },
     {
      "de": "Vorbereitung, Durchführung und Beurteilung von Unterricht und Prüfungen",
      "en": "Preparing, delivering and assessing lessons and examinations"
     },
     {
      "de": "Betreuung von Maturitätsarbeiten",
      "en": "Supervising baccalaureate theses"
     },
     {
      "de": "Mitarbeit in Fachschaft, Schulentwicklung und Konventen, Klassenlehrerfunktion",
      "en": "Contributing to the subject department, school development and staff meetings, class teacher duties"
     }
    ],
    "anforderungen": [
     {
      "de": "MSc Psychologie plus Lehrdiplom für Maturitätsschulen (60 ECTS), beginnbar bereits während des Masterstudiums",
      "en": "MSc in psychology plus a teaching diploma for baccalaureate schools (60 ECTS), which can be started during the Master's"
     },
     {
      "de": "EDK-anerkanntes Diplom für den Unterricht an öffentlichen Schulen",
      "en": "An EDK-recognised diploma for teaching at public schools"
     },
     {
      "de": "Ein zweites Unterrichtsfach — im Kanton Zürich für ein volles Pensum praktisch unerlässlich",
      "en": "A second teaching subject — practically essential for a full load in the Canton of Zurich"
     },
     {
      "de": "Fachdidaktische und berufspraktische Prüfungen nach Abschluss des Masters",
      "en": "Subject-didactic and practical examinations after completing the Master's"
     }
    ],
    "lohn": {
     "de": "Mit Lehrdiplom Lohnklasse 21, Stufe 3: CHF 120'775 pro Jahr bei vollem Pensum — der höchste belegbare Einstieg im ganzen Set. Ohne Lehrdiplom (Klasse 20, Stufe 3) sind es CHF 112'870. Bei einem realistischen Teilpensum von 50–70 % entspricht das CHF 60'000–85'000.",
     "en": "With a teaching diploma, salary class 21, step 3: CHF 120,775 per year at a full load — the highest documented entry in the whole set. Without the diploma (class 20, step 3) it is CHF 112,870. At a realistic 50–70 % load this equals CHF 60,000–85,000."
    },
    "lohnQ": "hoch",
    "lohnBeleg": {
     "de": "Kanton Zürich, Lohntabellen LR 24 gültig ab 1.1.2026; Einreihung nach MBVO 413.111 Anhang Teil A (mit Lehrdiplom Klasse 21, ohne Klasse 20, mit besonderen Aufgaben Klasse 22)",
     "en": "Canton of Zurich, salary tables LR 24 valid from 1 Jan 2026; classification per MBVO 413.111 Annex Part A (class 21 with teaching diploma, 20 without, 22 with special duties)"
    },
    "wann": {
     "de": "Nicht direkt nach dem MSc, weil das Lehrdiplom zwingend ist — beginnt man es parallel zum Master, ist der Einstieg unmittelbar danach möglich. Zusätzliche Hürde: Der Stellenmarkt für Pädagogik/Psychologie ist klein und schwankt stark.",
     "en": "Not directly after the MSc, as the teaching diploma is mandatory — starting it alongside the Master's makes entry possible immediately afterwards. Additional hurdle: the job market for education/psychology is small and volatile."
    }
   }
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
   "apa": "Gerber, M., Krause, A., & Probst, J. (2023). HR Analytics in der Schweiz. personal SCHWEIZ.",
   "url": "https://www.zhaw.ch/storage/sml/weiterbildung/sml_cas_hcai_HR_Analytics_in_der_Schweiz_Krause_Probst_Gerber.pdf"
  },
  {
   "apa": "Gesundheitsdirektion Kanton Zürich. (2024). Merkblatt psychologische Psychotherapie.",
   "url": "https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/gesundheit/gesundheitsberufe/merkblaetter_neu/merkblatt_psychotherapeuten_apr_2024.pdf"
  },
  {
   "apa": "OST – Ostschweizer Fachhochschule. (o. D.). MAS Human Computer Interaction Design (mit Universität Basel, Fakultät für Psychologie).",
   "url": "https://www.ost.ch/de/weiterbildung/weiterbildungsangebot/informatik/mas-human-computer-interaction-design"
  },
  {
   "apa": "Schweizerische Gesellschaft für Forensische Psychiatrie. (2025). Curriculum Zertifikat forensische Psychologie SGFP (gültig ab 1. April 2026).",
   "url": "https://www.swissforensic.ch/fileadmin/SGFP/user_upload/d_Curriculum_Zertifikat_forensischePsy_fin.pdf"
  },
  {
   "apa": "Schweizerische Gesellschaft für Gesundheitspsychologie. (o. D.). Fachtitel Gesundheitspsychologie FSP.",
   "url": "https://healthpsy.psychologie.ch/de/fachtitel"
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
   "apa": "SDBB. (o. D.). Markt- und Werbepsychologe/-login. berufsberatung.ch.",
   "url": "https://www.berufsberatung.ch/dyn/show/1900?id=1185"
  },
  {
   "apa": "SWISS INSIGHTS. (o. D.). Branche (Marktforschung Schweiz).",
   "url": "https://swiss-insights.ch/insights-branche/branche/"
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
   "apa": "Universität Bern. (o. D.). Weiterbildungsangebote: MAS Gesundheitspsychologie (UZH und Universität Bern, 60 ECTS).",
   "url": "https://www.unibe.ch/weiterbildungsangebote/mas_gesundheitspsychologie/index_ger.html"
  },
  {
   "apa": "Universität Zürich, Psychologisches Institut. (o. D.). Create your own profile.",
   "url": "https://www.psychologie.uzh.ch/de/studium/bscmsc/master/cyop.html"
  },
  {
   "apa": "Universität Zürich, Psychologisches Institut. (o. D.). MAS in Schulpsychologie.",
   "url": "https://www.psychologie.uzh.ch/de/bereiche/hea/kjpsych/weiterbildung/mas-schulpsychologie.html"
  },
  {
   "apa": "Universität Zürich. (o. D.). MAS in Kognitiver Verhaltenstherapie und Verhaltensmedizin.",
   "url": "https://www.weiterbildung.uzh.ch/whp/programme/kurs/kognitiver-verhaltenstherapie-und-verhaltensmedizin"
  },
  {
   "apa": "Universität Zürich. (2026). Einreihungsrichtlinien für wissenschaftliche Funktionen (Stand 08.01.2026).",
   "url": "https://www.uzh.ch/cmsssl/de/about/basics/rechtliche-grundlagen.html"
  },
  {
   "apa": "Schweizerischer Nationalfonds. (2025). Höhere Löhne für Doktorierende ab 2026.",
   "url": "https://www.snf.ch/de/news"
  },
  {
   "apa": "Kanton Zürich. (2023). Lohnreglement LR 24 für Lehrpersonen an Mittelschulen.",
   "url": "https://www.zh.ch/de/bildung/informationen-fuer-schulen/informationen-fuer-schulen-mittelschulen.html"
  },
  {
   "apa": "jobs.ch. (2026). Lohnrechner: HR Business Partner, Psychologe, Schulpsychologe, UX Designer, Marketing Analyst.",
   "url": "https://www.jobs.ch/de/lohn/"
  },
  {
   "apa": "berufsberatung.ch. (o. D.). Berufsmöglichkeiten: Psychologie. SDBB.",
   "url": "https://www.berufsberatung.ch/dyn/show/48230"
  },
  {
   "apa": "Kanton Zürich. (2026). Lohntabellen LR 24 für Lehrpersonen an Mittelschulen, gültig ab 1. Januar 2026.",
   "url": "https://www.zh.ch/de/bildung/informationen-fuer-schulen/informationen-schulen-sek-ii.html"
  },
  {
   "apa": "Kanton Zürich. (o. D.). Mittelschul-Bildungsverordnung (MBVO), LS 413.111, Anhang Teil A.",
   "url": "https://www.zh.ch/de/politik-staat/gesetze-beschluesse/gesetzessammlung.html"
  },
  {
   "apa": "Universität Basel. (o. D.). Weiterbildung Kinder- und Jugendpsychologie (EA KJP / MAS KJP).",
   "url": "https://wb-kjp.unibas.ch/studiengaenge/mas/organisation/"
  },
  {
   "apa": "Schweizerische Gesellschaft für Rechtspsychologie. (2024). Studienreglement Fachtitel Rechtspsychologie (Stand 1.4.2024).",
   "url": "https://rechtspsychologie.ch/images/downloads/C_STUDIENREGLEMENT-d.pdf"
  },
  {
   "apa": "Universität Zürich. (o. D.). Postgraduale Weiterbildung Neuropsychologie (EAN).",
   "url": "https://www.ean-neuropsychologie.uzh.ch/de.html"
  }
 ]
};
