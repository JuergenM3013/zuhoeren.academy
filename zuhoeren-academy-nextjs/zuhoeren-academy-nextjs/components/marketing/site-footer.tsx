import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-semibold">zuhoeren.academy</div>
            <p className="mt-2 text-sm text-neutral-700">
              Die IT-Sparte der Zuhörakademie: KI-Lernplattformen für Leadership, Sales & Dialogführung.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-medium">Navigation</div>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li><Link className="hover:text-neutral-900" href="/plattformen">Plattformen</Link></li>
              <li><Link className="hover:text-neutral-900" href="/use-cases">Use Cases</Link></li>
              <li><Link className="hover:text-neutral-900" href="/sicherheit">Sicherheit</Link></li>
              <li><Link className="hover:text-neutral-900" href="/kontakt">Kontakt</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-medium">Rechtliches</div>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li><Link className="hover:text-neutral-900" href="/impressum">Impressum</Link></li>
              <li><Link className="hover:text-neutral-900" href="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-neutral-200 pt-6 text-xs text-neutral-600 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} zuhoeren.academy</span>
          <span>DSGVO-freundlich · EU-Fokus · Made in Austria</span>
        </div>
      </div>
    </footer>
  );
}
