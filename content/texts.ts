/**
 * Alle Texte & Farben der Website zentral verwaltet
 * Hier kannst du alle Texte und Farben einfach ändern, ohne den Code anzufassen.
 */

// ============================================
// FARB-KONFIGURATION
// ============================================
export const colors = {
  // Primärfarben für Kategorien/Plattformen
  categories: {
    Sales: {
      label: "violet",
      tag: "bg-violet-500/10 border-violet-500/30 text-violet-300",
      gradient: "from-violet-600/10",
      dot: "bg-violet-400",
      text: "text-violet-400",
      border: "border-violet-500/30",
      bg: "bg-violet-500/10",
    },
    Dialog: {
      label: "emerald",
      tag: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
      gradient: "from-emerald-600/10",
      dot: "bg-emerald-400",
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
    },
    Leadership: {
      label: "amber",
      tag: "bg-amber-500/10 border-amber-500/30 text-amber-300",
      gradient: "from-amber-600/10",
      dot: "bg-amber-400",
      text: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-500/10",
    },
    Resilienz: {
      label: "rose",
      tag: "bg-rose-500/10 border-rose-500/30 text-rose-300",
      gradient: "from-rose-600/10",
      dot: "bg-rose-400",
      text: "text-rose-400",
      border: "border-rose-500/30",
      bg: "bg-rose-500/10",
    },
    Metakognition: {
      label: "cyan",
      tag: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
      gradient: "from-cyan-600/10",
      dot: "bg-cyan-400",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/10",
    },
  },

  // Sektionsfarben (Label-Farben)
  sections: {
    hero: "text-white/80",
    products: "text-violet-400",
    stations: "text-emerald-400",
    gymStandards: "text-white/60",
    trainingPlan: "text-amber-400",
    useCases: "text-rose-400",
    about: "text-emerald-400",
    faq: "text-cyan-400",
    contact: "text-violet-400",
  },

  // Trainingsplan-Schritte
  trainingSteps: {
    warmup: "bg-amber-500/10 border-amber-500/30",
    workout: "bg-violet-500/10 border-violet-500/30",
    cooldown: "bg-emerald-500/10 border-emerald-500/30",
  },

  // Standards Badges
  badges: {
    dsgvo: "text-violet-400",
    euServer: "text-emerald-400",
    b2b: "text-amber-400",
    alltime: "text-rose-400",
  },

  // Allgemeine UI-Farben
  ui: {
    cardBorder: "border-white/10",
    cardBg: "bg-white/5",
    cardHover: "hover:bg-white/10",
    textPrimary: "text-white",
    textSecondary: "text-white/70",
    textMuted: "text-white/60",
    ctaPrimary: "bg-violet-600 hover:bg-violet-500",
    ctaSecondary: "border-white/15 bg-white/5 hover:bg-white/10",
  },
};

