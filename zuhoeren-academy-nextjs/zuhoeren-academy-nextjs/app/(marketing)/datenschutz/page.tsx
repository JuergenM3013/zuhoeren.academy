import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <main className="bg-glow">
      <section className="container py-14 md:py-18 prose prose-neutral max-w-none">
        <h1>Datenschutz</h1>
        <p><strong>Hinweis:</strong> Platzhalter — bitte durch eine rechtlich geprüfte Datenschutzerklärung ersetzen.</p>
        <h2>Verarbeitung</h2>
        <p>Welche Daten werden zu welchem Zweck verarbeitet?</p>
        <h2>Cookies</h2>
        <p>Nur wenn du Tracking einsetzt (Analytics, Ads etc.).</p>
        <h2>Kontakt</h2>
        <p>Kontakt für Datenschutzanfragen.</p>
      </section>
    </main>
  );
}
