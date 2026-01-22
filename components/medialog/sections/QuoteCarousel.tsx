"use client";

import { useState, useEffect } from "react";

type Quote = {
  text: string;
  author: string;
  role: string;
};

const QUOTES: Quote[] = [
  {
    text: "Seit dem Training nehme ich mir bewusst einen Atemzug Zeit, bevor ich antworte. Das verändert alles.",
    author: "Oberärztin Innere Medizin",
    role: "Universitätsklinik",
  },
  {
    text: "Ich dachte, ich kann zuhören. Jetzt weiß ich, was ich vorher verpasst habe.",
    author: "Stationsarzt Kardiologie",
    role: "Krankenhaus",
  },
  {
    text: "Die Atemtechniken helfen mir täglich. Vor schwierigen Gesprächen, zwischen Visiten, überall.",
    author: "Assistenzärztin Onkologie",
    role: "Klinikum",
  },
  {
    text: "Endlich ein Training, das nicht nur Theorie ist. Wir haben geübt, bis es sitzt.",
    author: "Leitende Ärztin Geriatrie",
    role: "Rehabilitationszentrum",
  },
];

export function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    if (index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const current = QUOTES[currentIndex];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#e6edf0] bg-gradient-to-br from-[#2f3e46] to-[#1b252a] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] sm:p-12">
      {/* Decorative elements */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#84a98c]/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#c9a24d]/10 blur-3xl" />

      {/* Quote icon */}
      <div className="relative mb-6 text-5xl text-[#84a98c]/30">"</div>

      {/* Quote content */}
      <div
        className={`relative transition-all duration-300 ${
          isAnimating ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <blockquote className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
          {current.text}
        </blockquote>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#84a98c] to-[#52796f]" />
          <div>
            <div className="font-medium text-white">{current.author}</div>
            <div className="text-sm text-white/60">{current.role}</div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="mt-8 flex justify-center gap-2">
        {QUOTES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 bg-[#84a98c]"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Zitat ${idx + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute right-6 top-6 flex gap-2">
        <button
          onClick={() => goTo((currentIndex - 1 + QUOTES.length) % QUOTES.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/40 hover:text-white"
        >
          ←
        </button>
        <button
          onClick={() => goTo((currentIndex + 1) % QUOTES.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/40 hover:text-white"
        >
          →
        </button>
      </div>
    </div>
  );
}
