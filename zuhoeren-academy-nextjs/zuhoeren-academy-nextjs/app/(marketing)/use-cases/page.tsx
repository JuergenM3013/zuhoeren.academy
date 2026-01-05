import type { Metadata } from "next";
import { UseCases } from "@/components/marketing/use-cases";

export const metadata: Metadata = {
  title: "Use Cases",
  description: "Einsatzfelder für die KI-Lernplattformen: Sales, Leadership, HR/L&D, Customer Service & Teams.",
};

export default function UseCasesPage() {
  return (
    <main className="bg-glow">
      <section className="container py-14 md:py-18">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Use Cases</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Von Sales-Performance bis psychologische Sicherheit: Wähle den Use Case — wir schlagen passende Plattformen vor.
        </p>
      </section>
      <UseCases expanded />
    </main>
  );
}
