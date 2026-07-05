/* Karrierepfade: Gewichtung der 19 Kompetenzen pro Berufsfeld (0–3).
   Grundlage: Recherche B8 (fachrichtungsspezifische Kompetenzen), Kompetenzaufbaumodell 02.07.2026.
   cv (Bewerbungs-Textbausteine pro Kompetenz × Stufe) wird generiert und beim Merge ergänzt. */
window.KARRIERE = {
  pfade: [
    { id: "phd", icon: "🔬",
      name: { de: "PhD & Forschung", en: "PhD & research" },
      hint: { de: "Promotion, wissenschaftliche Mitarbeit, akademische Laufbahn", en: "Doctorate, research positions, academic career" },
      w: { Fa1: 1, Fa2: 3, Fa3: 3, Fa4: 2, Fa6: 2, Fa7: 2, Fa10: 1, KI1: 2, KI2: 2, KI4: 1, KI6: 2, Fu1: 1, Fu2: 1 } },
    { id: "klinik", icon: "🩺",
      name: { de: "Klinische Praxis & Gesundheit", en: "Clinical practice & health" },
      hint: { de: "Psychotherapie-Weiterbildung, Klinik, Beratung, Prävention", en: "Psychotherapy training, clinics, counselling, prevention" },
      w: { Fa1: 2, Fa5: 3, Fa7: 2, Fa8: 3, Fa9: 2, Fa6: 1, KI3: 1, KI5: 2, KI6: 1, Fu2: 1, Fu3: 2 } },
    { id: "wirtschaft", icon: "🏢",
      name: { de: "Wirtschaft, HR & Beratung", en: "Business, HR & consulting" },
      hint: { de: "Personalauswahl und -entwicklung, Organisationsberatung, Marketing", en: "Personnel selection and development, organisational consulting, marketing" },
      w: { Fa5: 2, Fa6: 2, Fa8: 2, Fa9: 1, Fa10: 2, KI1: 2, KI3: 2, KI5: 1, KI6: 1, Fu1: 2, Fu3: 2 } },
    { id: "data", icon: "📊",
      name: { de: "Data, Tech & UX", en: "Data, tech & UX" },
      hint: { de: "Data Science, People Analytics, UX Research, KI-Entwicklung", en: "Data science, people analytics, UX research, AI development" },
      w: { Fa2: 2, Fa3: 3, Fa4: 2, Fa9: 1, KI1: 2, KI2: 3, KI4: 2, KI6: 2, Fu1: 2, Fu2: 1 } },
    { id: "schule", icon: "🏫",
      name: { de: "Schulpsychologie & Bildung", en: "School psychology & education" },
      hint: { de: "Schulpsychologische Dienste, Beratung von Kindern, Eltern und Lehrpersonen", en: "School psychology services, counselling children, parents and teachers" },
      w: { Fa1: 2, Fa5: 2, Fa8: 2, Fa9: 3, Fa6: 2, Fa7: 1, KI5: 1, KI6: 1, Fu3: 2, Fu2: 1 } },
    { id: "gutachten", icon: "⚖️",
      name: { de: "Diagnostik & Gutachten", en: "Assessment & expert reports" },
      hint: { de: "Forensische, verkehrs- und versicherungspsychologische Begutachtung", en: "Forensic, traffic and insurance psychology assessment" },
      w: { Fa5: 3, Fa7: 3, Fa6: 2, Fa4: 2, Fa1: 1, KI6: 2, KI5: 2, Fu2: 1 } },
    { id: "ppp", icon: "🎓",
      name: { de: "PPP-Lehrperson (Gymnasium)", en: "PPP teacher (high school)" },
      hint: { de: "Unterricht im Schwerpunktfach Philosophie/Pädagogik/Psychologie — der Kreis zur Vorstufe ⓪ schliesst sich", en: "Teaching the PPP major — closing the loop to stage ⓪" },
      w: { Fa1: 3, Fa6: 3, Fa4: 2, Fa9: 2, Fa10: 1, KI1: 1, KI4: 1, KI5: 1, Fu3: 2, Fu1: 1 } }
  ],
  cv: {
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
   "de": "Verantwortet die komplette Datenpipeline eines Forschungsprojekts — von Datenmanagement über Analyse bis zum reproduzierbaren R-Code — und leitet andere im Skript-Review an.",
   "en": "Owns a research project's full data pipeline — from data management through analysis to reproducible R code — and guides others through script reviews."
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
   "de": "Trägt die ethische Verantwortung für eigene Forschung — von Ethikantrag über Datenlebenszyklus bis zur transparenten Berichterstattung — und vertritt Integritätsstandards im Team.",
   "en": "Takes ethical ownership of own research — from ethics application through the data lifecycle to transparent reporting — and champions integrity standards within teams."
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
   "de": "Setzt KI selbständig für fachliche Arbeitsschritte ein — Literatur-Mapping, APA-Checks, Textfeedback — und prüft die Resultate gegen Fachquellen.",
   "en": "Independently deploys AI for subject-specific work steps — literature mapping, APA checks, feedback on drafts — and verifies outputs against scholarly sources."
  },
  "3": {
   "de": "Integriert KI professionell in Forschungs- und Praxisworkflows, z.B. RAG-gestützte Literaturübersichten und KI-unterstützte Analysevorbereitung.",
   "en": "Professionally integrates AI into research and practice workflows, e.g. RAG-based literature reviews and AI-assisted analysis preparation."
  },
  "4": {
   "de": "Betreibt eine KI-gestützte Forschungspipeline eigenverantwortlich — Literaturmonitoring, Präregistrierung, Datenmanagement, Skript-Review — und leitet andere in deren Nutzung an.",
   "en": "Runs an AI-supported research pipeline autonomously — literature monitoring, preregistration, data management, script review — and coaches others in its use."
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
   "en": "Independently assesses new AI methods for research suitability and explains how they work — and where they fail — in expert discussion and when guiding others."
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
   "de": "Entwickelt selbständig Lösungen für offene Aufgabenstellungen (z.B. Studienmaterialien, Auswertungsworkflows) und entscheidet begründet, wo KI hilft — und wo nicht.",
   "en": "Independently develops solutions for open-ended tasks (e.g. study materials, analysis workflows) and makes reasoned calls on where AI helps — and where it doesn't."
  },
  "3": {
   "de": "Gestaltet komplexe Arbeitsprozesse in Projekten aktiv mit (Systemdesign, Workflow-Aufbau) und trifft nachvollziehbar begründete Entscheidungen unter Zeitdruck.",
   "en": "Actively shapes complex work processes in projects (system design, workflow building) and makes transparently reasoned decisions under time pressure."
  },
  "4": {
   "de": "Konzipiert und verantwortet komplette Arbeits- und Forschungsprozesse von der Idee bis zum Resultat und bleibt dabei auch ohne KI voll handlungsfähig.",
   "en": "Designs and owns complete work and research processes from idea to result — and remains fully capable of delivering without AI."
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
   "de": "Arbeitet konstruktiv in Lerngruppen mit, kommuniziert verlässlich und hält vereinbarte Regeln — auch zur KI-Nutzung — ein.",
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
}
};
