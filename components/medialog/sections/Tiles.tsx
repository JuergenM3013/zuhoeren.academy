"use client";

import { useState } from "react";

type TileData = {
  text: string;
  icon: string;
  description: string;
};

const TILE_DATA: Record<string, TileData> = {
  "Visite & Stationsalltag": {
    text: "Visite & Stationsalltag",
    icon: "🏥",
    description: "Kurze Gespräche mit Wirkung – auch unter Zeitdruck präsent bleiben.",
  },
  "Ambulanz & Aufklärungsgespräche": {
    text: "Ambulanz & Aufklärung",
    icon: "📋",
    description: "Komplexe Informationen verständlich vermitteln, Ängste wahrnehmen.",
  },
  "Schwierige Gespräche & Emotionen": {
    text: "Schwierige Gespräche",
    icon: "💬",
    description: "Bei Trauer, Wut oder Angst ruhig und empathisch bleiben.",
  },
  "Interdisziplinäre Abstimmung": {
    text: "Interdisziplinäres Team",
    icon: "👥",
    description: "Effektive Kommunikation zwischen Berufsgruppen und Abteilungen.",
  },
  "Führung & Verantwortung": {
    text: "Führung & Verantwortung",
    icon: "🎯",
    description: "Als Führungskraft zuhören, delegieren und Vertrauen aufbauen.",
  },
};

export function Tiles({ items }: { items: string[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item, idx) => {
        const data = TILE_DATA[item] || { text: item, icon: "✓", description: "" };
        const isHovered = hoveredIndex === idx;

        return (
          <div
            key={item}
            className="group relative overflow-hidden rounded-2xl border border-[#e6edf0] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#84a98c]/30 hover:shadow-[0_20px_50px_rgba(132,169,140,0.15)]"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background gradient on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-[#84a98c]/5 to-[#52796f]/5 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="relative">
              {/* Icon */}
              <div
                className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-all duration-300 ${
                  isHovered
                    ? "bg-[#84a98c] scale-110 shadow-[0_8px_20px_rgba(132,169,140,0.3)]"
                    : "bg-[#84a98c]/10"
                }`}
              >
                <span className={isHovered ? "grayscale-0" : ""}>{data.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-[#2f3e46]">{data.text}</h3>

              {/* Description */}
              <p
                className={`mt-2 text-xs leading-relaxed text-[#53636b] transition-all duration-300 ${
                  isHovered ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
                }`}
              >
                {data.description}
              </p>
            </div>

            {/* Corner accent */}
            <div
              className={`absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-[#84a98c]/10 transition-transform duration-500 ${
                isHovered ? "scale-150" : "scale-100"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}
