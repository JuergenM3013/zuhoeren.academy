import { ClipboardCheck, Dumbbell, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "1) Assess",
    text: "Standortbestimmung via Kurz-Assessments, Rollen-Setup und Zielbild (Scores, Skills, Use Case).",
  },
  {
    icon: Dumbbell,
    title: "2) Train",
    text: "KI-Simulationen, Trainingsstationen und Micro-Übungen — mit sofortigem Feedback & konkreten Formulierungen.",
  },
  {
    icon: TrendingUp,
    title: "3) Improve",
    text: "Fortschritt messen, Playbooks etablieren, Team-Analytics nutzen — Transfer über Challenges & Follow-ups sichern.",
  },
];

export function Steps() {
  return (
    <section className="container py-14 md:py-18">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">So funktioniert’s</h2>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Ein klarer Ablauf für Pilot, Rollout und nachhaltige Kompetenzentwicklung.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <s.icon className="h-6 w-6" />
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
