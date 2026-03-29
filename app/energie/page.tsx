import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kundenservice-Training für Energiedienstleister",
  description:
    "Seminar & KI-Lernstudios für Kundenservice in der Energiebranche. Beschwerdemanagement, Deeskalation, Resilienz. 2.000+ Seminartage Erfahrung. Referenzen aus der Branche.",
  keywords: [
    "Kundenservice Training Energieversorger",
    "Kommunikation Energiebranche",
    "Beschwerdemanagement Training",
    "Deeskalation Kundenservice",
    "Zuhörakademie",
    "DialogFitness",
    "ResilienzFitness",
  ],
};

export default function EnergiePage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 left-10 h-80 w-80 rounded-full bg-amber-600/20 blur-3xl" />
          <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
            Weiterbildung für Energiedienstleister
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Ihr Team spricht täglich mit Hunderten Kunden.{" "}
            <span className="text-amber-400">Was dann passiert, entscheidet das Zuhören.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Preisgespräche mit frustrierten Kunden. Beschwerden zu Störungen und Verzögerungen. Eskalationen, die niemand will. Wie Ihr Kundenservice-Team in diesen Momenten kommuniziert, entscheidet über Kundenzufriedenheit, Teambelastung und den Ruf Ihres Unternehmens.
          </p>
          <p className="mt-4 text-base font-semibold text-white/90">
            Mit unserem Seminar- und Lernstudioangebot entwickeln wir genau das.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#kontakt" className="rounded-xl bg-amber-600 hover:bg-amber-500 px-5 py-3 font-semibold transition">
              Gespräch anfragen
            </a>
            <a href="#wege" className="rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 font-semibold transition">
              Unser Ansatz
            </a>
          </div>
        </div>
      </section>

      {/* WEITERBILDUNGSINHALTE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium text-amber-400 uppercase tracking-wider mb-2">Weiterbildungsinhalte</p>
        <h2 className="text-3xl font-extrabold tracking-tight">Was Ihr Team lernt</h2>
        <div className="mt-8 space-y-3">
          {[
            "Was wirksames Zuhören im Kundenkontakt wirklich bedeutet – und warum es sich von bloßem Hören unterscheidet",
            "Wie tiefes Zuhören bei Beschwerden Verständnis schafft, Spannung löst und zur Klärung führt",
            "Wertschätzende Gesprächsführung bei schwierigen Botschaften – Preiserhöhungen, Ausfälle, Verzögerungen",
            "Innere Verhinderer erkennen: Was blockiert mein Zuhören – und wie überwinde ich es im Gespräch?",
            "Die sieben Säulen des Zuhörens: Was macht mich zu jemandem, dem Kunden wirklich zuhören?",
            "Wie gehe ich mit Angriffen, Beleidigungen und heftiger Kritik um – Elemente der Resilienz für den Alltag",
            "Wie erkenne ich weiteren Kundenbedarf – und wie formuliere ich das passende Angebot?",
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="text-amber-400 font-bold shrink-0">→</span>
              <p className="text-sm text-white/80 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VORTEILE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-600/5 to-transparent p-8 md:p-12">
          <p className="text-sm font-medium text-amber-400 uppercase tracking-wider mb-2">Ihre Vorteile</p>
          <h2 className="text-3xl font-extrabold tracking-tight">Warum sich das lohnt</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { icon: "🤝", text: "Kunden, die sich gehört fühlen, eskalieren seltener – und binden sich stärker an Ihr Unternehmen." },
              { icon: "🎯", text: "Ihr Team reagiert sicherer, weil es versteht, was hinter einem Einwand wirklich steckt." },
              { icon: "💬", text: "Schwierige Gespräche werden beherrschbar – nicht durch Floskeln, sondern durch echte Gesprächskompetenz." },
              { icon: "📈", text: "Was im Seminar gelernt wird, bleibt nachhaltig im Alltag – durch KI-gestütztes Training." },
            ].map((item) => (
              <div key={item.text} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <p className="text-sm text-white/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 WEGE */}
      <section id="wege" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-amber-600/5 via-transparent to-violet-600/5" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-medium text-amber-400 uppercase tracking-wider mb-2">Unser Ansatz</p>
          <h2 className="text-3xl font-extrabold tracking-tight">Drei Wege zu besserer Kundenkommunikation</h2>
          <p className="mt-2 max-w-2xl text-white/70 leading-relaxed">
            Wählen Sie den Weg, der zu Ihrem Team passt – vom Kombi-Paket bis zum reinen KI-Training.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Weg 1 – KI-Studios */}
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-bold text-amber-300">Empfohlen</span>
                <span className="text-xs text-white/50">Weg 1</span>
              </div>
              <h3 className="font-bold text-lg">KI-Lernstudios</h3>
              <p className="mt-2 text-sm text-white/60 italic">Sofort starten – jederzeit trainieren, 24/7 verfügbar</p>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl bg-emerald-500/10 p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">DialogFitness Studio</p>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">Live</span>
                  </div>
                  <ul className="space-y-1 text-sm text-white/70">
                    <li className="flex gap-2"><span className="text-emerald-400">·</span> 50+ realistische Szenarien mit KI-Feedback</li>
                    <li className="flex gap-2"><span className="text-emerald-400">·</span> Beschwerden, Deeskalation, Beratung</li>
                    <li className="flex gap-2"><span className="text-emerald-400">·</span> Messbare Fortschritte, Team-Dashboard</li>
                    <li className="flex gap-2"><span className="text-emerald-400">·</span> Stundenkontingente flexibel buchbar</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-rose-500/10 p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs font-bold text-rose-400 uppercase tracking-wider">ResilienzFitness Studio</p>
                    <span className="rounded-full bg-rose-500/20 px-2 py-0.5 text-[10px] font-bold text-rose-300">Live</span>
                  </div>
                  <ul className="space-y-1 text-sm text-white/70">
                    <li className="flex gap-2"><span className="text-rose-400">·</span> Tägliche Resilienz-Praxis (2–10 Min.)</li>
                    <li className="flex gap-2"><span className="text-rose-400">·</span> Stressbarometer & persönliche Analyse</li>
                    <li className="flex gap-2"><span className="text-rose-400">·</span> KI-Coach für schwierige Situationen</li>
                    <li className="flex gap-2"><span className="text-rose-400">·</span> Auch als BGM-Angebot buchbar</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-violet-500/5 border border-violet-500/10 p-3">
                  <p className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-1">Kombination beider Studios</p>
                  <p className="text-sm text-white/70">Gesprächskompetenz trifft mentale Stärke – zwei Lernwelten, ein Anbieter, ein Ansprechpartner.</p>
                </div>
              </div>
            </div>

            {/* Weg 2 – Kombi */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-white/50">Weg 2</span>
              </div>
              <h3 className="font-bold text-lg">KI-Studios + Seminar</h3>
              <p className="mt-2 text-sm text-white/60 italic">Maximaler Transfer durch Kombination</p>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">KI-Studios (dauerhaft)</p>
                  <ul className="space-y-1 text-sm text-white/70">
                    <li className="flex gap-2"><span className="text-emerald-400">·</span> DialogFitness + ResilienzFitness</li>
                    <li className="flex gap-2"><span className="text-emerald-400">·</span> KI-Feedback sichert den Alltags-Transfer</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-amber-500/5 p-3">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Seminar (optional)</p>
                  <ul className="space-y-1 text-sm text-white/70">
                    <li className="flex gap-2"><span className="text-amber-400">·</span> Inhouse-Training, 1–2 Tage</li>
                    <li className="flex gap-2"><span className="text-amber-400">·</span> Praxisnahe Techniken als Grundlage</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-xs text-white/50 leading-relaxed">
                Attraktive Kombipakete auf Anfrage.
              </p>
            </div>

            {/* Weg 3 – Seminar */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-white/50">Weg 3</span>
              </div>
              <h3 className="font-bold text-lg">Seminar</h3>
              <p className="mt-2 text-sm text-white/60 italic">Fokussiert, erprobt, praxisnah</p>
              <div className="mt-4 rounded-xl bg-amber-500/5 p-3">
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex gap-2"><span className="text-amber-400">·</span> Flexibel gestaltbar: 1–2 Tage, Präsenz</li>
                  <li className="flex gap-2"><span className="text-amber-400">·</span> Jahrelang in der Energiebranche erprobt</li>
                  <li className="flex gap-2"><span className="text-amber-400">·</span> Max. 12 Teilnehmer:innen</li>
                  <li className="flex gap-2"><span className="text-amber-400">·</span> Ergänzung durch KI-Studios jederzeit möglich</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAS UNS AUSMACHT */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium text-amber-400 uppercase tracking-wider mb-2">Was uns ausmacht</p>
        <h2 className="text-3xl font-extrabold tracking-tight">Vier Gründe</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { title: "Erfahrung", text: "Über 25 Jahre Erfahrung in Kundenkommunikation. Referenzen direkt aus der Energiebranche." },
            { title: "Maßgeschneidert", text: "Individuell auf Ihren Kundenservice, Ihr Team und Ihre Gesprächsrealität zugeschnitten." },
            { title: "Nachhaltigkeit", text: "Kein Einmal-Event. Mit DialogFitness.studio und ResilienzFitness.studio trainieren Ihre Teams dauerhaft weiter – KI-gestützt, messbar, zeitlich flexibel." },
            { title: "Ergebnisse", text: "Klare Tools und Techniken, die sofort anwendbar sind – und sich in Gesprächsqualität und Kundenzufriedenheit messbar zeigen." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 border-t-2 border-t-amber-500/50">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">{item.title}</p>
              <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILS & KONDITIONEN */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-bl from-amber-600/5 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-medium text-amber-400 uppercase tracking-wider mb-2">Details & Konditionen</p>
          <h2 className="text-3xl font-extrabold tracking-tight">Format & Kosten</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4 pb-2 border-b border-white/10">Format & Dauer</p>
              <ul className="space-y-2">
                {[
                  "Gestaltbar von 1–2 Tagen",
                  "Seminare immer in Präsenz",
                  "Netto 6 Stunden / Tag",
                  "Max. 12 Teilnehmer:innen",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/70">
                    <span className="text-amber-400 shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4 pb-2 border-b border-white/10">Kosten</p>
              <ul className="space-y-2">
                {[
                  "Seminar: auf Anfrage – individuell je nach Format und Umfang",
                  "DialogFitness: Stundenkontingente flexibel buchbar",
                  "5h / EUR 39 – 10h / EUR 69 pro Person",
                  "Größere Kontingente nach Vereinbarung",
                  "Flexibel auf Ihre Mitarbeitenden verteilbar",
                  "ResilienzFitness: ab EUR 19 / Monat / Person",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/70">
                    <span className="text-amber-400 shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 md:p-12">
          <p className="text-sm font-medium text-amber-400 uppercase tracking-wider mb-6">Stimme aus der Praxis</p>
          <blockquote className="text-xl md:text-2xl font-medium italic text-white/90 leading-relaxed max-w-3xl">
            &bdquo;Die Seminare für unseren Kundenservice haben uns gezeigt, wie wichtig und bereichernd richtiges und gutes Zuhören für die tägliche Arbeit der Innsbrucker Kommunalbetriebe ist.&ldquo;
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-white/60">
            Reinhard Hilber – Leiter Kundenservice, Innsbrucker Kommunalbetriebe
          </p>
        </div>
      </section>

      {/* TRAINER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-600/5 to-violet-600/5 p-8 md:p-12">
          <p className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-2">Ihr Trainer</p>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start">
            <Image
              src="/Juergen_240425_©NicoleViktorik_03.jpg"
              alt="Jürgen Melmuka"
              width={120}
              height={120}
              className="h-28 w-28 rounded-full object-cover shrink-0"
            />
            <div>
              <h3 className="text-2xl font-extrabold">Jürgen Melmuka</h3>
              <p className="mt-1 text-sm text-white/60">Trainer, Coach & Entwickler</p>
              <p className="mt-4 text-white/70 leading-relaxed">
                Trainer für Kommunikation, Zuhören, Vertrieb und Resilienz. Seit 1999 begleitet er Unternehmen dabei, Kommunikationsqualität gezielt weiterzuentwickeln – mit rund 2.000 Seminartagen Erfahrung, eigenen Modellen (HaTeCo & HABNEA) und einem hohen Anspruch an Praxistransfer. Als Gründer der Zuhörakademie und Autor von &bdquo;Kernkompetenz Zuhören&ldquo; (Gabal Verlag, 2025) verbindet er fachliche Tiefe mit klarer Alltagsrelevanz.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                  <div className="text-xl font-extrabold">2.000+</div>
                  <div className="text-xs text-white/60">Seminartage</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                  <div className="text-xl font-extrabold">25+</div>
                  <div className="text-xs text-white/60">Jahre Erfahrung</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                  <div className="text-xl font-extrabold">Energie</div>
                  <div className="text-xs text-white/60">Branchenreferenzen</div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/juergenmelmuka/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium hover:bg-white/10 transition">
                  LinkedIn
                </a>
                <a href="https://zuhoerakademie.at/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium hover:bg-white/10 transition">
                  Zuhörakademie
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUCH & REFERENZEN */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Das Buch zum Seminar</p>
            <p className="text-sm text-white/70">Kernkompetenz Zuhören, Jürgen Melmuka, 2025 im Gabal Verlag erschienen.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Referenzen Energiebranche</p>
            <p className="text-sm text-white/70">Nachgewiesene Referenzen direkt aus der Energiebranche – auf Anfrage gerne im persönlichen Gespräch.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-600/10 to-violet-600/5 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Gespräch anfragen</h2>
          <p className="mt-4 max-w-xl mx-auto text-white/70 leading-relaxed">
            Lassen Sie uns besprechen, welcher Weg für Ihr Team der richtige ist – unverbindlich und persönlich.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:juergen@zuhoerakademie.at" className="rounded-xl bg-amber-600 hover:bg-amber-500 px-6 py-3 font-semibold transition">
              juergen@zuhoerakademie.at
            </a>
            <a href="tel:+436643978684" className="rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-3 font-semibold transition">
              +43 664 397 8684
            </a>
          </div>
          <p className="mt-6">
            <Link href="/" className="text-sm text-white/50 hover:text-white transition">
              ← Zurück zu zuhoeren.academy
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
