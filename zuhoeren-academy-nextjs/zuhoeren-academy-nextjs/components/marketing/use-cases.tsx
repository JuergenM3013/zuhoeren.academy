import Link from "next/link";
import { platformsBySlug } from "@/content/platforms";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

type Card = {
  title: string;
  lead: string;
  outcomes: string[];
  platformSlugs: (keyof typeof platformsBySlug)[];
};

const cards: Card[] = [
  {
    title: "Sales",
    lead: "Von Discovery bis Abschluss: Standards, Einwandbehandlung und klare Gesprächsphasen.",
    outcomes: ["Höhere Abschlussquote", "Konsistente Gesprächsqualität", "Coaching mit Scores & Playbooks"],
    platformSlugs: ["salesfitness", "dialogfitness"],
  },
  {
    title: "Leadership",
    lead: "Führungskompetenz trainieren: Klarheit, Empathie, Konfliktfähigkeit, psychologische Sicherheit.",
    outcomes: ["Bessere Mitarbeitergespräche", "Weniger Eskalationen", "Schnellerer Transfer in den Alltag"],
    platformSlugs: ["leadershipfitness", "dialogfitness"],
  },
  {
    title: "HR / L&D",
    lead: "Skalierbare Skill-Programme mit Standortbestimmung, Lernpfaden und Reporting.",
    outcomes: ["Rollout-fähige Lernpfade", "Messbarkeit (vor/nach)", "Zielgruppenspezifische Szenarien"],
    platformSlugs: ["dialogfitness", "resilienzfitness", "metakognitionen"],
  },
  {
    title: "Resilienz & Performance",
    lead: "Stressregulation, mentale Flexibilität und gesunde Routinen — wissenschaftlich fundiert.",
    outcomes: ["Bessere Selbststeuerung", "Reduktion von Belastungsfolgen", "Praktische Übungen statt Theorie"],
    platformSlugs: ["resilienzfitness", "metakognitionen"],
  },
];

export function UseCases({ expanded }: { expanded?: boolean }) {
  return (
    <section className={expanded ? "container pb-16" : "container py-14 md:py-18"}>
      {!expanded ? (
        <>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Use Cases</h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Typische Einsatzfelder — inkl. Outcomes und empfohlener Plattform-Kombination.
          </p>
        </>
      ) : null}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{c.lead}</p>

            <div className="mt-4 text-sm font-medium text-neutral-900">Outcomes</div>
            <ul className="mt-2 space-y-2 text-sm text-neutral-700">
              {c.outcomes.map((o) => (
                <li key={o} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {c.platformSlugs.map((s) => (
                <Link key={s} href={`/plattformen/${s}`}>
                  <Badge variant="soft">{platformsBySlug[s].name}</Badge>
                </Link>
              ))}
            </div>

            <div className="mt-5">
              <Link href="/kontakt" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
                Pilot besprechen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
