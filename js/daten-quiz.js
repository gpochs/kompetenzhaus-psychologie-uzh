/* Quiz-Fragen (de/en), 3 pro Modul. Neu geschrieben 08.07.2026 (v7.5):
   anspruchsvoller (Anwendungs-/Analyseniveau), Distraktoren nach Best Practice
   (Haladyna & Rodriguez): parallele Laenge/Struktur, plausible Fehlkonzepte,
   genau eine eindeutig korrekte Option. Fach + KI + Prueflogik pro Modul.
   Quellen dokumentiert im Repo-Scratch; Schweizer Rechtschreibung. */
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
    "de": "Ein Student nutzt den sokratischen Tutoring-Bot in den Statistik-Tutoraten intensiv und fragt, warum die drei MC-Teilprüfungen trotzdem strikt [A] KI-frei bleiben. Welche Begründung entspricht der Prüfungslogik des Moduls?",
    "en": "A student makes heavy use of the Socratic tutoring bot in the statistics tutorials and asks why the three multiple-choice partial exams nevertheless remain strictly [A] AI-free. Which rationale matches the module's assessment logic?"
   },
   "a": [
    {
     "de": "[A] sichert die Kernfertigkeit ohne KI: Der Bot darf das Lernen unterstützen, die Prüfung weist aber nach, dass Statistik eigenständig beherrscht wird (Deskilling-Schutz).",
     "en": "[A] secures the core skill without AI: the bot may support learning, but the exam demonstrates that statistics is mastered independently (protection against deskilling)."
    },
    {
     "de": "[A] untersagt KI-Einsatz bereits in der Vorbereitungsphase; die Bot-Nutzung in den Tutoraten gilt darum als Grauzone, die vor der Prüfung offiziell bewilligt werden muss.",
     "en": "[A] already prohibits AI use during the preparation phase; using the bot in the tutorials therefore counts as a grey area that must be officially approved before the exam."
    },
    {
     "de": "[A] verlangt, dass die Bot-Nutzung des Semesters im Disclosure Form mit Prozesslog dokumentiert wird; so bleibt die KI-Unterstützung für die Prüfenden nachvollziehbar.",
     "en": "[A] requires that the semester's bot use be documented in the disclosure form with a process log; this keeps the AI support traceable for the examiners."
    },
    {
     "de": "[A] wird gewählt, weil MC-Prüfungen technisch kaum mit KI-Werkzeugen kombinierbar sind; sobald die Prüfungssoftware KI integriert, wechselt das Modul auf die Stufe [C].",
     "en": "[A] is chosen because multiple-choice exams are technically hard to combine with AI tools; once the exam software integrates AI, the module switches to level [C]."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Die [A]-Logik trennt Lernphase und Kompetenznachweis: KI darf beim Lernen assistieren, die Kernfertigkeit wird aber KI-frei geprüft, damit kein Deskilling entsteht. Der verführerischste Distraktor ist die Disclosure-Variante, denn Disclosure und Prozesslog gehören zur Stufe [B] für teilweise KI-integrierte Aufgaben, nicht zu KI-freien Prüfungen.",
    "en": "The [A] logic separates the learning phase from the demonstration of competence: AI may assist while learning, but the core skill is assessed AI-free to prevent deskilling. The most tempting distractor is the disclosure option, since disclosure and process logs belong to level [B] for partially AI-integrated tasks, not to AI-free exams."
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
    "de": "Bei der Fakten-Check-Übung liefert die KI eine Literaturangabe, die formal perfekt wirkt: reale Zeitschrift, plausible Autorennamen, DOI im korrekten Format. Welcher Prüfschritt ist entscheidend, um eine erfundene Referenz zu entlarven?",
    "en": "In the fact-checking exercise, the AI produces a reference that looks formally perfect: a real journal, plausible author names, a DOI in the correct format. Which verification step is decisive for exposing a fabricated reference?"
   },
   "a": [
    {
     "de": "Die Referenz in PsycINFO suchen oder die DOI auflösen und prüfen, ob die Arbeit tatsächlich existiert und die behauptete Aussage inhaltlich wirklich stützt.",
     "en": "Search for the reference in PsycINFO or resolve the DOI, and check whether the work actually exists and genuinely supports the claim being made."
    },
    {
     "de": "Dasselbe Sprachmodell in einer neuen Sitzung erneut nach der Quelle fragen; liefert es zweimal dieselbe Angabe, spricht das für eine in den Trainingsdaten verankerte Referenz.",
     "en": "Ask the same language model about the source again in a fresh session; if it produces the same reference twice, this suggests a citation anchored in its training data."
    },
    {
     "de": "Die formale APA-Korrektheit der Angabe kontrollieren; stimmen Format, Jahreszahl und Seitenzahlen, wurde die Quelle mit hoher Wahrscheinlichkeit aus echter Literatur übernommen.",
     "en": "Check the formal APA correctness of the entry; if the format, year, and page numbers are right, the source was very likely taken from genuine literature."
    },
    {
     "de": "Das Renommee der Zeitschrift und die Bekanntheit der Autorennamen einschätzen; erfundene Referenzen fallen typischerweise durch unplausible Namen und unbekannte Journals auf.",
     "en": "Assess the journal's reputation and how well known the author names are; fabricated references typically give themselves away through implausible names and obscure journals."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Nur die Recherche in der Datenbank oder das Auflösen der DOI zeigt, ob die Arbeit existiert und die Aussage tatsächlich stützt; genau daran scheitern halluzinierte Referenzen. Der Format-Distraktor ist verführerisch, doch Studien zeigen, dass erfundene Angaben oft formal einwandfrei aussehen, weil das Modell typische Zitationsmuster reproduziert.",
    "en": "Only searching the database or resolving the DOI reveals whether the work exists and actually supports the claim; that is exactly where hallucinated references fail. The format distractor is tempting, but studies show that fabricated citations often look formally flawless because the model reproduces typical citation patterns."
   }
  },
  {
   "q": {
    "de": "Für die abschliessende [B]-Lernworkflow-Aufgabe hast du die Literaturzusammenfassung mit KI-Unterstützung erstellt, Gliederung und Endtext aber selbst verfasst. Welches Vorgehen bei der Abgabe entspricht der Prüfungslogik [B]?",
    "en": "For the final [B] learning-workflow assignment, you produced the literature summary with AI support but wrote the outline and final text yourself. Which submission procedure matches assessment logic [B]?"
   },
   "a": [
    {
     "de": "Ein Sammelhinweis am Ende der Arbeit («mit KI-Unterstützung erstellt») genügt; da [B] die KI-Nutzung grundsätzlich erlaubt, müssen einzelne Arbeitsschritte nicht aufgeschlüsselt werden.",
     "en": "A blanket note at the end of the paper (\"produced with AI support\") is sufficient; since [B] permits AI use in principle, the individual work steps do not need to be itemised."
    },
    {
     "de": "In [B]-Aufgaben darf die KI in jedem Arbeitsschritt eingesetzt werden, solange der Endtext selbst formuliert ist; das entspricht dem Merksatz «assistieren, nicht ersetzen».",
     "en": "In [B] assignments the AI may be used in every work step as long as the final text is written in your own words; this matches the maxim \"assist, don't replace\"."
    },
    {
     "de": "Die KI-gestützten Einzelschritte werden im Disclosure Form mit Tool, Zweck, Prompt und Verifikationsschritt dokumentiert und im Prozesslog festgehalten; die übrigen Schritte bleiben eigenständig.",
     "en": "The AI-supported individual steps are documented in the disclosure form with tool, purpose, prompt, and verification step, and recorded in the process log; the remaining steps stay independent."
    },
    {
     "de": "[B] verlangt, die KI-Anteile vor der Abgabe wieder zu entfernen und die Aufgabe KI-frei einzureichen; das Disclosure Form dient dabei als Nachweis der vollständigen Entfernung.",
     "en": "[B] requires removing the AI contributions again before submission and handing in the assignment AI-free; the disclosure form then serves as proof of their complete removal."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "[B] bedeutet teilweise KI-integriert: Einzelne Arbeitsschritte dürfen KI-gestützt sein, müssen aber mit Disclosure (Tool, Zweck, Prompt, Verifikation) und Prozesslog transparent gemacht werden. Der Distraktor mit KI in jedem Arbeitsschritt beschreibt die Stufe [C]; bei [B] bleibt die KI auf einzelne, deklarierte Schritte beschränkt.",
    "en": "[B] means partially AI-integrated: individual work steps may be AI-supported but must be made transparent through disclosure (tool, purpose, prompt, verification) and a process log. The distractor allowing AI in every work step describes level [C]; under [B], AI remains limited to individual, declared steps."
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
    "de": "Die Testtheorie-Prüfung ist als KI-freie [A]-Klausur angelegt, obwohl die Studierenden im Semester mit einem KI-Tutor lernen durften. Welche Begründung entspricht der Prüfungslogik des Moduls?",
    "en": "The test-theory exam is designed as an AI-free [A] exam, even though students were allowed to learn with an AI tutor during the semester. Which rationale matches the module's assessment logic?"
   },
   "a": [
    {
     "de": "[A] sichert, dass psychometrisches Urteilen wie das Beurteilen von Gütekriterien ohne Werkzeug abrufbar ist, während KI-gestütztes Lernen davor zulässig bleibt.",
     "en": "[A] ensures that psychometric judgement such as appraising quality criteria is available without tools, while AI-supported learning beforehand remains permitted."
    },
    {
     "de": "[A] verlangt, dass auch die Prüfungsvorbereitung KI-frei erfolgt, weil sonst nicht mehr zwischen eigener und KI-gestützter Leistung getrennt werden kann.",
     "en": "[A] requires the exam preparation to be AI-free as well, since otherwise one can no longer separate a student's own performance from AI-supported work."
    },
    {
     "de": "[A] wird gewählt, weil KI-Tools psychometrische Formeln systematisch falsch berechnen und deshalb für dieses Fach ungeeignet sind.",
     "en": "[A] is chosen because AI tools systematically miscalculate psychometric formulas and are therefore unsuitable for this subject."
    },
    {
     "de": "[A] bedeutet, dass die im Semester dokumentierte KI-Nutzung im Disclosure Form in die Prüfungsnote einfliesst.",
     "en": "[A] means that the AI use documented during the semester feeds into the exam grade via the disclosure form."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Die Kategorie [A] trennt Lernphase und Kompetenznachweis: KI darf beim Lernen assistieren, doch die Kernfertigkeit, testtheoretische Konzepte selbst zu beurteilen, wird KI-frei geprüft (Deskilling-Schutz). Der zweite Distraktor ist verführerisch, dehnt [A] aber unzulässig auf die Vorbereitung aus, die ausdrücklich KI-gestützt sein darf.",
    "en": "Category [A] separates the learning phase from the demonstration of competence: AI may assist while learning, but the core skill of appraising test-theory concepts is assessed AI-free (protection against deskilling). The second distractor is tempting but wrongly extends [A] to the preparation phase, which is explicitly allowed to be AI-supported."
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
    "de": "Im Modul (Kategorie A+B) debuggt eine Studentin ihren R-Code mit einem KI-Tool und muss ihn an einem Kontrollpunkt Zeile für Zeile KI-frei erklären. Welche Zuordnung zur Prüfungslogik trifft zu?",
    "en": "In the module (category A+B) a student debugs her R code with an AI tool and must explain it line by line AI-free at a checkpoint. Which mapping to the assessment logic applies?"
   },
   "a": [
    {
     "de": "Das KI-gestützte Debugging ist ein [B]-Schritt mit Disclosure und Prozesslog; die KI-freie Zeilenerklärung sichert als [A] die Kernfertigkeit.",
     "en": "AI-supported debugging is a [B] step with disclosure and process log; the AI-free line-by-line explanation secures the core skill as [A]."
    },
    {
     "de": "Beide Tätigkeiten sind [A], weil das Programmieren im Methodenstrang grundsätzlich ohne KI-Unterstützung geprüft wird.",
     "en": "Both activities are [A], because programming in the methods strand is generally assessed without AI support."
    },
    {
     "de": "Beide Tätigkeiten sind [B], weil bereits ein einziger KI-Schritt die gesamte Aufgabe in die Kategorie [B] hebt.",
     "en": "Both activities are [B], because a single AI step already lifts the whole task into category [B]."
    },
    {
     "de": "Das Debugging ist [A] und die Zeilenerklärung [B], weil Programmierfehler eigenständig gefunden und Erklärungen delegiert werden dürfen.",
     "en": "Debugging is [A] and the line-by-line explanation is [B], because programming errors must be found independently while explanations may be delegated."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Kategorie A+B kombiniert einen deklarierten KI-Schritt mit einer KI-freien Sicherung: Das Debugging läuft als [B] mit Disclosure und Prozesslog, während die eigenständige Zeilenerklärung als [A] belegt, dass der Code verstanden ist. Der vierte Distraktor kehrt die Zuordnung um und widerspricht dem Deskilling-Schutz, der gerade das eigenständige Erklären sichert.",
    "en": "Category A+B combines a declared AI step with an AI-free safeguard: debugging runs as [B] with disclosure and process log, while the independent line-by-line explanation demonstrates as [A] that the code is understood. The fourth distractor reverses the mapping and contradicts the deskilling protection, which is precisely meant to secure independent explanation."
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
    "de": "Das Modul kombiniert eine KI-freie [A]-Klausur zu Störungsmodellen mit einer [B]-Fallaufgabe, in der eine KI-Verdachtsdiagnose kritisch geprüft wird. Zusätzlich enthält die Fallaufgabe reale, sensible Anamnesedaten. Welche Aussage trifft die Prüfungs- und Datenschutzlogik korrekt?",
    "en": "The module combines an AI-free [A] exam on disorder models with a [B] case task in which an AI tentative diagnosis is critically examined. In addition, the case task contains real, sensitive anamnesis data. Which statement captures the assessment and data-protection logic correctly?"
   },
   "a": [
    {
     "de": "Die [A]-Klausur sichert die Störungsmodelle ohne KI; in der [B]-Aufgabe darf KI zur Prüfung eingesetzt werden, sensible Fallangaben gehören aber nicht in öffentliche KI-Tools.",
     "en": "The [A] exam secures the disorder models without AI; in the [B] task AI may be used for examination, but sensitive case data do not belong in public AI tools."
    },
    {
     "de": "Weil die Fallaufgabe [B] ist, dürfen die realen Anamnesedaten in ein KI-Tool eingegeben werden, sobald der Schritt im Prozesslog deklariert wird.",
     "en": "Because the case task is [B], the real anamnesis data may be entered into an AI tool as soon as the step is declared in the process log."
    },
    {
     "de": "Beide Teile sind [A], weil klinische Inhalte generell KI-frei geprüft werden und die Fallaufgabe deshalb keine KI-Nutzung vorsieht.",
     "en": "Both parts are [A], because clinical content is generally assessed AI-free and the case task therefore involves no AI use."
    },
    {
     "de": "Die Fallaufgabe ist [C], weil sensible Daten verarbeitet werden und der Umgang mit ihnen anspruchsvolles Newskilling in jedem Arbeitsschritt darstellt.",
     "en": "The case task is [C], because sensitive data are processed and handling them constitutes demanding newskilling in every step."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Die Prüfungslogik und der Datenschutz gelten unabhängig voneinander: [A] sichert KI-frei die Kernfertigkeit, [B] erlaubt deklarierten KI-Einsatz zur Prüfung der Verdachtsdiagnose, doch besonders schützenswerte Anamnesedaten dürfen nie in öffentliche KI-Tools. Der zweite Distraktor ist verführerisch, verwechselt aber Disclosure mit einer Rechtsgrundlage: Deklaration erlaubt die Eingabe sensibler Daten nicht.",
    "en": "The assessment logic and data protection apply independently: [A] secures the core skill AI-free, [B] permits declared AI use to examine the tentative diagnosis, but specially protected anamnesis data must never enter public AI tools. The second distractor is tempting but confuses disclosure with a legal basis: declaration does not permit entering sensitive data."
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
    "de": "Das Modul kombiniert eine [A]- und eine [B]-Komponente. Welche Aufteilung entspricht den Prüfungsdefinitionen und der Deskilling-Schutz-Logik des Moduls am besten?",
    "en": "The module combines an [A] and a [B] component. Which split best matches the assessment definitions and the module's deskilling-protection logic?"
   },
   "a": [
    {
     "de": "Die Studierenden lassen die Gedächtnistheorien in [C] ganz von der KI erklären und prüfen diese Erklärung danach in einer KI-freien [A]-Klausur.",
     "en": "Students have the AI fully explain the memory theories in [C] and then check that explanation in an AI-free [A] exam."
    },
    {
     "de": "Die Studierenden erklären die Gedächtnistheorien in [B] mit KI-Hilfe und sezieren dieselbe KI-Erklärung ebenfalls KI-gestützt in einer [C]-Aufgabe.",
     "en": "Students explain the memory theories in [B] with AI help and dissect the same AI explanation, also AI-supported, in a [C] task."
    },
    {
     "de": "Die Studierenden sezieren die KI-Erklärung in einer KI-freien [A]-Klausur und erklären die Gedächtnistheorien mit voller KI-Unterstützung in [C].",
     "en": "Students dissect the AI explanation in an AI-free [A] exam and explain the memory theories with full AI support in [C]."
    },
    {
     "de": "Die Studierenden erklären die Gedächtnistheorien in einer KI-freien [A]-Klausur und sezieren eine KI-Erklärung in einer [B]-Aufgabe mit Disclosure und Prozesslog.",
     "en": "Students explain the memory theories in an AI-free [A] exam and dissect an AI explanation in a [B] task with disclosure and a process log."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Die Kernfertigkeit, Theorien selbst zu erklären, gehört in die KI-freie [A]-Prüfung, das fachliche Sezieren einer KI-Erklärung passt als teilweise KI-integrierte [B]-Aufgabe mit Disclosure und Prozesslog. Die verlockende Variante kehrt das um und lässt die Kerntheorie von der KI in [C] erzeugen, was genau den Deskilling-Schutz aushebelt.",
    "en": "Explaining theories oneself is the core skill and belongs in the AI-free [A] exam, while dissecting an AI explanation fits a partly AI-integrated [B] task with disclosure and a process log. The tempting variant inverts this and lets the AI generate the core theory in [C], which is exactly what undermines deskilling protection."
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
    "de": "Das Modul will Kernwissen KI-frei sichern und zugleich die Bewertung von KI-Analogien üben. Welche Kombination aus Prüfungslogik und Kompetenz passt am besten?",
    "en": "The module wants to secure core knowledge AI-free and at the same time practise evaluating AI analogies. Which combination of assessment logic and competence fits best?"
   },
   "a": [
    {
     "de": "In der [A]-Klausur belegen die Studierenden neuronale Mechanismen KI-frei (Fa1), im [B]-Live-Check bewerten sie eine KI-Analogie mit Disclosure (KI6, Fu2).",
     "en": "In the [A] exam students evidence neural mechanisms AI-free (Fa1), and in the [B] live check they evaluate an AI analogy with disclosure (KI6, Fu2)."
    },
    {
     "de": "In der [C]-Aufgabe erzeugen die Studierenden neuronale Mechanismen mit KI (Fa1), im [A]-Live-Check bewerten sie die Analogie KI-frei (KI6, Fu2).",
     "en": "In the [C] task students generate neural mechanisms with AI (Fa1), and in the [A] live check they evaluate the analogy AI-free (KI6, Fu2)."
    },
    {
     "de": "In der [B]-Klausur belegen die Studierenden neuronale Mechanismen mit KI-Hilfe (Fa1), im [C]-Live-Check bewerten sie die Analogie voll KI-gestützt (KI6, Fu2).",
     "en": "In the [B] exam students evidence neural mechanisms with AI help (Fa1), and in the [C] live check they evaluate the analogy fully AI-supported (KI6, Fu2)."
    },
    {
     "de": "In der [A]-Klausur bewerten die Studierenden die KI-Analogie KI-frei (KI6), im [C]-Live-Check belegen sie neuronale Mechanismen mit KI (Fa1).",
     "en": "In the [A] exam students evaluate the AI analogy AI-free (KI6), and in the [C] live check they evidence neural mechanisms with AI (Fa1)."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Das Kernwissen über neuronale Mechanismen (Fa1) gehört in die KI-freie [A]-Prüfung, das Bewerten einer KI-Analogie (KI6, Fu2) ist eine teilweise KI-integrierte [B]-Aufgabe mit Disclosure. Die verlockende Variante lässt das Kernwissen in [C] von der KI erzeugen, womit der Deskilling-Schutz genau an der falschen Stelle aufgegeben wird.",
    "en": "Core knowledge of neural mechanisms (Fa1) belongs in the AI-free [A] exam, while evaluating an AI analogy (KI6, Fu2) is a partly AI-integrated [B] task with disclosure. The tempting variant lets the AI generate the core knowledge in [C], giving up deskilling protection in exactly the wrong place."
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
    "de": "Das ExPra ist eine [B]-Prüfung. Welche Arbeitsteilung entspricht der [B]-Definition und dem Deskilling-Schutz des Moduls am besten?",
    "en": "The ExPra is a [B] assessment. Which division of labour best matches the [B] definition and the module's deskilling protection?"
   },
   "a": [
    {
     "de": "Die Gruppe lässt Design, Hypothesen und Auswertung von der KI erstellen und hält im Prozesslog nur das fertige Endergebnis fest.",
     "en": "The group has the AI produce design, hypotheses and analysis and records only the finished result in the process log."
    },
    {
     "de": "Die Gruppe erledigt Design, Hypothesen und Auswertung selbst, nutzt KI für einzelne Schritte und hält Rollen und KI-Nutzung im Prozesslog fest.",
     "en": "The group does design, hypotheses and analysis itself, uses AI for individual steps and records roles and AI use in the process log."
    },
    {
     "de": "Die Gruppe verzichtet vollständig auf KI und dokumentiert deshalb weder Rollen noch Prüfschritte im Prozesslog der Arbeit.",
     "en": "The group avoids AI entirely and therefore documents neither roles nor checking steps in the work's process log."
    },
    {
     "de": "Die Gruppe nutzt KI in jedem Arbeitsschritt und verzichtet dabei auf einen KI-freien Kontrollpunkt zur Verteidigung der Auswertung.",
     "en": "The group uses AI in every step and forgoes an AI-free checkpoint for defending the analysis."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Kategorie [B] heisst teilweise KI-integriert: Die Kernleistungen Design, Hypothesen und Auswertung bleiben menschlich, KI unterstützt einzelne Schritte, und alles wird mit Rollen und Prüfpflichten im Prozesslog dokumentiert. Die verlockende [C]-Variante mit KI in jedem Schritt ohne KI-freien Kontrollpunkt verletzt genau den Deskilling-Schutz des Moduls.",
    "en": "Category [B] means partly AI-integrated: the core work of design, hypotheses and analysis stays human, AI supports individual steps, and everything is documented with roles and checking duties in the process log. The tempting [C] variant with AI in every step and no AI-free checkpoint violates exactly the module's deskilling protection."
   }
  }
 ],
 "06SM200-s11": [
  {
   "q": {
    "de": "Eine Querschnittsstudie vergleicht 25-, 50- und 75-Jährige in einem Wortschatz- und Reasoning-Test und findet, dass die Leistung mit dem Alter sinkt. Daraus wird auf einen kognitiven Abbau geschlossen. Was ist der stärkste methodische Einwand?",
    "en": "A cross-sectional study compares 25-, 50- and 75-year-olds on a vocabulary and reasoning test and finds that performance declines with age, concluding cognitive decline. What is the strongest methodological objection?"
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
    "de": "In Querschnittsdesigns werden verschiedene Altersgruppen einmalig verglichen, sodass Alter und Geburtskohorte untrennbar konfundiert sind; ein scheinbarer Altersabfall kann auf ungleiche Bildungs- und Lebensbedingungen der Jahrgänge zurückgehen (Schaie, Seattle Longitudinal Study). Übungseffekte und selektive Mortalität setzen wiederholte Messungen derselben Personen voraus und sind daher Längsschnitt-, nicht Querschnittsprobleme.",
    "en": "In cross-sectional designs different age groups are compared only once, so age and birth cohort are inseparably confounded; an apparent age-related decline may reflect unequal educational and living conditions across cohorts (Schaie, Seattle Longitudinal Study). Practice effects and selective mortality require repeated testing of the same people and are therefore longitudinal, not cross-sectional, problems."
   }
  },
  {
   "q": {
    "de": "Ein LLM fasst die Bindungsforschung zusammen und nennt drei Quellen. Alle wirken formal korrekt: reale Autorennamen, plausible Zeitschriften, sauberes APA-Format. Welches Vorgehen deckt eine erfundene (halluzinierte) Referenz am zuverlässigsten auf?",
    "en": "An LLM summarises attachment research and cites three sources. All look formally correct: real author names, plausible journals, clean APA formatting. Which procedure most reliably exposes a fabricated (hallucinated) reference?"
   },
   "a": [
    {
     "de": "Man bittet dasselbe Sprachmodell, jede Referenz zu bestätigen und die Seitenzahlen zu ergänzen, und übernimmt sie bei Zustimmung.",
     "en": "You ask the same language model to confirm each reference and add page numbers, and accept them once it agrees."
    },
    {
     "de": "Man prüft, ob Autorennamen, Zeitschrift und APA-Format korrekt sind und die genannten Fachleute im Feld einschlägig wirken.",
     "en": "You check whether author names, journal and APA formatting are correct and whether the named experts seem established in the field."
    },
    {
     "de": "Man prüft, ob die Referenz inhaltlich zur Zusammenfassung passt und die zitierten Befunde widerspruchsfrei zueinander stehen.",
     "en": "You check whether the reference fits the summary in content and whether the cited findings are internally consistent."
    },
    {
     "de": "Man schlägt jede Referenz unabhängig in PsycINFO oder über den DOI nach und prüft, ob sie existiert und die behauptete Aussage enthält.",
     "en": "You look each reference up independently in PsycINFO or via the DOI and check whether it exists and actually contains the claimed statement."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Nur eine Suche in einer unabhängigen Datenbank oder über den DOI belegt, dass eine Quelle real ist und die behauptete Aussage tatsächlich trägt; Halluzinationen kombinieren oft reale Autorennamen mit erfundenen Titeln oder falschen DOIs. Der Plausibilitätscheck von Format und Autorennamen versagt gerade deshalb, weil Sprachmodelle formal korrekte, aber nicht existierende Referenzen erzeugen.",
    "en": "Only a search in an independent database or via the DOI establishes that a source is real and truly supports the claim; hallucinations often pair real author names with invented titles or wrong DOIs. Checking the plausibility of formatting and author names fails precisely because language models produce formally correct yet non-existent references."
   }
  },
  {
   "q": {
    "de": "Das Seminar arbeitet nach [B]: KI in einzelnen Arbeitsschritten, mit Deklaration und Prozesslog. Eine Studentin schreibt eine Seminararbeit. Welches Vorgehen ist unter [B] regelkonform?",
    "en": "The seminar follows [B]: AI in individual work steps, with disclosure and a process log. A student is writing a term paper. Which approach is compliant under [B]?"
   },
   "a": [
    {
     "de": "Sie lässt die KI die gesamte Argumentation schreiben, überarbeitet nur den Stil und vermerkt den KI-Einsatz nirgends.",
     "en": "She has the AI write the entire argument, revises only the style, and records the AI use nowhere."
    },
    {
     "de": "Sie nutzt die KI für Literaturrecherche und Gliederung, deklariert dies im Disclosure Form und hält die Schritte im Prozesslog fest.",
     "en": "She uses the AI for literature search and outlining, declares this in the disclosure form, and records the steps in the process log."
    },
    {
     "de": "Sie verzichtet vollständig auf KI, um jedes Risiko einer Regelverletzung von vornherein sicher auszuschliessen.",
     "en": "She avoids AI entirely, to rule out any risk of a rule violation from the outset."
    },
    {
     "de": "Sie setzt in jedem Arbeitsschritt KI ein und weist ihre Eigenanteile nur mündlich in der Seminarsitzung aus.",
     "en": "She uses AI in every work step and discloses her own contributions only orally in the seminar session."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Die Prüfungslogik [B] verlangt KI in einzelnen Arbeitsschritten mit ausgewiesener Deklaration und dokumentiertem Prozesslog, genau das leistet die Recherche- und Gliederungsnutzung mit Vermerk. Der durchgehende KI-Einsatz mit nur mündlichem Hinweis beschreibt Kategorie [C] und verfehlt zudem die schriftliche Nachweispflicht, weshalb er unter [B] nicht regelkonform ist.",
    "en": "Exam logic [B] requires AI in individual work steps with explicit disclosure and a documented process log, which is exactly what the declared use for search and outlining provides. Using AI in every step with only an oral note describes category [C] and additionally fails the written documentation requirement, so it is not compliant under [B]."
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
    "de": "Statistik 2 sichert die Kernfertigkeiten über eine KI-freie schriftliche Prüfung [A]. Welche Begründung trifft den Zweck dieser [A]-Prüfung für die R- und Statistik-Kompetenzen am besten?",
    "en": "Statistics 2 secures core skills through an AI-free written exam [A]. Which rationale best captures the purpose of this [A] exam for the R and statistics competencies?"
   },
   "a": [
    {
     "de": "Die KI-freie Prüfung sichert, dass Studierende Modellwahl und Interpretation eigenständig beherrschen, statt sie an KI zu delegieren.",
     "en": "The AI-free exam ensures that students master model selection and interpretation independently, rather than delegating them to AI."
    },
    {
     "de": "Die KI-freie Prüfung ist nötig, weil KI-Systeme statistische Berechnungen grundsätzlich fehlerhaft ausführen und deshalb ausscheiden.",
     "en": "The AI-free exam is necessary because AI systems inherently perform statistical calculations incorrectly and are therefore ruled out."
    },
    {
     "de": "Die KI-freie Prüfung dient dazu, den Korrekturaufwand zu senken, da Antworten ohne KI-Einsatz einheitlicher ausfallen.",
     "en": "The AI-free exam serves to reduce grading effort, since answers produced without AI turn out more uniform."
    },
    {
     "de": "Die KI-freie Prüfung stellt sicher, dass alle Studierenden denselben KI-Zugang haben und so die Chancengleichheit gewahrt bleibt.",
     "en": "The AI-free exam ensures that all students have the same AI access and that equal opportunity is thereby preserved."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Kategorie [A] sichert die Kernfertigkeiten: Studierende sollen Modellwahl und Interpretation selbst beherrschen, damit sie eine KI-Antwort später überhaupt beurteilen können (Deskilling-Schutz). Die Begründung, KI rechne grundsätzlich falsch, trifft nicht zu und verfehlt den Zweck, denn geschützt wird die eigene Kompetenz, nicht die Fehlervermeidung der KI.",
    "en": "Category [A] secures the core skills: students should master model selection and interpretation themselves, so they can later judge an AI answer at all (protection against deskilling). The claim that AI inherently computes wrongly is untrue and misses the point, because what is protected is one's own competence, not the avoidance of AI errors."
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
    "de": "Die Klinische Biopsychologie ist Kat. A+B: zuerst Biomarker KI-frei erklären, dann in einem KI-Schritt eine Wirkhypothese generieren und gegen eine Primärquelle prüfen. Welche Zuordnung der Prüfungslogik trifft zu?",
    "en": "Clinical Biopsychology is category A+B: first explain biomarkers without AI, then in an AI step generate a mechanistic hypothesis and check it against a primary source. Which assignment of the exam logic is correct?"
   },
   "a": [
    {
     "de": "Das eigenständige Erklären der Biomarker gehört zu [A], das deklarierte KI-Prüfen einer Wirkhypothese gegen eine Primärquelle zu [B].",
     "en": "Explaining the biomarkers independently belongs to [A], and the declared AI-based checking of a mechanistic hypothesis against a primary source belongs to [B]."
    },
    {
     "de": "Das eigenständige Erklären der Biomarker gehört zu [B], das undeklarierte KI-Prüfen einer Wirkhypothese gegen eine Primärquelle zu [A].",
     "en": "Explaining the biomarkers independently belongs to [B], and the undeclared AI-based checking of a mechanistic hypothesis against a primary source belongs to [A]."
    },
    {
     "de": "Beide Aufgaben gehören zu [C], weil in jedem Arbeitsschritt KI eingesetzt und anspruchsvolles Newskilling verlangt wird.",
     "en": "Both tasks belong to [C], because AI is used in every work step and demanding newskilling is required."
    },
    {
     "de": "Das eigenständige Erklären der Biomarker gehört zu [C], das KI-Prüfen einer Wirkhypothese mit voller KI-Nutzung zu [A].",
     "en": "Explaining the biomarkers independently belongs to [C], and the AI-based checking of a mechanistic hypothesis with full AI use belongs to [A]."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "[A] sichert KI-frei die Kernfertigkeit, also das eigenständige Erklären der Biomarker; [B] integriert KI in einzelne Schritte mit Deklaration und Prozesslog, also das Prüfen der KI-Hypothese gegen eine Primärquelle. Die [C]-Zuordnung ist falsch, weil [C] KI in jedem Arbeitsschritt verlangt, was auf die bewusst KI-freie Erklärleistung nicht zutrifft.",
    "en": "[A] secures the core skill without AI, that is, explaining the biomarkers independently; [B] integrates AI into individual steps with disclosure and a process log, that is, checking the AI hypothesis against a primary source. The [C] assignment is wrong, because [C] requires AI in every work step, which does not apply to the deliberately AI-free explanation task."
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
    "de": "Eine Studentin fasst im PTO-Selbstlernprogramm Studientexte mit KI zusammen, dokumentiert dies im Prozesslog und wird per Zufall zum KI-freien Kontrollpunkt aufgeboten, wo sie eine Verdachtsdiagnose eigenständig begründet. Welche Aussage beschreibt die Prüfungslogik dieses Moduls korrekt?",
    "en": "In the PTO self-study programme, a student summarises readings with AI, documents this in her process log, and is randomly called to the AI-free checkpoint, where she justifies a working diagnosis on her own. Which statement correctly describes the module's assessment logic?"
   },
   "a": [
    {
     "de": "Das gesamte Modul folgt Logik [C], weil KI in mindestens einem Arbeitsschritt des Selbstlernprogramms eingesetzt wird",
     "en": "The whole module follows logic [C], because AI is used in at least one working step of the self-study programme"
    },
    {
     "de": "Der Kontrollpunkt folgt Logik [B], weil die Studentin ihre KI-Nutzung transparent im Prozesslog deklariert hat",
     "en": "The checkpoint follows logic [B], because the student transparently declared her AI use in the process log"
    },
    {
     "de": "Die Deklaration im Prozesslog ist verzichtbar, weil der KI-freie Kontrollpunkt die Eigenleistung bereits hinreichend belegt",
     "en": "The declaration in the process log is dispensable, because the AI-free checkpoint already sufficiently proves her own work"
    },
    {
     "de": "Der Kontrollpunkt folgt Logik [A] und sichert die eigenständige Fallanalyse, das deklarierte Selbstlernen entspricht Logik [B]",
     "en": "The checkpoint follows logic [A] and secures independent case analysis, while the declared self-study corresponds to logic [B]"
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Das Modul kombiniert Logik [B] im Selbstlernprogramm, also KI-Nutzung einzelner Schritte mit Disclosure und Prozesslog, mit einem randomisierten Kontrollpunkt nach Logik [A], der die eigenständige Fallanalyse als Kernfertigkeit (Fu2) sichert. Der [B]-Distraktor verführt, weil die Disclosure tatsächlich korrekt ist; sie betrifft aber das Selbstlernen, während der Kontrollpunkt selbst KI-frei bleibt und darum Logik [A] folgt.",
    "en": "The module combines logic [B] in the self-study programme, meaning AI use in individual steps with disclosure and a process log, with a randomised checkpoint under logic [A] that secures independent case analysis as a core skill (Fu2). The [B] distractor is tempting because the disclosure is indeed correct; however, it concerns the self-study phase, while the checkpoint itself is AI-free and therefore follows logic [A]."
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
    "de": "Ein Student trainiert Modellwissen und Gütekriterien intensiv mit einem KI-Tutor; die Modulprüfung findet KI-frei nach Logik [A] statt. Welche Aussage beschreibt die Funktion dieser Prüfungslogik im Modul am besten?",
    "en": "A student intensively drills theoretical models and quality criteria with an AI tutor; the module exam is AI-free under logic [A]. Which statement best describes the function of this assessment logic in the module?"
   },
   "a": [
    {
     "de": "Die [A]-Prüfung sichert als Deskilling-Schutz, dass Fachwissen und testtheoretisches Urteilen ohne KI abrufbar sind; KI-gestütztes Lernen davor bleibt zulässig",
     "en": "The [A] exam protects against deskilling by ensuring that subject knowledge and psychometric judgement are retrievable without AI; AI-supported studying beforehand remains permitted"
    },
    {
     "de": "Die [A]-Prüfung verlangt, dass auch die Vorbereitung KI-frei erfolgt, weil die Eigenleistung in der Prüfung sonst nicht mehr glaubwürdig attestierbar ist",
     "en": "The [A] exam requires the preparation to be AI-free as well, because otherwise the student's own achievement in the exam can no longer be credibly certified"
    },
    {
     "de": "Die Prüfung müsste nach Logik [B] laufen, weil die KI-Nutzung in der Vorbereitung eine Disclosure mit Prozesslog in der Prüfungssituation erforderlich macht",
     "en": "The exam would have to follow logic [B], because the AI use during preparation requires a disclosure with a process log in the exam situation itself"
    },
    {
     "de": "Die Prüfung müsste nach Logik [C] laufen, weil anspruchsvolles Newskilling nur nachweisbar ist, wenn KI in jeden geprüften Arbeitsschritt integriert wird",
     "en": "The exam would have to follow logic [C], because demanding newskilling can only be demonstrated when AI is integrated into every assessed working step"
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Logik [A] regelt die Prüfungssituation und sichert als Deskilling-Schutz, dass Fachwissen (Fa1) und testtheoretisches Urteilen (Fa5) ohne KI verfügbar sind (Fu2); die Lernphase davor darf KI-gestützt sein. Der [B]-Distraktor verführt, weil Disclosure dort tatsächlich vorgeschrieben ist; sie gilt aber für KI-Nutzung in den bewerteten Arbeitsschritten selbst, nicht für die private Prüfungsvorbereitung.",
    "en": "Logic [A] governs the exam situation and protects against deskilling by ensuring that subject knowledge (Fa1) and psychometric judgement (Fa5) are available without AI (Fu2); the preceding study phase may be AI-supported. The [B] distractor is tempting because disclosure is indeed required there; however, it applies to AI use in the assessed working steps themselves, not to private exam preparation."
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
    "de": "Im Rollenspiel «HR-Beratung zu KI-Personalauswahl» schlagen Sie einer Geschäftsleitung eine Rollenteilung zwischen Mensch und KI vor. Die EU stuft KI-Systeme für die Personalauswahl als hochriskant ein. Welche Rollenteilung entspricht fachlich fundiertem Mensch-KI-Teaming?",
    "en": "In the role play 'HR consulting on AI-based personnel selection', you propose a division of roles between human and AI to an executive board. The EU classifies AI systems for personnel selection as high-risk. Which division of roles reflects professionally sound human-AI teaming?"
   },
   "a": [
    {
     "de": "Die KI trifft Ablehnungsentscheide in frühen Auswahlrunden autonom, weil dort die Konsequenzen für Bewerbende gering ausfallen",
     "en": "The AI makes rejection decisions autonomously in early selection rounds, because the consequences for applicants are minor there"
    },
    {
     "de": "Der Mensch kontrolliert Stichproben der KI-Entscheide und delegiert die übrigen Fälle an das zuvor validierte System",
     "en": "The human reviews random samples of the AI's decisions and delegates the remaining cases to the previously validated system"
    },
    {
     "de": "Die KI übernimmt den Endentscheid bei hoher Modellkonfidenz, der Mensch bearbeitet nur die unsicheren Grenzfälle persönlich",
     "en": "The AI takes the final decision whenever model confidence is high, and the human personally handles only the uncertain edge cases"
    },
    {
     "de": "Die KI unterstützt bei Aggregation und Vorstrukturierung der Dossiers, der Mensch verantwortet Fairnessprüfung und Letztentscheid",
     "en": "The AI assists with aggregating and pre-structuring the files, while the human is responsible for fairness checks and the final decision"
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Der EU AI Act stuft KI für Personalauswahl in Anhang III als Hochrisiko ein und verlangt in Artikel 14 wirksame menschliche Aufsicht; fachlich fundiertes Teaming (KI3, Fu3) lässt die KI vorstrukturieren, während der Mensch Fairnessprüfung und Letztentscheid verantwortet. Der Konfidenz-Distraktor verführt, weil er Aufsicht suggeriert; Modellkonfidenz ist jedoch oft schlecht kalibriert, gerade selbstsichere Fehlentscheide entgingen so der Kontrolle.",
    "en": "The EU AI Act classifies AI for personnel selection as high-risk in Annex III and requires effective human oversight in Article 14; professionally sound teaming (KI3, Fu3) lets the AI pre-structure the files while the human is responsible for fairness checks and the final decision. The confidence distractor is tempting because it suggests oversight; however, model confidence is often poorly calibrated, so precisely the overconfident errors would escape control."
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
    "de": "Im Modul üben die Studierenden im KI-Rollenspiel den Umgang mit Algorithmic Management, die Modulprüfung findet aber KI-frei nach Prüfungslogik [A] statt. Welche Begründung entspricht dieser Kombination?",
    "en": "In the module, students practise handling algorithmic management in an AI role play, yet the module exam is AI-free under assessment logic [A]. Which rationale matches this combination?"
   },
   "a": [
    {
     "de": "[A] sichert, dass Kernwissen zu Arbeitsgestaltung und Fairness ohne Hilfsmittel abrufbar bleibt, während die KI-Lernphasen den Kompetenzaufbau ergänzen.",
     "en": "[A] ensures that core knowledge of work design and fairness remains retrievable without tools, while the AI learning phases complement the building of competences."
    },
    {
     "de": "[A] wurde gewählt, weil der Einsatz von KI in Lehrveranstaltungen aus Datenschutzgründen an der Universität untersagt worden ist.",
     "en": "[A] was chosen because the use of AI in university courses has been prohibited at the institution for data protection reasons."
    },
    {
     "de": "[A] bedeutet, dass KI in jedem Arbeitsschritt integriert wird und die Studierenden deshalb keine separate schriftliche Prüfung ablegen müssen.",
     "en": "[A] means that AI is integrated into every single step of the work, so students do not have to sit a separate written examination."
    },
    {
     "de": "[A] zeigt, dass KI-Rollenspiele keine prüfbaren Kompetenzen aufbauen und ihre Inhalte darum nicht in die Bewertung einfliessen dürfen.",
     "en": "[A] shows that AI role plays do not build assessable competences and their content therefore must not count towards the final grade."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "[A] dient dem Deskilling-Schutz: Kernfertigkeiten müssen ohne KI nachweisbar bleiben, gerade weil im Semester intensiv mit KI gearbeitet wird; Lernsetting und Prüfungssetting dürfen sich dafür bewusst unterscheiden. Der verführerischste Distraktor mit der Vollintegration in jedem Arbeitsschritt beschreibt die Prüfungslogik [C], nicht [A].",
    "en": "[A] protects against deskilling: core skills must remain demonstrable without AI precisely because the semester involves intensive AI use, and the learning setting may deliberately differ from the exam setting. The most tempting distractor describing full integration in every step captures assessment logic [C], not [A]."
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
    "de": "Eine Studentin lässt sich von einem Sprachmodell die vier wichtigsten familiären Risikofaktoren für kindliche Störungen zusammenfassen. Die Antwort wirkt fachlich stimmig und enthält Quellenangaben im APA-Format. Welches Vorgehen entspricht der Kompetenz KI6 Evaluieren?",
    "en": "A student asks a language model to summarise the four most important familial risk factors for childhood disorders. The answer looks professionally sound and includes APA-formatted references. Which approach reflects the competence AI6 Evaluating?"
   },
   "a": [
    {
     "de": "Sie prüft jede Aussage und jede Quellenangabe gegen Vorlesung und Primärliteratur, weil Sprachmodelle plausible, aber erfundene Belege erzeugen können.",
     "en": "She checks every claim and every reference against the lecture and primary literature, because language models can generate plausible but fabricated citations."
    },
    {
     "de": "Sie übernimmt die Liste unverändert, weil korrekt formatierte APA-Quellen ein verlässliches Zeichen für eine geprüfte Faktengrundlage sind.",
     "en": "She adopts the list unchanged, because correctly formatted APA references are a reliable indicator of a verified factual basis."
    },
    {
     "de": "Sie stellt dieselbe Frage einem zweiten Sprachmodell und übernimmt jene Punkte, in denen beide Antworten inhaltlich übereinstimmen.",
     "en": "She asks a second language model the same question and adopts those points on which both answers agree in substance."
    },
    {
     "de": "Sie kontrolliert nur die Zahlenangaben in der Antwort, weil Sprachmodelle bei Fliesstext deutlich zuverlässiger arbeiten als bei Statistik.",
     "en": "She checks only the numerical figures in the answer, because language models work far more reliably with prose than with statistics."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "KI6 verlangt die fachliche Verifikation am Original: Sprachmodelle halluzinieren regelmässig formal einwandfreie, aber nicht existierende Referenzen, und generische Antworten blenden gerade Kontext- und Diversitätsaspekte aus, die dieses Modul betont. Der Zwei-Modelle-Vergleich ist der verführerischste Distraktor, weil übereinstimmende Modelle denselben Fehler aus ähnlichen Trainingsdaten teilen können und Konsens darum kein Wahrheitsbeleg ist.",
    "en": "AI6 requires verification against original sources: language models regularly hallucinate formally flawless but non-existent references, and generic answers omit precisely the context and diversity aspects this module emphasises. Comparing two models is the most tempting distractor, because agreeing models can share the same error from similar training data, so consensus is no proof of truth."
   }
  },
  {
   "q": {
    "de": "Im Seminar diskutieren die Studierenden, welche Aufgaben ein KI-Chatbot in der Paar- und Familienberatung übernehmen könnte. Welche Aufgabenteilung lässt sich psychotherapeutisch am besten begründen?",
    "en": "In the seminar, students discuss which tasks an AI chatbot could take on in couple and family counselling. Which division of labour is best justified psychotherapeutically?"
   },
   "a": [
    {
     "de": "Der Chatbot übernimmt die gesamte Beratung, weil sich manualisierte Paarinterventionen vollständig in automatisierte Dialoge übertragen lassen.",
     "en": "The chatbot takes over the entire counselling, because manualised couple interventions can be fully translated into automated dialogues."
    },
    {
     "de": "Der Chatbot wird ganz ausgeschlossen, weil digitale Angebote in Prävention und Psychoedukation bislang keine belegte Wirkung zeigen.",
     "en": "The chatbot is excluded entirely, because digital tools have so far shown no documented effect in prevention and psychoeducation."
    },
    {
     "de": "Der Chatbot unterstützt bei Psychoedukation und Übungsbegleitung, während Beziehungsaufbau und therapeutische Allianz beim Menschen bleiben.",
     "en": "The chatbot supports psychoeducation and exercise guidance, while relationship building and the therapeutic alliance remain with the human."
    },
    {
     "de": "Der Chatbot übernimmt gezielt den Allianzaufbau, weil er als neutrale Instanz keine eigenen Vorurteile in die Beratung einbringt.",
     "en": "The chatbot specifically takes over alliance building, because as a neutral entity it brings no prejudices of its own into counselling."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Die therapeutische Allianz ist einer der am besten belegten Wirkfaktoren der Psychotherapie (Flückiger et al., 2018) und an eine tragfähige menschliche Beziehung gebunden; KI kann ergänzend Psychoedukation und Übungen begleiten, was dem Lernziel des Moduls entspricht. Der Distraktor der Vollautomatisierung unterschätzt, dass gerade in der Paar- und Familienarbeit die Beziehungsprozesse selbst der Wirkmechanismus sind.",
    "en": "The therapeutic alliance is one of the best-documented common factors in psychotherapy (Flückiger et al., 2018) and is tied to a viable human relationship; AI can complement this with psychoeducation and exercise support, in line with the module's learning objective. The full-automation distractor underestimates that in couple and family work the relationship processes themselves are the mechanism of change."
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
    "de": "Eine Studentin lässt eine KI drei Kritikpunkte zu einem klinischen Fachartikel formulieren. Ein Punkt bemängelt eine «fehlende Kontrollgruppe», obwohl der Artikel ein randomisiertes Design mit Wartelistenkontrolle beschreibt. Welche Schlussfolgerung ist angemessen?",
    "en": "A student has an AI formulate three points of criticism about a clinical journal article. One point complains about a \"missing control group\", although the article describes a randomised design with a waitlist control. Which conclusion is appropriate?"
   },
   "a": [
    {
     "de": "Die KI hat eine verdeckte Schwäche des Artikels erkannt, weil eine Wartelistenbedingung methodisch nicht als echte Kontrollgruppe gilt.",
     "en": "The AI detected a hidden weakness of the article, because a waitlist condition does not methodologically count as a real control group."
    },
    {
     "de": "Der Fehler wäre vermeidbar gewesen, weil Sprachmodelle hochgeladene Artikel zuverlässig vollständig lesen und korrekt wiedergeben.",
     "en": "The error would have been avoidable, because language models reliably read uploaded articles in full and reproduce them correctly."
    },
    {
     "de": "Die beiden übrigen Kritikpunkte dürfen ungeprüft übernommen werden, weil eine KI selten mehr als einen Fehler pro Antwort produziert.",
     "en": "The two remaining points of criticism may be adopted unchecked, because an AI rarely produces more than one error per answer."
    },
    {
     "de": "Die KI erzeugt generisch plausible Kritikmuster ohne verlässlichen Textbezug, weshalb jeder Punkt am Originalartikel verifiziert werden muss.",
     "en": "The AI produces generically plausible critique patterns without a reliable link to the text, so every point must be verified against the original article."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Sprachmodelle reproduzieren häufige Kritikschablonen wie «fehlende Kontrollgruppe» auch dann, wenn sie auf den konkreten Text nicht zutreffen; die fachliche Prüfung am Original bleibt darum unverzichtbar (KI6). Der erste Distraktor ist verführerisch, weil Wartelistenkontrollen tatsächlich Schwächen haben, sie sind aber sehr wohl Kontrollgruppen, womit die KI-Kritik faktisch falsch bleibt.",
    "en": "Language models reproduce common critique templates such as \"missing control group\" even when they do not apply to the specific text; verification against the original therefore remains indispensable (AI6). The first distractor is tempting because waitlist controls do have weaknesses, but they very much are control groups, so the AI's criticism remains factually wrong."
   }
  },
  {
   "q": {
    "de": "Im Wahlseminar schreibt ein Student seine Seminararbeit als [B]-Leistungsnachweis. Er nutzt KI für die Literaturrecherche und lässt sich zudem Feedback auf seinen Textentwurf geben. Was verlangt die Prüfungslogik [B] in dieser Situation?",
    "en": "In the elective seminar, a student writes his seminar paper as a [B] assessment. He uses AI for the literature search and also gets feedback on his draft text. What does assessment logic [B] require in this situation?"
   },
   "a": [
    {
     "de": "Er legt die KI-Schritte im Disclosure Form offen, dokumentiert sie im Prozesslog und verantwortet die fachlichen Aussagen des Endtexts selbst.",
     "en": "He discloses the AI steps in the disclosure form, documents them in the process log, and takes responsibility for the final text's claims himself."
    },
    {
     "de": "Er vermerkt den KI-Einsatz pauschal in einer Fussnote, da bei [B] eine detaillierte Dokumentation der einzelnen Arbeitsschritte nicht erwartet wird.",
     "en": "He notes the AI use in a general footnote, since [B] does not expect detailed documentation of the individual steps."
    },
    {
     "de": "Er darf KI ausschliesslich für die Literaturrecherche einsetzen, weil [B] jede KI-Unterstützung beim Formulieren des Textes ausschliesst.",
     "en": "He may use AI solely for the literature search, because [B] rules out any AI support in the actual drafting of the text."
    },
    {
     "de": "Er muss KI in jedem einzelnen Arbeitsschritt einsetzen, weil [B] die vollständige Integration von KI in den Schreibprozess vorschreibt.",
     "en": "He must use AI in every single step of the work, because [B] prescribes the complete integration of AI into the writing process."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "[B] erlaubt KI in einzelnen Arbeitsschritten, koppelt dies aber an Transparenz: Disclosure Form und Prozesslog machen den Einsatz prüfbar, und die fachliche Verantwortung für den Text bleibt beim Studierenden, wie es auch die Lernziele des Seminars festhalten. Der verführerischste Distraktor beschränkt [B] auf die Recherche, dabei sind einzelne KI-gestützte Schreibschritte ausdrücklich zulässig, sofern sie offengelegt werden.",
    "en": "[B] permits AI in individual steps but ties this to transparency: the disclosure form and process log make the use auditable, and professional responsibility for the text remains with the student, as the seminar's learning objectives also state. The most tempting distractor restricts [B] to the literature search, yet individual AI-supported writing steps are explicitly allowed as long as they are disclosed."
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
    "de": "Das Wahlseminar läuft als [C]-Pilot: Die Fachartikel-Analyse wird in jedem Arbeitsschritt KI-gestützt durchgeführt. Wie sichert das Prüfungsdesign gemäss der Prüfungslogik die Kernfertigkeit Fa4 (kritisches Denken) gegen Deskilling?",
    "en": "The elective seminar runs as a [C] pilot: the article analysis is AI-supported in every work step. According to the assessment logic, how does the exam design protect the core skill Fa4 (critical thinking) against deskilling?"
   },
   "a": [
    {
     "de": "Durch ein Verbot von KI-Werkzeugen in der schriftlichen Endfassung, damit der Text nachweislich eigenständig formuliert worden ist.",
     "en": "Through a ban on AI tools in the final written version, so that the text has demonstrably been formulated independently."
    },
    {
     "de": "Durch ein KI-freies Verteidigungselement, in dem Studierende ihre Analyseentscheidungen ohne Werkzeugzugriff selbst begründen.",
     "en": "Through an AI-free defence element in which students justify their analytical decisions themselves without tool access."
    },
    {
     "de": "Durch die Bewertung der KI-Outputs selbst, da deren Qualität die Analysekompetenz der Studierenden unmittelbar abbildet.",
     "en": "Through grading the AI outputs themselves, since their quality directly reflects the students' analytical competence."
    },
    {
     "de": "Durch die Wahl leistungsfähigerer Modelle, da bessere KI-Systeme weniger fehlerhafte Analysen in die Seminararbeit einbringen.",
     "en": "Through choosing more capable models, since better AI systems introduce fewer flawed analyses into the seminar paper."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "In der Kategorie [C] wird KI in jedem Arbeitsschritt genutzt; die Kernfertigkeit wird deshalb durch ein gesichertes, KI-freies Verteidigungselement geprüft, in dem Studierende ihre Analyseentscheidungen selbst vertreten. Das KI-Verbot in der Endfassung wirkt plausibel, widerspricht aber der [C]-Logik und würde das Formulieren (Fa6) statt der kritischen Analyseentscheidungen (Fa4) absichern.",
    "en": "In category [C], AI is used in every work step; the core skill is therefore secured by a protected, AI-free defence element in which students account for their analytical decisions themselves. The ban on AI in the final version sounds plausible, but it contradicts the [C] logic and would safeguard writing (Fa6) rather than the critical analytical decisions (Fa4)."
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
    "de": "Ein LLM liefert für das Theoriekapitel eine Zusammenfassung mit der Quelle «Meier & Sanders (2021, Journal of Personality)». Die Referenz ist weder über PsycInfo noch über Google Scholar oder eine DOI-Suche auffindbar. Welches Vorgehen ist korrekt?",
    "en": "An LLM delivers a summary for the theory chapter citing 'Meier & Sanders (2021, Journal of Personality)'. The reference cannot be found via PsycInfo, Google Scholar or a DOI search. Which course of action is correct?"
   },
   "a": [
    {
     "de": "Die Quelle übernehmen und im Prozesslog vermerken, dass sie KI-generiert ist, denn das Disclosure Form deckt solche Fälle formal ab.",
     "en": "Adopt the source and note in the process log that it is AI-generated, since the disclosure form formally covers such cases."
    },
    {
     "de": "Die Aussage nur weiterverwenden, wenn selbst recherchierte und gelesene Primärliteratur sie belegt; die Referenz gilt als fabriziert.",
     "en": "Use the claim only if primary literature you researched and read yourself supports it; the reference counts as fabricated."
    },
    {
     "de": "Die Referenz mit dem Zusatz «zitiert nach KI-System» aufführen, analog zum Sekundärzitat bei nicht verfügbaren Originalquellen.",
     "en": "List the reference with the note 'as cited in an AI system', analogous to secondary citation of unavailable original sources."
    },
    {
     "de": "Die Kernaussage ohne Beleg in den Fliesstext übernehmen, da etabliertes Lehrbuchwissen keine Einzelnachweise im Text benötigt.",
     "en": "Include the key claim in the running text without a reference, since established textbook knowledge needs no individual citations."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "LLMs erzeugen regelmässig plausibel klingende, aber nicht existierende Referenzen; zitierfähig ist nur Primärliteratur, die selbst gefunden und gelesen wurde, und die Aussage muss daran verifiziert werden. Die Analogie zum Sekundärzitat ist der verführerischste Distraktor: Sie setzt eine real existierende Originalquelle voraus, die hier gerade fehlt.",
    "en": "LLMs routinely generate plausible-sounding but nonexistent references; only primary literature you found and read yourself is citable, and the claim must be verified against it. The analogy to secondary citation is the most seductive distractor: it presupposes an actually existing original source, which is precisely what is missing here."
   }
  },
  {
   "q": {
    "de": "Die neue Bachelorarbeit kombiniert einen KI-integrierten Arbeitsprozess (AIAS 4), ein exploratives KI-Artefakt (AIAS 5) und eine zehnminütige KI-freie mündliche Prüfung (Gewichtung 70/30). Welche Funktion hat die mündliche Prüfung in dieser Architektur?",
    "en": "The new Bachelor thesis combines an AI-integrated work process (AIAS 4), an exploratory AI artefact (AIAS 5) and a ten-minute AI-free oral examination (weighting 70/30). What is the function of the oral examination in this architecture?"
   },
   "a": [
    {
     "de": "Sie ist der Validitätsanker: Sie sichert, dass zentrale fachliche und methodische Entscheidungen auch ohne KI erklärt, begründet und verteidigt werden können.",
     "en": "It is the validity anchor: it ensures that central subject-matter and methodological decisions can be explained, justified and defended without AI."
    },
    {
     "de": "Sie ist die Hauptleistung: Da der schriftliche Teil KI-integriert entsteht, zählt für die Note primär das Prüfungsgespräch, die Arbeit dient als Vorbereitung.",
     "en": "It is the main assessment: since the written part is produced AI-integrated, the grade rests primarily on the oral, with the thesis serving as preparation."
    },
    {
     "de": "Sie dient der KI-Detektion: Im Gespräch wird geprüft, ob Textpassagen der Arbeit von einem Sprachmodell erzeugt wurden, um Täuschung nachzuweisen.",
     "en": "It serves AI detection: the conversation checks whether passages of the thesis were generated by a language model in order to prove misconduct."
    },
    {
     "de": "Sie ersetzt den Prozessanhang: Wer die Arbeit mündlich vertreten kann, muss die eigene KI-Nutzung nicht mehr schriftlich dokumentieren.",
     "en": "It replaces the process appendix: anyone who can defend the thesis orally no longer needs to document their AI use in writing."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Der Validitätsanker-Gedanke stammt aus der aktuellen Assessment-Diskussion: Entscheidend ist valide Evidenz für tatsächliche Kompetenz, nicht Betrugsabwehr (Dawson et al., 2024; Corbin et al., 2025). Die Arbeit bleibt mit 70% der authentische Capstone; das KI-freie Gespräch (30%) sichert die Eigenleistung und begrenzt Deskilling-Risiken — Prozessanhang und Disclosure bleiben trotzdem Pflicht.",
    "en": "The validity-anchor idea comes from the current assessment debate: what matters is valid evidence of actual competence, not cheating control (Dawson et al., 2024; Corbin et al., 2025). At 70% the thesis remains the authentic capstone; the AI-free conversation (30%) secures the individual contribution and limits deskilling risks — the process appendix and disclosure remain mandatory."
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
    "de": "Im TIC-Pilotmodul Statistics 3 (Kategorie A+B) debuggt ein Student seinen lmer-Code mit Copilot und bereitet danach die Interpretation der Ergebnisse vor. Welcher Umgang entspricht der Prüfungslogik des Moduls?",
    "en": "In the TIC pilot module Statistics 3 (category A+B), a student debugs his lmer code with Copilot and then prepares the interpretation of the results. Which approach matches the module's assessment logic?"
   },
   "a": [
    {
     "de": "Beide Tätigkeiten laufen als [B], weil Statistik ein Anwendungsfach ist und die Prüfungslogik dort keine KI-freien Anteile vorsieht.",
     "en": "Both activities run as [B], because statistics is an applied subject and the assessment logic provides no AI-free components there."
    },
    {
     "de": "Beide Tätigkeiten laufen als [A], weil KI-Unterstützung im methodischen Rückgrat des Studiums das statistische Verständnis gefährdet.",
     "en": "Both activities run as [A], because AI support in the methodological backbone of the degree endangers statistical understanding."
    },
    {
     "de": "Das Debugging läuft als [A], die Interpretation als [B], weil Programmierfehler eigenständig gefunden werden müssen und Deutungen delegierbar sind.",
     "en": "Debugging runs as [A] and interpretation as [B], because coding errors must be found independently while interpretations are delegable."
    },
    {
     "de": "Das Debugging läuft als [B] mit Disclosure und Prozesslog; die KI-freie Interpretation der festen und zufälligen Effekte sichert als [A] die Kernfertigkeit.",
     "en": "Debugging runs as [B] with disclosure and process log; the AI-free interpretation of fixed and random effects secures the core skill as [A]."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Die Lernziele legen genau diese Aufteilung fest: KI-gestütztes Debugging ist ein [B]-Schritt mit Disclosure und Prozesslog, während die KI-freie Interpretation fester und zufälliger Effekte als [A] die Kernfertigkeit Fa3 sichert. Die umgekehrte Zuordnung ist verführerisch, weil eigenständiges Programmieren wertvoll erscheint; zertifiziert wird im Modul aber das statistische Verständnis der Ergebnisse, nicht die fehlerfreie Syntax.",
    "en": "The learning objectives specify exactly this split: AI-assisted debugging is a [B] step with disclosure and process log, while the AI-free interpretation of fixed and random effects secures the core skill Fa3 as [A]. The reversed assignment is seductive because independent coding seems valuable; what the module certifies, however, is the statistical understanding of the results, not error-free syntax."
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
    "de": "Ein Unternehmen setzt ein KI-System ein, das Bewerbungsdossiers automatisch vorsortiert und Persönlichkeitsscores berechnet; eine Recruiterin trifft die Endauswahl. Wie ist das System nach der EU-KI-Verordnung (AI Act) einzuordnen?",
    "en": "A company uses an AI system that automatically pre-screens application dossiers and computes personality scores; a recruiter makes the final selection. How is this system classified under the EU AI Act?"
   },
   "a": [
    {
     "de": "Es gilt als System mit minimalem Risiko, weil die menschliche Endauswahl die algorithmische Vorsortierung in rechtlicher Hinsicht weitgehend neutralisiert.",
     "en": "It counts as a minimal-risk system, because the human final selection largely neutralises the algorithmic pre-screening in legal terms."
    },
    {
     "de": "Es gilt als verbotene Praktik, weil die algorithmische Bewertung von Persönlichkeit im Arbeitskontext unter das Verbot der Emotionserkennung fällt.",
     "en": "It counts as a prohibited practice, because algorithmic personality scoring in the work context falls under the ban on emotion recognition."
    },
    {
     "de": "Es gilt als System mit begrenztem Risiko, weil lediglich Transparenzpflichten greifen, solange keine biometrischen Daten verarbeitet werden.",
     "en": "It counts as a limited-risk system, because only transparency duties apply as long as no biometric data are being processed."
    },
    {
     "de": "Es gilt als Hochrisiko-System im Bereich Beschäftigung, weshalb unter anderem Risikomanagement, Datenqualität und menschliche Aufsicht verlangt sind.",
     "en": "It counts as a high-risk system in the employment domain, which among other things requires risk management, data quality and human oversight."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Nach Anhang III der EU-KI-Verordnung gelten KI-Systeme für Rekrutierung und Bewerbungsauswahl als Hochrisiko-Systeme mit Pflichten wie Risikomanagement, Datenqualität und menschlicher Aufsicht. Die menschliche Endauswahl hebt diese Einstufung nicht auf, sie ist im Gegenteil Teil der geforderten Aufsicht; genau daran scheitert der verführerische Distraktor mit dem minimalen Risiko.",
    "en": "Under Annex III of the EU AI Act, AI systems for recruitment and applicant selection are high-risk systems with duties such as risk management, data quality and human oversight. A human making the final selection does not remove this classification; on the contrary, it is part of the required oversight, which is exactly where the tempting minimal-risk distractor fails."
   }
  },
  {
   "q": {
    "de": "Im Modul (Kategorie B/C) verfasst ein Student ein diagnostisches Übungsgutachten: Die Testwerte interpretiert er selbst, Formulierung und Struktur verbessert er mit einem KI-Tool und führt dazu einen Prozesslog. Welcher Prüfungslogik entspricht dieses Vorgehen?",
    "en": "In this module (category B/C), a student writes a practice diagnostic report: he interprets the test scores himself, improves wording and structure with an AI tool, and keeps a process log. Which assessment logic does this approach match?"
   },
   "a": [
    {
     "de": "Der Logik [B], weil einzelne Arbeitsschritte KI-gestützt erfolgen und dies mit Disclosure und Prozesslog transparent dokumentiert wird.",
     "en": "Logic [B], because individual work steps are AI-assisted and this is transparently documented with disclosure and a process log."
    },
    {
     "de": "Der Logik [A], weil die eigenständige Interpretation der Testwerte das Gutachten insgesamt zu einer KI-freien Prüfungsleistung macht.",
     "en": "Logic [A], because independently interpreting the test scores makes the report as a whole an AI-free piece of assessed work."
    },
    {
     "de": "Der Logik [C], weil bereits die sprachliche Überarbeitung durch ein KI-Tool als durchgängig KI-integrierte Arbeitsweise zu werten ist.",
     "en": "Logic [C], because even the linguistic revision by an AI tool has to be counted as a fully AI-integrated way of working."
    },
    {
     "de": "Der Logik [C], weil die Kategorie B/C verlangt, dass KI in jedem Arbeitsschritt von der Recherche bis zur Endfassung eingesetzt wird.",
     "en": "Logic [C], because category B/C requires AI to be used in every work step from the research phase to the final version."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Logik [B] bedeutet, dass einzelne Arbeitsschritte KI-gestützt erfolgen und dies mit Disclosure und Prozesslog dokumentiert wird; genau das liegt hier vor, weil die diagnostische Kernleistung eigenständig bleibt. Der verführerischste Distraktor erklärt jede punktuelle KI-Nutzung zu [C], doch [C] bezeichnet den KI-Einsatz in jedem Arbeitsschritt und nicht die blosse sprachliche Überarbeitung.",
    "en": "Logic [B] means that individual work steps are AI-assisted and documented with disclosure and a process log; that is exactly the case here, since the core diagnostic work remains the student's own. The most tempting distractor turns any selective AI use into [C], but [C] denotes AI use in every single work step, not mere linguistic polishing."
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
    "de": "Eine Praktikantin möchte Beratungsnotizen mit Angaben zu Diagnosen und Medikation einer Klientin in einen öffentlichen KI-Chatbot eingeben, um eine Zusammenfassung zu erhalten. Wie ist das aus Sicht von Datenschutz und Berufsethik zu beurteilen?",
    "en": "An intern wants to enter counselling notes containing a client's diagnoses and medication into a public AI chatbot in order to get a summary. How should this be judged in terms of data protection and professional ethics?"
   },
   "a": [
    {
     "de": "Unzulässig, weil Gesundheitsdaten besonders schützenswerte Personendaten sind und ihre Eingabe in öffentliche Tools eine Bekanntgabe an Dritte ohne Einwilligung darstellt und die Berufsschweigepflicht verletzt.",
     "en": "Impermissible, because health data are specially protected personal data and entering them into public tools constitutes disclosure to third parties without consent and violates professional confidentiality."
    },
    {
     "de": "Zulässig, weil das persönliche Konto der Praktikantin passwortgeschützt ist und die eingegebenen Daten damit nicht öffentlich einsehbar werden.",
     "en": "Admissible, because the intern's personal account is password-protected and the entered data therefore do not become publicly visible."
    },
    {
     "de": "Zulässig, weil kommerzielle KI-Anbieter über ihre Nutzungsbedingungen an die berufliche Schweigepflicht der Psychologieberufe gebunden sind.",
     "en": "Admissible, because commercial AI providers are bound to the professional confidentiality of psychology through their terms of use."
    },
    {
     "de": "Unzulässig nur dann, wenn der volle Name der Klientin genannt wird, weil ohne Namensnennung keine Personendaten mehr vorliegen.",
     "en": "Inadmissible only if the client's full name is mentioned, because without the name the notes no longer contain personal data."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Angaben zu Diagnosen und Medikation sind besonders schützenswerte Personendaten; ihre Eingabe in einen öffentlichen Chatbot ist eine Bekanntgabe an Dritte ohne Einwilligung und verletzt zugleich die Berufsschweigepflicht (Art. 321 StGB). Der verführerischste Distraktor ist das passwortgeschützte Konto, denn der Schutz des Zugangs ändert nichts daran, dass die Daten den geschützten Rahmen verlassen.",
    "en": "Details on diagnoses and medication are specially protected personal data; entering them into a public chatbot discloses them to third parties without consent and simultaneously violates professional confidentiality (Art. 321 Swiss Criminal Code). The most tempting distractor is the password-protected account, since protecting the login does not change the fact that the data leave the protected setting."
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
    "de": "Für die Seminararbeit liefert ein Chatbot eine passend klingende Quellenangabe mit Autor, Jahr und Journal. In PsycINFO und Google Scholar ist die Arbeit jedoch nicht auffindbar. Wie gehen Sie fachlich korrekt vor?",
    "en": "For your seminar paper, a chatbot provides a plausible-sounding reference with author, year and journal. However, the paper cannot be found in PsycINFO or Google Scholar. What is the professionally correct way to proceed?"
   },
   "a": [
    {
     "de": "Sie übernehmen die Angabe mit dem Zusatz «zitiert nach KI», weil die Herkunft der Quelle damit für die Lesenden transparent gemacht ist.",
     "en": "You adopt the reference with the note 'as cited by AI', because this makes the source's origin transparent for your readers."
    },
    {
     "de": "Sie behandeln die Angabe als mögliche Konfabulation, zitieren sie nicht und belegen die Aussage stattdessen über die Datenbank mit auffindbarer Primärliteratur.",
     "en": "You treat the reference as a possible confabulation, do not cite it, and instead support the claim with traceable primary literature found via the database."
    },
    {
     "de": "Sie übernehmen die Angabe unverändert, weil PsycINFO längst nicht alle Zeitschriften indexiert und die Quelle darum dennoch existieren dürfte.",
     "en": "You adopt the reference unchanged, because PsycINFO does not index all journals by far, so the source may well exist anyway."
    },
    {
     "de": "Sie bitten den Chatbot, die Quelle zu bestätigen und ein wörtliches Zitat daraus zu liefern, und übernehmen die Angabe nach dieser Bestätigung.",
     "en": "You ask the chatbot to confirm the source and provide a verbatim quotation from it, and adopt the reference after this confirmation."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Sprachmodelle erzeugen regelmässig formal korrekte, aber erfundene Literaturangaben; die Prüfung muss deshalb ausserhalb des Modells in Fachdatenbanken erfolgen, und nicht auffindbare Quellen dürfen nicht zitiert werden. Der verführerischste Distraktor lässt das Modell die eigene Angabe bestätigen, doch diese Selbstbestätigung hat keinen Beweiswert, weil auch sie konfabuliert sein kann.",
    "en": "Language models regularly generate formally correct but fabricated references; verification must therefore happen outside the model in scholarly databases, and untraceable sources must not be cited. The most tempting distractor has the model confirm its own reference, but this self-confirmation carries no evidential value because it can be confabulated as well."
   }
  },
  {
   "q": {
    "de": "Im Modul (Kategorie A+B+C) schreiben Studierende eine teilweise KI-gestützte Seminararbeit und verteidigen ihre Analyseentscheidungen anschliessend mündlich ohne KI-Hilfe. Welche Begründung trifft die Prüfungslogik dieser Kombination?",
    "en": "In this module (category A+B+C), students write a partly AI-assisted seminar paper and then defend their analytical decisions orally without AI support. Which rationale captures the assessment logic of this combination?"
   },
   "a": [
    {
     "de": "Die mündliche Verteidigung dient als Kontrolle, mit der unerlaubte KI-Nutzung in der schriftlichen Arbeit nachträglich aufgedeckt und sanktioniert wird.",
     "en": "The oral defence serves as a control that retrospectively detects and sanctions unauthorised AI use in the written seminar paper."
    },
    {
     "de": "Die schriftliche Arbeit folgt der Logik [C], weil mit Disclosure und Prozesslog dokumentierte KI-Nutzung bereits als durchgängig KI-integriert gilt.",
     "en": "The written paper follows logic [C], because AI use documented with disclosure and a process log already counts as fully AI-integrated."
    },
    {
     "de": "Die Kombination sichert über [A] die eigenständigen Kernfertigkeiten und prüft über [B] den transparent deklarierten KI-Einsatz; die Logik [C] wird durch andere Prüfungselemente des Moduls abgedeckt.",
     "en": "The combination secures independent core skills via [A] and assesses transparently declared AI use via [B]; logic [C] is covered by other assessment elements of the module."
    },
    {
     "de": "Die Kombination dient primär der Notengerechtigkeit, weil KI-gestützte Arbeiten sonst systematisch besser bewertet würden als KI-freie Arbeiten.",
     "en": "The combination mainly serves grading fairness, because AI-assisted papers would otherwise systematically receive better marks than AI-free ones."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Die Kombination folgt der Modulkategorie A+B+C: [A] sichert in der KI-freien Verteidigung die eigenständigen Kernfertigkeiten wie das Begründen der Analyseentscheidungen, [B] prüft in der Seminararbeit den deklarierten KI-Einsatz einzelner Schritte mit Disclosure und Prozesslog. Der verführerischste Distraktor deutet die Verteidigung als Betrugskontrolle, doch sie ist ein eigenständiges kompetenzorientiertes Prüfungselement.",
    "en": "The combination follows the A+B+C module category: [A] secures independent core skills such as justifying analytical decisions in the AI-free defence, while [B] assesses declared AI use in individual steps of the paper with disclosure and a process log. The most tempting distractor frames the defence as a fraud check, but it is a competence-oriented assessment element in its own right."
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
    "de": "Sie verfassen den Fairness-Audit-Bericht als [B]-Leistung (teilweise KI-integriert) und möchten die Analyse der Auswahlquoten mit KI-Unterstützung rechnen. Welches Vorgehen entspricht der Prüfungslogik [B]?",
    "en": "You are writing the fairness-audit report as a [B] assessment (partially AI-integrated) and want AI support for computing the selection-rate analysis. Which approach matches assessment logic [B]?"
   },
   "a": [
    {
     "de": "Sie lassen die KI den gesamten Bericht samt rechtlicher Einordnung erstellen und überarbeiten anschliessend nur noch den sprachlichen Stil des fertigen Textes.",
     "en": "You let the AI produce the entire report including the legal classification and afterwards revise only the linguistic style of the finished text."
    },
    {
     "de": "Sie nutzen die KI für den Analyse-Code, prüfen die Ergebnisse selbst nach, verantworten die rechtliche Einordnung eigenständig und dokumentieren die KI-Schritte im Prozesslog.",
     "en": "You use the AI for the analysis code, verify the results yourself, take personal responsibility for the legal classification and document the AI steps in the process log."
    },
    {
     "de": "Sie verzichten ganz auf KI-Unterstützung, weil in der Kategorie [B] allein die Dozierenden über den konkreten Einsatz von KI-Werkzeugen entscheiden dürfen.",
     "en": "You do without AI support entirely, because in category [B] only the lecturers are allowed to decide on the concrete use of AI tools."
    },
    {
     "de": "Sie setzen die KI in sämtlichen Arbeitsschritten ohne gesonderte Dokumentation ein, weil die Kategorie [B] den KI-Einsatz bereits pauschal für alle deklariert.",
     "en": "You use the AI in every single step without separate documentation, because category [B] already declares AI use across the board for everyone."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Kategorie [B] heisst: einzelne Arbeitsschritte mit KI, offengelegt per Disclosure und Prozesslog, während die fachliche Letztverantwortung bei den Studierenden bleibt; genau das bildet dieses Vorgehen ab. Der verführerischste Distraktor deutet [B] als Pauschalfreigabe ohne Dokumentation; KI in allen Arbeitsschritten entspräche zudem der Kategorie [C].",
    "en": "Category [B] means: individual work steps with AI, disclosed via a disclosure statement and process log, while final professional responsibility stays with the students; this approach reflects exactly that. The most tempting distractor reads [B] as a blanket permission without documentation; using AI in every work step would in fact correspond to category [C]."
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
    "de": "Für eine [B]-Seminararbeit (teilweise KI-integriert) möchte eine Studentin Gesprächsnotizen aus ihrem Praktikum mit einem öffentlichen KI-Tool zusammenfassen lassen und dies im Prozesslog ausweisen. Wie ist das zu beurteilen?",
    "en": "For a [B] seminar paper (partially AI-integrated) a student wants a public AI tool to summarise session notes from her internship and plans to declare this in the process log. How should this be judged?"
   },
   "a": [
    {
     "de": "Zulässig, denn die Kategorie [B] deckt einzelne KI-Schritte ab, sobald sie mit Disclosure transparent im Prozesslog dokumentiert sind.",
     "en": "Permissible, because category [B] covers individual AI steps as soon as they are transparently documented in the process log with a disclosure."
    },
    {
     "de": "Zulässig, sofern sie den Namen der Klientin entfernt, weil damit keine Rückschlüsse auf die betroffene Person mehr möglich sind.",
     "en": "Permissible, provided she removes the client's name, because this makes it impossible to draw any inferences about the person concerned."
    },
    {
     "de": "Unzulässig, denn Schweigepflicht und Datenschutz gelten unabhängig von der Prüfungskategorie; sensible Klientendaten gehören nicht in ein öffentliches KI-Tool.",
     "en": "Not permissible, because confidentiality and data protection apply independently of the assessment category; sensitive client data do not belong in a public AI tool."
    },
    {
     "de": "Unzulässig, weil das Zusammenfassen von Texten in der Kategorie [B] generell den Dozierenden vorbehalten bleibt und einzeln bewilligt werden muss.",
     "en": "Not permissible, because in category [B] summarising texts is generally reserved for lecturers and must be approved on a case-by-case basis."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Die Prüfungskategorien regeln den KI-Einsatz in den eigenen Arbeitsschritten; Schweigepflicht und Datenschutz gelten davon unabhängig, und mit der Eingabe in ein öffentliches Tool verlassen sensible Daten den geschützten Rahmen. Der verführerischste Distraktor setzt Disclosure mit Zulässigkeit gleich: Das Prozesslog legitimiert den Schritt prüfungsrechtlich, nicht datenschutzrechtlich; auch das Entfernen des Namens verhindert eine Re-Identifikation über Kontextdetails nicht.",
    "en": "The assessment categories regulate AI use in one's own work steps; professional confidentiality and data protection apply independently of them, and once entered into a public tool, sensitive data leave the protected setting. The most tempting distractor equates disclosure with permissibility: the process log legitimises the step under assessment rules, not under data-protection law; removing the name also fails to prevent re-identification via contextual details."
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
    "de": "Im Modul wird die spieltheoretische Formalisierung sozialer Dilemmata in einer KI-freien Klausur [A] geprüft, die Analyse von Dark Patterns in realen Apps dagegen als [B]-Aufgabe (teilweise KI-integriert) gestellt. Welche Begründung trifft diese Aufteilung am besten?",
    "en": "In this module, the game-theoretic formalisation of social dilemmas is tested in an AI-free exam [A], while the analysis of dark patterns in real apps is set as a [B] task (partially AI-integrated). Which rationale best fits this division?"
   },
   "a": [
    {
     "de": "[A] sichert, dass das Formalisieren als Kernfertigkeit ohne Hilfsmittel beherrscht wird; [B] erlaubt einzelne KI-Schritte mit Disclosure und Prozesslog, weil das kritische Prüfen von KI-Output dort selbst Lernziel ist.",
     "en": "[A] ensures that formalising is mastered as a core skill without aids; [B] permits individual AI steps with disclosure and a process log, because critically checking AI output is itself a learning objective there."
    },
    {
     "de": "[A] wird gewählt, weil Sprachmodelle spieltheoretische Aufgaben derzeit nicht zuverlässig lösen können; [B] überträgt die Analyse der KI, deren Resultate die Studierenden anschliessend direkt übernehmen dürfen.",
     "en": "[A] is chosen because language models cannot currently solve game-theoretic tasks reliably; [B] hands the analysis to the AI, whose results the students may then directly adopt."
    },
    {
     "de": "[B] verlangt, dass die KI in jedem einzelnen Arbeitsschritt eingesetzt wird und vor allem neue Werkzeugkompetenzen entstehen; [A] dient in dieser Aufteilung hauptsächlich der Notengebung im Modul.",
     "en": "[B] requires that the AI is used in every single work step, mainly building new tool competences; in this division [A] mainly serves the purpose of grading in the module."
    },
    {
     "de": "[B] verlagert die Bewertung vom Ergebnis auf den Prozess, weil bei transparenter Disclosure nur noch das dokumentierte Vorgehen und nicht mehr die fachliche Qualität der Arbeit benotet wird.",
     "en": "[B] shifts assessment from the product to the process, because with transparent disclosure only the documented procedure and no longer the professional quality is graded."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Die Aufteilung folgt der Prüfungslogik: [A] sichert KI-frei die Kernfertigkeit des Formalisierens, während [B] einzelne KI-Schritte mit Disclosure und Prozesslog zulässt und die kritische Prüfung des KI-Outputs zum Lernziel macht; die fachliche Qualität wird weiterhin bewertet. Der verführerischste Distraktor beschreibt mit KI in jedem Arbeitsschritt die Kategorie [C], nicht [B].",
    "en": "The division follows the assessment logic: [A] secures the core skill of formalising in an AI-free setting, while [B] allows individual AI steps with disclosure and a process log and makes critical checking of AI output a learning objective; professional quality is still graded. The most tempting distractor describes category [C], not [B], with AI in every work step."
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
    "de": "Das Modul soll prüfen, ob Studierende Neglect und Hemianopsie eigenständig differenzieren, und zugleich, ob sie KI-Verdachtsdiagnosen kritisch prüfen können. Welche Kombination der Prüfungslogik passt am besten?",
    "en": "The module should assess whether students can independently differentiate neglect and hemianopia and, at the same time, critically check AI suspected diagnoses. Which combination of assessment logic fits best?"
   },
   "a": [
    {
     "de": "Ein [C]-Element integriert KI in jeden Schritt, sodass Differenzierung und Prüfung vollständig KI-gestützt ablaufen.",
     "en": "A [C] element integrates AI into every step, so that both differentiation and checking run fully AI-supported."
    },
    {
     "de": "Ein [B]-Element genügt für beide Ziele, weil die Disclosure allein die eigenständige Differenzierung hinreichend belegt.",
     "en": "A [B] element suffices for both goals, since disclosure alone sufficiently proves the independent differentiation."
    },
    {
     "de": "Ein [A]-Element sichert die Differenzierung KI-frei, ein [B]-Element lässt die KI-Verdachtsdiagnose mit Disclosure und Prozesslog prüfen.",
     "en": "An [A] element secures the differentiation AI-free, a [B] element has the AI diagnosis checked with disclosure and process log."
    },
    {
     "de": "Ein [A]-Element deckt beide Ziele ab, weil eine KI-freie Prüfung die kritische Prüfung von KI-Ausgaben mit einschliesst.",
     "en": "An [A] element covers both goals, since an AI-free assessment already includes the critical checking of AI outputs."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Die eigenständige Kernfertigkeit gehört in ein KI-freies [A]-Element, die kritische Prüfung einer KI-Ausgabe in ein [B]-Element mit Disclosure und Prozesslog. Der Vorschlag, [B] genüge für beide Ziele, ist verführerisch, unterläuft aber das Ziel, die Differentialdiagnose ohne KI-Unterstützung nachzuweisen.",
    "en": "The independent core skill belongs in an AI-free [A] element, and the critical check of an AI output in a [B] element with disclosure and process log. The 'a single [B] suffices' option is tempting but undercuts the goal of demonstrating the differential diagnosis without AI support."
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
    "de": "Das Portfolio bewertet Zieldefinition, Workflow-Design, Audit und fachliche Qualitätskontrolle und wird durch ein KI-freies Verteidigungselement ergänzt. Warum ist dies ein anspruchsvolles [C]-Design und nicht bloss [B]?",
    "en": "The portfolio assesses goal definition, workflow design, audit and subject-matter quality control, complemented by an AI-free defence element. Why is this a demanding [C] design and not merely [B]?"
   },
   "a": [
    {
     "de": "Weil KI in jedem Arbeitsschritt genutzt wird und das Gestalten und Auditieren des Systems selbst zum bewerteten Lernziel wird.",
     "en": "Because AI is used in every working step and designing and auditing the system itself becomes the assessed learning goal."
    },
    {
     "de": "Weil einzelne Arbeitsschritte mit KI erfolgen und die Nutzung anschliessend im Disclosure Form deklariert wird.",
     "en": "Because single working steps are done with AI and the use is afterwards disclosed in the disclosure form."
    },
    {
     "de": "Weil die Prüfung durchgehend KI-frei bleibt und ausschliesslich die Kernfertigkeiten des Schwerpunkts absichert.",
     "en": "Because the assessment stays AI-free throughout and secures only the core skills of the specialisation."
    },
    {
     "de": "Weil das KI-freie Verteidigungselement die KI-Nutzung ersetzt und damit den gesamten Prüfungsaufwand reduziert.",
     "en": "Because the AI-free defence element replaces the AI use and thereby reduces the whole assessment workload."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "[C] bedeutet KI in jedem Arbeitsschritt, wobei das Gestalten und Auditieren des KI-Systems selbst zum geprüften Newskilling wird. Option zwei beschreibt exakt [B], also einzelne Schritte plus Disclosure, und ist deshalb der verführerischste, aber falsche Distraktor.",
    "en": "[C] means AI in every working step, with designing and auditing the AI system itself becoming the assessed newskilling. The second option describes exactly [B], namely single steps plus disclosure, and is therefore the most tempting but incorrect distractor."
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
    "de": "Studierende sollen erstens die Theorienlage KI-frei beherrschen, zweitens eine KI-Klassifikation mit offengelegter KI-Nutzung prüfen und drittens einen durchgehend KI-gestützten Analyseworkflow gestalten. Welche Zuordnung zu [A], [B] und [C] trifft zu?",
    "en": "Students are to, first, master the theoretical landscape AI-free; second, check an AI classification with disclosed AI use; and third, design a fully AI-supported analysis workflow. Which mapping to [A], [B] and [C] holds?"
   },
   "a": [
    {
     "de": "KI-freie Theoriebeherrschung ist [B], die offengelegte Prüfung der Klassifikation ist [C], der KI-gestützte Workflow ist [A].",
     "en": "AI-free theory mastery is [B], the disclosed checking of the classification is [C], the AI-supported workflow is [A]."
    },
    {
     "de": "KI-freie Theoriebeherrschung ist [A], die offengelegte Prüfung der Klassifikation ist [B], der durchgehend KI-gestützte Workflow ist [C].",
     "en": "AI-free theory mastery is [A], the disclosed checking of the classification is [B], the fully AI-supported workflow is [C]."
    },
    {
     "de": "Alle drei Arbeitsschritte sind [C], weil in jedem Schritt Emotionsmodelle inhaltlich eine Rolle spielen.",
     "en": "All three working steps are [C], because emotion models play a substantive role in each step."
    },
    {
     "de": "Die offengelegte Prüfung ist [A], die KI-freie Theoriebeherrschung ist [C], der KI-gestützte Workflow ist [B].",
     "en": "The disclosed checking is [A], the AI-free theory mastery is [C], the AI-supported workflow is [B]."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "[A] sichert Kernwissen KI-frei, [B] integriert einzelne KI-Schritte mit Disclosure, [C] nutzt KI in jedem Schritt, und genau in dieser Reihenfolge passen die drei Aufgaben. Option drei, «alles [C]», ist verführerisch, verwechselt aber das inhaltliche Thema (Emotionsmodelle) mit dem tatsächlichen KI-Einsatz im Arbeitsprozess.",
    "en": "[A] secures core knowledge AI-free, [B] integrates single AI steps with disclosure, [C] uses AI in every step, and the three tasks map onto exactly that order. The third option, 'all [C]', is tempting but confuses the subject matter (emotion models) with the actual use of AI in the working process."
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
    "de": "In einer Fallanalyse zu Algorithmic Management nutzen Studierende KI nur für die erste Literaturübersicht, dokumentieren die Prompts in einem Prozesslog und legen die Nutzung offen; Analyse und Schlussfolgerungen entstehen ohne KI. Welche Prüfungslogik liegt vor und warum?",
    "en": "In a case analysis on algorithmic management, students use AI only for the initial literature overview, document their prompts in a process log and disclose the use; the analysis and conclusions are produced without AI. Which assessment logic applies, and why?"
   },
   "a": [
    {
     "de": "[A] KI-frei, weil die eigentliche Analyseleistung ohne KI entsteht und allein diese Kernleistung für die Einstufung der gesamten Prüfungsleistung massgebend ist.",
     "en": "[A] AI-free, because the actual analytical work is produced without AI and this core achievement alone determines how the entire assessment is classified."
    },
    {
     "de": "[B] teilweise KI-integriert, weil einzelne Arbeitsschritte KI-gestützt sind und die Nutzung mit Disclosure und Prozesslog nachvollziehbar dokumentiert wird.",
     "en": "[B] partially AI-integrated, because individual work steps are AI-supported and the use is transparently documented with disclosure and a process log."
    },
    {
     "de": "[C] KI-integriert, weil bereits ein einziger KI-gestützter Arbeitsschritt die gesamte Prüfungsleistung in die höchste Integrationsstufe der Prüfungslogik hebt.",
     "en": "[C] AI-integrated, because even a single AI-supported work step moves the entire assessment into the highest integration level of the assessment logic."
    },
    {
     "de": "[A] KI-frei, weil die Literaturübersicht nur eine Vorleistung darstellt und Vorleistungen bei der Einstufung der Prüfungslogik grundsätzlich unberücksichtigt bleiben.",
     "en": "[A] AI-free, because the literature overview is merely preparatory work and preparatory work is generally disregarded when classifying the assessment logic."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Einzelne Arbeitsschritte sind KI-gestützt und die Nutzung ist mit Disclosure und Prozesslog dokumentiert; genau das definiert die Logik [B]. Der verführerischste Distraktor ist [A] mit dem Kernleistungs-Argument: Für die Einstufung zählt der gesamte dokumentierte Arbeitsprozess, sobald ein Schritt KI-gestützt ist, nicht nur der KI-freie Analyseteil.",
    "en": "Individual work steps are AI-supported and the use is documented with disclosure and a process log; that is precisely the definition of logic [B]. The most seductive distractor is [A] with the core-achievement argument: once one step is AI-supported, the entire documented work process counts for the classification, not only the AI-free analytical part."
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
    "de": "Eine Leistung im Modul läuft unter Prüfungslogik [C]: KI wird in jedem Arbeitsschritt der Evaluation einer Mental-Health-App eingesetzt. Welche Aussage beschreibt die Verantwortungsverteilung in dieser Logik korrekt?",
    "en": "An assessment in the module runs under logic [C]: AI is used in every step of evaluating a mental health app. Which statement correctly describes the distribution of responsibility under this logic?"
   },
   "a": [
    {
     "de": "Die fachliche Verantwortung für das Evidenzurteil bleibt bei den Studierenden; sie müssen jeden KI-Beitrag prüfen, dessen Grenzen benennen und die Nutzung transparent machen.",
     "en": "Professional responsibility for the evidence judgement stays with the students; they must check every AI contribution, name its limits and make the use transparent."
    },
    {
     "de": "Die fachliche Verantwortung geht anteilig auf den Anbieter des KI-Systems über, weil dessen Modell die inhaltlichen Bewertungen im Arbeitsprozess massgeblich erzeugt hat.",
     "en": "Professional responsibility partly transfers to the provider of the AI system, because its model substantially generated the substantive evaluations in the work process."
    },
    {
     "de": "Die Pflicht zur Offenlegung entfällt in dieser Logik, weil der KI-Einsatz in sämtlichen Arbeitsschritten vorausgesetzt wird und darum nicht mehr gesondert deklariert werden muss.",
     "en": "The duty of disclosure lapses under this logic, because AI use is presupposed in every work step and therefore no longer needs to be separately declared."
    },
    {
     "de": "Die Bewertung verlagert sich auf die Bedienkompetenz der Tools, weil in dieser Logik die Qualität der Prompts an die Stelle des eigenständigen fachlichen Urteils tritt.",
     "en": "Grading shifts to operating skill with the tools, because under this logic the quality of the prompts takes the place of independent professional judgement."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Logik [C] verlangt anspruchsvolles Newskilling: KI orchestrieren, Outputs fachlich validieren und das Gesamtergebnis verantworten; das Evidenzurteil bleibt eine menschliche Fachleistung. Der verführerischste Distraktor ist der Wegfall der Offenlegung: Auch bei durchgängig erwartetem KI-Einsatz bleibt Transparenz über Werkzeuge und Arbeitsschritte Teil der wissenschaftlichen Integrität.",
    "en": "Logic [C] demands sophisticated newskilling: orchestrating AI, professionally validating outputs and taking responsibility for the overall result; the evidence judgement remains a human professional achievement. The most seductive distractor is the lapse of disclosure: even when AI use is expected throughout, transparency about tools and work steps remains part of academic integrity."
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
    "de": "Im Modul üben Studierende schwierige Gespräche vorab im KI-Rollenspiel, die reale Mentoring-Beziehung bleibt jedoch bewusst KI-frei. Welche Begründung trifft die Prüfungs- und Kompetenzlogik des Moduls am besten?",
    "en": "In the module, students rehearse difficult conversations in advance in an AI role play, but the real mentoring relationship deliberately remains AI-free. Which rationale best captures the module's assessment and competence logic?"
   },
   "a": [
    {
     "de": "Die reale Beziehung bleibt KI-frei, weil aktuelle Sprachmodelle kindliche Reaktionen noch zu ungenau simulieren und der Einsatz deshalb bis auf Weiteres zurückgestellt wird.",
     "en": "The real relationship stays AI-free because current language models still simulate children's reactions too inaccurately, so their use is postponed for the time being."
    },
    {
     "de": "Die reale Beziehung bleibt KI-frei, weil der Schutz der Kinderdaten jede Form von KI-Nutzung im Modul ausschliesst, einschliesslich der vorbereitenden Gesprächssimulation.",
     "en": "The real relationship stays AI-free because protecting the child's data rules out every form of AI use in the module, including the preparatory conversation simulation."
    },
    {
     "de": "Die reale Beziehung bleibt KI-frei, weil Beziehungsgestaltung und Empathie Kernfertigkeiten sind, die nur in echter Interaktion entstehen; das Rollenspiel dient der Vorbereitung mit Offenlegung.",
     "en": "The real relationship stays AI-free because relationship-building and empathy are core skills that only develop in real interaction; the role-play serves as preparation, with disclosure."
    },
    {
     "de": "Die reale Beziehung bleibt KI-frei, weil Service-Learning-Leistungen vollständig der Logik [A] zugeordnet sind und KI-gestützte Anteile deshalb nicht in die Bewertung einfliessen dürfen.",
     "en": "The real relationship stays AI-free because service learning assessments are assigned entirely to logic [A], so AI-supported components must not enter into the grading."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Fu3 (Beziehung, Empathie, Verantwortung) ist die Kernfertigkeit des Moduls und wird nach Logik [A] bewusst KI-frei gesichert, während das KI-Rollenspiel als [B]-Element Vorbereitung und Reflexion mit Disclosure unterstützt. Der verführerischste Distraktor ist der Datenschutz: Er begründet strenge Regeln für Kinderdaten, schliesst aber KI-Nutzung ohne solche Daten, etwa die Simulation mit fiktiven Szenarien, gerade nicht aus.",
    "en": "Fu3 (relationship, empathy, responsibility) is the module's core skill and is deliberately secured AI-free under logic [A], while the AI role play as a [B] element supports preparation and reflection with disclosure. The most seductive distractor is data protection: it justifies strict rules for child data, but it does not rule out AI use without such data, for instance simulations with fictitious scenarios."
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
    "de": "In der Modulprüfung dokumentiert ein Student die KI-gestützte Datenaufbereitung und ein KI-Skript-Review mit Prozesslog und Disclosure, erklärt seine zentralen Analyseentscheidungen aber mündlich ohne Hilfsmittel. Wie ist dieses Prüfungsdesign in der Logik [A]/[B]/[C] korrekt einzuordnen?",
    "en": "In the module assessment, a student documents AI-assisted data preparation and an AI script review with a process log and disclosure, but explains his key analysis decisions orally without any aids. How is this assessment design correctly classified in the [A]/[B]/[C] logic?"
   },
   "a": [
    {
     "de": "Das gesamte Design zählt als [C], weil schon einzelne KI-gestützte Schritte ein Modul in die höchste Kategorie heben und die mündliche Erklärung daran nichts ändert.",
     "en": "The whole design counts as [C], because even individual AI-supported steps move a module into the highest category and the oral explanation does not change that."
    },
    {
     "de": "Die dokumentierten KI-Schritte mit Disclosure und Prozesslog entsprechen [B], der KI-freie mündliche Kontrollpunkt sichert die Kernfertigkeiten im Sinn von [A].",
     "en": "The documented AI steps with disclosure and process log correspond to [B], while the AI-free oral checkpoint secures core skills in the spirit of [A]."
    },
    {
     "de": "Das Design entspricht [A], weil die mündliche Prüfung ohne Hilfsmittel stattfindet und vorbereitende KI-Nutzung für die Kategorisierung nicht berücksichtigt wird.",
     "en": "The design corresponds to [A], because the oral examination takes place without aids and preparatory AI use is not considered for categorisation."
    },
    {
     "de": "Das Design entspricht [C], weil Newskilling den KI-Einsatz in Datenaufbereitung und Review verlangt und der mündliche Kontrollpunkt als Zusatzleistung gewertet wird.",
     "en": "The design corresponds to [C], because newskilling requires AI use in data preparation and review, with the oral checkpoint counted as an additional achievement."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "KI-Nutzung in einzelnen definierten Schritten mit Disclosure und Prozesslog ist genau die Definition von [B]; der hilfsmittelfreie mündliche Kontrollpunkt sichert die Kernfertigkeiten und folgt damit der [A]-Logik. Die [C]-Distraktoren sind falsch, weil [C] KI-Einsatz in jedem Arbeitsschritt bedeutet und nicht schon durch einzelne dokumentierte KI-Schritte ausgelöst wird.",
    "en": "AI use in individual defined steps with disclosure and a process log is exactly the definition of [B]; the aid-free oral checkpoint secures core skills and thus follows the [A] logic. The [C] distractors are wrong because [C] means AI use in every step of the work process and is not triggered by individual documented AI steps."
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
    "de": "Der Praktikumsbericht (Kategorie [B]) enthält einen verbindlichen AI-Reflection-Abschnitt. Ein Mitpraktikant lässt den gesamten Bericht inklusive Reflexionsteil von einer KI umstrukturieren und umschreiben und ergänzt am Ende nur den Satz «KI wurde unterstützend eingesetzt». Welche Anforderung der Kategorie [B] ist damit verletzt?",
    "en": "The internship report (category [B]) includes a mandatory AI reflection section. A fellow intern has an AI restructure and rewrite the entire report, including the reflection section, and merely adds the sentence 'AI was used to support this work' at the end. Which requirement of category [B] is violated?"
   },
   "a": [
    {
     "de": "Kategorie [B] erlaubt KI für einzelne definierte Arbeitsschritte und verlangt Disclosure mit Prozesslog; durchgängige Nutzung mit Pauschalvermerk erfüllt beide Bedingungen nicht.",
     "en": "Category [B] allows AI for individual defined work steps and requires disclosure with a process log; continuous use with a blanket note satisfies neither condition."
    },
    {
     "de": "Kategorie [B] beschränkt den KI-Einsatz auf die Datenauswertung und schliesst sprachliche Überarbeitung von Textprodukten aus; schon das Umformulieren verletzt den Rahmen.",
     "en": "Category [B] restricts AI use to data analysis and excludes linguistic revision of written products; even the rewording already breaches the framework."
    },
    {
     "de": "Kategorie [B] verlangt eine nachträgliche Bewilligung des KI-Einsatzes durch die Praktikumsstelle; der Verstoss liegt in der fehlenden schriftlichen Bestätigung der Betreuungsperson.",
     "en": "Category [B] requires retrospective approval of the AI use by the internship organisation; the breach lies in the missing written confirmation from the supervisor."
    },
    {
     "de": "Kategorie [B] ist eingehalten, denn der Vermerk am Ende gilt als Disclosure; problematisch würde der Einsatz erst, wenn die KI auch die Praxiserfahrungen selbst erfunden hätte.",
     "en": "Category [B] is complied with, since the note at the end counts as disclosure; the use would only become problematic if the AI had also invented the practical experiences."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "[B] bedeutet, dass einzelne definierte Schritte mit KI bearbeitet werden dürfen, verbunden mit Disclosure und Prozesslog; wer den ganzen Bericht durch KI umschreiben lässt und nur pauschal auf KI-Einsatz hinweist, verletzt beide Bedingungen zugleich. Der verführerischste Distraktor wertet den Pauschalvermerk als gültige Disclosure, doch ohne Prozesslog bleibt die Mensch-KI-Arbeitsteilung nicht nachvollziehbar und die Reflexionsleistung nicht prüfbar.",
    "en": "[B] means that individual defined steps may be done with AI, combined with disclosure and a process log; having the AI rewrite the entire report and adding only a blanket note violates both conditions at once. The most tempting distractor treats the blanket note as valid disclosure, but without a process log the human-AI division of labour remains untraceable and the reflective work cannot be assessed."
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
    "de": "Zur Vorbereitung lässt ein Student Copilot Chat drei kritische Fragen zum Abstract eines Gastvortrags generieren. Eine Frage moniert eloquent die fehlende Kontrollgruppe; der Methodenteil des Papers beschreibt jedoch eine randomisierte Kontrollbedingung. Was folgt daraus für den Umgang mit KI-generierter Kritik?",
    "en": "To prepare, a student has Copilot Chat generate three critical questions on the abstract of a guest lecture. One question eloquently criticises the missing control group; the paper's method section, however, describes a randomized control condition. What follows for handling AI-generated critique?"
   },
   "a": [
    {
     "de": "Die Frage bleibt berechtigt, weil die Kontrollbedingung im Abstract nicht erwähnt wird und Autorinnen zentrale Designmerkmale dort transparent machen müssen.",
     "en": "The question remains justified, because the control condition is not mentioned in the abstract and authors are expected to make key design features transparent there."
    },
    {
     "de": "Die Frage ist zu verwerfen, weil das Modell plausibel klingende Kritik ohne Kenntnis des Volltexts erzeugt und jeder Kritikpunkt an der Primärquelle geprüft werden muss.",
     "en": "The question must be discarded, because the model produces plausible-sounding critique without knowing the full text, and every point of critique must be checked against the primary source."
    },
    {
     "de": "Die Frage ist abzuschwächen und als offene Verständnisfrage zu stellen, weil so die Unsicherheit des Modells elegant an die Referentin weitergegeben werden kann.",
     "en": "The question should be softened and asked as an open comprehension question, because this elegantly passes the model's uncertainty on to the speaker."
    },
    {
     "de": "Die Frage zeigt eine Schwäche des Prompts, weil eine präzisere Rollenanweisung solche Fehler zuverlässig verhindert und die inhaltliche Prüfung dann entfallen kann.",
     "en": "The question reveals a weakness of the prompt, because a more precise role instruction reliably prevents such errors and makes the content check unnecessary."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "Sprachmodelle erzeugen flüssige, plausibel klingende Kritik, ohne den Volltext zu kennen; genau deshalb verlangt KI6 Evaluieren, dass jeder Kritikpunkt an der Primärquelle geprüft und eine faktisch widerlegte Frage verworfen wird. Der verführerischste Distraktor verschiebt die Verantwortung auf das Abstract, doch massgeblich für die Bewertung einer Studie ist der Methodenteil, nicht die Kurzzusammenfassung.",
    "en": "Language models produce fluent, plausible-sounding critique without knowing the full text; this is exactly why KI6 Evaluate requires that every point of critique be checked against the primary source and that a factually refuted question be discarded. The most tempting distractor shifts responsibility onto the abstract, but what counts for evaluating a study is the method section, not the summary."
   }
  },
  {
   "q": {
    "de": "Das Gästekolloquium ist mit der Prüfungslogik A+B ausgewiesen: KI-gestützte Vorbereitung, KI-freie Live-Diskussion. Eine Studentin fragt, ob sie während des Vortrags diskret ein KI-Tool zur Fragegenerierung nutzen darf, wenn sie es danach offenlegt. Welche Antwort entspricht der Prüfungslogik des Moduls?",
    "en": "The guest colloquium uses assessment logic A+B: AI-supported preparation, AI-free live discussion. A student asks whether she may discreetly use an AI tool to generate questions during the talk if she discloses it afterwards. Which answer matches the module's assessment logic?"
   },
   "a": [
    {
     "de": "Ja, denn die Offenlegung nach dem Vortrag erfüllt die Disclosure-Pflicht der Kategorie [B], die im gesamten Modul einschliesslich der Live-Situation gilt.",
     "en": "Yes, because disclosure after the talk fulfils the disclosure duty of category [B], which applies throughout the module including the live situation."
    },
    {
     "de": "Ja, denn die Kategorie [A] bezieht sich auf die Bewertung der schriftlichen Vorbereitung, während die Live-Diskussion als informeller Teil ausserhalb der Prüfungslogik steht.",
     "en": "Yes, because category [A] refers to grading the written preparation, while the live discussion is an informal part outside the assessment logic."
    },
    {
     "de": "Nein, denn die Live-Diskussion ist der [A]-Anteil des Moduls, der Zuhören, Denken und spontanes Fragen als Kernfertigkeiten ohne KI sichert; [B] gilt für die Vorbereitung.",
     "en": "No, because the live discussion is the module's [A] component, securing listening, thinking, and spontaneous questioning as AI-free core skills; [B] applies to the preparation."
    },
    {
     "de": "Nein, denn die Kombination A+B bedeutet, dass Studierende zu Semesterbeginn wählen, ob sie das gesamte Modul KI-frei oder durchgängig KI-integriert absolvieren.",
     "en": "No, because the combination A+B means students choose at the start of the semester whether to complete the whole module AI-free or fully AI-integrated."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Die Logik A+B trennt nach Phasen: Die Vorbereitung ist als [B] KI-integriert mit Disclosure und Prüfung der KI-Vorschläge, die Live-Diskussion ist der [A]-Anteil, der Zuhören, Denken und spontanes Fragen als Kernfertigkeiten ohne KI sichert. Der verführerischste Distraktor überdehnt die Disclosure-Logik von [B] auf die Live-Situation; Offenlegung ersetzt einen KI-freien Kontrollpunkt aber nicht.",
    "en": "The A+B logic separates by phase: preparation is AI-integrated as [B] with disclosure and checking of AI suggestions, while the live discussion is the [A] component that secures listening, thinking, and spontaneous questioning as AI-free core skills. The most tempting distractor stretches the disclosure logic of [B] into the live situation, but disclosure does not replace an AI-free checkpoint."
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
    "de": "Ein KI-Assistent fasst für Ihre Masterarbeit drei Studien zusammen; alle Angaben wirken plausibel und enthalten DOIs. Welche Verifikation entspricht dem Standard eines dokumentierten KI-Forschungsworkflows?",
    "en": "An AI assistant summarises three studies for your Master's thesis; everything looks plausible and includes DOIs. Which verification meets the standard of a documented AI research workflow?"
   },
   "a": [
    {
     "de": "Sie prüfen, ob alle DOIs auflösbar sind, denn existierende Kennungen belegen, dass auch die inhaltlichen Aussagen der Zusammenfassung stimmen.",
     "en": "You check whether all DOIs resolve, because existing identifiers prove that the substantive claims in the summary are accurate as well."
    },
    {
     "de": "Sie vergleichen die Zusammenfassung mit Ihrem Vorwissen und akzeptieren sie, wenn keine Aussage Ihrem bisherigen Literaturstand widerspricht.",
     "en": "You compare the summary with your prior knowledge and accept it if no statement contradicts your current reading of the literature."
    },
    {
     "de": "Sie lassen ein zweites KI-Modell die Zusammenfassung gegenprüfen, weil unabhängige Modelle dieselben Fehler nur sehr selten gemeinsam machen.",
     "en": "You have a second AI model cross-check the summary, because independent models very rarely make the same mistakes at the same time."
    },
    {
     "de": "Sie prüfen jede Quelle auf Existenz, lesen die Originalarbeiten, weil KI auch reale Studien inhaltlich falsch wiedergeben kann, und loggen die Prüfung.",
     "en": "You verify that each source exists, read the original papers, because AI can misrepresent even real studies, and log the checks."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Eine Existenzprüfung allein genügt nicht: Sprachmodelle erfinden nicht nur Referenzen, sie geben auch echte Studien inhaltlich verzerrt wieder, weshalb der Abgleich mit der Originalarbeit und die Dokumentation im Prozesslog nötig sind. Die verführerische DOI-Prüfung scheitert genau daran, dass eine auflösbare Kennung nichts über die korrekte Interpretation aussagt. Auch ein zweites KI-Modell kann dieselben systematischen Fehler machen.",
    "en": "Checking existence alone is not enough: language models not only invent references, they also distort the content of real studies, so claims must be checked against the original papers and the check documented in the process log. The tempting DOI check fails precisely because a resolvable identifier says nothing about correct interpretation. A second AI model can share the same systematic errors."
   }
  },
  {
   "q": {
    "de": "Ihre Masterarbeit läuft in der Prüfungskategorie [B] (teilweise KI-integriert). Sie nutzen KI für Skript-Review und Schreibfeedback. Welches Vorgehen entspricht der Kategorie [B]?",
    "en": "Your Master's thesis runs under assessment category [B] (partially AI-integrated). You use AI for script review and writing feedback. Which approach matches category [B]?"
   },
   "a": [
    {
     "de": "Sie deklarieren die KI-gestützten Schritte, halten sie im Prozesslog fest und verifizieren jeden Output fachlich, bevor er in die Arbeit einfliesst.",
     "en": "You declare the AI-supported steps, record them in the process log and verify every output professionally before it enters the thesis."
    },
    {
     "de": "Sie verzichten vollständig auf KI-Unterstützung, weil nur so die Kernfertigkeiten des wissenschaftlichen Arbeitens nachweisbar gesichert bleiben.",
     "en": "You forgo AI support entirely, because only this approach demonstrably safeguards the core skills of scholarly research work."
    },
    {
     "de": "Sie integrieren KI in jeden Arbeitsschritt der Pipeline und weisen das anspruchsvolle Newskilling im Umgang mit den Werkzeugen gesamthaft aus.",
     "en": "You integrate AI into every step of the pipeline and document the demanding newskilling in handling the tools as a whole."
    },
    {
     "de": "Sie nutzen KI frei für einzelne Schritte ohne gesonderte Deklaration, solange Sie alle Outputs sorgfältig kontrollieren und selbst verantworten.",
     "en": "You use AI freely for individual steps without separate disclosure, as long as you check all outputs carefully and take responsibility."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Kategorie [B] verlangt beides: Disclosure mit Prozesslog und fachliche Verifikation der einzelnen KI-Schritte. Der verführerischste Distraktor ist die sorgfältige Kontrolle ohne Deklaration, denn eigene Prüfung ersetzt die Transparenzpflicht nicht. Vollständiger KI-Verzicht entspricht Kategorie [A], KI in jedem Arbeitsschritt Kategorie [C].",
    "en": "Category [B] requires both: disclosure with a process log and professional verification of each AI-supported step. The most tempting distractor is careful checking without declaration, but diligence does not replace the transparency requirement. Working without AI corresponds to category [A], AI in every step to category [C]."
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
    "de": "Beim Data-Lifecycle-Plan Ihrer Interviewstudie überlegen Sie, welche Materialien in ein öffentliches Cloud-KI-Tool dürfen. Welche Entscheidung ist datenschutzrechtlich korrekt?",
    "en": "In the data lifecycle plan for your interview study you consider which materials may go into a public cloud AI tool. Which decision is correct under data protection law?"
   },
   "a": [
    {
     "de": "Transkripte mit identifizierenden Angaben bleiben aus dem Tool draussen; die KI unterstützt nur bei anonymisierten Auszügen oder beim Analyseskript.",
     "en": "Transcripts with identifying details stay out of the tool; the AI only assists with anonymised excerpts or with the analysis script."
    },
    {
     "de": "Pseudonymisierte Transkripte dürfen hochgeladen werden, weil ersetzte Namen den Personenbezug aufheben und die Daten damit als anonym gelten.",
     "en": "Pseudonymised transcripts may be uploaded, because replacing names removes the link to persons and the data then count as anonymous."
    },
    {
     "de": "Vollständige Transkripte dürfen hochgeladen werden, weil wissenschaftliche Forschung von den Vorgaben des Datenschutzrechts ausgenommen ist.",
     "en": "Complete transcripts may be uploaded, because scientific research is exempt from the requirements of data protection legislation."
    },
    {
     "de": "Sämtliche Transkripte dürfen hochgeladen werden, sofern der Anbieter vertraglich zusichert, die Daten nach dreissig Tagen automatisch zu löschen.",
     "en": "Any transcript may be uploaded, provided the provider contractually guarantees automatic deletion of the data after thirty days."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Pseudonymisierte Daten bleiben Personendaten, weil der Personenbezug mit Zusatzwissen wiederherstellbar ist; identifizierende Transkripte gehören darum nicht in öffentliche Cloud-Tools. Der verführerischste Distraktor ist die Pseudonymisierungsoption: Erst echte Anonymisierung hebt den Personenbezug auf. Auch vertragliche Löschzusagen machen eine unzulässige Bekanntgabe nicht rechtmässig.",
    "en": "Pseudonymised data remain personal data because identity can be restored with additional information; identifying transcripts therefore do not belong in public cloud tools. The most tempting distractor is the pseudonymisation option: only genuine anonymisation removes the link to persons. Contractual deletion promises do not make an impermissible disclosure lawful either."
   }
  },
  {
   "q": {
    "de": "In Ihrem AI Use Plan legen Sie Mensch-KI-Rollen fest. Welcher Eintrag setzt das Prinzip der menschlichen Letztverantwortung korrekt um?",
    "en": "In your AI Use Plan you define human-AI roles. Which entry correctly implements the principle of ultimate human responsibility?"
   },
   "a": [
    {
     "de": "Die KI übernimmt die Ergebnisinterpretation, weil sie im Vergleich zu Menschen objektiver urteilt und keine Erwartungseffekte einbringt.",
     "en": "The AI takes over the interpretation of results, because it judges more objectively than humans and introduces no expectancy effects."
    },
    {
     "de": "Die Letztverantwortung liegt bei der Betreuungsperson, weil sie den AI Use Plan geprüft und die geplanten KI-Schritte bewilligt hat.",
     "en": "Ultimate responsibility rests with the supervisor, because they reviewed the AI Use Plan and approved the planned AI steps."
    },
    {
     "de": "Die Verantwortung wird zwischen Studentin und Toolanbieter geteilt und im Plan festgehalten, weil beide zum Endergebnis beitragen.",
     "en": "Responsibility is shared between the student and the tool provider and recorded in the plan, because both contribute to the final result."
    },
    {
     "de": "Die KI schlägt Analysecode vor; die Studentin prüft jede Zeile, entscheidet über die Umsetzung und verantwortet die Interpretation selbst.",
     "en": "The AI proposes analysis code; the student reviews every line, decides on its use and takes responsibility for the interpretation herself."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Menschliche Letztverantwortung heisst: Die KI liefert Vorschläge, aber Prüfung, Entscheidung und Interpretation bleiben nachweisbar bei der Autorin. Der verführerischste Distraktor verlagert die Verantwortung auf die Betreuungsperson; deren Freigabe des Plans entbindet die Verfasserin jedoch nicht von der Verantwortung für Inhalte und KI-Outputs. Toolanbieter tragen keine wissenschaftliche Verantwortung.",
    "en": "Ultimate human responsibility means the AI supplies proposals while checking, deciding and interpreting demonstrably remain with the author. The most tempting distractor shifts responsibility to the supervisor, but approving the plan does not release the author from responsibility for content and AI outputs. Tool providers carry no scientific responsibility."
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
    "de": "Zur Vorbereitung lassen Sie eine KI Gutachterfragen zu Ihrem Exposé generieren. Welche Grenze dieser Review-Simulation müssen Sie bei der Vorbereitung einkalkulieren?",
    "en": "To prepare, you have an AI generate reviewer questions on your thesis proposal. Which limitation of this review simulation must you factor into your preparation?"
   },
   "a": [
    {
     "de": "Die KI stellt oft generische Standardfragen aus Trainingsmustern und kann spezifische Schwächen Ihres konkreten Designs übersehen.",
     "en": "The AI often poses generic standard questions drawn from training patterns and can overlook specific weaknesses of your concrete design."
    },
    {
     "de": "Die KI stellt systematisch strengere Fragen als menschliche Fachpersonen, weshalb die Simulation den Ernstfall deutlich überzeichnet.",
     "en": "The AI systematically asks harder questions than human experts, so the simulation clearly exaggerates what the real colloquium demands."
    },
    {
     "de": "Die KI kennt den aktuellen Forschungsstand Ihres Themas vollständig, formuliert die Fragen aber oft zu abstrakt für ein Kolloquium.",
     "en": "The AI knows the current state of research on your topic completely, but often phrases its questions too abstractly for a colloquium."
    },
    {
     "de": "Die KI beurteilt die Qualität Ihrer Probeantworten zuverlässig, weshalb Sie auf zusätzliches Feedback aus der Peergruppe verzichten können.",
     "en": "The AI judges the quality of your practice answers reliably, so you can do without additional feedback from your peer group."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Sprachmodelle generieren plausible, im Training häufige Reviewfragen und übersehen dabei leicht die spezifischen Schwachstellen eines konkreten Designs; die Simulation ergänzt Fachfeedback, ersetzt es aber nicht. Der verführerischste Distraktor ist die angeblich zuverlässige Antwortbeurteilung: Modelle neigen zu zustimmendem Feedback (Sycophancy) und sind als Qualitätsrichter nicht kalibriert. Zudem ist ihr Wissensstand begrenzt und nie vollständig aktuell.",
    "en": "Language models generate plausible review questions that are frequent in their training data and easily miss the specific weak points of a concrete design; the simulation complements expert feedback but does not replace it. The most tempting distractor is the supposedly reliable judging of answers: models tend towards agreeable feedback (sycophancy) and are not calibrated as quality judges. Their knowledge is also limited and never fully up to date."
   }
  },
  {
   "q": {
    "de": "Das Forschungskolloquium ist als KI-freier [A]-Kontrollpunkt angelegt, obwohl die Vorbereitung deklariert KI-gestützt sein darf. Welche Begründung trägt diese Prüfungslogik?",
    "en": "The research colloquium is designed as an AI-free [A] checkpoint, although preparation may be AI-supported with disclosure. Which rationale underpins this assessment logic?"
   },
   "a": [
    {
     "de": "Die Kategorie [A] gilt, weil KI-Einsatz in mündlichen Präsentationen an der Universität generell untersagt ist und hier nur umgesetzt wird.",
     "en": "Category [A] applies because using AI in oral presentations is generally prohibited at the university and is merely enforced here."
    },
    {
     "de": "Die Kategorie [A] gilt, weil sich KI-Werkzeuge in ein Live-Format technisch nicht einbinden lassen und die Regel dies bloss nachvollzieht.",
     "en": "Category [A] applies because AI tools cannot technically be embedded in a live format and the rule simply reflects this constraint."
    },
    {
     "de": "Die KI-freie Live-Verteidigung sichert, dass Design und Analyseplan wirklich durchdrungen sind; die deklarierte KI-Vorbereitung trainiert genau diese Fähigkeit.",
     "en": "The AI-free live defence verifies that design and analysis plan are genuinely understood; the disclosed AI preparation trains exactly this ability."
    },
    {
     "de": "Die KI-freie Verteidigung ist nötig, weil deklarierter KI-Einsatz in der Vorbereitung die Prüfungsleistung sonst verfälschen und entwerten würde.",
     "en": "The AI-free defence is necessary because disclosed AI use during preparation would otherwise distort and devalue the assessed performance."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Kategorie [A] sichert Kernfertigkeiten: In der Live-Situation zeigt sich ohne Werkzeuge, ob Fragestellung, Design und Analyseplan verstanden sind, während die deklarierte Review-Simulation vorher genau dieses Argumentieren trainiert. Der verführerischste Distraktor erklärt die KI-Vorbereitung zur unzulässigen Verfälschung; sie ist aber ausdrücklich erlaubt, solange sie deklariert wird. Ein generelles universitäres KI-Verbot existiert nicht.",
    "en": "Category [A] safeguards core skills: without tools, the live situation reveals whether research question, design and analysis plan are truly understood, while the disclosed review simulation trains exactly this kind of arguing beforehand. The most tempting distractor declares AI-supported preparation an inadmissible distortion, yet it is explicitly permitted as long as it is disclosed. A general university-wide AI ban does not exist."
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
    "de": "Die Masterarbeitsgruppe 2 läuft unter Prüfungslogik [B] (teilweise KI-integriert). Ein Student nutzt einen agentischen Workflow für wöchentliche Literaturupdates zu seiner Masterarbeit. Was verlangt [B] in dieser Situation konkret?",
    "en": "Master's Thesis Group 2 runs under assessment logic [B] (partially AI-integrated). A student uses an agentic workflow for weekly literature updates on his thesis. What exactly does [B] require in this situation?"
   },
   "a": [
    {
     "de": "Er muss den agentischen Workflow auf sämtliche Arbeitsschritte ausweiten und damit anspruchsvolles Newskilling im Umgang mit KI-Agenten nachweisen.",
     "en": "He must extend the agentic workflow to every step of his work and thereby demonstrate demanding newskilling in handling AI agents."
    },
    {
     "de": "Er legt die KI-gestützten Schritte offen, führt ein Prozesslog zu Konfiguration und Fehlerfällen und kann die zentralen Analyseentscheidungen selbst erklären.",
     "en": "He discloses the AI-supported steps, keeps a process log covering configuration and failure cases, and can explain the central analysis decisions himself."
    },
    {
     "de": "Er darf den Workflow nur für formale Korrekturen einsetzen, da Kernfertigkeiten in diesem Modul grundsätzlich ohne jede KI-Unterstützung gesichert werden.",
     "en": "He may use the workflow only for formal corrections, since core skills in this module are secured without any AI support as a matter of principle."
    },
    {
     "de": "Er darf den Workflow ohne besondere Dokumentation nutzen, solange die übernommenen Literaturangaben am Ende fachlich korrekt und vollständig zitiert sind.",
     "en": "He may use the workflow without special documentation as long as the adopted references turn out to be accurate and fully cited in the end."
    }
   ],
   "korrekt": 1,
   "erkl": {
    "de": "[B] bedeutet: Einzelne Schritte dürfen KI-gestützt sein, aber mit Disclosure und Prozesslog, und die fachliche Verantwortung samt Erklärungsfähigkeit bleibt bei der Person. Der verführerischste Distraktor ist die Nutzung ohne Dokumentation bei korrektem Endergebnis: [B] prüft gerade den Prozess, nicht nur das Produkt. Die Ausweitung auf alle Arbeitsschritte beschreibt die Logik [C], nicht [B].",
    "en": "[B] means individual steps may be AI-supported, but with disclosure and a process log, while professional responsibility and the ability to explain remain with the person. The most tempting distractor is undocumented use with a correct end product: [B] assesses precisely the process, not just the product. Extending AI to every step describes logic [C], not [B]."
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
    "de": "Ein Student wendet ein: Seine Masterarbeit sei unter [B] teilweise KI-gestützt entstanden, also sei es widersprüchlich, dass er im Kolloquium unter [A] KI-frei verteidigen müsse. Welche Antwort trifft die Funktion des [A]-Kontrollpunkts?",
    "en": "A student objects: his thesis was produced partially AI-supported under [B], so it seems contradictory that he must defend it AI-free under [A] in the colloquium. Which reply captures the function of the [A] checkpoint?"
   },
   "a": [
    {
     "de": "[A] sichert, dass Kernfertigkeiten wie Datenanalyse und kritisches Denken nachweislich ohne Werkzeug vorhanden sind, gerade weil der Entstehungsprozess KI-Schritte enthielt.",
     "en": "[A] ensures that core skills such as data analysis and critical thinking are demonstrably present without any tool, precisely because the production process included AI steps."
    },
    {
     "de": "[A] gilt hier, weil KI-Einsatz auf Stufe 4 des Studiengangs generell unzulässig ist und das Kolloquium diese Regel für die Masterarbeit konsequent durchsetzt.",
     "en": "[A] applies here because using AI at level 4 of the programme is generally prohibited and the colloquium consistently enforces this rule for the thesis."
    },
    {
     "de": "[A] verlangt, dass die KI-gestützten Schritte nachträglich aus dem Workflow der Masterarbeit entfernt und durch eigenständige Arbeit ersetzt werden.",
     "en": "[A] requires that the AI-supported steps be removed from the thesis workflow after the fact and replaced by the student's own independent work."
    },
    {
     "de": "[A] betrifft nur die Präsentationsform im Kolloquium; die fachliche Verteidigung der Analyseentscheidungen ist von der Prüfungslogik nicht erfasst.",
     "en": "[A] concerns only the form of presentation in the colloquium; the substantive defence of the analysis decisions is not covered by the assessment logic."
    }
   ],
   "korrekt": 0,
   "erkl": {
    "de": "Die Kombination ist gewollt: [B] erlaubt dokumentierte KI-Schritte im Prozess, der [A]-Kontrollpunkt prüft komplementär, ob die Person Analyse und Interpretation auch ohne Werkzeug versteht und verantworten kann. Der verführerischste Distraktor ist das generelle KI-Verbot auf Stufe 4: Es widerspricht der Modullogik, die KI-Nutzung ausdrücklich vorsieht, aber verifiziert. Ein nachträgliches Entfernen der KI-Schritte verlangt niemand, gefordert sind deren Offenlegung und Verifikation.",
    "en": "The combination is intentional: [B] permits documented AI steps in the process, while the [A] checkpoint complements this by verifying that the person understands and can take responsibility for analysis and interpretation without any tool. The most tempting distractor is a general AI ban at level 4: it contradicts the module logic, which explicitly allows AI use but verifies it. Nobody demands removing the AI steps retroactively; what is required is their disclosure and verification."
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
    "de": "Bei der Prüfungsvorbereitung liefert ein Sprachmodell eine flüssige Zusammenfassung Ihres Prüfungsgebiets mit tadellos formatierten Quellenangaben samt Autor, Jahr und DOI. Warum genügt diese formale Qualität nicht als Beleg für inhaltliche Verlässlichkeit?",
    "en": "While preparing for the exam, a language model delivers a fluent summary of your examination field with impeccably formatted references including author, year, and DOI. Why is this formal quality not sufficient evidence of substantive reliability?"
   },
   "a": [
    {
     "de": "Weil die Verlässlichkeit am Trainingsstichtag hängt; für Literatur, die vor diesem Stichtag erschienen ist, sind die generierten Angaben dagegen weitgehend belastbar.",
     "en": "Because reliability depends on the training cutoff; for literature published before that date, the generated references are, by contrast, largely dependable."
    },
    {
     "de": "Weil das Modell überwiegend Abstracts verarbeitet hat; die Kernaussagen stimmen dadurch meist, nur methodische Details müssen an den Volltexten geprüft werden.",
     "en": "Because the model mostly processed abstracts; the key claims are therefore usually right, and only methodological details need checking against full texts."
    },
    {
     "de": "Weil kommerzielle Modelle ihre Belege intern mit Zitationsdatenbanken abgleichen, dieser Abgleich aber bei selten zitierten Spezialarbeiten häufig scheitert.",
     "en": "Because commercial models match their references internally against citation databases, but this matching often fails for rarely cited specialised papers."
    },
    {
     "de": "Weil das Modell plausible Sprach- und Zitationsmuster erzeugt statt Quellen zu prüfen; auch formal korrekte Belege können erfunden sein oder die Quelle verfälscht wiedergeben.",
     "en": "Because the model produces plausible language and citation patterns instead of checking sources; even formally correct references can be fabricated or misrepresent the source."
    }
   ],
   "korrekt": 3,
   "erkl": {
    "de": "Sprachmodelle generieren Text nach Wahrscheinlichkeit, nicht nach Quellenlage: Autor, Jahr und DOI können perfekt formatiert und trotzdem erfunden sein, oder die zitierte Arbeit sagt etwas anderes; deshalb ist der Abgleich mit der Primärliteratur unverzichtbar. Der verführerischste Distraktor ist der Trainingsstichtag: Auch Angaben zu älterer, im Training enthaltener Literatur werden fabriziert oder verzerrt. Einen verlässlichen internen Datenbankabgleich gibt es bei reiner Textgenerierung nicht.",
    "en": "Language models generate text by probability, not by consulting sources: author, year, and DOI can be perfectly formatted yet invented, or the cited work may say something different, which makes checking against the primary literature indispensable. The most tempting distractor is the training cutoff: references to older literature contained in the training data are fabricated or distorted as well. A reliable internal database check does not exist in plain text generation."
   }
  },
  {
   "q": {
    "de": "In der Masterprüfung konfrontiert Sie die Prüferin mit einem KI-generierten Gegenargument gegen den zentralen Befund Ihres Prüfungsgebiets. Welches Verhalten zeigt die auf Stufe 4 geforderte professionelle Urteilskraft (Fu2, KI5/KI6)?",
    "en": "In the master's exam, the examiner confronts you with an AI-generated counterargument against the central finding of your examination field. Which behaviour demonstrates the professional judgement required at level 4 (Fu2, KI5/KI6)?"
   },
   "a": [
    {
     "de": "Sie weisen das Gegenargument zurück, weil KI-generierte Einwände in einer KI-freien [A]-Prüfung keinen fachlichen Status besitzen und nicht bewertet werden müssen.",
     "en": "You reject the counterargument because AI-generated objections have no scholarly standing in an AI-free [A] exam and do not need to be evaluated."
    },
    {
     "de": "Sie stimmen dem Gegenargument vorsorglich zu, weil das Modell auf mehr Literatur zugreifen konnte, als eine einzelne Person im Studium verarbeiten kann.",
     "en": "You concede to the counterargument as a precaution, because the model was able to draw on more literature than a single person can process during their studies."
    },
    {
     "de": "Sie prüfen das Gegenargument inhaltlich, erkennen tragfähige Teile an, widerlegen schwache Teile mit Evidenz und vertreten Ihre Position begründet weiter.",
     "en": "You examine the counterargument on its merits, acknowledge its sound parts, refute its weak parts with evidence, and continue to defend your position with reasons."
    },
    {
     "de": "Sie geben die Bewertung an die Prüferin zurück, weil die fachliche Letztverantwortung für KI-generierte Inhalte bei der Person liegt, die sie einbringt.",
     "en": "You hand the evaluation back to the examiner, because final professional responsibility for AI-generated content rests with the person who introduces it."
    }
   ],
   "korrekt": 2,
   "erkl": {
    "de": "Professionelle Urteilskraft heisst: Argumente zählen nach ihrem Gehalt, nicht nach ihrer Herkunft; wer differenziert anerkennt und widerlegt, zeigt Letztverantwortung und Evaluationskompetenz zugleich. Der verführerischste Distraktor ist die vorsorgliche Zustimmung: Breiter Literaturzugriff macht ein Argument nicht gültig, das wäre ein Autoritätsfehlschluss und genau das Persuasionsrisiko, das die Prüfung adressiert. Die pauschale Zurückweisung wegen der KI-Herkunft verwechselt die [A]-Regel für Hilfsmittel mit einem Urteil über Inhalte.",
    "en": "Professional judgement means arguments count by their substance, not their origin; acknowledging and refuting in a differentiated way demonstrates final responsibility and evaluation competence at once. The most tempting distractor is precautionary agreement: broad access to literature does not make an argument valid, which would be an appeal to authority and exactly the persuasion risk the exam addresses. Blanket rejection because of the AI origin confuses the [A] rule about tools with a judgement about content."
   }
  }
 ]
};
