import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | zuhoeren.academy",
  description: "Impressum von zuhoeren.academy – rechtliche Informationen und Kontaktdaten.",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">Impressum</h1>

      <section className="mt-8 space-y-6 leading-relaxed text-white/80">
        <div>
          <h2 className="font-bold text-white">zuhoeren.academy – FlexCo in Gründung</h2>
          <p className="mt-2">
            <strong>Inhaber (bis Eintragung der FlexCo):</strong><br />
            Jürgen Melmuka<br />
            Blindengasse 46/5<br />
            1080 Wien<br />
            Österreich
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Kontakt</h2>
          <p className="mt-2">
            Telefon: <a href="tel:+436643978684" className="underline hover:text-white">+43 664 397 86 84</a><br />
            E-Mail: <a href="mailto:juergen@zuhoeren.academy" className="underline hover:text-white">juergen@zuhoeren.academy</a><br />
            Website: <a href="https://www.zuhoeren.academy" className="underline hover:text-white">https://www.zuhoeren.academy</a>
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Unternehmensgegenstand</h2>
          <p className="mt-2">
            Unternehmensberatung, Training und Coaching mit Schwerpunkt Zuhören, Kommunikation und Persönlichkeitsentwicklung.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Unternehmensform</h2>
          <p className="mt-2">
            zuhoeren.academy – FlexCo in Gründung.<br />
            Bis zur Eintragung im Firmenbuch: Einzelunternehmen Jürgen Melmuka.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Aufsichts-/Gewerbebehörde</h2>
          <p className="mt-2">
            Zuständige Behörde: Magistratisches Bezirksamt für den 8. Bezirk, Wien<br />
            Mitglied der Wirtschaftskammer Wien, Fachgruppe Unternehmensberatung
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Umsatzsteuer-ID</h2>
          <p className="mt-2">UID-Nr.: ATU62752211 (vorläufig)</p>
        </div>

        <div>
          <h2 className="font-bold text-white">Firmenbuch</h2>
          <p className="mt-2">Wird nach Eintragung der FlexCo ergänzt.</p>
        </div>

        <div>
          <h2 className="font-bold text-white">Medieninhaber und inhaltlich Verantwortlicher</h2>
          <p className="mt-2">
            Jürgen Melmuka<br />
            Blindengasse 46/5<br />
            1080 Wien<br />
            Österreich
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Anwendbares Recht</h2>
          <p className="mt-2">
            Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts.
          </p>
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
