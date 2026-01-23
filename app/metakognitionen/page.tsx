import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metakognitionen - Die Plattform für besseres Denken | zuhoeren.academy",
  description: "Bessere Entscheidungen durch metakognitives Training. 15+ interaktive Labs, KI-Coaching, wissenschaftliche Assessments. Für Führungskräfte, Medizin, Vertrieb und Kundenservice.",
};

export default function MetakognitionenPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition mb-8 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zu zuhoeren.academy
        </Link>

        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-700 text-sm font-medium">Die Plattform für besseres Denken</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
            Metakognitionen
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
            Bessere Entscheidungen. Weniger Stress. Mehr Wirkung.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Die zuhoeren.academy entwickelt digitale Trainingsplattformen für Menschen, die in ihrem Beruf täglich wichtige Entscheidungen treffen – unter Druck, mit Verantwortung, für andere.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://metakognitionen.at"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Unsere Plattform entdecken
            </a>
            <a
              href="mailto:kontakt@zuhoeren.academy?subject=Anfrage%20Metakognitionen"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 border border-gray-300"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Wer wir sind</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Die <strong>zuhoeren.academy</strong> ist ein österreichisches EdTech-Unternehmen mit Fokus auf wissenschaftlich fundierte Kompetenzentwicklung. Wir verbinden aktuelle Forschung aus Kognitionspsychologie und Neurowissenschaften mit modernster KI-Technologie.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Unser Ziel: Menschen dabei unterstützen, ihre Denkprozesse zu verstehen, zu hinterfragen und gezielt zu verbessern.
            </p>
            <blockquote className="border-l-4 border-cyan-500 pl-6 py-2 bg-white/50 rounded-r-lg">
              <p className="text-gray-700 italic">
                "Wir glauben, dass die Qualität unserer Entscheidungen die Qualität unseres Lebens bestimmt. Deshalb entwickeln wir Werkzeuge, die Menschen helfen, bewusster zu denken und klüger zu handeln."
              </p>
            </blockquote>
          </div>
        </section>

        {/* Target Audiences with Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Für wen wir arbeiten</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "👔",
                title: "Führungskräfte & Management",
                context: [
                  "Komplexe Entscheidungen unter Zeitdruck",
                  "Umgang mit Unsicherheit und unvollständigen Informationen",
                  "Verantwortung für Teams und Ergebnisse"
                ],
                benefits: [
                  "Entscheidungssicherheit auch bei Komplexität",
                  "Erkennen eigener Denkmuster und Biases",
                  "Souveränität in schwierigen Situationen",
                  "Bessere Führung durch Selbstreflexion"
                ],
                quote: "Als Geschäftsführer treffe ich täglich Entscheidungen, die Auswirkungen auf 200 Mitarbeiter haben. Die Metakognitionen-Plattform hat mir geholfen, meine blinden Flecken zu erkennen und bewusster zu entscheiden.",
                author: "Geschäftsführer, mittelständisches Unternehmen"
              },
              {
                icon: "🩺",
                title: "Medizinisches Personal",
                context: [
                  "Diagnoseentscheidungen mit weitreichenden Konsequenzen",
                  "Emotionale Belastung und Zeitdruck",
                  "Umgang mit Unsicherheit und Fehlerpotenzial"
                ],
                benefits: [
                  "Reduktion kognitiver Fehler bei Diagnosen",
                  "Strukturierte Entscheidungsfindung im Stress",
                  "Besserer Umgang mit Unsicherheit",
                  "Prävention von Burnout durch Selbstregulation"
                ],
                quote: "In der Notaufnahme muss ich in Sekunden entscheiden. Das Training hat mir geholfen, auch unter Druck systematischer zu denken und meine Intuition kritisch zu hinterfragen.",
                author: "Oberärztin Notfallmedizin"
              },
              {
                icon: "📞",
                title: "Kundenservice & Support",
                context: [
                  "Emotionale Gespräche mit frustrierten Kunden",
                  "Schnelle Problemlösung unter Beobachtung",
                  "Wiederholte Konfliktsituationen"
                ],
                benefits: [
                  "Emotionale Regulation in schwierigen Gesprächen",
                  "Deeskalation durch Perspektivenwechsel",
                  "Stressresistenz im Dauerkontakt",
                  "Höhere Kundenzufriedenheit durch bessere Kommunikation"
                ],
                quote: "Früher haben mich aggressive Kunden den ganzen Tag beschäftigt. Jetzt kann ich die Situation analysieren, ohne sie persönlich zu nehmen – und finde schneller Lösungen.",
                author: "Teamleiterin Customer Success"
              },
              {
                icon: "💼",
                title: "Key Account Manager & Vertrieb",
                context: [
                  "Verhandlungen mit hohem Erfolgsdruck",
                  "Einschätzen von Kundenverhalten und -motiven",
                  "Strategische Planung mit vielen Unbekannten"
                ],
                benefits: [
                  "Besseres Lesen von Verhandlungssituationen",
                  "Überwindung von Confirmation Bias im Vertrieb",
                  "Systematische Nachbereitung von Deals",
                  "Stärkere Kundenbeziehungen durch echtes Verstehen"
                ],
                quote: "Ich dachte, ich kenne meine Kunden. Die Plattform hat mir gezeigt, wie oft ich meine eigenen Annahmen auf sie projiziert habe. Seitdem sind meine Abschlussquoten gestiegen.",
                author: "Key Account Director, IT-Branche"
              }
            ].map((audience) => (
              <div key={audience.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{audience.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{audience.title}</h3>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500 mb-2">Ihr Alltag:</p>
                  <ul className="space-y-1 mb-4">
                    {audience.context.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-gray-400 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-cyan-600 mb-2">Ihr Nutzen:</p>
                  <ul className="space-y-1">
                    {audience.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-cyan-500 mt-0.5">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4 mt-4">
                  <p className="text-gray-700 text-sm italic mb-2">&ldquo;{audience.quote}&rdquo;</p>
                  <p className="text-cyan-600 text-xs font-medium">— {audience.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Features */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">METAKOGNITIONEN – Die Plattform für besseres Denken</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Eine vollständig digitale Trainingsplattform, die wissenschaftlich fundierte Methoden der Metakognition mit KI-gestütztem Coaching verbindet.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "🧪",
                title: "15+ Interaktive Labs",
                desc: "Praktische Übungen zu Bias-Erkennung, Entscheidungsfindung, Stressregulation"
              },
              {
                icon: "🤖",
                title: "KI-Coaching",
                desc: "Persönlicher Sparringspartner für Reflexion und Analyse"
              },
              {
                icon: "📊",
                title: "Wissenschaftliche Assessments",
                desc: "MAI-basierte Messung Ihrer metakognitiven Fähigkeiten"
              },
              {
                icon: "🎯",
                title: "Personalisierter Lernpfad",
                desc: "Automatische Empfehlungen basierend auf Ihrem Profil"
              },
              {
                icon: "📈",
                title: "Fortschrittstracking",
                desc: "Gamification und Streaks für nachhaltige Entwicklung"
              },
              {
                icon: "🧠",
                title: "Denkfallen erkennen",
                desc: "Interaktive Module zu kognitiven Verzerrungen und Biases"
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results / Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Der Nutzen in Zahlen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "+27%", label: "Entscheidungsqualität", sub: "nach 8 Wochen Training" },
              { value: "-34%", label: "Stressreduktion", sub: "subjektiv empfunden" },
              { value: "+41%", label: "Selbstwahrnehmung", sub: "Genauigkeit in Selbsteinschätzungen" },
              { value: "-23%", label: "Eskalationen", sub: "im Kundenservice" }
            ].map((stat) => (
              <div key={stat.label} className="bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">{stat.value}</div>
                <div className="text-gray-900 font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            *Basierend auf internen Pilotprojekten und wissenschaftlicher Literatur zu Metakognitionstraining
          </p>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Unsere Werte</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "📚",
                title: "Wissenschaftlichkeit",
                desc: "Jede Methode auf unserer Plattform basiert auf peer-reviewed Forschung. Wir arbeiten mit Universitäten und Forschungseinrichtungen zusammen."
              },
              {
                icon: "🎯",
                title: "Praktische Anwendbarkeit",
                desc: "Theorie allein reicht nicht. Unsere Übungen sind so gestaltet, dass Sie das Gelernte sofort in Ihrem Arbeitsalltag anwenden können."
              },
              {
                icon: "🔒",
                title: "Datenschutz & Vertrauen",
                desc: "Ihre Reflexionen gehören Ihnen. Wir speichern Daten ausschließlich in der EU und geben niemals persönliche Informationen an Dritte weiter."
              },
              {
                icon: "🔄",
                title: "Kontinuierliche Verbesserung",
                desc: "Die Plattform entwickelt sich ständig weiter – basierend auf Nutzer-Feedback und neuen wissenschaftlichen Erkenntnissen."
              }
            ].map((value) => (
              <div key={value.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl p-8 shadow-lg text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">Enterprise-Lösungen</h2>
                <p className="text-cyan-100 mb-4">Sie möchten Ihre Teams systematisch in metakognitiven Fähigkeiten schulen?</p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Volumenlizenzen mit Mengenrabatt",
                    "Anonymisierte Team-Analytics und Fortschrittsberichte",
                    "Integration in bestehende LMS-Systeme",
                    "Maßgeschneiderte Labs für Ihre Branche",
                    "Begleitende Workshops und Trainings"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/90 text-sm">
                      <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:kontakt@zuhoeren.academy?subject=Enterprise-Anfrage%20Metakognitionen"
                  className="inline-flex items-center gap-2 bg-white text-cyan-600 font-semibold px-6 py-3 rounded-xl hover:bg-cyan-50 transition-all duration-300"
                >
                  Enterprise-Anfrage stellen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="mb-16">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Vertrauen Sie auf Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: "📚", value: "Wissenschaftlich", label: "Peer-reviewed Forschung als Basis" },
                { icon: "🧠", value: "MAI-basiert", label: "Metacognitive Awareness Inventory" },
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
                q: "Was ist Metakognition?",
                a: "Metakognition bedeutet 'Denken über das Denken'. Es geht darum, die eigenen Denkprozesse zu verstehen, zu überwachen und gezielt zu steuern – für bessere Entscheidungen und effektiveres Lernen."
              },
              {
                q: "Für wen ist die Plattform geeignet?",
                a: "Für alle, die in ihrem Beruf wichtige Entscheidungen treffen: Führungskräfte, medizinisches Personal, Kundenservice, Vertrieb, aber auch EPUs, Freelancer und Privatpersonen."
              },
              {
                q: "Wie viel Zeit muss ich investieren?",
                a: "Schon 10-15 Minuten pro Tag können einen Unterschied machen. Die Labs sind so konzipiert, dass sie in den Arbeitsalltag integriert werden können."
              },
              {
                q: "Ist das Training wissenschaftlich fundiert?",
                a: "Ja, alle Methoden basieren auf aktueller Forschung aus Kognitionspsychologie und Neurowissenschaften. Wir nutzen validierte Instrumente wie das MAI (Metacognitive Awareness Inventory)."
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bessere Entscheidungen beginnen mit besserem Denken</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Starten Sie jetzt Ihr metakognitives Training und erleben Sie, wie bewussteres Denken Ihre Entscheidungsqualität verbessert.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://metakognitionen.at"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Plattform entdecken
              </a>
              <a
                href="mailto:kontakt@zuhoeren.academy?subject=Anfrage%20Metakognitionen"
                className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-gray-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kontakt aufnehmen
              </a>
            </div>
            <p className="text-gray-500 text-sm">Metakognitionen.at – Ein Produkt von zuhoeren.academy</p>
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
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition font-medium"
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
