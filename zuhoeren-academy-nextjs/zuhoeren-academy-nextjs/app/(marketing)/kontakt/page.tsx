import type { Metadata } from "next";
import { ContactForm } from "@/components/marketing/contact-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Demo, Pilot oder Partnerschaft: Schreib uns — wir melden uns schnell zurück.",
};

export default function ContactPage() {
  return (
    <main className="bg-glow">
      <section className="container py-14 md:py-18">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Kontakt</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Sag uns kurz: Zielgruppe, Teamgröße, Use Case — dann kommen wir mit einem Vorschlag für Pilot & Rollout.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
