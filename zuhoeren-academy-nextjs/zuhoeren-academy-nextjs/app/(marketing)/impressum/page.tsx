import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <main className="bg-glow">
      <section className="container py-14 md:py-18 prose prose-neutral max-w-none">
        <h1>Impressum</h1>
        <p><strong>Hinweis:</strong> Platzhalter — bitte mit deinen Unternehmensdaten befüllen.</p>
        <h2>Unternehmen</h2>
        <p>Firma / Rechtsform<br/>Adresse<br/>UID<br/>Firmenbuch</p>
        <h2>Kontakt</h2>
        <p>E-Mail, Telefon</p>
      </section>
    </main>
  );
}
