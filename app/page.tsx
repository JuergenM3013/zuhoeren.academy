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
            KI-gestützte Weiterbildung für Leadership, Sales & Dialog
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Zuhören ist Wachstum – jetzt KI-gestützt.
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

          {/* KPI Badges */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["6", "spezialisierte KI-Coaches"],
              ["4", "wissenschaftliche Kriterien"],
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
              "Transkription (Deepgram Nova-3 & Whisper)",
              "Ampelsystem + Playbook-Abgleich",
              "6 KI-Coaches (Fragen, Einwand, Klarheit, Abschluss, Preis, Rapport)",
              "Adaptive Übungen, Simulation, Gamification",
              "Team-Analytics, Rollen, Reports",
            ]}
            ctaLabel="Demo anfragen"
          />

          <ProductCard
            name="Dialogfitness.studio"
            tag="Dialogtraining"
            tagline="Aktives Zuhören realistisch trainieren."
            href="https://dialogfitness.studio"
            bullets={[
              "KI-Gesprächspartner per Spracheingabe",
              "Sofort-Analyse nach 4 wissenschaftlichen Kriterien",
              "Vielfältige Szenarien (Beruf, Privat, eigene Fälle)",
              "Mobile-optimiert, jederzeit verfügbar",
              "Dashboard mit Fortschrittskurven",
            ]}
            ctaLabel="Demo anfragen"
          />

          <ProductCard
            name="Leadershipfitness.studio"
            tag="Coming soon"
            tagline="Das nächste Modul ist in Vorbereitung."
            href="https://leadershipfitness.studio"
            bullets={[
              "Führungsgespräche KI-gestützt trainieren",
              "Feedback- und Mitarbeitergespräche",
              "Konfliktlösung & schwierige Situationen",
              "Messbare Entwicklung für Führungskräfte",
              "Early Access möglich",
            ]}
            ctaLabel="Early Access"
          />
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
            ["1) Gespräch erfassen", "Audio/Call aufnehmen oder Simulation starten. Sprache wird transkribiert und strukturiert."],
            ["2) Analysieren & bewerten", "Metriken, Ampellogik, Stärken/Schwächen und (optional) Playbook-Abgleich."],
            ["3) Trainieren & verbessern", "Personalisierte Übungen, Rollenspiele, Level-System und Verlauf – Fortschritt wird sichtbar."],
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

      {/* NUTZEN */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Nutzen, der im Alltag ankommt</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-white/70">
          Ob Führung oder Vertrieb: Es geht um bessere Gespräche – und damit um bessere Ergebnisse.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["Für Mitarbeitende", "Objektives Feedback, gezieltes Training, selbstbestimmtes Lernen – ohne peinliche 'Live-Beobachtung'."],
            ["Für Führung & Sales-Leitung", "Transparenz über Skills im Team, Standards via Playbooks, datenbasierte Coaching-Prioritäten."],
            ["Für Unternehmen", "Skalierbare Weiterbildung, schnelleres Onboarding, messbare Entwicklung – ROI-freundlich."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
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
