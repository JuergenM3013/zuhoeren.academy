"use client";

import { useState, useEffect } from "react";

type CTA = { label: string; href: string };

const ROTATING_WORDS = [
  "Adhärenz",
  "Vertrauen",
  "Klarheit",
  "Verbindung",
  "Resilienz",
];

export function Hero(props: {
  headline: string;
  subline: string;
  chips: string[];
  ctaPrimary: CTA;
  ctaSecondary?: CTA;
  meta?: string[];
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#84a98c]/10 px-4 py-2 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#84a98c] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#84a98c]" />
              </span>
              <span className="text-[#2f3e46]">Medialog Masterclass · Jetzt anfragen</span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-[#1b252a] md:text-5xl lg:text-[3.25rem]">
              {props.headline}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-[#53636b] md:text-lg">{props.subline}</p>

            {/* Animated benefit word */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-[#53636b]">Das Ergebnis:</span>
              <span className="relative h-8 overflow-hidden">
                <span
                  className={`inline-block rounded-lg bg-gradient-to-r from-[#84a98c] to-[#52796f] px-3 py-1 text-sm font-medium text-white transition-all duration-300 ${
                    isAnimating ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"
                  }`}
                >
                  Mehr {ROTATING_WORDS[wordIndex]}
                </span>
              </span>
            </div>

            {/* Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {props.chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-[#e6edf0] bg-white/80 px-3 py-1.5 text-sm text-[#2f3e46] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition hover:border-[#84a98c]/40 hover:shadow-[0_4px_12px_rgba(132,169,140,0.15)]"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={props.ctaPrimary.href}
                className="group rounded-2xl bg-gradient-to-r from-[#2f3e46] to-[#1b252a] px-6 py-3.5 text-sm font-medium text-white shadow-[0_12px_24px_rgba(47,62,70,.2)] transition hover:shadow-[0_16px_32px_rgba(47,62,70,.25)]"
              >
                <span className="flex items-center gap-2">
                  {props.ctaPrimary.label}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
              {props.ctaSecondary && (
                <a
                  href={props.ctaSecondary.href}
                  className="rounded-2xl border border-[#e6edf0] bg-white px-6 py-3.5 text-sm font-medium text-[#2f3e46] transition hover:border-[#84a98c]/40 hover:bg-[#f7f9fa]"
                >
                  {props.ctaSecondary.label}
                </a>
              )}
            </div>

            {/* Meta */}
            {props.meta?.length ? (
              <div className="mt-8 flex flex-wrap gap-4">
                {props.meta.map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-2 text-sm text-[#53636b]"
                  >
                    <span className="text-[#84a98c]">✓</span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* Right: Visual */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 rounded-3xl border border-[#e6edf0] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                {/* Icon grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-gradient-to-br from-[#84a98c]/10 to-[#84a98c]/5 p-5">
                    <div className="text-3xl">👂</div>
                    <div className="mt-2 text-sm font-medium text-[#2f3e46]">Achtsames Zuhören</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-[#c9a24d]/10 to-[#c9a24d]/5 p-5">
                    <div className="text-3xl">💬</div>
                    <div className="mt-2 text-sm font-medium text-[#2f3e46]">Klare Gespräche</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-[#52796f]/10 to-[#52796f]/5 p-5">
                    <div className="text-3xl">🧘</div>
                    <div className="mt-2 text-sm font-medium text-[#2f3e46]">Selbstregulation</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-[#2f3e46]/10 to-[#2f3e46]/5 p-5">
                    <div className="text-3xl">🤝</div>
                    <div className="mt-2 text-sm font-medium text-[#2f3e46]">Mehr Adhärenz</div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-6 flex items-center justify-between rounded-xl bg-[#f7f9fa] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#84a98c] to-[#52796f]" />
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#c9a24d] to-[#b8922c]" />
                    </div>
                    <span className="text-xs text-[#53636b]">2 Trainer:innen</span>
                  </div>
                  <div className="rounded-full bg-[#84a98c]/10 px-3 py-1 text-xs font-medium text-[#84a98c]">
                    Max. 8 TN
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-gradient-to-br from-[#84a98c] to-[#52796f] opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl bg-gradient-to-br from-[#c9a24d] to-[#b8922c] opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="pointer-events-none absolute -top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-[#84a98c] opacity-15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-[-140px] h-[520px] w-[520px] rounded-full bg-[#c9a24d] opacity-10 blur-3xl" />
    </section>
  );
}
