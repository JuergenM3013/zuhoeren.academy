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

  // Gym-Standards Badges
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
    pill: "Dein Fitnessstudio für Kommunikation",
    headline: "Trainiere Gespräche wie Muskeln – mit KI als Personal Coach",
    subheadline: "Sales. Leadership. Dialog. Resilienz. Denken. – Alles trainierbar.",
    description: "Wie im Fitnessstudio: Übung macht den Meister. Unsere KI-Trainingsgeräte geben dir sofortiges Feedback, messen deinen Fortschritt und machen Soft Skills messbar.",
    ctaPrimary: "Trainingsgeräte entdecken",
    ctaSecondary: "Trainingsplan ansehen",
    features: [
      "Sofort-Feedback nach jeder Übung",
      "Risikofreies Training",
      "Fortschritt messbar machen",
    ],
    trustBadges: [
      "DSGVO-konform",
      "Made in Austria",
      "EU-Datenverarbeitung",
    ],
    stats: [
      { value: "5", label: "Trainingsgeräte" },
      { value: "100+", label: "Übungen" },
      { value: "3", label: "Level pro Skill" },
      { value: "24/7", label: "Gym geöffnet" },
    ],
  },

  // ============================================
  // TRAININGSGERÄTE (Produkte)
  // ============================================
  products: {
    sectionLabel: "Unser Gerätepark",
    headline: "5 spezialisierte Trainingsgeräte",
    description: "Jedes Gerät trainiert einen anderen Muskel deiner Kommunikation. Wähle dein Workout.",
    ctaLabel: "Mehr erfahren",
  },

  // ============================================
  // TRAININGSSTATIONEN (Produkt-Details)
  // ============================================
  stations: {
    sectionLabel: "Deep Dive",
    headline: "Trainingsstationen im Detail",
    description: "Jedes Gerät hat spezialisierte Übungsstationen. Trainiere gezielt – wie im echten Gym.",
    visitLabel: "besuchen →",
  },

  // ============================================
  // GYM STANDARDS (Social Proof)
  // ============================================
  gymStandards: {
    sectionLabel: "Gym-Standards",
    headline: "Professionelle Ausstattung für professionelle Teams",
    description: "Unser Gym erfüllt höchste Standards – bei Datenschutz, Qualität und Verfügbarkeit.",
    badges: [
      { emoji: "🔒", title: "DSGVO", subtitle: "100% konform" },
      { emoji: "🇪🇺", title: "EU-Server", subtitle: "Deine Daten bleiben hier" },
      { emoji: "🏢", title: "B2B-Ready", subtitle: "Enterprise-Features" },
      { emoji: "⏰", title: "24/7", subtitle: "Immer geöffnet" },
    ],
  },

  // ============================================
  // TRAININGSPLAN (Wie es funktioniert)
  // ============================================
  trainingPlan: {
    sectionLabel: "Dein Trainingsplan",
    headline: "So läuft dein Workout ab",
    description: "Strukturiert wie im Gym: Warm-up, Workout, Cool-down. Jede Session bringt dich weiter.",
    steps: [
      {
        title: "Warm-up",
        description: "Wähle dein Trainingsgerät und Szenario. Die KI stellt sich auf dein Level ein.",
        emoji: "🎯",
      },
      {
        title: "Workout",
        description: "Trainiere im Dialog mit dem KI-Partner. Sprich, reagiere, verbessere – in Echtzeit.",
        emoji: "💪",
      },
      {
        title: "Cool-down",
        description: "Erhalte detailliertes Feedback, tracke deinen Score und plane die nächste Session.",
        emoji: "📊",
      },
    ],
    philosophy: [
      {
        emoji: "🏋️",
        title: "Gym-Philosophie trifft KI",
        description: "Wie beim Sport gilt: Wiederholung schafft Meisterschaft. Unsere KI ist dein Personal Trainer – sie korrigiert, motiviert und misst deinen Fortschritt.",
      },
      {
        emoji: "📈",
        title: "Messbare Gains",
        description: "Scores, Level, Fortschrittskurven: Du siehst genau, wo du stehst und wie du dich verbesserst. Keine vagen Gefühle – sondern echte Daten.",
      },
    ],
  },

  // ============================================
  // TRAININGSZIELE (Use Cases)
  // ============================================
  useCases: {
    sectionLabel: "Für wen trainieren wir?",
    headline: "Dein Trainingsziel bestimmt das Gerät",
    description: "Verschiedene Rollen, verschiedene Muskeln. Finde dein optimales Workout.",
    cases: [
      {
        title: "Sales & Vertrieb",
        description: "Abschluss-Muskeln aufbauen: Pipeline, Einwände, Closing.",
        platform: "SalesFitness",
        emoji: "🎯",
      },
      {
        title: "Führungskräfte",
        description: "Leadership-Kraft entwickeln: Feedback, Sicherheit, Klarheit.",
        platform: "LeadershipFitness",
        emoji: "👔",
      },
      {
        title: "HR & People",
        description: "Dialog-Ausdauer trainieren: Onboarding, Kultur, Konflikte.",
        platform: "DialogFitness",
        emoji: "🤝",
      },
      {
        title: "Kundenservice",
        description: "Empathie-Flexibilität steigern: Zuhören, Lösen, Deeskalieren.",
        platform: "DialogFitness",
        emoji: "💬",
      },
      {
        title: "Coaches & Trainer",
        description: "Skalierbare Workouts designen: Messen, Begleiten, Transferieren.",
        platform: "Alle Geräte",
        emoji: "🎓",
      },
      {
        title: "Wissensarbeiter",
        description: "Denk-Fitness boosten: Bias vermeiden, klar entscheiden.",
        platform: "Metakognitionen.at",
        emoji: "🧠",
      },
    ],
  },

  // ============================================
  // DER TRAINER (Über uns)
  // ============================================
  about: {
    sectionLabel: "Der Gym-Gründer",
    headline: "KI als Personal Trainer – nicht als Ersatz für Menschen",
    description: "Wie beim echten Fitnesstraining: Die Geräte und der Trainer unterstützen dich – aber die Arbeit machst du. Unsere KI korrigiert, motiviert und misst. Aber echte Gespräche führst du selbst.",
    founder: {
      name: "Jürgen Melmuka",
      role: "Gym-Gründer & Head Coach",
      emoji: "🏋️",
      linkedin: "https://www.linkedin.com/in/juergenmelmuka/",
      website: "https://zuhoerakademie.at/",
    },
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    sectionLabel: "Häufige Fragen",
    headline: "Gym-Guide für Einsteiger",
    description: "Alles, was du vor dem ersten Training wissen solltest.",
    questions: [
      {
        q: "Ist das ein Fitnessstudio oder Software?",
        a: "Beides in einem: Trainingsgeräte (Übungen, Simulationen) + Tracking-Software (Scores, Fortschritt, Reports). Wie ein modernes Gym mit App.",
      },
      {
        q: "Für welche Teams ist das Gym gemacht?",
        a: "B2B-Teams (10–500 Personen). Ideal für Sales, Leadership, HR – überall wo viele Gespräche geführt werden.",
      },
      {
        q: "Kann ich eigene Trainingspläne erstellen?",
        a: "Ja – Playbook-Abgleich und individuelle Szenarien sind Kernfeatures. Im Probetraining klären wir deine Anforderungen.",
      },
      {
        q: "Wie starte ich am schnellsten?",
        a: "Mit einem Probetraining: Demo ansehen, 2-4 Wochen testen, dann entscheiden. Kein Abo-Zwang.",
      },
      {
        q: "Wie funktioniert der KI-Coach?",
        a: "Er analysiert deine Gespräche, gibt Echtzeit-Feedback und schlägt konkrete Verbesserungen vor. Wie ein Personal Trainer, der jede Rep beobachtet.",
      },
      {
        q: "Ist das Gym DSGVO-konform?",
        a: "100%. Alle Daten bleiben in der EU. Wir bieten AVVs und erfüllen Enterprise-Anforderungen.",
      },
      {
        q: "Brauche ich Vorkenntnisse?",
        a: "Nein. Die Geräte sind selbsterklärend. Einweisung und Support sind im Probetraining inklusive.",
      },
      {
        q: "Was kostet die Mitgliedschaft?",
        a: "Abhängig von Teamgröße und gewünschten Geräten. Kontaktiere uns für dein individuelles Angebot.",
      },
    ],
  },

  // ============================================
  // PROBETRAINING (Kontakt)
  // ============================================
  contact: {
    sectionLabel: "Starte jetzt",
    headline: "Probetraining buchen",
    description: "Wie im Fitnessstudio: Erst testen, dann entscheiden. Wir zeigen dir die Geräte.",
    email: "hallo@zuhoeren.academy",
    phone: "+43 664 397 8684",
    probeAbo: {
      emoji: "🎟️",
      title: "Probe-Abo",
      description: "2–4 Wochen Probetraining mit einem Team. Alle Geräte testen, Fortschritt messen, dann entscheiden.",
    },
  },

  // ============================================
  // FOOTER & NAVIGATION
  // ============================================
  navigation: {
    produkte: "Produkte",
    useCases: "Use Cases",
    ueberUns: "Über uns",
    kontakt: "Kontakt",
  },

  footer: {
    companyName: "zuhoeren.academy",
    tagline: "Das Fitnessstudio für Kommunikation",
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
    title: "zuhoeren.academy – Das Fitnessstudio für Kommunikation",
    description: "KI-gestützte Trainingsplattformen für Sales, Leadership, Dialog, Resilienz und Metakognition. Trainiere Gespräche wie Muskeln – mit messbarem Fortschritt.",
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
