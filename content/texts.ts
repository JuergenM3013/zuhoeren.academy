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
    Assessment: {
      label: "sky",
      tag: "bg-sky-500/10 border-sky-500/30 text-sky-300",
      gradient: "from-sky-600/10",
      dot: "bg-sky-400",
      text: "text-sky-400",
      border: "border-sky-500/30",
      bg: "bg-sky-500/10",
    },
    Fragetechnik: {
      label: "indigo",
      tag: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300",
      gradient: "from-indigo-600/10",
      dot: "bg-indigo-400",
      text: "text-indigo-400",
      border: "border-indigo-500/30",
      bg: "bg-indigo-500/10",
    },
    Konflikt: {
      label: "orange",
      tag: "bg-orange-500/10 border-orange-500/30 text-orange-300",
      gradient: "from-orange-600/10",
      dot: "bg-orange-400",
      text: "text-orange-400",
      border: "border-orange-500/30",
      bg: "bg-orange-500/10",
    },
  },

  // Sektionsfarben (Label-Farben)
  sections: {
    hero: "text-white/80",
    products: "text-violet-400",
    stations: "text-emerald-400",
    gymStandards: "text-white/60",
    trainingPlan: "text-amber-400",
    targetAudiences: "text-violet-400",
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
    pill: "KI-gestützte Lernsysteme",
    headline: "KI-Lernsysteme für Gesprächsführung, Vertrieb, Resilienz und Metakognition",
    subheadline: "Feedback. Assessment. Reflexion. Konfliktlösung. – Mit KI Kompetenzen erweitern.",
    description: "Wir entwickeln spezialisierte KI-Plattformen: Von Echtzeit-Feedback im Vertrieb über Assessment im Kundenkontakt bis zu Reflexionssystemen für Führungskräfte.",
    ctaPrimary: "Kostenlos testen",
    ctaSecondary: "Unsere Lösungen",
    ctaTertiary: "So funktioniert's",
    features: [
      "KI-Feedback in Echtzeit",
      "Assessment & Analyse",
      "Reflexion & Lernen",
    ],
    trustBadges: [
      "DSGVO-konform",
      "Made in Austria",
      "EU-Datenverarbeitung",
    ],
    stats: [
      { value: "3", label: "Plattformen live" },
      { value: "100+", label: "Szenarien" },
      { value: "2.000+", label: "Seminartage Erfahrung" },
      { value: "24/7", label: "Verfügbar" },
    ],
  },

  // ============================================
  // PLATTFORMEN (Produkte)
  // ============================================
  products: {
    sectionLabel: "Unsere Lösungen",
    headline: "Spezialisierte KI-Lernsysteme",
    description: "Jede Plattform adressiert einen spezifischen Anwendungsbereich. SalesFitness ist live – weitere Systeme folgen.",
    ctaLabel: "Kontakt",
  },

  // ============================================
  // MODULE (Produkt-Details)
  // ============================================
  stations: {
    sectionLabel: "Plattformen im Detail",
    headline: "Spezialisierte Lernsysteme",
    description: "Jede Plattform ist auf einen Anwendungsbereich optimiert – mit spezifischen Modulen, Szenarien und Analysen.",
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
    headline: "Der Prozess",
    description: "Phasen für messbare Ergebnisse: Kontext definieren, mit KI arbeiten, Erkenntnisse gewinnen.",
    steps: [
      {
        title: "Ziel & Kontext definieren",
        description: "Wähle dein Ziel – ob Training, Assessment oder Reflexion. Das System passt sich deinem Anwendungsfall an.",
        emoji: "🎯",
      },
      {
        title: "Mit KI interagieren",
        description: "Trainiere Gespräche, absolviere Assessments oder reflektiere mit KI-Unterstützung – sicher und ohne Risiko.",
        emoji: "💬",
      },
      {
        title: "Erkenntnisse nutzen",
        description: "Erhalte detaillierte Analysen, Reports oder Feedback – für fundierte Entscheidungen und gezielte Entwicklung.",
        emoji: "📊",
      },
    ],
    philosophy: [
      {
        emoji: "🎓",
        title: "Wissenschaftlich fundiert",
        description: "Unsere Lernsysteme basieren auf bewährten Methoden: Deliberate Practice, Reflexionszyklen und kontinuierliches Feedback.",
      },
      {
        emoji: "📈",
        title: "Datenbasierte Entwicklung",
        description: "Analysen, Trends, Fortschrittskurven: Du siehst genau, wo du stehst und welche Bereiche Aufmerksamkeit brauchen.",
      },
    ],
  },

  // ============================================
  // ZIELGRUPPEN-MATRIX
  // ============================================
  targetAudiences: {
    sectionLabel: "Zielgruppen & Nutzen",
    headline: "Wer profitiert von welcher Plattform?",
    description: "Finde die passende Lösung für deine Rolle und Herausforderung.",
    audiences: [
      {
        role: "Führungskräfte",
        emoji: "👔",
        benefit: "Verstehen, was Ihr Team wirklich denkt",
        platforms: [
          { name: "DialogFitness.studio", status: "live", use: "Schwierige Mitarbeitergespräche üben" },
          { name: "Metakognitionen.at", status: "coming_soon", statusLabel: "Q1/26", use: "Bessere Entscheidungen durch Reflexion" },
          { name: "Konfliktloesung.studio", status: "coming_soon", statusLabel: "Q1/26", use: "Konflikte konstruktiv lösen" },
          { name: "ResilienzFitness.studio", status: "coming_soon", statusLabel: "Q1/26", use: "Emotionale Stabilität in Krisen" },
          { name: "Fragenkatalog.at", status: "coming_soon", statusLabel: "Q2/26", use: "Fragetechniken für Mitarbeitergespräche" },
          { name: "LeadershipFitness.studio", status: "coming_soon", statusLabel: "Q2/26", use: "Führungsverhalten reflektieren" },
        ],
      },
      {
        role: "Medizinisches Fachpersonal",
        emoji: "🩺",
        benefit: "Patienten verstehen – nicht nur behandeln",
        platforms: [
          { name: "DialogFitness.studio", status: "live", use: "Schwierige Diagnosen empathisch übermitteln" },
          { name: "ResilienzFitness.studio", status: "coming_soon", statusLabel: "Q1/26", use: "Emotionale Distanzierung ohne Empathieverlust" },
          { name: "Fragenkatalog.at", status: "coming_soon", statusLabel: "Q2/26", use: "Anamnese-Fragen, Verständnis sicherstellen" },
        ],
      },
      {
        role: "Kundenservice & Support",
        emoji: "📞",
        benefit: "Vom Problemlöser zum Kundenversteher",
        platforms: [
          { name: "DialogFitness.studio", status: "live", use: "Deeskalierende Gesprächsführung trainieren" },
          { name: "ResilienzFitness.studio", status: "coming_soon", statusLabel: "Q1/26", use: "Stressregulation nach schwierigen Gesprächen" },
          { name: "Fragenkatalog.at", status: "coming_soon", statusLabel: "Q2/26", use: "Das eigentliche Problem verstehen" },
        ],
      },
      {
        role: "Key Account Manager & Vertrieb",
        emoji: "💼",
        benefit: "Verkaufen Sie nicht – verstehen Sie",
        platforms: [
          { name: "SalesFitness.studio", status: "live", use: "Cold Calls, Discovery, Closing üben" },
          { name: "DialogFitness.studio", status: "live", use: "Einwände souverän behandeln" },
          { name: "Fragenkatalog.at", status: "coming_soon", statusLabel: "Q2/26", use: "Wahre Bedürfnisse entdecken" },
        ],
      },
      {
        role: "HR & Personalentwicklung",
        emoji: "🤝",
        benefit: "Die richtigen Mitarbeiter finden und entwickeln",
        platforms: [
          { name: "DialogFitness.studio", status: "live", use: "Kritikgespräche, Feedback geben/empfangen" },
          { name: "Telefonkompetenz.at", status: "coming_soon", statusLabel: "Feb 2026", use: "Kandidaten-Assessment für Telefon-Rollen" },
          { name: "Metakognitionen.at", status: "coming_soon", statusLabel: "Q1/26", use: "Reflexion und Entscheidungsfindung" },
          { name: "Konfliktloesung.studio", status: "coming_soon", statusLabel: "Q1/26", use: "Konflikte im Team moderieren" },
          { name: "Fragenkatalog.at", status: "coming_soon", statusLabel: "Q2/26", use: "Bessere Fragen in Interviews stellen" },
        ],
      },
    ],
  },

  // ============================================
  // ANWENDUNGSFÄLLE (kompakt)
  // ============================================
  useCases: {
    sectionLabel: "Anwendungsfälle",
    headline: "Was kannst du mit den Systemen machen?",
    description: "Konkrete Einsatzszenarien für verschiedene Herausforderungen.",
    cases: [
      {
        title: "Sales-Training",
        description: "Verkaufsgespräche simulieren: Einwände behandeln, Abschlüsse üben, Pitch verfeinern.",
        platform: "SalesFitness.studio (Live)",
        emoji: "🎯",
      },
      {
        title: "Dialog-Training",
        description: "Schwierige Gespräche üben: Feedback, Konflikte, emotionale Situationen meistern.",
        platform: "DialogFitness.studio",
        emoji: "💬",
      },
      {
        title: "Denk-Training",
        description: "Kognitive Verzerrungen erkennen, bessere Entscheidungen treffen.",
        platform: "Metakognitionen.at",
        emoji: "🧠",
      },
      {
        title: "Resilienz-Training",
        description: "Mentale Stärke aufbauen: KI-Coaching, Stresstest-Simulator, Mikro-Workouts.",
        platform: "ResilienzFitness.studio",
        emoji: "💪",
      },
      {
        title: "Fragetechnik-Training",
        description: "Die richtigen Fragen stellen lernen: Q-CORE Framework, KI-Feedback, Rollenspiele.",
        platform: "Fragenkatalog.at",
        emoji: "❓",
      },
      {
        title: "Energiedienstleister",
        description: "Kundenservice und Vertrieb in der Energiebranche: Beratungsgespräche, Beschwerdemanagement und Kundenbindung trainieren.",
        platform: "DialogFitness.studio + SalesFitness.studio",
        emoji: "⚡",
      },
      {
        title: "Bewerber-Assessment",
        description: "Telefonkompetenz in 20 Min. objektiv testen: KI-Analyse, Stärken-Schwächen-Profil.",
        platform: "Telefonkompetenz",
        emoji: "📋",
      },
      {
        title: "Führungs-Reflexion",
        description: "Eigenes Führungsverhalten analysieren und gezielt weiterentwickeln.",
        platform: "LeadershipFitness.studio",
        emoji: "🎓",
      },
    ],
  },

  // ============================================
  // ÜBER UNS
  // ============================================
  about: {
    sectionLabel: "Der Gründer",
    headline: "2.000+ Seminartage. Jetzt mit KI.",
    description: "Hinter zuhoeren.academy steht Jürgen Melmuka – Trainer, Coach und Entwickler mit über 2.000 Seminartagen in Vertrieb, Führung und Gesprächsführung. Die Erfahrung aus tausenden Trainings mit Unternehmen wie Energieversorgern, Banken und Konzernen fließt direkt in die KI-Systeme ein. Die KI analysiert, gibt Feedback und zeigt versteckte Muster auf. Du steigerst Schritt für Schritt deine Kompetenzen – begleitet von Systemen, die auf echter Trainingserfahrung basieren.",
    founder: {
      name: "Jürgen Melmuka",
      role: "Trainer, Coach & Entwickler · 2.000+ Seminartage",
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
    headline: "Wichtige Informationen",
    description: "Antworten auf die häufigsten Fragen zu unseren KI-Lernsystemen.",
    questions: [
      {
        q: "Was genau sind KI-Lernsysteme?",
        a: "Kombinierte Lösungen aus Übungsmodulen, Gesprächssimulation und KI-gestützter Analyse. Du übst, das System gibt Feedback und trackt deinen Fortschritt.",
      },
      {
        q: "Für welche Unternehmen sind die Systeme gedacht?",
        a: "Teams, EPUs, Freelancer und Privatpersonen. Ideal für Vertrieb, Führungskräfte, Kundenservice aller Branchen, Regionen und Unternehmensgrößen – überall wo Menschen in Kontakt sind.",
      },
      {
        q: "Können eigene Szenarien erstellt werden?",
        a: "Ja – individuelle Szenarien sind Kernfunktionen aller Plattformen.",
      },
      {
        q: "Wie funktioniert das Assessment?",
        a: "Die KI analysiert Gespräche nach definierten Kriterien, identifiziert Stärken und Entwicklungspotenziale und erstellt detaillierte Reports.",
      },
      {
        q: "Wie unterstützt die KI bei Konfliktlösung?",
        a: "Durch Simulation von Konfliktsituationen: Du übst Deeskalation und Lösungsstrategien in sicherer Umgebung mit sofortigem Feedback.",
      },
      {
        q: "Sind die Systeme DSGVO-konform?",
        a: "100%. Alle Daten bleiben in der EU. Wir bieten AVVs und erfüllen Enterprise-Sicherheitsanforderungen.",
      },
      {
        q: "Kann ich die Plattformen kostenlos testen?",
        a: "Ja – wir bieten eine kostenlose Testphase an. Einfach Demo anfragen und unverbindlich ausprobieren.",
      },
      {
        q: "Was kostet die Nutzung?",
        a: "Einzellizenzen starten ab 29 €/Monat. Für Teams und Unternehmen erstellen wir individuelle Angebote je nach Plattform, Teamgröße und Laufzeit. Kontaktieren Sie uns für ein unverbindliches Angebot.",
      },
    ],
  },

  // ============================================
  // KONTAKT
  // ============================================
  contact: {
    sectionLabel: "Kontakt",
    headline: "Projekt starten",
    description: "Wir begleiten dich von der Demo bis zur Auswertung.",
    email: "hallo@zuhoeren.academy",
    phone: "+43 664 397 8684",
  },

  // ============================================
  // FOOTER & NAVIGATION
  // ============================================
  navigation: {
    produkte: "Lösungen",
    useCases: "Anwendungen",
    ueberUns: "Über uns",
    kontakt: "Kontakt",
  },

  footer: {
    companyName: "zuhoeren.academy",
    tagline: "KI-gestützte Lernsysteme",
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
    title: "zuhoeren.academy – KI-Lernsysteme für Gesprächsführung & Reflexion",
    description: "KI-gestützte Lernsysteme für Gesprächsführung, Assessment, Konfliktlösung und Metakognition. Feedbacksysteme für Vertrieb, Reflexionssysteme für Führungskräfte.",
    keywords: [
      "KI Lernsystem",
      "KI Feedbacksystem",
      "Sales Assessment",
      "Führungskräfte Reflexion",
      "Konfliktlösung KI",
      "Gesprächsführung Training",
      "Metakognition",
      "B2B Training",
    ],
  },
};

export default texts;
