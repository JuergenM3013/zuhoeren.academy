import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import { platforms } from "@/content/platforms";

const categoryColors: Record<string, { tag: string; gradient: string; dot: string }> = {
  Sales: { tag: "bg-violet-500/10 border-violet-500/30 text-violet-300", gradient: "from-violet-600/10", dot: "bg-violet-400" },
  Dialog: { tag: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300", gradient: "from-emerald-600/10", dot: "bg-emerald-400" },
  Leadership: { tag: "bg-amber-500/10 border-amber-500/30 text-amber-300", gradient: "from-amber-600/10", dot: "bg-amber-400" },
  Resilienz: { tag: "bg-rose-500/10 border-rose-500/30 text-rose-300", gradient: "from-rose-600/10", dot: "bg-rose-400" },
  Metakognition: { tag: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300", gradient: "from-cyan-600/10", dot: "bg-cyan-400" },
};

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
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Dein Fitnessstudio für Kommunikation
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Trainiere Gespräche wie Muskeln – mit KI als Personal Coach
          </h1>

          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-white/90 md:text-2xl font-medium">
            Sales. Leadership. Dialog. Resilienz. Denken. – Alles trainierbar.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Wie im Fitnessstudio: Übung macht den Meister. Unsere KI-Trainingsgeräte geben dir
            sofortiges Feedback, messen deinen Fortschritt und machen Soft Skills messbar.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#produkte" className="rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500 inline-flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Trainingsgeräte entdecken
            </a>
            <a href="#wie" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold transition hover:bg-white/10">
              Trainingsplan ansehen
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> Sofort-Feedback nach jeder Übung
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> Risikofreies Training
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> Fortschritt messbar machen
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

          {/* KPI Badges - Fitness Stats */}
          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {[
              ["5", "Trainingsgeräte", "fitness-icon"],
              ["100+", "Übungen", "reps-icon"],
              ["3", "Level pro Skill", "level-icon"],
              ["24/7", "Gym geöffnet", "clock-icon"],
            ].map(([num, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-extrabold">{num}</div>
                <div className="mt-1 text-sm text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAININGSGERÄTE */}
      <section id="produkte" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-violet-400 uppercase tracking-wider mb-2">Unser Gerätepark</p>
            <h2 className="text-3xl font-extrabold tracking-tight">5 spezialisierte Trainingsgeräte</h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-white/70">
              Jedes Gerät trainiert einen anderen Muskel deiner Kommunikation. Wähle dein Workout.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <ProductCard
              key={platform.slug}
              name={platform.name}
              tag={platform.category}
              tagline={platform.tagline}
              href={platform.website}
              bullets={platform.bullets}
              ctaLabel="Mehr erfahren"
            />
          ))}
        </div>
      </section>

      {/* TRAININGSSTATIONEN */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-2">Deep Dive</p>
        <h2 className="text-3xl font-extrabold tracking-tight mb-4">Trainingsstationen im Detail</h2>
        <p className="max-w-2xl leading-relaxed text-white/70 mb-10">
          Jedes Gerät hat spezialisierte Übungsstationen. Trainiere gezielt – wie im echten Gym.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => {
            const colors = categoryColors[platform.category];
            return (
              <div key={platform.slug} className={`rounded-3xl border border-white/10 bg-gradient-to-br ${colors.gradient} to-transparent p-8`}>
                <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${colors.tag}`}>
                  {platform.name}
                </div>
                <h3 className="mt-4 text-xl font-extrabold">{platform.tagline}</h3>
                <p className="mt-3 text-white/70 leading-relaxed text-sm">
                  {platform.description}
                </p>
                {platform.sections[0] && (
                  <div className="mt-6 space-y-3">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">{platform.sections[0].title}</p>
                    {platform.sections[0].items?.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className={`mt-1 h-2 w-2 rounded-full ${colors.dot}`} />
                        <p className="text-sm text-white/80">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
                <a
                  href={platform.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition"
                >
                  {platform.name} besuchen →
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* GYM STANDARDS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/5 to-emerald-600/5 p-8 md:p-12 text-center">
          <p className="text-sm font-medium text-white/60 uppercase tracking-wider">Gym-Standards</p>
          <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">Professionelle Ausstattung für professionelle Teams</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 leading-relaxed">
            Unser Gym erfüllt höchste Standards – bei Datenschutz, Qualität und Verfügbarkeit.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl mb-2">🔒</div>
              <div className="text-xl font-extrabold text-violet-400">DSGVO</div>
              <div className="mt-2 text-sm text-white/60">100% konform</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl mb-2">🇪🇺</div>
              <div className="text-xl font-extrabold text-emerald-400">EU-Server</div>
              <div className="mt-2 text-sm text-white/60">Deine Daten bleiben hier</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl mb-2">🏢</div>
              <div className="text-xl font-extrabold text-amber-400">B2B-Ready</div>
              <div className="mt-2 text-sm text-white/60">Enterprise-Features</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl mb-2">⏰</div>
              <div className="text-xl font-extrabold text-rose-400">24/7</div>
              <div className="mt-2 text-sm text-white/60">Immer geöffnet</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAININGSPLAN */}
      <section id="wie" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium text-amber-400 uppercase tracking-wider mb-2">Dein Trainingsplan</p>
        <h2 className="text-3xl font-extrabold tracking-tight">So läuft dein Workout ab</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-white/70">
          Strukturiert wie im Gym: Warm-up, Workout, Cool-down. Jede Session bringt dich weiter.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["Warm-up", "Wähle dein Trainingsgerät und Szenario. Die KI stellt sich auf dein Level ein.", "🎯", "bg-amber-500/10 border-amber-500/30"],
            ["Workout", "Trainiere im Dialog mit dem KI-Partner. Sprich, reagiere, verbessere – in Echtzeit.", "💪", "bg-violet-500/10 border-violet-500/30"],
            ["Cool-down", "Erhalte detailliertes Feedback, tracke deinen Score und plane die nächste Session.", "📊", "bg-emerald-500/10 border-emerald-500/30"],
          ].map(([title, desc, emoji, colorClass]) => (
            <div key={title} className={`rounded-2xl border ${colorClass} p-6`}>
              <div className="text-3xl mb-3">{emoji}</div>
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="mt-2 leading-relaxed text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        {/* Fitness Philosophy */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-transparent p-6">
            <div className="text-2xl mb-3">🏋️</div>
            <h3 className="font-extrabold">Gym-Philosophie trifft KI</h3>
            <p className="mt-3 leading-relaxed text-white/70">
              Wie beim Sport gilt: Wiederholung schafft Meisterschaft. Unsere KI ist dein Personal Trainer –
              sie korrigiert, motiviert und misst deinen Fortschritt.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-600/10 to-transparent p-6">
            <div className="text-2xl mb-3">📈</div>
            <h3 className="font-extrabold">Messbare Gains</h3>
            <p className="mt-3 leading-relaxed text-white/70">
              Scores, Level, Fortschrittskurven: Du siehst genau, wo du stehst und wie du dich verbesserst.
              Keine vagen Gefühle – sondern echte Daten.
            </p>
          </div>
        </div>
      </section>

      {/* TRAININGSZIELE */}
      <section id="use-cases" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium text-rose-400 uppercase tracking-wider mb-2">Für wen trainieren wir?</p>
        <h2 className="text-3xl font-extrabold tracking-tight">Dein Trainingsziel bestimmt das Gerät</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-white/70">
          Verschiedene Rollen, verschiedene Muskeln. Finde dein optimales Workout.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Sales & Vertrieb", "Abschluss-Muskeln aufbauen: Pipeline, Einwände, Closing.", "SalesFitness", "🎯"],
            ["Führungskräfte", "Leadership-Kraft entwickeln: Feedback, Sicherheit, Klarheit.", "LeadershipFitness", "👔"],
            ["HR & People", "Dialog-Ausdauer trainieren: Onboarding, Kultur, Konflikte.", "DialogFitness", "🤝"],
            ["Kundenservice", "Empathie-Flexibilität steigern: Zuhören, Lösen, Deeskalieren.", "DialogFitness", "💬"],
            ["Coaches & Trainer", "Skalierbare Workouts designen: Messen, Begleiten, Transferieren.", "Alle Geräte", "🎓"],
            ["Wissensarbeiter", "Denk-Fitness boosten: Bias vermeiden, klar entscheiden.", "Metakognitionen.at", "🧠"],
          ].map(([title, desc, platform, emoji]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="text-2xl mb-3">{emoji}</div>
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-white/70 text-sm">{desc}</p>
              <p className="mt-3 text-xs text-violet-400 font-medium">→ {platform}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DER TRAINER */}
      <section id="ueber-uns" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-600/5 to-violet-600/5 p-8 md:p-12">
          <p className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-2">Der Gym-Gründer</p>
          <h2 className="text-3xl font-extrabold tracking-tight">KI als Personal Trainer – nicht als Ersatz für Menschen</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/70">
            Wie beim echten Fitnesstraining: Die Geräte und der Trainer unterstützen dich – aber die Arbeit machst du.
            Unsere KI korrigiert, motiviert und misst. Aber echte Gespräche führst du selbst.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-violet-500 to-emerald-500 flex items-center justify-center text-2xl">
                🏋️
              </div>
              <div>
                <p className="font-bold text-white">Jürgen Melmuka</p>
                <p className="text-sm text-white/60">Gym-Gründer & Head Coach</p>
              </div>
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
        <p className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-2">Häufige Fragen</p>
        <h2 className="text-3xl font-extrabold tracking-tight">Gym-Guide für Einsteiger</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-white/70">
          Alles, was du vor dem ersten Training wissen solltest.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            ["Ist das ein Fitnessstudio oder Software?", "Beides in einem: Trainingsgeräte (Übungen, Simulationen) + Tracking-Software (Scores, Fortschritt, Reports). Wie ein modernes Gym mit App."],
            ["Für welche Teams ist das Gym gemacht?", "B2B-Teams (10–500 Personen). Ideal für Sales, Leadership, HR – überall wo viele Gespräche geführt werden."],
            ["Kann ich eigene Trainingspläne erstellen?", "Ja – Playbook-Abgleich und individuelle Szenarien sind Kernfeatures. Im Probetraining klären wir deine Anforderungen."],
            ["Wie starte ich am schnellsten?", "Mit einem Probetraining: Demo ansehen, 2-4 Wochen testen, dann entscheiden. Kein Abo-Zwang."],
            ["Wie funktioniert der KI-Coach?", "Er analysiert deine Gespräche, gibt Echtzeit-Feedback und schlägt konkrete Verbesserungen vor. Wie ein Personal Trainer, der jede Rep beobachtet."],
            ["Ist das Gym DSGVO-konform?", "100%. Alle Daten bleiben in der EU. Wir bieten AVVs und erfüllen Enterprise-Anforderungen."],
            ["Brauche ich Vorkenntnisse?", "Nein. Die Geräte sind selbsterklärend. Einweisung und Support sind im Probetraining inklusive."],
            ["Was kostet die Mitgliedschaft?", "Abhängig von Teamgröße und gewünschten Geräten. Kontaktiere uns für dein individuelles Angebot."],
          ].map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <summary className="cursor-pointer font-bold">{q}</summary>
              <p className="mt-3 leading-relaxed text-white/70">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* PROBETRAINING */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-transparent p-8">
            <p className="text-sm font-medium text-violet-400 uppercase tracking-wider mb-2">Starte jetzt</p>
            <h2 className="text-3xl font-extrabold tracking-tight">Probetraining buchen</h2>
            <p className="mt-3 leading-relaxed text-white/70">
              Wie im Fitnessstudio: Erst testen, dann entscheiden. Wir zeigen dir die Geräte.
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

            <div className="mt-8 rounded-xl border border-violet-500/30 bg-violet-500/10 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🎟️</span>
                <p className="text-sm font-semibold text-violet-300">Probe-Abo</p>
              </div>
              <p className="text-sm leading-relaxed text-white/70">
                2–4 Wochen Probetraining mit einem Team. Alle Geräte testen, Fortschritt messen, dann entscheiden.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
