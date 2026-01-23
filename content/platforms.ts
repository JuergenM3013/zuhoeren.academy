export type PlatformCategory = "Sales" | "Dialog" | "Leadership" | "Resilienz" | "Metakognition" | "Assessment" | "Fragetechnik" | "Konflikt";
export type PlatformStatus = "live" | "coming_soon" | "beta";
export type PlatformSlug =
  | "salesfitness"
  | "dialogfitness"
  | "metakognitionen"
  | "resilienzfitness"
  | "leadershipfitness"
  | "fragenkatalog"
  | "telefonkompetenz"
  | "konfliktloesung";

export type PlatformSection = {
  title: string;
  lead: string;
  items?: string[];
};

export type Platform = {
  slug: PlatformSlug;
  name: string;
  website: string;
  internalUrl?: string; // Link zur internen Unterseite
  category: PlatformCategory;
  status: PlatformStatus;
  statusLabel: string;
  tagline: string;
  description: string;
  bullets: string[];
  audience: string[];
  sections: PlatformSection[];
  seo: { title: string; description: string };
};

export const platforms: Platform[] = [
  {
    slug: "salesfitness",
    name: "SalesFitness",
    website: "https://salesfitness.studio",
    internalUrl: "/salesfitness",
    category: "Sales",
    status: "live",
    statusLabel: "Live",
    tagline: "Gespräche, die wirken. KI-gestütztes Training für bessere Kommunikation.",
    description:
      "Trainieren Sie realistische Gesprächssituationen mit KI – ohne Risiko, mit sofortigem Feedback. Ob Führungsgespräch, Patientenkommunikation oder Kundenberatung: Üben Sie jede schwierige Situation vorab, so oft Sie wollen.",
    bullets: [
      "Realistische KI-Gesprächspartner, die wie echte Menschen reagieren",
      "Sofortiges Experten-Feedback nach jedem Gespräch",
      "Individuelles Training basierend auf Ihren echten Herausforderungen",
      "Messbare Verbesserung: Fortschritts-Tracking und Team-Analytics",
    ],
    audience: ["Führungskräfte", "Medizinisches Personal", "Kundenservice", "Key Account Manager"],
    sections: [
      {
        title: "Für Führungskräfte",
        lead: "Führen heißt kommunizieren. Kommunizieren kann man lernen.",
        items: ["Mitarbeitergespräche: Vom Feedback bis zur Kündigung", "Konflikte im Team: Mediationstechniken trainieren", "Veränderungen kommunizieren: Widerstand simulieren", "30% weniger Zeit in eskalierten Gesprächen"],
      },
      {
        title: "Für Medizinisches Personal",
        lead: "Empathie unter Zeitdruck – trainierbar.",
        items: ["Schwierige Diagnosen einfühlsam übermitteln", "Angehörigengespräche professionell führen", "Compliance durch bessere Kommunikation erhöhen", "Weniger Stress durch mehr Sicherheit"],
      },
      {
        title: "Für Kundenservice",
        lead: "Aus Beschwerden werden Chancen.",
        items: ["Eskalationen deeskalieren lernen", "Einwände souverän behandeln", "Erstlösungsquote steigern", "NPS durch bessere Gespräche verbessern"],
      },
      {
        title: "Für Key Account Manager",
        lead: "Verhandeln auf Augenhöhe.",
        items: ["Preisverhandlungen simulieren und perfektionieren", "Einwände vorwegnehmen und entkräften", "Abschlussquoten messbar steigern", "Komplexe Deals sicher zum Abschluss bringen"],
      },
    ],
    seo: {
      title: "SalesFitness – KI-gestütztes Kommunikationstraining",
      description: "Trainieren Sie Gespräche mit KI: Führungsgespräche, Patientenkommunikation, Kundenberatung. Realistische Simulationen, sofortiges Feedback, messbare Verbesserung.",
    },
  },
  {
    slug: "dialogfitness",
    name: "DialogFitness",
    website: "https://dialogfitness.studio",
    internalUrl: "/dialogfitness",
    category: "Dialog",
    status: "coming_soon",
    statusLabel: "Coming soon",
    tagline: "Bessere Gespräche. Stärkere Beziehungen. Messbarer Erfolg.",
    description:
      "Trainieren Sie Ihre Kommunikationskompetenz mit KI-gestützten Dialogsimulationen – jederzeit, überall und ohne Risiko. Realistische KI-Gesprächspartner reagieren wie echte Menschen, mit Emotionen und Widerstand.",
    bullets: [
      "Realistische KI-Personas mit authentischen Reaktionen und Widerstand",
      "Personalisierte Szenarien basierend auf Ihrer Branche und Rolle",
      "Wissenschaftlich fundiert: MI, Carl Rogers, GFK, SBI-Feedback",
      "Sofortiges, konstruktives Feedback zu Empathie und Struktur",
    ],
    audience: ["Führungskräfte", "Medizinisches Personal", "Kundenservice", "Key Account Manager"],
    sections: [
      {
        title: "5 Trainingsmodule",
        lead: "Strukturierte Module für alle Gesprächsherausforderungen.",
        items: ["Feedback-Training: Konstruktives Feedback geben und annehmen", "Schwierige Gespräche: Konflikte, Kritik, emotionale Situationen", "Aktives Zuhören: Zuhörtechniken und Empathie trainieren", "MI-Training: Motivational Interviewing Techniken", "Feedback empfangen: Kritik professionell annehmen"],
      },
      {
        title: "Premium: Dialogcoaching",
        lead: "Maximale Relevanz durch persönliche Anpassung.",
        items: ["Persönliches Berufsprofil erstellen", "KI-generierte Szenarien aus Ihrer Branche", "Personas Ihrer typischen Gesprächspartner", "Adaptive Schwierigkeitsgrade"],
      },
    ],
    seo: {
      title: "DialogFitness – KI-gestützte Dialogsimulationen",
      description: "Trainieren Sie Kommunikationskompetenz mit KI-Dialogsimulationen. Realistische Szenarien, sofortiges Feedback, messbarer Fortschritt für Führungskräfte, Medizin und Service.",
    },
  },
  {
    slug: "metakognitionen",
    name: "Metakognitionen.at",
    website: "https://metakognitionen.at",
    category: "Metakognition",
    status: "coming_soon",
    statusLabel: "Coming soon",
    tagline: "Besser denken, besser entscheiden.",
    description:
      "Metakognitionen.at ist eine Lernplattform, die metakognitive Kompetenzen stärkt: Reflexion, Denkfehler vermeiden und Entscheidungen verbessern – mit interaktiven KI-Labs und strukturierten Modulen.",
    bullets: [
      "Interaktive Labs zu Denkfallen, Perspektivenwechsel und Entscheidungsqualität",
      "Strukturierte Lernmodule statt lose Tipps",
      "Transfer in den Alltag über konkrete Aufgaben & Reflexionsimpulse",
    ],
    audience: ["Leadership", "Projektleitung", "HR/L&D", "Wissensarbeit"],
    sections: [
      {
        title: "KI-Labs",
        lead: "Interaktive Übungen mit Leitfragen – für echte Aha-Momente und klarere Entscheidungen.",
        items: ["Denkfehler & Bias", "Reframing", "Priorisierung", "Entscheidungslogik"],
      },
      {
        title: "Transfer",
        lead: "Vom Insight zur Anwendung: kurze Aufgaben, die Verhalten verändern.",
        items: ["Reflexionsprompts", "Mini-Experimente", "Review-Routinen"],
      },
    ],
    seo: {
      title: "Metakognitionen.at",
      description: "KI-gestützte Lernplattform für Metakognition: Denkfallen erkennen, Reflexion stärken und Entscheidungsqualität verbessern.",
    },
  },
  {
    slug: "resilienzfitness",
    name: "ResilienzFitness",
    website: "https://resilienzfitness.studio",
    category: "Resilienz",
    status: "coming_soon",
    statusLabel: "Coming soon",
    tagline: "Stärken Sie die Widerstandskraft Ihrer Teams – wissenschaftlich fundiert.",
    description:
      "Die Resilienz-App macht wissenschaftlich fundiertes Resilienz-Training zugänglich – genau dann, wenn es gebraucht wird. 9 Lernmodule, 6 KI-Coaching-Tools, Stimmungsbarometer und Mikro-Workouts für den Arbeitsalltag.",
    bullets: [
      "9 wissenschaftlich fundierte Lernmodule zu allen Resilienz-Faktoren",
      "6 KI-gestützte Coaching-Tools: Resilienz-Coach, Emotions-Navigator, Perspektiven-Wechsler",
      "Persönliches Stimmungsbarometer mit KI-Empfehlungen",
      "Mikro-Workouts: Atemtechniken & Achtsamkeitsübungen",
    ],
    audience: ["Führungskräfte", "Medizinisches Personal", "Kundenservice", "Key Account Manager"],
    sections: [
      {
        title: "KI-Coaching-Tools",
        lead: "Persönliche Unterstützung durch spezialisierte KI-Coaches – verfügbar 24/7.",
        items: ["Resilienz-Coach: Persönliche Begleitung bei Herausforderungen", "Stresstest-Simulator: Sicheres Üben von Stresssituationen", "Emotions-Navigator: Gefühle verstehen und regulieren", "Perspektiven-Wechsler: Neue Sichtweisen entwickeln", "Ressourcen-Finder: Eigene Stärken entdecken"],
      },
      {
        title: "Module & Übungen",
        lead: "Strukturiertes Wissen zu allen Resilienz-Faktoren.",
        items: ["Stressbewältigung & Regulation", "Krisenwachstum & Ressourcenarbeit", "Reflexions-Journal mit bewährten Methoden", "Mikro-Workouts für zwischendurch"],
      },
    ],
    seo: {
      title: "ResilienzFitness – KI-gestützte Resilienz-App",
      description: "Wissenschaftlich fundiertes Resilienz-Training: 9 Module, 6 KI-Coaching-Tools, Stimmungsbarometer und Mikro-Workouts für mentale Stärke im Arbeitsalltag.",
    },
  },
  {
    slug: "leadershipfitness",
    name: "LeadershipFitness",
    website: "https://leadershipfitness.studio",
    category: "Leadership",
    status: "coming_soon",
    statusLabel: "Coming soon",
    tagline: "Leadership als Skill trainieren.",
    description:
      "LeadershipFitness fokussiert auf moderne Führungskompetenzen: System 1/2, Emotionale Intelligenz, psychologische Sicherheit und praxistaugliche Gesprächs- & Entscheidungsroutinen – personalisiert und messbar.",
    bullets: [
      "Wissenschaftlich fundiert (Kahneman, Goleman, Edmondson, Transaktionsanalyse)",
      "Transfer-fokussiert: 48h-Challenges sichern Umsetzung im Alltag",
      "Messbar: Score-Tracking, Mastery-System und Team-Analytics",
    ],
    audience: ["Führungskräfte", "HR", "Projektleitung", "Coaches"],
    sections: [
      {
        title: "Trainingsstationen",
        lead: "Führungs-Micro-Skills als Stationen: üben, reflektieren, verbessern.",
        items: ["Kommunikation & Klarheit", "Coaching/Feedback", "Konfliktfähigkeit", "Team Health", "Ethik & Entscheidung"],
      },
      {
        title: "Assessments",
        lead: "Selbsteinschätzungen als Startpunkt – und zur Fortschrittsmessung.",
        items: ["Führungsstil", "Sicherheitsklima", "Entscheidungsroutinen"],
      },
    ],
    seo: {
      title: "LeadershipFitness",
      description: "KI-gestützte Leadership-Plattform: Trainingsstationen, Feedback, Transfer-Challenges und messbarer Fortschritt für moderne Führung.",
    },
  },
  {
    slug: "fragenkatalog",
    name: "Fragenkatalog.at",
    website: "https://fragenkatalog.at",
    category: "Fragetechnik",
    status: "coming_soon",
    statusLabel: "Coming soon",
    tagline: "Die richtigen Fragen öffnen Türen.",
    description:
      "Die KI-gestützte Trainingsplattform für Fragetechniken. Lernen Sie die Fragetechniken, die echte Ergebnisse liefern – für Führungskräfte, medizinisches Fachpersonal, Kundenservice und Key Account Manager.",
    bullets: [
      "Kompakte Module zu allen wichtigen Fragetechniken",
      "KI-Training mit sofortigem, detailliertem Feedback",
      "Interaktive Rollenspiele mit realistischen KI-Personas",
      "Q-CORE Framework: Die wissenschaftliche Basis für wirksame Fragen",
      "Gesprächstranskript-Analyse zur Verbesserung Ihrer Fragetechnik",
    ],
    audience: ["Führungskräfte", "Medizinisches Personal", "Kundenservice", "Key Account Manager"],
    sections: [
      {
        title: "So funktioniert es",
        lead: "5 Schritte zu besseren Fragen.",
        items: ["Lernen: Verstehen Sie die Theorie der Fragetechniken", "Trainieren: Üben Sie mit KI-Feedback zu realistischen Szenarien", "Simulieren: Testen Sie im Rollenspiel mit KI-Personas", "Analysieren: Laden Sie Transkripte hoch zur KI-Analyse", "Sammeln: Bauen Sie Ihr persönliches Fragen-Playbook auf"],
      },
      {
        title: "Q-CORE Framework",
        lead: "Die wissenschaftliche Basis für wirksame Fragen.",
        items: ["Zielklarheit: Die Frage hat ein klares Ziel", "Offenheit: Die Frage regt zum Nachdenken an", "Neutralität: Die Frage ist nicht wertend", "Beziehung: Die Frage stärkt die Verbindung", "Tiefe: Die Frage geht unter die Oberfläche"],
      },
    ],
    seo: {
      title: "Fragenkatalog.at – KI-gestützte Fragetechnik-Plattform",
      description: "Meistern Sie die Kunst der Gesprächsführung: KI-Training für Fragetechniken, Rollenspiele mit KI-Personas und das Q-CORE Framework für wirksame Fragen.",
    },
  },
  {
    slug: "telefonkompetenz",
    name: "Telefonkompetenz",
    website: "https://telefonkompetenz.ai",
    category: "Assessment",
    status: "coming_soon",
    statusLabel: "Coming soon",
    tagline: "Erkennen Sie in 20 Minuten, wer Ihre Kunden begeistern wird.",
    description:
      "Das KI-gestützte Assessment für Telefonkompetenz bei der Personalauswahl. Objektiv, effizient, treffsicher. Reduzieren Sie Fehlbesetzungen um bis zu 40% mit realistischen Gesprächssimulationen.",
    bullets: [
      "20-minütiges Assessment mit echten Gesprächssituationen",
      "KI-Analyse: Objektive Bewertung ohne Bias",
      "Sofort-Reports mit Stärken-Schwächen-Profil",
      "Flexibles Branding: Ihr Logo, Ihre Farben",
      "87% weniger Zeitaufwand in der Vorauswahl",
    ],
    audience: ["HR-Führungskräfte", "Vertriebsleiter", "Contact-Center-Manager"],
    sections: [
      {
        title: "In 3 Schritten zur Entscheidung",
        lead: "Schnell, objektiv und fundiert.",
        items: ["Kandidat erhält Einladung per Link – ohne Login oder App", "Realitätsnahe 20-Min-Simulation mit echten Gesprächssituationen", "KI-Analyse & Report: Bewertung, Stärken-Schwächen-Profil, Empfehlung"],
      },
      {
        title: "Ihre Vorteile",
        lead: "Messbare Ergebnisse für bessere Entscheidungen.",
        items: ["40% geringere Fehlbesetzungsquote", "3x schnellere Besetzung offener Stellen", "92% Kandidaten-Zufriedenheit mit dem Assessment", "Standardisierte, dokumentierte Auswahlkriterien"],
      },
    ],
    seo: {
      title: "Telefonkompetenz – KI-gestütztes Assessment für Personalauswahl",
      description: "Erkennen Sie in 20 Minuten, wer Ihre Kunden begeistern wird. KI-Assessment für Telefonkompetenz: Objektiv, effizient, 40% weniger Fehlbesetzungen.",
    },
  },
  {
    slug: "konfliktloesung",
    name: "Konfliktlösung.studio",
    website: "https://konfliktloesung.studio",
    category: "Konflikt",
    status: "coming_soon",
    statusLabel: "Coming soon",
    tagline: "Konflikte lösen, bevor sie eskalieren.",
    description:
      "KI-gestütztes Training für konstruktive Konfliktlösung. Simulieren Sie schwierige Gespräche, üben Sie Deeskalation und entwickeln Sie nachhaltige Lösungsstrategien – in sicherer Umgebung.",
    bullets: [
      "Realistische Konfliktsimulationen mit KI-Gesprächspartnern",
      "Deeskalationstechniken trainieren und anwenden",
      "Mediation und Verhandlung in simulierter Praxis üben",
      "Sofortiges Feedback zu Kommunikationsmuster und Wirkung",
    ],
    audience: ["Führungskräfte", "HR", "Mediatoren", "Teamleiter"],
    sections: [
      {
        title: "Konfliktarten trainieren",
        lead: "Von Sachkonflikten bis zu Beziehungskonflikten – für jede Situation vorbereitet.",
        items: ["Sachkonflikte: Ressourcen, Prozesse, Entscheidungen", "Beziehungskonflikte: Teamdynamik, Kommunikation", "Wertekonflikte: Unterschiedliche Perspektiven integrieren", "Rollenkonflikte: Erwartungen klären und aushandeln"],
      },
      {
        title: "Methoden & Techniken",
        lead: "Wissenschaftlich fundierte Ansätze für nachhaltige Lösungen.",
        items: ["Harvard-Methode: Interessen statt Positionen", "Gewaltfreie Kommunikation (GFK)", "Aktives Zuhören und Spiegeln", "BATNA-Analyse für Verhandlungen"],
      },
    ],
    seo: {
      title: "Konfliktlösung.studio – KI-gestütztes Konflikttraining",
      description: "Trainieren Sie Konfliktlösung mit KI: Deeskalation, Mediation und konstruktive Gespräche üben. Realistische Simulationen, sofortiges Feedback.",
    },
  },
];

export const platformsBySlug = Object.fromEntries(platforms.map((p) => [p.slug, p])) as Record<PlatformSlug, Platform>;
