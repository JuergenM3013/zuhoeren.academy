import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Gauge, Brain, MessagesSquare } from "lucide-react";

const badges = [
  { icon: ShieldCheck, text: "DSGVO-freundlich" },
  { icon: Gauge, text: "Scores & Analytics" },
  { icon: MessagesSquare, text: "KI-Dialogsimulationen" },
  { icon: Brain, text: "Lernen + Transfer" },
];

export function Hero() {
  return (
    <section className="container py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            5 KI-Plattformen.
            <br />
            1 System: bessere Gespräche & stärkere Führung — messbar.
          </h1>
          <p className="mt-5 text-lg text-neutral-700">
            zuhoeren.academy ist die IT-Sparte der Zuhörakademie und betreibt KI-gestützte Lernplattformen
            für Sales, Dialogführung, Leadership, Resilienz und Metakognition.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild href="/kontakt">
              Demo anfragen <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary" asChild href="/plattformen">
              Plattformen ansehen
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b.text}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-800 shadow-sm backdrop-blur"
              >
                <b.icon className="h-4 w-4" />
                {b.text}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
          <div className="text-sm font-medium text-neutral-900">Was du bekommst</div>
          <ul className="mt-4 space-y-3 text-sm text-neutral-700">
            <li>• Trainingsstationen (Micro-Skills) & interaktive Dialog-Labs</li>
            <li>• Assessments zur Standortbestimmung</li>
            <li>• KI-Feedback mit konkreten Verbesserungsvorschlägen</li>
            <li>• Team-Reports, Fortschritt & Mastery-Tracking</li>
          </ul>

          <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="text-xs text-neutral-600">Quick Link</div>
            <Link href="/pilot" className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline">
              Pilot in 2–4 Wochen starten <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 text-xs text-neutral-600">
              (Optional) Lege eine eigene Seite <code>/pilot</code> an — diese Karte ist schon vorbereitet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
