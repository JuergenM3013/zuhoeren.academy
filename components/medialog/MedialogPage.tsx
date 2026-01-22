"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  HERO,
  WHY,
  AUDIENCE,
  TAKEAWAYS,
  MODULES,
  FORMAT,
  FINAL_CTA,
} from "./content";
import { Hero } from "./sections/Hero";
import { Section } from "./ui/Section";
import { Cards } from "./sections/Cards";
import { Tiles } from "./sections/Tiles";
import { FinalCta } from "./sections/FinalCta";
import { AnimatedStats } from "./sections/AnimatedStats";
import { ModuleTimeline } from "./sections/ModuleTimeline";
import { QuoteCarousel } from "./sections/QuoteCarousel";
import { ProblemSolution } from "./sections/ProblemSolution";
import { MedialogStickyCTA } from "./sections/MedialogStickyCTA";

type Variant = "warm" | "pro";

export default function MedialogPage({ variant = "warm" }: { variant?: Variant }) {
  const data = useMemo(() => {
    return {
      hero: HERO.warm,
      why: WHY.warm,
      audience: AUDIENCE.warm,
      takeaways: TAKEAWAYS.warm,
      modules: MODULES.warm,
      format: FORMAT.warm,
      finalCta: FINAL_CTA.warm,
    };
  }, [variant]);

  return (
    <main
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(1200px 600px at 20% -10%, rgba(132,169,140,.12), transparent 55%),
          radial-gradient(900px 520px at 95% 0%, rgba(201,162,77,.10), transparent 50%),
          #f7f9fa
        `,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Sticky CTA */}
      <MedialogStickyCTA />

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#e6edf0] bg-[#f7f9fa]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div
              className="relative h-10 w-10 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #2f3e46, #203038)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div
                className="absolute inset-[10px] rounded-lg"
                style={{ border: "1px solid rgba(255,255,255,.35)" }}
              />
            </div>
            <div>
              <strong className="block text-sm font-bold text-[#1b252a]">Zuhörakademie</strong>
              <span className="block text-xs text-[#53636b]">Medialog · Kommunikation</span>
            </div>
          </Link>

          <nav className="hidden gap-6 md:flex">
            <a href="#warum" className="text-sm text-[#53636b] transition hover:text-[#2f3e46]">
              Warum
            </a>
            <a href="#module" className="text-sm text-[#53636b] transition hover:text-[#2f3e46]">
              Module
            </a>
            <a href="#stimmen" className="text-sm text-[#53636b] transition hover:text-[#2f3e46]">
              Stimmen
            </a>
            <a href="#kontakt" className="text-sm text-[#53636b] transition hover:text-[#2f3e46]">
              Kontakt
            </a>
          </nav>

          <a
            href="#kontakt"
            className="rounded-xl bg-[#2f3e46] px-4 py-2 text-sm font-medium text-white transition hover:brightness-105"
          >
            Anfragen
          </a>
        </div>
      </header>

      {/* Hero */}
      <Hero {...data.hero} />

      {/* Stats */}
      <Section title="">
        <AnimatedStats />
      </Section>

      {/* Why - Cards */}
      <Section id="warum" title={data.why.headline}>
        <Cards cards={data.why.cards} columns={3} />
      </Section>

      {/* Problem/Solution Toggle */}
      <Section title="Vorher vs. Nachher">
        <ProblemSolution />
      </Section>

      {/* Audience */}
      <Section id="fuer-wen" title={data.audience.headline}>
        <Tiles items={data.audience.tiles} />
      </Section>

      {/* Modules Timeline */}
      <Section id="module" title="Die 4 Module im Detail">
        <ModuleTimeline />
      </Section>

      {/* Testimonials */}
      <Section id="stimmen" title="Stimmen aus der Praxis">
        <QuoteCarousel />
      </Section>

      {/* Takeaways */}
      <Section title={data.takeaways.headline}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.takeaways.bullets.map((bullet, idx) => (
            <div
              key={idx}
              className="group flex items-start gap-4 rounded-2xl border border-[#e6edf0] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#84a98c]/10 text-sm font-medium text-[#84a98c] transition-colors group-hover:bg-[#84a98c] group-hover:text-white">
                {idx + 1}
              </div>
              <p className="text-sm leading-relaxed text-[#53636b]">{bullet}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Format */}
      <Section id="format" title={data.format.headline}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {data.format.facts.map((fact, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center rounded-2xl border border-[#e6edf0] bg-white p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-3 text-2xl">
                {["📚", "🏥", "👥", "🎯", "✅"][idx] || "✓"}
              </div>
              <p className="text-sm font-medium text-[#2f3e46]">{fact}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <FinalCta {...data.finalCta} />

      {/* Footer */}
      <footer className="border-t border-[#e6edf0] bg-white/50 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-[#53636b] md:flex-row">
          <div>© {new Date().getFullYear()} Zuhörakademie · Medialog</div>
          <div className="flex gap-4">
            <Link href="/impressum" className="underline hover:no-underline">
              Impressum
            </Link>
            <Link href="/datenschutz" className="underline hover:no-underline">
              Datenschutz
            </Link>
            <Link href="/" className="underline hover:no-underline">
              Startseite
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
