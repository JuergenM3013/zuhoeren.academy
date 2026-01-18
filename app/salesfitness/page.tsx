import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SalesFitness - KI-gestütztes Vertriebscoaching | zuhoeren.academy",
  description: "SalesFitness ist die erste KI-gestützte Coaching-Plattform, die Verkaufsgespräche automatisch analysiert, konkretes Feedback liefert und personalisiertes Training ermöglicht.",
};

export default function SalesFitnessPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition mb-8 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zu zuhoeren.academy
        </Link>

        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-teal-700 text-sm font-medium">KI-gestütztes Vertriebscoaching</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            SalesFitness
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            Dein KI-Coach für messbar bessere Verkaufsgespräche
          </p>
        </header>

        {/* Problem Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Das Problem</h2>
                <p className="text-gray-700 leading-relaxed">
                  Vertriebsteams verlieren jährlich <span className="text-red-600 font-semibold">Millionen</span> durch vermeidbare Gesprächsfehler.
                  Fehlende Bedarfsanalyse, schwache Einwandbehandlung und verpasste Abschlusschancen kosten Umsatz.
                  Klassische Trainings sind teuer, zeitaufwändig und zeigen selten nachhaltige Wirkung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Die Lösung: SalesFitness</h2>
                <p className="text-gray-700 leading-relaxed">
                  SalesFitness ist die <span className="text-teal-600 font-semibold">erste KI-gestützte Coaching-Plattform</span>,
                  die Verkaufsgespräche automatisch analysiert, konkretes Feedback liefert und personalisiertes Training ermöglicht – rund um die Uhr.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">So funktioniert&apos;s</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Gespräch hochladen",
                desc: "Audio-Datei hochladen oder direkt aufnehmen",
                feature: "Automatische Transkription"
              },
              {
                step: "2",
                title: "KI-Analyse erhalten",
                desc: "20+ Metriken werden ausgewertet",
                feature: "Detailliertes Feedback in < 2 Min"
              },
              {
                step: "3",
                title: "Gezielt trainieren",
                desc: "Personalisierte Übungen basierend auf Schwächen",
                feature: "Messbare Verbesserung"
              }
            ].map((item) => (
              <div key={item.step} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-4 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <div className="text-teal-600 text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item.feature}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modules Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Die Module</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "🎙️",
                title: "Gesprächsanalyse",
                features: [
                  "Tonalität, Sprechtempo, Gesprächsführung",
                  "Automatische Erkennung von Stärken & Schwächen",
                  "Ampel-System für schnellen Überblick"
                ]
              },
              {
                icon: "🤖",
                title: "KI-Simulator",
                features: [
                  "Realistische Verkaufsgespräche üben",
                  "Verschiedene Kundentypen & Schwierigkeitsgrade",
                  "Sofortiges Feedback nach jedem Gespräch"
                ]
              },
              {
                icon: "📊",
                title: "Benchmark-Tracking",
                features: [
                  "Vergleich mit internen & externen Benchmarks",
                  "Fortschrittsverfolgung über Zeit",
                  "Team-Vergleiche für Manager"
                ]
              },
              {
                icon: "📚",
                title: "Playbook-Abgleich",
                features: [
                  "Automatischer Vergleich mit Verkaufsleitfäden",
                  "Erkennung verpasster Talking Points",
                  "Konkrete Verbesserungsvorschläge"
                ]
              },
              {
                icon: "🎯",
                title: "Skill-Training",
                features: [
                  "6 spezialisierte Coaches",
                  "Übungen basierend auf echten Gesprächsszenen",
                  "Adaptives Lernen"
                ]
              },
              {
                icon: "👥",
                title: "Team-Dashboard",
                features: [
                  "Performance-Übersicht für Teamleiter",
                  "Individuelle Entwicklungspläne",
                  "Reporting & Export-Funktionen"
                ]
              }
            ].map((module) => (
              <div key={module.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{module.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-teal-500 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Ihre Vorteile</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: "⚡", title: "Zeitersparnis", desc: "Feedback in unter 2 Minuten" },
              { icon: "📈", title: "Skalierbarkeit", desc: "10 oder 1.000 Mitarbeiter" },
              { icon: "📊", title: "Messbarkeit", desc: "Fortschritte mit konkreten KPIs" },
              { icon: "🕐", title: "Verfügbarkeit", desc: "24/7 Training" },
              { icon: "🔒", title: "Datenschutz", desc: "DSGVO-konform, EU-Hosting" }
            ].map((benefit) => (
              <div key={benefit.title} className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-xs">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">Zahlen & Fakten</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "20+", label: "Analyse-Dimensionen" },
                { value: "6", label: "Training-Module" },
                { value: "< 2", label: "Minuten Analyse-Zeit" },
                { value: "24/7", label: "Verfügbarkeit" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-teal-50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Für wen ist SalesFitness?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "👔", title: "Vertriebsleiter", desc: "Team-Performance steigern und messen" },
              { icon: "💼", title: "Sales-Mitarbeiter", desc: "Individuelle Stärken ausbauen" },
              { icon: "🎓", title: "HR & L&D", desc: "Skalierbare Vertriebstrainings ausrollen" },
              { icon: "🏢", title: "Geschäftsführer", desc: "ROI-starke Vertriebsentwicklung" }
            ].map((audience) => (
              <div key={audience.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">{audience.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-gray-600 text-sm">{audience.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <footer className="text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Jetzt starten</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <a
                href="https://www.salesfitness.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                www.salesfitness.studio
              </a>
              <a
                href="mailto:kontakt@salesfitness.studio"
                className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-gray-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                kontakt@salesfitness.studio
              </a>
            </div>
            <p className="text-gray-600 text-sm">🌐 www.salesfitness.at | www.salesfitness.studio</p>
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
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition font-medium"
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
