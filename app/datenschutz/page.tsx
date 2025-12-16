import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von zuhoeren.academy – Informationen zur Datenverarbeitung gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">Datenschutzerklärung</h1>

      <section className="mt-8 space-y-8 leading-relaxed text-white/80">
        <div>
          <h2 className="text-xl font-bold text-white">1. Verantwortlicher</h2>
          <p className="mt-2">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mt-2">
            {/* TODO: Echte Firmendaten einfügen */}
            zuhoeren.academy<br />
            [Firmenname / Rechtsform]<br />
            [Adresse]<br />
            E-Mail: <a href="mailto:hallo@zuhoeren.academy" className="underline hover:text-white">hallo@zuhoeren.academy</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p className="mt-2">
            Beim Besuch unserer Website werden automatisch folgende Informationen erhoben:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>IP-Adresse (anonymisiert)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Browsertyp und Version</li>
            <li>Betriebssystem</li>
            <li>Referrer-URL</li>
          </ul>
          <p className="mt-2">
            Diese Daten werden nur für technische Zwecke und zur Verbesserung unseres Angebots verwendet.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">3. Kontaktformular</h2>
          <p className="mt-2">
            Wenn Sie uns über das Kontaktformular kontaktieren, werden folgende Daten erhoben:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Unternehmen (optional)</li>
            <li>Nachricht</li>
          </ul>
          <p className="mt-2">
            Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">4. E-Mail-Versand</h2>
          <p className="mt-2">
            Für den Versand von Kontaktanfragen nutzen wir den Dienst Resend. Resend verarbeitet Ihre Daten
            in unserem Auftrag gemäß Art. 28 DSGVO. Die Server befinden sich in der EU/USA
            (Standardvertragsklauseln).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">5. Hosting</h2>
          <p className="mt-2">
            Diese Website wird bei [Hosting-Anbieter, z.B. Vercel] gehostet. Der Hosting-Anbieter erhebt
            in sogenannten Logfiles Informationen, die Ihr Browser automatisch übermittelt.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">6. Cookies</h2>
          <p className="mt-2">
            Diese Website verwendet keine Tracking-Cookies. Es werden nur technisch notwendige Cookies eingesetzt,
            die für den Betrieb der Website erforderlich sind.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">7. Ihre Rechte</h2>
          <p className="mt-2">Sie haben das Recht auf:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p className="mt-2">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:hallo@zuhoeren.academy" className="underline hover:text-white">hallo@zuhoeren.academy</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">8. Beschwerderecht</h2>
          <p className="mt-2">
            Sie haben das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren:
          </p>
          <p className="mt-2">
            Österreichische Datenschutzbehörde<br />
            Barichgasse 40–42<br />
            1030 Wien<br />
            <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              www.dsb.gv.at
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">9. Aktualität</h2>
          <p className="mt-2">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand: Dezember 2024.
          </p>
        </div>
      </section>
    </main>
  );
}
