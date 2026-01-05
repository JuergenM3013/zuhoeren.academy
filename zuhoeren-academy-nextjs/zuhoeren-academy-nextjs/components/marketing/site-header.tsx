import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const nav = [
  { href: "/plattformen", label: "Plattformen" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/sicherheit", label: "Sicherheit" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white">
            <Sparkles className="h-5 w-5" />
          </span>
          <span>zuhoeren.academy</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-neutral-700 hover:text-neutral-900">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild href="/plattformen">
            Plattformen
          </Button>
          <Button asChild href="/kontakt">
            Demo anfragen
          </Button>
        </div>
      </div>
    </header>
  );
}
