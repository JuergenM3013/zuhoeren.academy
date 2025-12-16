import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <p className="text-sm text-white/60">
          © {year} zuhoeren.academy · KI-gestützte Weiterbildung
        </p>

        <nav className="flex flex-wrap items-center gap-6 text-sm text-white/70">
          <a href="#kontakt" className="hover:text-white transition">
            Kontakt
          </a>
          <Link href="/impressum" className="hover:text-white transition">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-white transition">
            Datenschutz
          </Link>
          <a
            href="https://zuhoerakademie.at/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Zuhörakademie
          </a>
        </nav>
      </div>
    </footer>
  );
}
