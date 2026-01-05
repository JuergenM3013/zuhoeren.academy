import type { Metadata } from "next";
import { PlatformGrid } from "@/components/marketing/platform-grid";

export const metadata: Metadata = {
  title: "Plattformen",
  description:
    "Alle KI-Lernplattformen von zuhoeren.academy: SalesFitness, DialogFitness, Metakognitionen, ResilienzFitness und LeadershipFitness.",
};

export default function PlatformsPage() {
  return (
    <main className="bg-glow">
      <section className="container py-14 md:py-18">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Plattformen</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Wähle die passende Plattform — oder kombiniere mehrere als Suite-Rollout.
        </p>
        <div className="mt-8">
          <PlatformGrid showFilter />
        </div>
      </section>
    </main>
  );
}
