import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DialogFitness - KI-gestützte Dialogsimulationen | zuhoeren.academy",
  description: "Trainieren Sie Ihre Kommunikationskompetenz mit KI-gestützten Dialogsimulationen. Realistische Szenarien, sofortiges Feedback, messbarer Fortschritt für Führungskräfte, Medizin und Service.",
};

export default function DialogFitnessPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition mb-8 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zu zuhoeren.academy
        </Link>

        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 text-sm font-medium">KI-gestützte Dialogsimulationen</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            DialogFitness
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
            Bessere Gespräche. Stärkere Beziehungen. Messbarer Erfolg.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trainieren Sie Ihre Kommunikationskompetenz mit KI-gestützten Dialogsimulationen – jederzeit, überall und ohne Risiko.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://dialogfitness.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Jetzt kostenlos testen
            </a>
            <a
              href="mailto:hallo@zuhoeren.academy?subject=Demo%20DialogFitness"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 border border-gray-300"
            >
              Demo vereinbaren
            </a>
          </div>
        </header>

        {/* Target Audiences with Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Für wen ist DialogFitness?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "👔",
                title: "Führungskräfte & Team-Leader",
                benefits: [
                  "Schwierige Mitarbeitergespräche souverän meistern",
                  "Feedback geben, das wirklich ankommt",
                  "Konflikte im Team konstruktiv lösen",
                  "Veränderungsprozesse erfolgreich kommunizieren"
                ],
                quote: "Seit ich mit DialogFitness trainiere, fühle ich mich in Jahresgesprächen deutlich sicherer. Die KI-Simulationen haben mir geholfen, auch bei emotionalen Reaktionen ruhig zu bleiben.",
                author: "Teamleiterin, IT-Branche"
              },
              {
                icon: "🩺",
                title: "Medizinisches Personal",
                benefits: [
                  "Empathische Patientenkommunikation in stressigen Situationen",
                  "Schwierige Diagnosen einfühlsam übermitteln",
                  "Angehörigengespräche professionell führen",
                  "Interdisziplinäre Teamkommunikation verbessern"
                ],
                quote: "Die Übungsszenarien für Aufklärungsgespräche sind unglaublich realistisch. Ich kann jetzt auch unter Zeitdruck patientenzentriert kommunizieren.",
                author: "Oberärztin, Innere Medizin"
              },
              {
                icon: "📞",
                title: "Kundenservice & Support",
                benefits: [
                  "Beschwerden in Chancen verwandeln",
                  "Deeskalierende Gesprächsführung trainieren",
                  "Auch bei aggressiven Kunden professionell bleiben",
                  "Lösungsorientiert kommunizieren"
                ],
                quote: "Meine Kundenzufriedenheitswerte haben sich um 23% verbessert, seit ich regelmäßig mit den schwierigen Kundenszenarien trainiere.",
                author: "Customer Success Manager, SaaS-Unternehmen"
              },
              {
                icon: "💼",
                title: "Key Account Manager & Vertrieb",
                benefits: [
                  "Einwände souverän behandeln",
                  "Preisverhandlungen erfolgreich führen",
                  "Langfristige Kundenbeziehungen aufbauen",
                  "Komplexe Deals zum Abschluss bringen"
                ],
                quote: "Die MI-Technik-Übungen haben meine Abschlussquote deutlich erhöht. Ich verstehe jetzt wirklich, was meine Kunden bewegt.",
                author: "Senior Key Account Manager, Maschinenbau"
              }
            ].map((audience) => (
              <div key={audience.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{audience.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{audience.title}</h3>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-emerald-600 mb-2">Ihr Nutzen:</p>
                  <ul className="space-y-1">
                    {audience.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-emerald-500 mt-0.5">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mt-4">
                  <p className="text-gray-700 text-sm italic mb-2">&ldquo;{audience.quote}&rdquo;</p>
                  <p className="text-emerald-600 text-xs font-medium">— {audience.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What makes DialogFitness unique */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Was macht DialogFitness einzigartig?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                number: "1",
                title: "Realistische KI-Gesprächspartner",
                desc: "Unsere KI-Personas reagieren wie echte Menschen – mit Emotionen, Widerstand und authentischen Reaktionen. Kein Skript, keine vorhersehbaren Antworten."
              },
              {
                number: "2",
                title: "Personalisierte Szenarien",
                desc: "Basierend auf Ihrer Branche, Rolle und persönlichen Herausforderungen generiert unsere KI maßgeschneiderte Übungsszenarien, die genau zu Ihrem Arbeitsalltag passen."
              },
              {
                number: "3",
                title: "Wissenschaftlich fundiert",
                desc: "Alle Trainingsmethoden basieren auf bewährten Kommunikationsmodellen: Motivational Interviewing, Carl Rogers, GFK, SBI-Feedback."
              },
              {
                number: "4",
                title: "Sofortiges Feedback",
                desc: "Detaillierte Analysen zu Empathie, Gesprächsführung, Zuhörtechniken und konkrete Verbesserungsvorschläge nach jedem Gespräch."
              },
              {
                number: "5",
                title: "Messbare Fortschritte",
                desc: "Team-Listening-Assessment, Kommunikations-Kompetenzprofil, Zuhörtechnik-Analyse und persönliche Benchmark-Vergleiche."
              }
            ].map((item) => (
              <div key={item.number} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mb-4 text-lg font-bold text-white">
                  {item.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Training Modules Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Die 5 Trainingsmodule</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                icon: "💬",
                title: "Feedback-Training",
                focus: "Konstruktives Feedback geben und annehmen",
                ideal: "Führungskräfte, HR"
              },
              {
                icon: "🔥",
                title: "Schwierige Gespräche",
                focus: "Konflikte, Kritik, emotionale Situationen",
                ideal: "Alle Zielgruppen"
              },
              {
                icon: "👂",
                title: "Aktives Zuhören",
                focus: "Zuhörtechniken und Empathie",
                ideal: "Medizin, Beratung"
              },
              {
                icon: "🎯",
                title: "MI-Training",
                focus: "Motivational Interviewing Techniken",
                ideal: "Vertrieb, Coaching"
              },
              {
                icon: "🛡️",
                title: "Feedback empfangen",
                focus: "Kritik professionell annehmen",
                ideal: "Alle Zielgruppen"
              }
            ].map((module) => (
              <div key={module.title} className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">{module.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-gray-600 text-xs mb-3">{module.focus}</p>
                <div className="text-emerald-600 text-xs font-medium">
                  Ideal für: {module.ideal}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 shadow-lg text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">Premium: Individuelles Dialogcoaching</h2>
                <p className="text-emerald-100 mb-4">Für maximale Relevanz:</p>
                <ul className="space-y-2">
                  {[
                    "Erstellen Sie Ihr persönliches Berufsprofil",
                    "Erhalten Sie KI-generierte Szenarien aus Ihrer Branche",
                    "Trainieren Sie mit Personas, die Ihre typischen Gesprächspartner widerspiegeln",
                    "Integrieren Sie Ihre Evaluierungsergebnisse für adaptive Schwierigkeitsgrade"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/90 text-sm">
                      <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Start */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">So starten Sie</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Kostenlos registrieren",
                desc: "Sofort Zugang zu Basis-Szenarien"
              },
              {
                step: "2",
                title: "Erstes Training",
                desc: "In 10 Minuten zum ersten Erfolgserlebnis"
              },
              {
                step: "3",
                title: "Fortschritte messen",
                desc: "Mit unseren Evaluierungstools"
              },
              {
                step: "4",
                title: "Premium upgraden",
                desc: "Für personalisierte Szenarien (optional)"
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="mb-16">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Vertrauen Sie auf Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: "📚", value: "10+ Jahre", label: "Erfahrung in Kommunikationstraining" },
                { icon: "🔬", value: "Wissenschaftlich", label: "Basierend auf aktueller Forschung" },
                { icon: "🔒", value: "DSGVO-konform", label: "Ihre Daten bleiben in Europa" },
                { icon: "🇦🇹", value: "Made in Austria", label: "Entwickelt von zuhoeren.academy" }
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-lg font-bold text-gray-900">{item.value}</div>
                  <div className="text-gray-600 text-xs">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Häufige Fragen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                q: "Wie realistisch sind die KI-Gespräche?",
                a: "Sehr realistisch. Unsere KI-Personas basieren auf psychologischen Profilen und reagieren authentisch auf Ihre Gesprächsführung – inklusive Emotionen und Widerstand."
              },
              {
                q: "Kann ich auch mobil trainieren?",
                a: "Ja, DialogFitness funktioniert auf allen Geräten – Desktop, Tablet und Smartphone."
              },
              {
                q: "Wie viel Zeit brauche ich pro Training?",
                a: "Ein Übungsgespräch dauert 5-15 Minuten. Schon 2-3 Trainings pro Woche zeigen messbare Verbesserungen."
              },
              {
                q: "Ersetzen KI-Trainings echte Workshops?",
                a: "Nein, sie ergänzen sie. DialogFitness bietet unbegrenztes Üben zwischen Präsenztrainings – so festigen Sie das Gelernte nachhaltig."
              }
            ].map((item) => (
              <details key={item.q} className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-300">
                <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
                  {item.q}
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <footer className="text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bereit für bessere Gespräche?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Starten Sie jetzt Ihr Training und erleben Sie, wie KI-gestützte Dialogsimulationen Ihre Kommunikation verbessern.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://dialogfitness.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Jetzt kostenlos starten
              </a>
              <a
                href="mailto:hallo@zuhoeren.academy?subject=Demo%20DialogFitness"
                className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-gray-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Demo vereinbaren
              </a>
            </div>
            <p className="text-gray-500 text-sm">DialogFitness.Studio – Ein Produkt von zuhoeren.academy</p>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm flex-wrap">
            <span>🇦🇹</span>
            <span>Made in Austria</span>
            <span className="mx-2">•</span>
            <span>🇪🇺</span>
            <span>EU-Hosting</span>
            <span className="mx-2">•</span>
            <span>🔒</span>
            <span>DSGVO-konform</span>
          </div>

          {/* Back to Main */}
          <div className="mt-8">
            <Link
              href="/#produkte"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Alle Plattformen ansehen
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