export const texts = {
  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    pill: "KI-gestütztes Kommunikationstraining",
    headline: "Verbessere Gespräche mit KI-gestütztem Training",
    subheadline: "Sales. Leadership. Dialog. Resilienz. Denken. – Alles trainierbar.",
    description: "Praxisnahe Übungen mit KI-Feedback machen Soft Skills messbar. Starte jetzt mit SalesFitness – weitere Plattformen folgen.",
    ctaPrimary: "Plattformen entdecken",
    ctaSecondary: "So funktioniert's",
    features: [
      "Sofort-Feedback nach jeder Übung",
      "Risikofrei üben",
      "Fortschritt messbar machen",
    ],
    trustBadges: [
      "DSGVO-konform",
      "Made in Austria",
      "EU-Datenverarbeitung",
    ],
    stats: [
      { value: "5", label: "Plattformen" },
      { value: "100+", label: "Übungen" },
      { value: "3", label: "Level pro Skill" },
      { value: "24/7", label: "Verfügbar" },
    ],
  },

  // ============================================
  // PLATTFORMEN (Produkte)
  // ============================================
  products: {
    sectionLabel: "Unsere Plattformen",
    headline: "5 spezialisierte Trainingsplattformen",
    description: "Jede Plattform fokussiert einen Bereich der Kommunikation. SalesFitness ist live – weitere folgen.",
    ctaLabel: "Mehr erfahren",
  },

  // ============================================
  // MODULE (Produkt-Details)
  // ============================================
  stations: {
    sectionLabel: "Deep Dive",
    headline: "Module im Detail",
    description: "Jede Plattform bietet spezialisierte Übungsmodule mit KI-Feedback.",
    visitLabel: "besuchen →",
  },

  // ============================================
  // STANDARDS (Social Proof)
  // ============================================
  gymStandards: {
    sectionLabel: "Standards",
    headline: "Professionelle Infrastruktur für professionelle Teams",
    description: "Unsere Plattformen erfüllen höchste Standards – bei Datenschutz, Qualität und Verfügbarkeit.",
    badges: [
      { emoji: "🔒", title: "DSGVO", subtitle: "100% konform" },
      { emoji: "🇪🇺", title: "EU-Server", subtitle: "Deine Daten bleiben hier" },
      { emoji: "🏢", title: "B2B-Ready", subtitle: "Enterprise-Features" },
      { emoji: "⏰", title: "24/7", subtitle: "Immer verfügbar" },
    ],
  },

  // ============================================
  // ABLAUF (Wie es funktioniert)
  // ============================================
  trainingPlan: {
    sectionLabel: "So funktioniert es",
    headline: "Der Trainingsablauf",
    description: "Strukturiert in Einstieg, Simulation und Feedback. Jede Session bringt dich weiter.",
    steps: [
      {
        title: "Einstieg",
        description: "Wähle Plattform und Szenario. Die KI passt sich deinem Level an.",
        emoji: "🎯",
      },
      {
        title: "Simulation",
        description: "Übe im Dialog mit dem KI-Partner. Sprich, reagiere, verbessere – in Echtzeit.",
        emoji: "💬",
      },
      {
        title: "Feedback",
        description: "Erhalte detailliertes Feedback, tracke deinen Score und plane die nächste Session.",
        emoji: "📊",
      },
    ],
    philosophy: [
      {
        emoji: "🎓",
        title: "Lernphilosophie trifft KI",
        description: "Wiederholung schafft Meisterschaft. Unsere KI begleitet dich als Coach – sie korrigiert, motiviert und misst deinen Fortschritt.",
      },
      {
        emoji: "📈",
        title: "Messbare Fortschritte",
        description: "Scores, Level, Fortschrittskurven: Du siehst genau, wo du stehst und wie du dich verbesserst. Keine vagen Gefühle – sondern klare Daten.",
      },
    ],
  },

  // ============================================
  // ZIELGRUPPEN (Use Cases)
  // ============================================
  useCases: {
    sectionLabel: "Für wen?",
    headline: "Dein Ziel bestimmt die Plattform",
    description: "Verschiedene Rollen, unterschiedliche Gesprächsziele. Finde deine Plattform.",
    cases: [
      {
        title: "Sales & Vertrieb",
        description: "Abschlusskompetenz ausbauen: Pipeline, Einwände, Closing.",
        platform: "SalesFitness (Live)",
        emoji: "🎯",
      },
      {
        title: "Führungskräfte",
        description: "Leadership-Kompetenz entwickeln: Feedback, Sicherheit, Klarheit.",
        platform: "LeadershipFitness (Coming soon)",
        emoji: "👔",
      },
      {
        title: "HR & People",
        description: "Dialogkompetenz stärken: Onboarding, Kultur, Konflikte.",
        platform: "DialogFitness (Coming soon)",
        emoji: "🤝",
      },
      {
        title: "Kundenservice",
        description: "Empathie und Souveränität stärken: Zuhören, Lösen, Deeskalieren.",
        platform: "DialogFitness (Coming soon)",
        emoji: "💬",
      },
      {
        title: "Coaches & Trainer",
        description: "Skalierbare Trainingsformate entwickeln: Messen, Begleiten, Transferieren.",
        platform: "Alle Plattformen",
        emoji: "🎓",
      },
      {
        title: "Wissensarbeiter",
        description: "Denkkompetenz stärken: Bias vermeiden, klar entscheiden.",
        platform: "Metakognitionen.at (Coming soon)",
        emoji: "🧠",
      },
    ],
  },

  // ============================================
  // ÜBER UNS
  // ============================================
  about: {
    sectionLabel: "Der Gründer",
    headline: "KI als Coach – nicht als Ersatz für Menschen",
    description: "Die Plattform und der KI-Coach unterstützen dich – aber die Arbeit machst du. Unsere KI korrigiert, motiviert und misst. Echte Gespräche führst du selbst.",
    founder: {
      name: "Jürgen Melmuka",
      role: "Gründer & Head of Training",
      emoji: "🎓",
      linkedin: "https://www.linkedin.com/in/juergenmelmuka/",
      website: "https://zuhoerakademie.at/",
    },
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    sectionLabel: "Häufige Fragen",
    headline: "Guide für Einsteiger",
    description: "Alles, was du vor dem Start wissen solltest.",
    questions: [
      {
        q: "Ist das eine Trainingsplattform oder Software?",
        a: "Beides in einem: Trainingsmodule (Übungen, Simulationen) + Tracking-Software (Scores, Fortschritt, Reports). Eine moderne Lernplattform mit KI-Unterstützung.",
      },
      {
        q: "Für welche Teams ist die Plattform gemacht?",
        a: "B2B-Teams (10–500 Personen). Ideal für Sales, Leadership, HR – überall wo viele Gespräche geführt werden.",
      },
      {
        q: "Kann ich eigene Trainingspläne erstellen?",
        a: "Ja – Playbook-Abgleich und individuelle Szenarien sind Kernfeatures. Im Pilotprojekt klären wir deine Anforderungen.",
      },
      {
        q: "Wie starte ich am schnellsten?",
        a: "Mit einem Pilotprojekt: Demo ansehen, 2–4 Wochen testen, dann entscheiden. Kein Abo-Zwang.",
      },
      {
        q: "Wie funktioniert der KI-Coach?",
        a: "Er analysiert deine Gespräche, gibt Echtzeit-Feedback und schlägt konkrete Verbesserungen vor. Wie ein Personal Trainer für Kommunikation.",
      },
      {
        q: "Ist die Plattform DSGVO-konform?",
        a: "100%. Alle Daten bleiben in der EU. Wir bieten AVVs und erfüllen Enterprise-Anforderungen.",
      },
      {
        q: "Brauche ich Vorkenntnisse?",
        a: "Nein. Die Module sind selbsterklärend. Einweisung und Support sind im Pilotprojekt inklusive.",
      },
      {
        q: "Was kostet die Nutzung?",
        a: "Abhängig von Teamgröße und gewünschten Plattformen. Kontaktiere uns für dein individuelles Angebot.",
      },
    ],
  },

  // ============================================
  // KONTAKT
  // ============================================
  contact: {
    sectionLabel: "Starte jetzt",
    headline: "Pilotprojekt starten",
    description: "Teste die Plattform mit deinem Team. Wir begleiten dich beim Einstieg.",
    email: "hallo@zuhoeren.academy",
    phone: "+43 664 397 8684",
    probeAbo: {
      emoji: "🚀",
      title: "Pilot-Angebot",
      description: "2–4 Wochen Pilotprojekt mit einem Team. Module testen, Fortschritt messen, dann entscheiden.",
    },
  },

  // ============================================
  // FOOTER & NAVIGATION
  // ============================================
  navigation: {
    produkte: "Plattformen",
    useCases: "Use Cases",
    ueberUns: "Über uns",
    kontakt: "Kontakt",
  },

  footer: {
    companyName: "zuhoeren.academy",
    tagline: "KI-gestütztes Kommunikationstraining",
    copyright: "© 2024 zuhoeren.academy. Alle Rechte vorbehalten.",
    links: {
      impressum: "Impressum",
      datenschutz: "Datenschutz",
    },
  },

  // ============================================
  // META & SEO
  // ============================================
  meta: {
    title: "zuhoeren.academy – KI-gestütztes Kommunikationstraining",
    description: "KI-gestützte Trainingsplattformen für Sales, Leadership, Dialog, Resilienz und Metakognition. Verbessere Gespräche systematisch – mit messbarem Fortschritt.",
    keywords: [
      "KI Training",
      "Sales Coaching",
      "Leadership Training",
      "Kommunikationstraining",
      "Soft Skills",
      "B2B Training",
      "KI Coach",
      "Gesprächstraining",
    ],
  },
};

export default texts;
