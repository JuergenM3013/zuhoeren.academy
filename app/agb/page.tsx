import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGB | zuhoeren.academy",
  description: "Allgemeine Geschäftsbedingungen von zuhoeren.academy – Vertragsbedingungen für Coaching, Training und Online-Kurse.",
};

export default function AGBPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">Allgemeine Geschäftsbedingungen (AGB)</h1>
      <p className="mt-2 text-white/60">zuhoeren.academy</p>

      <section className="mt-8 space-y-8 leading-relaxed text-white/80">
        {/* 1. Geltungsbereich */}
        <div>
          <h2 className="text-xl font-bold text-white">1. Geltungsbereich</h2>
          <p className="mt-2">
            (1) Diese AGB gelten für alle Verträge zwischen zuhoeren.academy – FlexCo in Gründung, Inhaber: Jürgen Melmuka (im Folgenden „Anbieter") und seinen Kund:innen über Coachingleistungen, Trainings, Workshops, Online-Kurse und sonstige Beratungsleistungen, die über die Website https://www.zuhoeren.academy oder direkt per E-Mail/Telefon gebucht werden.
          </p>
          <p className="mt-2">
            (2) Abweichende Bedingungen der Kund:innen werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
          </p>
        </div>

        {/* 2. Angebot und Vertragsabschluss */}
        <div>
          <h2 className="text-xl font-bold text-white">2. Angebot und Vertragsabschluss</h2>
          <p className="mt-2">
            (1) Die Darstellung der Leistungen auf der Website stellt noch kein rechtlich bindendes Angebot dar, sondern eine Einladung zur Abgabe eines Angebots durch die Kund:innen.
          </p>
          <p className="mt-2">(2) Ein Vertrag kommt zustande durch:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Online-Buchung über das entsprechende Formular und Bestätigungsmail des Anbieters oder</li>
            <li>schriftliche Bestätigung (z.B. E-Mail) eines individuellen Angebots.</li>
          </ul>
        </div>

        {/* 3. Leistungen */}
        <div>
          <h2 className="text-xl font-bold text-white">3. Leistungen</h2>
          <p className="mt-2">
            (1) Der genaue Leistungsumfang ergibt sich aus der jeweiligen Leistungsbeschreibung auf der Website bzw. aus dem individuellen Angebot.
          </p>
          <p className="mt-2">
            (2) Inhalte von Coachings und Programmen dienen der persönlichen Weiterentwicklung. Es wird kein bestimmter Erfolg geschuldet.
          </p>
        </div>

        {/* 4. Preise und Zahlungsbedingungen */}
        <div>
          <h2 className="text-xl font-bold text-white">4. Preise und Zahlungsbedingungen</h2>
          <p className="mt-2">
            (1) Es gelten die zum Zeitpunkt der Buchung auf der Website angegebenen bzw. im Angebot genannten Preise, jeweils inklusive gesetzlicher Umsatzsteuer, sofern nicht anders angegeben.
          </p>
          <p className="mt-2">
            (2) Die Zahlung erfolgt – je nach Angebot – per Kreditkarte, PayPal, Sofortüberweisung oder Rechnung über die angegebenen Zahlungsdienstleister.
          </p>
          <p className="mt-2">
            (3) Soweit nicht anders vereinbart, ist der Rechnungsbetrag sofort fällig. Bei Zahlungsverzug ist der Anbieter berechtigt, gesetzliche Verzugszinsen zu verrechnen und die weitere Leistungserbringung bis zur Zahlung auszusetzen.
          </p>
        </div>

        {/* 5. Widerrufsrecht */}
        <div>
          <h2 className="text-xl font-bold text-white">5. Widerrufsrecht für Verbraucher:innen</h2>
          <p className="mt-2">
            (1) Ist der Kunde eine Verbraucherin/ein Verbraucher im Sinne des KSchG, besteht bei Fernabsatzverträgen grundsätzlich ein 14-tägiges Rücktrittsrecht gemäß FAGG. Die Details sind in der gesonderten Widerrufsbelehrung weiter unten geregelt.
          </p>
          <p className="mt-2">
            (2) Bei digitalen Inhalten und Dienstleistungen, mit deren Ausführung innerhalb der Widerrufsfrist begonnen werden soll, kann das Rücktrittsrecht vorzeitig erlöschen, wenn der Kunde ausdrücklich zustimmt und bestätigt, dass ihm der Verlust des Rücktrittsrechts bewusst ist.
          </p>
        </div>

        {/* 6. Termine, Umbuchung, Stornierung */}
        <div>
          <h2 className="text-xl font-bold text-white">6. Termine, Umbuchung und Stornierung (bei 1:1-Coachings)</h2>
          <p className="mt-2">(1) Vereinbarte Termine sind verbindlich.</p>
          <p className="mt-2">
            (2) Eine kostenfreie Stornierung oder Umbuchung ist bis 48 Stunden vor dem Termin möglich. Bei späterer Absage oder Nichterscheinen kann das Honorar vollständig in Rechnung gestellt werden, sofern nicht eine gesetzliche Rücktrittsregel zwingend anderes bestimmt.
          </p>
          <p className="mt-2">
            (3) Der Anbieter ist berechtigt, aus wichtigem Grund (z.B. Krankheit) Termine zu verschieben. In diesem Fall wird ein Ersatztermin angeboten; weitergehende Ansprüche bestehen nicht.
          </p>
        </div>

        {/* 7. Haftung */}
        <div>
          <h2 className="text-xl font-bold text-white">7. Haftung</h2>
          <p className="mt-2">
            (1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für sonstige Schäden, die auf einer grob fahrlässigen oder vorsätzlichen Pflichtverletzung beruhen.
          </p>
          <p className="mt-2">
            (2) Bei leichter Fahrlässigkeit haftet der Anbieter nur für die Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und beschränkt auf den vorhersehbaren, typischerweise eintretenden Schaden.
          </p>
          <p className="mt-2">
            (3) Coaching- und Trainingsangebote ersetzen keine medizinische oder psychotherapeutische Behandlung. Der Kunde ist für seine physische und psychische Gesundheit selbst verantwortlich.
          </p>
        </div>

        {/* 8. Urheberrecht */}
        <div>
          <h2 className="text-xl font-bold text-white">8. Urheberrecht</h2>
          <p className="mt-2">
            (1) Alle vom Anbieter bereitgestellten Unterlagen, Videos, Audios, Folien und sonstigen Materialien sind urheberrechtlich geschützt.
          </p>
          <p className="mt-2">
            (2) Eine Weitergabe an Dritte, Veröffentlichung oder Vervielfältigung ist ohne ausdrückliche schriftliche Zustimmung des Anbieters nicht gestattet.
          </p>
        </div>

        {/* 9. Datenschutz */}
        <div>
          <h2 className="text-xl font-bold text-white">9. Datenschutz</h2>
          <p className="mt-2">
            Es gilt unsere jeweils aktuelle Datenschutzerklärung, abrufbar unter:{" "}
            <Link href="/datenschutz" className="underline hover:text-white">
              https://www.zuhoeren.academy/datenschutz
            </Link>
          </p>
        </div>

        {/* 10. Schlussbestimmungen */}
        <div>
          <h2 className="text-xl font-bold text-white">10. Schlussbestimmungen</h2>
          <p className="mt-2">
            (1) Es gilt ausschließlich österreichisches Recht unter Ausschluss der Kollisionsnormen und des UN-Kaufrechts.
          </p>
          <p className="mt-2">
            (2) Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit Verträgen mit Unternehmer:innen ist Wien. Gegenüber Verbraucher:innen gelten die gesetzlichen Gerichtsstandsregelungen.
          </p>
          <p className="mt-2">
            (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>
        </div>

        {/* Widerrufsbelehrung */}
        <div className="border-t border-white/20 pt-8">
          <h2 className="text-2xl font-bold text-white">Widerrufsbelehrung für Verbraucher:innen</h2>

          <h3 className="mt-6 text-lg font-bold text-white">Widerrufsrecht</h3>
          <p className="mt-2">
            Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
          </p>
          <p className="mt-2">
            Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
          </p>
          <p className="mt-2">Um dein Widerrufsrecht auszuüben, musst du uns</p>
          <p className="mt-2 pl-4 border-l-2 border-white/30">
            zuhoeren.academy – FlexCo in Gründung<br />
            Jürgen Melmuka<br />
            Blindengasse 46/5<br />
            1080 Wien<br />
            E-Mail: <a href="mailto:juergen@zuhoeren.academy" className="underline hover:text-white">juergen@zuhoeren.academy</a>
          </p>
          <p className="mt-4">
            mittels einer eindeutigen Erklärung (z.B. per E-Mail oder Brief) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Du kannst dafür das nachstehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
          </p>
          <p className="mt-2">
            Zur Wahrung der Frist genügt es, wenn du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.
          </p>

          <h3 className="mt-6 text-lg font-bold text-white">Folgen des Widerrufs</h3>
          <p className="mt-2">
            Wenn du diesen Vertrag widerrufst, erstatten wir dir alle Zahlungen, die wir von dir erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurück, an dem die Mitteilung über deinen Widerruf bei uns eingegangen ist.
          </p>
          <p className="mt-2">
            Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, es wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.
          </p>
          <p className="mt-2">
            Haben wir auf deinen ausdrücklichen Wunsch hin bereits während der Widerrufsfrist mit der Leistung begonnen, hast du uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zum Zeitpunkt deiner Mitteilung über die Ausübung des Widerrufsrechts bereits erbrachten Leistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Leistungen entspricht.
          </p>

          <h3 className="mt-6 text-lg font-bold text-white">Erlöschen des Widerrufsrechts bei digitalen Inhalten/Dienstleistungen</h3>
          <p className="mt-2">
            Bei Verträgen über digitale Inhalte oder Dienstleistungen (z.B. Online-Kurse, Downloads), die nicht auf einem körperlichen Datenträger bereitgestellt werden, erlischt dein Widerrufsrecht vorzeitig, wenn:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>wir mit der Ausführung des Vertrages begonnen haben,</li>
            <li>du ausdrücklich zugestimmt hast, dass wir vor Ablauf der Widerrufsfrist mit der Ausführung beginnen, und</li>
            <li>du bestätigt hast, dass du dein Widerrufsrecht mit Beginn der Ausführung verlierst.</li>
          </ul>
        </div>

        {/* Muster-Widerrufsformular */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white">Muster-Widerrufsformular</h3>
          <p className="mt-2 text-sm text-white/60">
            (Wenn du den Vertrag widerrufen willst, kannst du dieses Formular ausfüllen und an uns zurücksenden.)
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p>
              <strong>An:</strong><br />
              zuhoeren.academy – FlexCo in Gründung<br />
              Jürgen Melmuka<br />
              Blindengasse 46/5<br />
              1080 Wien<br />
              E-Mail: juergen@zuhoeren.academy
            </p>
            <p className="mt-4">
              Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über die Buchung folgender Leistung:
            </p>
            <p>– ___________________________</p>
            <p>Bestellt am: _______________ / erhalten am: _______________</p>
            <p>Name des/der Verbraucher(s): ___________________________</p>
            <p>Anschrift des/der Verbraucher(s): _______________________</p>
            <p>Datum: _______________</p>
            <p>Unterschrift (nur bei Mitteilung auf Papier): _______________________</p>
          </div>
        </div>
      </section>
    </main>
  );
}
