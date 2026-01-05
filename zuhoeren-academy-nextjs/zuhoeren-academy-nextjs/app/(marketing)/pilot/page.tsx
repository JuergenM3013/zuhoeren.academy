import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pilot",
  description: "Pilot in 2–4 Wochen: Use Case, Lernpfad, Scores und Team-Report.",
};

export default function PilotPage() {
  return (
    <main className="bg-glow">
      <section className="container py-14 md:py-18">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Pilot in 2–4 Wochen</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Schneller Einstieg: wir definieren Use Case, Ziel-Skills, Lernpfad & Reporting — danach Rollout.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { t: "Woche 1", d: "Kickoff, Zielbild, Setup, Baseline-Assessments" },
            { t: "Woche 2–3", d: "Training + KI-Simulationen, Coaching, Score-Tracking" },
            { t: "Woche 4", d: "Auswertung, Team-Report, Rollout-Plan" },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <div className="text-sm font-medium text-neutral-900">{x.t}</div>
              <p className="mt-2 text-sm text-neutral-700">{x.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild href="/kontakt">Pilot anfragen</Button>
          <Button variant="secondary" asChild href="/plattformen">Plattformen ansehen</Button>
          <Link className="self-center text-sm text-neutral-700 hover:text-neutral-900 hover:underline" href="/sicherheit">
            DSGVO & Sicherheit
          </Link>
        </div>
      </section>
    </main>
  );
}
