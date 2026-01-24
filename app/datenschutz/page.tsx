import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | zuhoeren.academy",
  description: "Datenschutzerklärung von zuhoeren.academy – Informationen zur Datenverarbeitung gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">Datenschutzerklärung</h1>
      <p className="mt-2 text-white/60">Erklärung zur Informationspflicht</p>

      <section className="mt-8 space-y-8 leading-relaxed text-white/80">
        <div>
          <p>
            In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).
          </p>
          <p className="mt-4">
            Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">Kontakt mit uns</h2>
          <p className="mt-2">
            Wenn Sie uns, entweder über unser Kontaktformular auf unserer Webseite, oder per Email kontaktieren, dann werden die von Ihnen an uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder für den Fall von weiteren Anschlussfragen für sechs Monate bei uns gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer übermittelten Daten.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">Cookies</h2>
          <p className="mt-2">
            Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
          </p>
          <p className="mt-4">
            Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">Google Fonts</h2>
          <p className="mt-2">
            Unsere Website verwendet Schriftarten von „Google Fonts". Der Dienstanbieter dieser Funktion ist:
          </p>
          <p className="mt-2">
            Google Ireland Limited<br />
            Gordon House, Barrow Street<br />
            Dublin 4, Ireland<br />
            Tel: +353 1 543 1000
          </p>
          <p className="mt-4">
            Beim Aufrufen dieser Webseite lädt Ihr Browser Schriftarten und speichert diese in den Cache. Da Sie, als Besucher der Webseite, Daten des Dienstanbieters empfangen kann Google unter Umständen Cookies auf Ihrem Rechner setzen oder analysieren.
          </p>
          <p className="mt-4">
            Die Nutzung von „Google-Fonts" dient der Optimierung unserer Dienstleistung und der einheitlichen Darstellung von Inhalten. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          </p>
          <p className="mt-4">
            Weitere Informationen zu Google Fonts erhalten Sie unter:{" "}
            <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              https://developers.google.com/fonts/faq
            </a>
          </p>
          <p className="mt-2">
            Weitere Informationen über den Umgang mit Nutzerdaten von Google können Sie der Datenschutzerklärung entnehmen:{" "}
            <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              https://policies.google.com/privacy?hl=de
            </a>
          </p>
          <p className="mt-2">
            Google verarbeitet die Daten auch in den USA, hat sich jedoch dem EU-US Privacy-Shield unterworfen:{" "}
            <a href="https://www.privacyshield.gov/EU-US-Framework" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              https://www.privacyshield.gov/EU-US-Framework
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">Server-Log Files</h2>
          <p className="mt-2">
            Diese Webseite und der damit verbundene Provider erhebt im Zuge der Webseitennutzung automatisch Informationen im Rahmen sogenannter „Server-Log Files". Dies betrifft insbesondere:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>IP-Adresse oder Hostname</li>
            <li>den verwendeten Browser</li>
            <li>Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit</li>
            <li>aufgerufene Seiten der Webseite</li>
            <li>Spracheinstellungen und Betriebssystem</li>
            <li>„Leaving-Page" (auf welcher URL hat der Benutzer die Webseite verlassen)</li>
            <li>ISP (Internet Service Provider)</li>
          </ul>
          <p className="mt-4">
            Diese erhobenen Informationen werden nicht personenbezogen verarbeitet oder mit personenbezogenen Daten in Verbindung gebracht.
          </p>
          <p className="mt-2">
            Der Webseitenbetreiber behält es sich vor, im Falle von Bekanntwerden rechtswidriger Tätigkeiten, diese Daten auszuwerten oder zu überprüfen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">Newsletter</h2>
          <p className="mt-2">
            Sie haben die Möglichkeit, über unsere Website unseren Newsletter zu abonnieren. Hierfür benötigen wir Ihre E-Mail-Adresse und ihre Erklärung, dass Sie mit dem Bezug des Newsletters einverstanden sind.
          </p>
          <p className="mt-4">
            Wenn Sie die Möglichkeit nutzen unseren Newsletter zu abonnieren, wird Ihre Email-Adresse und Ihre Zustimmung/Einverständniserklärung über den Bezug des Newsletters benötigt. In Folge auf die Anmeldung zu unserem Newsletter, erhalten Sie von uns ein Bestätigungs-Email mit einem Link zur Anmeldebestätigung.
          </p>
          <p className="mt-4">
            Eine Stornierung des Abos ist jederzeit möglich. Senden Sie die Stornierung bitte an unsere Email-Adresse:{" "}
            <a href="mailto:juergen@zuhoeren.academy" className="underline hover:text-white">juergen@zuhoeren.academy</a>
          </p>
          <p className="mt-4">
            Ihre Daten im Zusammenhang mit dem Newsletter-Versand werden im Falle einer Stornierung umgehend von uns gelöscht. Die Rechtmäßigkeit der erfolgten Datenverarbeitung bis zum Widerruf, welche aufgrund der Zustimmung passiert ist, wird nicht berührt.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">Ihre Rechte als Betroffener</h2>
          <p className="mt-2">Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns gespeichert sind grundsätzlich ein Recht auf:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Auskunft</li>
            <li>Löschung der Daten</li>
            <li>Berichtigung der Daten</li>
            <li>Übertragbarkeit der Daten</li>
            <li>Widerruf und Widerspruch zur Datenverarbeitung</li>
            <li>Einschränkung</li>
          </ul>
          <p className="mt-4">
            Wenn Sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie die Möglichkeit sich bei uns (<a href="mailto:juergen@zuhoeren.academy" className="underline hover:text-white">juergen@zuhoeren.academy</a>) oder der Datenschutzbehörde zu beschweren.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">Kontaktdaten des Webseitenbetreibers</h2>
          <p className="mt-2">
            Sie erreichen uns unter folgenden Kontaktdaten:
          </p>
          <p className="mt-2">
            <strong>Webseitenbetreiber:</strong> Jürgen Melmuka<br />
            <strong>Telefon:</strong> <a href="tel:+436643978684" className="underline hover:text-white">+43 664 397 86 84</a><br />
            <strong>E-Mail:</strong> <a href="mailto:juergen@zuhoeren.academy" className="underline hover:text-white">juergen@zuhoeren.academy</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">Datenschutzbeauftragter</h2>
          <p className="mt-2">
            Unseren Datenschutzbeauftragten erreichen Sie unter:
          </p>
          <p className="mt-2">
            <strong>Name:</strong> Jürgen Melmuka<br />
            <strong>E-Mail:</strong> <a href="mailto:juergen@zuhoeren.academy" className="underline hover:text-white">juergen@zuhoeren.academy</a><br />
            <strong>Telefon:</strong> <a href="tel:+436643978684" className="underline hover:text-white">+43 664 397 86 84</a>
          </p>
        </div>
      </section>
    </main>
  );
}
