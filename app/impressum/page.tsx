import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von zuhoeren.academy – rechtliche Informationen und Kontaktdaten.",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">Impressum</h1>

      <section className="mt-8 space-y-6 leading-relaxed text-white/80">
        <div>
          <h2 className="font-bold text-white">Angaben gemäß § 5 ECG / § 25 MedienG</h2>
          <p className="mt-2">
            {/* TODO: Echte Firmendaten einfügen */}
            zuhoeren.academy<br />
            [zuhoeren.academy / Gerd Jürgen Melmuka]<br />
            [Blindengasse 46/5]<br />
            [1080 Wien]<br />
            Österreich
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Kontakt</h2>
          <p className="mt-2">
            Telefon: <a href="tel:+436643978684" className="underline hover:text-white">+43 664 397 8684</a><br />
            E-Mail: <a href="mailto:hallo@zuhoeren.academy" className="underline hover:text-white">hallo@zuhoeren.academy</a>
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Unternehmensgegenstand</h2>
          <p className="mt-2">
            KI-gestützte Weiterbildung für Leadership, Sales und Dialogführung.
                      </p>
        </div>

        <div>
          <h2 className="font-bold text-white">UID-Nummer</h2>
          <p className="mt-2">[UID-Nummer einfügen]</p>
        </div>

        <div>
          <h2 className="font-bold text-white">Firmenbuchnummer</h2>
          <p className="mt-2">[Firmenbuchnummer einfügen, falls vorhanden]</p>
        </div>

        <div>
          <h2 className="font-bold text-white">Aufsichtsbehörde</h2>
          <p className="mt-2">[Zuständige Behörde einfügen, falls erforderlich]</p>
        </div>

        <div>
          <h2 className="font-bold text-white">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="mt-2">[Falls anwendbar, ansonsten entfernen]</p>
        </div>

        <div>
          <h2 className="font-bold text-white">Haftungsausschluss</h2>
          <p className="mt-2">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Urheberrecht</h2>
          <p className="mt-2">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers.
          </p>
        </div>

      </section>
    </main>
  );
}
