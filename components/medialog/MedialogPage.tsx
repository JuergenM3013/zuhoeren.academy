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
  PROBLEM,
  CORE,
} from "./content";
import { Hero } from "./sections/Hero";
import { Section } from "./ui/Section";
import { Cards } from "./sections/Cards";
import { Tiles } from "./sections/Tiles";
import { BulletList } from "./sections/BulletList";
import { Accordion } from "./sections/Accordion";
import { InfoCard } from "./sections/InfoCard";
import { FinalCta } from "./sections/FinalCta";

type Variant = "warm" | "pro";

export default function MedialogPage({ variant = "warm" }: { variant?: Variant }) {
  const data = useMemo(() => {
    if (variant === "pro") {
      return {
        hero: HERO.pro,
        blocks: [
          { type: "problem" as const, data: PROBLEM.pro },
          { type: "core" as const, data: CORE.pro },
          { type: "modules" as const, data: MODULES.pro },
          { type: "format" as const, data: FORMAT.pro },
          { type: "final" as const, data: FINAL_CTA.pro },
        ],
      };
    }
    return {
      hero: HERO.warm,
      blocks: [
        { type: "why" as const, data: WHY.warm },
        { type: "audience" as const, data: AUDIENCE.warm },
        { type: "takeaways" as const, data: TAKEAWAYS.warm },
        { type: "modules" as const, data: MODULES.warm },
        { type: "format" as const, data: FORMAT.warm },
        { type: "final" as const, data: FINAL_CTA.warm },
      ],
    };
  }, [variant]);

  return (
    <main
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(1200px 600px at 20% -10%, rgba(132,169,140,.15), transparent 55%),
          radial-gradient(900px 520px at 95% 0%, rgba(201,162,77,.12), transparent 50%),
          #f7f9fa
        `,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
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
            <a href="#warum" className="text-sm text-[#53636b] hover:text-[#2f3e46]">
              Warum
            </a>
            <a href="#module" className="text-sm text-[#53636b] hover:text-[#2f3e46]">
              Module
            </a>
            <a href="#format" className="text-sm text-[#53636b] hover:text-[#2f3e46]">
              Format
            </a>
            <a href="#kontakt" className="text-sm text-[#53636b] hover:text-[#2f3e46]">
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

      {/* Content Blocks */}
      {data.blocks.map((b, idx) => {
        if (b.type === "why") {
          return (
            <Section key={idx} id="warum" title={b.data.headline}>
              <Cards cards={b.data.cards} columns={3} />
            </Section>
          );
        }

        if (b.type === "audience") {
          return (
            <Section key={idx} id="fuer-wen" title={b.data.headline}>
              <Tiles items={b.data.tiles} />
            </Section>
          );
        }

        if (b.type === "takeaways") {
          return (
            <Section key={idx} id="takeaways" title={b.data.headline}>
              <BulletList items={b.data.bullets} />
            </Section>
          );
        }

        if (b.type === "problem") {
          return (
            <Section key={idx} id="problem" title={b.data.headline}>
              <BulletList items={b.data.bullets} />
              <p className="mt-6 text-sm italic text-[#53636b]">{b.data.note}</p>
            </Section>
          );
        }

        if (b.type === "core") {
          return (
            <Section key={idx} id="kompetenzen" title={b.data.headline}>
              <Cards cards={b.data.cards} columns={4} />
            </Section>
          );
        }

        if (b.type === "modules") {
          return (
            <Section key={idx} id="module" title={b.data.headline}>
              <Accordion items={b.data.items} />
            </Section>
          );
        }

        if (b.type === "format") {
          return (
            <Section key={idx} id="format" title={b.data.headline}>
              <InfoCard items={b.data.facts} />
            </Section>
          );
        }

        if (b.type === "final") {
          return <FinalCta key={idx} {...b.data} />;
        }

        return null;
      })}

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
