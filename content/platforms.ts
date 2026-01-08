export type PlatformCategory = "Sales" | "Dialog" | "Leadership" | "Resilienz" | "Metakognition";
export type PlatformStatus = "live" | "coming_soon" | "beta";
export type PlatformSlug =
  | "salesfitness"
  | "dialogfitness"
  | "metakognitionen"
  | "resilienzfitness"
  | "leadershipfitness";

export type PlatformSection = {
  title: string;
  lead: string;
  items?: string[];
};

export type Platform = {
  slug: PlatformSlug;
  name: string;
  website: string;
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
    category: "Sales",
    status: "live",
    statusLabel: "Live",
    tagline: "Analysieren. Trainieren. Abschließen.",
    description:
      "SalesFitness unterstützt Vertriebsteams dabei, Gesprächsführung entlang klarer Phasen zu trainieren, Einwände souverän zu behandeln und Abschlüsse zu verbessern – mit Scores, Playbooks und Team-Analytics.",
    bullets: [
      "Phasen-Training (Discovery → Angebot → Einwand → Abschluss) mit Standards",
      "KI-Feedback mit konkreten Formulierungen & Verbesserungsvorschlägen",
      "Messbarkeit: Score-Tracking, Mastery-System, Team-Reports",
    ],
    audience: ["Sales", "Sales Enablement", "Coaches", "Führung"],
    sections: [
      {
        title: "Trainingsstationen",
        lead: "Micro-Skills für echte Verkaufsgespräche: strukturierte Übungssets mit KI-Dialogpartner.",
        items: ["Fragen & Bedarf", "Einwandbehandlung", "Klarheit & Nutzen", "Preisgespräche", "Abschluss-Techniken"],
      },
      {
        title: "Feedback & Analytics",
        lead: "Nicht nur üben, sondern verbessern: Scores, Muster-Erkennung, Empfehlungen und Team-Standards.",
        items: ["Score pro Skill", "Vorher/Nachher", "Coach-Notes", "Team-Heatmaps (optional)"],
      },
    ],
    seo: {
      title: "SalesFitness",
      description: "KI-gestützte Plattform für Sales-Training: Simulationen, Feedback, Scores & Playbooks für messbar bessere Verkaufsgespräche.",
    },
  },
  {
    slug: "dialogfitness",
    name: "DialogFitness",
    website: "https://dialogfitness.studio",
    category: "Dialog",
    status: "coming_soon",
    statusLabel: "Coming soon",
    tagline: "Aktives Zuhören trainieren. Besser verstehen.",
    description:
      "DialogFitness ist eine KI-Trainingsplattform für praxisnahe Gesprächsmodelle mit Echtzeit-Dialogpartnern. Fokus: Struktur, Empathie, klare Fragen und souveräne Reaktionen in herausfordernden Situationen.",
    bullets: [
      "Interaktive Szenarien & Dialog-Labs (z. B. Feedback, Konflikt, Kundengespräche)",
      "Wissenschaftliche Modelle (z. B. SBI/AID/Pendleton) als Trainingsrahmen",
      "Bewertung über mehrere Dimensionen (Struktur, Emotion, Lösungsorientierung)",
    ],
    audience: ["Führung", "HR", "Sales", "Kundenservice", "Teams"],
    sections: [
      {
        title: "Dialog-Labs & Szenarien",
        lead: "Realistische Gesprächssituationen – üben statt nur lesen.",
        items: ["Feedbackgespräche", "Kritische Kundensituationen", "Konflikt- & Klärungsgespräche", "Team-Abstimmungen"],
      },
      {
        title: "Modelle & Kriterien",
        lead: "Trainieren entlang klarer Strukturen – und sehen, was besser wird.",
        items: ["SBI, AID, Pendleton", "Klarheit, Empathie, Sicherheit", "Lösungs- und Zielorientierung"],
      },
    ],
    seo: {
      title: "DialogFitness",
      description: "KI-Trainingsplattform für Gesprächsführung: Dialogsimulationen, Feedbackmodelle und messbarer Fortschritt für Teams, Führung und Service.",
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
    tagline: "Resilienz im Arbeitsalltag stärken.",
    description:
      "ResilienzFitness bietet Resilienz-Training mit Modulen, Übungen, KI-Coaching-Tools und Assessments. Fokus: Selbstregulation, mentale Flexibilität, gesunde Routinen – mit klarer Safety-Abgrenzung.",
    bullets: [
      "Module & Übungen (z. B. Stressregulation, Ressourcen, Routinen)",
      "Validierte Assessments & Fortschrittslogik",
      "Safety: klare Grenzen, Hinweise, Eskalationspfade",
    ],
    audience: ["Teams", "HR", "Leadership", "Gesundheitsprogramme"],
    sections: [
      {
        title: "Module & Übungen",
        lead: "Kompakte Einheiten – ideal für den Arbeitsalltag.",
        items: ["Grundlagen der Resilienz", "Stress & Regulation", "Ressourcenarbeit", "Routinen & Schlaf", "Umgang mit Rückschlägen"],
      },
      {
        title: "Assessments & Safety",
        lead: "Seriös und verantwortungsvoll: messen, begleiten, abgrenzen.",
        items: ["Selbsteinschätzungen", "Hinweise bei Belastung", "Ressourcen- & Hilfe-Links"],
      },
    ],
    seo: {
      title: "ResilienzFitness",
      description: "Resilienz-Trainingsplattform mit Übungen, Modulen, KI-Tools und Assessments – für Stressregulation und mentale Stärke im Arbeitsalltag.",
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
];

export const platformsBySlug = Object.fromEntries(platforms.map((p) => [p.slug, p])) as Record<PlatformSlug, Platform>;
