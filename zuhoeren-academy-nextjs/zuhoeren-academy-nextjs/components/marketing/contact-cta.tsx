import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="container pb-20">
      <div className="rounded-3xl border border-neutral-200 bg-white/70 p-8 shadow-sm backdrop-blur md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Bereit für einen Pilot?</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          2–4 Wochen reichen, um Use Case, Lernpfad und messbare Verbesserungen zu validieren — inklusive Team-Report.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild href="/kontakt">Demo / Pilot anfragen</Button>
          <Button variant="secondary" asChild href="/plattformen">Plattformen ansehen</Button>
          <Link href="/sicherheit" className="self-center text-sm text-neutral-700 hover:text-neutral-900 hover:underline">
            DSGVO & Sicherheit
          </Link>
        </div>
      </div>
    </section>
  );
}
