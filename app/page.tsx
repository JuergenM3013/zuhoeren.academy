import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 left-10 h-80 w-80 rounded-full bg-violet-600/25 blur-3xl" />
          <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            Lernen durch KI Feedback
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            KI-gestützte Weiterbildung für Leadership, Sales & Gesprächsführung
          </h1>

          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-white/90 md:text-2xl font-medium">
            Lebendigere Gespräche. Stärkere Verbundenheit. Echtes Verstehen.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Pipeline-Qualität steigt, Onboarding wird schneller, Coaching skalierbar.
            Psychologische Sicherheit & Führungsgespräche: messbar besser.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#produkte" className="rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500">
              Produkte entdecken
            </a>
            <a href="#wie" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold transition hover:bg-white/10">
              So funktioniert's
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> Feedback in Minuten
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> Training ohne Risiko
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> Team-Standards via Playbooks
            </span>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              DSGVO-konform
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
              🇦🇹 Made in Austria
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
              EU-Datenverarbeitung
            </span>
          </div>

          {/* KPI Badges */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              ["6", "spezialisierte KI-Coaches"],
              ["3", "Trainingslevel"],
              ["24/7", "Training verfügbar"],
            ].map(([num, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-extrabold">{num}</div>
                <div className="mt-1 text-sm text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUKTE */}
      <section id="produkte" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Produkte</h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-white/70">
              Zwei Lösungen sind live – eine dritte folgt. Gemeinsames Ziel: bessere Gespräche, messbar gemacht.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ProductCard
            name="Salesfitness.studio"
            tag="KI-Sales Coaching"
            tagline="Analysieren. Trainieren. Abschließen."
            href="https://salesfitness.studio"
            bullets={[
              "Intelligente Gesprächsanalyse mit Deepgram Nova-3 & OpenAI Whisper",
              "6 spezialisierte KI-Coaches: Fragen, Einwand, Klarheit, Abschluss, Preis, Rapport",
              "Adaptives Training mit 3 Schwierigkeitsstufen & Gamification",
              "Team-Analytics, Rollen-Management & Reports",
              "Playbook-Abgleich für unternehmenseigene Standards",
            ]}
            ctaLabel="Demo anfragen"
          />

          <ProductCard
            name="Dialogfitness.studio"
            tag="Listening Coach"
            tagline="Aktives Zuhören trainieren. Besser verstehen."
            href="https://dialogfitness.studio"
            bullets={[
              "KI-Gesprächspartner per Spracheingabe – jederzeit verfügbar",
              "Sofort-Feedback nach 4 wissenschaftlichen Kriterien",
              "Vielfältige Szenarien: Beruf, Privat, eigene Fälle hochladen",
              "Mobile-optimiert für Training unterwegs",
              "Fortschrittskurven & messbarer Lernfortschritt",
            ]}
            ctaLabel="Demo anfragen"
          />

          <ProductCard
            name="Leadershipfitness.studio"
            tag="Coming soon"
            tagline="Das nächste Modul ist in Vorbereitung."
            href="https://leadershipfitness.studio"
            bullets={[
              "Feedback- und Mitarbeitergespräche",
              "Messbare Entwicklung für Führungskräfte",
              "Early Access möglich",
            ]}
            ctaLabel="Early Access"
          />
        </div>
      </section>

      {/* PRODUKT-DETAILS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Salesfitness.studio Details */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-transparent p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
              Salesfitness.studio
            </div>
            <h3 className="mt-4 text-xl font-extrabold">Verkaufsgespräche analysieren & optimieren</h3>
            <p className="mt-3 text-white/70 leading-relaxed">
              Die KI-gestützte Plattform analysiert deine Sales Calls mit modernster Spracherkennung (Deepgram Nova-3 & OpenAI Whisper) und gibt dir gezieltes Feedback durch 6 spezialisierte KI-Coaches.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                <p className="text-sm text-white/80"><b>Fragen-Coach:</b> Trainiert effektive Fragetechniken</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                <p className="text-sm text-white/80"><b>Einwand-Coach:</b> Übt Einwandbehandlung situativ</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                <p className="text-sm text-white/80"><b>Abschluss-Coach:</b> Verbessert Closing-Techniken</p>
              </div>
            </div>
          </div>

          {/* Dialogfitness.studio Details */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-600/10 to-transparent p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              Dialogfitness.studio
            </div>
            <h3 className="mt-4 text-xl font-extrabold">Aktives Zuhören wissenschaftlich trainieren</h3>
            <p className="mt-3 text-white/70 leading-relaxed">
              Der Listening Coach ist ein KI-gestütztes Trainingsprogramm, das aktives Zuhören durch interaktive Gespräche mit einem KI-Gesprächspartner trainiert und nach wissenschaftlichen Kriterien bewertet.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <p className="text-sm text-white/80"><b>Empathische Reaktionen:</b> Gefühle erkennen & ansprechen</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <p className="text-sm text-white/80"><b>Offene Fragen:</b> Gespräche vertiefen lernen</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <p className="text-sm text-white/80"><b>Zusammenfassungen:</b> Verständnis sichern</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">
          <p className="text-sm font-medium text-white/60 uppercase tracking-wider">Vertrauen durch Qualität</p>
          <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">Entwickelt für B2B-Teams, die Gespräche ernst nehmen</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 leading-relaxed">
            Unsere Plattformen werden bereits von Sales-Teams, Führungskräften und HR-Abteilungen genutzt, um Gesprächsqualität messbar zu verbessern.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-extrabold text-violet-400">100%</div>
              <div className="mt-2 text-sm text-white/60">DSGVO-konform</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-extrabold text-emerald-400">EU</div>
              <div className="mt-2 text-sm text-white/60">Datenverarbeitung</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-extrabold text-white">B2B</div>
              <div className="mt-2 text-sm text-white/60">Enterprise-ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* WIE ES FUNKTIONIERT */}
      <section id="wie" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Wie es funktioniert</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-white/70">
          Ein klarer Ablauf – verständlich, konkret, ohne Buzzword-Overload.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["1) [Schritt 1]", "[Beschreibung Schritt 1]"],
            ["2) [Schritt 2]", "[Beschreibung Schritt 2]"],
            ["3) [Schritt 3]", "[Beschreibung Schritt 3]"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-extrabold">Trainings-DNA trifft KI</h3>
            <p className="mt-3 leading-relaxed text-white/70">
              <b className="text-white">zuhoeren.academy</b> verbindet wirksame Kommunikations- und Trainingskompetenz mit moderner KI – ohne die Menschlichkeit zu verlieren.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-extrabold">Datenschutz & Vertrauen</h3>
            <p className="mt-3 leading-relaxed text-white/70">
              Für B2B entscheidend: klare Prozesse, Rollen & Standards. Datenverarbeitung erfolgt DSGVO-konform in der EU.
            </p>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Use Cases</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-white/70">
          Für wen ist zuhoeren.academy gemacht? Überall, wo Gesprächsqualität über Erfolg entscheidet.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["Leadership", "Führungsgespräche, Feedback, Mitarbeiterentwicklung – psychologische Sicherheit messbar verbessern."],
            ["Sales", "Pipeline-Qualität steigern, Onboarding beschleunigen, Coaching skalierbar machen."],
            ["HR & People", "Kulturentwicklung, Kommunikationstrainings, Onboarding-Gespräche optimieren."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ÜBER UNS */}
      <section id="ueber-uns" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <h2 className="text-3xl font-extrabold tracking-tight">Warum wir KI nutzen, ohne Menschlichkeit zu verlieren</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/70">
            Echte Gespräche brauchen echte Aufmerksamkeit. Unsere Mission: KI als Werkzeug nutzen, das Menschen dabei unterstützt,
            besser zuzuhören – nicht es für sie zu tun. Technologie im Dienst der Verbindung, nicht als Ersatz.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div>
              <p className="font-bold text-white">Jürgen Melmuka</p>
              <p className="text-sm text-white/60">Gründer & Entwickler</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/juergenmelmuka/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://zuhoerakademie.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
              >
                Zuhörakademie
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">FAQ</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-white/70">
          Die wichtigsten Fragen – kurz, ehrlich, B2B-tauglich.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            ["Ist das eher Training oder eher Software?", "Beides: Trainingslogik (Übungen, Simulationen, Coaching) + Software (Analyse, Metriken, Reporting) in einem Workflow."],
            ["Für welche Teams ist das ideal?", "B2B-Teams (10–500), z. B. SDR/Inside Sales/Field Sales – besonders bei vielen Calls und wiederkehrenden Gesprächsmustern."],
            ["Kann ich unternehmensspezifische Playbooks nutzen?", "Ja – Playbook-Abgleich ist ein Kernbaustein. Onboarding und individuelle Anpassungen werden im Pilot geklärt."],
            ["Wie starte ich am schnellsten?", "Mit einer Demo + Pilot-Setup (1 Team, klare Ziele, 2–4 Wochen) und danach Rollout auf weitere Teams."],
            ["Wie funktioniert das KI-Feedback?", "Deine Gespräche werden transkribiert und von KI-Coaches analysiert. Du erhältst konkrete Verbesserungsvorschläge und kannst gezielt trainieren."],
            ["Ist die Plattform DSGVO-konform?", "Ja. Alle Daten werden in der EU verarbeitet. Wir halten uns strikt an die DSGVO und bieten Auftragsverarbeitungsverträge."],
            ["Brauche ich technisches Vorwissen?", "Nein. Die Plattform ist intuitiv bedienbar. Onboarding und Support sind im Pilot inklusive."],
            ["Was kostet das?", "Die Preise richten sich nach Teamgröße und Funktionsumfang. Kontaktiere uns für ein individuelles Angebot."],
          ].map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer font-bold">{q}</summary>
              <p className="mt-3 leading-relaxed text-white/70">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-extrabold tracking-tight">Kontakt</h2>
            <p className="mt-3 leading-relaxed text-white/70">
              Schreib uns – wir melden uns mit einem konkreten Vorschlag (Demo, Pilot oder Workshop-Format).
            </p>

            <div className="mt-8 space-y-3 text-white/80">
              <p>
                <b>E-Mail:</b>{" "}
                <a href="mailto:hallo@zuhoeren.academy" className="underline hover:text-white">
                  hallo@zuhoeren.academy
                </a>
              </p>
              <p>
                <b>Telefon:</b>{" "}
                <a href="tel:+436643978684" className="underline hover:text-white">
                  +43 664 397 8684
                </a>
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold">Pilot-Angebot</p>
              <p className="mt-1 text-sm leading-relaxed text-white/70">
                2–4 Wochen mit 1 Team, klare Ziele, messbarer Erfolg. Ideal zum Kennenlernen und Validieren.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
