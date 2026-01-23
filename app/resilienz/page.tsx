import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ResilienzFitness - Wissenschaftlich fundiertes Resilienz-Training | zuhoeren.academy",
  description: "Stärken Sie die Widerstandskraft Ihrer Teams. 9 Lernmodule, 6 KI-Coaching-Tools, Stimmungsbarometer und Mikro-Workouts. Digital verfügbar, DSGVO-konform.",
};

export default function ResilienzPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 transition mb-8 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zu zuhoeren.academy
        </Link>

        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
            <span className="text-rose-700 text-sm font-medium">Ihr digitaler Partner für mentale Stärke</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            ResilienzFitness
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
            Stärken Sie die Widerstandskraft Ihrer Teams – wissenschaftlich fundiert, digital verfügbar
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Resilienz-Training zugänglich – genau dann, wenn es gebraucht wird. Kein starrer Kursplan, keine Wartezeiten auf Coaching-Termine.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://resilienzfitness.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Kostenlose Demo buchen
            </a>
            <a
              href="mailto:kontakt@zuhoeren.academy?subject=Anfrage%20ResilienzFitness"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 border border-gray-300"
            >
              Pilotprojekt starten
            </a>
          </div>
        </header>

        {/* Problem Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Das Problem, das wir lösen</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { stat: "67%", label: "der Führungskräfte", desc: "berichten von chronischer Erschöpfung" },
                { stat: "1 von 3", label: "im Gesundheitswesen", desc: "denkt über Berufswechsel nach" },
                { stat: "Täglich", label: "Kundenservice-Teams", desc: "erleben emotionale Belastungen" }
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-5 shadow-sm text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-1">{item.stat}</div>
                  <div className="text-gray-900 font-semibold text-sm mb-1">{item.label}</div>
                  <div className="text-gray-500 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-center">
              <strong>Die Kosten?</strong> Milliarden Euro durch Fehlzeiten, Fluktuation und reduzierte Produktivität.
            </p>
          </div>
        </section>

        {/* Target Audiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Konkrete Vorteile für Ihre Zielgruppe</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "👔",
                title: "Für Führungskräfte",
                benefits: [
                  "Schnelle Regeneration nach belastenden Entscheidungen",
                  "Emotionale Stabilität in Krisensituationen bewahren",
                  "Kognitive Flexibilität für bessere Problemlösung",
                  "Vorbildfunktion: Resilienz vorleben und im Team verankern"
                ],
                scenario: "Nach einem schwierigen Personalgespräch nutzt die Führungskraft den \"Resilienz-Coach\" für 10 Minuten, um die Situation zu reflektieren und emotional abzuschließen – bevor das nächste Meeting beginnt.",
                quote: "Als Führungskraft nutze ich den Resilienz-Coach regelmäßig für meine eigene Reflexion. Das macht mich zu einem besseren Leader.",
                author: "Bereichsleiter, Finanzdienstleistung"
              },
              {
                icon: "🩺",
                title: "Für Medizinisches Personal",
                benefits: [
                  "Emotionale Distanzierung ohne Empathieverlust",
                  "Schnelle Erholung zwischen belastenden Patientenkontakten",
                  "Verarbeitung von traumatischen Erlebnissen",
                  "Burnout-Prävention durch frühzeitige Selbstfürsorge"
                ],
                scenario: "Eine Pflegekraft nutzt in der Pause den \"Emotions-Navigator\", um die Belastung nach einem schwierigen Patientenfall zu verarbeiten – diskret am Smartphone.",
                quote: "Die App hat unserer Notaufnahme geholfen, den emotionalen Druck besser zu bewältigen. Besonders der Emotions-Navigator wird täglich genutzt.",
                author: "Pflegedienstleitung, Universitätsklinikum"
              },
              {
                icon: "📞",
                title: "Für Kundenservice & Support",
                benefits: [
                  "Sofortige Stressregulation nach schwierigen Kundengesprächen",
                  "Perspektivwechsel bei festgefahrenen Situationen",
                  "Emotionale Abgrenzung ohne Service-Qualität zu verlieren",
                  "Teamresilienz für besseres Arbeitsklima"
                ],
                scenario: "Nach einem 30-minütigen Beschwerdegespräch nutzt der Mitarbeiter den \"Stresstest-Simulator\", um die Situation zu verarbeiten und wieder neutral ins nächste Gespräch zu gehen.",
                quote: "Mein Team im Kundenservice ist merklich gelassener geworden. Die Krankenstandstage sind um 23% gesunken.",
                author: "Teamleiter Customer Care, E-Commerce"
              },
              {
                icon: "💼",
                title: "Für Key Account Manager",
                benefits: [
                  "Druckresistenz bei Verhandlungen und Deadlines",
                  "Kognitive Klarheit für komplexe Entscheidungen",
                  "Beziehungsmanagement durch emotionale Intelligenz",
                  "Langfristige Leistungsfähigkeit trotz hoher Anforderungen"
                ],
                scenario: "Vor einer wichtigen Kundenverhandlung nutzt der KAM den \"Ressourcen-Finder\", um sich seiner Stärken bewusst zu werden und selbstbewusst aufzutreten.",
                quote: "Der Ressourcen-Finder hat mir geholfen, auch in Hochdruck-Verhandlungen klar zu bleiben und meine Stärken gezielt einzusetzen.",
                author: "Key Account Director, IT-Branche"
              }
            ].map((audience) => (
              <div key={audience.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{audience.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{audience.title}</h3>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-rose-600 mb-2">Ihr Nutzen:</p>
                  <ul className="space-y-1">
                    {audience.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-rose-500 mt-0.5">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-4 mb-4">
                  <p className="text-gray-600 text-xs italic">
                    <span className="font-medium text-gray-700">Typische Anwendung:</span> {audience.scenario}
                  </p>
                </div>
                <div className="bg-rose-50 border border-rose-100 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic mb-2">&ldquo;{audience.quote}&rdquo;</p>
                  <p className="text-rose-600 text-xs font-medium">— {audience.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Was die App bietet</h2>

          {/* Lernmodule */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🎓</span>
              <h3 className="text-xl font-semibold text-gray-900">9 wissenschaftlich fundierte Lernmodule</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Strukturiertes Wissen zu allen Resilienz-Faktoren – von Stressbewältigung bis Krisenwachstum. Jedes Modul enthält Theorie, praktische Übungen und Selbsttests.
            </p>
          </div>

          {/* KI-Coaching Tools */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🤖</span>
              <h3 className="text-xl font-semibold text-gray-900">6 KI-gestützte Coaching-Tools</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Persönliche Unterstützung durch spezialisierte KI-Coaches – verfügbar 24/7, diskret und ohne Wartezeiten:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Resilienz-Coach", desc: "Persönliche Begleitung bei aktuellen Herausforderungen" },
                { name: "Stresstest-Simulator", desc: "Sicheres Üben von Stresssituationen" },
                { name: "Emotions-Navigator", desc: "Gefühle verstehen und regulieren" },
                { name: "Perspektiven-Wechsler", desc: "Neue Sichtweisen entwickeln" },
                { name: "Ressourcen-Finder", desc: "Eigene Stärken entdecken" },
                { name: "Krisen-Reflexion", desc: "Aus Vergangenem lernen" }
              ].map((tool) => (
                <div key={tool.name} className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{tool.name}</h4>
                  <p className="text-gray-600 text-xs">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: "📊",
                title: "Persönliches Stimmungsbarometer",
                desc: "Tägliche Selbsteinschätzung mit KI-gestützten Empfehlungen. Erkennen Sie Muster und reagieren Sie frühzeitig auf Belastungssignale."
              },
              {
                icon: "📝",
                title: "Reflexions-Journal",
                desc: "Strukturierte Selbstreflexion mit bewährten Methoden – vom Dankbarkeitstagebuch bis zur Situationsanalyse."
              },
              {
                icon: "💪",
                title: "Mikro-Workouts",
                desc: "Kurze, effektive Übungen für zwischendurch – von Atemtechniken bis Achtsamkeitsübungen."
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Warum zuhoeren.academy?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "📚",
                title: "Wissenschaftlich fundiert",
                desc: "Alle Inhalte basieren auf aktueller Resilienzforschung und werden regelmäßig aktualisiert."
              },
              {
                icon: "🎯",
                title: "Praxiserprobt",
                desc: "Entwickelt mit und für Menschen in anspruchsvollen Berufen."
              },
              {
                icon: "🔒",
                title: "Datenschutzkonform",
                desc: "DSGVO-konform, Server in der EU, höchste Sicherheitsstandards."
              },
              {
                icon: "📱",
                title: "Flexibel integrierbar",
                desc: "Web-App funktioniert auf allen Geräten – keine Installation nötig."
              }
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Investition in Ihre Mitarbeiter</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Einzel",
                desc: "Vollzugriff für eine Person",
                ideal: "Selbstzahler, Einzelcoaching",
                highlight: false
              },
              {
                name: "Team",
                desc: "5-20 Lizenzen",
                ideal: "Abteilungen, kleine Teams",
                highlight: true
              },
              {
                name: "Enterprise",
                desc: "Ab 20 Lizenzen",
                ideal: "Gesamte Organisationen",
                highlight: false
              }
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                <h3 className={`text-xl font-semibold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-4 ${plan.highlight ? 'text-rose-100' : 'text-gray-600'}`}>
                  {plan.desc}
                </p>
                <p className={`text-sm ${plan.highlight ? 'text-rose-100' : 'text-gray-500'}`}>
                  Ideal für: {plan.ideal}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm mt-6">
            <strong>Alle Pakete beinhalten:</strong> Vollzugriff auf alle Module, KI-Coaches und Features.
          </p>
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Nächste Schritte</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Kostenlose Demo buchen",
                desc: "Erleben Sie die App in einer 30-minütigen Live-Demonstration."
              },
              {
                step: "2",
                title: "Pilotprojekt starten",
                desc: "Testen Sie mit einem Team über 4 Wochen – wir begleiten Sie."
              },
              {
                step: "3",
                title: "Rollout planen",
                desc: "Gemeinsam entwickeln wir Ihre Implementierungsstrategie."
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <footer className="text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resilienz ist trainierbar. Starten Sie heute.</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Buchen Sie eine kostenlose Demo und erleben Sie, wie die ResilienzFitness-App Ihre Teams stärker macht.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://resilienzfitness.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Kostenlose Demo buchen
              </a>
              <a
                href="mailto:kontakt@zuhoeren.academy?subject=Pilotprojekt%20ResilienzFitness"
                className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-gray-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Pilotprojekt anfragen
              </a>
            </div>
            <p className="text-gray-500 text-sm">ResilienzFitness.studio – Ein Produkt von zuhoeren.academy</p>
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
              className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition font-medium"
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
