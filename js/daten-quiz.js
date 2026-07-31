/* Quiz-Fragen (de/en), 3 pro Modul. Neu geschrieben 08.07.2026 (v7.5):
   anspruchsvoller (Anwendungs-/Analyseniveau), Distraktoren nach Best Practice
   (Haladyna & Rodriguez): parallele Laenge/Struktur, plausible Fehlkonzepte,
   genau eine eindeutig korrekte Option. Fach + KI + Prueflogik pro Modul.
   Quellen dokumentiert im Repo-Scratch; Schweizer Rechtschreibung. */
/* v10 (01.08.2026): dritte Frage je Modul auf rotierende, fachlich verankerte Motive umgestellt
   (Transfer, Ethik, Methodenkritik, Mensch-KI-Rollen, Deskilling, Wissenschaftskommunikation, Datenqualität);
   Prüfungslogik-Fragen nur noch dort, wo das Format selbst Modulgegenstand ist. Generische KI-Fragen durch
   fachlich verankerte ersetzt. IPS: nur noch eine der drei Fragen ist eine KI-Frage. Alle neuen Fragen faktengeprüft. */
window.QUIZ =
{
 "06SM200-001": [
  {
   "q": {
    "de": "In einer vollbesetzten Vorlesung sackt eine Studentin plötzlich zusammen. Die Anwesenden schauen sich um, sehen überall ruhige Gesichter und bleiben sitzen. Welcher Prozess erklärt am präzisesten, warum die Situation gar nicht erst als Notfall eingestuft wird?",
    "en": "In a packed lecture hall, a student suddenly collapses. The people present look around, see calm faces everywhere, and stay seated. Which process most precisely explains why the situation is never classified as an emergency in the first place?"
   },
   "a": [
    {
     "de": "Verantwortungsdiffusion: Die gefühlte Zuständigkeit verteilt sich auf viele Anwesende, sodass sich keine einzelne Person persönlich zum Eingreifen verpflichtet fühlt.",
     "en": "Diffusion of responsibility: perceived accountability spreads across the many people present, so no single person feels personally obliged to intervene."
    },
    {
     "de": "Pluralistische Ignoranz: Alle orientieren sich an der scheinbaren Gelassenheit der anderen und deuten die mehrdeutige Situation gemeinsam als harmlos.",
     "en": "Pluralistic ignorance: everyone takes their cue from the apparent calm of the others and collectively misreads the ambiguous situation as harmless."
    },
    {
     "de": "Soziales Faulenzen: In grossen Gruppen sinkt die individuelle Anstrengung, weil der eigene Beitrag zur Hilfeleistung für andere kaum identifizierbar ist.",
     "en": "Social loafing: individual effort drops in large groups because one's own contribution to helping is barely identifiable to others."
    },
    {
     "de": "Bewertungsangst: Die Anwesenden erkennen den Notfall durchaus, zögern aber, weil sie fürchten, sich vor der grossen Gruppe mit einer Fehlreaktion zu blamieren.",
     "en": "Evaluation apprehension: those present do recognise the emergency but hesitate for fear of embarrassing themselves in front of the large group with a wrong reaction."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Die Frage zielt auf die Interpretationsphase im Prozessmodell von Latané und Darley: Die mehrdeutige Lage wird über die ruhigen Gesichter der anderen kollektiv fehlgedeutet, das ist pluralistische Ignoranz. Verantwortungsdiffusion ist der verführerischste Distraktor, greift aber erst später, wenn ein erkannter Notfall vorliegt und die Zuständigkeit verteilt wird.",
    "en": "The question targets the interpretation stage in Latané and Darley's process model: the ambiguous situation is collectively misread via the calm faces of others, which is pluralistic ignorance. Diffusion of responsibility is the most tempting distractor, but it only kicks in later, once an emergency has been recognised and accountability is being shared."
   }
  },
  {
   "q": {
    "de": "Für den Live-Check lässt du dir von Copilot Chat die Standardabweichung erklären. Die Antwort enthält vier Aussagen. Welche musst du als fachlich falsch markieren?",
    "en": "For the live check, you ask Copilot Chat to explain the standard deviation. The answer contains four statements. Which one must you flag as factually wrong?"
   },
   "a": [
    {
     "de": "«Die Standardabweichung ist die Quadratwurzel aus der Varianz und beschreibt die typische Streuung der Werte um den Mittelwert.»",
     "en": "\"The standard deviation is the square root of the variance and describes the typical spread of scores around the mean.\""
    },
    {
     "de": "«Die Standardabweichung hat dieselbe Masseinheit wie die gemessene Variable und ist dadurch direkt inhaltlich interpretierbar.»",
     "en": "\"The standard deviation is expressed in the same unit as the measured variable, which makes it directly interpretable in substantive terms.\""
    },
    {
     "de": "«Die Standardabweichung reagiert empfindlich auf Ausreisser, weil grosse Abweichungen durch das Quadrieren überproportional gewichtet werden.»",
     "en": "\"The standard deviation is sensitive to outliers because squaring gives large deviations disproportionate weight.\""
    },
    {
     "de": "«Die Standardabweichung ist das arithmetische Mittel der absoluten Abweichungen aller Messwerte vom Mittelwert der Verteilung.»",
     "en": "\"The standard deviation is the arithmetic mean of the absolute deviations of all scores from the mean of the distribution.\""
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Die vierte Aussage beschreibt die mittlere absolute Abweichung, nicht die Standardabweichung: Diese quadriert die Abweichungen zuerst, mittelt sie und zieht dann die Wurzel. Verführerisch ist die Ausreisser-Aussage, sie ist aber korrekt, denn genau das Quadrieren macht die Standardabweichung empfindlich für Extremwerte.",
    "en": "The fourth statement describes the mean absolute deviation, not the standard deviation: the latter squares the deviations first, averages them, and then takes the square root. The outlier statement is the tempting one, but it is correct, since squaring is exactly what makes the standard deviation sensitive to extreme values."
   }
  },
  {
   "q": {
    "de": "Das Institut bereitet eine Medienmitteilung zu einer Befragungsstudie aus der Emotionspsychologie vor: Studierende, die die Strategie der Neubewertung häufiger angeben, berichten weniger Stresserleben (r = −.18). Welche Formulierung gibt diesen Befund für ein Laienpublikum korrekt wieder?",
    "en": "The institute is preparing a press release on a survey study from emotion psychology: students who report using reappraisal more often report less perceived stress (r = −.18). Which wording conveys this finding correctly to a lay audience?"
   },
   "a": [
    {
     "de": "Neubewertung senkt das Stresserleben im Studium messbar; wer die Strategie einübt, kommt spürbar entspannter durch die anstrengende Prüfungsphase.",
     "en": "Reappraisal measurably lowers perceived stress during studies; those who practise the strategy get through the demanding exam period noticeably more relaxed."
    },
    {
     "de": "Bei rund einem Fünftel der Befragten wirkt Neubewertung gegen Stress; die übrigen brauchen andere Wege der Emotionsregulation im Alltag.",
     "en": "In roughly one fifth of respondents reappraisal works against stress; the others need different routes of emotion regulation in everyday life."
    },
    {
     "de": "Wer häufiger neu bewertet, berichtet im Mittel etwas weniger Stress; ob das Umdeuten den Stress senkt, klärt erst ein Experiment.",
     "en": "Those who reappraise more often report on average slightly less stress; whether the reframing lowers stress can only be settled by an experiment."
    },
    {
     "de": "Ein statistisch signifikanter Zusammenhang ist immer auch praktisch bedeutsam; die Empfehlung lässt sich deshalb allen Studierenden gleichermassen mitgeben.",
     "en": "A statistically significant association is always practically meaningful as well; the recommendation can therefore be passed on to all students alike."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Eine Querschnittsbefragung trägt nur eine Zusammenhangsaussage; die kausale Formulierung «senkt» überschreitet dieses Design, und ein Betrag von .18 ist ein kleiner Effekt, den «im Mittel etwas» ehrlich wiedergibt. Am verführerischsten ist die Prozentvariante: Sie liest den Koeffizienten als Anteil der Personen, bei denen die Strategie wirkt, obwohl er beschreibt, wie eng beide Merkmale über alle Befragten hinweg zusammenhängen.",
    "en": "A cross-sectional survey supports only a statement about association; the causal wording \"lowers\" goes beyond that design, and a magnitude of .18 is a small effect that \"on average slightly\" renders honestly. The percentage option is the most tempting: it reads the coefficient as the share of people for whom the strategy works, although it describes how closely the two characteristics go together across all respondents."
   }
  }
 ],
 "06SM200-002": [
  {
   "q": {
    "de": "In einem Experiment zum freien Erinnern bearbeiten die Teilnehmenden direkt nach der Wortliste 30 Sekunden lang eine Rechenaufgabe. Der Rezenzeffekt verschwindet, der Primacy-Effekt bleibt bestehen. Welche Interpretation stützt dieses Befundmuster?",
    "en": "In a free-recall experiment, participants work on an arithmetic task for 30 seconds immediately after the word list. The recency effect disappears while the primacy effect remains. Which interpretation does this pattern of results support?"
   },
   "a": [
    {
     "de": "Der Rezenzeffekt beruht auf dem Kurzzeitspeicher, den die Rechenaufgabe leert; die ersten Wörter wurden durch Wiederholung bereits in den Langzeitspeicher überführt, was für getrennte Speicher spricht.",
     "en": "The recency effect relies on the short-term store, which the arithmetic task empties; the first words had already been transferred to the long-term store through rehearsal, which argues for separate stores."
    },
    {
     "de": "Die Rechenaufgabe stört die Konsolidierung im Langzeitspeicher; darum gehen die zuletzt gehörten Wörter verloren, während die zuerst gehörten dort schon dauerhaft abgesichert waren.",
     "en": "The arithmetic task disrupts consolidation in the long-term store; that is why the last words heard are lost, while the first words heard were already permanently secured there."
    },
    {
     "de": "Beide Effekte entstehen im selben Speichersystem; die Rechenaufgabe senkt vor allem die Abrufmotivation und trifft damit die zuletzt präsentierten, am wenigsten geübten Wörter am stärksten.",
     "en": "Both effects arise in the same memory system; the arithmetic task mainly lowers retrieval motivation and thus hits the most recently presented, least practised words hardest."
    },
    {
     "de": "Der Primacy-Effekt bleibt erhalten, weil die ersten Wörter stärker im sensorischen Register haften; der Rezenzeffekt verschwindet, weil sensorische Spuren innert Sekunden zerfallen.",
     "en": "The primacy effect survives because the first words stick more strongly in the sensory register; the recency effect vanishes because sensory traces decay within seconds."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Das Muster ist die klassische Dissoziation von Glanzer und Cunitz: Die Distraktoraufgabe leert den Kurzzeitspeicher und löscht so den Rezenzeffekt, während die Primacy-Wörter dank Rehearsal bereits im Langzeitspeicher liegen. Der Konsolidierungs-Distraktor ist verführerisch, verwechselt aber die Speicher: Wären die letzten Wörter schon im Langzeitspeicher, würde eine kurze Rechenaufgabe sie nicht auslöschen.",
    "en": "This pattern is the classic dissociation reported by Glanzer and Cunitz: the distractor task empties the short-term store and thereby wipes out the recency effect, while the primacy words are already in the long-term store thanks to rehearsal. The consolidation distractor is tempting but mixes up the stores: if the last words were already in the long-term store, a brief arithmetic task would not erase them."
   }
  },
  {
   "q": {
    "de": "Im JiTT-WarmUp-Quiz erklärt ein Sprachmodell das Mehrspeichermodell sprachlich einwandfrei, nennt aber eine falsche Behaltensdauer für den Kurzzeitspeicher. Welche Erklärung beschreibt den Entstehungsmechanismus solcher Fehler am besten?",
    "en": "In the just-in-time warm-up quiz, a language model explains the multi-store model of memory in flawless prose but states an incorrect retention duration for the short-term store. Which explanation best describes how such errors arise?"
   },
   "a": [
    {
     "de": "Das Modell schlägt in einer internen Dokumentendatenbank nach und zitiert daraus; Fehler entstehen, wenn dort veraltete oder fehlerhaft gespeicherte Einträge abgerufen werden.",
     "en": "The model looks things up in an internal document database and quotes from it; errors arise when outdated or incorrectly stored entries are retrieved from that database."
    },
    {
     "de": "Das Modell versteht die Fachinhalte korrekt, vereinfacht sie aber für Laien so stark, dass bei der Übersetzung in Alltagssprache fachliche Präzision verloren geht.",
     "en": "The model understands the subject matter correctly but simplifies it so heavily for lay readers that technical precision is lost in the translation into everyday language."
    },
    {
     "de": "Das Modell erzeugt Wortfolgen nach Wahrscheinlichkeiten aus den Trainingsdaten; sprachliche Flüssigkeit ist deshalb kein Beleg für die faktische Richtigkeit einer Angabe.",
     "en": "The model generates word sequences according to probabilities derived from its training data; linguistic fluency is therefore no evidence that a claim is factually correct."
    },
    {
     "de": "Das Modell kombiniert geprüfte Fakten aus Lehrbüchern; Fehler entstehen hauptsächlich, wenn Nutzende mehrdeutige oder suggestive Prompts stellen, die das Modell in die Irre führen.",
     "en": "The model combines verified facts from textbooks; errors arise mainly when users pose ambiguous or leading prompts that steer the model astray."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Sprachmodelle sagen das jeweils wahrscheinlichste nächste Token vorher, statt Fakten in einer geprüften Quelle nachzuschlagen; darum können Angaben flüssig und plausibel klingen und trotzdem falsch sein (Halluzination). Der Datenbank-Distraktor ist am verführerischsten, doch ein LLM ruft keine gespeicherten Dokumente ab, sondern kodiert statistische Muster in seinen Parametern.",
    "en": "Language models predict the most probable next token rather than looking facts up in a vetted source, which is why statements can sound fluent and plausible yet still be wrong (hallucination). The database distractor is the most tempting one, but an LLM does not retrieve stored documents; it encodes statistical patterns in its parameters."
   }
  },
  {
   "q": {
    "de": "Nach der Vorlesung zum Vergleich von menschlichem Gedächtnis und Sprachmodellen folgert eine Studentin: «Das LLM fasst mir alles zusammen, also lasse ich das Selbstabfragen weg.» Wie ist diese Lernstrategie gedächtnispsychologisch zu bewerten?",
    "en": "After the lecture comparing human memory with language models, a student concludes: \"The LLM summarises everything for me, so I will skip self-testing.\" How should this learning strategy be judged from the perspective of memory psychology?"
   },
   "a": [
    {
     "de": "Wiederholtes Lesen der KI-Zusammenfassungen ist die effizientere Strategie, weil dabei weniger Abruffehler passieren und sich der Stoff dadurch besonders zuverlässig einprägt.",
     "en": "Re-reading the AI summaries is the more efficient strategy, because fewer retrieval errors occur and the material is therefore encoded particularly reliably."
    },
    {
     "de": "Der aktive Abruf aus dem eigenen Gedächtnis stärkt die langfristige Behaltensleistung (Testing-Effekt); wer ihn an die KI delegiert, überspringt genau den lernwirksamen Prozess.",
     "en": "Active retrieval from one's own memory strengthens long-term retention (the testing effect); delegating it to the AI skips exactly the process that makes learning stick."
    },
    {
     "de": "Die KI-Zusammenfassung erzeugt beim Lesen weitgehend vergleichbare Gedächtnisspuren wie eigener Abruf, weil der inhaltliche Gehalt der verarbeiteten Information derselbe ist.",
     "en": "Reading the AI summary produces largely comparable memory traces to self-retrieval, because the informational content being processed is the same."
    },
    {
     "de": "Entscheidend ist die insgesamt investierte Lernzeit; ob sie in Selbstabfragen oder in das Lesen von KI-Zusammenfassungen fliesst, verändert die Behaltensleistung kaum.",
     "en": "What matters is the total study time invested; whether it goes into self-testing or into reading AI summaries hardly changes retention."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Der Testing-Effekt zeigt, dass aktiver Abruf die Gedächtnisspur stärker festigt als wiederholtes Lesen; die KI kann Feedback geben, aber den Abruf nicht ersetzen. Der Effizienz-Distraktor ist verführerisch, weil Lesen subjektiv flüssiger wirkt, doch gerade die Abrufanstrengung, nicht die Fehlerfreiheit, erzeugt den Lerngewinn.",
    "en": "The testing effect shows that active retrieval consolidates the memory trace more strongly than repeated reading; the AI can provide feedback but cannot replace retrieval. The efficiency distractor is tempting because reading feels subjectively smoother, yet it is the retrieval effort, not error-free processing, that produces the learning gain."
   }
  }
 ],
 "06SM200-003": [
  {
   "q": {
    "de": "Ein Student übernimmt für seinen IPS-Text eine Passage aus einem Fachartikel, ersetzt einzelne Wörter, behält aber Satzbau und Argumentationsfolge bei und setzt die Quellenangabe ans Absatzende. Wie ist dieses Vorgehen aus Integritätssicht zu beurteilen?",
    "en": "For his proseminar text, a student takes a passage from a journal article, swaps out individual words, but keeps the sentence structure and line of argument, and places the citation at the end of the paragraph. How should this be judged from an integrity perspective?"
   },
   "a": [
    {
     "de": "Das Vorgehen ist zulässig, weil die Quelle am Absatzende genannt wird; für die wissenschaftliche Integrität zählt die Auffindbarkeit der Quelle, nicht die sprachliche Eigenleistung.",
     "en": "The approach is acceptable because the source is named at the end of the paragraph; what counts for scholarly integrity is that the source can be traced, not the linguistic originality."
    },
    {
     "de": "Es liegt ein rein formaler Zitierfehler ohne Integritätsrelevanz vor, der sich durch eine vollständige und korrekte Angabe im Literaturverzeichnis beheben lässt.",
     "en": "This is a purely formal citation error with no integrity implications, which can be remedied by a complete and correct entry in the reference list."
    },
    {
     "de": "Problematisch würde die Passage erst im Ergebnisteil; im Theorieteil gelten belegte Paraphrasen unabhängig von ihrer Nähe zum Original als eigenständige Leistung.",
     "en": "The passage would become problematic only in the results section; in the theory section, cited paraphrases count as independent work regardless of how close they are to the original."
    },
    {
     "de": "Trotz Quellenangabe liegt ein Plagiat vor, weil die Formulierung fast wörtlich übernommen ist; nötig wäre ein direktes Zitat in Anführungszeichen oder eine echte eigenständige Paraphrase.",
     "en": "Despite the citation this constitutes plagiarism, because the wording is taken over almost verbatim; what is needed is a direct quotation in quotation marks or a genuinely independent paraphrase."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Eine Paraphrase verlangt eigenständige Formulierung und Struktur; wer Satzbau und Argumentationsfolge übernimmt, plagiiert auch mit Quellenangabe, weil die sprachliche Leistung als eigene ausgegeben wird. Der Zulässigkeits-Distraktor ist am verführerischsten, denn die Quellenangabe deckt die Ideenübernahme, nicht aber die fast wörtliche Übernahme der Formulierung.",
    "en": "A paraphrase requires wording and structure of one's own; anyone who copies sentence structure and line of argument is plagiarising even with a citation, because the linguistic work is passed off as their own. The acceptability distractor is the most tempting one, since the citation covers the borrowing of ideas but not the near-verbatim borrowing of wording."
   }
  },
  {
   "q": {
    "de": "Im Proseminar stellt eine Erstsemestrige ihren Semesterplan vor: Den Stoff der Statistik-Vorlesung will sie bis Semesterende nur mitschreiben und dann zwei Wochen am Stück lernen. Welche Rückmeldung ist lernpsychologisch begründet?",
    "en": "In the proseminar, a first-semester student presents her term plan: until the end of term she intends only to take notes on the statistics lecture and then to study for two solid weeks in a row. Which feedback is grounded in learning psychology?"
   },
   "a": [
    {
     "de": "Zwei Blockwochen sind effizient, weil ein Fach ohne Wechsel durchgearbeitet wird und dadurch weniger Interferenz zwischen den Stoffgebieten entsteht.",
     "en": "Two block weeks are efficient because one subject is worked through without switching, which produces less interference between the areas of content."
    },
    {
     "de": "Der Zeitdruck kurz vor der Prüfung erhöht die Konzentration; darum ist geballtes Lernen am Semesterende für Statistik besonders geeignet.",
     "en": "Time pressure shortly before the exam raises concentration; massed study at the end of term is therefore particularly suited to statistics."
    },
    {
     "de": "Kurze Lerneinheiten über das Semester verteilt führen bei gleicher Gesamtlernzeit zu besserem Behalten als zwei Wochen am Stück.",
     "en": "Short study sessions spread across the term lead to better retention than two solid weeks, with the same total study time."
    },
    {
     "de": "Entscheidend ist allein die Gesamtzahl der Lernstunden; ihre Verteilung über das Semester verändert die Behaltensleistung bis zur Prüfung kaum.",
     "en": "What counts is solely the total number of study hours; their distribution across the term hardly changes retention up to the exam."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Verteiltes Lernen verbessert das Behalten bei gleicher Gesamtzeit; in der Übersicht von Dunlosky et al. (2013) erhält es zusammen mit dem Abrufen (practice testing) die höchste Nützlichkeitsbewertung. Der Gesamtzeit-Distraktor ist am verführerischsten, weil er intuitiv wirkt: Er übersieht, dass nicht nur die Menge der Lernzeit zählt, sondern auch ihre zeitliche Verteilung, weil jedes Wiederaufgreifen nach einer Pause die Gedächtnisspur zusätzlich festigt.",
    "en": "Distributed practice improves retention at equal total time; in the review by Dunlosky et al. (2013) it receives the highest utility rating, together with practice testing. The total-time distractor is the most tempting because it feels intuitive: it overlooks that not only the amount of study time counts but also its distribution, since every return to the material after a break further consolidates the memory trace."
   }
  },
  {
   "q": {
    "de": "In der Proseminargruppe schildern vier Studierende, wie sie den Chatbot beim Vorbereiten eines Arbeitsauftrags zu einem Fachtext einsetzen. Welches Vorgehen nutzt die KI so, dass sie das eigene Verstehen anstösst statt es zu übernehmen?",
    "en": "In the proseminar group, four students describe how they use the chatbot when preparing an assignment on a specialist text. Which approach uses the AI so that it prompts their own understanding rather than taking it over?"
   },
   "a": [
    {
     "de": "Zuerst die KI-Zusammenfassung lesen und den Fachtext danach durchgehen, um die zusammengefassten Aussagen im Original wiederzufinden.",
     "en": "First read the AI summary and then go through the specialist text to locate the summarised statements in the original."
    },
    {
     "de": "Den Fachtext zuerst selbst durcharbeiten, die eigenen offenen Stellen notieren und die KI gezielt zu diesen Stellen befragen.",
     "en": "Work through the specialist text yourself first, note down the passages that stay unclear, and question the AI specifically about those."
    },
    {
     "de": "Die KI eine Gliederung des Fachtexts erstellen lassen und den eigenen Beitrag anschliessend entlang dieser Gliederung ausformulieren.",
     "en": "Have the AI produce an outline of the specialist text and then write up your own contribution along that outline."
    },
    {
     "de": "Die KI-Zusammenfassung von einem zweiten Chatbot gegenlesen lassen und die übereinstimmenden Aussagen als gesichert übernehmen.",
     "en": "Have a second chatbot review the AI summary and adopt the statements on which both agree as secured."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Verstehen entsteht, wenn zuerst die eigene Verständnislücke bestimmt wird; die KI beantwortet dann eine Frage, die man selbst gestellt hat, und assistiert, statt zu ersetzen. Am verführerischsten ist der erste Weg, weil er wie eine Kontrolle aussieht: Wer die Zusammenfassung bereits kennt, liest den Text nur noch auf Wiedererkennen hin und hält dieses Wiedererkennen für Verstehen. Die Zwei-Chatbot-Variante hilft ebenfalls nicht, weil Übereinstimmung zweier Modelle keine Prüfung am Original ersetzt.",
    "en": "Understanding develops when you first pin down your own gap; the AI then answers a question you posed yourself and assists instead of replacing. The first route is the most tempting because it looks like a check: once you already know the summary, you read the text only for recognition and mistake that recognition for understanding. The two-chatbot variant does not help either, because agreement between two models is no substitute for checking against the original."
   }
  }
 ],
 "06SM200-100": [
  {
   "q": {
    "de": "Ein neuer Konzentrationstest korreliert zu r = .82 mit einem etablierten Konzentrationsverfahren, aber ebenso hoch (r = .80) mit einem reinen Verarbeitungsgeschwindigkeitstest. Welches Gütekriterium ist dadurch am stärksten in Frage gestellt?",
    "en": "A new concentration test correlates r = .82 with an established concentration measure, but just as highly (r = .80) with a pure processing-speed test. Which quality criterion is thereby most called into question?"
   },
   "a": [
    {
     "de": "Die diskriminante Validität, weil der Test sich nicht ausreichend von einem verwandten, aber anderen Konstrukt abgrenzt.",
     "en": "Discriminant validity, because the test fails to separate sufficiently from a related but distinct construct."
    },
    {
     "de": "Die Retest-Reliabilität, weil zwei hohe Korrelationen auf instabile Messwerte über die Zeit hinweisen.",
     "en": "Retest reliability, because two high correlations point to unstable scores over time."
    },
    {
     "de": "Die Durchführungsobjektivität, weil unterschiedliche Testleitende die beiden Verfahren verschieden instruieren.",
     "en": "Administration objectivity, because different test administrators instruct the two procedures differently."
    },
    {
     "de": "Die Inhaltsvalidität, weil die Testaufgaben das Merkmal Konzentration inhaltlich nicht vollständig abdecken.",
     "en": "Content validity, because the test items do not fully cover the concentration construct in substance."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Konvergente Validität ist mit r = .82 gegeben, doch die ebenso hohe Korrelation mit Verarbeitungsgeschwindigkeit verletzt die diskriminante Validität: Der Test misst offenbar nicht spezifisch Konzentration. Die Retest-Reliabilität ist der verführerischste Distraktor, betrifft aber die zeitliche Stabilität und lässt sich aus Korrelationen mit anderen Tests gar nicht ablesen.",
    "en": "Convergent validity is met at r = .82, but the equally high correlation with processing speed violates discriminant validity: the test apparently does not measure concentration specifically. Retest reliability is the most tempting distractor, but it concerns temporal stability and cannot be read off correlations with other tests."
   }
  },
  {
   "q": {
    "de": "Ein KI-Tool berechnet für einen selbst konstruierten Fragebogen ein Cronbachs Alpha von .95 und meldet, das Verfahren sei damit «hochvalide». Welche Prüfung deckt den fachlichen Fehler dieser Aussage am direktesten auf?",
    "en": "An AI tool computes a Cronbach's alpha of .95 for a self-built questionnaire and reports that the instrument is therefore \"highly valid\". Which check most directly exposes the flaw in this statement?"
   },
   "a": [
    {
     "de": "Prüfen, ob Alpha wirklich korrekt aus den Itemkorrelationen berechnet wurde, denn ein Rechenfehler erklärt den überhöhten Wert am ehesten.",
     "en": "Check whether alpha was really computed correctly from the item correlations, since a calculation error most likely explains the inflated value."
    },
    {
     "de": "Prüfen, ob Alpha und Validität verwechselt werden, denn Alpha schätzt die interne Konsistenz und belegt keine inhaltliche Gültigkeit der Messung.",
     "en": "Check whether alpha and validity are being confused, since alpha estimates internal consistency and provides no evidence of the substantive validity of the measurement."
    },
    {
     "de": "Prüfen, ob die Stichprobe gross genug war, denn erst ab mehreren Hundert Personen wird Alpha zu einem Validitätsnachweis.",
     "en": "Check whether the sample was large enough, since only from several hundred people onward does alpha become proof of validity."
    },
    {
     "de": "Prüfen, ob die Items normalverteilt sind, denn Alpha setzt Normalverteilung voraus, um als Validitätsmass zu gelten.",
     "en": "Check whether the items are normally distributed, since alpha requires normality to count as a validity measure."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Cronbachs Alpha ist ein Reliabilitätsmass für die interne Konsistenz und sagt nichts über Validität aus; ein sehr hohes Alpha kann sogar auf redundante Items hindeuten. Der Rechenfehler-Distraktor ist verführerisch, verfehlt aber den Kern: Selbst ein korrekt berechnetes Alpha begründet keine Validität.",
    "en": "Cronbach's alpha is a reliability measure of internal consistency and says nothing about validity; a very high alpha may even indicate redundant items. The calculation-error distractor is tempting but misses the point: even a correctly computed alpha does not establish validity."
   }
  },
  {
   "q": {
    "de": "Eine Arbeitsgruppe konstruiert einen 24-Item-Fragebogen zur Prokrastination. In der exploratorischen Faktorenanalyse werden nach dem Eigenwert-grösser-eins-Kriterium sechs Faktoren extrahiert und Varimax-rotiert; auf zwei davon lädt nur je ein Itempaar substanziell. Die Gruppe deutet alle sechs als inhaltliche Facetten. Worin liegt der entscheidende methodische Fehler?",
    "en": "A team constructs a 24-item procrastination questionnaire. In the exploratory factor analysis six factors are extracted using the eigenvalue-greater-than-one criterion and Varimax-rotated; on two of them only a single pair of items loads substantially. The group interprets all six as substantive facets. Where does the decisive methodological error lie?"
   },
   "a": [
    {
     "de": "Die Stichprobe war für 24 Items zu klein; erst bei einem deutlich grösseren Verhältnis von Personen zu Items liefert das Eigenwertkriterium die zutreffende Faktorenzahl.",
     "en": "The sample was too small for 24 items; only with a much larger person-to-item ratio does the eigenvalue criterion yield the appropriate number of factors."
    },
    {
     "de": "Die Rotation hätte oblique erfolgen müssen, weil Varimax inhaltlich korrelierte Prokrastinationsfacetten künstlich in voneinander unabhängige Faktoren zerlegt.",
     "en": "The rotation should have been oblique, because Varimax artificially splits substantively correlated procrastination facets into mutually independent factors."
    },
    {
     "de": "Die Faktorenzahl wurde allein am Eigenwertkriterium festgemacht, das in der Regel zu viele Faktoren ausweist; Parallelanalyse, Scree-Verlauf und inhaltliche Deutbarkeit müssten sie gemeinsam stützen.",
     "en": "The number of factors rested on the eigenvalue criterion alone, which as a rule indicates too many factors; parallel analysis, the scree plot and substantive interpretability would have to support it jointly."
    },
    {
     "de": "Die Faktorenzahl hätte an denselben Daten konfirmatorisch bestimmt werden müssen, weil erst Modellfit-Indizes eine belastbare Entscheidung erlauben.",
     "en": "The number of factors should have been determined confirmatorily on the same data, because only model fit indices allow a defensible decision."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Das Eigenwert-grösser-eins-Kriterium weist in der Regel zu viele Faktoren aus, und Faktoren, die nur von zwei Items getragen werden, sind dafür ein typisches Warnzeichen; die Entscheidung sollte auf Parallelanalyse, Scree-Verlauf und inhaltlicher Deutbarkeit zusammen beruhen. Der Rotationseinwand ist der verführerischste Distraktor, verfehlt aber die Ebene: Eine Rotation verteilt die Varianz nur innerhalb einer bereits festgelegten Faktorenzahl um und heilt keine Überextraktion.",
    "en": "The eigenvalue-greater-than-one criterion as a rule indicates too many factors, and factors carried by only two items are a typical warning sign; the decision should rest jointly on parallel analysis, the scree plot and substantive interpretability. The rotation objection is the most tempting distractor but targets the wrong level: rotation merely redistributes variance within an already fixed number of factors and cannot repair over-extraction."
   }
  }
 ],
 "06SM200-101": [
  {
   "q": {
    "de": "In R liefert cor(x, y) den Wert NA, obwohl beide Vektoren Zahlen enthalten. Der Vektor y hat an einzelnen Stellen fehlende Werte (NA). Welche Vorgehensweise löst das Problem fachlich sauber?",
    "en": "In R, cor(x, y) returns NA even though both vectors contain numbers. Vector y has missing values (NA) at some positions. Which approach solves the problem in a methodologically sound way?"
   },
   "a": [
    {
     "de": "Die fehlenden Werte vor der Berechnung durch den Mittelwert der jeweiligen Variable ersetzen, weil cor() vollständige Vektoren voraussetzt.",
     "en": "Replace the missing values with the mean of each variable before computing, because cor() requires complete vectors."
    },
    {
     "de": "Den Umgang mit fehlenden Werten bewusst festlegen, etwa mit use = \"complete.obs\", und die Konsequenzen des Ausschlusses für die Interpretation bedenken.",
     "en": "Deliberately specify how missing values are handled, e.g. with use = \"complete.obs\", and consider the consequences of exclusion for interpretation."
    },
    {
     "de": "Die Vektoren mit as.numeric() umwandeln, weil das NA-Resultat auf einen Datentyp-Konflikt zwischen Text und Zahl zurückgeht.",
     "en": "Convert the vectors with as.numeric(), because the NA result stems from a data-type conflict between text and number."
    },
    {
     "de": "Die Stichprobe vergrössern, weil cor() bei zu wenigen Beobachtungen automatisch NA statt eines Koeffizienten zurückgibt.",
     "en": "Increase the sample, because cor() automatically returns NA instead of a coefficient when there are too few observations."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "cor() gibt NA zurück, sobald fehlende Werte vorliegen; korrekt ist, den Umgang damit explizit über das Argument use zu steuern und den fallweisen Ausschluss zu reflektieren. Die Mittelwert-Ersetzung ist der verführerischste Distraktor, verzerrt aber die Varianz und die Korrelation und ist hier kein sauberer Standard.",
    "en": "cor() returns NA as soon as missing values are present; the correct step is to control this explicitly via the use argument and to reflect on case-wise exclusion. Mean imputation is the most tempting distractor, but it distorts variance and correlation and is not a sound default here."
   }
  },
  {
   "q": {
    "de": "Copilot schlägt vor, eine langsame for-Schleife über 100000 Zeilen durch vektorisierte Operationen zu ersetzen, und liefert neuen Code. Was ist der fachlich tragfähigste Prüfschritt, bevor Sie den Vorschlag übernehmen?",
    "en": "Copilot proposes replacing a slow for-loop over 100,000 rows with vectorised operations and provides new code. What is the most sound verification step before you adopt the suggestion?"
   },
   "a": [
    {
     "de": "Den neuen Code übernehmen, sobald er ohne Fehlermeldung durchläuft, weil lauffähiger Code die Korrektheit der Umstellung hinreichend belegt.",
     "en": "Adopt the new code once it runs without an error message, because runnable code sufficiently proves the conversion is correct."
    },
    {
     "de": "Beide Varianten am selben Datensatz ausführen und prüfen, ob sie identische Ergebnisse liefern, bevor die schnellere übernommen wird.",
     "en": "Run both variants on the same data and check whether they produce identical results before adopting the faster one."
    },
    {
     "de": "Den Code übernehmen, weil vektorisierte Operationen in R mathematisch immer dasselbe Ergebnis wie eine Schleife liefern.",
     "en": "Adopt the code, because vectorised operations in R always yield mathematically the same result as a loop."
    },
    {
     "de": "Ein zweites Sprachmodell den Code gegenprüfen lassen und ihn übernehmen, sobald beide Modelle ihn für korrekt halten.",
     "en": "Have a second language model review the code and adopt it once both models consider it correct."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Ob eine Umstellung das Ergebnis verändert, zeigt nur der empirische Vergleich beider Varianten am selben Datensatz; Geschwindigkeit ersetzt keine Korrektheitsprüfung. Der Lauffähigkeits-Distraktor ist verführerisch, doch fehlerfrei laufender Code kann trotzdem falsch rechnen, etwa durch abweichenden Umgang mit NA oder Randfällen.",
    "en": "Whether a rewrite changes the result is shown only by empirically comparing both variants on the same data; speed does not replace a correctness check. The runnability distractor is tempting, but code that runs without errors can still compute the wrong thing, e.g. through different handling of NA or edge cases."
   }
  },
  {
   "q": {
    "de": "Sie werten in R einen Datensatz zur Schlafqualität aus, der aus einer offenen Online-Umfrage stammt; der Link wurde über die Kanäle mehrerer Fitness-Communities verbreitet. Bei 820 Teilnehmenden liegt der Mittelwert deutlich über dem publizierten Normwert, und der Einstichproben-t-Test gegen diesen Normwert wird signifikant. Welche Schlussfolgerung ist durch diese Datengrundlage gedeckt?",
    "en": "In R you analyse a sleep-quality dataset from an open online survey whose link was circulated through the channels of several fitness communities. Across 820 participants the mean lies clearly above the published norm value, and the one-sample t-test against that norm is significant. Which conclusion is warranted by this data basis?"
   },
   "a": [
    {
     "de": "Der Wert beschreibt die Personen, die der Link über diese Kanäle erreicht hat und die sich daraufhin freiwillig gemeldet haben; auf die Allgemeinbevölkerung ist er nicht übertragbar.",
     "en": "The value describes the people the link reached through these channels and who then volunteered to take part; it is not transferable to the general population."
    },
    {
     "de": "Der Wert ist wegen der grossen Stichprobe belastbar, weil sich Verzerrungen bei über 800 Teilnehmenden weitgehend gegenseitig ausmitteln.",
     "en": "The value is dependable because of the large sample, since with more than 800 participants biases largely cancel each other out."
    },
    {
     "de": "Der Wert wird auf die Allgemeinbevölkerung übertragbar, sobald Alter und Geschlecht den Bevölkerungsanteilen entsprechend gewichtet werden.",
     "en": "The value becomes transferable to the general population as soon as age and gender are weighted to match the population proportions."
    },
    {
     "de": "Der Wert belegt einen echten Unterschied zur Normpopulation, weil der signifikante t-Test die Annahme der Gleichheit zurückweist.",
     "en": "The value proves a genuine difference from the norm population, because the significant t-test rejects the assumption of equality."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Der Erhebungsweg entscheidet, wer überhaupt in den Datensatz gelangt: Über Fitness-Kanäle rekrutierte Freiwillige unterscheiden sich systematisch in genau dem Merkmal, um das es geht, weshalb der Mittelwert nur diese selbstselektierte Gruppe beschreibt. Der Gewichtungsvorschlag ist der verführerischste Distraktor, korrigiert aber nur die Verteilung von Alter und Geschlecht und nicht die Selbstselektion auf der Zielvariablen selbst. Der signifikante t-Test prüft zudem nur die Abweichung vom Normwert innerhalb dieser Stichprobe und sagt nichts darüber, für welche Population der Kennwert gilt.",
    "en": "The recruitment route decides who enters the dataset at all: volunteers reached through fitness channels differ systematically on precisely the variable of interest, so the mean describes only this self-selected group. The weighting proposal is the most tempting distractor, but it corrects the distribution of age and gender and not the self-selection on the target variable itself. The significant t-test, moreover, only tests the deviation from the norm value within this sample and says nothing about the population to which the value applies."
   }
  }
 ],
 "06SM200-400": [
  {
   "q": {
    "de": "Eine Patientin zeigt seit zwei Wochen gedrückte Stimmung, Interessenverlust, Schlaflosigkeit und Grübeln, nachdem ihr Vater vor drei Wochen verstorben ist. Was ist bei der differenzialdiagnostischen Einordnung nach DSM-5-TR am wichtigsten?",
    "en": "For the past two weeks, a patient has shown depressed mood, loss of interest, insomnia and rumination, after her father died three weeks ago. What is most important for the differential-diagnostic classification per DSM-5-TR?"
   },
   "a": [
    {
     "de": "Bei einem aktuellen Trauerfall sollte zunächst keine Major Depression diagnostiziert werden, da Trauerreaktionen bei der Einordnung Vorrang haben.",
     "en": "When a recent bereavement is present, major depression should initially not be diagnosed, as grief reactions take precedence in classification."
    },
    {
     "de": "Ob Anzahl, Dauer und Schwere der Symptome die Kriterien einer Episode erfüllen und ob Merkmale wie Wertlosigkeit oder Suizidalität über normale Trauer hinausgehen.",
     "en": "Whether the number, duration and severity of symptoms meet the criteria for an episode and whether features such as worthlessness or suicidality go beyond normal grief."
    },
    {
     "de": "Massgeblich ist, ob die Symptome die Zweimonatsfrist nach dem Verlust überdauern, wie sie das DSM-5-TR für diese Einordnung vorsieht.",
     "en": "What matters is whether the symptoms persist beyond the two-month post-loss period that DSM-5-TR specifies for this classification."
    },
    {
     "de": "Wichtig ist, ob ein auslösendes Lebensereignis vorliegt, da reaktive Depressionen anders eingeordnet werden als endogene Formen.",
     "en": "The key question is whether a triggering life event is present, since reactive depression is classified differently from endogenous forms."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Das DSM-5-TR hat den früheren Trauerausschluss aufgehoben; entscheidend ist die klinische Beurteilung, ob die Symptomkriterien einer Episode erfüllt sind und ob Merkmale über eine normale Trauerreaktion hinausweisen. Der erste Distraktor gibt die veraltete Regel wieder, der zweite verabsolutiert eine starre Frist, die so nicht gilt.",
    "en": "DSM-5-TR removed the former bereavement exclusion; what matters is the clinical judgement of whether the symptom criteria for an episode are met and whether features go beyond a normal grief reaction. The first distractor states the outdated rule, the second absolutises a rigid deadline that does not apply in this form."
   }
  },
  {
   "q": {
    "de": "Ein Sprachmodell liefert zu einer Fallvignette die Verdachtsdiagnose «generalisierte Angststörung», nennt drei plausible Argumente und wirkt sehr überzeugend. Welche Prüfung entspricht der Kompetenz KI6 Evaluieren am wirksamsten?",
    "en": "A language model gives a case vignette the tentative diagnosis \"generalised anxiety disorder\", cites three plausible arguments and appears very convincing. Which check best reflects the competence KI6 (evaluating)?"
   },
   "a": [
    {
     "de": "Die Verdachtsdiagnose gegen die vollständigen Klassifikationskriterien inklusive Zeit-, Leidensdruck- und Ausschlusskriterien sowie Differenzialdiagnosen prüfen.",
     "en": "Check the tentative diagnosis against the full classification criteria including duration, distress and exclusion criteria as well as differential diagnoses."
    },
    {
     "de": "Die Diagnose übernehmen, weil das Modell drei nachvollziehbare Argumente anführt und Kohärenz ein verlässliches Zeichen fachlicher Richtigkeit ist.",
     "en": "Adopt the diagnosis, because the model gives three coherent arguments and coherence is a reliable sign of factual correctness."
    },
    {
     "de": "Dieselbe Vignette einem zweiten Modell vorlegen und die Diagnose bei Übereinstimmung beider Modelle als bestätigt werten.",
     "en": "Present the same vignette to a second model and treat the diagnosis as confirmed if both models agree."
    },
    {
     "de": "Die Diagnose übernehmen, wenn das Modell auf Nachfrage eine hohe eigene Sicherheit angibt und diese Einschätzung konsistent wiederholt.",
     "en": "Adopt the diagnosis if, when asked, the model reports high confidence and repeats this assessment consistently."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "KI6 verlangt die fachliche Verifikation am Kriterienstandard: Nur der systematische Abgleich mit den vollständigen Diagnosekriterien und Differenzialdiagnosen deckt Fehlschlüsse auf. Überzeugungskraft, Modellkonsens und Selbsteinschätzung sind keine Gütebelege, weil Sprachmodelle plausibel und konsistent falschliegen können.",
    "en": "KI6 requires factual verification against the criteria standard: only a systematic comparison with the full diagnostic criteria and differential diagnoses exposes faulty conclusions. Persuasiveness, model consensus and self-assessment are not marks of quality, because language models can be plausibly and consistently wrong."
   }
  },
  {
   "q": {
    "de": "Im Praktikum an einer Ambulanz berichtet eine Patientin am Ende der Sitzung eine konkrete Suizidabsicht mit Plan und Mittel und bittet darum, dass nichts davon weitergegeben wird. Die Praktikantin ist auf das Berufsgeheimnis verpflichtet worden. Welches Vorgehen ist fachlich und berufsethisch tragfähig?",
    "en": "During a placement at an outpatient clinic, a patient reports concrete suicidal intent with a plan and means at the end of the session and asks that none of it be passed on. The placement student is bound by professional secrecy. Which course of action is defensible in professional and ethical terms?"
   },
   "a": [
    {
     "de": "Die Bitte respektieren, nichts weitergeben und die Abmachung dokumentieren, weil die Patientin selbst über den Inhalt der Sitzung bestimmt.",
     "en": "Respect the request, pass nothing on and document the agreement, because the patient herself decides what the session contains."
    },
    {
     "de": "Die Suizidalität strukturiert abklären, die Grenzen des Berufsgeheimnisses ansprechen und die fallverantwortliche Fachperson einbeziehen.",
     "en": "Assess the suicidality in a structured way, address the limits of professional secrecy and bring in the clinician responsible for the case."
    },
    {
     "de": "Noch am selben Tag die Angehörigen informieren, damit sie die Patientin zuhause beaufsichtigen und die genannten Mittel entfernen.",
     "en": "Inform the relatives the same day so that they can supervise the patient at home and remove the means she mentioned."
    },
    {
     "de": "Die Sitzung wie geplant beenden, die Angaben festhalten und den Fall erst in der Supervision in zwei Wochen ausführlich besprechen.",
     "en": "End the session as planned, record what was said and discuss the case in detail only at the supervision session in two weeks."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Bei akuter Selbstgefährdung tritt die Fürsorge- und Schutzpflicht neben die Verschwiegenheit: Die Gefährdung wird zuerst fachlich abgeklärt, und die Patientin erfährt transparent, wo das Berufsgeheimnis endet. Art. 321 StGB erfasst Psychologinnen und Psychologen samt ihren Hilfspersonen; die Praktikantin arbeitet als Hilfsperson der fallverantwortlichen Fachperson, deren Einbezug innerhalb des Behandlungsteams bleibt und daher keine Offenbarung gegenüber Dritten ist. Der attraktivste Distraktor macht das Berufsgeheimnis absolut; es schützt die Patientin, verpflichtet die Praktikantin aber nicht, eine unmittelbare Lebensgefahr allein zu tragen. Die Information der Angehörigen wäre der weiter reichende Eingriff und setzt Einwilligung, Entbindung oder eine Notstandslage voraus.",
    "en": "In acute self-endangerment the duty of care stands alongside confidentiality: the risk is first assessed professionally, and the patient is told transparently where professional secrecy ends. Art. 321 of the Swiss Criminal Code covers psychologists together with their auxiliary persons; the placement student works as an auxiliary person of the clinician responsible for the case, so involving that clinician stays within the treating team and is no disclosure to third parties. The most tempting distractor treats confidentiality as absolute; it protects the patient but does not oblige the placement student to carry an immediate danger to life alone. Informing the relatives would be the far more intrusive step and requires consent, formal release or a situation of necessity."
   }
  }
 ],
 "06SM200-200": [
  {
   "q": {
    "de": "In einer Studie lesen Probanden einen Text und führen gleichzeitig eine Zweitaufgabe aus. Unter artikulatorischer Suppression (leises Wiederholen von «the, the, the») bricht das Leseverständnis stark ein, beim gleichzeitigen Tippen eines räumlichen Musters kaum. Welche Deutung passt zum Mehrkomponenten-Arbeitsgedächtnis?",
    "en": "In a study, participants read a text while performing a secondary task. Under articulatory suppression (quietly repeating 'the, the, the') reading comprehension drops sharply, whereas tapping a spatial pattern barely affects it. Which interpretation fits the multi-component model of working memory?"
   },
   "a": [
    {
     "de": "Das Lesen stützt sich auf die phonologische Schleife, die durch die Suppression blockiert wird, während der räumlich-visuelle Notizblock kaum beteiligt ist.",
     "en": "Reading draws on the phonological loop, which the suppression blocks, while the visuospatial sketchpad is barely involved."
    },
    {
     "de": "Das Lesen stützt sich auf den räumlich-visuellen Notizblock, den das Tippen blockiert, während die phonologische Schleife nur nebensächlich beteiligt ist.",
     "en": "Reading draws on the visuospatial sketchpad, which the tapping blocks, while the phonological loop is only marginally involved."
    },
    {
     "de": "Beide Zweitaufgaben belasten die zentrale Exekutive gleich stark, weshalb der Unterschied auf Ermüdung statt auf spezifische Interferenz zurückgeht.",
     "en": "Both secondary tasks load the central executive equally, so the difference stems from fatigue rather than from specific interference."
    },
    {
     "de": "Das Lesen läuft vollständig im Langzeitgedächtnis ab, weshalb keine der Zweitaufgaben das Arbeitsgedächtnis beim Verstehen beeinträchtigt.",
     "en": "Reading runs entirely in long-term memory, so neither secondary task disrupts working memory during comprehension."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Artikulatorische Suppression stört gezielt die phonologische Schleife, die das Lesen für die phonologische Rekodierung braucht, während die räumliche Zweitaufgabe eine andere Komponente belastet. Die verlockende Umkehrung auf den räumlich-visuellen Notizblock verwechselt die Zuständigkeiten, denn gerade das Tippmuster lässt das Verständnis fast unberührt.",
    "en": "Articulatory suppression specifically disrupts the phonological loop, which reading needs for phonological recoding, whereas the spatial task loads a different component. The tempting reversal to the visuospatial sketchpad confuses the roles, since it is precisely the tapping pattern that leaves comprehension almost intact."
   }
  },
  {
   "q": {
    "de": "Ein LLM erklärt, sein Kontextfenster sei das technische Äquivalent zum menschlichen Arbeitsgedächtnis, weil beide nur begrenzt viel Information gleichzeitig halten. Welche fachliche Prüfung entlarvt diese Gleichsetzung am treffendsten?",
    "en": "An LLM explains that its context window is the technical equivalent of human working memory, because both hold only a limited amount of information at once. Which subject-based check best exposes this equation?"
   },
   "a": [
    {
     "de": "Das Kontextfenster fasst mehrere tausend Tokens, das Arbeitsgedächtnis exakt sieben Einheiten, weshalb nur die Kapazitätszahl zu korrigieren ist.",
     "en": "The context window holds several thousand tokens, working memory exactly seven units, so only the capacity figure needs correcting."
    },
    {
     "de": "Beide Systeme verarbeiten Information rein seriell und fehlerfrei, weshalb der Vergleich im Kern zutrifft und nur sprachlich zu präzisieren ist.",
     "en": "Both systems process information purely serially and without error, so the comparison holds in essence and only needs sharper wording."
    },
    {
     "de": "Das Kontextfenster hält Tokens verlustfrei und passiv, während das Arbeitsgedächtnis Information begrenzt, zerfallend und unter zentraler Kontrolle aktiv verarbeitet.",
     "en": "The context window holds tokens losslessly and passively, whereas working memory processes information in a limited, decaying way under active central control."
    },
    {
     "de": "Das Arbeitsgedächtnis sitzt anatomisch im Hippocampus, das Kontextfenster in der Software, weshalb der Vergleich allein an der Lokalisation scheitert.",
     "en": "Working memory sits anatomically in the hippocampus, the context window in software, so the comparison fails on localisation alone."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Der entscheidende Unterschied ist funktional: Das Kontextfenster speichert Tokens passiv und verlustfrei, während das Arbeitsgedächtnis eine aktive, kapazitätsbegrenzte und zerfallsanfällige Verarbeitung unter der zentralen Exekutive ist. Die verlockende Kapazitätsantwort greift zu kurz und nennt mit «exakt sieben» zudem eine überholte Zahl, denn moderne Schätzungen liegen bei rund vier Einheiten.",
    "en": "The decisive difference is functional: the context window stores tokens passively and losslessly, whereas working memory is an active, capacity-limited and decay-prone process under the central executive. The tempting capacity answer is too shallow and also cites the outdated 'exactly seven', since modern estimates are around four units."
   }
  },
  {
   "q": {
    "de": "Eine Psychologin berät eine Station, auf der beim Richten von Medikamenten gehäuft Fehler auftreten. Die Pflegenden werden während eines Richtvorgangs mehrfach angesprochen und nehmen die Arbeit danach wieder auf. Die Leitung plant eine Schulung zu Sorgfalt und Motivation. Welcher Vorschlag setzt an der Ursache an, die die kognitionspsychologische Befundlage nahelegt?",
    "en": "A psychologist advises a ward where errors cluster during medication preparation. Nurses are addressed several times while preparing a dose and then resume the task. Management plans a training session on diligence and motivation. Which proposal addresses the cause suggested by cognitive-psychological evidence?"
   },
   "a": [
    {
     "de": "Ein Training zu Konzentration und Sorgfalt anbieten, weil die Fehler auf der nachlassenden Aufmerksamkeitsleistung einzelner Pflegender beruhen.",
     "en": "Offer training on concentration and diligence, because the errors stem from declining attentional performance in individual nurses."
    },
    {
     "de": "Die Ansprache während eines Richtvorgangs unterbinden, weil eine Unterbrechung das gehaltene Zwischenziel verdrängt und den Wiedereinstieg fehleranfällig macht.",
     "en": "Prevent people from addressing nurses mid-task, because an interruption displaces the held subgoal and makes resumption error-prone."
    },
    {
     "de": "Mehrere Patientendosen parallel richten lassen, weil die Übung im Parallelbearbeiten die Wechselkosten zwischen den Vorgängen mit der Zeit verschwinden lässt.",
     "en": "Have several patient doses prepared in parallel, because practice at parallel processing makes the switch costs between tasks disappear over time."
    },
    {
     "de": "Die Fehler durch eine Kontrolle am Ende des Vorgangs abfangen, weil das nachträgliche Prüfen das während der Unterbrechung verlorene Zwischenziel wiederherstellt.",
     "en": "Catch the errors with a check at the end of the procedure, because checking afterwards restores the subgoal lost during the interruption."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Beim Richten wird das aktuelle Zwischenziel aktiv im Arbeitsgedächtnis gehalten und gegen Ablenkung abgeschirmt; eine Unterbrechung verdrängt diese Aktivierung, sodass beim Wiedereinstieg ein Schritt ausgelassen oder doppelt ausgeführt wird. Feldstudien auf Spitalstationen finden entsprechend mehr Fehler beim Richten und Verabreichen, je häufiger unterbrochen wird. Die Ursache liegt damit in der Aufgabenstruktur und nicht in der Sorgfalt einzelner Personen. Die verlockende Endkontrolle kann Fehler zwar entdecken, stellt aber die verlorene Information über den erreichten Schritt nicht wieder her und lässt die Unterbrechungen selbst bestehen.",
    "en": "During preparation the current subgoal is held actively in working memory and shielded from distraction; an interruption displaces that activation, so on resumption a step is skipped or repeated. Field studies on hospital wards accordingly find more preparation and administration errors the more often nurses are interrupted. The cause therefore lies in the structure of the task, not in the diligence of individual people. The tempting final check can detect errors but does not restore the lost information about which step had been reached, and leaves the interruptions themselves untouched."
   }
  }
 ],
 "06SM200-201": [
  {
   "q": {
    "de": "Eine Medienmeldung berichtet, weil in einer fMRT-Studie die Amygdala stärker aktiv war, hätten die Probanden Angst erlebt. Welcher methodische Einwand trifft fachlich zu?",
    "en": "A news item reports that because the amygdala was more active in an fMRI study, the participants must have felt fear. Which methodological objection is scientifically correct?"
   },
   "a": [
    {
     "de": "Der Schluss ist gültig, weil die Amygdala eine funktionsspezifische Region ist, deren Aktivität eindeutig auf Angst verweist.",
     "en": "The inference is valid, because the amygdala is a function-specific region whose activity points unambiguously to fear."
    },
    {
     "de": "Der Schluss ist ein Rückschluss-Fehler, weil dieselbe Region mehrere Funktionen erfüllt und das Argument die Konsequenz bejaht.",
     "en": "The inference is a reverse-inference error, because the same region serves several functions and the argument affirms the consequent."
    },
    {
     "de": "Der Schluss scheitert allein an der geringen zeitlichen Auflösung der fMRT, die schnelle Angstreaktionen gar nicht erfassen kann.",
     "en": "The inference fails solely because of fMRI's poor temporal resolution, which cannot capture fast fear responses at all."
    },
    {
     "de": "Der Schluss scheitert allein am BOLD-Signal, das keine neuronale Aktivität, sondern nur die Weite der Blutgefässe abbildet.",
     "en": "The inference fails solely because of the BOLD signal, which reflects not neural activity but only the width of blood vessels."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Von der Aktivierung einer Region auf einen mentalen Zustand zu schliessen, ist Rückschluss (reverse inference) und logisch ein Bejahen der Konsequenz, weil die Amygdala an vielen Prozessen beteiligt ist. Die verlockende Antwort zur zeitlichen Auflösung nennt eine reale Grenze der fMRT, trifft aber den logischen Fehler nicht, um den es hier geht.",
    "en": "Inferring a mental state from a region's activation is reverse inference and, logically, affirming the consequent, because the amygdala is involved in many processes. The tempting temporal-resolution answer names a real fMRI limitation but misses the logical error at stake here."
   }
  },
  {
   "q": {
    "de": "Ein LLM behauptet, der visuelle Kortex lerne genau wie ein tiefes neuronales Netz, nämlich per Backpropagation. Welche fachliche Prüfung deckt die Schwäche dieser Behauptung am besten auf?",
    "en": "An LLM claims that the visual cortex learns exactly like a deep neural network, namely via backpropagation. Which subject-based check best exposes the weakness of this claim?"
   },
   "a": [
    {
     "de": "Die Behauptung stimmt, weil beide Systeme Gewichte über Fehlergradienten anpassen und sich nur in der Lernrate unterscheiden.",
     "en": "The claim holds, because both systems adjust weights via error gradients and differ only in learning rate."
    },
    {
     "de": "Die Behauptung scheitert daran, dass biologische Neuronen keine Gewichte kennen und Lernen allein über Neurotransmitter statt Verbindungsstärken läuft.",
     "en": "The claim fails because biological neurons have no weights and learning runs solely via neurotransmitters rather than connection strengths."
    },
    {
     "de": "Die Behauptung scheitert allein daran, dass der visuelle Kortex nur vorwärts verarbeitet und Fehlersignale rückwärts gar nicht weiterleiten kann.",
     "en": "The claim fails solely because the visual cortex processes only forward and cannot pass error signals backward at all."
    },
    {
     "de": "Die Behauptung ist unbelegt, weil Backpropagation exakte, symmetrische Rückwärtsgewichte verlangt, für die im Gehirn kein plausibler Mechanismus bekannt ist.",
     "en": "The claim is unsupported, because backpropagation requires exact, symmetric backward weights for which no plausible mechanism is known in the brain."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Backpropagation setzt voraus, dass für den Rückwärtspfad exakt dieselben (transponierten) Gewichte vorliegen wie im Vorwärtspfad, und dieses Weight-Transport-Problem hat im Gehirn keinen bekannten Mechanismus. Die verlockende Antwort, Neuronen kennten keine Gewichte, ist falsch, denn die veränderbaren synaptischen Stärken sind gerade das biologische Gegenstück zu den Gewichten.",
    "en": "Backpropagation requires the backward path to use exactly the same (transposed) weights as the forward path, and this weight-transport problem has no known mechanism in the brain. The tempting answer that neurons have no weights is wrong, since modifiable synaptic strengths are precisely the biological counterpart of weights."
   }
  },
  {
   "q": {
    "de": "Das Institut bereitet eine Medienmitteilung zu einer Studie vor: Musizierende zeigen im Mittel mehr graue Substanz in einer auditorischen Region als Nichtmusizierende, die beiden Gruppen wurden einmalig verglichen. Eine Journalistin bittet um eine Formulierung für ein Laienpublikum. Welche Formulierung gibt genau diesen Befund fachlich korrekt und zugleich verständlich wieder?",
    "en": "The institute is preparing a press release about a study: musicians show on average more grey matter in an auditory region than non-musicians, and the two groups were compared on a single occasion. A journalist asks for a wording suitable for a lay audience. Which wording conveys exactly this finding correctly and at the same time understandably?"
   },
   "a": [
    {
     "de": "Das Musizieren lässt die Hörrinde wachsen; wer ein Instrument lernt, baut damit nachweislich mehr graue Substanz auf.",
     "en": "Making music makes the auditory cortex grow; anyone who learns an instrument demonstrably builds up more grey matter."
    },
    {
     "de": "Die Gruppen unterscheiden sich im Mittel in dieser Region; ob das Musizieren die Ursache ist, lässt der einmalige Vergleich offen.",
     "en": "The groups differ on average in this region; whether making music is the cause is left open by the one-off comparison."
    },
    {
     "de": "Der Befund gilt für jede Person der Stichprobe; aus der Grösse dieser Region lässt sich daher ablesen, ob jemand ein Instrument spielt.",
     "en": "The finding holds for every person in the sample; the size of this region therefore reveals whether someone plays an instrument."
    },
    {
     "de": "Solche Bildgebungsbefunde lassen sich Laien nicht vermitteln; verständliche Aussagen sind erst nach mehreren unabhängigen Replikationen sinnvoll.",
     "en": "Such imaging findings cannot be conveyed to lay audiences; understandable statements only make sense after several independent replications."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Ein einmaliger Gruppenvergleich zeigt einen Unterschied zwischen Mittelwerten, sagt aber nichts über die Wirkrichtung: Ebenso gut können Menschen mit dieser Ausprägung häufiger zum Instrument greifen, oder ein dritter Faktor beeinflusst beides. Die verlockende Wachstumsformulierung klingt anschaulich, verwandelt aber einen Zusammenhang in eine Ursache und überzieht damit den Befund. Ein Mittelwertsunterschied erlaubt ausserdem keinen Rückschluss auf einzelne Personen, deren Werte sich in der Regel breit überlappen.",
    "en": "A one-off group comparison shows a difference between averages but says nothing about the direction of the effect: people with this characteristic may just as well be the ones who take up an instrument more often, or a third factor may drive both. The tempting growth wording sounds vivid but turns an association into a cause and thereby overstates the finding. A difference in averages also allows no inference about individual people, whose values typically overlap broadly."
   }
  }
 ],
 "06SM200-102": [
  {
   "q": {
    "de": "In einem 2×2-Design zeigt R einen signifikanten Haupteffekt von Faktor A und eine signifikante A×B-Interaktion. Wie interpretieren Sie den Haupteffekt fachlich korrekt?",
    "en": "In a 2×2 design, R shows a significant main effect of factor A and a significant A×B interaction. How do you interpret the main effect correctly?"
   },
   "a": [
    {
     "de": "Der Haupteffekt von A gilt unverändert in beiden Stufen von B, weil er unabhängig von der Interaktion signifikant geworden ist.",
     "en": "The main effect of A holds unchanged in both levels of B, because it became significant independently of the interaction."
    },
    {
     "de": "Der Haupteffekt von A ist wegen der Interaktion ungültig und darf im Ergebnisteil gar nicht berichtet werden.",
     "en": "The main effect of A is invalid because of the interaction and must not be reported in the results at all."
    },
    {
     "de": "Der Haupteffekt von A ist ein über die Stufen von B gemittelter Effekt, dessen Grösse und Richtung je nach Stufe von B variieren können.",
     "en": "The main effect of A is an effect averaged over the levels of B, whose size and direction may vary depending on the level of B."
    },
    {
     "de": "Der Haupteffekt von A beweist einen kausalen Einfluss von A, den die Interaktion mit B statistisch zusätzlich verstärkt.",
     "en": "The main effect of A proves a causal influence of A, which the interaction with B additionally strengthens statistically."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Ein Haupteffekt ist der über die Stufen des anderen Faktors gemittelte Effekt, und eine signifikante Interaktion bedeutet, dass die einfachen Effekte von A je nach Stufe von B unterschiedlich ausfallen. Die verlockende Antwort, der Haupteffekt gelte unverändert in beiden Stufen, ignoriert genau diese Interaktion und ist deshalb falsch.",
    "en": "A main effect is the effect averaged over the levels of the other factor, and a significant interaction means the simple effects of A differ depending on the level of B. The tempting answer that the main effect holds unchanged in both levels ignores exactly this interaction and is therefore wrong."
   }
  },
  {
   "q": {
    "de": "Eine Gruppe will die Auswertung beschleunigen und den Rohdatensatz mit Klarnamen der Versuchspersonen in einen öffentlichen Chatbot einfügen, um R-Code zu erhalten. Welche Vorgehensweise ist fachlich und ethisch korrekt?",
    "en": "A group wants to speed up the analysis and paste the raw dataset with participants' real names into a public chatbot to obtain R code. Which approach is scientifically and ethically correct?"
   },
   "a": [
    {
     "de": "Die Gruppe formuliert das Problem mit synthetischen Beispieldaten, erzeugt den Code KI-gestützt und deklariert diesen Schritt im Disclosure Form.",
     "en": "The group frames the problem with synthetic sample data, generates the code with AI support and declares this step in the disclosure form."
    },
    {
     "de": "Die Gruppe fügt die echten Daten ein, weil der Chatbot sie nach der Sitzung ohnehin nicht dauerhaft speichert und kein Risiko entsteht.",
     "en": "The group pastes the real data, because the chatbot does not store them permanently after the session anyway and no risk arises."
    },
    {
     "de": "Die Gruppe fügt die echten Daten ein und verzichtet auf die Deklaration, weil KI-generierter Code keine eigene Leistung darstellt.",
     "en": "The group pastes the real data and skips the declaration, because AI-generated code is not an achievement of their own."
    },
    {
     "de": "Die Gruppe entfernt nur die Namen, gibt aber Geburtsdatum und Wohnort ein, weil diese Angaben allein niemanden identifizieren.",
     "en": "The group removes only the names but enters date of birth and place of residence, because these details alone identify no one."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Personendaten dürfen nicht in nicht freigegebene KI-Tools gelangen, deshalb ist der Weg über synthetische Beispieldaten mit anschliessender Disclosure korrekt. Die verlockende Teil-Anonymisierung ist falsch, weil Quasi-Identifikatoren wie Geburtsdatum und Wohnort in Kombination eine Re-Identifikation erlauben.",
    "en": "Personal data must not enter non-approved AI tools, so the route via synthetic sample data with subsequent disclosure is correct. The tempting partial anonymisation is wrong, because quasi-identifiers such as date of birth and place of residence combined allow re-identification."
   }
  },
  {
   "q": {
    "de": "In Ihrem ExPra erheben Sie die Daten anonym; die Teilnehmenden vergeben nur einen selbst erzeugten Code. In einem Fragebogen erreicht die mit erhobene Skala zur depressiven Symptomatik den höchstmöglichen Wert, und im Freitextfeld steht ein Hinweis auf Suizidgedanken. Da am Erhebungstermin nur wenige Personen anwesend waren, liesse sich die betroffene Person über die Anwesenheitsliste mit hoher Wahrscheinlichkeit identifizieren. Wie gehen Sie vor?",
    "en": "In your ExPra you collect the data anonymously; participants provide only a self-generated code. In one questionnaire the accompanying scale for depressive symptoms reaches the highest possible value, and the free-text field contains a reference to suicidal thoughts. Since only a few people attended that session, the person concerned could most likely be identified via the attendance list. How do you proceed?"
   },
   "a": [
    {
     "de": "Sie identifizieren die Person über die Anwesenheitsliste und sprechen sie noch am selben Tag an, weil eine mögliche Gefährdung die zugesicherte Anonymität aufhebt.",
     "en": "You identify the person via the attendance list and approach them the same day, because a possible risk overrides the anonymity that was promised."
    },
    {
     "de": "Sie belassen es bei der Anonymität und nehmen den Datensatz als Ausreisser aus der Auswertung, weil er die Verteilungsannahmen der geplanten Analyse verletzt.",
     "en": "You leave the anonymity untouched and drop the case as an outlier from the analysis, because it violates the distributional assumptions of the planned test."
    },
    {
     "de": "Sie informieren umgehend die Praktikumsleitung, klären mit ihr das weitere Vorgehen und weisen im Debriefing alle Teilnehmenden auf Beratungsangebote hin.",
     "en": "You inform the practical's supervisor immediately, clarify the next steps with them, and point all participants to counselling services in the debriefing."
    },
    {
     "de": "Sie senden allen Teilnehmenden eine anonyme Sammelmail mit Beratungsadressen und halten den Vorfall ohne Rücksprache im Prozesslog der Gruppe fest.",
     "en": "You send all participants an anonymous group email with counselling addresses and record the incident in the group's process log without consulting anyone."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Studierende tragen diese Verantwortung im ExPra nicht allein: Ein Hinweis auf Suizidgedanken gehört unverzüglich an die weisungsbefugte Praktikumsleitung, die im Rahmen des bewilligten Ethikprotokolls über das weitere Vorgehen entscheidet, und der generelle Hinweis auf Beratungsangebote im Debriefing schützt alle Teilnehmenden, ohne jemanden zu exponieren. Das eigenmächtige Ansprechen ist der verführerischste Distraktor: Die Fürsorge ist richtig motiviert, überschreitet aber die eigene Rollen- und Kompetenzgrenze und bricht die Anonymitätszusicherung, ohne dass dies im Ethikverfahren vorgesehen wäre.",
    "en": "Students in the ExPra do not carry this responsibility alone: an indication of suicidal thoughts belongs immediately with the supervising staff, who decide on the next steps within the approved ethics protocol, and the general reference to counselling services in the debriefing protects all participants without exposing anyone. Approaching the person on one's own is the most tempting distractor: the caring impulse is rightly motivated, but it exceeds the students' role and competence and breaks the assurance of anonymity without any provision for this in the ethics procedure."
   }
  }
 ],
 "06SM200-s11": [
  {
   "q": {
    "de": "Eine Querschnittsstudie vergleicht 25-, 50- und 75-Jährige in einem Test des schlussfolgernden Denkens und findet, dass die Leistung mit dem Alter sinkt. Die Autorinnen schliessen daraus auf altersbedingten kognitiven Abbau. Welcher Einwand stellt diesen Schluss am stärksten in Frage?",
    "en": "A cross-sectional study compares 25-, 50- and 75-year-olds on a test of inductive reasoning and finds that performance declines with age. The authors conclude that this reflects age-related cognitive decline. Which objection challenges that conclusion most strongly?"
   },
   "a": [
    {
     "de": "Selektive Mortalität sorgt dafür, dass in den älteren Gruppen nur besonders leistungsfähige Personen verbleiben und der Abfall unterschätzt wird.",
     "en": "Selective mortality means that only especially capable people remain in the older groups, so the decline is underestimated."
    },
    {
     "de": "Wiederholtes Testen erzeugt Übungseffekte, welche die Leistung der älteren Gruppen anheben und den Abfall verdecken.",
     "en": "Repeated testing produces practice effects that raise the older groups' scores and mask the decline."
    },
    {
     "de": "Die Altersgruppen stammen aus verschiedenen Geburtskohorten mit ungleichen Bildungschancen, sodass der Abfall teils ein Kohorteneffekt ist.",
     "en": "The age groups come from different birth cohorts with unequal educational opportunities, so the decline is partly a cohort effect."
    },
    {
     "de": "Extreme Ausgangswerte nähern sich bei erneuter Messung dem Mittel an, wodurch der Abfall in den älteren Gruppen überzeichnet wird.",
     "en": "Extreme baseline values regress toward the mean on retesting, which exaggerates the decline in the older groups."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "In Querschnittsdesigns werden verschiedene Altersgruppen einmalig verglichen, sodass Alter und Geburtskohorte untrennbar konfundiert sind; ein scheinbarer Altersabfall kann auf ungleiche Bildungs- und Lebensbedingungen der Jahrgänge zurückgehen (Schaie, Seattle Longitudinal Study). Übungseffekte und Regression zur Mitte setzen wiederholte Messungen derselben Personen voraus und entfallen hier vollständig. Selektive Mortalität wirkt zwar auch im Querschnitt, weil die ältesten Gruppen aus Überlebenden bestehen; sie würde den beobachteten Abfall aber abschwächen und kann ihn deshalb nicht erzeugen — als Einwand gegen den Abbauschluss taugt sie nicht.",
    "en": "In cross-sectional designs different age groups are compared only once, so age and birth cohort are inseparably confounded; an apparent age-related decline may reflect unequal educational and living conditions across cohorts (Schaie, Seattle Longitudinal Study). Practice effects and regression to the mean require repeated testing of the same people and therefore do not apply here at all. Selective mortality does operate in cross-sectional samples too, since the oldest groups consist of survivors, but it would attenuate the observed decline and hence cannot produce it — it is no objection to the decline conclusion."
   }
  },
  {
   "q": {
    "de": "Eine Seminargruppe untersucht Zukunftsvorstellungen über die Lebensspanne hinweg und hat 400 offene Antworten von 14- bis 85-Jährigen. Ein Sprachmodell ordnet sie einem publizierten Kategoriensystem zu; an 40 doppelt codierten Antworten stimmt es zu 92 Prozent mit der geschulten Codiererin überein, danach codiert es die restlichen 360 allein. Welcher Einwand wiegt am schwersten?",
    "en": "A seminar group is studying ideas about the future across the lifespan and has 400 open-ended answers from people aged 14 to 85. A language model assigns them to a published category system; on 40 double-coded answers it agrees with the trained human coder 92 per cent of the time, after which it codes the remaining 360 on its own. Which objection carries the most weight?"
   },
   "a": [
    {
     "de": "Die Pilotmenge von 40 Antworten ist zu klein; eine Übereinstimmung lässt sich erst berechnen, wenn mindestens die Hälfte des Materials doppelt codiert ist.",
     "en": "The pilot set of 40 answers is too small; agreement can only be computed once at least half of the material has been double-coded."
    },
    {
     "de": "Die prozentuale Übereinstimmung ist nicht zufallskorrigiert und zeigt nicht, ob das Modell in allen Altersgruppen gleich genau codiert.",
     "en": "Percentage agreement is not corrected for chance and does not show whether the model codes equally accurately across all age groups."
    },
    {
     "de": "Das Modell müsste jede Antwort zweimal codieren, damit die Stabilität seiner Zuordnungen über beide Durchgänge hinweg belegt ist.",
     "en": "The model would have to code every answer twice so that the stability of its assignments across both runs is established."
    },
    {
     "de": "Ein zweites Sprachmodell müsste dieselben Antworten codieren, damit die Übereinstimmung der beiden Modelle die Codierung absichert.",
     "en": "A second language model would have to code the same answers so that agreement between the two models secures the coding."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Prozentuale Übereinstimmung zählt zufällige Treffer mit und fällt bei ungleich besetzten Kategorien fast zwangsläufig hoch aus; nötig sind ein zufallskorrigiertes Mass wie Cohens Kappa und eine getrennte Genauigkeitsprüfung je Altersgruppe. Codiert das Modell die Formulierungen älterer Befragter systematisch schlechter, entsteht ein Altersunterschied, den es gar nicht gibt. Die Doppelcodierung durch dasselbe Modell verführt, weil sie nach Reliabilitätsprüfung aussieht; sie zeigt aber nur die Konsistenz des Modells mit sich selbst. Eine feste Mindestquote doppelt codierten Materials gibt es nicht — entscheidend ist, womit und wofür die Übereinstimmung geprüft wird.",
    "en": "Percentage agreement counts chance hits and comes out high almost automatically when categories are unevenly filled; what is needed is a chance-corrected coefficient such as Cohen's kappa plus a separate accuracy check for each age group. If the model codes older respondents' phrasing systematically worse, it manufactures an age difference that does not exist. Double coding by the same model is tempting because it looks like a reliability check, yet it only shows the model's consistency with itself. There is no fixed minimum quota of double-coded material — what matters is with which coefficient and for which purpose agreement is checked."
   }
  },
  {
   "q": {
    "de": "Eine Seminararbeit wertet eine Längsschnittstudie mit fünf Messzeitpunkten über das Erwachsenenalter aus. Für die Lebenszufriedenheit wird eine mittlere Verlaufskurve geschätzt: leichter Abfall bis etwa fünfzig, danach wieder Anstieg. Die Arbeit folgert, so verlaufe die Lebenszufriedenheit im Erwachsenenalter. Welcher Einwand trifft den Kern?",
    "en": "A seminar paper analyses a longitudinal study with five measurement occasions across adulthood. For life satisfaction an average trajectory is estimated: a slight decline until about fifty, then a rise again. The paper concludes that this is how life satisfaction unfolds in adulthood. Which objection hits the core of the problem?"
   },
   "a": [
    {
     "de": "Die Kurve müsste mit einem kubischen statt einem quadratischen Term modelliert werden, sonst wird der Wiederanstieg nach fünfzig systematisch unterschätzt.",
     "en": "The curve would have to be modelled with a cubic rather than a quadratic term, otherwise the rise after fifty is systematically underestimated."
    },
    {
     "de": "Mit fünf Messzeitpunkten lässt sich keine gekrümmte Kurve schätzen; für einen quadratischen Verlauf sind mindestens zehn Wellen pro Person nötig.",
     "en": "Five measurement occasions cannot support a curved trajectory; a quadratic course requires at least ten waves per person."
    },
    {
     "de": "Die mittlere Kurve beschreibt nur den Durchschnitt; ob die einzelnen Personen ihr folgen, ist damit weder gezeigt noch geprüft.",
     "en": "The average curve describes only the mean; whether individual people follow it is neither shown nor tested by this."
    },
    {
     "de": "Das Alter müsste am Stichprobenmittel zentriert werden, weil die Kurve sonst ihren Tiefpunkt an der falschen Stelle ausweist.",
     "en": "Age would have to be centred at the sample mean, because otherwise the curve places its low point in the wrong position."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Eine mittlere Verlaufskurve mittelt über Personen hinweg; erst die Streuung der individuellen Verläufe zeigt, ob sich alle ähnlich entwickeln oder ob gegenläufige Teilgruppen zu einem Durchschnitt verschmelzen, der niemanden beschreibt. Genau diese interindividuellen Unterschiede in der intraindividuellen Veränderung sind der Kern der Lebensspannen-Methodologie (Baltes & Nesselroade). Der kubische Term verführt, weil er die Kurvenform verbessert; er bleibt jedoch eine Aussage über den Durchschnitt. Rechnerisch genügen für einen quadratischen Verlauf drei Messzeitpunkte, und die Zentrierung des Alters verschiebt nur die Interpretation des Achsenabschnitts, nicht die Lage des Tiefpunkts.",
    "en": "An average trajectory averages across people; only the spread of the individual trajectories reveals whether everyone develops similarly or whether opposing subgroups merge into a mean that describes nobody. These interindividual differences in intraindividual change are precisely the core of lifespan methodology (Baltes & Nesselroade). The cubic term is tempting because it improves the shape of the curve, but it remains a statement about the average. Mathematically, three measurement occasions suffice for a quadratic course, and centring age only shifts the interpretation of the intercept, not the location of the low point."
   }
  }
 ],
 "06SM200-103": [
  {
   "q": {
    "de": "Eine Studentin passt Polynomregressionen steigender Ordnung an denselben Datensatz an. Das Trainings-R² steigt fast auf 1.0, doch die Vorhersage in einem zurückgehaltenen Testset ist bei mittlerer Komplexität am besten und wird beim komplexesten Modell wieder schlechter. Was zeigt dieses Muster?",
    "en": "A student fits polynomial regressions of increasing order to the same data set. Training R² rises to nearly 1.0, yet prediction on a held-out test set is best at moderate complexity and worsens again for the most complex model. What does this pattern indicate?"
   },
   "a": [
    {
     "de": "Das komplexeste Modell unterschätzt die Struktur der Daten systematisch; sein hoher Bias erklärt die schlechte Testleistung.",
     "en": "The most complex model systematically underfits the data structure; its high bias explains the poor test performance."
    },
    {
     "de": "Das komplexeste Modell passt sich dem Rauschen der Trainingsdaten an; seine hohe Varianz erklärt die schlechte Testleistung.",
     "en": "The most complex model fits the noise in the training data; its high variance explains the poor test performance."
    },
    {
     "de": "Der Testdatensatz ist für stabile Schätzungen zu klein; die schwankende Testleistung erklärt sich aus reinem Stichprobenzufall.",
     "en": "The test set is too small for stable estimates; the fluctuating test performance is due to pure sampling chance."
    },
    {
     "de": "Die Prädiktoren sind hoch korreliert; die dadurch aufgeblähte Trainings-Passung erklärt die schlechte Testleistung.",
     "en": "The predictors are highly correlated; the resulting inflated training fit explains the poor test performance."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Ein nahezu perfekter Trainings-Fit bei gleichzeitig schlechter Testleistung ist die Signatur von Overfitting: Das komplexe Modell modelliert das Rauschen der Trainingsstichprobe mit und hat dadurch hohe Varianz und geringen Bias. Die Bias-Erklärung kehrt den Zusammenhang um, denn ein hoher Bias zeigt sich als Underfitting mit bereits schlechter Trainings-Passung.",
    "en": "A near-perfect training fit combined with poor test performance is the signature of overfitting: the complex model also captures the noise of the training sample and thus has high variance and low bias. The bias explanation reverses the relationship, because high bias shows up as underfitting with an already poor training fit."
   }
  },
  {
   "q": {
    "de": "Eine Studentin fragt ein LLM, welcher Test zwei Gruppenmittelwerte vergleicht; es empfiehlt selbstsicher einen unabhängigen t-Test. Die Daten sind stark rechtsschief, die Varianzen ungleich und n klein. Was ist die angemessene evaluierende Reaktion (KI6)?",
    "en": "A student asks an LLM which test compares two group means; it confidently recommends an independent-samples t-test. The data are strongly right-skewed, variances unequal, and n small. What is the appropriate evaluative response (KI6)?"
   },
   "a": [
    {
     "de": "Man folgt der Empfehlung, da der t-Test robust ist und bei zwei Gruppen fast immer die passende Wahl darstellt.",
     "en": "You follow the recommendation, since the t-test is robust and is almost always the right choice for two groups."
    },
    {
     "de": "Man ersetzt den t-Test durch eine ANOVA, weil diese mehr Annahmen zugleich abdeckt und robuster ausfällt.",
     "en": "You replace the t-test with an ANOVA, because it covers more assumptions at once and is more robust."
    },
    {
     "de": "Man prüft die Verteilungs- und Varianzannahmen und zieht bei Verletzung ein robustes oder nichtparametrisches (verteilungsfreies) Verfahren in Betracht.",
     "en": "You check the distributional and variance assumptions and, if they are violated, consider a robust or nonparametric procedure."
    },
    {
     "de": "Man verlangt vom Modell eine höhere Konfidenzangabe und übernimmt die Empfehlung erst ab hinreichender Sicherheit.",
     "en": "You ask the model for a higher stated confidence and adopt the recommendation only once it is sufficiently certain."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "KI6 Evaluieren heisst, einen KI-Vorschlag gegen die statistischen Annahmen zu prüfen, nicht gegen sein selbstsicheres Auftreten: Bei starker Schiefe, Varianzheterogenität und kleinem n ist ein robustes oder nichtparametrisches (verteilungsfreies) Verfahren angezeigt. Der Wechsel zur ANOVA hilft nicht, weil sie bei zwei Gruppen rechnerisch dem t-Test entspricht und dieselben Annahmen voraussetzt.",
    "en": "KI6 evaluation means testing an AI suggestion against the statistical assumptions, not against how confidently it is stated: with strong skew, heterogeneous variances and small n, a robust or nonparametric procedure is indicated. Switching to ANOVA does not help, because for two groups it is arithmetically equivalent to the t-test and rests on the same assumptions."
   }
  },
  {
   "q": {
    "de": "Ein Doktorand prüft, ob Zeitdruck die Reaktionszeit erhöht. 40 Versuchspersonen bearbeiten je 30 Durchgänge pro Bedingung, also 60 insgesamt. Er trägt alle 2400 Durchgänge in eine Tabelle ein und rechnet eine gewöhnliche lineare Regression, in der jeder Durchgang als eine unabhängige Beobachtung zählt. Wo liegt der entscheidende methodische Fehler?",
    "en": "A doctoral student tests whether time pressure increases reaction time. Each of 40 participants completes 30 trials per condition, 60 in total. He enters all 2400 trials into one table and runs an ordinary linear regression in which every trial counts as one independent observation. Where does the decisive methodological error lie?"
   },
   "a": [
    {
     "de": "Die Reaktionszeiten sind rechtsschief verteilt; eine Log-Transformation der abhängigen Variable stellt die Gültigkeit der Inferenz wieder her.",
     "en": "Reaction times are right-skewed; a log transformation of the dependent variable restores the validity of the inference."
    },
    {
     "de": "Die Zahl der Einzeldurchgänge treibt jeden Effekt in die Signifikanz; eine Bonferroni-Korrektur des Alpha-Niveaus stellt die Inferenz wieder her.",
     "en": "The sheer number of trials pushes any effect into significance; a Bonferroni correction of the alpha level restores the inference."
    },
    {
     "de": "Die Durchgänge einer Person sind voneinander abhängig; ein gemischtes Modell mit personenspezifischen Zufallseffekten schätzt die Standardfehler auf der richtigen Ebene.",
     "en": "Trials from one person are dependent on one another; a mixed model with person-specific random effects estimates the standard errors at the right level."
    },
    {
     "de": "Die Stichprobe von 40 Personen ist für stabile Schätzungen zu klein; erst eine grössere Personenzahl macht die Inferenz belastbar.",
     "en": "The sample of 40 people is too small for stable estimates; only a larger number of participants makes the inference trustworthy."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Durchgänge derselben Person sind nicht unabhängig, und die gewöhnliche Regression behandelt 2400 abhängige Beobachtungen wie 2400 unabhängige: Die Standardfehler fallen zu klein aus und die Rate falsch positiver Befunde steigt. Ein gemischtes Modell mit personenspezifischen Zufallseffekten bildet diese Verschachtelung ab und schätzt die Unsicherheit auf der Ebene, auf der die Personen tatsächlich variieren. Die verlockende Log-Transformation greift eine reale Eigenschaft von Reaktionszeiten auf, ändert aber nichts an der verletzten Unabhängigkeitsannahme.",
    "en": "Trials from the same person are not independent, and the ordinary regression treats 2400 dependent observations as if they were 2400 independent ones: standard errors come out too small and the rate of false positives rises. A mixed model with person-specific random effects captures this nesting and estimates uncertainty at the level at which people actually vary. The tempting log transformation picks up a real property of reaction times but does nothing about the violated independence assumption."
   }
  }
 ],
 "06SM200-401": [
  {
   "q": {
    "de": "Der Dexamethason-Suppressionstest zeigt bei melancholischer Depression oft eine fehlende Cortisol-Suppression (Sensitivität rund 67%, Spezifität rund 95%), doch fehlende Suppression tritt auch bei anderen Störungen auf. Ein Patient zeigt eine fehlende Suppression. Welche Interpretation ist korrekt?",
    "en": "The dexamethasone suppression test often shows non-suppression of cortisol in melancholic depression (sensitivity about 67%, specificity about 95%), but non-suppression also occurs in other disorders. A patient shows non-suppression. Which interpretation is correct?"
   },
   "a": [
    {
     "de": "Ein Suppressions-Ergebnis im Normbereich schliesst eine Depression aus, da die hohe Spezifität falsch-negative Befunde verhindert.",
     "en": "A normal suppression result rules out depression, because the high specificity prevents false-negative findings."
    },
    {
     "de": "Eine fehlende Suppression erhöht die Wahrscheinlichkeit einer melancholischen Depression, beweist sie wegen mangelnder Störungsspezifität aber nicht.",
     "en": "Non-suppression raises the probability of melancholic depression, but does not prove it, given the lack of disorder specificity."
    },
    {
     "de": "Eine fehlende Suppression identifiziert die melancholische Depression eindeutig, da die Spezifität mit 95 Prozent sehr hoch ausfällt.",
     "en": "Non-suppression identifies melancholic depression unambiguously, since specificity is very high at 95 percent."
    },
    {
     "de": "Ein Suppressions-Ergebnis im Normbereich belegt eine intakte HPA-Achse, da die Sensitivität mit 67 Prozent hinreichend hoch ausfällt.",
     "en": "A normal suppression result proves an intact HPA axis, since sensitivity is sufficiently high at 67 percent."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Fehlende Suppression stützt den Verdacht, ist aber nicht beweisend, weil derselbe Befund auch bei anderen Störungen auftritt (fehlende Störungsspezifität). Der scheinbar naheliegende Ausschluss über ein Normalergebnis versagt, weil eine Sensitivität von rund 67 Prozent zahlreiche falsch-negative Fälle zulässt; Sensitivität, nicht Spezifität, steuert das sichere Ausschliessen.",
    "en": "Non-suppression supports the suspicion but is not conclusive, because the same finding also occurs in other disorders (lack of disorder specificity). The seemingly obvious exclusion via a normal result fails because a sensitivity of about 67 percent leaves many false negatives; sensitivity, not specificity, governs confident ruling out."
   }
  },
  {
   "q": {
    "de": "Ein LLM erklärt, eine psychologische Intervention 'senkt die Cortisol-Reaktivität, was die Hippocampus-Neurone direkt repariert und dadurch die Depression heilt'. Welche Aussage sollten Sie als wahrscheinlichen Overclaim gegen die Primärliteratur prüfen?",
    "en": "An LLM explains that a psychological intervention 'lowers cortisol reactivity, which directly repairs hippocampal neurons and thereby cures the depression'. Which statement should you flag as a likely overclaim to check against the primary literature?"
   },
   "a": [
    {
     "de": "Die Aussage, dass Cortisol-Reaktivität mit erlebter Stressbelastung zusammenhängt, ist als etabliert einzustufen.",
     "en": "The statement that cortisol reactivity is associated with experienced stress load can be regarded as established."
    },
    {
     "de": "Die Aussage, dass die HPA-Achse an der Regulation der Cortisol-Ausschüttung beteiligt ist, ist als etabliert einzustufen.",
     "en": "The statement that the HPA axis is involved in regulating cortisol release can be regarded as established."
    },
    {
     "de": "Die Aussage, dass chronischer Stress die Cortisol-Regulation verändern kann, ist als etabliert einzustufen.",
     "en": "The statement that chronic stress can alter cortisol regulation can be regarded as established."
    },
    {
     "de": "Die Aussage, dass die Intervention Cortisol direkt in geheilte Hippocampus-Neurone übersetzt und die Depression heilt, ist zu prüfen.",
     "en": "The statement that the intervention directly translates cortisol into healed hippocampal neurons and cures the depression should be checked."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Zu prüfen ist die Aussage mit der überzogenen Kausalkette: Eine Intervention, die Cortisol 'direkt' in 'geheilte' Neurone übersetzt und Depression 'heilt', behauptet einen belegten Mechanismus, den die Primärliteratur so nicht trägt. Die drei übrigen Aussagen zu Stresszusammenhang, HPA-Beteiligung und stressbedingter Dysregulation sind gut belegt und daher gerade nicht die Halluzinationskandidaten.",
    "en": "The statement to check is the one with the overstated causal chain: an intervention that 'directly' translates cortisol into 'healed' neurons and 'cures' depression asserts an established mechanism that the primary literature does not support in this form. The other three statements about the stress association, HPA involvement and stress-related dysregulation are well documented and are therefore precisely not the hallucination candidates."
   }
  },
  {
   "q": {
    "de": "Sie arbeiten im psychoonkologischen Konsiliardienst eines Kantonsspitals. Eine 52-jährige Patientin unter laufender Chemotherapie berichtet über starke Erschöpfung, Appetitverlust, gestörten Schlaf und sozialen Rückzug. Eine gedrückte Stimmung verneint sie; Freude an vertrauten Tätigkeiten, Selbstwert und Zukunftssicht beschreibt sie als unverändert. Welche Einschätzung halten Sie im Konsilbericht fest?",
    "en": "You work in the psycho-oncology consultation service of a cantonal hospital. A 52-year-old patient undergoing chemotherapy reports severe exhaustion, loss of appetite, disturbed sleep and social withdrawal. She denies low mood; she describes her enjoyment of familiar activities, her self-worth and her outlook on the future as unchanged. Which assessment do you record in your consultation report?"
   },
   "a": [
    {
     "de": "Mittelgradige depressive Episode: Die Zahl der erfüllten Symptomkriterien rechtfertigt die Diagnose unabhängig von der Krebsbehandlung.",
     "en": "Moderate depressive episode: the number of symptom criteria met justifies the diagnosis independently of the cancer treatment."
    },
    {
     "de": "Krankheitsverhalten unter Krebsbehandlung: Die somatischen Beschwerden sind krankheits- und therapiebedingt erklärbar, affektiv-kognitive Kernsymptome fehlen.",
     "en": "Sickness behaviour under cancer treatment: the somatic complaints are explicable by the illness and its treatment, and the affective-cognitive core symptoms are absent."
    },
    {
     "de": "Somatoforme Verarbeitung der Krebsdiagnose: Die körperlichen Beschwerden binden die psychische Belastung und treten deshalb ohne gedrückte Stimmung auf.",
     "en": "Somatoform processing of the cancer diagnosis: the physical complaints bind the psychological distress and therefore occur without low mood."
    },
    {
     "de": "Nebenwirkung der Chemotherapie: Die Beschwerden sind rein somatisch und machen eine psychologische Einschätzung während der Behandlung entbehrlich.",
     "en": "Side effect of the chemotherapy: the complaints are purely somatic and make a psychological assessment during the treatment unnecessary."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Krebserkrankung und Chemotherapie gehen mit proinflammatorischer Aktivierung einher; das daraus folgende Krankheitsverhalten aus Fatigue, Appetitverlust, Schlafstörung und Rückzug überschneidet sich weitgehend mit den somatischen Depressionskriterien (Dantzer et al., 2008). Diagnostisch tragen deshalb die affektiv-kognitiven Symptome – gedrückte Stimmung, Anhedonie, Wertlosigkeit, Hoffnungslosigkeit –, und genau diese sind hier unauffällig. Das blosse Zählen erfüllter Symptomkriterien ist der häufigste Fehler; «somatoform» trifft ebenso wenig zu, weil eine bekannte körperliche Ursache vorliegt. Angezeigt bleibt eine psychoonkologische Begleitung mit Verlaufsbeobachtung: Die Einschätzung ändert sich, sobald affektiv-kognitive Symptome hinzukommen.",
    "en": "Cancer and chemotherapy are accompanied by pro-inflammatory activation; the resulting sickness behaviour of fatigue, appetite loss, disturbed sleep and withdrawal overlaps substantially with the somatic criteria for depression (Dantzer et al., 2008). Diagnostically, the affective-cognitive symptoms therefore carry the weight – low mood, anhedonia, worthlessness, hopelessness – and these are precisely the ones that are unremarkable here. Simply counting the symptom criteria that are met is the most common error; «somatoform» is equally inapplicable, because a known physical cause is present. Psycho-oncological support with monitoring over time remains indicated: the assessment changes as soon as affective-cognitive symptoms appear."
   }
  }
 ],
 "06SM200-402": [
  {
   "q": {
    "de": "Ein 26-jähriger Patient erlebt seit acht Monaten wiederkehrende depressive Episoden mit Verfolgungswahn und kommentierenden Stimmen. Nach vollständiger Remission der depressiven Symptomatik bestehen Wahn und Stimmen noch drei Wochen weiter. Welche Verdachtsdiagnose passt am besten zu diesem Verlauf?",
    "en": "A 26-year-old patient has experienced recurrent depressive episodes with persecutory delusions and commenting voices for eight months. After full remission of the depressive symptoms, the delusions and voices persist for another three weeks. Which working diagnosis best fits this course?"
   },
   "a": [
    {
     "de": "Major Depression mit psychotischen Merkmalen, da die psychotische Symptomatik im Rahmen der depressiven Episoden begann",
     "en": "Major depression with psychotic features, because the psychotic symptoms first emerged during the depressive episodes"
    },
    {
     "de": "Schizophrenie, da kommentierende Stimmen als charakteristisches Symptom den diagnostischen Ausschlag geben",
     "en": "Schizophrenia, because commenting voices are a characteristic symptom that settles the diagnostic question"
    },
    {
     "de": "Schizoaffektive Störung, da die psychotische Symptomatik mindestens zwei Wochen ohne affektive Episode fortbesteht",
     "en": "Schizoaffective disorder, because the psychotic symptoms persist for at least two weeks without a mood episode"
    },
    {
     "de": "Wahnhafte Störung, da der Verfolgungswahn über den gesamten Verlauf das klinisch führende Symptom darstellt",
     "en": "Delusional disorder, because the persecutory delusions remain the clinically leading symptom across the course"
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Die schizoaffektive Störung verlangt psychotische Symptome während mindestens zwei Wochen ohne affektive Episode, was die drei Wochen nach der Remission erfüllen; zugleich prägen die affektiven Episoden die Mehrheit der Krankheitsdauer. Die Major Depression mit psychotischen Merkmalen ist der verführerischste Distraktor, scheidet aber aus, weil dort psychotische Symptome ausschliesslich innerhalb der affektiven Episoden auftreten dürfen.",
    "en": "Schizoaffective disorder requires psychotic symptoms for at least two weeks in the absence of a mood episode, which the three weeks after remission satisfy; at the same time, mood episodes are present for the majority of the illness. Major depression with psychotic features is the most seductive distractor, but it is ruled out because there the psychotic symptoms may occur only within the mood episodes."
   }
  },
  {
   "q": {
    "de": "Im Selbstlernprogramm liefert eine KI zu einer Fallvignette die Analyse: «Der Patient hört Stimmen, also liegt eine Schizophrenie vor.» Mit welchem Vorgehen prüfen Sie diese KI-Fallanalyse fachlich am wirksamsten?",
    "en": "In the self-study programme, an AI analyses a case vignette as follows: 'The patient hears voices, so this is schizophrenia.' Which approach is the most effective professional check of this AI case analysis?"
   },
   "a": [
    {
     "de": "Die Analyse gegen die vollständigen Klassifikationskriterien prüfen, einschliesslich Zeit-, Funktions- und Ausschlusskriterien",
     "en": "Check the analysis against the full classification criteria, including duration, functioning and exclusion criteria"
    },
    {
     "de": "Die KI um eine Einschätzung ihrer eigenen Sicherheit bitten und die Diagnose bei hoher angegebener Konfidenz übernehmen",
     "en": "Ask the AI to rate its own certainty and adopt the diagnosis whenever it reports a high level of confidence"
    },
    {
     "de": "Ein zweites Sprachmodell mit derselben Vignette beauftragen und die Übereinstimmung beider Modelle als Bestätigung werten",
     "en": "Give the same vignette to a second language model and treat agreement between the two models as confirmation"
    },
    {
     "de": "Die Ausführlichkeit und sprachliche Kohärenz der KI-Begründung als Indikator für die fachliche Qualität heranziehen",
     "en": "Use the detail and linguistic coherence of the AI's reasoning as an indicator of its professional quality"
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Eine einzelne akustische Halluzination erfüllt die Schizophrenie-Diagnose nicht; erst die Prüfung von Symptomanzahl, Dauer-, Funktions- und Ausschlusskriterien deckt den Fehlschluss der KI auf. Der Vergleich mit einem zweiten Sprachmodell wirkt wie eine unabhängige Bestätigung, ist es aber nicht, weil Modelle ähnliche Trainingsdaten und damit dieselben Fehlkonzepte teilen können.",
    "en": "A single auditory hallucination does not meet the criteria for schizophrenia; only checking the number of symptoms plus duration, functioning and exclusion criteria exposes the AI's fallacy. Comparing with a second language model feels like independent confirmation but is not, because models can share similar training data and therefore the same misconceptions."
   }
  },
  {
   "q": {
    "de": "Sie absolvieren ein Praktikum im psychologischen Dienst eines Pflegezentrums. Eine 79-jährige Bewohnerin wird seit drei Tagen wegen eines Harnwegsinfekts behandelt. Sie ist tagsüber schläfrig, abends unruhig, ihre Aufmerksamkeit schwankt innerhalb weniger Stunden, und das vertraute Personal bleibt ihr zeitweise fremd. Vor einer Woche war sie wach und orientiert. Welche Verdachtsdiagnose und welche Konsequenz sind fachlich angezeigt?",
    "en": "You are doing a placement in the psychological service of a nursing home. A 79-year-old resident has been treated for a urinary tract infection for three days. She is drowsy during the day and restless in the evening, her attention fluctuates within a few hours, and familiar staff seem strange to her at times. A week ago she was alert and oriented. Which working diagnosis and which consequence are professionally indicated?"
   },
   "a": [
    {
     "de": "Beginnende Demenz: Eine neuropsychologische Abklärung des Gedächtnisses in den nächsten Wochen bestimmt das Ausmass des Abbaus.",
     "en": "Incipient dementia: a neuropsychological assessment of memory over the coming weeks will determine the extent of the decline."
    },
    {
     "de": "Delir bei körperlicher Ursache: Der akute Beginn und die schwankende Aufmerksamkeit erfordern noch heute eine ärztliche Abklärung.",
     "en": "Delirium with a physical cause: the acute onset and the fluctuating attention require a medical work-up on the same day."
    },
    {
     "de": "Depressive Pseudodemenz: Ein Screening auf Altersdepression erklärt die kognitiven Einbussen und den Rückzug am sparsamsten.",
     "en": "Depressive pseudodementia: a screening for late-life depression explains the cognitive decline and the withdrawal most parsimoniously."
    },
    {
     "de": "Anpassungsstörung nach dem Infekt: Reorientierungshilfen und stützende Gespräche der Pflege genügen als erste Massnahme.",
     "en": "Adjustment disorder following the infection: reorientation aids and supportive conversations by the nursing staff suffice as a first measure."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Akuter Beginn innerhalb von Tagen, fluktuierender Verlauf sowie die Störung von Aufmerksamkeit und Bewusstseinsklarheit sind die Leitmerkmale des Delirs; ein Harnwegsinfekt ist im höheren Alter ein typischer Auslöser, die Ursache ist behandelbar, und ein unerkanntes Delir erhöht Morbidität und Mortalität. Der Demenz-Distraktor ist der attraktivste, weil Alter und kognitive Einbussen gut dazu passen; er übersieht jedoch, dass sich eine Demenz über Monate entwickelt und den Wechsel von voller Orientierung zu Verwirrtheit innerhalb einer Woche nicht erklärt. Auch eine Altersdepression beginnt schleichend und erklärt keine stundenweise schwankende Aufmerksamkeit. Ein Delir kann sich auf eine bestehende Demenz aufpfropfen – auch dann gilt zuerst die somatische Abklärung.",
    "en": "Acute onset within days, a fluctuating course and the disturbance of attention and clarity of consciousness are the hallmarks of delirium; a urinary tract infection is a typical trigger in old age, the cause is treatable, and an unrecognised delirium increases morbidity and mortality. The dementia distractor is the most attractive one because age and cognitive decline fit it well; it overlooks, however, that dementia develops over months and does not explain a shift from full orientation to confusion within a week. Late-life depression, too, begins insidiously and does not account for attention fluctuating within hours. A delirium can be superimposed on an existing dementia – even then the somatic work-up comes first."
   }
  }
 ],
 "06SM200-300": [
  {
   "q": {
    "de": "Ein neuer Extraversionsfragebogen zeigt Cronbachs Alpha von .92 und eine Retest-Reliabilität von r = .88. Er korreliert jedoch nur zu r = .10 mit beobachtetem geselligem Verhalten und zu r = .81 mit einem etablierten Mass für soziale Erwünschtheit. Wie beurteilen Sie das Verfahren testtheoretisch?",
    "en": "A new extraversion questionnaire shows a Cronbach's alpha of .92 and a retest reliability of r = .88. However, it correlates only r = .10 with observed sociable behaviour and r = .81 with an established measure of social desirability. How do you evaluate the instrument psychometrically?"
   },
   "a": [
    {
     "de": "Die Reliabilität ist ungenügend, weil ein wirklich reliables Verfahren auch mit Verhaltensdaten substanziell korrelieren müsste",
     "en": "Its reliability is insufficient, because a truly reliable instrument would also correlate substantially with behavioural data"
    },
    {
     "de": "Das Verfahren misst präzise, doch die konvergenten und diskriminanten Befunde sprechen gegen die Konstruktinterpretation",
     "en": "The instrument measures precisely, but the convergent and discriminant findings argue against the construct interpretation"
    },
    {
     "de": "Das Verfahren ist insgesamt hochwertig, weil ein Alpha über .90 sowohl Messgenauigkeit als auch Validität hinreichend belegt",
     "en": "The instrument is of high overall quality, because an alpha above .90 sufficiently demonstrates both precision and validity"
    },
    {
     "de": "Die Objektivität ist verletzt, weil die hohe Korrelation mit sozialer Erwünschtheit auf Fehler in der Auswertung hinweist",
     "en": "Its objectivity is compromised, because the high correlation with social desirability points to errors in the scoring process"
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Hohe interne Konsistenz und Retest-Stabilität belegen Messpräzision, doch die fehlende Konvergenz mit Verhaltensdaten und die hohe Korrelation mit sozialer Erwünschtheit verletzen konvergente und diskriminante Validität: fraglich ist, ob überhaupt Extraversion gemessen wird. Der Alpha-Distraktor verführt, weil Reliabilität notwendig für Validität ist; hinreichend ist sie nie, ein Verfahren kann präzise das Falsche messen.",
    "en": "High internal consistency and retest stability demonstrate precision, but the missing convergence with behavioural data and the high correlation with social desirability violate convergent and discriminant validity: it is doubtful whether extraversion is being measured at all. The alpha distractor is tempting because reliability is necessary for validity; it is never sufficient, as an instrument can precisely measure the wrong thing."
   }
  },
  {
   "q": {
    "de": "Sie geben einem LLM zehn Big-Five-Items mit der Instruktion, «als extravertierte Person» zu antworten. Die Antworten fallen intern hochkonsistent aus. Warum liegt trotzdem keine valide Persönlichkeitsmessung vor?",
    "en": "You give an LLM ten Big Five items with the instruction to answer 'as an extraverted person'. The responses turn out to be highly internally consistent. Why is this still not a valid personality measurement?"
   },
   "a": [
    {
     "de": "Weil Selbstauskünfte im Fragebogenformat ohnehin keine belastbaren Indikatoren für Persönlichkeitsmerkmale liefern",
     "en": "Because self-reports in questionnaire format do not provide robust indicators of personality traits in the first place"
    },
    {
     "de": "Weil für Sprachmodelle noch keine Normstichprobe existiert und die Werte deshalb nicht eingeordnet werden können",
     "en": "Because no norm sample exists for language models yet, so the resulting scores cannot be placed on a reference scale"
    },
    {
     "de": "Weil die interne Konsistenz der Antworten verdächtig hoch ausfällt und damit auf redundante Items im Verfahren hinweist",
     "en": "Because the internal consistency of the responses is suspiciously high, which indicates redundant items in the instrument"
    },
    {
     "de": "Weil dem Antwortverhalten kein stabiles Merkmal zugrunde liegt, sondern promptabhängige Textsimulation ohne Messgegenstand",
     "en": "Because no stable trait underlies the response behaviour, only prompt-dependent text simulation with nothing to measure"
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Messung setzt ein stabiles latentes Merkmal voraus, das die Antworten verursacht; ein LLM erzeugt promptabhängige Textmuster ohne solchen Messgegenstand, weshalb Konstruktvalidität hier gar nicht definiert ist. Die fehlende Normstichprobe verführt als Erklärung, greift aber zu kurz: Auch mit Normwerten bliebe unklar, was überhaupt gemessen würde.",
    "en": "Measurement presupposes a stable latent trait that causes the responses; an LLM generates prompt-dependent text patterns with no such object of measurement, which is why construct validity is not even defined here. The missing norm sample is a tempting explanation but falls short: even with norms, it would remain unclear what is actually being measured."
   }
  },
  {
   "q": {
    "de": "In einer Laufbahnberatung sagt ein 45-jähriger Klient, er wolle im Beruf zuverlässiger und gelassener werden, halte das aber für aussichtslos: Persönlichkeit sei ab dreissig «wie in Gips gegossen». Ein Persönlichkeitsinventar weist ihn gegenüber der Normstichprobe unterdurchschnittlich in Gewissenhaftigkeit und überdurchschnittlich in Neurotizismus aus. Welche Auskunft ist fachlich korrekt?",
    "en": "In a career counselling session, a 45-year-old client says he wants to become more reliable and more even-tempered at work but considers it hopeless: personality, he says, is \"set like plaster\" after thirty. A personality inventory places him below the norm sample average in conscientiousness and above it in neuroticism. Which piece of advice is professionally correct?"
   },
   "a": [
    {
     "de": "Die Rangreihen der Merkmale sind im Erwachsenenalter so stabil, dass sich sein Profil kaum mehr verschiebt; sinnvoll ist die Suche nach einer dazu passenden Tätigkeit.",
     "en": "Rank orders of traits are so stable in adulthood that his profile will barely shift any more; the sensible route is to look for an occupation that fits it."
    },
    {
     "de": "Persönlichkeitsmerkmale folgen gezielten Vorsätzen innerhalb weniger Wochen; sein Profil lässt sich im Coaching kurzfristig in beide Richtungen umstellen.",
     "en": "Personality traits follow deliberate intentions within a few weeks; his profile can be shifted in either direction over a short coaching period."
    },
    {
     "de": "Die relative Position bleibt recht stabil, doch Gewissenhaftigkeit und emotionale Stabilität nehmen im Erwachsenenalter im Mittel zu; Veränderung ist möglich.",
     "en": "His relative position stays fairly stable, yet conscientiousness and emotional stability increase on average during adulthood; change is possible."
    },
    {
     "de": "Die unterdurchschnittlichen Werte deuten auf eine unpassende Normstichprobe hin; mit altersgerechten Normen läge er im Durchschnitt und sein Anliegen erübrigte sich.",
     "en": "The below-average scores point to an unsuitable norm sample; with age-appropriate norms he would land in the average range and his concern would dissolve."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Rangreihenstabilität und Mittelwertsveränderung sind zwei verschiedene Stabilitätsbegriffe: Die Position im Vergleich zu Gleichaltrigen bleibt im Erwachsenenalter hoch stabil, während die Mittelwerte für Gewissenhaftigkeit und emotionale Stabilität bis ins mittlere Erwachsenenalter ansteigen (Reifungsprinzip; Roberts & Mroczek, 2008). Der erste Distraktor verführt, weil er die hohe Rangreihenstabilität korrekt wiedergibt, daraus aber fälschlich schliesst, das absolute Niveau könne sich nicht mehr ändern. Die Gips-Annahme des Klienten ist damit widerlegt, ohne dass eine kurzfristige Umstellung des Profils versprochen werden dürfte: Veränderung im Erwachsenenalter verläuft graduell und über längere Zeiträume.",
    "en": "Rank-order stability and mean-level change are two different notions of stability: a person's position relative to same-aged peers stays highly stable in adulthood, whereas mean levels of conscientiousness and emotional stability rise into midlife (maturity principle; Roberts & Mroczek, 2008). The first distractor is tempting because it states rank-order stability correctly, but then wrongly infers that the absolute level can no longer change. The client's plaster assumption is thereby refuted, without licensing any promise of a short-term shift in his profile: change in adulthood is gradual and unfolds over longer periods."
   }
  }
 ],
 "06SM200-301": [
  {
   "q": {
    "de": "Ein Unternehmen will die Auswahl von Trainees verbessern und bittet Sie um eine evidenzbasierte Empfehlung. Welche Verfahrenskombination weist nach metaanalytischer Befundlage die höchste prädiktive Validität für spätere Berufsleistung auf?",
    "en": "A company wants to improve its trainee selection and asks you for an evidence-based recommendation. According to meta-analytic findings, which combination of methods has the highest predictive validity for later job performance?"
   },
   "a": [
    {
     "de": "Ein unstrukturiertes Interview durch erfahrene Führungskräfte, ergänzt um eine sorgfältige Analyse der Bewerbungsdossiers",
     "en": "An unstructured interview conducted by experienced managers, supplemented by a careful review of the application files"
    },
    {
     "de": "Ein mehrtägiges Assessment Center mit Gruppenübungen und Rollenspielen, das bewusst auf kognitive Testverfahren verzichtet",
     "en": "A multi-day assessment centre with group exercises and role plays that deliberately omits cognitive testing procedures"
    },
    {
     "de": "Ein Test der allgemeinen kognitiven Fähigkeit, kombiniert mit einem strukturierten, anforderungsbezogenen Einstellungsinterview",
     "en": "A test of general mental ability, combined with a structured, requirements-based employment interview for the position"
    },
    {
     "de": "Eine Persönlichkeitstestbatterie über alle Big-Five-Dimensionen, ergänzt um ausführliche Referenzauskünfte früherer Arbeitgeber",
     "en": "A personality test battery covering all Big Five dimensions, supplemented by detailed references from former employers"
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Metaanalysen zeigen für Tests der allgemeinen kognitiven Fähigkeit die höchste Einzelvalidität, und die Kombination mit einem strukturierten Interview liefert einen der grössten inkrementellen Zugewinne (rund .63 bei Schmidt und Hunter). Das Assessment Center verführt durch seinen Aufwand, erreicht aber nur moderate Validität, zumal ein Teil seiner Vorhersagekraft gerade auf kognitiven Anteilen beruht, die hier fehlen.",
    "en": "Meta-analyses show the highest single-method validity for tests of general mental ability, and combining them with a structured interview yields one of the largest incremental gains (around .63 in Schmidt and Hunter). The assessment centre is tempting because of its elaborateness, but it reaches only moderate validity, especially since part of its predictive power rests precisely on the cognitive components that are missing here."
   }
  },
  {
   "q": {
    "de": "Ein CV-Screening-Algorithmus wurde an früheren Einstellungsentscheiden trainiert. Das Merkmal «Geschlecht» wurde entfernt, dennoch erhalten Bewerberinnen systematisch tiefere Scores. Was ist die wahrscheinlichste fachliche Erklärung für diesen Befund?",
    "en": "A CV screening algorithm was trained on past hiring decisions. The 'gender' feature was removed, yet female applicants still systematically receive lower scores. What is the most likely professional explanation for this finding?"
   },
   "a": [
    {
     "de": "Der Algorithmus verliert ohne das Merkmal Geschlecht an Reliabilität und produziert deshalb zufällig verzerrte Scorewerte",
     "en": "Without the gender feature the algorithm loses reliability and therefore produces randomly distorted score values"
    },
    {
     "de": "Korrelierte Stellvertretermerkmale wie Vereinsmitgliedschaften oder Erwerbsunterbrüche bilden das Geschlecht indirekt ab",
     "en": "Correlated proxy features such as club memberships or career interruptions indirectly encode the applicants' gender"
    },
    {
     "de": "Die Trainingsstichprobe war zu klein, sodass sich die Scores der Gruppen allein durch Stichprobenfehler unterscheiden",
     "en": "The training sample was too small, so the groups' scores differ purely as a result of ordinary sampling error"
    },
    {
     "de": "Die Verzerrung entsteht im Optimierungsverfahren selbst, da neuronale Netze mathematisch bedingt Ungleichgewichte verstärken",
     "en": "The bias arises in the optimisation procedure itself, since neural networks amplify imbalances for mathematical reasons"
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "«Fairness through unawareness» scheitert, weil korrelierte Stellvertretermerkmale wie Erwerbsunterbrüche oder Vereinsmitgliedschaften das entfernte Merkmal rekonstruieren und die historisch verzerrten Trainingslabels weitertragen. Der Stichprobenfehler-Distraktor verführt statistisch Denkende, erklärt aber keine systematische und replizierbare Benachteiligung einer Gruppe, denn Zufallsfehler wirken ungerichtet.",
    "en": "'Fairness through unawareness' fails because correlated proxy features such as career interruptions or club memberships reconstruct the removed attribute and carry forward the historically biased training labels. The sampling-error distractor tempts statistically minded students, but it cannot explain a systematic, replicable disadvantage for one group, since random error is undirected."
   }
  },
  {
   "q": {
    "de": "Sie führen für ein Unternehmen ein Assessment Center zur Führungskräfteentwicklung durch. Den Teilnehmenden wurde zugesichert, ihre Einzelergebnisse dienten ausschliesslich der eigenen Entwicklung. Nach Abschluss verlangt die Personalleitung die individuellen Profile, um damit eine anstehende Stellenreduktion vorzubereiten. Wie handeln Sie berufsethisch tragfähig?",
    "en": "You run an assessment centre for leadership development on behalf of a company. Participants were assured that their individual results would serve their own development only. Afterwards, the head of HR asks for the individual profiles in order to prepare an upcoming round of job cuts. How do you act in a professionally defensible way?"
   },
   "a": [
    {
     "de": "Sie übergeben die Profile, weil das Unternehmen das Verfahren beauftragt und finanziert hat und damit über die Ergebnisse verfügt.",
     "en": "You hand over the profiles, since the company commissioned and paid for the procedure and therefore controls the results."
    },
    {
     "de": "Sie geben die Einzelergebnisse nicht heraus und legen dar, dass die Nutzung für den Stellenabbau eine neue Einwilligung der Teilnehmenden voraussetzt.",
     "en": "You withhold the individual results and set out that using them for the job cuts would require fresh consent from the participants."
    },
    {
     "de": "Sie übergeben die Profile mit dem schriftlichen Vermerk, dass sie nur entwicklungsbezogen genutzt werden dürfen, und dokumentieren diesen Vorbehalt im Bericht.",
     "en": "You hand over the profiles with a written note that they may be used for development purposes only, and document this reservation in the report."
    },
    {
     "de": "Sie geben nur die Profile jener Teilnehmenden heraus, die gut abgeschnitten haben, damit den übrigen aus dem Verfahren kein Nachteil entsteht.",
     "en": "You release only the profiles of participants who performed well, so that the others suffer no disadvantage from the procedure."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Eignungsdiagnostische Einzeldaten sind an den Zweck gebunden, für den die Teilnehmenden ihre Einwilligung gegeben haben; Auftrag und Finanzierung übertragen keine Verfügungsgewalt über personenbezogene Ergebnisse, weshalb eine Zweckänderung eine neue, informierte Einwilligung verlangt (Berufsordnung der FSP; Zweckbindungsgrundsatz des Schweizer Datenschutzgesetzes). Der schriftliche Vermerk verführt, weil er wie eine Schutzmassnahme aussieht; sobald die Profile jedoch in der Personalabteilung liegen, ist die Kontrolle über ihre Verwendung abgegeben und die Zusage bereits gebrochen. Die selektive Herausgabe guter Profile verletzt dieselbe Zusage und benachteiligt die Übrigen zusätzlich, weil schon das Fehlen eines Profils zur Information wird.",
    "en": "Individual aptitude-assessment data are tied to the purpose for which participants gave their consent; commissioning and funding transfer no power of disposal over person-related results, so a change of purpose requires fresh, informed consent (FSP code of professional conduct; purpose-limitation principle of Swiss data protection law). The written note is tempting because it looks like a safeguard, yet once the profiles sit in HR, control over their use is gone and the assurance is already broken. Selectively releasing the strong profiles violates the same assurance and puts the remaining participants at an added disadvantage, because a missing profile is itself informative."
   }
  }
 ],
 "06SM200-302": [
  {
   "q": {
    "de": "Ein Logistikbetrieb lässt eine KI die Schichten zuteilen. Die Gesamtstundenzahl ist über alle Mitarbeitenden hinweg gleich verteilt, aber niemand kann nachvollziehen, wie die Zuteilung zustande kommt, und Einsprachen sind nicht vorgesehen. Die Belegschaft empfindet das System als unfair. Welche Analyse trifft nach der organisationalen Gerechtigkeitsforschung zu?",
    "en": "A logistics company lets an AI assign shifts. Total hours are distributed equally across all employees, but nobody can trace how assignments are made and there is no way to appeal. Staff perceive the system as unfair. Which analysis is correct according to organisational justice research?"
   },
   "a": [
    {
     "de": "Die distributive Gerechtigkeit ist verletzt, weil die KI die Arbeitsstunden ungleich auf die einzelnen Mitarbeitenden verteilt.",
     "en": "Distributive justice is violated because the AI allocates the working hours unequally across the individual employees."
    },
    {
     "de": "Die prozedurale Gerechtigkeit ist beeinträchtigt, weil Nachvollziehbarkeit, Mitsprache und Korrekturmöglichkeit im Zuteilungsprozess fehlen.",
     "en": "Procedural justice is compromised because transparency, voice, and the possibility of correction are missing from the allocation process."
    },
    {
     "de": "Die interpersonale Gerechtigkeit ist verletzt, weil ein automatisiertes System den respektvollen zwischenmenschlichen Umgang nicht abbilden kann.",
     "en": "Interpersonal justice is violated because an automated system is unable to reproduce respectful interpersonal treatment of employees."
    },
    {
     "de": "Die wahrgenommene Ungerechtigkeit ist unbegründet, weil gleiche Ergebnisse nach der Gerechtigkeitsforschung das Fairnesserleben hinreichend sichern.",
     "en": "The perceived unfairness is unfounded because, according to justice research, equal outcomes sufficiently secure the experience of fairness."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Fairnessurteile hängen nicht nur vom Ergebnis, sondern auch vom Verfahren ab: Nach den Leventhal-Kriterien bzw. Colquitt verletzt ein intransparenter Prozess ohne Voice und Korrigierbarkeit die prozedurale Gerechtigkeit, selbst wenn die Verteilung gleich ist. Der verführerischste Distraktor (distributive Gerechtigkeit) scheitert daran, dass die Stunden im Szenario ausdrücklich gleich verteilt sind.",
    "en": "Fairness judgements depend on procedures, not just outcomes: following Leventhal's criteria and Colquitt, an opaque process without voice or correctability undermines procedural justice even when the distribution is equal. The most tempting distractor, distributive justice, fails because the hours in the scenario are explicitly distributed equally."
   }
  },
  {
   "q": {
    "de": "Ein Unternehmen plant ein KI-System, das Beschäftigten Aufgaben zuteilt und ihre Leistung laufend bewertet. Wie ist dieses Vorhaben nach der EU-KI-Verordnung (AI Act) einzuordnen?",
    "en": "A company plans an AI system that assigns tasks to employees and continuously evaluates their performance. How is this classified under the EU AI Act?"
   },
   "a": [
    {
     "de": "Es fällt in die Kategorie mit minimalem Risiko, weil das System nur intern eingesetzt wird und keine Kundendaten verarbeitet.",
     "en": "It falls into the minimal-risk category because the system is used internally only and does not process any customer data."
    },
    {
     "de": "Es ist eine verbotene Praktik, weil jede algorithmische Bewertung von Beschäftigten unter das Verbot des Social Scoring fällt.",
     "en": "It is a prohibited practice because any algorithmic evaluation of employees falls under the ban on social scoring."
    },
    {
     "de": "Es gilt als Hochrisiko-System, weshalb unter anderem Risikomanagement, Transparenz und wirksame menschliche Aufsicht verlangt sind.",
     "en": "It counts as a high-risk system, which triggers requirements such as risk management, transparency, and effective human oversight."
    },
    {
     "de": "Es unterliegt lediglich einer Kennzeichnungspflicht, weil für Systeme am Arbeitsplatz dieselben Regeln wie für Chatbots gelten.",
     "en": "It is subject merely to a labelling requirement because workplace systems follow the same rules as conversational chatbots."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Anhang III des AI Act stuft KI im Beschäftigungskontext, darunter Aufgabenzuweisung sowie Überwachung und Bewertung von Leistung und Verhalten, als hochriskant ein; daraus folgen Pflichten wie menschliche Aufsicht nach Art. 14. Der Social-Scoring-Distraktor verwechselt das enge Verbot allgemeiner, kontextübergreifender Bewertungssysteme mit der zulässigen, aber streng regulierten Leistungsbewertung am Arbeitsplatz.",
    "en": "Annex III of the AI Act classifies AI in the employment context, including task allocation and the monitoring and evaluation of performance and behaviour, as high risk, which triggers duties such as human oversight under Article 14. The social-scoring distractor confuses the narrow ban on general cross-context scoring systems with workplace performance evaluation, which is permitted but strictly regulated."
   }
  },
  {
   "q": {
    "de": "In einem Verpackungsbetrieb häufen sich seit Monaten Schnittverletzungen an derselben Zuschneidemaschine. Die Geschäftsleitung reagiert mit einer Sicherheitsschulung, Plakaten und einer Ermahnung durch die Vorgesetzten. Eine beigezogene Arbeitspsychologin soll das Vorgehen beurteilen. Welche Empfehlung entspricht dem fachlichen Standard der Arbeitsgestaltung und Arbeitssicherheit?",
    "en": "In a packaging plant, cuts on the same trimming machine have been accumulating for months. Management responds with a safety training session, posters and a reminder from supervisors. An occupational psychologist is called in to assess the approach. Which recommendation is in line with professional standards of work design and occupational safety?"
   },
   "a": [
    {
     "de": "Die Plakatkampagne ausweiten und die Vorgesetzten anhalten, Regelverstösse an der Maschine konsequenter zu sanktionieren.",
     "en": "Extend the poster campaign and have supervisors sanction rule violations at the machine more consistently."
    },
    {
     "de": "Ein Bonusprogramm einführen, das Abteilungen am Jahresende finanziell belohnt, wenn sie keine Unfälle gemeldet haben.",
     "en": "Introduce a bonus scheme that rewards departments financially at year's end if they have reported no accidents."
    },
    {
     "de": "Die Gefahrenquelle an der Maschine technisch beseitigen oder sichern und erst danach ergänzend auf Schulung und Regeln setzen.",
     "en": "Eliminate or guard the hazard at the machine by technical means and only afterwards add training and rules as a supplement."
    },
    {
     "de": "Die Vorfälle der Personalauswahl zuweisen und künftig gezielt auf höhere Gewissenhaftigkeit der Bewerbenden achten.",
     "en": "Hand the incidents to personnel selection and screen future applicants specifically for higher conscientiousness."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Die Massnahmenhierarchie der Arbeitssicherheit (STOP: Substitution, technische, organisatorische, personenbezogene Massnahmen) setzt Verhältnis- vor Verhaltensprävention: Zuerst wird die Gefährdung an der Quelle beseitigt oder gesichert; Schulung, Regeln und persönliche Schutzausrüstung greifen erst dort, wo technische und organisatorische Massnahmen nicht ausreichen (VUV Art. 5). Der attraktivste Distraktor ist das Bonusprogramm, denn es belohnt nicht sicheres Arbeiten, sondern ausbleibende Meldungen und senkt so die Unfallstatistik statt der Gefährdung. Auch die Personalauswahl greift zu spät, weil die Gefahrenquelle unverändert bestehen bleibt.",
    "en": "The hierarchy of safety measures (substitution, technical, organisational and person-related measures) puts conditions before behaviour: the hazard is first eliminated or contained at its source, while training, rules and personal protective equipment only apply where technical and organisational measures are not sufficient (Swiss Ordinance on Accident Prevention, Art. 5). The most tempting distractor is the bonus scheme, because it rewards the absence of reports rather than safe working and thus lowers the accident statistics instead of the hazard. Personnel selection also comes too late, since the source of danger remains untouched."
   }
  }
 ],
 "06SM200-403": [
  {
   "q": {
    "de": "Eine 34-jährige Patientin wird nach einer depressiven Episode aus der Klinik entlassen. Ihr Partner reagiert zuhause mit häufiger Kritik («Reiss dich zusammen») und starkem emotionalem Überengagement. Welche Vorhersage ist nach der Forschung zu Expressed Emotion (EE) am besten begründet?",
    "en": "A 34-year-old patient is discharged from hospital after a depressive episode. At home, her partner reacts with frequent criticism (\"pull yourself together\") and strong emotional over-involvement. Which prediction is best supported by research on expressed emotion (EE)?"
   },
   "a": [
    {
     "de": "Das Rückfallrisiko bleibt unverändert, weil Expressed Emotion nur den Verlauf schizophrener Erkrankungen beeinflusst.",
     "en": "The relapse risk remains unchanged because expressed emotion only influences the course of schizophrenic disorders."
    },
    {
     "de": "Das Rückfallrisiko sinkt, weil das intensive emotionale Engagement des Partners die verfügbare soziale Unterstützung erhöht.",
     "en": "The relapse risk decreases because the partner's intense emotional involvement increases the social support that is available."
    },
    {
     "de": "Das Familienklima ist als blosse Folge der Depression zu deuten und spielt für die Rückfallprognose deshalb keine Rolle.",
     "en": "The family climate is to be read as a mere consequence of the depression and therefore plays no role in predicting relapse."
    },
    {
     "de": "Das Rückfallrisiko ist erhöht, weil hohe Expressed Emotion auch bei affektiven Störungen ein robuster Prädiktor für Rückfälle ist.",
     "en": "The relapse risk is elevated because high expressed emotion is a robust predictor of relapse in affective disorders as well."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Die Metaanalyse von Butzlaff und Hooley (1998) zeigt, dass hohe EE Rückfälle nicht nur bei Schizophrenie, sondern bei affektiven Störungen sogar noch stärker vorhersagt; Kritik und Überengagement sind dabei zentrale Komponenten. Der verführerischste Distraktor beschränkt EE auf die Schizophrenie, wo das Konzept zwar entwickelt wurde, seine prognostische Kraft aber nicht endet.",
    "en": "The meta-analysis by Butzlaff and Hooley (1998) shows that high EE predicts relapse not only in schizophrenia but even more strongly in mood disorders; criticism and over-involvement are its core components. The most tempting distractor restricts EE to schizophrenia, where the concept originated but where its predictive power by no means ends."
   }
  },
  {
   "q": {
    "de": "Eine Beratungsstelle testet ein KI-Tool, das Aufnahmen von Paargesprächen auswertet, Konfliktmuster erkennt und beiden Partnern getrennt je eine persönliche Rückmeldung mit Übungsvorschlägen ausgibt. Welcher Einwand wiegt aus paar- und familienpsychologischer Sicht am schwersten?",
    "en": "A counselling service is trialling an AI tool that analyses recordings of couple sessions, detects conflict patterns and gives each partner a separate personal report with suggested exercises. Which objection carries the most weight from a couple and family psychology perspective?"
   },
   "a": [
    {
     "de": "Die Auswertung stützt sich auf Sprachaufnahmen, deren Verwendung die ausdrückliche und jederzeit widerrufbare Einwilligung beider Partner voraussetzt.",
     "en": "The analysis relies on voice recordings whose use presupposes the explicit consent of both partners, revocable at any time."
    },
    {
     "de": "Die Auswertung erkennt Ironie und Dialekt unzuverlässig und unterschätzt dadurch die Zahl kritischer Äusserungen im Gespräch.",
     "en": "The analysis detects irony and dialect unreliably and therefore underestimates the number of critical remarks in the session."
    },
    {
     "de": "Die Auswertung modelliert die Partner als getrennte Fälle und verfehlt die Wechselseitigkeit des Konfliktmusters.",
     "en": "The analysis models the partners as separate cases and thus misses the mutuality that constitutes the conflict pattern."
    },
    {
     "de": "Die Auswertung gibt Rückmeldungen ohne therapeutische Begleitung und überfordert damit die Selbststeuerung der Ratsuchenden.",
     "en": "The analysis delivers feedback without therapeutic guidance and thereby overtaxes the self-regulation of those seeking help."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Ein systemisch-interpersonelles Störungsverständnis fasst Paarkonflikte als zirkuläres Zusammenspiel: Muster wie Fordern und Rückzug entstehen wechselseitig und lassen sich keinem der beiden Partner allein zuschreiben. Ein Tool, das jede Person separat modelliert und separat zurückmeldet, individualisiert genau diesen dyadischen Prozess und stützt die gegenseitige Schuldzuschreibung, die in der Paararbeit ohnehin die grösste Hürde ist. Der Einwilligungs-Einwand ist berechtigt und rechtlich zwingend, betrifft aber jede Tonaufnahme gleichermassen und trifft die fachliche Fehlkonstruktion des Tools nicht.",
    "en": "A systemic, interpersonal understanding of disorders frames couple conflict as a circular interplay: patterns such as demand and withdrawal arise mutually and cannot be attributed to either partner alone. A tool that models each person separately and reports back separately individualises precisely this dyadic process and reinforces the mutual blaming that is the biggest obstacle in couple work anyway. The consent objection is legitimate and legally binding, but it applies equally to any audio recording and misses the tool's actual conceptual flaw."
   }
  },
  {
   "q": {
    "de": "Sie arbeiten in einer Erziehungsberatungsstelle mit einem Paar an dessen Konflikten. Im Einzelgespräch berichtet der Vater, er habe seinen achtjährigen Sohn in den letzten Wochen zweimal geschlagen, und bittet Sie, dies in den Paargesprächen auszulassen. Welches Vorgehen ist berufsethisch und rechtlich tragfähig?",
    "en": "You are working with a couple on their conflicts at a parenting counselling service. In an individual session, the father reports that he has hit his eight-year-old son twice in recent weeks and asks you to leave this out of the couple sessions. Which course of action is professionally, ethically and legally defensible?"
   },
   "a": [
    {
     "de": "Sie sichern dem Vater volle Vertraulichkeit zu und bearbeiten die Gewalt allein im Einzelsetting, weil die Schweigepflicht die Grundlage jeder Beratung ist.",
     "en": "You assure the father of full confidentiality and address the violence in the individual setting alone, because confidentiality is the basis of all counselling."
    },
    {
     "de": "Sie benennen dem Vater den Schutzauftrag für das Kind und ziehen bei anhaltender Gefährdung die Kindes- und Erwachsenenschutzbehörde bei.",
     "en": "You name the duty to protect the child to the father and involve the child and adult protection authority if the endangerment continues."
    },
    {
     "de": "Sie sprechen die Mutter im nächsten Paargespräch darauf an, damit sie das Kind schützen kann, und lassen den Vater dabei aussen vor.",
     "en": "You raise the matter with the mother in the next couple session so that she can protect the child, leaving the father out of that step."
    },
    {
     "de": "Sie beenden die Beratung und melden den Vorfall der Behörde, weil die Vertrauensgrundlage für die Paararbeit entfallen ist.",
     "en": "You end the counselling and report the incident to the authority, because the basis of trust for the couple work has fallen away."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Vertraulichkeit schützt die Beratungsbeziehung, ist aber nicht absolut, wenn ein Kind gefährdet ist. Tragfähig ist deshalb, dem Vater diese Grenze offen zu benennen, auf sein Mitwirken hinzuwirken und bei fortbestehender Gefährdung die Kindes- und Erwachsenenschutzbehörde (KESB) beizuziehen. Rechtlich gilt in der Schweiz: Psycholog:innen unterstehen dem Berufsgeheimnis (Art. 321 StGB) und sind damit von der Meldepflicht ausgenommen, sind aber ausdrücklich meldeberechtigt, wenn die Meldung im Interesse des Kindes liegt (Art. 314c ZGB); Fachpersonen ohne Berufsgeheimnis mit regelmässigem Kinderkontakt sind meldepflichtig, sofern sie der Gefährdung nicht im Rahmen ihrer Tätigkeit abhelfen können (Art. 314d ZGB). Die Zusicherung voller Vertraulichkeit ist der attraktivste Irrweg: Sie hält die Arbeitsbeziehung kurzfristig stabil, macht die Beratung aber zur Mitwisserin einer Gefährdung, die das Kind selbst nicht beenden kann.",
    "en": "Confidentiality protects the counselling relationship, but it is not absolute where a child is at risk. The defensible course is therefore to name this limit openly to the father, work towards his cooperation, and involve the child and adult protection authority (KESB) if the endangerment persists. Swiss law is clear: psychologists are bound by professional secrecy (Art. 321 Swiss Criminal Code) and are hence exempt from the duty to report, but they are expressly entitled to report where a report serves the child's interests (Art. 314c Swiss Civil Code); professionals not bound by professional secrecy who have regular contact with children are obliged to report if they cannot avert the endangerment within their own remit (Art. 314d Swiss Civil Code). Assuring full confidentiality is the most attractive wrong turn: it keeps the working relationship stable in the short term, but it makes the counselling service a silent partner to an endangerment that the child itself cannot stop."
   }
  }
 ],
 "06SM200-s12": [
  {
   "q": {
    "de": "Ein RCT prüft eine internetbasierte Intervention gegen Depression. In der Interventionsgruppe brechen 40 Prozent der Teilnehmenden ab; die Auswertung nur der Abschliessenden (Completer-Analyse) zeigt einen grossen Effekt. Welche methodische Kritik ist am tragfähigsten?",
    "en": "An RCT tests an internet-based intervention for depression. In the intervention group, 40 percent of participants drop out; analysing only those who completed (completer analysis) shows a large effect. Which methodological critique is the most defensible?"
   },
   "a": [
    {
     "de": "Der Effekt ist belastbar, weil die Randomisierung zu Studienbeginn auch nach dem Ausscheiden vieler Teilnehmender vor Verzerrung schützt.",
     "en": "The effect is trustworthy, because randomisation at baseline protects against bias even after many participants have left the study."
    },
    {
     "de": "Der Effekt ist vermutlich überschätzt, weil selektiver Dropout die Randomisierung untergräbt und eine Intention-to-treat-Analyse nötig wäre.",
     "en": "The effect is probably overestimated, because selective dropout undermines the randomisation and an intention-to-treat analysis would be needed."
    },
    {
     "de": "Der Effekt ist belastbar, weil ein statistisch signifikanter p-Wert die klinische Relevanz der Intervention hinreichend absichert.",
     "en": "The effect is trustworthy, because a statistically significant p-value sufficiently establishes the clinical relevance of the intervention."
    },
    {
     "de": "Der Effekt ist vermutlich unterschätzt, weil vor allem Personen abbrechen, die besonders stark von der Intervention profitiert haben.",
     "en": "The effect is probably underestimated, because those who drop out are mainly people who benefited especially strongly from the intervention."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Bei 40 Prozent Dropout scheiden systematisch andere Personen aus, etwa solche ohne Symptomverbesserung, womit die Vergleichbarkeit der randomisierten Gruppen verloren geht; Intention-to-treat-Analysen erhalten die Randomisierung und schätzen konservativer. Der verführerischste Distraktor überträgt den Schutz der Randomisierung fälschlich auf die Zeit nach dem Dropout, den sie gerade nicht mehr abdeckt.",
    "en": "With 40 percent dropout, systematically different people leave the trial, for instance those without symptom improvement, so the comparability of the randomised groups is lost; intention-to-treat analyses preserve randomisation and give more conservative estimates. The most tempting distractor wrongly extends the protection of randomisation to the period after dropout, which it precisely no longer covers."
   }
  },
  {
   "q": {
    "de": "Im Seminar auditieren Studierende einen LLM-basierten Gesundheitscoach, der Nutzende täglich über die Folgen von Bewegungsmangel informiert und motivierende Botschaften sendet. Die Evaluation zeigt hohe Zufriedenheit und mehr Wissen über Bewegungsempfehlungen, aber keine Zunahme der körperlichen Aktivität. Welche fachliche Erklärung ist am tragfähigsten?",
    "en": "In the seminar, students audit an LLM-based health coach that informs users daily about the consequences of physical inactivity and sends motivating messages. The evaluation shows high satisfaction and better knowledge of activity guidelines, but no increase in physical activity. Which professional explanation is the most defensible?"
   },
   "a": [
    {
     "de": "Der Coach bleibt wirkungslos, weil rein textbasierte Angebote Bewegungsverhalten grundsätzlich nicht verändern und persönliche Beratung nicht ersetzen.",
     "en": "The coach remains ineffective, because purely text-based offerings never change activity behaviour and cannot replace personal counselling."
    },
    {
     "de": "Der Evaluationszeitraum ist zu kurz gewählt, weil ein Wissenszuwachs dem veränderten Verhalten regelhaft um mehrere Monate vorausgeht.",
     "en": "The evaluation window is too short, because a gain in knowledge regularly precedes changed behaviour by several months."
    },
    {
     "de": "Der Coach bedient Wissen und Motivation, lässt aber die volitionalen Techniken wie die Handlungsplanung aus, die Intentionen in Handeln überführen.",
     "en": "The coach serves knowledge and motivation but omits the volitional techniques, such as action planning, that turn intentions into action."
    },
    {
     "de": "Die wechselnden Formulierungen des Sprachmodells verhindern eine konstante Dosis, weshalb der gemessene Wissenszuwachs dem Coach nicht zurechenbar ist.",
     "en": "The language model's varying wording prevents a constant dose, so the measured knowledge gain cannot be attributed to the coach."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Wissen und Motivation erzeugen bestenfalls eine Intention; die Lücke zur Handlung wird durch volitionale Schritte wie Handlungs- und Bewältigungsplanung geschlossen, die der Coach gar nicht anbietet (Schwarzer, 2008). Der verführerischste Distraktor verschiebt das Problem auf die Messdauer und unterstellt damit einen Automatismus vom Wissen zum Verhalten, den die Forschung zur Intentions-Verhaltens-Lücke gerade nicht stützt.",
    "en": "Knowledge and motivation at best produce an intention; the gap to action is bridged by volitional steps such as action planning and coping planning, which the coach does not offer at all (Schwarzer, 2008). The most tempting distractor shifts the problem to the length of the evaluation and thereby assumes an automatic path from knowledge to behaviour, which research on the intention-behaviour gap precisely does not support."
   }
  },
  {
   "q": {
    "de": "Eine Seminararbeit wertet ein achtwöchiges Stressbewältigungstraining aus. Auf einem Depressionsfragebogen (Wertebereich 0 bis 27) sinkt der Gruppenmittelwert um 1.8 Punkte, p = .03, d = 0.22. Die Autorin folgert daraus die klinische Wirksamkeit des Trainings. Welche methodische Einordnung trägt?",
    "en": "A seminar paper evaluates an eight-week stress management training. On a depression questionnaire (range 0 to 27) the group mean falls by 1.8 points, p = .03, d = 0.22. The author concludes that the training is clinically effective. Which methodological appraisal holds?"
   },
   "a": [
    {
     "de": "Die mittlere Veränderung von 1.8 Punkten ist am Standardmessfehler des Instruments zu prüfen; fällt sie grösser aus, ist eine bedeutsame Symptomveränderung belegt.",
     "en": "The mean change of 1.8 points should be checked against the instrument's standard error of measurement; if it turns out larger, a meaningful symptom change is established."
    },
    {
     "de": "Das Ergebnis ist eine kleine Mittelwertsverschiebung; klinische Wirksamkeit verlangt zusätzlich den Anteil Personen mit reliabler und bedeutsamer Veränderung.",
     "en": "The result is a small shift in means; clinical effectiveness additionally requires the proportion of people with reliable and meaningful change."
    },
    {
     "de": "Der signifikante Test sichert die Wirksamkeit ab; die Effektstärke informiert lediglich über die Präzision der Mittelwertsschätzung.",
     "en": "The significant test secures the effectiveness; the effect size merely informs about the precision of the mean estimate."
    },
    {
     "de": "Ein d von 0.22 liegt im Bereich kleiner Effekte und schliesst damit aus, dass einzelne Teilnehmende klinisch bedeutsam profitiert haben.",
     "en": "A d of 0.22 lies in the range of small effects and therefore rules out that individual participants benefited to a clinically meaningful degree."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Eine Mittelwertsdifferenz beschreibt die Gruppe, nicht die einzelne Person; für die Aussage «klinisch wirksam» braucht es Kennwerte der klinischen Signifikanz, also den Anteil Personen mit reliabler Veränderung und mit Übergang in den funktionalen Wertebereich (Jacobson & Truax, 1991). Der Verweis auf den Standardmessfehler ist der stärkste Distraktor: Reliable Veränderung bemisst sich am Standardfehler der Differenz zweier Messungen, nicht am Messfehler eines Einzelwerts, und ein Gruppenmittelwert lässt sich damit ohnehin nicht beurteilen. Umgekehrt schliesst ein kleiner mittlerer Effekt nicht aus, dass eine Teilgruppe deutlich profitiert hat.",
    "en": "A mean difference describes the group, not the individual; claiming clinical effectiveness requires indices of clinical significance, that is, the proportion of people showing reliable change and crossing into the functional range (Jacobson & Truax, 1991). The reference to the standard error of measurement is the strongest distractor: reliable change is gauged against the standard error of the difference between two measurements, not against the measurement error of a single score, and a group mean cannot be judged that way in any case. Conversely, a small average effect does not rule out that a subgroup benefited substantially."
   }
  }
 ],
 "06SM200-s13": [
  {
   "q": {
    "de": "Eine Querschnittstudie zu Algorithmic Management findet bei 480 Kurierfahrenden einer Plattform eine negative Korrelation (r = -.31) zwischen wahrgenommener algorithmischer Überwachung und Arbeitsautonomie. Die Stichprobe wurde über die Plattform-App rekrutiert. Welche Schlussfolgerung ist methodisch haltbar?",
    "en": "A cross-sectional study on algorithmic management finds a negative correlation (r = -.31) between perceived algorithmic monitoring and job autonomy among 480 platform couriers. The sample was recruited via the platform's app. Which conclusion is methodologically sound?"
   },
   "a": [
    {
     "de": "Algorithmische Überwachung reduziert die Autonomie, weil die negative Korrelation den kausalen Zusammenhang der beiden Merkmale belegt.",
     "en": "Algorithmic monitoring reduces autonomy, because the negative correlation demonstrates a causal link between the two variables."
    },
    {
     "de": "Der Zusammenhang gilt für Plattformarbeit generell, da Kurierfahrende eine typische Gruppe der Gig Economy darstellen.",
     "en": "The association holds for platform work in general, since couriers represent a typical group within the gig economy."
    },
    {
     "de": "Es besteht ein negativer Zusammenhang in dieser Stichprobe; Kausalrichtung und Drittvariablen bleiben dabei ungeklärt.",
     "en": "There is a negative association in this sample; causal direction and third variables remain unresolved."
    },
    {
     "de": "Der Effekt ist praktisch bedeutungslos, da r = -.31 weniger als zehn Prozent der Varianz in der Autonomie aufklärt.",
     "en": "The effect is practically meaningless, since r = -.31 explains less than ten percent of the variance in autonomy."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Eine Querschnittskorrelation belegt nur einen Zusammenhang in der untersuchten Stichprobe; Kausalrichtung und Drittvariablen wie Vertragstyp oder Berufserfahrung bleiben offen, zumal die App-Rekrutierung Selbstselektion begünstigt. Die Kausalaussage ist der verführerischste Distraktor: Signifikanz und Stichprobengrösse ersetzen weder Randomisierung noch zeitliche Ordnung.",
    "en": "A cross-sectional correlation only establishes an association in the sample studied; causal direction and third variables such as contract type or experience remain open, especially since app-based recruitment invites self-selection. The causal claim is the most seductive distractor: significance and sample size substitute neither for randomisation nor for temporal order."
   }
  },
  {
   "q": {
    "de": "Für die KI-gestützte Fachartikel-Analyse fasst ein LLM zusammen: «Der standardisierte Koeffizient β = .40 zeigt, dass Gerechtigkeitserleben 40 Prozent der Varianz im Commitment erklärt.» Der Artikel berichtet β = .40 und R² = .16. Wie beurteilen Sie den KI-Output beim Abgleich mit dem Original?",
    "en": "For the AI-assisted article analysis, an LLM summarises: 'The standardised coefficient β = .40 shows that perceived justice explains 40 percent of the variance in commitment.' The article reports β = .40 and R² = .16. How do you judge the AI output when checking it against the original?"
   },
   "a": [
    {
     "de": "Die Aussage ist irreführend, weil β die Veränderung in Standardabweichungen angibt; die Varianzaufklärung von 16 Prozent steht im R².",
     "en": "The claim is misleading, because β expresses change in standard deviations; the variance explained of 16 percent is given by R²."
    },
    {
     "de": "Die Aussage ist tragfähig, weil bei einem einzelnen Prädiktor der standardisierte Koeffizient direkt dem Anteil erklärter Varianz entspricht.",
     "en": "The claim is sound, because with a single predictor the standardised coefficient directly equals the share of variance explained."
    },
    {
     "de": "Die Aussage ist tragfähig, weil sich β und R² bei standardisierten Variablen rechnerisch nur durch die Rundung unterscheiden.",
     "en": "The claim is sound, because with standardised variables β and R² differ computationally only through rounding."
    },
    {
     "de": "Die Aussage ist irreführend, weil Angaben zur Varianzaufklärung auf dem adjustierten R² statt dem einfachen R² beruhen müssen.",
     "en": "The claim is misleading, because statements about variance explained must rest on adjusted R² instead of plain R²."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "β = .40 bedeutet, dass sich das Commitment um 0.40 Standardabweichungen verändert, wenn das Gerechtigkeitserleben um eine Standardabweichung steigt; die Varianzaufklärung steht im R² von .16. Der verführerischste Distraktor nutzt aus, dass β bei nur einem Prädiktor der Korrelation r entspricht; die erklärte Varianz wäre dann aber r² = .16 und keinesfalls 40 Prozent.",
    "en": "β = .40 means commitment changes by 0.40 standard deviations when perceived justice rises by one standard deviation; variance explained is given by R² = .16. The most seductive distractor exploits the fact that with a single predictor β equals the correlation r; the variance explained would then be r² = .16, certainly not 40 percent."
   }
  },
  {
   "q": {
    "de": "Ein Seminarteam wertet eine Mitarbeitendenbefragung zur erlebten Fairness der direkten Führung aus. Bei den Items zur Kritik an der vorgesetzten Person fehlen 19 Prozent der Antworten, vor allem in kleinen Teams, in denen einzelne Antworten rückverfolgbar wären. Das Team löscht alle unvollständigen Fälle und berichtet einen hohen Fairnesswert. Wie ist dieses Vorgehen zu beurteilen?",
    "en": "A seminar team analyses an employee survey on perceived fairness of direct supervisors. On the items criticising one's own supervisor, 19 percent of the answers are missing, above all in small teams where individual answers would be traceable. The team deletes all incomplete cases and reports a high fairness score. How should this approach be judged?"
   },
   "a": [
    {
     "de": "Der Ausfall ist verkraftbar, weil die verbleibende Fallzahl für den geplanten Mittelwertvergleich noch genügend Teststärke liefert.",
     "en": "The dropout is tolerable, because the remaining number of cases still provides enough statistical power for the planned comparison of means."
    },
    {
     "de": "Die Werte fehlen abhängig davon, was geantwortet worden wäre; der berichtete Fairnesswert fällt deshalb systematisch zu günstig aus.",
     "en": "The values are missing depending on what would have been answered, so the reported fairness score comes out systematically too favourable."
    },
    {
     "de": "Der Ausfall lässt sich auffangen, indem die fehlenden Werte durch den Skalenmittelwert ersetzt werden und alle Fälle erhalten bleiben.",
     "en": "The dropout can be absorbed by replacing the missing values with the scale mean, which keeps all cases in the analysis."
    },
    {
     "de": "Der Ausfall betrifft die interne Konsistenz der Skala, deren Reliabilität deshalb vor jeder weiteren Auswertung neu zu bestimmen ist.",
     "en": "The dropout concerns the internal consistency of the scale, whose reliability must therefore be re-estimated before any further analysis."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Der Ausfall hängt hier mit dem Inhalt der zurückgehaltenen Antwort zusammen und ist damit im Sinne der Missing-Data-Systematik nicht zufällig (MNAR) und nicht ignorierbar: Wer kritisch antworten würde, schweigt gerade dort, wo die Antwort rückverfolgbar wäre, und das listenweise Löschen verschiebt den Mittelwert nach oben. Der attraktivste Distraktor stellt auf die Fallzahl ab und verwechselt Präzision mit Unverzerrtheit, denn eine grosse Reststichprobe schätzt einen verzerrten Wert nur genauer. Die Mittelwertersetzung erhält zwar alle Fälle, übernimmt aber dieselbe Verzerrung und schrumpft zusätzlich die Streuung.",
    "en": "Here the missingness depends on the content of the withheld answer and is therefore not random in the sense of the missing-data taxonomy (MNAR) and not ignorable: those who would answer critically stay silent precisely where the answer would be traceable, and listwise deletion shifts the mean upwards. The most tempting distractor focuses on sample size and confuses precision with unbiasedness, since a large remaining sample merely estimates a biased value more accurately. Mean replacement does keep all cases, but it carries the same bias forward and additionally shrinks the variance."
   }
  }
 ],
 "06SM200-BA": [
  {
   "q": {
    "de": "In der Bachelorarbeit wird die präregistrierte Hypothese nicht bestätigt; eine explorative Zusatzanalyse zeigt jedoch einen unerwarteten signifikanten Effekt. Welches Vorgehen entspricht wissenschaftlicher Integrität?",
    "en": "In the bachelor's thesis, the preregistered hypothesis is not supported; an exploratory follow-up analysis, however, shows an unexpected significant effect. Which course of action reflects scientific integrity?"
   },
   "a": [
    {
     "de": "Die Hypothese nachträglich so umformulieren, dass sie den gefundenen Effekt vorhersagt, weil die Einleitung sonst inkonsistent wirkt.",
     "en": "Rewrite the hypothesis afterwards so that it predicts the observed effect, because the introduction would otherwise seem inconsistent."
    },
    {
     "de": "Die explorative Zusatzanalyse weglassen und nur das präregistrierte Nullresultat berichten, weil Zufallsbefunde die Arbeit verwässern.",
     "en": "Omit the exploratory follow-up analysis and report only the preregistered null result, because chance findings dilute the thesis."
    },
    {
     "de": "Weitere Versuchspersonen erheben, bis die ursprüngliche Hypothese das Signifikanzniveau erreicht, weil die Power zu tief gewesen sein könnte.",
     "en": "Collect additional participants until the original hypothesis reaches the significance level, because power may have been too low."
    },
    {
     "de": "Das Nullresultat zur Hypothese berichten und den Zusatzbefund als explorativ kennzeichnen, der eine unabhängige Replikation erfordert.",
     "en": "Report the null result for the hypothesis and label the additional finding as exploratory, requiring independent replication."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Wissenschaftliche Integrität verlangt die transparente Trennung von konfirmatorischen und explorativen Befunden: Das Nullresultat wird berichtet, der Zusatzbefund als explorativ gekennzeichnet und als replikationsbedürftig ausgewiesen. Das nachträgliche Umformulieren der Hypothese (HARKing) ist am verführerischsten, weil die Arbeit stimmiger wirkt; es täuscht aber eine Vorhersage vor und unterläuft die Kontrolle des Alpha-Fehlers.",
    "en": "Scientific integrity requires transparently separating confirmatory from exploratory findings: the null result is reported and the additional finding labelled exploratory, awaiting replication. Rewriting the hypothesis after the fact (HARKing) is the most seductive option because the thesis appears more coherent; yet it fakes a prediction and undermines control of the Type I error rate."
   }
  },
  {
   "q": {
    "de": "Für die Arbeitsform «methodisch strukturierter Review» lässt eine Studentin einen KI-Agenten aus 40 Artikeln Stichprobengrösse und Effektstärke in eine Evidenzmatrix extrahieren. Eine Stichprobenprüfung an sechs Artikeln ergibt vier korrekte und zwei falsche Effektstärken, beide zu hoch. Welches Vorgehen ist fachlich geboten?",
    "en": "For the \"methodically structured review\" work format, a student has an AI agent extract sample size and effect size from 40 articles into an evidence matrix. Spot-checking six articles yields four correct and two incorrect effect sizes, both too high. Which course of action is professionally required?"
   },
   "a": [
    {
     "de": "Den Agenten mit einem präziseren Prompt erneut über alle 40 Artikel laufen lassen und die zweite Extraktion verwenden.",
     "en": "Run the agent over all 40 articles again with a more precise prompt and use the second extraction."
    },
    {
     "de": "Die beiden fehlerhaften Artikel aus der Evidenzmatrix ausschliessen und die Synthese auf die 38 verbleibenden Studien stützen.",
     "en": "Exclude the two faulty articles from the evidence matrix and base the synthesis on the remaining 38 studies."
    },
    {
     "de": "Alle 40 Effektstärken unabhängig nachcodieren und die Übereinstimmung berichten, weil beide Fehler in dieselbe Richtung weisen.",
     "en": "Recode all 40 effect sizes independently and report the agreement, because both errors point in the same direction."
    },
    {
     "de": "Die beiden Werte korrigieren und die übrigen übernehmen, weil eine Trefferquote von zwei Dritteln für Übersichtsarbeiten genügt.",
     "en": "Correct the two values and keep the rest, because a two-thirds hit rate suffices for review work."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Zwei Fehler in dieselbe Richtung sind kein Zufallsrauschen, sondern ein Hinweis auf einen systematischen Extraktionsfehler, der die synthetisierten Befunde nach oben verzerrt; eine strukturierte Übersichtsarbeit verlangt deshalb unabhängige Doppelcodierung mit berichteter Übereinstimmung statt einer Stichprobenprüfung. Der neue Prompt ist der verführerischste Distraktor: Er verändert die Fehler, liefert aber keinen unabhängigen Massstab, an dem sich die Richtigkeit der extrahierten Werte überhaupt beurteilen liesse.",
    "en": "Two errors in the same direction are not random noise but a sign of a systematic extraction error that biases the synthesised findings upwards; a structured review therefore requires independent double coding with reported agreement rather than a spot check. The improved prompt is the most tempting distractor: it changes the errors but provides no independent standard against which the accuracy of the extracted values could be judged at all."
   }
  },
  {
   "q": {
    "de": "Eine Bachelorarbeit im Format Reproduzierbarkeitscheck ist schriftlich sauber gearbeitet. Im zehnminütigen KI-freien Prüfungsgespräch kann der Student jedoch nicht begründen, warum er die Ausreisserregel des Originalartikels unverändert übernommen und nicht variiert hat. Wie ist diese Diskrepanz nach der Prüfungsarchitektur des Moduls zu behandeln?",
    "en": "A Bachelor thesis in the reproducibility-check format is cleanly written. In the ten-minute AI-free oral examination, however, the student cannot justify why he adopted the original article's outlier rule unchanged instead of varying it. How should this discrepancy be handled under the module's assessment architecture?"
   },
   "a": [
    {
     "de": "Der Prozessanhang entscheidet: Ist die Entscheidung dort dokumentiert, ersetzt der schriftliche Eintrag die mündliche Begründung.",
     "en": "The process appendix decides: if the decision is documented there, the written entry replaces the oral justification."
    },
    {
     "de": "Das Gespräch trägt 30 Prozent der Note und prüft genau die methodische Begründung, die der Text allein nicht belegen kann.",
     "en": "The oral carries 30 percent of the grade and probes exactly the methodological justification that the text alone cannot evidence."
    },
    {
     "de": "Die Diskrepanz begründet einen Täuschungsverdacht, weil ein sauberer Text ohne mündliche Begründung auf unerlaubte KI-Nutzung verweist.",
     "en": "The discrepancy grounds a suspicion of misconduct, because a clean text without oral justification points to disallowed AI use."
    },
    {
     "de": "Die Arbeit zählt 70 Prozent und bleibt massgeblich; das Gespräch liefert lediglich formative Rückmeldung ohne Notenwirkung.",
     "en": "The thesis counts 70 percent and remains decisive; the oral merely provides formative feedback without affecting the grade."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Die Gewichtung 70/30 trennt zwei Evidenzquellen: Der Text zeigt das Produkt, das KI-freie Gespräch zeigt, ob die methodischen Entscheidungen selbst getragen werden. Dass der Student die Ausreisserregel unverändert übernommen hat, ist bei einem Reproduzierbarkeitscheck sogar naheliegend; geprüft wird nicht die Entscheidung selbst, sondern ob er sie ohne Werkzeug begründen kann, denn sie bestimmt über die Robustheit des Befunds mit. Der Verweis auf den Prozessanhang ist der stärkste Distraktor: Er dokumentiert, was gemacht wurde, kann aber nicht belegen, dass die Begründung ohne Werkzeug verfügbar ist, und genau dafür wurde der mündliche Anker eingeführt. Ein Täuschungsverdacht ist unbegründet, weil das Modul bewusst auf Validitätsanker statt KI-Detektion setzt.",
    "en": "The 70/30 weighting separates two sources of evidence: the text shows the product, the AI-free conversation shows whether the methodological decisions are genuinely owned. That the student adopted the outlier rule unchanged is in fact the obvious choice in a reproducibility check; what is examined is not the decision itself but whether he can justify it without tools, since it co-determines how robust the finding is. The reference to the process appendix is the strongest distractor: it documents what was done but cannot evidence that the justification is available without tools, which is precisely why the oral anchor was introduced. A suspicion of misconduct is unfounded, because the module deliberately relies on validity anchors rather than AI detection."
   }
  }
 ],
 "06SM200-500": [
  {
   "q": {
    "de": "In einem Längsschnittdatensatz (vier Stressmessungen, genestet in 200 Personen) beträgt der Intraklassenkorrelationskoeffizient des Nullmodells ICC = .45. Welche Schlussfolgerung für die Modellwahl ist korrekt?",
    "en": "In a longitudinal data set (four stress measurements nested in 200 persons), the intraclass correlation coefficient of the null model is ICC = .45. Which conclusion for model choice is correct?"
   },
   "a": [
    {
     "de": "45 Prozent der Gesamtvarianz liegen zwischen den Personen; eine gepoolte OLS-Regression würde Standardfehler unterschätzen und Alpha-Fehler begünstigen.",
     "en": "45 percent of the total variance lies between persons; pooled OLS regression would underestimate standard errors and inflate Type I errors."
    },
    {
     "de": "45 Prozent der Gesamtvarianz liegen innerhalb der Personen; eine gepoolte OLS-Regression würde deshalb zu konservativ testen und Power verschenken.",
     "en": "45 percent of the total variance lies within persons; pooled OLS regression would therefore test too conservatively and waste power."
    },
    {
     "de": "Ein ICC unter .50 zeigt eine vernachlässigbare Abhängigkeit der Messungen; eine gepoolte OLS-Regression bleibt darum ohne Korrektur zulässig.",
     "en": "An ICC below .50 indicates negligible dependence among the measurements; pooled OLS regression therefore remains admissible without correction."
    },
    {
     "de": "Der ICC beziffert hier die Retest-Reliabilität des Stressmasses; für die Wahl zwischen OLS und Mehrebenenmodell ist er darum nicht ausschlaggebend.",
     "en": "The ICC here quantifies the retest reliability of the stress measure; it is therefore not decisive for choosing between OLS and a multilevel model."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Der ICC aus dem Nullmodell zerlegt die Gesamtvarianz: 45 Prozent liegen zwischen den Personen, die Messungen sind also stark abhängig; ignoriert man diese Clusterung, werden Standardfehler unterschätzt und Alpha-Fehler wahrscheinlicher. Die Reliabilitätsdeutung ist verführerisch, weil ICCs auch dafür verwendet werden; hier stammt der Wert aber aus der Varianzzerlegung und ist genau das zentrale Kriterium für die Mehrebenenmodellierung.",
    "en": "The null-model ICC decomposes the total variance: 45 percent lies between persons, so the measurements are strongly dependent; ignoring this clustering underestimates standard errors and makes Type I errors more likely. The reliability reading is seductive because ICCs are also used for that purpose; here, however, the value stems from the variance decomposition and is precisely the key criterion for multilevel modelling."
   }
  },
  {
   "q": {
    "de": "Für ein Strukturgleichungsmodell mit mässigem Fit (CFI = .89) schlägt ein KI-Assistent vor, anhand der Modification Indices schrittweise Fehlerkovarianzen freizusetzen, bis CFI > .95 erreicht ist. Wie ist dieser Vorschlag fachlich zu beurteilen?",
    "en": "For a structural equation model with mediocre fit (CFI = .89), an AI assistant suggests freeing error covariances step by step based on modification indices until CFI > .95 is reached. How should this proposal be judged professionally?"
   },
   "a": [
    {
     "de": "Der Vorschlag ist tragfähig, weil die Schwelle CFI > .95 dem etablierten Cutoff von Hu und Bentler entspricht und das Modell danach als bestätigt gilt.",
     "en": "The proposal is sound, because the threshold CFI > .95 matches the established Hu and Bentler cutoff and the model then counts as confirmed."
    },
    {
     "de": "Der Vorschlag ist tragfähig, sofern zusätzlich der RMSEA sinkt, weil zwei konvergierende Fit-Indizes eine datengeleitete Respezifikation absichern.",
     "en": "The proposal is sound, provided RMSEA also decreases, because two converging fit indices safeguard a data-driven respecification."
    },
    {
     "de": "Der Vorschlag ist riskant, weil rein datengeleitete Respezifikation Zufallsstrukturen der Stichprobe ausnutzt und ohne Theoriebegründung und Kreuzvalidierung kaum generalisiert.",
     "en": "The proposal is risky, because purely data-driven respecification exploits chance patterns in the sample and hardly generalises without theoretical grounding and cross-validation."
    },
    {
     "de": "Der Vorschlag ist riskant, weil freigesetzte Fehlerkovarianzen die Freiheitsgrade erhöhen und das Modell dadurch rechnerisch nicht mehr identifizierbar wird.",
     "en": "The proposal is risky, because freed error covariances increase the degrees of freedom and thereby render the model computationally no longer identifiable."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Rein datengeleitete Respezifikation über Modification Indices nutzt Zufallsstrukturen der Stichprobe aus (Capitalization on Chance); ohne theoretische Begründung und Kreuzvalidierung generalisieren solche Modelle schlecht. Der Verweis auf den Cutoff von Hu und Bentler ist verführerisch, doch ein erreichter Schwellenwert bestätigt kein Modell, das erst durch nachträgliches Freisetzen von Parametern dorthin gebracht wurde; zudem senkt das Freisetzen die Freiheitsgrade, statt sie zu erhöhen.",
    "en": "Purely data-driven respecification via modification indices exploits chance patterns in the sample (capitalization on chance); without theoretical justification and cross-validation such models generalise poorly. The reference to the Hu and Bentler cutoff is seductive, but a threshold reached only through post hoc freeing of parameters confirms nothing; moreover, freeing parameters lowers the degrees of freedom rather than raising them."
   }
  },
  {
   "q": {
    "de": "In einer Tagebuchstudie (14 Tage, 150 Personen) wird das abendliche Wohlbefinden auf die am selben Tag berichtete Stressbelastung regrediert. Das Mehrebenenmodell enthält einen zufälligen Achsenabschnitt und den unzentrierten Stresswert auf Ebene 1. Die Autorin liest den Steigungskoeffizienten als «an stressreicheren Tagen geht es einer Person schlechter». Wo liegt der entscheidende Fehler?",
    "en": "In a diary study (14 days, 150 persons), evening well-being is regressed on same-day reported stress. The multilevel model contains a random intercept and the uncentred stress score at level 1. The author reads the slope as \"on more stressful days a person feels worse\". Where is the decisive error?"
   },
   "a": [
    {
     "de": "Ohne zufällige Steigung bildet das Modell die Streuung des Zusammenhangs zwischen den Personen nicht ab, weshalb der Koeffizient selbst verzerrt geschätzt wird.",
     "en": "Without a random slope the model does not capture the between-person spread of the association, so the coefficient itself is estimated with bias."
    },
    {
     "de": "Der Koeffizient vermengt Unterschiede zwischen Personen mit Schwankungen innerhalb der Personen; erst Zentrierung am Personenmittelwert trennt beides.",
     "en": "The coefficient conflates between-person differences with within-person fluctuations; only person-mean centring separates the two."
    },
    {
     "de": "Unzentrierte Prädiktoren verschieben den Achsenabschnitt aus dem Wertebereich der Daten, wodurch der Steigungskoeffizient uninterpretierbar wird.",
     "en": "Uncentred predictors push the intercept outside the range of the data, which renders the slope uninterpretable."
    },
    {
     "de": "Bei 14 Messungen pro Person werden die Freiheitsgrade auf Ebene 1 zu hoch angesetzt, wodurch der Zusammenhang überschätzt wird.",
     "en": "With 14 measurements per person the level-1 degrees of freedom are set too high, which overestimates the association."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Ein unzentrierter Prädiktor auf Ebene 1 enthält Varianz zwischen und innerhalb der Personen; der geschätzte Koeffizient ist deshalb eine Mischung beider Effekte und trägt die Aussage über Tage innerhalb einer Person nicht. Die Zentrierung am Personenmittelwert, ergänzt um den Personenmittelwert als Prädiktor auf Ebene 2, trennt die Ebenen sauber (Enders & Tofighi, 2007). Die fehlende zufällige Steigung ist der stärkste Distraktor: Sie betrifft Standardfehler und die Variabilität des Effekts, hebt die Konfundierung der Ebenen aber nicht auf.",
    "en": "An uncentred level-1 predictor carries variance both between and within persons; the estimated coefficient is therefore a blend of both effects and does not support the statement about days within a person. Person-mean centring, complemented by the person mean as a level-2 predictor, separates the levels cleanly (Enders & Tofighi, 2007). The missing random slope is the strongest distractor: it affects standard errors and the variability of the effect but does not remove the conflation of levels."
   }
  }
 ],
 "06SM200-501": [
  {
   "q": {
    "de": "In einem Bias-Audit zeigt ein algorithmischer Persönlichkeitstest zwischen zwei Sprachgruppen konfigurale und metrische, aber keine skalare Messinvarianz. Welche Schlussfolgerung ist korrekt?",
    "en": "In a bias audit, an algorithmic personality test shows configural and metric but no scalar measurement invariance across two language groups. Which conclusion is correct?"
   },
   "a": [
    {
     "de": "Die Faktorladungen unterscheiden sich zwischen den Gruppen, weshalb der Test in den beiden Gruppen unterschiedliche Konstrukte erfasst.",
     "en": "The factor loadings differ between the groups, which means the test measures different constructs in the two groups."
    },
    {
     "de": "Beobachtete Mittelwertsunterschiede zwischen den Gruppen sind nicht eindeutig interpretierbar, weil sie auch auf Itembias statt auf echte Merkmalsunterschiede zurückgehen können.",
     "en": "Observed mean differences between the groups cannot be interpreted unambiguously, because they may reflect item bias rather than true trait differences."
    },
    {
     "de": "Die Reliabilität des Tests ist in mindestens einer der Gruppen ungenügend, weshalb zunächst die interne Konsistenz der Skalen verbessert werden muss.",
     "en": "The test's reliability is insufficient in at least one of the groups, which means the scales' internal consistency must be improved first."
    },
    {
     "de": "Die prädiktive Validität des Tests ist widerlegt, weil fehlende skalare Invarianz gleichbedeutend mit differenzieller Vorhersage in den Gruppen ist.",
     "en": "The test's predictive validity is refuted, because a lack of scalar invariance is equivalent to differential prediction across the groups."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Skalare Invarianz (gleiche Intercepts) ist die Voraussetzung dafür, Mittelwertsunterschiede zwischen Gruppen als echte Merkmalsunterschiede zu deuten; fehlt sie, können Gruppenunterschiede durch Itembias entstehen. Der verführerischste Distraktor verweist auf unterschiedliche Faktorladungen, doch das würde fehlende metrische Invarianz bedeuten, die hier gerade gegeben ist.",
    "en": "Scalar invariance (equal intercepts) is the precondition for interpreting group mean differences as true trait differences; without it, group differences may stem from item bias. The most tempting distractor points to differing factor loadings, but that would mean a lack of metric invariance, which is precisely what does hold here."
   }
  },
  {
   "q": {
    "de": "Ein Anbieter bewirbt ein KI-Screening, das aus Fragebogen- und Verhaltensdaten eine seltene Störung erkennen soll. Aus einer Validierungsstichprobe mit je 50 Prozent betroffenen und nicht betroffenen Personen berichtet er eine Sensitivität von .90 und eine Spezifität von .85. In der Zielpopulation der Klinik liegt die Prävalenz bei rund 2 Prozent. Welche Beurteilung ist diagnostisch korrekt?",
    "en": "A vendor markets an AI screening tool meant to detect a rare disorder from questionnaire and behavioural data. From a validation sample with 50 per cent affected and 50 per cent unaffected persons, the vendor reports a sensitivity of .90 and a specificity of .85. In the clinic's target population the prevalence is around 2 per cent. Which appraisal is diagnostically correct?"
   },
   "a": [
    {
     "de": "Die Kennwerte lassen sich direkt übertragen, weil Sensitivität und Spezifität prävalenzunabhängig sind und die Güte eines Verfahrens damit vollständig kennzeichnen.",
     "en": "The figures transfer directly, because sensitivity and specificity are independent of prevalence and thereby fully characterise an instrument's quality."
    },
    {
     "de": "Bei einer Prävalenz von 2 Prozent wäre der überwiegende Teil der positiven Befunde falsch positiv, weshalb ein positives Screeningergebnis allein keine diagnostische Entscheidung trägt.",
     "en": "At a prevalence of 2 per cent the great majority of positive results would be false positives, so a positive screening result alone cannot carry a diagnostic decision."
    },
    {
     "de": "Ein Absenken des Cut-off-Werts behebt das Problem, weil mit steigender Sensitivität auch der Anteil zutreffender positiver Befunde in der Zielpopulation zunimmt.",
     "en": "Lowering the cut-off score fixes the problem, because as sensitivity rises the share of correct positive results in the target population rises with it."
    },
    {
     "de": "Der entscheidende Mangel liegt in der fehlenden Normierung an einer klinischen Stichprobe, weil ohne aktuelle Normwerte kein Cut-off-Wert festgelegt werden darf.",
     "en": "The decisive shortcoming is the missing norming on a clinical sample, because no cut-off score may be set without up-to-date norms."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Sensitivität und Spezifität sind prävalenzunabhängig, der positive prädiktive Wert ist es nicht: Bei einer Basisrate von 2 Prozent stehen unter 1000 untersuchten Personen rund 18 richtig positiven etwa 147 falsch positive Befunde gegenüber; der positive prädiktive Wert liegt damit bei rund 11 Prozent (Meehl & Rosen, 1955). Der attraktivste Distraktor überträgt die an einer künstlich balancierten Stichprobe gewonnenen Kennwerte direkt auf die Klinik und verwechselt die Gütekennwerte des Verfahrens mit seinem Nutzen in der konkreten Anwendungssituation.",
    "en": "Sensitivity and specificity are independent of prevalence, but the positive predictive value is not: at a base rate of 2 per cent, among 1,000 people tested roughly 18 true positives are set against about 147 false positives, putting the positive predictive value at around 11 per cent (Meehl & Rosen, 1955). The most tempting distractor transfers figures obtained on an artificially balanced sample straight to the clinic and confuses an instrument's quality indices with its utility in the actual setting."
   }
  },
  {
   "q": {
    "de": "Sie erstellen im Auftrag eines Unternehmens ein eignungsdiagnostisches Gutachten über eine Bewerberin; vereinbarte Fragestellung ist die Passung zu einer Führungsposition. In Interview und Persönlichkeitsdiagnostik ergeben sich deutliche Hinweise auf eine depressive Symptomatik, während sich in den eignungsrelevanten Merkmalen keine Einschränkungen zeigen. Wie gehen Sie berufsethisch tragfähig vor?",
    "en": "On behalf of a company you are preparing an aptitude assessment report on a candidate; the agreed referral question is her fit for a leadership position. The interview and the personality assessment yield clear indications of a depressive symptomatology, while the job-relevant characteristics show no impairment. How do you proceed in a professionally and ethically defensible way?"
   },
   "a": [
    {
     "de": "Sie nehmen den Befund in das Gutachten auf, weil die Auftraggeberin für ihre Personalentscheidung Anspruch auf sämtliche im Verfahren gewonnenen Informationen über die Bewerberin hat.",
     "en": "You include the finding in the report, because for its staffing decision the commissioning company is entitled to every piece of information gathered about the candidate during the procedure."
    },
    {
     "de": "Sie informieren den betriebsärztlichen Dienst vertraulich, damit die Bewerberin bei einer Anstellung von Beginn weg fachliche Unterstützung erhält.",
     "en": "You confidentially inform the occupational health service, so that the candidate receives professional support from day one should she be hired."
    },
    {
     "de": "Sie beschränken das Gutachten auf die vereinbarte Fragestellung und sprechen den Befund allein in der Rückmeldung an die Bewerberin an, verbunden mit einem Hinweis auf Abklärungsmöglichkeiten.",
     "en": "You confine the report to the agreed referral question and raise the finding only in your feedback to the candidate, together with a pointer to options for further clarification."
    },
    {
     "de": "Sie brechen die Begutachtung ab und melden der Auftraggeberin, dass die Fragestellung wegen der klinischen Auffälligkeit unbeantwortbar bleibt.",
     "en": "You break off the assessment and inform the company that the referral question must remain unanswered because of the clinical finding."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Ein Gutachten ist an die vereinbarte Fragestellung gebunden: Befunde ausserhalb dieses Auftrags gehören nicht in den Bericht an die Auftraggeberin, während die untersuchte Person Anspruch auf eine verständliche Rückmeldung und auf Hinweise zu weiterführenden Abklärungen hat. Der attraktivste Distraktor argumentiert fürsorglich über den betriebsärztlichen Dienst; auch dies wäre jedoch eine Bekanntgabe an Dritte und setzte die ausdrückliche Einwilligung der Bewerberin voraus. Fürsorgliche Absicht ersetzt die Einwilligung nicht.",
    "en": "An assessment report is bound to the agreed referral question: findings outside that remit do not belong in the report to the commissioning company, while the person assessed is entitled to comprehensible feedback and to pointers towards further clarification. The most tempting distractor argues from a duty of care via the occupational health service; that too, however, would be a disclosure to a third party and would require the candidate's explicit consent. Good intentions do not replace consent."
   }
  }
 ],
 "06SM200-502": [
  {
   "q": {
    "de": "Eine Fitness-App-Nutzerin hat seit Wochen die feste Absicht, dreimal wöchentlich zu joggen, setzt dies aber kaum um. Welche Intervention adressiert ihr Problem nach dem Health Action Process Approach (HAPA) am direktesten?",
    "en": "A fitness app user has firmly intended for weeks to go jogging three times a week but hardly ever follows through. According to the Health Action Process Approach (HAPA), which intervention addresses her problem most directly?"
   },
   "a": [
    {
     "de": "Die Risikowahrnehmung stärken, indem die App die gesundheitlichen Folgen von Bewegungsmangel eindrücklicher und persönlicher darstellt.",
     "en": "Strengthening risk perception by having the app present the health consequences of physical inactivity more vividly and personally."
    },
    {
     "de": "Die Ergebniserwartungen verbessern, indem die App die Vorteile regelmässigen Joggens noch überzeugender und konkreter kommuniziert.",
     "en": "Improving outcome expectancies by having the app communicate the benefits of regular jogging even more convincingly and concretely."
    },
    {
     "de": "Handlungs- und Bewältigungsplanung anregen, indem die App konkrete Wenn-dann-Pläne für Zeitpunkt, Ort und mögliche Hindernisse erstellt.",
     "en": "Prompting action and coping planning by having the app create concrete if-then plans for time, place and possible obstacles."
    },
    {
     "de": "Die Verhaltensabsicht erhöhen, indem die App die Nutzerin täglich zu einer erneuten Bestätigung ihres Bewegungsziels auffordert.",
     "en": "Raising behavioural intention by having the app prompt the user every day to reconfirm her physical activity goal."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Die Nutzerin steckt in der Intentions-Verhaltens-Lücke: Die Absicht besteht, die Umsetzung fehlt. Im HAPA überbrücken Handlungs- und Bewältigungsplanung diese Lücke in der volitionalen Phase. Der verführerischste Distraktor setzt bei der Risikowahrnehmung an, doch diese gehört zur motivationalen Phase und übersetzt eine bereits vorhandene Absicht nicht in Verhalten.",
    "en": "The user is stuck in the intention-behaviour gap: the intention exists, but the behaviour does not follow. In HAPA, action and coping planning bridge this gap in the volitional phase. The most tempting distractor targets risk perception, but that belongs to the motivational phase and does not translate an already existing intention into behaviour."
   }
  },
  {
   "q": {
    "de": "Ein KI-Gesundheitscoach in einer Raucherentwöhnungs-App formuliert seine Botschaften selbst und wählt sie danach aus, welche Varianten die Nutzenden am längsten in der App halten. Über die Wochen werden die Schilderungen der Krankheitsfolgen immer drastischer, während Angaben dazu fehlen, wie wirksam die empfohlenen Schritte sind und wie gut die Nutzenden sie bewältigen können. Welche Folge ist gesundheitspsychologisch am wahrscheinlichsten?",
    "en": "An AI health coach in a smoking cessation app writes its own messages and selects them by which versions keep users in the app the longest. Over the weeks the depictions of the health consequences grow ever more drastic, while any information on how effective the recommended steps are and how well users can manage them is missing. Which consequence is most likely from a health psychology perspective?"
   },
   "a": [
    {
     "de": "Die Verhaltensänderung nimmt mit der Stärke der Bedrohung linear zu, weil grössere Furcht die Motivation zu Schutzhandlungen zuverlässig erhöht.",
     "en": "Behaviour change rises linearly with the strength of the threat, because greater fear reliably raises the motivation to act protectively."
    },
    {
     "de": "Die Botschaften bleiben folgenlos, weil Furchtappelle in der Gesundheitskommunikation von vornherein keine Verhaltensänderung auslösen können.",
     "en": "The messages remain inconsequential, because fear appeals in health communication cannot trigger behaviour change in the first place."
    },
    {
     "de": "Die Nutzenden wechseln in die Furchtkontrolle und wehren die Botschaften ab, weil der hohen Bedrohung keine Information zu Handlungs- und Selbstwirksamkeit gegenübersteht.",
     "en": "Users switch into fear control and fend the messages off, because the high threat is not matched by any information on response efficacy and self-efficacy."
    },
    {
     "de": "Die Wirkung hängt allein von der Ausspielhäufigkeit ab, weil wiederholte Exposition die Risikowahrnehmung dauerhaft anhebt und darüber das Verhalten verändert.",
     "en": "The effect depends solely on delivery frequency, because repeated exposure durably raises risk perception and thereby changes behaviour."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Nach dem erweiterten Modell paralleler Prozesse (Extended Parallel Process Model, EPPM; Witte, 1992) entscheidet das Verhältnis von wahrgenommener Bedrohung zu wahrgenommener Wirksamkeit darüber, ob Gefahrenkontrolle (Schutzverhalten) oder Furchtkontrolle (Abwehr, Vermeidung, Ablehnung der Botschaft) einsetzt; ein auf Verweildauer optimiertes System steigert die Bedrohung, liefert aber keine Wirksamkeitsinformation. Der attraktivste Distraktor unterstellt einen linearen Zusammenhang zwischen Furchtstärke und Verhaltensänderung und übersieht genau diese zweite Komponente.",
    "en": "According to the extended parallel process model (EPPM; Witte, 1992) the ratio of perceived threat to perceived efficacy decides whether danger control (protective action) or fear control (defensiveness, avoidance, message rejection) sets in; a system optimised for time-in-app ramps up the threat but supplies no efficacy information. The most tempting distractor assumes a linear link between fear intensity and behaviour change and overlooks precisely this second component."
   }
  },
  {
   "q": {
    "de": "Ein Präventionsprojekt will Stressbewältigung in einer sozioökonomisch benachteiligten Gemeinde ausschliesslich über eine KI-gestützte Smartphone-App anbieten. Welcher Einwand wiegt aus Sicht des Moduls (Fa9 Diversität, Fu3 soziales Umfeld gestalten) am schwersten?",
    "en": "A prevention project plans to offer stress management in a socioeconomically disadvantaged community exclusively via an AI-supported smartphone app. From the module's perspective (Fa9 diversity, Fu3 shaping the social environment), which objection carries the most weight?"
   },
   "a": [
    {
     "de": "Die App müsste zuerst an einer studentischen Stichprobe validiert werden, weil sich deren Ergebnisse verlässlich auf andere Bevölkerungsgruppen übertragen lassen.",
     "en": "The app would first have to be validated in a student sample, because such results transfer reliably to other population groups."
    },
    {
     "de": "Ein rein appbasiertes Angebot kann bestehende gesundheitliche Ungleichheiten verstärken, weil Zugang, digitale Kompetenzen und Passung ungleich verteilt sind.",
     "en": "An app-only offering can widen existing health inequalities, because access, digital skills and cultural fit are unevenly distributed."
    },
    {
     "de": "Digitale Stressinterventionen wirken generell schwächer als Präsenzangebote, weshalb für die Gemeinde primär Kurse vor Ort infrage kommen.",
     "en": "Digital stress interventions are generally weaker than in-person offerings, which is why on-site courses should be the primary option for this community."
    },
    {
     "de": "Das Hauptproblem liegt beim Serverstandort, weil Gesundheitsdaten in der Regel auf Servern in der Schweiz gespeichert werden sollten.",
     "en": "The main problem is server location, since health data should as a rule be stored on servers in Switzerland."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Digitale Angebote setzen Zugang, Geräte und digitale Gesundheitskompetenz voraus; sind diese ungleich verteilt, profitieren vor allem ohnehin begünstigte Gruppen, und bestehende Ungleichheiten verschärfen sich (interventionsbedingte Ungleichheit). Der Serverstandort-Distraktor klingt professionell, benennt aber weder das Kernproblem der Passung, noch stimmt seine pauschale Rechtsbehauptung.",
    "en": "Digital offerings presuppose access, devices and digital health literacy; when these are unevenly distributed, already advantaged groups benefit most and existing inequalities widen (intervention-generated inequality). The server-location distractor sounds professional, but it neither names the core problem of fit nor is its sweeping legal claim accurate."
   }
  }
 ],
 "06SM200-s04": [
  {
   "q": {
    "de": "Ein Foundation Model sagt die Antworten von Vierjährigen in False-Belief-Aufgaben mit hoher Trefferquote vorher. Ein Kommilitone folgert, das Modell erkläre damit die Entwicklung der Theory of Mind. Welche Einschätzung ist wissenschaftlich haltbar?",
    "en": "A foundation model predicts four-year-olds' answers in false-belief tasks with high accuracy. A fellow student concludes that the model thereby explains the development of theory of mind. Which assessment is scientifically sound?"
   },
   "a": [
    {
     "de": "Die Folgerung trifft zu, weil hohe Vorhersagegüte in der Wissenschaftstheorie als hinreichender Beleg für den zugrunde liegenden Mechanismus gilt.",
     "en": "The conclusion holds, because in philosophy of science high predictive accuracy counts as sufficient evidence for the underlying mechanism."
    },
    {
     "de": "Die Folgerung trifft zu, sobald das Modell auch die Antworten von Dreijährigen korrekt vorhersagt, weil dann beide Entwicklungsstufen abgedeckt sind.",
     "en": "The conclusion holds as soon as the model also predicts three-year-olds' answers correctly, because both developmental stages are then covered."
    },
    {
     "de": "Die Folgerung ist unhaltbar, weil Sprachmodelle kindliche Verhaltensdaten nicht sinnvoll vorhersagen können und der Befund darum ein Artefakt sein dürfte.",
     "en": "The conclusion is untenable, because language models cannot meaningfully predict children's behavioural data, so the finding is probably an artefact."
    },
    {
     "de": "Die Folgerung ist voreilig, weil hohe Vorhersagegüte auch ohne Übereinstimmung der Mechanismen entsteht und mechanistische Erklärung zusätzliche Prüfungen verlangt.",
     "en": "The conclusion is premature, because high predictive accuracy can arise without any match in mechanisms, and mechanistic explanation requires additional tests."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Hohe Vorhersagegüte kann auf ganz anderen Regularitäten beruhen als dem zu erklärenden Entwicklungsmechanismus; Vorhersage und mechanistische Erklärung sind unterschiedliche wissenschaftliche Ziele, und Erklärung verlangt zusätzliche Prüfungen wie Prozessanalysen oder gezielte Modellmanipulationen. Der verführerischste Distraktor erklärt Vorhersageerfolg zum hinreichenden Mechanismusbeleg und verwechselt damit genau diese beiden Ziele.",
    "en": "High predictive accuracy can rest on entirely different regularities than the developmental mechanism to be explained; prediction and mechanistic explanation are distinct scientific goals, and explanation demands additional tests such as process analyses or targeted model manipulations. The most tempting distractor treats predictive success as sufficient evidence for the mechanism and thereby conflates exactly these two goals."
   }
  },
  {
   "q": {
    "de": "Für Ihre Seminararbeit lassen Sie sich von einem Sprachmodell den Forschungsstand zum Ego-Depletion-Effekt zusammenfassen. Das Modell schildert die Originalbefunde als gesicherten Effekt; die seit Jahren publizierten präregistrierten Mehrlabor-Replikationen mit Effektschätzungen nahe null bleiben unerwähnt. Welche Erklärung für dieses Muster ist fachlich am tragfähigsten?",
    "en": "For your seminar paper you ask a language model to summarise the state of research on the ego depletion effect. The model presents the original findings as an established effect; the pre-registered multi-lab replications with effect estimates close to zero, published years ago, go unmentioned. Which explanation for this pattern holds up best?"
   },
   "a": [
    {
     "de": "Das Modell gibt die Publikationslage unverzerrt wieder; das Fehlen der Replikationen spricht dafür, dass der Effekt in der Fachdiskussion unbestritten geblieben ist.",
     "en": "The model reflects the publication record without distortion; the absence of the replications suggests the effect has remained uncontested in the field."
    },
    {
     "de": "Das Modell gewichtet Aussagen nach Häufigkeit und Prominenz im Trainingskorpus, weshalb der vielfach zitierte Originalbefund die kleinere Replikationsliteratur überdeckt.",
     "en": "The model weights claims by their frequency and prominence in the training corpus, so the heavily cited original finding drowns out the smaller replication literature."
    },
    {
     "de": "Das Modell kennt nur Publikationen bis zu seinem Trainingsstichtag, weshalb die Replikationsbefunde in einer Zusammenfassung dieser Art systematisch fehlen müssen.",
     "en": "The model only knows publications up to its training cut-off, so replication findings must be systematically absent from a summary of this kind."
    },
    {
     "de": "Das Modell bevorzugt methodisch strenge Arbeiten, weshalb präregistrierte Replikationen erst nach einer ausdrücklichen Nachfrage in der Antwort auftauchen.",
     "en": "The model favours methodologically rigorous work, which is why pre-registered replications only surface in its answer once you ask for them explicitly."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Sprachmodelle bilden nicht den Evidenzstand ab, sondern die Verteilung von Formulierungen im Trainingskorpus; ein jahrzehntelang zitierter Originalbefund ist dort ungleich häufiger vertreten als die spätere, kleinere Replikationsliteratur, in der die Effektschätzungen nahe null liegen (Hagger et al., 2016). Der attraktivste Distraktor schiebt es auf den Trainingsstichtag, doch die Replikationen sind seit Jahren publiziert; das Problem ist die Gewichtung, nicht die Aktualität.",
    "en": "Language models do not mirror the state of the evidence but the distribution of wordings in their training corpus; an original finding cited for decades is far better represented there than the later, smaller replication literature, whose effect estimates lie close to zero (Hagger et al., 2016). The most tempting distractor blames the training cut-off, but the replications have been published for years; the problem is weighting, not recency."
   }
  },
  {
   "q": {
    "de": "Eine Personalleiterin will Mitarbeitende ab 55 Jahren aus einer anspruchsvollen Beratungstätigkeit herausnehmen. Sie stützt sich auf eine Querschnittsstudie, in der die kognitive Leistungsfähigkeit mit steigendem Alter deutlich abfällt, und bittet Sie um eine fachliche Einschätzung. Welche Einschätzung ist entwicklungspsychologisch tragfähig?",
    "en": "An HR manager wants to remove employees aged 55 and over from a demanding advisory role. She relies on a cross-sectional study in which cognitive performance declines markedly with age, and asks you for a professional appraisal. Which appraisal holds up developmentally?"
   },
   "a": [
    {
     "de": "Der Befund stützt die Massnahme, weil die kognitive Leistungsfähigkeit ab dem mittleren Erwachsenenalter über alle Fähigkeitsbereiche hinweg gleichmässig zurückgeht.",
     "en": "The finding supports the measure, because from middle adulthood on cognitive performance declines evenly across all ability domains."
    },
    {
     "de": "Der Befund rechtfertigt die Massnahme, sobald er längsschnittlich repliziert ist, weil Längsschnittdaten den altersbedingten Abbau kognitiver Leistungsfähigkeit unverzerrt abbilden.",
     "en": "The finding justifies the measure as soon as it is replicated longitudinally, because longitudinal data depict age-related cognitive decline without distortion."
    },
    {
     "de": "Der Befund ist belanglos, weil kognitive Testleistungen und berufliche Leistung in der Erwachsenenentwicklung grundsätzlich unabhängig voneinander sind.",
     "en": "The finding is irrelevant, because in adult development cognitive test performance and job performance are fundamentally independent of one another."
    },
    {
     "de": "Der Befund trägt die Massnahme nicht, weil querschnittliche Altersunterschiede mit Kohorteneffekten konfundiert sind und der Rückgang vor allem fluide Fähigkeiten betrifft.",
     "en": "The finding does not carry the measure, because cross-sectional age differences are confounded with cohort effects and the decline concerns mainly fluid abilities."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Querschnittliche Altersunterschiede vermengen Alters- mit Kohorteneffekten, etwa unterschiedlicher Bildung und Berufserfahrung, und der Altersverlauf ist bereichsspezifisch: Fluide Fähigkeiten wie die Verarbeitungsgeschwindigkeit gehen früher zurück, kristalline, erfahrungsbasierte Fähigkeiten bleiben lange stabil und tragen gerade eine Beratungstätigkeit. Der attraktivste Distraktor verlangt bloss eine Längsschnittreplikation und übersieht, dass Längsschnittdaten ihrerseits durch Übungs- und selektive Ausfalleffekte verzerrt sind und ein Gruppenverlauf ohnehin nichts über die Leistungsfähigkeit einer einzelnen Person aussagt.",
    "en": "Cross-sectional age differences mix age effects with cohort effects such as differing education and work experience, and the age trajectory is domain-specific: fluid abilities like processing speed decline earlier, while crystallised, experience-based abilities stay stable for a long time and are precisely what an advisory role draws on. The most tempting distractor merely calls for a longitudinal replication and overlooks that longitudinal data are themselves biased by practice and selective attrition effects, and that a group trajectory says nothing about an individual's capability anyway."
   }
  }
 ],
 "06SM200-s05": [
  {
   "q": {
    "de": "Ein KI-gestütztes Screening lässt 50 Prozent der männlichen, aber nur 35 Prozent der weiblichen Bewerbenden in die nächste Runde; das Geschlecht ist kein Eingabemerkmal des Modells. Wie beurteilen Sie diesen Befund im Fairness-Audit?",
    "en": "An AI-supported screening tool advances 50 percent of male applicants but only 35 percent of female applicants to the next round; gender is not an input feature of the model. How do you assess this finding in a fairness audit?"
   },
   "a": [
    {
     "de": "Das Auswahlquotenverhältnis von 0.70 unterschreitet die Vier-Fünftel-Grenze und indiziert adverse impact, auch ohne Geschlecht als Eingabemerkmal.",
     "en": "The selection-rate ratio of 0.70 falls below the four-fifths threshold and indicates adverse impact, even without gender as an input feature."
    },
    {
     "de": "Die Differenz von 15 Prozentpunkten liegt unter der kritischen Schwelle von 20 Prozent, weshalb kein Hinweis auf adverse impact vorliegt.",
     "en": "The gap of 15 percentage points stays below the critical threshold of 20 percent, so there is no indication of adverse impact."
    },
    {
     "de": "Da das Modell das Geschlecht gar nicht verarbeitet, ist eine indirekte Benachteiligung ausgeschlossen und der Unterschied zufallsbedingt.",
     "en": "Since the model does not process gender at all, indirect disadvantage is ruled out and the observed difference must be due to chance."
    },
    {
     "de": "Adverse impact liegt erst dann vor, wenn eine bewusste Benachteiligungsabsicht der Entwickler des Verfahrens nachgewiesen ist.",
     "en": "Adverse impact only exists once a deliberate intent to disadvantage on the part of the tool's developers has been demonstrated."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Die Vier-Fünftel-Regel vergleicht Auswahlquoten als Verhältnis: 35/50 ergibt 0.70 und liegt unter 0.80, also besteht ein Hinweis auf adverse impact; Proxy-Variablen können Geschlechtsinformation auch ohne direktes Merkmal transportieren. Der verführerischste Distraktor rechnet mit der Prozentpunktdifferenz statt mit dem Quotenverhältnis; eine Benachteiligungsabsicht ist für adverse impact nie erforderlich.",
    "en": "The four-fifths rule compares selection rates as a ratio: 35/50 equals 0.70, below the 0.80 cut-off, so adverse impact is indicated; proxy variables can carry gender information even when the feature itself is absent. The most tempting distractor works with the percentage-point difference instead of the ratio; intent to discriminate is never required for adverse impact."
   }
  },
  {
   "q": {
    "de": "Ein Anbieter zeigt, dass sein Auswahl-Score in beiden Bewerbergruppen gleich gut kalibriert ist, und erklärt das Verfahren deshalb für fair; die Basisraten der Eignung unterscheiden sich zwischen den Gruppen. Wie bewerten Sie diese Argumentation fachlich?",
    "en": "A vendor shows that its selection score is equally well calibrated in both applicant groups and therefore declares the procedure fair; the base rates of suitability differ between the groups. How do you evaluate this argument professionally?"
   },
   "a": [
    {
     "de": "Sie trägt, weil ein kalibrierter Score bei unterschiedlichen Basisraten automatisch auch gleiche Fehlerraten in beiden Gruppen gewährleistet.",
     "en": "It holds, because with differing base rates a calibrated score automatically guarantees equal error rates in both applicant groups as well."
    },
    {
     "de": "Sie trägt, weil Kalibrierung das im EU AI Act für Hochrisikosysteme verbindlich vorgeschriebene und damit massgebliche Fairnessmass ist.",
     "en": "It holds, because calibration is the fairness measure that the EU AI Act makes binding, and thus decisive, for high-risk systems."
    },
    {
     "de": "Sie greift zu kurz, weil bei ungleichen Basisraten Kalibrierung und angeglichene Fehlerraten nicht zugleich erfüllbar sind; das Kriterium muss begründet gewählt werden.",
     "en": "It falls short, because with unequal base rates calibration and equalised error rates cannot be satisfied at the same time; the criterion must be chosen with justification."
    },
    {
     "de": "Sie greift zu kurz, weil Kalibrierung nur bei gleich grossen Stichproben der beiden Gruppen ein statistisch belastbares Fairnessmass darstellt.",
     "en": "It falls short, because calibration is a statistically sound fairness measure only when the two groups have samples of equal size."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Nach dem Unmöglichkeitsresultat von Kleinberg et al. und Chouldechova kann ein kalibrierter Score bei unterschiedlichen Basisraten nicht zugleich gleiche falsch-positive und falsch-negative Raten aufweisen; ein Audit muss deshalb offenlegen, welches Fairnesskriterium mit welcher Begründung gilt. Der verführerischste Distraktor behauptet genau das Gegenteil, nämlich dass Kalibrierung gleiche Fehlerraten garantiere; der EU AI Act schreibt zudem kein einzelnes Fairnessmass vor.",
    "en": "According to the impossibility results of Kleinberg et al. and Chouldechova, a calibrated score cannot simultaneously show equal false-positive and false-negative rates when base rates differ; an audit therefore has to state which fairness criterion applies and why. The most tempting distractor claims the exact opposite, namely that calibration guarantees equal error rates; moreover, the EU AI Act does not prescribe any single fairness metric."
   }
  },
  {
   "q": {
    "de": "Eine Arbeitsgruppe sucht in einem fMRT-Datensatz zuerst über alle Versuchspersonen hinweg jene Voxel, die zwischen den beiden Bedingungen am stärksten unterscheiden, definiert daraus eine Region of Interest und berichtet anschliessend aus denselben Daten die mittlere Aktivierungsdifferenz in dieser Region als Beleg für den Effekt. Welcher methodische Einwand trifft den berichteten Effekt im Kern?",
    "en": "A research group first searches an fMRI dataset across all participants for the voxels that differentiate most strongly between the two conditions, defines a region of interest from them, and then reports the mean activation difference in that region from the same data as evidence for the effect. Which methodological objection goes to the heart of the reported effect?"
   },
   "a": [
    {
     "de": "Die Region wurde funktionell statt anatomisch bestimmt; Aktivierungsdifferenzen lassen sich ausschliesslich in anatomisch definierten Regionen sinnvoll prüfen.",
     "en": "The region was defined functionally rather than anatomically, and activation differences can meaningfully be tested only in anatomically defined regions."
    },
    {
     "de": "Die Voxelauswahl über alle Versuchspersonen hinweg mittelt individuelle Unterschiede weg; die berichtete Effektstärke fällt dadurch systematisch zu klein aus.",
     "en": "Selecting voxels across all participants averages out individual differences, so the reported effect size systematically comes out too small."
    },
    {
     "de": "Die Region wurde mit genau jenem Kontrast ausgewählt, der anschliessend in ihr geprüft wird; die berichtete Effektstärke fällt dadurch systematisch zu gross aus.",
     "en": "The region was selected with exactly the contrast that is then tested within it, so the reported effect size systematically comes out too large."
    },
    {
     "de": "Die Aktivierungsdifferenz wurde über Bedingungen statt über Versuchspersonen gemittelt; der Effekt müsste stattdessen als Interaktion modelliert werden.",
     "en": "The activation difference was averaged across conditions rather than across participants, so the effect would have to be modelled as an interaction instead."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Dieselben Daten dienen hier erst der Auswahl der Region und danach dem Test des Effekts; die Analyse ist damit zirkulär (double dipping). Die Selektion greift genau jenes Rauschen mit ab, das die beiden Bedingungen zufällig trennt, weshalb der anschliessende Test in denselben Daten überhöht ausfällt; er braucht unabhängige Daten aus einem separaten Localizer oder eine Kreuzvalidierung (Kriegeskorte et al., 2009). Der verführerischste Distraktor dreht die Verzerrungsrichtung um: Eine gruppenbasierte Voxelauswahl kann individuelle Lokalisationsunterschiede zwar verwischen, doch das Kernproblem ist hier die Überhöhung durch die Selektion, nicht eine Abschwächung. Funktional definierte Regionen sind zulässig, sofern sie an unabhängigen Daten bestimmt werden.",
    "en": "Here the same data first serve to select the region and then to test the effect, which makes the analysis circular (double dipping). The selection also picks up exactly the noise that happens to separate the two conditions, so the subsequent test in the same data comes out inflated; it requires independent data from a separate localiser or from cross-validation (Kriegeskorte et al., 2009). The most tempting distractor reverses the direction of bias: group-based voxel selection can indeed blur individual differences in localisation, but the core problem here is inflation through selection, not attenuation. Functionally defined regions are permissible as long as they are determined on independent data."
   }
  }
 ],
 "06SM200-s06": [
  {
   "q": {
    "de": "Eine randomisierte Studie (n = 800) zeigt, dass eine App mit kognitiv-verhaltenstherapeutischen Übungen depressive Symptome stärker reduziert als eine Warteliste (p < .001). Der Anbieter bewirbt die App als «klinisch validierte Intervention». Welche Einschätzung der Evidenzbasis ist korrekt?",
    "en": "A randomised trial (n = 800) shows that an app with cognitive-behavioural exercises reduces depressive symptoms more than a waiting list (p < .001). The provider markets the app as a 'clinically validated intervention'. Which assessment of the evidence base is correct?"
   },
   "a": [
    {
     "de": "Die Randomisierung stellt sicher, dass der gefundene Effekt kausal auf die spezifischen kognitiv-verhaltenstherapeutischen Inhalte der App zurückgeht.",
     "en": "Randomisation ensures that the observed effect is causally attributable to the app's specific cognitive-behavioural content."
    },
    {
     "de": "Die grosse Stichprobe und das kleine p garantieren, dass der Effekt auch klinisch bedeutsam und für die Versorgungspraxis unmittelbar relevant ist.",
     "en": "The large sample and the small p value guarantee that the effect is also clinically meaningful and directly relevant to routine care."
    },
    {
     "de": "Die Symptomreduktion bestätigt das kognitive Störungsmodell der Depression, da die geprüfte Intervention direkt aus diesem Modell abgeleitet wurde.",
     "en": "The symptom reduction confirms the cognitive model of depression, since the tested intervention was derived directly from this model."
    },
    {
     "de": "Der Wartelisten-Vergleich lässt Erwartungs- und Zuwendungseffekte unkontrolliert, weshalb die spezifische Wirksamkeit der Inhalte überschätzt werden kann.",
     "en": "The waiting-list comparison leaves expectancy and attention effects uncontrolled, so the specific efficacy of the content may be overestimated."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Wartelisten-Kontrollen kontrollieren weder Erwartungs- noch Zuwendungseffekte; Effekte gegenüber Wartelisten fallen systematisch grösser aus als gegenüber aktiven Kontrollbedingungen, weshalb der Schluss auf spezifische Wirksamkeit nicht gedeckt ist. Der verführerischste Distraktor überdehnt die Randomisierung: Sie sichert den kausalen Kontrast App gegen Warten, isoliert aber nicht die spezifischen Inhalte als Wirkfaktor.",
    "en": "Waiting-list controls account for neither expectancy nor attention effects; effects against waiting lists are systematically larger than against active control conditions, so the claim of specific efficacy is not supported. The most tempting distractor overstretches randomisation: it secures the causal contrast of app versus waiting, but does not isolate the specific content as the active ingredient."
   }
  },
  {
   "q": {
    "de": "Sie evaluieren für eine Beratungsstelle, ob ein dialogisches KI-System Krisensignale zuverlässig erkennt und an Fachhilfe weiterverweist. Welches Vorgehen liefert die aussagekräftigste Sicherheitsprüfung?",
    "en": "For a counselling service you are evaluating whether a conversational AI system reliably recognises crisis signals and refers users to professional help. Which procedure provides the most informative safety check?"
   },
   "a": [
    {
     "de": "Standardisierte Fallvignetten mit auch indirekten Warnsignalen systematisch testen und vorrangig die Rate übersehener Krisen samt Qualität der Weiterverweisung auswerten.",
     "en": "Systematically test standardised case vignettes that also include indirect warning signs, and evaluate above all the rate of missed crises together with referral quality."
    },
    {
     "de": "Die vom Anbieter berichtete Gesamtgenauigkeit übernehmen, da sie Sensitivität und Spezifität des Systems in einer einzigen belastbaren Kennzahl bündelt.",
     "en": "Adopt the overall accuracy reported by the vendor, since it bundles the system's sensitivity and specificity into a single robust figure."
    },
    {
     "de": "Ausschliesslich explizite Krisenäusserungen testen, da nur eindeutige Formulierungen eine valide und reproduzierbare Messung der Erkennungsleistung erlauben.",
     "en": "Test only explicit crisis statements, since only unambiguous wording allows a valid and reproducible measurement of detection performance."
    },
    {
     "de": "Die Zufriedenheitswerte der Nutzenden heranziehen, da sich sicherheitsrelevante Mängel eines Systems zuverlässig in sinkenden Bewertungen niederschlagen.",
     "en": "Draw on user satisfaction ratings, since safety-relevant shortcomings of a system reliably show up in declining review scores."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Sicherheitsprüfungen brauchen systematische, standardisierte Vignetten inklusive indirekter Warnsignale, denn übersehene Krisen (falsch Negative) sind hier der kritischste Fehlertyp und die Weiterverweisung an Fachhilfe die zentrale Schutzfunktion. Der verführerischste Distraktor ist die Gesamtgenauigkeit: Bei seltenen Krisenfällen kann sie hoch bleiben, obwohl viele Krisen übersehen werden, und sie verrechnet ungleich schwere Fehlerarten miteinander.",
    "en": "Safety evaluation requires systematic, standardised vignettes including indirect warning signs, because missed crises (false negatives) are the most critical error type here and referral to professional help is the central protective function. The most tempting distractor is overall accuracy: with rare crisis cases it can stay high even though many crises are missed, and it averages together error types of very different severity."
   }
  },
  {
   "q": {
    "de": "In einer Mitarbeitendenbefragung, die Sie im Auftrag der Geschäftsleitung durchführen, wurde den Teilnehmenden Anonymität zugesichert. Nach der Erhebung verlangt die Geschäftsleitung die Auswertung nach Abteilung, um gezielt intervenieren zu können; eine der Abteilungen umfasst vier Personen. Welches Vorgehen ist berufsethisch tragfähig?",
    "en": "In an employee survey you are running on behalf of the management board, participants were promised anonymity. After data collection the board asks for results broken down by department so that it can intervene in a targeted way; one of the departments has four members. Which course of action is defensible in professional-ethical terms?"
   },
   "a": [
    {
     "de": "Sie liefern die Auswertung der kleinen Abteilung und vermerken im Bericht, dass die Zahlen wegen der geringen Gruppengrösse vorsichtig zu lesen sind.",
     "en": "You deliver the results for the small department and note in the report that the figures should be read cautiously given the small group size."
    },
    {
     "de": "Sie berichten Ergebnisse erst ab einer verbindlich festgelegten Mindestgruppengrösse und legen der Geschäftsleitung offen, warum diese Grenze gilt.",
     "en": "You report results only for groups above a firmly set minimum size and explain to the board why this threshold applies."
    },
    {
     "de": "Sie liefern die Auswertung der kleinen Abteilung, nachdem Sie Namen und Funktionen entfernt haben, weil die Daten damit der Anonymitätszusage genügen.",
     "en": "You deliver the results for the small department after removing names and job titles, since the data then satisfy the promise of anonymity."
    },
    {
     "de": "Sie holen bei den vier Personen nachträglich die Zustimmung ein und geben deren Auswertung frei, sobald die Mehrheit von ihnen einwilligt.",
     "en": "You obtain consent from the four people afterwards and release their results as soon as a majority of them agrees."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Die Anonymitätszusage bindet unabhängig davon, wer den Auftrag erteilt und bezahlt; bei vier Personen sind einzelne Antworten faktisch zuordenbar. Schutz entsteht hier nur über eine verbindliche Mindestgruppengrösse (Sperrgrenze), unterhalb derer nicht ausgewertet wird und die gegenüber der Auftraggeberin offengelegt und begründet wird. Der verführerischste Distraktor ist die nachträgliche Zustimmung: Sie ist im Abhängigkeitsverhältnis zur Arbeitgeberin nicht frei, ein Mehrheitsentscheid übergeht die widersprechende Minderheit, und eine bereits gegebene Zusicherung lässt sich nicht rückwirkend aufheben. Das Entfernen von Namen und Funktionen genügt ebenfalls nicht, weil hier die Gruppengrösse selbst die Re-Identifikation ermöglicht; ein blosser Lesehinweis im Bericht ändert daran nichts.",
    "en": "The promise of anonymity binds regardless of who commissions and pays for the survey; with four people individual answers are effectively attributable. Protection arises here only through a binding minimum group size below which no breakdown is reported, disclosed and justified to the client. The most tempting distractor is retrospective consent: in a relationship of dependency on the employer it is not freely given, a majority decision overrides the dissenting minority, and an assurance already made cannot be undone retroactively. Removing names and job titles is not sufficient either, because here the group size itself makes re-identification possible; a mere caveat in the report does not change that."
   }
  }
 ],
 "06SM200-510": [
  {
   "q": {
    "de": "Ein Onlinehändler testet zwei Preisdarstellungen: In Variante 1 kostet die Kartenzahlung 2 Franken «Aufschlag», in Variante 2 gibt es 2 Franken «Rabatt» bei Vorkasse; die Endpreise sind identisch. Deutlich mehr Kundinnen und Kunden brechen den Kauf in Variante 1 ab. Welche Erklärung trägt diesen Befund?",
    "en": "An online retailer tests two price displays: in version 1, card payment carries a 2-franc 'surcharge'; in version 2 there is a 2-franc 'discount' for prepayment; final prices are identical. Noticeably more customers abandon the purchase in version 1. Which explanation accounts for this finding?"
   },
   "a": [
    {
     "de": "Ankereffekt: Der ausgewiesene Aufschlag verschiebt den wahrgenommenen Referenzpreis nach oben und lässt das gesamte Angebot teurer erscheinen.",
     "en": "Anchoring effect: the displayed surcharge shifts the perceived reference price upwards and makes the entire offer appear more expensive."
    },
    {
     "de": "Verlustaversion: Der Aufschlag wird als Verlust kodiert und wiegt psychologisch schwerer als der entgangene Rabatt, der nur ein ausgebliebener Gewinn ist.",
     "en": "Loss aversion: the surcharge is coded as a loss and weighs more heavily psychologically than the forgone discount, which is merely a missed gain."
    },
    {
     "de": "Hyperbolisches Diskontieren: Der sofort fällige Aufschlag wird stärker gewichtet als der zeitlich weiter entfernte und darum abgewertete Rabatt.",
     "en": "Hyperbolic discounting: the immediately due surcharge is weighted more strongly than the temporally more distant and therefore devalued discount."
    },
    {
     "de": "Verfügbarkeitsheuristik: Aufschläge sind aus Alltagserfahrungen leichter abrufbar und werden deshalb in der Kaufsituation überproportional beachtet.",
     "en": "Availability heuristic: surcharges are more easily retrieved from everyday experience and therefore receive disproportionate attention at purchase."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Nach der Prospect Theory werden Ergebnisse relativ zu einem Referenzpunkt als Gewinne oder Verluste kodiert, und die Wertfunktion verläuft für Verluste steiler; der Aufschlag wirkt darum stärker abschreckend als der entgangene Rabatt, obwohl die Endpreise identisch sind. Der verführerischste Distraktor ist der Ankereffekt: Ein Anker müsste die Preiswahrnehmung über einen zuerst gesetzten Zahlenwert verschieben, die Asymmetrie entsteht hier aber allein durch die Kodierung als Verlust oder Gewinn.",
    "en": "According to prospect theory, outcomes are coded as gains or losses relative to a reference point, and the value function is steeper for losses; the surcharge therefore deters more strongly than the forgone discount, even though final prices are identical. The most tempting distractor is anchoring: an anchor would have to shift price perception through an initially presented number, whereas the asymmetry here arises solely from coding the amount as a loss versus a gain."
   }
  },
  {
   "q": {
    "de": "Sie lassen ein LLM als «Silicon Sample» hundertfach ein Public-Goods-Spiel spielen, um Pilotdaten zu ersetzen. Das Modell kooperiert deutlich stabiler als menschliche Stichproben, deren Beiträge typischerweise bei 40 bis 60 Prozent starten und über die Runden zerfallen. Welche methodische Schlussfolgerung ist korrekt?",
    "en": "You have an LLM play a public-goods game a hundred times as a 'silicon sample' to replace pilot data. The model cooperates far more stably than human samples, whose contributions typically start at 40 to 60 percent and decay across rounds. Which methodological conclusion is correct?"
   },
   "a": [
    {
     "de": "Da das Modell auf menschlichen Texten trainiert wurde, bildet es die Verteilung menschlichen Entscheidungsverhaltens repräsentativ ab; die Humanbefunde sind veraltet.",
     "en": "Because the model was trained on human text, it represents the distribution of human decision behaviour representatively; the human findings are outdated."
    },
    {
     "de": "Mit Temperatur 0 und festem Prompt werden die Läufe vollständig reproduzierbar; damit ist die Simulation auch als valider Ersatz für Humandaten abgesichert.",
     "en": "With temperature 0 and a fixed prompt the runs become fully reproducible; this also establishes the simulation as a valid substitute for human data."
    },
    {
     "de": "Mit genügend zusätzlichen simulierten Durchläufen mitteln sich die Abweichungen heraus, weil der Standardfehler mit wachsender Stichprobe gegen null geht.",
     "en": "With enough additional simulated runs the deviations average out, because the standard error approaches zero as the sample size grows."
    },
    {
     "de": "Die Abweichung ist ein systematischer Bias, der durch mehr Durchläufe nicht verschwindet; die Simulation muss erst an menschlichen Benchmarkdaten validiert werden.",
     "en": "The deviation is a systematic bias that does not disappear with more runs; the simulation must first be validated against human benchmark data."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Die stabile Überkooperation ist ein systematischer Bias der Simulation und kein Stichprobenfehler; zusätzliche Durchläufe verkleinern nur die Zufallsstreuung, nicht die Verzerrung, weshalb Silicon Samples zuerst an menschlichen Benchmarkdaten validiert werden müssen. Der verführerischste Distraktor verwechselt Standardfehler und Bias; auch perfekte Reproduzierbarkeit bei Temperatur 0 belegt nur Reliabilität, nicht Validität.",
    "en": "The stable over-cooperation is a systematic bias of the simulation, not sampling error; additional runs shrink only random variation, not the bias, which is why silicon samples must first be validated against human benchmark data. The most tempting distractor confuses standard error with bias; likewise, perfect reproducibility at temperature 0 demonstrates only reliability, not validity."
   }
  },
  {
   "q": {
    "de": "Ein Onlineversicherer beauftragt Sie als Konsumentenpsycholog:in mit der Gestaltung der Abschlussstrecke. Gewünscht ist, die teuerste Zusatzdeckung vorauszuwählen und die Abwahl erst im zweiten Schritt anzubieten; interne Tests zeigen einen deutlichen Umsatzeffekt, die Rechtsabteilung sieht kein Hindernis. Welches Vorgehen ist berufsethisch tragfähig?",
    "en": "An online insurer hires you as a consumer psychologist to design its checkout flow. The request: preselect the most expensive supplementary cover and offer the opt-out only at the second step; internal tests show a marked revenue effect, and the legal department sees no obstacle. Which course of action is professionally defensible?"
   },
   "a": [
    {
     "de": "Den Default umsetzen und die Widerrufsquote beobachten; solange sie niedrig bleibt, entspricht die Vorauswahl offenbar dem Willen der Kundschaft.",
     "en": "Implement the default and monitor how often customers withdraw; as long as that stays low, the preselection evidently matches what customers want."
    },
    {
     "de": "Den Auftrag ablehnen und generell von Voreinstellungen abraten, weil jede Form der Entscheidungsarchitektur die Wahlfreiheit der Kundschaft einschränkt.",
     "en": "Turn the contract down and advise against defaults in general, because any form of choice architecture restricts customers' freedom of choice."
    },
    {
     "de": "Die Vorauswahl umsetzen und im Kleingedruckten darauf hinweisen, weil Transparenz über den Default die Gestaltung berufsethisch absichert.",
     "en": "Implement the preselection and flag it in the fine print, because transparency about the default makes the design professionally sound."
    },
    {
     "de": "Die Grundvariante als Default setzen, die Zusatzdeckung gleichrangig sichtbar anbieten und dem Unternehmen den damit verbundenen Umsatzeffekt beziffern.",
     "en": "Set the basic variant as the default, present the supplementary cover with equal visibility, and quantify the resulting revenue effect for the company."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Tragfähig ist eine Entscheidungsarchitektur, die die Wahlfreiheit erhält, die Trägheit der Kundschaft nicht gegen deren eigenes Interesse ausnutzt und dem Auftraggeber offenlegt, welchen Umsatzanteil das kostet. Die pauschale Ablehnung trägt nicht, weil ihre Begründung falsch ist: Eine neutrale Gestaltung gibt es nicht, irgendeine Voreinstellung ist unvermeidlich, und eine bewusst gesetzte Grundvariante schützt die Wahlfreiheit gerade. Der attraktivste Distraktor ist die niedrige Widerrufsquote als Zustimmungsbeleg: Sie misst genau jene Trägheit, die der Default ausnutzt, und taugt darum nicht als Nachweis einer gewollten Entscheidung.",
    "en": "A defensible choice architecture preserves freedom of choice, does not exploit customers' inertia against their own interest, and tells the client what share of revenue that costs. Blanket refusal does not hold up because its reasoning is wrong: there is no neutral design, some default is unavoidable, and a deliberately chosen basic variant is precisely what protects freedom of choice. The most tempting distractor treats a low withdrawal rate as proof of consent: it measures exactly the inertia the default exploits and therefore cannot show that a decision was actually wanted."
   }
  }
 ],
 "06SM200-511": [
  {
   "q": {
    "de": "Ein Patient lässt nach rechtshemisphärischem Mediainfarkt die linke Tellerhälfte unberührt und stösst links an Türrahmen, berichtet aber selbst über keinerlei Sehstörung. Die Perimetrie zeigt ein intaktes Gesichtsfeld. Welche Interpretation ist am besten begründet?",
    "en": "After a right-hemisphere MCA infarct, a patient leaves the left half of the plate untouched and bumps into door frames on the left, yet reports no visual problems at all. Perimetry shows an intact visual field. Which interpretation is best justified?"
   },
   "a": [
    {
     "de": "Eine homonyme Hemianopsie nach links, weil der Patient die linke Raumhälfte systematisch übersieht.",
     "en": "A left homonymous hemianopia, because the patient systematically overlooks the left half of space."
    },
    {
     "de": "Ein linksseitiger visuell-räumlicher Neglect, weil das Gesichtsfeld intakt ist und die linke Seite dennoch unbeachtet bleibt.",
     "en": "A left visuospatial neglect, because the visual field is intact yet the left side is still ignored."
    },
    {
     "de": "Eine Simultanagnosie, weil der Patient mehrere Objekte einer Szene nicht gleichzeitig erfassen kann.",
     "en": "A simultanagnosia, because the patient cannot grasp several objects of a scene at once."
    },
    {
     "de": "Eine visuelle Extinktion, weil einseitige Reize erkannt, doppelseitige aber nur halbseitig wahrgenommen werden.",
     "en": "A visual extinction, because single stimuli are seen but bilateral ones only on one side."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Ein perimetrisch intaktes Gesichtsfeld schliesst eine Hemianopsie als Ursache des Übersehens aus; das Vernachlässigen der linken Seite trotz erhaltener Sehleistung ist das Kennzeichen des Neglects. Die Hemianopsie ist der verführerischste Distraktor, scheitert aber genau an der intakten Perimetrie, und eine Extinktion zeigt sich erst bei doppelseitiger Simultanstimulation.",
    "en": "An intact visual field on perimetry rules out hemianopia as the cause of the omission; ignoring the left side despite preserved vision is the hallmark of neglect. Hemianopia is the most tempting distractor but fails precisely because perimetry is intact, and extinction only shows under bilateral simultaneous stimulation."
   }
  },
  {
   "q": {
    "de": "Copilot Chat erstellt zu einer Vignette mit linksseitigem Übersehen nach rechtshemisphärischem Schlaganfall die Verdachtsdiagnose «homonyme Hemianopsie». Wie prüfen Sie diese KI-Ausgabe fachlich am tragfähigsten?",
    "en": "For a vignette with left-sided omission after a right-hemisphere stroke, Copilot Chat proposes the diagnosis 'homonymous hemianopia'. How do you check this AI output most soundly?"
   },
   "a": [
    {
     "de": "Sie prüfen, ob die Vignette ein intaktes Gesichtsfeld nennt, denn dieser Befund spricht gegen eine Hemianopsie und für einen Neglect.",
     "en": "You check whether the vignette states an intact visual field, since this finding argues against hemianopia and for neglect."
    },
    {
     "de": "Sie übernehmen die Verdachtsdiagnose, denn linksseitiges Übersehen gilt als eindeutiges Leitsymptom der Hemianopsie.",
     "en": "You adopt the suspected diagnosis, since left-sided omission counts as a clear cardinal sign of hemianopia."
    },
    {
     "de": "Sie werten die Ausgabe als gesichert, sobald mehrere KI-Modelle unabhängig dieselbe Verdachtsdiagnose nennen.",
     "en": "You treat the output as confirmed once several AI models independently name the same suspected diagnosis."
    },
    {
     "de": "Sie akzeptieren die Diagnose, weil die KI ihre Begründung ausführlich und mit korrekten Fachbegriffen formuliert.",
     "en": "You accept the diagnosis because the AI phrases its reasoning at length and with correct technical terms."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Nur der Abgleich mit dem entscheidenden Kriterium, dem Gesichtsfeldbefund, trennt Hemianopsie und Neglect; flüssige oder mehrfach reproduzierte KI-Ausgaben sind kein fachlicher Gütebeleg. Der Konsens mehrerer Modelle ist der verführerischste Distraktor, doch übereinstimmende Modelle können denselben Fehlschluss teilen und ersetzen die inhaltliche Prüfung nicht.",
    "en": "Only checking the decisive criterion, the visual-field finding, separates hemianopia from neglect; fluent or repeatedly reproduced AI output is no proof of correctness. Agreement across models is the most tempting distractor, but concordant models can share the same error and do not replace substantive verification."
   }
  },
  {
   "q": {
    "de": "In der neurologischen Rehabilitation betreuen Sie einen Patienten 14 Monate nach schwerem Schädel-Hirn-Trauma. Das episodische Gedächtnis ist schwer und seit Monaten unverändert beeinträchtigt, prozedurales Lernen zeigt sich in der Testung erhalten. Er soll an einen strukturierten Arbeitsplatz zurückkehren. Welche rehabilitative Massnahme ist am besten begründet?",
    "en": "In neurological rehabilitation you are treating a patient 14 months after a severe traumatic brain injury. Episodic memory is severely impaired and unchanged for months, while procedural learning proves intact on testing. He is to return to a structured workplace. Which rehabilitation measure is best justified?"
   },
   "a": [
    {
     "de": "Restitutives Gedächtnistraining mit täglichem Üben von Wortlisten, bis die Speicherleistung wieder das prämorbide Niveau erreicht.",
     "en": "Restitutive memory training with daily word-list practice until storage performance again reaches the premorbid level."
    },
    {
     "de": "Aufschub der Wiedereingliederung, bis eine erneute Bildgebung eine Rückbildung der Läsion zeigt und die Prognose absichert.",
     "en": "Postponing the return to work until repeat imaging shows a regression of the lesion and secures the prognosis."
    },
    {
     "de": "Kompensatorisches Vorgehen mit externen Gedächtnishilfen und festen Routinen, die über das erhaltene prozedurale Lernen eingeübt werden.",
     "en": "A compensatory approach with external memory aids and fixed routines, trained in via the preserved procedural learning."
    },
    {
     "de": "Vorrangiges Aufmerksamkeitstraining, weil sich mit besserer Daueraufmerksamkeit auch die Gedächtnisleistung von selbst normalisiert.",
     "en": "Priority attention training, because with better sustained attention memory performance also normalises by itself."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Nach 14 Monaten und stabilem Befund ist eine Restitution der episodischen Speicherleistung nicht mehr zu erwarten; tragfähig ist der kompensatorische Weg, weil externe Hilfen und feste Arbeitsroutinen über das erhaltene prozedurale Lernen automatisiert werden können, etwa mit fehlerarmem Einüben. Das restitutive Wortlistentraining ist der verführerischste Distraktor: Es verwechselt Übungsgewinne in der Trainingsaufgabe mit einem Transfer in den Alltag.",
    "en": "After 14 months and with a stable finding, restitution of episodic storage is no longer to be expected; the compensatory route is the viable one, because external aids and fixed work routines can be automated through the preserved procedural learning, for instance with errorless practice. Restitutive word-list training is the most tempting distractor: it mistakes practice gains on the training task for transfer into everyday life."
   }
  }
 ],
 "06SM200-s01": [
  {
   "q": {
    "de": "Eine Studentin baut einen Lern-Bot zur Bindungstheorie und schreibt in den System-Prompt nur «Du bist Experte für Bindungstheorie». Im Test beantwortet der Bot auch Fragen zur Pharmakotherapie ausführlich und frei erfunden. Welche Anpassung adressiert das Problem am gezieltesten?",
    "en": "A student builds a learning bot on attachment theory and writes only 'You are an expert in attachment theory' into the system prompt. In testing, the bot also answers pharmacotherapy questions at length and makes them up. Which adjustment addresses the problem most precisely?"
   },
   "a": [
    {
     "de": "Der Prompt fordert den Bot auf, seine Antworten grundsätzlich ausführlicher und selbstsicherer zu formulieren.",
     "en": "The prompt asks the bot to phrase its answers consistently more extensively and more confidently."
    },
    {
     "de": "Der Prompt weist den Bot an, seine Antworten sprachlich einfacher und kürzer zu halten.",
     "en": "The prompt instructs the bot to keep its answers linguistically simpler and shorter."
    },
    {
     "de": "Der Prompt legt erlaubte Themen und Quellen fest und lässt Fragen ausserhalb des Gebiets zurückweisen.",
     "en": "The prompt defines allowed topics and sources and has out-of-scope questions refused."
    },
    {
     "de": "Der Prompt ergänzt die Rollenbeschreibung um zusätzliche akademische Titel und Fachgebiete des Bots.",
     "en": "The prompt adds further academic titles and specialist fields to the bot's role description."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Das Fehlverhalten entsteht durch fehlende Themen- und Quellengrenzen; nur deren explizite Festlegung samt Zurückweisung ausserhalb liegender Fragen behebt es. Mehr Titel in der Rolle klingen plausibel, erweitern aber eher den Antwortanspruch des Bots, statt ihn zu begrenzen.",
    "en": "The misbehaviour stems from missing topic and source boundaries; only setting these explicitly, together with refusal of out-of-scope questions, fixes it. Adding titles to the role sounds plausible but tends to widen the bot's claimed scope rather than constrain it."
   }
  },
  {
   "q": {
    "de": "Beim systematischen Test soll das KI-Artefakt mit einer Fangfrage ausserhalb seines Gebiets geprüft werden. Welches Vorgehen prüft die fachliche Verlässlichkeit am aussagekräftigsten?",
    "en": "During systematic testing, the AI artefact should be probed with a trick question outside its domain. Which approach tests its subject-matter reliability most informatively?"
   },
   "a": [
    {
     "de": "Man beschränkt sich auf Fragen aus dem Kerngebiet und wertet flüssige, gut lesbare Antworten als Beleg für Verlässlichkeit.",
     "en": "You confine yourself to core-domain questions and treat fluent, readable answers as evidence of reliability."
    },
    {
     "de": "Man wiederholt dieselbe Kernfrage mehrfach und prüft, ob der Bot jedes Mal identisch formuliert antwortet.",
     "en": "You repeat the same core question several times and check whether the bot answers identically each time."
    },
    {
     "de": "Man vergleicht die Antwortlänge des Bots mit der eines allgemeinen Modells ohne eigenen System-Prompt.",
     "en": "You compare the bot's answer length with that of a general model without its own system prompt."
    },
    {
     "de": "Man stellt eine plausibel klingende Frage ausserhalb des Gebiets und prüft, ob der Bot seine Grenze erkennt statt zu erfinden.",
     "en": "You pose a plausible-sounding out-of-domain question and check whether the bot recognises its limit rather than inventing."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Eine gezielte Ausser-Gebiets-Frage deckt auf, ob der Bot seine Grenzen einhält oder frei halluziniert, und genau das ist die geprüfte Verlässlichkeit. Flüssige Antworten im Kerngebiet sind der verführerischste Distraktor, doch sprachliche Flüssigkeit sagt nichts über fachliche Richtigkeit oder Grenzerkennung aus.",
    "en": "A deliberate out-of-scope question reveals whether the bot honours its limits or hallucinates freely, which is exactly the reliability being tested. Fluent answers within the core domain are the most tempting distractor, but fluency says nothing about factual accuracy or boundary awareness."
   }
  },
  {
   "q": {
    "de": "Im Ergänzungsseminar ist das Portfolio zum selbst gebauten, fachlich begrenzten Lern-Bot der Leistungsnachweis; verlangt sind das Artefakt und die Dokumentation seiner Erprobung. Studentin A reicht einen Bot ein, der alle acht Testfragen glatt beantwortet, dazu ein Prozesslog mit dem Vermerk «läuft». Student B dokumentiert zwei fehlgeschlagene Testfälle, die daraufhin geänderte Prompt-Regel und eine verbleibende Einsatzgrenze. Welche Beurteilung ist fachlich begründet?",
    "en": "In the elective seminar, the portfolio on the self-built, domain-bounded learning bot is the assessment; required are the artefact and documentation of how it was tested. Student A submits a bot that answers all eight test questions smoothly, plus a process log noting \"works\". Student B documents two failed test cases, the prompt rule changed in response, and a remaining limit of use. Which appraisal is professionally justified?"
   },
   "a": [
    {
     "de": "Portfolio A, weil das durchgehend fehlerfreie Antwortverhalten belegt, dass der System-Prompt seine Aufgabe erfüllt.",
     "en": "Portfolio A, because the consistently flawless answering shows that the system prompt does its job."
    },
    {
     "de": "Portfolio B, weil erst dokumentiertes Fehlverhalten mit Prompt-Revision und Grenzangabe die Erprobung belegt.",
     "en": "Portfolio B, because only documented misbehaviour with prompt revision and a stated limit evidences the testing."
    },
    {
     "de": "Beide gleichwertig, weil beide Portfolios ein lauffähiges Artefakt und ein dokumentiertes Prozesslog enthalten.",
     "en": "Both equal, because both portfolios contain a working artefact and a documented process log."
    },
    {
     "de": "Portfolio B tiefer, weil die dokumentierten Fehlschläge belegen, dass das Artefakt seine Zielvorgabe verfehlt hat.",
     "en": "Portfolio B lower, because the documented failures show that the artefact missed its stated goal."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Eine Erprobung belegt Verlässlichkeit nur, wenn sie scheitern konnte: Erst die dokumentierten Fehlfälle, die daraus abgeleitete Prompt-Revision und die benannte Einsatzgrenze zeigen, dass das Artefakt geprüft und nicht bloss vorgeführt wurde. Der fehlerfreie Bot ist der verführerischste Distraktor: Glatte Antworten können ebenso von zu leicht gewählten Testfragen stammen und belegen für sich keine systematische Prüfung.",
    "en": "A test run only evidences reliability if it could have failed: only the documented failures, the prompt revision derived from them and the stated limit of use show that the artefact was examined rather than merely demonstrated. The flawless bot is the most tempting distractor: smooth answers may equally come from test questions chosen too easy and by themselves prove no systematic testing."
   }
  }
 ],
 "06SM200-s07": [
  {
   "q": {
    "de": "Ein Emotionsmodell klassifiziert Gesichtsausdrücke mit hoher Trefferquote als «Ärger», trifft aber keine Aussage darüber, welche Situationsbewertung diese Emotion auslöst. Wie ist dieses Modell aus Sicht der Appraisaltheorie am ehesten zu bewerten?",
    "en": "An emotion model classifies facial expressions as 'anger' with high accuracy but says nothing about which situational appraisal triggers this emotion. From the standpoint of appraisal theory, how is this model best judged?"
   },
   "a": [
    {
     "de": "Es leistet eine treffsichere Klassifikation, aber keine Erklärung, weil die auslösende kognitive Bewertung nicht modelliert wird.",
     "en": "It delivers an accurate classification but no explanation, because the triggering cognitive appraisal is not modelled."
    },
    {
     "de": "Es erklärt die Emotion umfassend, weil eine hohe Trefferquote die zugrunde liegenden Bewertungsprozesse mit belegt.",
     "en": "It explains the emotion comprehensively, because a high hit rate co-establishes the underlying appraisal processes."
    },
    {
     "de": "Es widerlegt die Appraisaltheorie, weil Ärger hier ohne modellierte Situationsbewertung korrekt erkannt wird.",
     "en": "It refutes appraisal theory, because anger is here correctly recognised without any modelled situational appraisal."
    },
    {
     "de": "Es stützt die Basisemotionstheorie, weil diese kognitive Situationsbewertungen weitgehend ausklammert.",
     "en": "It supports basic-emotion theory, because that theory largely brackets out cognitive appraisals of situations."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Eine hohe Klassifikationsgüte ist Vorhersage (prediction), nicht Erklärung (explanation); ohne modellierte Bewertungsprozesse fehlt der appraisaltheoretische Erklärkern. Der Schluss, eine hohe Trefferquote belege die Erklärung, ist der verführerischste Distraktor, verwechselt aber statistische Passung mit psychologischer Erklärkraft.",
    "en": "High classification accuracy is prediction, not explanation; without modelled appraisal processes the explanatory core of appraisal theory is missing. The inference that high accuracy proves the explanation is the most tempting distractor but confuses statistical fit with psychological explanatory power."
   }
  },
  {
   "q": {
    "de": "Ein neuronales Netz sagt Emotionslabels aus Textmerkmalen sehr genau vorher. Ein Kommilitone folgert, das Netz habe verstanden, wie Emotionen entstehen. Welche Prüfung entlarvt diesen Fehlschluss am direktesten?",
    "en": "A neural network predicts emotion labels from text features very accurately. A fellow student concludes that the network has understood how emotions arise. Which check exposes this fallacy most directly?"
   },
   "a": [
    {
     "de": "Man vergrössert die Trainingsdatenmenge und prüft, ob die Vorhersagegenauigkeit des Netzes weiter ansteigt.",
     "en": "You enlarge the training data and check whether the network's predictive accuracy rises further."
    },
    {
     "de": "Man vergleicht die Genauigkeit mit einem einfacheren Modell und wählt jenes mit der höheren Trefferquote.",
     "en": "You compare the accuracy with a simpler model and pick the one with the higher hit rate."
    },
    {
     "de": "Man prüft, ob das Netz auf einem zweiten Datensatz eine ähnlich hohe Vorhersagegenauigkeit erreicht.",
     "en": "You check whether the network reaches similarly high predictive accuracy on a second dataset."
    },
    {
     "de": "Man prüft, ob das Netz die zugrunde liegenden Bewertungsprozesse benennt, statt nur Label aus Merkmalen abzuleiten.",
     "en": "You check whether the network names the underlying appraisal processes rather than just deriving labels from features."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Verstehen im theoretischen Sinn zeigt sich daran, ob Entstehungs- und Bewertungsprozesse benannt werden, nicht an der reinen Vorhersageleistung. Die Prüfung auf einem zweiten Datensatz ist der verführerischste Distraktor, testet aber nur die Robustheit der Vorhersage (Generalisierung), nicht die Erklärkraft.",
    "en": "Understanding in the theoretical sense shows in whether the underlying appraisal processes are named, not in predictive performance alone. Testing on a second dataset is the most tempting distractor but only checks the robustness of prediction (generalisation), not explanatory power."
   }
  },
  {
   "q": {
    "de": "Im Seminar wird ein korrelativer Befund vorgestellt: Personen mit stärkerer Aktivierung in einer belohnungsassoziierten Region berichten im Mittel etwas höhere Belohnungssensitivität, der Zusammenhang ist schwach. Eine Journalistin bittet Sie um einen Satz für die Medienmitteilung. Welche Formulierung ist fachlich haltbar und zugleich verständlich?",
    "en": "A correlational finding is presented in the seminar: people with stronger activation in a reward-related region report on average somewhat higher reward sensitivity, and the association is weak. A journalist asks you for one sentence for the press release. Which wording is professionally sound and understandable at the same time?"
   },
   "a": [
    {
     "de": "«Die Studie zeigt, dass diese Hirnregion die Belohnungssensitivität steuert; wer dort stärker aktiviert ist, spricht deutlich stärker auf Belohnungen an.»",
     "en": "“The study shows that this brain region controls reward sensitivity; those with stronger activation there respond markedly more strongly to rewards.”"
    },
    {
     "de": "«Personen mit stärkerer Aktivierung berichteten im Schnitt eine etwas höhere Belohnungssensitivität; über einzelne Personen sagt der schwache Zusammenhang wenig.»",
     "en": "“People with stronger activation reported somewhat higher reward sensitivity on average; the weak association says little about any individual person.”"
    },
    {
     "de": "«Die Aktivierung dieser Region lässt sich als Marker nutzen, um die Belohnungssensitivität einer Person zuverlässig einzuschätzen.»",
     "en": "“Activation in this region can be used as a marker to assess a person's reward sensitivity reliably.”"
    },
    {
     "de": "«Der Zusammenhang wurde statistisch signifikant, womit die praktische Bedeutung dieser Region für Motivation belegt ist.»",
     "en": "“The association reached statistical significance, which establishes the practical importance of this region for motivation.”"
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Haltbar ist eine Aussage, die auf jener Ebene bleibt, auf der gemessen wurde: ein durchschnittlicher, schwacher Zusammenhang in einer Stichprobe, ohne Ursachenbehauptung und ohne Aussage über einzelne Menschen. Der verführerischste Distraktor macht aus dem korrelativen Befund eine Steuerungsfunktion der Region und verstärkt den schwachen Zusammenhang sprachlich zu einem deutlichen Effekt. Die Marker-Formulierung schliesst zudem von der Aktivierung auf ein psychisches Merkmal zurück, was als reverse inference nur unter engen Voraussetzungen trägt (Poldrack, 2006), und überträgt einen schwachen Gruppenzusammenhang unzulässig auf die Einzelfallbeurteilung. Die Signifikanzformulierung schliesslich verwechselt statistische Signifikanz mit praktischer Bedeutsamkeit, die erst über die Effektstärke beurteilbar wird.",
    "en": "A sound statement stays at the level at which measurement took place: an average, weak association in a sample, with no causal claim and no statement about individual people. The most tempting distractor turns the correlational finding into a controlling function of the region and verbally inflates the weak association into a marked effect. The marker wording additionally infers a mental characteristic back from activation, which as reverse inference holds only under narrow conditions (Poldrack, 2006), and it transfers a weak group-level association illegitimately to the assessment of individual cases. Finally, the significance wording confuses statistical significance with practical importance, which can only be judged from the effect size."
   }
  }
 ],
 "06SM200-s08": [
  {
   "q": {
    "de": "Eine Lieferplattform vergibt Aufträge algorithmisch so, dass die Leerlaufzeit pro Kurier minimiert wird. Die Kuriere berichten zunehmend über Erschöpfung und fehlenden Handlungsspielraum. Welche Analyse verknüpft die optimierte Kennzahl theoretisch korrekt mit der psychologischen Nebenwirkung?",
    "en": "A delivery platform assigns orders algorithmically to minimise idle time per courier. Couriers increasingly report exhaustion and a lack of discretion in their work. Which analysis correctly links the optimised metric to the psychological side effect?"
   },
   "a": [
    {
     "de": "Die Kennzahl wirkt primär über sozialen Vergleich zwischen den Kurieren; nach der Equity-Theorie entsteht Erschöpfung erst, wenn Beiträge und Erträge im Kollegenvergleich als ungleich erlebt werden.",
     "en": "The metric works primarily through social comparison among couriers; according to equity theory, exhaustion only arises when inputs and outcomes are perceived as unequal relative to colleagues."
    },
    {
     "de": "Die Kennzahl steigert die wahrgenommene Verfahrensfairness, weil ein Algorithmus ohne Ansehen der Person zuteilt; die berichtete Erschöpfung muss deshalb ausserhalb der Arbeitsgestaltung liegen.",
     "en": "The metric increases perceived procedural fairness because an algorithm allocates work impartially; the reported exhaustion must therefore have causes outside the design of the work itself."
    },
    {
     "de": "Die Kennzahl verdichtet die Arbeit und entzieht Entscheidungsspielraum; nach dem Job-Demands-Resources-Modell steigen die Anforderungen bei sinkenden Ressourcen, was Erschöpfung vorhersagt.",
     "en": "The metric intensifies the work and removes decision latitude; according to the job demands-resources model, demands rise while resources shrink, which predicts exhaustion."
    },
    {
     "de": "Die Kennzahl liefert dichte Leistungsrückmeldung und spricht das Kompetenzerleben an; nach der Selbstbestimmungstheorie ist die Erschöpfung ein vorübergehender Effekt der Umstellungsphase.",
     "en": "The metric provides dense performance feedback and addresses the need for competence; according to self-determination theory, the exhaustion is a temporary effect of the adjustment phase."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Die Minimierung der Leerlaufzeit intensiviert die Arbeit (höhere Anforderungen) und nimmt den Kurieren Entscheidungsspielraum (weniger Ressourcen); genau diese Kombination sagt im JD-R-Modell Erschöpfung vorher. Der verführerischste Distraktor ist die Selbstbestimmungstheorie-Option: Dichte Rückmeldung ersetzt kein Autonomieerleben, und bei frustriertem Autonomiebedürfnis sagt die Theorie anhaltende, nicht vorübergehende Beanspruchung vorher.",
    "en": "Minimising idle time intensifies the work (higher demands) and strips couriers of decision latitude (fewer resources); exactly this combination predicts exhaustion in the JD-R model. The most seductive distractor is the self-determination theory option: dense feedback is no substitute for experienced autonomy, and when the need for autonomy is frustrated the theory predicts sustained, not temporary, strain."
   }
  },
  {
   "q": {
    "de": "Ein Projektteam lässt ein Sprachmodell die algorithmische Schichtvergabe einer Plattform bewerten. Das Modell erklärt das System für fair, weil es alle Beschäftigten nach derselben Regel behandle. Wie prüfen Sie diese Aussage fachlich am validesten?",
    "en": "A project team asks a language model to assess a platform's algorithmic shift allocation. The model declares the system fair because it treats all workers according to the same rule. What is the most valid way to check this claim professionally?"
   },
   "a": [
    {
     "de": "Ich werte die tatsächlichen Zuteilungsdaten nach Gruppen aus, denn formale Gleichbehandlung schliesst systematisch ungleiche Ergebnisse im Sinn eines Disparate Impact nicht aus.",
     "en": "I analyse the actual allocation data by group, because formal equal treatment does not rule out systematically unequal outcomes in the sense of disparate impact."
    },
    {
     "de": "Ich übernehme die Einschätzung, denn eine einheitliche Regel für alle erfüllt das zentrale Fairnesskriterium und schliesst eine Benachteiligung einzelner Gruppen verlässlich aus.",
     "en": "I adopt the assessment, because a uniform rule for everyone satisfies the central fairness criterion and reliably rules out disadvantages for particular groups."
    },
    {
     "de": "Ich prüfe die sprachliche Qualität und Detailtiefe des Berichts, denn ein konsistent argumentierender, präziser KI-Output spricht für eine verlässliche Fairnessanalyse.",
     "en": "I check the linguistic quality and level of detail of the report, because a consistently argued, precise AI output indicates a reliable fairness analysis."
    },
    {
     "de": "Ich stelle dem Modell die Fairnessfrage in einem zweiten, anders formulierten Prompt, denn übereinstimmende Antworten desselben Systems bestätigen die ursprüngliche Bewertung.",
     "en": "I pose the fairness question to the model again in a second, differently worded prompt, because matching answers from the same system confirm the original assessment."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Fairness lässt sich nicht an der Regel allein ablesen: Gleiche Regeln können bei ungleichen Ausgangsbedingungen systematisch ungleiche Ergebnisse erzeugen, deshalb braucht es die Analyse der Zuteilungsergebnisse nach Gruppen. Der verführerischste Distraktor ist der zweite Prompt: Er prüft nur die Konsistenz des Modells mit sich selbst und liefert keine unabhängige Evidenz über das reale System.",
    "en": "Fairness cannot be read off the rule alone: identical rules can produce systematically unequal outcomes under unequal starting conditions, so allocation outcomes must be analysed by group. The most seductive distractor is the second prompt: it only tests the model's consistency with itself and provides no independent evidence about the real system."
   }
  },
  {
   "q": {
    "de": "Ein schulisches Präventionsprogramm gegen depressive Symptome wird in zwölf Klassen evaluiert. Den Fragebogen zur Baseline füllten alle Klassen im Unterricht auf Papier aus; das Follow-up nach einem Jahr lief freiwillig online und erreichte einen Rücklauf von 48 Prozent, wobei Jugendliche mit hohen Baseline-Werten seltener antworteten. Der Symptommittelwert ist deutlich gesunken. Welche Beurteilung der Datengrundlage trifft zu?",
    "en": "A school-based prevention programme against depressive symptoms is evaluated in twelve classes. The baseline questionnaire was completed on paper by all classes during lessons; the one-year follow-up was voluntary and online and reached a response rate of 48 percent, with adolescents who had high baseline scores responding less often. The mean symptom score has dropped markedly. Which appraisal of the data basis holds?"
   },
   "a": [
    {
     "de": "Die Rücklaufquote von 48 Prozent verkleinert die Stichprobe so stark, dass der Mittelwertunterschied vor allem Zufallsschwankung abbildet.",
     "en": "The 48 percent response rate shrinks the sample so much that the difference in means mainly reflects random variation."
    },
    {
     "de": "Der Wechsel von Papier zu Online senkt die berichteten Werte systematisch, sodass der Rückgang allein auf das veränderte Erhebungsformat zurückgeht.",
     "en": "The switch from paper to online lowers reported scores systematically, so the decline is due to the changed survey format alone."
    },
    {
     "de": "Der Ausfall hängt mit dem Ausgangswert zusammen; die Follow-up-Gruppe ist positiv selegiert, der Rückgang bildet teilweise die Zusammensetzung ab.",
     "en": "Attrition is linked to the baseline score; the follow-up group is positively selected, so the decline partly reflects its composition."
    },
    {
     "de": "Die Ausfälle lassen sich durch den Mittelwert der Antwortenden ersetzen, womit alle Fälle in die Auswertung eingehen und der Rückgang belastbar wird.",
     "en": "The dropouts can be replaced by the respondents' mean, so that all cases enter the analysis and the decline becomes robust."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Der Ausfall ist nicht zufällig, sondern hängt mit dem Ausgangswert zusammen: Stärker belastete Jugendliche antworteten seltener, deshalb ist die Follow-up-Gruppe positiv selegiert und der Mittelwertrückgang geht teilweise auf die veränderte Zusammensetzung zurück statt auf das Programm. Der Formatwechsel ist ein zusätzlicher Störfaktor, seine Richtung ist aber nicht festgelegt, und er erklärt den Rückgang nicht allein. Der attraktivste Distraktor ist die Ersetzung durch den Mittelwert der Antwortenden: Sie füllt die Lücken mit genau jener selegierten Gruppe auf, schreibt die Verzerrung fort und unterschätzt zusätzlich die Streuung.",
    "en": "Attrition here is not random but tied to the baseline score: more burdened adolescents responded less often, so the follow-up group is positively selected and the drop in the mean partly reflects the changed composition rather than the programme. The change of survey format is an additional confound, but its direction is not fixed and it does not explain the decline on its own. The most tempting distractor is replacing dropouts with the respondents' mean: it fills the gaps with exactly that selected group, carries the bias forward and additionally understates the variance."
   }
  }
 ],
 "06SM200-s09": [
  {
   "q": {
    "de": "Eine Mental-Health-App wirbt mit «klinisch belegt: 40 Prozent Symptomreduktion». Grundlage ist eine einarmige Prä-Post-Studie mit selbstselektierten Nutzenden und 60 Prozent Abbruchquote. Was ist der gravierendste methodische Einwand gegen das Wirkversprechen?",
    "en": "A mental health app advertises 'clinically proven: 40 percent symptom reduction'. The basis is a single-arm pre-post study with self-selected users and a 60 percent dropout rate. What is the most serious methodological objection to the efficacy claim?"
   },
   "a": [
    {
     "de": "Die Abbruchquote von 60 Prozent ist der entscheidende Mangel, denn erst ab einer Haltequote von mindestens der Hälfte gelten Prä-Post-Ergebnisse als klinisch belastbar.",
     "en": "The 60 percent dropout rate is the decisive flaw, because pre-post results only count as clinically robust once at least half of the participants are retained."
    },
    {
     "de": "Das Fehlen einer randomisierten Kontrollbedingung ist der entscheidende Mangel, denn Spontanremission, Regression zur Mitte und Erwartungseffekte bleiben so vom App-Effekt untrennbar.",
     "en": "The lack of a randomised control condition is the decisive flaw, because spontaneous remission, regression to the mean and expectancy effects cannot be separated from the app effect."
    },
    {
     "de": "Die Selbstselektion der Stichprobe ist der entscheidende Mangel, denn sie verletzt die interne Validität und macht die Prozentangabe für die untersuchte Gruppe uninterpretierbar.",
     "en": "The self-selection of the sample is the decisive flaw, because it violates internal validity and makes the percentage figure uninterpretable for the group that was studied."
    },
    {
     "de": "Das Fehlen eines Vergleichs mit etablierter Psychotherapie ist der entscheidende Mangel, denn ein Wirkversprechen trägt erst, wenn die App den Goldstandard erreicht oder übertrifft.",
     "en": "The lack of a comparison with established psychotherapy is the decisive flaw, because an efficacy claim only holds once the app matches or outperforms the gold standard."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Ohne randomisierte Kontrollgruppe kann der beobachtete Symptomrückgang durch natürlichen Verlauf, Regression zur Mitte oder Erwartungseffekte entstehen; die 40 Prozent belegen deshalb keinen kausalen App-Effekt. Der verführerischste Distraktor ist die Goldstandard-Option: Für ein Wirksamkeitsversprechen genügt der Nachweis gegenüber einer Kontrollbedingung, ein Überlegenheitsnachweis gegenüber Psychotherapie ist dafür nicht nötig.",
    "en": "Without a randomised control group, the observed symptom reduction may result from natural course, regression to the mean or expectancy effects; the 40 percent figure therefore demonstrates no causal app effect. The most seductive distractor is the gold-standard option: an efficacy claim requires evidence against a control condition, not proof of superiority over psychotherapy."
   }
  },
  {
   "q": {
    "de": "Für ein Referat lassen Studierende ein Sprachmodell die Evidenz zu Brain-Training-Apps zusammenfassen. Es schreibt, solche Apps verbesserten nachweislich die allgemeine kognitive Leistungsfähigkeit im Alltag. Welches Vorgehen zeigt die höchste KI-Evaluationskompetenz?",
    "en": "For a presentation, students have a language model summarise the evidence on brain training apps. It writes that such apps demonstrably improve general cognitive performance in everyday life. Which approach shows the highest AI evaluation competence?"
   },
   "a": [
    {
     "de": "Die Aussage übernehmen, weil das Modell Studien mit Autorennamen und Jahreszahlen anführt und solche Belegangaben in generierten Texten üblicherweise korrekt wiedergegeben werden.",
     "en": "Adopt the claim, because the model cites studies with author names and years, and such references in generated text are usually reproduced correctly."
    },
    {
     "de": "Die Aussage übernehmen, weil neuronale Plastizität als Mechanismus gut belegt ist und ein plausibler Wirkmechanismus die behauptete Alltagswirkung hinreichend absichert.",
     "en": "Adopt the claim, because neural plasticity is well established as a mechanism, and a plausible mechanism of action sufficiently supports the claimed everyday benefit."
    },
    {
     "de": "Die Aussage absichern, indem das Modell in einem Folgeprompt seine eigene Sicherheit einschätzt und diese Selbstauskunft als Kriterium für die Verlässlichkeit dient.",
     "en": "Verify the claim by having the model rate its own confidence in a follow-up prompt and using this self-report as the criterion for reliability."
    },
    {
     "de": "Die Aussage an systematischen Reviews prüfen, die vor allem nahen Transfer auf geübte Aufgaben zeigen, womit die behauptete breite Alltagswirkung die Befundlage überschreitet.",
     "en": "Check the claim against systematic reviews, which mainly show near transfer to practised tasks, meaning the claimed broad everyday benefit overstates the evidence."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Die Befundlage zeigt zuverlässige Verbesserungen fast nur in den trainierten Aufgaben; belastbare Evidenz für fernen Transfer auf die Alltagskognition fehlt, die LLM-Aussage übergeneralisiert also. Der verführerischste Distraktor ist der Plausibilitätsschluss über Plastizität: Ein belegter Mechanismus ersetzt keinen Wirksamkeitsnachweis auf der Ebene der Alltagsleistung.",
    "en": "The evidence shows reliable improvements almost exclusively on the trained tasks; robust evidence for far transfer to everyday cognition is lacking, so the LLM's statement overgeneralises. The most seductive distractor is the plausibility inference via plasticity: an established mechanism is no substitute for demonstrated efficacy at the level of everyday performance."
   }
  },
  {
   "q": {
    "de": "Im Themengebiet «Praktische Intervention 2» erarbeitet eine Gruppe eine evidenzbasierte Interventionsempfehlung für einen Fall: Literatursuche, Auswahl der Studien, Bewertung ihrer methodischen Qualität, daraus die Empfehlung. Welche Aufteilung zwischen KI-Unterstützung und eigener Arbeit ist fachlich vertretbar?",
    "en": "In the topic area «Practical intervention 2», a group works out an evidence-based intervention recommendation for a case: literature search, study selection, appraisal of methodological quality, and the recommendation derived from it. Which division between AI support and the group's own work is professionally defensible?"
   },
   "a": [
    {
     "de": "Die KI formuliert die Behandlungsempfehlung für den Fall, die Studierenden prüfen den Text danach auf Verständlichkeit, Ton und sprachliche Klarheit.",
     "en": "The AI drafts the treatment recommendation for the case, and the students then check the text for readability, tone and linguistic clarity."
    },
    {
     "de": "Die KI übernimmt das Vorscreening nach vorab festgelegten Kriterien und wird dabei stichprobenweise kontrolliert; die Bewertung des Verzerrungsrisikos bleibt bei den Studierenden.",
     "en": "The AI handles the initial screening against pre-set criteria and is spot-checked while doing so; rating the risk of bias stays with the students."
    },
    {
     "de": "Die KI bewertet das Verzerrungsrisiko der Studien anhand eines Standardinstruments, das Vorscreening der Treffer übernehmen die Studierenden mit ihrer Themenkenntnis.",
     "en": "The AI rates the studies' risk of bias using a standard instrument, while the students screen the hits themselves, drawing on their topic knowledge."
    },
    {
     "de": "Die KI extrahiert die Effektstärken aus den Volltexten und speist sie nach einer kurzen Plausibilitätsprüfung in die Synthese ein, die Studierenden konzentrieren sich auf die Interpretation.",
     "en": "The AI extracts the effect sizes from the full texts and feeds them into the synthesis after a brief plausibility check, while the students focus on interpretation."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Das Vorscreening wendet Kriterien an, die vorher festgelegt wurden; sein Ergebnis lässt sich an genau diesen Kriterien nachprüfen, und eine stichprobenweise Doppelsichtung macht auch fälschlich ausgeschlossene Treffer sichtbar. Die Bewertung des Verzerrungsrisikos verlangt dagegen ein Urteil über Design und Durchführung, das unmittelbar bestimmt, wie stark die Empfehlung getragen ist. Der attraktivste Distraktor kehrt genau das um: Ein standardisiertes Instrument macht die Qualitätsbewertung nicht mechanisch, es strukturiert nur das fachliche Urteil, das dafür nötig bleibt. Auch die Extraktion der Effektstärken bleibt heikel, weil eine Plausibilitätsprüfung Übertragungsfehler gegenüber der Quelle nicht aufdeckt.",
    "en": "Initial screening applies criteria that were fixed beforehand; its result can be checked against exactly those criteria, and spot-checking a sample by hand also reveals hits that were wrongly excluded. Rating the risk of bias, by contrast, requires a judgement about design and conduct that directly determines how firmly the recommendation is supported. The most tempting distractor reverses this: a standardised instrument does not make quality appraisal mechanical, it only structures the professional judgement that is still required. Extracting effect sizes also stays delicate, because a plausibility check does not catch transcription errors against the source."
   }
  }
 ],
 "10SMSTS-505": [
  {
   "q": {
    "de": "Ein Student möchte sein gut laufendes Mentoring nach zwei Monaten wegen Prüfungsstress vorzeitig beenden. Das Kind stammt aus einem belasteten familiären Umfeld. Welche Einschätzung entspricht der Befundlage der Mentoring-Forschung?",
    "en": "After two months, a student wants to end his well-functioning mentoring relationship early because of exam stress. The child comes from a difficult family background. Which assessment matches the findings of mentoring research?"
   },
   "a": [
    {
     "de": "Ein früher Abschluss ist unbedenklich, weil die wichtigsten Fördereffekte in den ersten Wochen entstehen und weitere Treffen den Nutzen für das Kind nur noch geringfügig steigern.",
     "en": "An early ending is harmless, because the most important developmental benefits arise in the first weeks and further meetings add only marginal value for the child."
    },
    {
     "de": "Die Wirkung hängt in erster Linie vom Aktivitätenprogramm ab, weshalb ein sauber organisierter Wechsel der Bezugsperson den Nutzen für das Kind kaum beeinträchtigen dürfte.",
     "en": "The effect depends primarily on the programme of activities, so a well-organised change of mentor is unlikely to reduce the benefit for the child."
    },
    {
     "de": "Kinder aus belasteten Verhältnissen gewöhnen sich vergleichsweise schnell an wechselnde Bezugspersonen, weshalb ein geordneter Abschied nach zwei Monaten neutral zu bewerten ist.",
     "en": "Children from difficult circumstances adapt comparatively quickly to changing attachment figures, so an orderly farewell after two months should be judged as neutral."
    },
    {
     "de": "Früh abgebrochene Mentoring-Beziehungen können dem Kind schaden, weil Effekte an stabile, länger dauernde Beziehungen gebunden sind und ein Abbruch Zurückweisungserfahrungen reaktivieren kann.",
     "en": "Mentoring relationships ended early can harm the child, because effects depend on stable, longer-lasting relationships and a breakup can reactivate experiences of rejection."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Die Forschung zeigt, dass positive Effekte vor allem in Beziehungen entstehen, die rund ein Jahr oder länger bestehen; früh abgebrochene Beziehungen gehen teils sogar mit Verschlechterungen einher. Der verführerischste Distraktor ist die Programm-Option: Der wirksame Mechanismus ist die Qualität der Beziehung zu einer konstanten Bezugsperson, nicht das Aktivitätenangebot.",
    "en": "Research shows that positive effects arise mainly in relationships lasting around a year or longer; relationships ended early are sometimes even associated with deterioration. The most seductive distractor is the programme option: the active mechanism is the quality of the relationship with a constant attachment figure, not the set of activities."
   }
  },
  {
   "q": {
    "de": "Eine Studentin möchte einen Tagebucheintrag zur Reflexion in ein KI-Tool eingeben. Sie ersetzt den Namen des Kindes durch «M.», der Eintrag nennt aber weiterhin Schulhaus, Klasse und ein seltenes familiäres Ereignis. Wie beurteilen Sie dieses Vorgehen?",
    "en": "A student wants to enter a diary entry into an AI tool for reflection. She replaces the child's name with 'M.', but the entry still mentions the school building, the class and a rare family event. How do you judge this approach?"
   },
   "a": [
    {
     "de": "Das Vorgehen genügt, weil mit dem entfernten Namen das direkt identifizierende Merkmal fehlt und die übrigen Angaben lediglich den pädagogischen Kontext des Eintrags beschreiben.",
     "en": "The approach is sufficient, because removing the name eliminates the directly identifying attribute and the remaining details merely describe the pedagogical context of the entry."
    },
    {
     "de": "Das Vorgehen genügt nicht, weil Schulhaus, Klasse und seltenes Ereignis zusammen als Quasi-Identifikatoren wirken und eine Re-Identifikation des Kindes möglich bleibt.",
     "en": "The approach is not sufficient, because school building, class and rare event together act as quasi-identifiers and re-identification of the child remains possible."
    },
    {
     "de": "Das Vorgehen genügt, weil der vertragliche Ausschluss der Trainingsnutzung die Frage der Identifizierbarkeit hinfällig macht und damit jede Eingabe unbedenklich wird.",
     "en": "The approach is sufficient, because contractually excluding training use renders the question of identifiability moot and thus makes any input unproblematic."
    },
    {
     "de": "Das Vorgehen genügt nicht, weil Angaben über Kinder selbst nach vollständiger Anonymisierung nicht in KI-Systeme eingegeben werden dürfen und nur der Verzicht vertretbar ist.",
     "en": "The approach is not sufficient, because information about children must not be entered into AI systems even after full anonymisation, and abstaining is the only defensible option."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Anonymisierung scheitert selten am Namen, sondern an der Kombination quasi-identifizierender Merkmale; Schulhaus, Klasse und ein seltenes Ereignis grenzen die Person so stark ein, dass Rückschlüsse möglich bleiben. Der verführerischste Distraktor ist die Unternehmensversion: Vertragliche Trainingsausschlüsse ändern nichts daran, dass identifizierbare Kinderdaten ein KI-System erreichen und die Eingabe damit unzulässig bleibt.",
    "en": "Anonymisation rarely fails because of the name, but because of the combination of quasi-identifying attributes; school building, class and a rare event narrow the person down so far that inference remains possible. The most seductive distractor is the enterprise version: contractual training exclusions do not change the fact that identifiable child data reach an AI system, so the input remains impermissible."
   }
  },
  {
   "q": {
    "de": "Sie bereiten als Mentor:in das nächste Treffen mit dem von Ihnen begleiteten Primarschulkind vor. Vier Schritte stehen an: der Tagebucheintrag zum letzten Treffen, Ideen für eine Leseübung, die Einschätzung des Lernfortschritts und der Entscheid über ein Gespräch mit der Lehrperson. Alle vier liessen sich anonymisiert formulieren. Welcher Schritt darf fachlich vertretbar an ein KI-Tool delegiert werden?",
    "en": "As a mentor you are preparing the next meeting with the primary-school child you accompany. Four steps are due: the diary entry on the last meeting, ideas for a reading exercise, the assessment of learning progress, and the decision about a talk with the teacher. All four could be phrased anonymously. Which step may defensibly be delegated to an AI tool?"
   },
   "a": [
    {
     "de": "Das Ausformulieren des Tagebucheintrags aus Stichworten, weil die KI daraus eine klar strukturierte Beobachtungsschilderung macht.",
     "en": "Fleshing out the diary entry from keywords, because the AI turns them into a clearly structured account of the observation."
    },
    {
     "de": "Die Einschätzung des Lernfortschritts, weil die KI die Einträge mehrerer Wochen konsistenter miteinander vergleicht.",
     "en": "The assessment of learning progress, because the AI compares the entries of several weeks with one another more consistently."
    },
    {
     "de": "Die Ideensammlung für eine Leseübung, weil deren Passung zum Lernstand des Kindes anschliessend selbst geprüft wird.",
     "en": "Collecting ideas for a reading exercise, because their fit with the child's level is then checked by you yourself."
    },
    {
     "de": "Der Entscheid über ein Gespräch mit der Lehrperson, weil die KI die Handlungsoptionen neutraler gegeneinander abwägt.",
     "en": "The decision about a talk with the teacher, because the AI weighs the options for action against each other more neutrally."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Delegierbar ist nur Vormaterial, dessen Passung die Mentor:in danach am beobachteten Lernstand des Kindes prüft; die eigene Beobachtung und das daraus abgeleitete Entwicklungsurteil bleiben die Grundlage der Förderdokumentation und der Entscheide, die daran hängen. Der KI-ausformulierte Tagebucheintrag ist der verführerischste Distraktor: Er glättet die Beobachtung und ergänzt Deutungen, die gar nicht beobachtet wurden, womit der Eintrag seinen Belegwert verliert.",
    "en": "Only raw material may be delegated, and only because the mentor afterwards checks its fit against the child's observed level; one's own observation and the developmental judgement derived from it remain the basis of the support documentation and of the decisions that rest on it. The AI-written diary entry is the most tempting distractor: it smooths the observation and adds interpretations that were never observed, so the entry loses its evidential value."
   }
  }
 ],
 "06SM200-s03": [
  {
   "q": {
    "de": "Eine Studentin validiert eine KI-gestützte Kodierung von 200 Interviewsegmenten gegen einen menschlichen Goldstandard. Die prozentuale Übereinstimmung beträgt 88 Prozent, Cohens Kappa jedoch nur .19; rund 90 Prozent der Segmente fallen in dieselbe Kategorie. Wie ist dieses Muster methodisch am besten zu interpretieren?",
    "en": "A student validates AI-assisted coding of 200 interview segments against a human gold standard. Percent agreement is 88 percent, but Cohen's kappa is only .19; about 90 percent of segments fall into the same category. What is the best methodological interpretation of this pattern?"
   },
   "a": [
    {
     "de": "Die Kodierung ist reliabel, weil die prozentuale Übereinstimmung von 88 Prozent das entscheidende Mass ist und der tiefe Kappa-Wert hier vernachlässigt werden kann.",
     "en": "The coding is reliable, because the 88 percent agreement is the decisive measure and the low kappa value can be neglected here."
    },
    {
     "de": "Die Stichprobe von 200 Segmenten ist für Kappa zu klein, weshalb der Wert instabil ist und erst ab rund 1000 Segmenten sinnvoll interpretiert werden kann.",
     "en": "The sample of 200 segments is too small for kappa, so the value is unstable and can only be interpreted meaningfully from about 1000 segments onwards."
    },
    {
     "de": "Die hohe Übereinstimmung entsteht weitgehend durch die schiefe Kategorienverteilung; Kappa korrigiert für Zufallsübereinstimmung und zeigt hier nur geringe über den Zufall hinausgehende Übereinstimmung.",
     "en": "The high agreement arises largely from the skewed category distribution; kappa corrects for chance agreement and here shows only little agreement beyond chance."
    },
    {
     "de": "Die Diskrepanz spricht für Fehler im menschlichen Goldstandard, da eine valide KI-Kodierung bei hoher Prozentübereinstimmung auch hohe Kappa-Werte erreichen würde.",
     "en": "The discrepancy points to errors in the human gold standard, since valid AI coding with high percent agreement would also reach high kappa values."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Bei stark schiefer Kategorienverteilung ist die erwartete Zufallsübereinstimmung sehr hoch, weshalb Kappa trotz 88 Prozent Übereinstimmung tief bleibt (Prävalenzproblem nach Feinstein und Cicchetti). Der verführerischste Distraktor erklärt die Prozentübereinstimmung zum robusteren Mass, dabei ignoriert gerade sie die Zufallskomponente und überschätzt so die Qualität der KI-Kodierung.",
    "en": "With a strongly skewed category distribution, expected chance agreement is very high, which is why kappa stays low despite 88 percent agreement (the prevalence problem described by Feinstein and Cicchetti). The most tempting distractor declares percent agreement the more robust measure, yet it is precisely the index that ignores chance agreement and therefore overestimates the quality of the AI coding."
   }
  },
  {
   "q": {
    "de": "In einem Längsschnittdatensatz fehlen rund 25 Prozent der Messzeitpunkte. Das KI-Skript-Review schlägt vor, das lineare gemischte Modell im R-Skript aus Gründen der Einfachheit durch eine Messwiederholungs-ANOVA zu ersetzen. Was ist das fachlich korrekte Ergebnis der Prüfung dieses Vorschlags?",
    "en": "In a longitudinal dataset, about 25 percent of measurement occasions are missing. The AI script review suggests replacing the linear mixed model in the R script with a repeated-measures ANOVA for the sake of simplicity. What is the professionally sound conclusion after checking this suggestion?"
   },
   "a": [
    {
     "de": "Den Vorschlag ablehnen, weil die Messwiederholungs-ANOVA Personen mit fehlenden Zeitpunkten listenweise ausschliesst, das gemischte Modell aber alle vorhandenen Daten unter der MAR-Annahme nutzt.",
     "en": "Reject the suggestion, because repeated-measures ANOVA drops participants with missing occasions listwise, while the mixed model uses all available data under the MAR assumption."
    },
    {
     "de": "Den Vorschlag annehmen, weil die Messwiederholungs-ANOVA fehlende Zeitpunkte über die Greenhouse-Geisser-Korrektur auffängt und bei Längsschnittdaten das sparsamere Verfahren ist.",
     "en": "Accept the suggestion, because repeated-measures ANOVA absorbs missing occasions through the Greenhouse-Geisser correction and is the more parsimonious method for longitudinal data."
    },
    {
     "de": "Den Vorschlag annehmen, weil gemischte Modelle bei fehlenden Werten verzerrte Schätzungen liefern, solange keine multiple Imputation der fehlenden Zeitpunkte vorgeschaltet wird.",
     "en": "Accept the suggestion, because mixed models yield biased estimates with missing values as long as no multiple imputation of the missing occasions is carried out first."
    },
    {
     "de": "Den Vorschlag ablehnen, weil die Messwiederholungs-ANOVA metrische Prädiktoren voraussetzt und der kategoriale Faktor Zeit deshalb ein gemischtes Modell zwingend erfordert.",
     "en": "Reject the suggestion, because repeated-measures ANOVA requires metric predictors, so the categorical time factor necessarily calls for a mixed model."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Die Messwiederholungs-ANOVA schliesst bei fehlenden Zeitpunkten ganze Personen aus und setzt implizit MCAR voraus, während das gemischte Modell alle vorhandenen Daten unter der schwächeren MAR-Annahme nutzt; der KI-Vorschlag würde Power und Validität verschlechtern. Der Greenhouse-Geisser-Distraktor ist verführerisch, doch diese Korrektur behandelt Sphärizitätsverletzungen und nicht fehlende Werte.",
    "en": "With missing occasions, repeated-measures ANOVA excludes entire participants and implicitly assumes MCAR, while the mixed model uses all available data under the weaker MAR assumption; accepting the AI suggestion would reduce power and validity. The Greenhouse-Geisser distractor is tempting, but that correction addresses violations of sphericity, not missing data."
   }
  },
  {
   "q": {
    "de": "Ein Masterprojekt rekrutiert über eine Anzeige in sozialen Medien mit dem Aufruf «Leidest du unter Prüfungsangst? Mach mit!» und erhält 1'800 vollständige Datensätze. Daraus soll die Prävalenz ausgeprägter Prüfungsangst unter Schweizer Studierenden geschätzt werden; Alter und Geschlecht werden per Poststratifikation an die Populationsverteilung angeglichen. Wie ist die Datengrundlage für diese Schlussfolgerung zu beurteilen?",
    "en": "A master's project recruits through a social media ad reading «Do you suffer from test anxiety? Take part!» and obtains 1,800 complete data sets. The prevalence of pronounced test anxiety among Swiss students is to be estimated from them; age and gender are adjusted to the population distribution by post-stratification. How should the data basis for this conclusion be judged?"
   },
   "a": [
    {
     "de": "Für eine Prävalenzschätzung tragfähig, weil das Konfidenzintervall bei 1'800 vollständigen Datensätzen so eng ausfällt, dass verbleibende Unsicherheiten der Rekrutierung praktisch nicht mehr ins Gewicht fallen.",
     "en": "Sound for a prevalence estimate, because with 1,800 complete data sets the confidence interval is so narrow that remaining uncertainties of recruitment carry practically no weight."
    },
    {
     "de": "Für eine Prävalenzschätzung nicht tragfähig, weil die Teilnahmebereitschaft am erhobenen Merkmal selbst hängt und eine Gewichtung nach Alter und Geschlecht diese Selektion nicht ausgleicht.",
     "en": "Not sound for a prevalence estimate, because willingness to take part depends on the very characteristic being measured, and weighting by age and gender does not offset this selection."
    },
    {
     "de": "Für jede Auswertung untauglich, weil ohne Zufallsauswahl aus der Studierendenpopulation weder Prävalenzen noch Zusammenhänge zwischen Variablen interpretierbar sind.",
     "en": "Unusable for any analysis, because without random sampling from the student population neither prevalences nor associations between variables can be interpreted."
    },
    {
     "de": "Für eine Prävalenzschätzung tragfähig, sobald zusätzlich nach Studienfach, Semester und Hochschultyp gewichtet wird, weil damit die wesentlichen Wege der Selbstselektion abgedeckt sind.",
     "en": "Sound for a prevalence estimate as soon as field of study, semester, and type of institution are also used as weights, because this covers the main routes of self-selection."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Der Rekrutierungsaufruf selektiert direkt auf die Zielvariable: Wer sich stark von Prüfungsangst betroffen fühlt, nimmt eher teil, weshalb die geschätzte Prävalenz systematisch nach oben verzerrt ist. Eine grosse Fallzahl verkleinert nur den Zufallsfehler, nicht diese Verzerrung. Poststratifikation korrigiert zudem nur, wenn die Teilnahme innerhalb der Gewichtungszellen zufällig erfolgt; der verführerischste Distraktor will deshalb weitere Merkmale ergänzen, doch die entscheidende Selektionsvariable ist die Prüfungsangst selbst und steht als Gewichtungsmerkmal nicht zur Verfügung. Zusammenhangsanalysen innerhalb der Stichprobe sind dagegen nicht wertlos, wegen der eingeschränkten Streuung der Prüfungsangst aber nur mit Vorbehalt zu interpretieren.",
    "en": "The recruitment call selects directly on the target variable: those who feel strongly affected by test anxiety are more likely to take part, so the estimated prevalence is systematically inflated. A large sample only shrinks random error, not this bias. Post-stratification, moreover, corrects only if participation is random within the weighting cells; the most tempting distractor therefore wants to add further characteristics, but the decisive selection variable is test anxiety itself and it is not available as a weighting variable. Associations within the sample, by contrast, are not worthless, but because the spread of test anxiety is restricted they must be interpreted with reservations."
   }
  }
 ],
 "06SM200-600": [
  {
   "q": {
    "de": "Im klinischen Praktikum stützt die Metaanalysen-Lage für eine Patientin mit Panikstörung am klarsten Expositionsübungen. Die Patientin lehnt Exposition nach schlechten Vorerfahrungen ab, wäre aber für ein kognitives Vorgehen motiviert. Was verlangt das Modell evidenzbasierter Praxis (APA, 2006) in dieser Situation?",
    "en": "During a clinical internship, the meta-analytic evidence most clearly supports exposure exercises for a patient with panic disorder. The patient refuses exposure after bad prior experiences but is motivated for a cognitive approach. What does the model of evidence-based practice (APA, 2006) require in this situation?"
   },
   "a": [
    {
     "de": "Die Exposition beibehalten, weil die beste verfügbare Evidenz die übrigen Entscheidungsgrundlagen übertrumpft und Motivationsprobleme im Therapieverlauf bearbeitet werden.",
     "en": "Stick with exposure, because the best available evidence outweighs the other decision criteria and motivation problems are worked on over the course of therapy."
    },
    {
     "de": "Beste Forschungsevidenz, klinische Expertise sowie Merkmale und Präferenzen der Patientin gemeinsam abwägen und ein evidenzbasiertes Vorgehen wählen, das sie mitträgt.",
     "en": "Weigh the best research evidence, clinical expertise, and the patient's characteristics and preferences together, and choose an evidence-based approach she supports."
    },
    {
     "de": "Der Präferenz der Patientin folgen, weil die Behandlungszufriedenheit den Erfolg stärker bestimmt als die Verfahrenswahl und Evidenz lediglich Durchschnittswerte abbildet.",
     "en": "Follow the patient's preference, because treatment satisfaction shapes outcome more strongly than the choice of method and evidence merely reflects group averages."
    },
    {
     "de": "Die Entscheidung an die Patientin delegieren und beide Verfahren gleichwertig vorstellen, weil evidenzbasierte Praxis eine neutrale Haltung gegenüber Methoden verlangt.",
     "en": "Delegate the decision to the patient and present both methods as equivalent, because evidence-based practice requires clinicians to stay neutral towards methods."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Evidenzbasierte Praxis integriert per Definition beste Forschungsevidenz, klinische Expertise sowie Merkmale, Kultur und Präferenzen der Patientin; ein kognitives Vorgehen mit guter Evidenz und hoher Akzeptanz erfüllt alle drei Säulen. Der verführerischste Distraktor lässt die Evidenz alles übertrumpfen und verwechselt evidenzbasierte Praxis mit blosser Leitlinienanwendung; eine abgelehnte Behandlung scheitert zudem häufig an Adhärenz und Abbruch.",
    "en": "By definition, evidence-based practice integrates the best research evidence with clinical expertise and the patient's characteristics, culture, and preferences; a cognitive approach with good evidence and high acceptance satisfies all three pillars. The most tempting distractor lets evidence trump everything else and confuses evidence-based practice with mere guideline application; a treatment the patient rejects also frequently fails through poor adherence and dropout."
   }
  },
  {
   "q": {
    "de": "Eine Praktikantin möchte Verlaufsnotizen einer Klientin mit einem öffentlich zugänglichen Chatbot zusammenfassen. Vorher entfernt sie Name und Geburtsdatum. Wie ist dieses Vorgehen mit Blick auf Datenschutz und Schweigepflicht zu beurteilen?",
    "en": "An intern wants to summarize a client's progress notes with a publicly accessible chatbot. Beforehand she removes the name and date of birth. How should this procedure be judged with regard to data protection and professional confidentiality?"
   },
   "a": [
    {
     "de": "Zulässig, weil durch das Entfernen der direkten Identifikatoren anonymisierte Daten vorliegen und anonymisierte Daten nicht mehr unter das Datenschutzrecht fallen.",
     "en": "Permissible, because removing the direct identifiers produces anonymized data, and anonymized data no longer fall under data protection law."
    },
    {
     "de": "Zulässig, weil die Schweigepflicht die Weitergabe an Personen betrifft und die Verarbeitung durch ein technisches System davon nicht erfasst wird.",
     "en": "Permissible, because confidentiality concerns disclosure to persons, and processing by a technical system is not covered by it."
    },
    {
     "de": "Unzulässig, aber heilbar durch eine mündliche Zustimmung der Klientin, da ihre Einwilligung die Datenbearbeitung durch beliebige externe Systeme rechtlich abdeckt.",
     "en": "Impermissible, but curable through the client's verbal agreement, since her consent legally covers data processing by any external system."
    },
    {
     "de": "Unzulässig, weil Verlaufsnotizen über Kontextdetails re-identifizierbar bleiben und besonders schützenswerte Daten nur in institutionell freigegebene Systeme gehören.",
     "en": "Impermissible, because progress notes remain re-identifiable through contextual details, and highly sensitive data belong only in institutionally approved systems."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Das Entfernen von Name und Geburtsdatum ist höchstens eine Pseudonymisierung: Verlaufsnotizen bleiben über Kontextdetails wie Beruf, Lebensereignisse oder Symptomatik re-identifizierbar, und Gesundheitsdaten sind besonders schützenswerte Personendaten, die nicht in öffentliche Chatbots gehören. Der verführerischste Distraktor setzt das Löschen direkter Identifikatoren mit Anonymisierung gleich und übersieht genau diese Re-Identifizierbarkeit.",
    "en": "Removing the name and date of birth is at best pseudonymization: progress notes remain re-identifiable through contextual details such as occupation, life events, or symptoms, and health data are highly sensitive personal data that do not belong in public chatbots. The most tempting distractor equates deleting direct identifiers with anonymization and overlooks exactly this re-identifiability."
   }
  },
  {
   "q": {
    "de": "In Ihrem Praktikum in der betrieblichen Gesundheitsförderung führen Sie Einzelgespräche zur Arbeitsbelastung. Den Mitarbeitenden wurde zugesichert, dass ihre Angaben vertraulich bleiben und nur zusammengefasst zurückgemeldet werden. Die Personalleitung verlangt nun eine Auswertung getrennt nach Abteilung, um gezielt unterstützen zu können; eine der Abteilungen umfasst vier Personen. Welches Vorgehen ist berufsethisch tragfähig?",
    "en": "In your internship in occupational health promotion you conduct individual interviews about workload. Employees were assured that their statements stay confidential and are reported only in aggregated form. HR management now asks for a breakdown by department in order to offer targeted support; one of the departments has four people. Which course of action is professionally sound?"
   },
   "a": [
    {
     "de": "Die abteilungsweise Auswertung liefern, weil die Angaben ohne Namen erfasst wurden und die Personalleitung als Auftraggeberin über die Verwendung der bestellten Ergebnisse entscheidet.",
     "en": "Deliver the departmental breakdown, because the statements were recorded without names and HR management, as the commissioning party, decides how the results it ordered are used."
    },
    {
     "de": "Die abteilungsweise Auswertung liefern, sobald die vier Mitarbeitenden auf Nachfrage der Personalleitung nachträglich schriftlich einwilligen, dass ihre Angaben so berichtet werden dürfen.",
     "en": "Deliver the departmental breakdown as soon as the four employees, asked by HR management, give retrospective written consent that their statements may be reported in this way."
    },
    {
     "de": "Die abteilungsweise Auswertung nach Rücksprache mit der Praktikumsleitung ablehnen und der Personalleitung Rückmeldungen nur für Gruppen ab einer festgelegten Mindestgrösse anbieten.",
     "en": "Decline the departmental breakdown after consulting the internship supervisor and offer HR management feedback only for groups at or above an agreed minimum size."
    },
    {
     "de": "Die Ergebnisrückmeldung insgesamt aussetzen, auch auf Gesamtebene, weil die Anfrage zeigt, dass die Vertraulichkeitszusage im Unternehmen keinen Bestand hat.",
     "en": "Suspend the feedback of results altogether, including at company level, because the request shows that the confidentiality assurance carries no weight in this organisation."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Die Vertraulichkeitszusage bindet auch die Berichtsebene: Bei vier Personen lässt eine abteilungsbezogene Auswertung Rückschlüsse auf einzelne Angaben zu. Fachlicher Standard ist deshalb eine Mindestgruppengrösse für jede Rückmeldung, und der Rollenkonflikt zwischen Auftraggeberin und Teilnehmenden gehört mit der Praktikumsleitung geklärt, statt ihn allein auszutragen. Der verführerischste Distraktor holt die Zustimmung nachträglich ein; im Arbeitsverhältnis und erst noch auf Nachfrage der Personalleitung ist eine solche Einwilligung nicht frei von Druck und kann eine bereits gegebene Zusage nicht rückwirkend ersetzen. Das berechtigte Anliegen der gezielten Unterstützung lässt sich anders bedienen, etwa über zusammengefasste Organisationseinheiten.",
    "en": "The confidentiality assurance also binds the level of reporting: with four people, a departmental breakdown allows inferences about individual statements. The professional standard is therefore a minimum group size for any feedback, and the role conflict between the commissioning party and the participants belongs on the table with the internship supervisor rather than being handled alone. The most tempting distractor obtains consent after the fact; in an employment relationship, and prompted by HR management at that, such consent is not free of pressure and cannot retrospectively replace an assurance already given. The legitimate wish for targeted support can be met differently, for instance through larger combined organisational units."
   }
  }
 ],
 "06SM200-s02": [
  {
   "q": {
    "de": "Eine Gastreferentin berichtet aus einer Registerstudie mit n = 250'000 einen signifikanten Effekt eines Achtsamkeitstrainings auf Prüfungsangst (p < .001, d = 0.04). Welche Diskussionsfrage trifft den methodischen Kern dieses Befunds am besten?",
    "en": "A guest speaker reports a significant effect of mindfulness training on test anxiety from a registry study with n = 250,000 (p < .001, d = 0.04). Which discussion question best targets the methodological core of this finding?"
   },
   "a": [
    {
     "de": "Ob das Signifikanzniveau angesichts der vielen möglichen Tests nicht auf p < .01 hätte gesenkt werden müssen, um die Alphafehler-Inflation in der Registerstudie zu kontrollieren.",
     "en": "Whether the significance level should have been lowered to p < .01 given the many possible tests, in order to control alpha error inflation in the registry study."
    },
    {
     "de": "Ob die Stichprobe für eine derart breite Population wirklich gross genug war, um den Trainingseffekt zuverlässig von zufälligen Schwankungen unterscheiden zu können.",
     "en": "Whether the sample was really large enough for such a broad population to reliably distinguish the training effect from random fluctuations."
    },
    {
     "de": "Ob der Befund ohne eine präregistrierte konfirmatorische Replikation berichtet werden sollte, da Registerdaten in erster Linie explorative Aussagen erlauben.",
     "en": "Whether the finding should be reported without a preregistered confirmatory replication, since registry data primarily allow exploratory conclusions."
    },
    {
     "de": "Ob ein standardisierter Effekt von d = 0.04 praktisch bedeutsam ist, da bei dieser Stichprobengrösse auch triviale Unterschiede statistisch hochsignifikant werden.",
     "en": "Whether a standardized effect of d = 0.04 is practically meaningful, since with a sample this large even trivial differences become statistically highly significant."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Bei n = 250'000 werden auch triviale Unterschiede hochsignifikant; die entscheidende Frage betrifft die praktische Bedeutsamkeit von d = 0.04, das weit unter Cohens Konvention für einen kleinen Effekt (0.2) liegt. Der Stichproben-Distraktor ist verführerisch, zielt aber in die falsche Richtung: Das Problem ist nicht zu wenig, sondern so viel Teststärke, dass Signifikanz nichts mehr über Relevanz aussagt.",
    "en": "With n = 250,000, even trivial differences become highly significant; the decisive question concerns the practical meaning of d = 0.04, which lies far below Cohen's convention for a small effect (0.2). The sample-size distractor is tempting but points in the wrong direction: the problem is not too little power, but so much power that significance no longer says anything about relevance."
   }
  },
  {
   "q": {
    "de": "Zur Vorbereitung auf einen Gastvortrag lässt sich eine Studentin vom KI-Assistenten den Forschungsstand zum Vortragsthema zusammenfassen. Alle genannten Arbeiten existieren, sind korrekt zitiert und inhaltlich zutreffend wiedergegeben; dennoch zeichnet die Zusammenfassung das Bild eines einheitlich gut belegten Effekts. Die im Vortrag zentrale präregistrierte Multi-Labor-Replikation, die den Effekt nicht bestätigt, kommt darin vor, wird aber als abweichender Einzelbefund eingeordnet. Was erklärt diese Schieflage am besten?",
    "en": "To prepare for a guest lecture, a student has an AI assistant summarise the state of research on the topic. All the works named exist, are cited correctly, and their findings are reported accurately; even so, the summary paints the picture of a uniformly well-established effect. The preregistered multi-lab replication that is central to the talk, which does not confirm the effect, does appear, but is framed as a deviating single finding. What best explains this imbalance?"
   },
   "a": [
    {
     "de": "Die Replikation ist zu neu, um im Trainingskorpus des Modells angemessen vertreten zu sein; mit einem aktuelleren Modell wäre die Zusammenfassung ausgewogen ausgefallen.",
     "en": "The replication is too recent to be adequately represented in the model's training corpus; with a more up-to-date model the summary would have come out balanced."
    },
    {
     "de": "Der Assistent bildet die Gewichte des publizierten Korpus ab, in dem Positivbefunde überrepräsentiert sind, weil nicht signifikante Ergebnisse seltener publiziert und seltener zitiert werden.",
     "en": "The assistant mirrors the weights of the published corpus, in which positive findings are overrepresented because non-significant results are published and cited less often."
    },
    {
     "de": "Der Assistent wertet die Konvergenz vieler unabhängiger Einzelstudien zu Recht höher als eine einzelne Replikationsstudie, weil sich Stichprobenfehler über viele Studien hinweg ausmitteln.",
     "en": "The assistant rightly rates the convergence of many independent single studies above one individual replication study, because sampling error averages out across many studies."
    },
    {
     "de": "Der Assistent stützt sich vorwiegend auf Abstracts, weshalb die Einschränkungen aus den Diskussionsteilen der Originalarbeiten in der Zusammenfassung systematisch fehlen.",
     "en": "The assistant draws mainly on abstracts, so the limitations stated in the discussion sections of the original articles are systematically absent from the summary."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Ein Sprachmodell reproduziert die Verteilung des publizierten und zitierten Schrifttums; nicht publizierte Nullbefunde bleiben darin strukturell unsichtbar (Publikationsbias bzw. File-Drawer-Problem; Rosenthal, 1979). «Konsens» in einer KI-Zusammenfassung ist deshalb zunächst eine Aussage über den Korpus und nicht über die Evidenzlage. Der verführerischste Distraktor rechnet die Zahl übereinstimmender Einzelstudien als Evidenzgewicht auf, übersieht aber, dass gerade diese Studien vom Publikationsbias betroffen sind, während eine präregistrierte Multi-Labor-Replikation dagegen geschützt ist. Dass die Replikation in der Zusammenfassung vorkommt, schliesst zugleich aus, dass sie dem Modell schlicht unbekannt war.",
    "en": "A language model reproduces the distribution of the published and cited literature; unpublished null results remain structurally invisible in it (publication bias, or the file-drawer problem; Rosenthal, 1979). «Consensus» in an AI summary is therefore first of all a statement about the corpus, not about the state of the evidence. The most tempting distractor adds up the number of converging single studies as evidential weight but overlooks that precisely those studies are affected by publication bias, whereas a preregistered multi-lab replication is protected against it. The fact that the replication does appear in the summary also rules out that the model simply did not know it."
   }
  },
  {
   "q": {
    "de": "Nach einem Gastvortrag bittet Sie eine Journalistin um einen Satz für die Medienmitteilung. Der Vortrag berichtete aus einer Längsschnitt-Beobachtungsstudie: Jugendliche, die häufiger musizieren, erzielen im Mittel etwas höhere Werte in einem Arbeitsgedächtnistest; der kleine Zusammenhang ist statistisch signifikant und bleibt nach Kontrolle des Bildungshintergrunds bestehen. Welche Formulierung ist fachlich korrekt und zugleich verständlich?",
    "en": "After a guest lecture a journalist asks you for one sentence for the press release. The talk reported a longitudinal observational study: adolescents who play music more often score somewhat higher on a working memory test on average; the small association is statistically significant and holds after controlling for educational background. Which wording is both scientifically accurate and understandable?"
   },
   "a": [
    {
     "de": "«Musizieren trainiert das Arbeitsgedächtnis von Jugendlichen und stärkt so nachweislich ihre Gehirnleistung, unabhängig vom Bildungshintergrund des Elternhauses.»",
     "en": "“Making music trains adolescents' working memory and thus demonstrably strengthens their brain performance, regardless of the educational background of their home.”"
    },
    {
     "de": "«Zwischen Musizierhäufigkeit und Arbeitsgedächtnisleistung besteht ein statistisch signifikanter Zusammenhang, der auch unter Kontrolle des Bildungshintergrunds Bestand hat.»",
     "en": "“There is a statistically significant association between how often adolescents play music and their working memory performance, and it holds when educational background is controlled.”"
    },
    {
     "de": "«Jugendliche, die häufiger musizieren, schneiden im Gedächtnistest im Schnitt etwas besser ab; ob das Musizieren die Ursache ist, kann die Studie nicht klären.»",
     "en": "“Adolescents who play music more often do somewhat better on the memory test on average; whether making music is the cause cannot be settled by this study.”"
    },
    {
     "de": "«Wer im Jugendalter nicht musiziert, trägt der Studie zufolge ein erhöhtes Risiko, im Arbeitsgedächtnis hinter Gleichaltrigen zurückzubleiben, auch bei gleichem Bildungshintergrund.»",
     "en": "“According to the study, those who do not play music in adolescence carry an increased risk of falling behind their peers in working memory, even at the same educational background.”"
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Die tragfähige Fassung nennt Richtung und Grössenordnung («im Schnitt etwas besser») in Alltagssprache und markiert zugleich, dass ein Beobachtungsdesign die Ursachenfrage offenlässt: Auch nach Kontrolle des Bildungshintergrunds bleiben unbeobachtete Drittvariablen möglich. Der verführerischste Distraktor ist fachlich nicht falsch, verlässt sich aber auf «signifikant», das ein Laienpublikum als «bedeutsam» und damit als grossen Effekt liest, und lässt die Kausalitätsfrage unbeantwortet. Die beiden übrigen Optionen formulieren offen kausal beziehungsweise als Risikoaussage und gehen damit weit über die Datenlage hinaus.",
    "en": "The sound version gives direction and order of magnitude (“somewhat better on average”) in everyday language while flagging that an observational design leaves the causal question open: even after controlling for educational background, unobserved third variables remain possible. The most tempting distractor is not factually wrong, but it relies on “significant”, which a lay audience reads as “substantial” and therefore as a large effect, and it leaves the causal question unanswered. The two remaining options are openly causal or phrased as a risk claim and thus go far beyond what the data support."
   }
  }
 ],
 "06SM200-MA": [
  {
   "q": {
    "de": "In Ihrer Masterarbeit ergibt die präregistrierte Analyse p = .06. Mit einem nachträglich gewählten Ausschlusskriterium für Ausreisser wird der Effekt mit p = .03 signifikant. Wie gehen Sie wissenschaftlich korrekt vor?",
    "en": "In your Master's thesis, the preregistered analysis yields p = .06. With an outlier exclusion criterion chosen after the fact, the effect becomes significant at p = .03. What is the scientifically correct course of action?"
   },
   "a": [
    {
     "de": "Sie berichten nur die signifikante Analyse, weil das neue Ausschlusskriterium statistisch begründbar ist und das Resultat klarer kommuniziert.",
     "en": "You report only the significant analysis, because the new exclusion criterion is statistically defensible and communicates the result more clearly."
    },
    {
     "de": "Sie berichten die präregistrierte Analyse als konfirmatorisch und weisen die neue Analyse transparent als exploratorische Sensitivitätsanalyse aus.",
     "en": "You report the preregistered analysis as confirmatory and transparently label the new analysis as an exploratory sensitivity analysis."
    },
    {
     "de": "Sie ersetzen die präregistrierte Analyse durch die neue, weil der Umgang mit Ausreissern ein legitimer Freiheitsgrad der Auswertung bleibt.",
     "en": "You replace the preregistered analysis with the new one, because handling outliers remains a legitimate degree of freedom in data analysis."
    },
    {
     "de": "Sie erheben so lange zusätzliche Versuchspersonen, bis die präregistrierte Analyse das konventionelle Signifikanzniveau erreicht hat.",
     "en": "You keep collecting additional participants until the preregistered analysis reaches the conventional level of statistical significance."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Nur die präregistrierte Analyse gilt als konfirmatorisch; nachträglich gewählte Ausschlusskriterien sind Forscherfreiheitsgrade und müssen als exploratorisch deklariert werden. Das selektive Berichten der signifikanten Variante ist p-Hacking, auch wenn das Kriterium für sich genommen begründbar wirkt. Optionales Nacherheben bis zur Signifikanz erhöht die Alphafehler-Rate ebenfalls.",
    "en": "Only the preregistered analysis counts as confirmatory; exclusion criteria chosen afterwards are researcher degrees of freedom and must be declared as exploratory. Selectively reporting the significant variant is p-hacking, even if the criterion seems defensible on its own. Optional stopping until significance likewise inflates the Type I error rate."
   }
  },
  {
   "q": {
    "de": "Für den Literaturteil Ihrer Masterarbeit screent ein KI-Agent 4000 Abstracts gegen Ihre Einschlusskriterien und meldet 62 Treffer. Sie prüfen alle 62 von Hand und bestätigen jeden als einschlussfähig. Welcher Schluss ist methodisch tragfähig?",
    "en": "For the literature section of your Master's thesis, an AI agent screens 4000 abstracts against your inclusion criteria and reports 62 hits. You check all 62 by hand and confirm every one as eligible. Which conclusion is methodologically sound?"
   },
   "a": [
    {
     "de": "Die Handprüfung belegt nur die Güte der Trefferliste; ob einschlussfähige Studien im Ausschluss geblieben sind, zeigt erst eine Stichprobenkontrolle der 3938 Ausschlüsse.",
     "en": "The manual check establishes only the quality of the hit list; whether eligible studies remained among the exclusions is shown only by spot-checking a sample of the 3938 exclusions."
    },
    {
     "de": "Die Handprüfung ergibt eine Fehlerquote von null, womit der Screening-Schritt validiert ist und im Verifikationsprotokoll so festgehalten werden kann.",
     "en": "The manual check yields an error rate of zero, so the screening step is validated and can be recorded as such in the verification protocol."
    },
    {
     "de": "Ein zweiter Agent mit abweichendem Prompt screent dieselben Abstracts; stimmen beide Trefferlisten überein, ist die Vollständigkeit der Auswahl belegt.",
     "en": "A second agent with a different prompt screens the same abstracts; if both hit lists agree, the completeness of the selection is established."
    },
    {
     "de": "Die Einschlusskriterien werden gelockert und der Lauf wiederholt; bleibt die Trefferzahl gleich, hat der Agent keine passenden Studien übersehen.",
     "en": "The inclusion criteria are loosened and the run is repeated; if the number of hits stays the same, the agent has missed no suitable studies."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Die Prüfung der Treffer sagt etwas über die Präzision aus, nichts über die Sensitivität: Falsch ausgeschlossene Studien tauchen im Ergebnis gar nicht auf und lassen sich nur über eine Stichprobenkontrolle der Ausschlüsse abschätzen. Der verführerischste Distraktor liest aus der fehlerfreien Trefferliste eine Fehlerquote von null heraus und verwechselt damit die beiden Fehlerarten. Und zwei Agenten können dieselbe systematische Blindstelle teilen, weil sie auf ähnlichen Daten beruhen; Übereinstimmung ist deshalb kein Vollständigkeitsnachweis.",
    "en": "Checking the hits speaks to precision, not to sensitivity: wrongly excluded studies do not appear in the result at all and can only be estimated by spot-checking the exclusions. The most tempting distractor reads an error rate of zero off a flawless hit list and thereby conflates the two error types. And two agents can share the same systematic blind spot because they rest on similar data; agreement is therefore no proof of completeness."
   }
  },
  {
   "q": {
    "de": "In der Verteidigung Ihrer Masterarbeit führen Sie Ihre agentische Analysepipeline live vor. Dabei schlägt das System eine andere Modellspezifikation vor als die in der Arbeit berichtete. Wie reagieren Sie fachlich angemessen?",
    "en": "In the defence of your Master's thesis you demonstrate your agentic analysis pipeline live. In doing so, the system proposes a model specification other than the one reported in the thesis. What is the appropriate response?"
   },
   "a": [
    {
     "de": "Sie ordnen die Abweichung ein und begründen Ihre berichtete Spezifikation inhaltlich, gestützt auf Ihre Auswertungsstrategie und die Robustheitsanalyse.",
     "en": "You situate the deviation and justify your reported specification on substantive grounds, drawing on your analysis strategy and your robustness analysis."
    },
    {
     "de": "Sie übernehmen die vorgeschlagene Spezifikation und reichen die neu gerechnete Analyse nach, weil das System einen von Ihnen übersehenen Freiheitsgrad sichtbar macht.",
     "en": "You adopt the proposed specification and submit the recomputed analysis afterwards, because the system has exposed a degree of freedom you overlooked."
    },
    {
     "de": "Sie wiederholen den Durchlauf, denn erst wenn die Pipeline live dieselbe Spezifikation ausgibt wie im Bericht, sind Ihre Ergebnisse als reproduzierbar belegt.",
     "en": "You repeat the run, since only when the pipeline outputs the same specification live as in the report are your results shown to be reproducible."
    },
    {
     "de": "Sie tragen die abweichende Ausgabe in Ihrem Verzeichnis der KI-Nutzung nach, denn damit ist die Transparenzpflicht gegenüber der Prüfungskommission erfüllt.",
     "en": "You add the deviating output to your AI usage register, since that satisfies the transparency requirement towards the examination board."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Zur Debatte steht nicht, was die Pipeline ausgibt, sondern ob Sie Ihre Auswertungsentscheidungen begründen können: Der alternative Vorschlag ist der Prüfstein dafür, ob Ihre Spezifikation theoretisch hergeleitet und durch die Robustheitsanalyse bereits abgedeckt ist. Der verführerischste Distraktor macht die identische Wiederholung im Livelauf zum Kriterium; Ausgaben von Sprachmodellen sind jedoch nicht deterministisch, und eine identische Ausgabe sagte nichts über die Güte der Spezifikation. Die Deklaration der KI-Nutzung ist ohnehin Pflicht, ersetzt die inhaltliche Begründung aber nicht, und eine ungeprüfte Übernahme kehrt die Verantwortungsrichtung um.",
    "en": "What is at issue is not what the pipeline outputs but whether you can justify your analytic decisions: the alternative proposal is the touchstone for whether your specification is theoretically derived and already covered by your robustness analysis. The most tempting distractor makes an identical repetition in the live run the criterion, yet language-model outputs are not deterministic, and an identical output would say nothing about the quality of the specification. Declaring AI use is required in any case but does not replace the substantive justification, and adopting the proposal unchecked reverses the direction of responsibility."
   }
  }
 ],
 "06SM200-901": [
  {
   "q": {
    "de": "In der Masterarbeitsgruppe stellt eine Studentin ihr Konzept vor: Sie will zeigen, dass Social-Media-Nutzung das Wohlbefinden senkt, plant aber eine einmalige Querschnittsbefragung mit Korrelationsanalyse. Was ist der zentrale Einwand?",
    "en": "In the thesis group, a student presents her concept: she wants to show that social media use lowers wellbeing, but plans a single cross-sectional survey with a correlational analysis. What is the central objection?"
   },
   "a": [
    {
     "de": "Die geplante Stichprobe ist für eine Korrelationsanalyse zu heterogen, weshalb zuerst eine Vollerhebung der Grundgesamtheit nötig wäre.",
     "en": "The planned sample is too heterogeneous for a correlational analysis, so a full census of the population would be required first."
    },
    {
     "de": "Die Korrelationsanalyse ist das falsche Verfahren, weil für kausale Aussagen grundsätzlich eine multiple Regression gerechnet werden muss.",
     "en": "The correlational analysis is the wrong technique, because causal claims fundamentally require running a multiple regression model."
    },
    {
     "de": "Das Querschnittsdesign schliesst umgekehrte Kausalität und Drittvariablen nicht aus; die Fragestellung verlangt ein experimentelles oder ein Längsschnittdesign.",
     "en": "The cross-sectional design cannot rule out reverse causation or third variables; the question demands an experimental or a longitudinal design."
    },
    {
     "de": "Die Effektstärke wird bei Querschnittsdaten systematisch überschätzt, weshalb erst eine Metaanalyse den wahren Zusammenhang liefern kann.",
     "en": "Effect sizes are systematically overestimated in cross-sectional data, so only a meta-analysis can deliver the true association."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Kausalrichtung und Konfundierung lassen sich mit einer einmaligen Querschnittsmessung nicht klären; für die kausale Fragestellung braucht es ein experimentelles oder mindestens längsschnittliches Design. Der verführerischste Distraktor ist die Regressionsoption: Die statistische Kontrolle einzelner Kovariaten stellt keine Kausalität her, das Problem liegt im Design und nicht im Auswertungsverfahren. Auch Stichprobengrösse oder Metaanalysen beheben den Designmangel nicht.",
    "en": "Causal direction and confounding cannot be resolved with a single cross-sectional measurement; the causal question requires an experimental or at least longitudinal design. The most tempting distractor is the regression option: statistically controlling for some covariates does not establish causality, and the problem lies in the design, not in the analysis technique. Sample size and meta-analyses do not fix the design flaw either."
   }
  },
  {
   "q": {
    "de": "Für Ihre geplante Interventionsstudie mit Prä- und Post-Messung in Interventions- und Kontrollgruppe schlägt ein Sprachmodell diesen Analyseplan vor: je ein t-Test für abhängige Stichproben pro Gruppe; der Effekt gelte als belegt, wenn er nur in der Interventionsgruppe signifikant wird. Wie beurteilen Sie den Vorschlag?",
    "en": "For your planned intervention study with pre- and post-measurement in an intervention and a control group, a language model proposes this analysis plan: one paired-samples t-test per group; the effect counts as established if it is significant in the intervention group only. How do you judge the proposal?"
   },
   "a": [
    {
     "de": "Zwei getrennte Signifikanzentscheide belegen keinen Unterschied zwischen den Gruppen; zu prüfen ist die Interaktion von Gruppe und Messzeitpunkt.",
     "en": "Two separate significance decisions do not establish a difference between the groups; what must be tested is the group by time interaction."
    },
    {
     "de": "Mit einer Bonferroni-Korrektur auf ein Alpha von .025 für die beiden Tests ist der Plan tragfähig und im Analyseplan entsprechend zu vermerken.",
     "en": "With a Bonferroni correction to an alpha of .025 for the two tests the plan is sound and should be noted accordingly in the analysis plan."
    },
    {
     "de": "Bei gleich grossen Gruppen und annähernd normalverteilten Prä-Post-Differenzen ist der Plan tragfähig, weil dann die Voraussetzungen beider Tests erfüllt sind.",
     "en": "With equally large groups and approximately normally distributed pre-post differences the plan is sound, because the assumptions of both tests are then met."
    },
    {
     "de": "Der Plan ist ungeeignet, weil Prä-Post-Veränderungen zu einem erheblichen Teil auf Regression zur Mitte beruhen und deshalb generell nicht interpretierbar sind.",
     "en": "The plan is unsuitable, because pre-post changes rest to a considerable extent on regression to the mean and are therefore generally uninterpretable."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Ob ein Effekt in einer Gruppe die Signifikanzschwelle überschreitet und in der anderen nicht, ist selbst kein Beleg für einen Gruppenunterschied; der interessierende Vergleich muss direkt als Interaktion geprüft werden (Gelman & Stern, 2006). Der verführerischste Distraktor behandelt das Problem als Frage der Alphafehler-Kumulierung: Eine Bonferroni-Korrektur ändert nichts daran, dass der entscheidende Vergleich gar nie gerechnet wird. Regression zur Mitte wiederum trifft beide Gruppen und wird durch genau diesen Gruppenvergleich kontrolliert. Der Vorschlag klingt plausibel, weil dieses Vorgehen in der publizierten Literatur häufig vorkommt und Sprachmodelle solche Muster reproduzieren.",
    "en": "Whether an effect crosses the significance threshold in one group and not in the other is not itself evidence of a group difference; the comparison of interest must be tested directly as an interaction (Gelman & Stern, 2006). The most tempting distractor treats the issue as one of alpha inflation: a Bonferroni correction does not change the fact that the decisive comparison is never computed. Regression to the mean, in turn, affects both groups and is controlled precisely by that group comparison. The proposal sounds plausible because this practice is common in the published literature and language models reproduce such patterns."
   }
  },
  {
   "q": {
    "de": "Ein Mitstudent stellt in der Kleingruppe seinen Analyseplan vor: Er übersetzt einen englischen Screening-Fragebogen selbst ins Deutsche, erhebt an einer Schweizer Stichprobe und trennt die Teilnehmenden am Cut-off-Wert der Originalversion in eine auffällige und eine unauffällige Gruppe. Was ist der zentrale Einwand?",
    "en": "A fellow student presents his analysis plan in the small group: he translates an English screening questionnaire into German himself, collects data in a Swiss sample, and splits participants at the original version's cut-off into a screen-positive and a screen-negative group. What is the central objection?"
   },
   "a": [
    {
     "de": "Der Cut-off gilt nur für die Fassung, an der er gewonnen wurde; für die eigene Übersetzung sind Messäquivalenz und Normbezug zuerst zu belegen.",
     "en": "The cut-off holds only for the version it was derived from; for the self-made translation, measurement equivalence and norms must be established first."
    },
    {
     "de": "Die Übersetzung ist mit Rückübersetzung und Konsensfassung durch zwei unabhängige Personen zu erstellen; danach ist der Cut-off der Originalversion übertragbar.",
     "en": "The translation must be produced with back-translation and a consensus version by two independent people; after that the original version's cut-off transfers."
    },
    {
     "de": "Fragebogenwerte sind ordinalskaliert, weshalb Summenwerte und darauf beruhende Cut-offs bei Screening-Instrumenten grundsätzlich unzulässig sind.",
     "en": "Questionnaire scores are ordinal, so sum scores and cut-offs based on them are fundamentally inadmissible for screening instruments."
    },
    {
     "de": "Die Stichprobe muss mindestens den Umfang der Normstichprobe des Originals erreichen, weil der Cut-off sonst statistisch nicht abgesichert ist.",
     "en": "The sample must at least match the size of the original's norming sample, because otherwise the cut-off is not statistically secured."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Ein Cut-off ist an die Validierung und die Messeigenschaften genau jener Fassung gebunden, an der er gewonnen wurde; bei einer Eigenübersetzung sind Äquivalenz und Normbezug zuerst zu prüfen, sonst ist die Gruppenzuordnung nicht interpretierbar. Der verführerischste Distraktor macht die Übersetzungsqualität zum ganzen Problem: Ein sauberes Übersetzungsverfahren mit Rückübersetzung ist notwendig, ersetzt aber weder die psychometrische Prüfung noch eigene Normwerte. Skalenniveau und Stichprobengrösse betreffen andere Fragen und heben die fehlende Äquivalenz nicht auf.",
    "en": "A cut-off is tied to the validation and measurement properties of exactly the version it was derived from; for a self-made translation, equivalence and norms must be examined first, otherwise the group assignment cannot be interpreted. The most tempting distractor turns translation quality into the whole problem: a clean translation procedure with back-translation is necessary but replaces neither the psychometric examination nor local norms. Level of measurement and sample size concern other questions and do not remove the missing equivalence."
   }
  }
 ],
 "06SM200-902": [
  {
   "q": {
    "de": "Im Kolloquium wendet ein Peer ein, Ihre geplante Studie (t-Test für unabhängige Gruppen, erwartetes d = 0.2, total N = 40) sei unterpowert. Welche Antwort zeigt methodisches Verständnis?",
    "en": "In the colloquium a peer objects that your planned study (independent-samples t-test, expected d = 0.2, total N = 40) is underpowered. Which reply demonstrates methodological understanding?"
   },
   "a": [
    {
     "de": "Sie erklären, dass Power erst nach der Datenerhebung relevant wird, weil sie sich aus dem tatsächlich beobachteten Effekt berechnen lässt.",
     "en": "You explain that power only becomes relevant after data collection, because it can then be computed from the actually observed effect."
    },
    {
     "de": "Sie erklären, dass ein signifikantes Resultat bei kleinem N besonders überzeugend wäre, weil es sich gegen die geringe Power durchgesetzt hat.",
     "en": "You explain that a significant result with a small N would be especially convincing, because it prevailed despite the low statistical power."
    },
    {
     "de": "Sie erklären, dass ein Wechsel auf einen nichtparametrischen Test das Powerproblem löst, weil dieser ohne Verteilungsannahmen auskommt.",
     "en": "You explain that switching to a nonparametric test solves the power problem, because such tests work without distributional assumptions."
    },
    {
     "de": "Sie bestätigen den Einwand, begründen die angenommene Effektstärke und berechnen a priori das benötigte N für eine Power von mindestens .80.",
     "en": "You accept the objection, justify the assumed effect size and compute a priori the N required to reach a power of at least .80."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Bei d = 0.2 braucht ein zweiseitiger t-Test rund 788 Personen für eine Power von .80; N = 40 ist massiv unterpowert, richtig ist die a-priori-Poweranalyse mit begründeter Effektstärke. Der verführerischste Distraktor ist die Idee, signifikante Effekte aus kleinen Stichproben seien besonders glaubwürdig: Gerade dort sind signifikante Befunde häufig überschätzt (Winner's Curse) und schlecht replizierbar. Post-hoc-Power aus dem beobachteten Effekt ist zudem nicht informativ.",
    "en": "For d = 0.2, a two-tailed t-test needs roughly 788 participants for a power of .80, so N = 40 is severely underpowered; the correct move is an a priori power analysis with a justified effect size. The most tempting distractor is the idea that significant effects from small samples are especially credible: precisely there, significant findings tend to be inflated (winner's curse) and replicate poorly. Post-hoc power based on the observed effect is uninformative."
   }
  },
  {
   "q": {
    "de": "Im Kolloquium stellt ein Kollege sein Exposé vor: Ein Sprachmodell soll die offenen Antworten von 600 Teilnehmenden nach seinem Kategoriensystem kodieren. Als Gütenachweis will er jede Antwort dreimal kodieren lassen und die Übereinstimmung der drei Durchläufe berichten. Welchen Einwand bringen Sie in der Diskussion vor?",
    "en": "In the colloquium a colleague presents his proposal: a language model is to code the open-ended answers of 600 participants according to his category system. As evidence of quality he wants each answer coded three times and will report the agreement across the three runs. Which objection do you raise in the discussion?"
   },
   "a": [
    {
     "de": "Die drei Durchläufe zeigen nur die Selbstkonsistenz des Modells; als Gütenachweis braucht es den Vergleich mit einer von Hand kodierten Teilstichprobe.",
     "en": "The three runs show only the model's self-consistency; as evidence of quality, a comparison with a hand-coded subsample is needed."
    },
    {
     "de": "Die Übereinstimmung der Durchläufe ist zufallskorrigiert zu berichten, bei drei Läufen etwa als Fleiss' Kappa, weil die prozentuale Übereinstimmung Zufallstreffer mitzählt.",
     "en": "Agreement across the runs should be reported chance-corrected, for three runs as Fleiss' kappa, because percentage agreement counts chance hits in."
    },
    {
     "de": "Die drei Durchläufe müssen mit unterschiedlich formulierten Prompts erfolgen, weil identische Prompts die Übereinstimmung zwischen den Läufen künstlich erhöhen.",
     "en": "The three runs must use differently worded prompts, because identical prompts artificially inflate the agreement between the runs."
    },
    {
     "de": "Das Kategoriensystem ist bei offenen Antworten aus dem Material heraus zu entwickeln, weil vorab festgelegte Kategorien die Antwortvielfalt beschneiden.",
     "en": "With open-ended answers the category system must be developed from the material, because predefined categories curtail the diversity of responses."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Wiederholte Läufe desselben Modells messen Stabilität, nicht Übereinstimmung mit dem Kategoriensystem; die Güte einer automatisierten Kodierung zeigt sich erst im Vergleich mit einer von Menschen kodierten Referenzstichprobe. Der verführerischste Distraktor verschiebt das Problem auf die Wahl des Übereinstimmungsmasses: Ein zufallskorrigierter Koeffizient wäre bei drei Durchläufen zwar das angemessenere Mass, beziffert aber weiterhin nur die Übereinstimmung des Modells mit sich selbst. Auch variierte Prompts prüfen bloss die Robustheit gegenüber Formulierungen.",
    "en": "Repeated runs of the same model measure stability, not agreement with the category system; the quality of automated coding shows only in comparison with a human-coded reference sample. The most tempting distractor shifts the problem to the choice of agreement measure: a chance-corrected coefficient would indeed be the more appropriate statistic for three runs, but it still quantifies only the model's agreement with itself. Varied prompts likewise test no more than robustness to wording."
   }
  },
  {
   "q": {
    "de": "Eine Kollegin berichtet im Kolloquium die Pilotdaten ihrer Trainingsstudie: n = 60 (30 pro Gruppe), d = 0.28, p = .28, 95%-Konfidenzintervall [-0.23, 0.79]. Für den Zwischenbericht an die kooperierende Schule soll sie den Befund in einem Satz formulieren. Welche Formulierung ist angemessen?",
    "en": "A colleague reports the pilot data of her training study in the colloquium: n = 60 (30 per group), d = 0.28, p = .28, 95% confidence interval [-0.23, 0.79]. For the interim report to the partner school she must phrase the finding in one sentence. Which wording is appropriate?"
   },
   "a": [
    {
     "de": "Zwischen den beiden Gruppen zeigt sich kein Unterschied; für Schülerinnen und Schüler dieser Altersgruppe ist das Training wirkungslos.",
     "en": "There is no difference between the two groups; for pupils of this age group the training has no effect."
    },
    {
     "de": "Die Trainingsgruppe schnitt im Mittel etwas besser ab; ob dahinter mehr als Zufall steckt, kann die Pilotstudie nicht klären.",
     "en": "The training group did somewhat better on average; whether more than chance lies behind this the pilot study cannot settle."
    },
    {
     "de": "Das Training zeigt bereits eine kleine Wirkung, die sich mit einer grösseren Stichprobe auch statistisch absichern lassen wird.",
     "en": "The training already shows a small effect, which will also be statistically confirmed with a larger sample."
    },
    {
     "de": "Die Kinder der Trainingsgruppe waren konzentrierter; das Training eignet sich damit für den Einsatz im regulären Unterricht.",
     "en": "The children in the training group were more focused; the training is therefore suitable for use in regular lessons."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Das Konfidenzintervall reicht von einem kleinen Nachteil bis zu einem grossen Vorteil (d = 0.79), deshalb ist die einzig haltbare Aussage die vorsichtige Beschreibung des Mittelwertsunterschieds bei offener Bewertung. Der verführerischste Distraktor verspricht, der Effekt lasse sich mit mehr Personen absichern; die Punktschätzung einer Pilotstudie trägt diese Zusage nicht und wird als Planungsgrösse regelmässig überschätzt. Umgekehrt belegt ein nicht signifikantes Ergebnis auch keine Wirkungslosigkeit, und eine Einsatzempfehlung lässt sich aus diesen Daten erst recht nicht ableiten.",
    "en": "The confidence interval ranges from a small disadvantage to a large advantage (d = 0.79), so the only defensible statement is a cautious description of the mean difference with the verdict left open. The most tempting distractor promises that the effect will be confirmed with more participants; a pilot study's point estimate does not support that promise and is regularly overestimated as a planning value. Conversely, a non-significant result is no proof that the training does not work, and a recommendation for practice can certainly not be derived from these data."
   }
  }
 ],
 "06SM200-903": [
  {
   "q": {
    "de": "In der Masterarbeitsgruppe zeigt eine Studentin ihren Modellvergleich: AIC(m1, m2) spricht klar für Modell 2. Modell 2 enthält einen zusätzlichen Prädiktor mit fehlenden Werten, weshalb lm() dort 40 Fälle weniger verwendet als in Modell 1. Was ist das zentrale Problem dieser Analyse?",
    "en": "In the thesis group a student presents her model comparison: AIC(m1, m2) clearly favours model 2. Model 2 contains an additional predictor with missing values, so lm() uses 40 fewer cases there than in model 1. What is the central problem of this analysis?"
   },
   "a": [
    {
     "de": "Der zusätzliche Prädiktor erzeugt Multikollinearität, wodurch der AIC-Vergleich systematisch das komplexere Modell bevorzugt und korrigiert werden muss.",
     "en": "The additional predictor creates multicollinearity, which systematically biases the AIC comparison towards the more complex model and must be corrected."
    },
    {
     "de": "Modelle dürfen in R nicht über Informationskriterien verglichen werden; für geschachtelte Modelle ist der F-Test mit anova() das vorgesehene Verfahren.",
     "en": "Models in R must not be compared via information criteria; for nested models the F test with anova() is the designated procedure."
    },
    {
     "de": "Die beiden Modelle beruhen auf unterschiedlichen Fällen; AIC-Werte sind nur vergleichbar, wenn beide Modelle auf demselben Datensatz geschätzt werden.",
     "en": "The two models are based on different cases; AIC values are only comparable when both models are estimated on the same data set."
    },
    {
     "de": "Die geringere Fallzahl in Modell 2 senkt lediglich die Präzision; da das AIC dennoch klar für Modell 2 spricht, bleibt das Ergebnis interpretierbar.",
     "en": "The smaller sample in model 2 merely lowers precision; since the AIC still clearly favours model 2, the result remains interpretable."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "AIC-Werte sind nur bei identischer Datenbasis vergleichbar; durch den fallweisen Ausschluss vergleicht die Analyse faktisch zwei verschiedene Stichproben. anova() würde hier sogar mit einer Fehlermeldung abbrechen, AIC() rechnet dagegen kommentarlos weiter. Deshalb muss die Studentin die gemeinsame Datenbasis selbst sicherstellen, etwa indem sie beide Modelle auf dem listenweise bereinigten Datensatz schätzt.",
    "en": "AIC values are only comparable on an identical data basis; due to casewise exclusion the analysis effectively compares two different samples. anova() would even abort with an error here, whereas AIC() silently keeps computing. The student must therefore ensure a common data basis herself, for instance by fitting both models on the listwise-cleaned data set."
   }
  },
  {
   "q": {
    "de": "Copilot Chat schlägt im Skript-Review vor, die merge()-Zeile durch left_join() zu ersetzen und dabei «gleich die doppelten Zeilen zu entfernen», damit die Auswertung sauberer werde. Wie prüfen Sie diesen Vorschlag fachgerecht, bevor Sie ihn übernehmen?",
    "en": "During a script review, Copilot Chat suggests replacing the merge() line with left_join() and 'removing the duplicate rows while at it' so the analysis becomes cleaner. How do you check this suggestion properly before adopting it?"
   },
   "a": [
    {
     "de": "Beide Varianten am selben Datensatz ausführen, Fallzahlen und zentrale Kennwerte vergleichen und jede Abweichung erklären, bevor der Vorschlag übernommen wird.",
     "en": "Run both versions on the same data set, compare case counts and key statistics, and explain every discrepancy before the suggestion is adopted."
    },
    {
     "de": "Den Vorschlag übernehmen, sobald das angepasste Skript ohne Fehlermeldung durchläuft, denn lauffähiger Code belegt die inhaltliche Korrektheit der Änderung.",
     "en": "Adopt the suggestion once the revised script runs without an error message, since executable code demonstrates that the change is substantively correct."
    },
    {
     "de": "Ein zweites Sprachmodell um ein unabhängiges Review bitten und den Vorschlag übernehmen, sobald beide Modelle zur selben Empfehlung gelangen.",
     "en": "Ask a second language model for an independent review and adopt the suggestion as soon as both models arrive at the same recommendation."
    },
    {
     "de": "Den Vorschlag übernehmen, weil Copilot auf grossen Mengen R-Code trainiert wurde und Standardoperationen wie Joins deshalb zuverlässig beherrscht.",
     "en": "Adopt the suggestion because Copilot was trained on large amounts of R code and therefore handles standard operations such as joins reliably."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Ob ein Join-Wechsel plus Duplikatentfernung die Ergebnisse verändert, lässt sich nur empirisch klären: gleiche Daten, Vergleich von Fallzahlen und Kennwerten, Erklärung jeder Differenz; das Entfernen von Duplikaten kann nämlich gültige Messwiederholungen löschen. Der verführerischste Distraktor ist der fehlerfreie Durchlauf: Code kann syntaktisch korrekt laufen und trotzdem still die Datenbasis verändern. Auch die Übereinstimmung zweier Modelle ist kein Beleg, da beide denselben plausiblen Fehler machen können.",
    "en": "Whether switching the join and dropping duplicates changes the results can only be settled empirically: same data, comparison of case counts and key statistics, and an explanation for every difference, since removing duplicates may delete valid repeated measurements. The most tempting distractor is the error-free run: code can execute cleanly and still silently alter the data base. Agreement between two models proves nothing either, because both can make the same plausible mistake."
   }
  },
  {
   "q": {
    "de": "In der Masterarbeitsgruppe stellt ein Student seine Sekundäranalyse vor. Der offene Datensatz stammt aus einer Schlaftracking-App, die Nutzende freiwillig installiert haben; Personen mit weniger als fünf aufgezeichneten Nächten hatte der Anbieter bereits entfernt, es verbleiben 3200 Personen. Zwischen Schlafdauer und selbstberichteter Tagesmüdigkeit findet er r = .04 und folgert, die Schlafdauer spiele für Müdigkeit keine Rolle. Welcher Einwand trifft die Datengrundlage?",
    "en": "In the thesis group a student presents his secondary analysis. The open data set comes from a sleep-tracking app that users installed voluntarily; the provider had already removed anyone with fewer than five recorded nights, leaving 3200 people. Between sleep duration and self-reported daytime sleepiness he finds r = .04 and concludes that sleep duration plays no role for tiredness. Which objection targets the data basis?"
   },
   "a": [
    {
     "de": "Der Nullbefund ist belastbar, weil die App die Schlafdauer objektiv aufzeichnet und Erinnerungsfehler des Selbstberichts damit ausschliesst.",
     "en": "The null finding holds because the app records sleep duration objectively and thereby rules out recall errors of self-report."
    },
    {
     "de": "Die selbstselektierte Stichprobe deckt nur einen schmalen Bereich der Schlafdauer ab; solche Varianzeinschränkung dämpft Korrelationen systematisch.",
     "en": "The self-selected sample covers only a narrow range of sleep duration; such range restriction systematically attenuates correlations."
    },
    {
     "de": "Der Vorab-Ausschluss kurzer Aufzeichnungen erzeugt fehlende Werte, die vor der Korrelationsberechnung multipel imputiert werden müssten.",
     "en": "The provider's prior exclusion of short recordings creates missing values that would have to be multiply imputed before computing the correlation."
    },
    {
     "de": "Bei n = 3200 ist die Teststärke so hoch, dass ein derart kleiner Koeffizient das Fehlen eines Zusammenhangs belegt.",
     "en": "With n = 3200 the statistical power is so high that such a small coefficient establishes the absence of an association."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Selbstselektion in eine Schlaftracking-App erzeugt eine homogene Stichprobe; ist die Varianz eines Merkmals eingeschränkt, fällt die Korrelation systematisch kleiner aus, unabhängig davon, wie viele Personen im Datensatz stehen. Der verführerischste Distraktor ist das Teststärke-Argument: Eine grosse Fallzahl schützt nicht vor Varianzeinschränkung, sie schätzt den gedämpften Zusammenhang nur präziser; bei n = 3200 wäre r = .04 sogar knapp signifikant, ohne deshalb inhaltlich bedeutsam zu sein. Die vom Anbieter entfernten Personen sind zudem keine fehlenden Werte, sondern gar nicht erst im Datensatz, weshalb Imputation hier nicht greift.",
    "en": "Self-selection into a sleep-tracking app produces a homogeneous sample, and when the variance of a variable is restricted the correlation comes out systematically smaller, no matter how many people the data set contains. The most tempting distractor is the power argument: a large N does not protect against range restriction, it only estimates the attenuated association more precisely; with n = 3200 an r of .04 would even be marginally significant without being substantively meaningful. The people removed by the provider are moreover not missing values but absent from the data set altogether, so imputation does not apply."
   }
  }
 ],
 "06SM200-904": [
  {
   "q": {
    "de": "Im Kolloquium präsentiert ein Student den Gruppenvergleich seiner Masterarbeit: d = 0.42, 95%-CI [−0.02, 0.86], p = .06. Er folgert: «Damit ist gezeigt, dass kein Effekt existiert.» Welche Einordnung hält der kritischen Nachfrage stand?",
    "en": "In the colloquium a student presents the group comparison from his thesis: d = 0.42, 95% CI [−0.02, 0.86], p = .06. He concludes: 'This shows that no effect exists.' Which assessment withstands critical questioning?"
   },
   "a": [
    {
     "de": "Da p über .05 liegt, wurde die Nullhypothese bestätigt; der Schluss auf einen fehlenden Effekt ist damit statistisch korrekt begründet.",
     "en": "Since p is above .05, the null hypothesis has been confirmed; the conclusion that no effect exists is therefore statistically well founded."
    },
    {
     "de": "Das Intervall zeigt, dass der wahre Effekt mit 95% Wahrscheinlichkeit zwischen −0.02 und 0.86 liegt; ein Effekt ist damit praktisch gesichert.",
     "en": "The interval shows that the true effect lies between −0.02 and 0.86 with 95% probability; an effect is therefore practically established."
    },
    {
     "de": "Das Resultat ist auf dem 10%-Niveau signifikant; man darf deshalb von einem statistischen Trend sprechen und den Effekt inhaltlich interpretieren.",
     "en": "The result is significant at the 10% level; one may therefore speak of a statistical trend and interpret the effect substantively."
    },
    {
     "de": "Das nicht signifikante Resultat belegt keinen fehlenden Effekt; das Intervall umfasst null bis substanzielle Effekte, die Befundlage ist schlicht unentschieden.",
     "en": "The non-significant result does not demonstrate a missing effect; the interval spans zero to substantial effects, so the evidence is simply inconclusive."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Ein nicht signifikanter Test kann die Nullhypothese nicht belegen; da das Konfidenzintervall sowohl null als auch praktisch bedeutsame Effekte einschliesst, sind die Daten für beide Schlüsse zu unpräzise, weiterhelfen würden Äquivalenztests oder mehr Präzision. Der verführerischste Distraktor ist die «Trend»-Interpretation: Das nachträgliche Aufweichen des Signifikanzniveaus ist keine gültige Inferenz. Auch die Wahrscheinlichkeitsaussage über das Intervall verwechselt Konfidenz- mit Glaubwürdigkeitsintervallen.",
    "en": "A non-significant test cannot establish the null hypothesis; because the confidence interval includes both zero and practically meaningful effects, the data are too imprecise for either conclusion, and only equivalence tests or more precision would help. The most tempting distractor is the 'trend' reading: softening the significance level after the fact is not valid inference. The probability statement about the interval likewise confuses confidence intervals with credible intervals."
   }
  },
  {
   "q": {
    "de": "Zur Vorbereitung auf das Kolloquium lässt eine Studentin ein Sprachmodell Alternativerklärungen für ihren Prä-Post-Befund generieren. Es nennt «Regression zur Mitte» als mögliches Artefakt. Wie beurteilt sie die Tragfähigkeit dieses Einwands fachgerecht?",
    "en": "Preparing for the colloquium, a student has a language model generate alternative explanations for her pre-post finding. It names 'regression to the mean' as a possible artifact. How does she assess the merit of this objection properly?"
   },
   "a": [
    {
     "de": "Sie verwirft den Einwand, weil das Modell keinen Zugriff auf ihre Rohdaten hatte und deshalb keine gültige Aussage über ihre konkrete Studie machen kann.",
     "en": "She dismisses the objection because the model had no access to her raw data and therefore cannot make a valid statement about her particular study."
    },
    {
     "de": "Sie prüft, ob die Bedingungen des Artefakts vorliegen, etwa Auswahl der Stichprobe nach extremen Ausgangswerten und fehlende Kontrollgruppe im Design.",
     "en": "She checks whether the conditions for the artifact are present, such as sampling based on extreme baseline scores and a design without a control group."
    },
    {
     "de": "Sie akzeptiert den Einwand, weil Regression zur Mitte in Prä-Post-Designs praktisch aller Studien auftritt und Befunde dieser Art generell entwertet.",
     "en": "She accepts the objection because regression to the mean occurs in the pre-post designs of practically all studies and generally devalues such findings."
    },
    {
     "de": "Sie bittet das Modell um Literaturbelege für den Einwand und übernimmt ihn, sobald es mehrere passende Quellenangaben mit Jahreszahlen liefert.",
     "en": "She asks the model for literature supporting the objection and adopts it as soon as it supplies several fitting references complete with publication years."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Ob Regression zur Mitte einen Befund erklären kann, hängt von prüfbaren Designmerkmalen ab: Selektion nach extremen Ausgangswerten, Messfehler und fehlende Kontrollgruppe; genau diese Bedingungen muss sie gegen ihre Studie halten. Der verführerischste Distraktor ist das Verwerfen mangels Datenzugriff: Ein methodischer Einwand kann zutreffen, auch wenn er ohne Rohdaten formuliert wurde. Modellgenerierte Quellenangaben wiederum belegen nichts, solange sie nicht an der Primärliteratur geprüft sind.",
    "en": "Whether regression to the mean can explain a finding depends on checkable design features: selection on extreme baseline scores, measurement error, and a missing control group, and it is exactly these conditions she must hold against her study. The most tempting distractor is dismissal for lack of data access: a methodological objection can be valid even when raised without the raw data. Model-generated references in turn prove nothing until checked against the primary literature."
   }
  },
  {
   "q": {
    "de": "Die Medienstelle der UZH bittet um einen Satz zu Ihrer Masterarbeit für eine Kurzmeldung. In einer Onlinebefragung von 412 Studierenden geht häufigere Nutzung von Achtsamkeits-Apps mit geringerem Stresserleben einher (r = −.21, p < .001). Welche Formulierung ist fachlich korrekt und zugleich für Laien verständlich?",
    "en": "The UZH press office asks for one sentence about your master's thesis for a short news item. In an online survey of 412 students, more frequent use of mindfulness apps goes along with lower perceived stress (r = −.21, p < .001). Which wording is both professionally accurate and understandable for lay readers?"
   },
   "a": [
    {
     "de": "Achtsamkeits-Apps senken das Stresserleben von Studierenden messbar, wie eine neue Untersuchung des Psychologischen Instituts der UZH belegt.",
     "en": "Mindfulness apps measurably lower students' perceived stress, as a new study at the UZH Department of Psychology demonstrates."
    },
    {
     "de": "Studierende, die solche Apps häufiger nutzen, berichten im Schnitt etwas weniger Stress; ob die Apps die Ursache sind, klärt die Befragung nicht.",
     "en": "Students who use such apps more often report somewhat less stress on average; whether the apps are the cause is something the survey cannot settle."
    },
    {
     "de": "Die Untersuchung belegt einen hochsignifikanten Zusammenhang zwischen App-Nutzung und Stresserleben (r = −.21, p < .001) bei 412 Befragten.",
     "en": "The study demonstrates a highly significant association between app use and perceived stress (r = −.21, p < .001) among 412 respondents."
    },
    {
     "de": "Bei häufiger App-Nutzung reguliert das Gehirn Stress effizienter, was sich im geringeren Stresserleben der Befragten niederschlägt.",
     "en": "With frequent app use the brain regulates stress more efficiently, which shows up in respondents' lower perceived stress."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Bei einer Querschnittsbefragung trägt nur eine Zusammenhangsaussage, die die Kausalfrage offenlässt und die Stärke ehrlich als «etwas weniger» beziffert. Der verführerischste Distraktor ist die technisch korrekte Variante mit «hochsignifikant»: Signifikanz sagt etwas über die Verlässlichkeit gegen den Zufall aus, nicht über die Stärke, und für Laien klingt der Befund damit nach weit mehr, als ein Koeffizient von −.21 hergibt. Die Gehirn-Formulierung erfindet zusätzlich einen Mechanismus, der in der Befragung gar nicht erhoben wurde.",
    "en": "For a cross-sectional survey, only a statement of association works: one that leaves the causal question open and reports the strength honestly as “somewhat less”. The most tempting distractor is the technically correct version using “highly significant”: significance speaks to reliability against chance, not to strength, so for lay readers the finding sounds far larger than a coefficient of −.21 warrants. The brain wording additionally invents a mechanism that the survey never measured."
   }
  }
 ],
 "06SM200-909": [
  {
   "q": {
    "de": "Im Prüfungsgespräch legt Ihnen die Prüferin vier Befundlagen zum selben Effekt vor und fragt, welcher Sie das grösste Vertrauen schenken. Welche Wahl ist wissenschaftlich am besten begründet?",
    "en": "In the oral exam, the examiner presents four bodies of evidence on the same effect and asks which one deserves your greatest confidence. Which choice is scientifically best justified?"
   },
   "a": [
    {
     "de": "Eine einzelne Originalstudie mit überraschend grossem Effekt, p = .04 und kleiner Stichprobe, publiziert in einer renommierten Fachzeitschrift.",
     "en": "A single original study with a surprisingly large effect, p = .04 and a small sample, published in a prestigious peer-reviewed journal."
    },
    {
     "de": "Eine präregistrierte Multi-Lab-Replikation mit grosser Gesamtstichprobe, die einen kleinen, aber präzise geschätzten Effekt konsistent zeigt.",
     "en": "A preregistered multi-lab replication with a large combined sample that consistently shows a small but precisely estimated effect."
    },
    {
     "de": "Eine Metaanalyse mit p < .001, deren Funnel Plot allerdings eine deutliche Asymmetrie zugunsten signifikanter Einzelstudien erkennen lässt.",
     "en": "A meta-analysis with p < .001 whose funnel plot, however, reveals a marked asymmetry favouring significant individual studies."
    },
    {
     "de": "Eine vielzitierte klassische Studie aus den Lehrbüchern, deren direkte Replikationen in den letzten Jahren mehrfach gescheitert sind.",
     "en": "A highly cited classic study from the textbooks whose direct replications have repeatedly failed over the past few years."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Präregistrierung, mehrere unabhängige Labore und grosse Stichproben minimieren Publikationsbias, Analyseflexibilität und Zufallsbefunde; ein kleiner, präzise geschätzter Effekt ist belastbarer als ein grosser aus einer kleinen Einzelstudie. Der verführerischste Distraktor ist die Metaanalyse: Ein sehr kleiner p-Wert hilft nicht, wenn die Funnel-Plot-Asymmetrie auf selektive Publikation hindeutet und der gepoolte Effekt damit überschätzt sein dürfte. Zitationshäufigkeit und Lehrbuchstatus sind keine Evidenzkriterien.",
    "en": "Preregistration, several independent labs, and large samples minimise publication bias, analytic flexibility, and chance findings; a small, precisely estimated effect is more trustworthy than a large one from a small single study. The most tempting distractor is the meta-analysis: a tiny p value does not help when funnel plot asymmetry points to selective publication, which likely inflates the pooled effect. Citation counts and textbook status are not criteria of evidence."
   }
  },
  {
   "q": {
    "de": "Ihr Prüfungsgebiet ist die Ätiologie der Depression; die Prüfenden haben dazu publiziert und ordnen die Serotonin-Hypothese angesichts des Umbrella Reviews von Moncrieff et al. (2022) kritisch ein. Ein Sprachmodell fasst Ihnen das Gebiet zusammen, stellt das serotonerge Ungleichgewicht als gesicherten Standardbefund dar und erwähnt die Kritik daran nur in einem Nebensatz. Worin liegt das eigentliche Risiko dieser Zusammenfassung?",
    "en": "Your examination field is the aetiology of depression; the examiners have published on it and appraise the serotonin hypothesis critically in light of the umbrella review by Moncrieff et al. (2022). A language model summarises the field for you, presents the serotonergic imbalance as an established standard finding and mentions the criticism only in a subordinate clause. Where does the real risk of this summary lie?"
   },
   "a": [
    {
     "de": "Das Modell kennt die kritische Literatur wegen seines Trainingsstichtags nicht; ein Modell mit aktuellerem Wissensstand würde das Gebiet ausgewogen darstellen.",
     "en": "The model does not know the critical literature because of its training cutoff; a model with a more recent knowledge state would portray the field in a balanced way."
    },
    {
     "de": "Das Modell gibt die im Korpus dominante Lehrbuchdarstellung wieder und verdeckt genau die Position, an der das Prüfungsgespräch ansetzt.",
     "en": "The model reproduces the textbook account dominant in its corpus and obscures exactly the position from which the oral exam will start."
    },
    {
     "de": "Das Modell hat die Belege vermutlich erfunden; ein Abgleich der genannten Quellen mit der Primärliteratur behebt das Problem der Zusammenfassung.",
     "en": "The model has probably fabricated the references; checking the cited sources against the primary literature fixes the problem with the summary."
    },
    {
     "de": "Das Modell fasst zu knapp zusammen; erst eine ausführlichere Fassung deckt Methoden, Inhalte und theoretische Konzepte des Prüfungsgebiets ab.",
     "en": "The model summarises too briefly; only a more extensive version covers the methods, content and theoretical concepts of the examination field."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Sprachmodelle mitteln über die Textmenge; in einem Gebiet mit offener Kontroverse setzt sich die häufigere Lehrbuchdarstellung durch, und ausgerechnet die kritische Position der Prüfenden verschwindet, auf der die Prüfung aufbaut. Der verführerischste Distraktor ist der Halluzinationsverdacht: Hier sind nicht die Belege erfunden, sondern die Gewichtung ist schief, und dieser Fehler übersteht jeden Quellencheck unbemerkt. Auch der Trainingsstichtag erklärt nichts, da die Kritik an der Serotonin-Hypothese seit 2022 breit rezipiert wird.",
    "en": "Language models average over the mass of text; in a field with an open controversy the more frequent textbook account prevails, and precisely the examiners' critical position, on which the exam builds, disappears. The most tempting distractor is the suspicion of hallucination: here the references are not invented, the weighting is skewed, and that error survives any source check unnoticed. The training cutoff explains nothing either, since criticism of the serotonin hypothesis has been widely discussed since 2022."
   }
  },
  {
   "q": {
    "de": "Eine Studentin bereitet sich auf die Masterprüfung vor, indem sie sich zu den Prüfungstexten Kapitelzusammenfassungen erstellen lässt und diese mehrfach durchliest; sie fühlt sich sicher. Im Probegespräch erkennt sie jeden genannten Begriff sofort wieder, kann aber auf offene Fragen die Argumentation nicht frei aufbauen. Wie ist dieses Muster zu erklären?",
    "en": "A student prepares for the master's exam by having chapter summaries of the exam texts produced and rereading them several times; she feels confident. In a mock exam she instantly recognises every term that is mentioned, yet cannot build the argument freely in response to open questions. How is this pattern to be explained?"
   },
   "a": [
    {
     "de": "Ihr Wissen ist zu wenig vernetzt; erst die Lektüre weiterer Übersichtsarbeiten zum Gebiet gleicht die fehlende Tiefe der Aufbereitung aus.",
     "en": "Her knowledge is insufficiently interconnected; only reading further review articles on the field makes up for the missing depth of preparation."
    },
    {
     "de": "Wiederholtes Lesen erzeugt Verarbeitungsflüssigkeit, die sie für Können hält; zuverlässig abrufbar wird Wissen erst durch freies Erklären ohne Vorlage.",
     "en": "Repeated reading creates processing fluency that she mistakes for mastery; knowledge becomes reliably retrievable only through free explaining without a template."
    },
    {
     "de": "Prüfungsangst blockiert den Abruf; Entspannungstechniken und ein simuliertes Prüfungsgespräch schliessen die Lücke zwischen Wiedererkennen und freiem Erklären.",
     "en": "Test anxiety blocks retrieval; relaxation techniques and a simulated exam conversation close the gap between recognition and free explaining."
    },
    {
     "de": "Die Zusammenfassungen waren zu stark verdichtet; ausführlichere Fassungen desselben Materials würden die Konzepte vollständiger und damit belastbarer einprägen.",
     "en": "The summaries were condensed too heavily; more extensive versions of the same material would imprint the concepts more completely and thus more robustly."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Wiedererkennen ohne freien Abruf ist die klassische Kompetenzillusion: Flüssig lesbarer Text fühlt sich vertraut an, doch die mündliche Prüfung verlangt generatives Abrufen aus dem Gedächtnis, das nur durch Abrufübung entsteht; wiederholtes Lesen steigert vor allem die eigene Sicherheitserwartung, nicht die spätere Behaltensleistung (Roediger & Karpicke, 2006). Der verführerischste Distraktor ist die Prüfungsangst: Sie erklärt einen Einbruch unter Druck, nicht aber das systematische Scheitern schon in der entspannten Übungssituation. Mehr oder ausführlicheres Lesematerial verstärkt die Illusion, statt sie aufzulösen.",
    "en": "Recognition without free retrieval is the classic illusion of competence: fluently readable text feels familiar, yet the oral exam demands generative retrieval from memory, which arises only through retrieval practice; rereading mainly raises one's own confidence rather than later retention (Roediger & Karpicke, 2006). The most tempting distractor is test anxiety: it explains a breakdown under pressure, but not systematic failure already in a relaxed practice setting. More or lengthier reading material reinforces the illusion instead of dissolving it."
   }
  }
 ]
};
