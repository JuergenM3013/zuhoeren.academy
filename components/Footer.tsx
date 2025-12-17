import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand + Newsletter */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-emerald-500">
                <span className="text-sm font-black">Z</span>
              </span>
              <span>zuhoeren.academy</span>
            </div>
            <p className="mt-3 text-sm text-white/60 max-w-xs">
              KI-gestützte Weiterbildung für bessere Gespräche in Leadership, Sales und HR.
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white/80">Newsletter: KI + Zuhören im Alltag</p>
              <form className="mt-2 flex gap-2">
                <input
                  type="email"
                  placeholder="E-Mail-Adresse"
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-white/25"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold hover:bg-violet-500 transition"
                >
                  Anmelden
                </button>
              </form>
            </div>
          </div>

          {/* Produkte */}
          <div>
            <p className="text-sm font-semibold text-white/80">Produkte</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>
                <a href="https://salesfitness.studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Salesfitness.studio
                </a>
              </li>
              <li>
                <a href="https://dialogfitness.studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Dialogfitness.studio
                </a>
              </li>
              <li>
                <a href="https://leadershipfitness.studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Leadershipfitness.studio
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <p className="text-sm font-semibold text-white/80">Rechtliches</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>
                <Link href="/impressum" className="hover:text-white transition">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition">
                  Datenschutz
                </Link>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white transition">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm text-white/50">
            © {year} zuhoeren.academy
          </p>
          <a
            href="https://zuhoerakademie.at/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-white transition"
          >
            Ein Projekt der Zuhörakademie
          </a>
        </div>
      </div>
    </footer>
  );
}
