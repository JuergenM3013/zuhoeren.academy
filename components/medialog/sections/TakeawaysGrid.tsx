"use client";

import { useState } from "react";

type Takeaway = {
  text: string;
  icon: string;
  highlight: string;
};

const TAKEAWAY_DATA: Takeaway[] = [
  {
    text: `Gespräche strukturieren – ohne sie zu „vertechnisieren"`,
    icon: "🎯",
    highlight: "Struktur",
  },
  {
    text: "Eigene innere Reaktionen früh wahrnehmen",
    icon: "👁",
    highlight: "Selbstwahrnehmung",
  },
  {
    text: "Zuhören ohne Rechtfertigen, Retten oder Erklären",
    icon: "👂",
    highlight: "Echtes Zuhören",
  },
  {
    text: "Klar bleiben – auch bei Druck & Emotion",
    icon: "🧘",
    highlight: "Klarheit",
  },
  {
    text: "Werkzeuge, die am nächsten Tag anwendbar sind",
    icon: "🔧",
    highlight: "Praxisnah",
  },
];

export function TakeawaysGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Main grid */}
      <div className="grid gap-4 lg:grid-cols-5">
        {TAKEAWAY_DATA.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={idx}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-500 ${
                isActive
                  ? "border-[#c9a24d] shadow-[0_20px_50px_rgba(201,162,77,0.2)] scale-105 z-10"
                  : "border-[#e6edf0] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
              }`}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#c9a24d]/10 to-[#84a98c]/5 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative">
                {/* Number badge */}
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f9fa] text-xs font-bold text-[#53636b]">
                  {idx + 1}
                </div>

                {/* Icon */}
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-br from-[#c9a24d] to-[#b8922c] shadow-[0_10px_25px_rgba(201,162,77,0.3)] scale-110"
                      : "bg-[#c9a24d]/10"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Highlight tag */}
                <div
                  className={`mb-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-[#c9a24d] text-white"
                      : "bg-[#c9a24d]/10 text-[#c9a24d]"
                  }`}
                >
                  {item.highlight}
                </div>

                {/* Text */}
                <p className="text-sm leading-relaxed text-[#2f3e46]">{item.text}</p>
              </div>

              {/* Bottom line indicator */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#c9a24d] to-[#84a98c] transition-all duration-500 ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Summary bar */}
      <div className="mt-8 flex items-center justify-center gap-4 rounded-2xl border border-[#e6edf0] bg-gradient-to-r from-[#f7f9fa] to-white p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#84a98c]/10 text-xl">
          ✨
        </div>
        <p className="text-sm text-[#53636b]">
          <span className="font-medium text-[#2f3e46]">Alle Werkzeuge sind sofort einsetzbar</span>
          {" "}– keine Theorie ohne Praxis.
        </p>
      </div>
    </div>
  );
}
