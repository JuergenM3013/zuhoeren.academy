"use client";

import { useState } from "react";

type Item = {
  problem: string;
  solution: string;
  icon: string;
};

const ITEMS: Item[] = [
  {
    problem: "Gespräche unter Zeitdruck",
    solution: "Gezielte Präsenz in wenigen Minuten",
    icon: "⏱",
  },
  {
    problem: "Emotionale Erschöpfung",
    solution: "Selbstregulation & innere Distanz",
    icon: "🔋",
  },
  {
    problem: "Patient:innen fühlen sich nicht gehört",
    solution: "Echtes Zuhören schafft Vertrauen",
    icon: "👂",
  },
  {
    problem: "Sinkende Therapietreue",
    solution: "Bessere Adhärenz durch Beziehung",
    icon: "🤝",
  },
  {
    problem: "Konflikte & Missverständnisse",
    solution: "Klarheit ohne Rechtfertigung",
    icon: "💬",
  },
];

export function ProblemSolution() {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="space-y-6">
      {/* Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-2xl border border-[#e6edf0] bg-white p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <button
            onClick={() => setShowSolution(false)}
            className={`rounded-xl px-6 py-3 text-sm font-medium transition-all ${
              !showSolution
                ? "bg-[#dc6b5a] text-white shadow-[0_4px_12px_rgba(220,107,90,0.3)]"
                : "text-[#53636b] hover:text-[#2f3e46]"
            }`}
          >
            Vorher
          </button>
          <button
            onClick={() => setShowSolution(true)}
            className={`rounded-xl px-6 py-3 text-sm font-medium transition-all ${
              showSolution
                ? "bg-[#84a98c] text-white shadow-[0_4px_12px_rgba(132,169,140,0.3)]"
                : "text-[#53636b] hover:text-[#2f3e46]"
            }`}
          >
            Nachher
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl border border-[#e6edf0] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
          >
            {/* Background indicator */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                showSolution ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background: "linear-gradient(135deg, rgba(132,169,140,0.05), rgba(82,121,111,0.05))",
              }}
            />

            <div className="relative">
              {/* Icon */}
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-all duration-500 ${
                  showSolution
                    ? "bg-[#84a98c]/10 scale-110"
                    : "bg-[#dc6b5a]/10"
                }`}
              >
                {item.icon}
              </div>

              {/* Content with flip animation */}
              <div className="relative h-16">
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    showSolution
                      ? "translate-y-4 opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  <p className="text-sm font-medium text-[#dc6b5a]">{item.problem}</p>
                </div>
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    showSolution
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-4 opacity-0"
                  }`}
                >
                  <p className="text-sm font-medium text-[#84a98c]">{item.solution}</p>
                </div>
              </div>
            </div>

            {/* Status indicator */}
            <div className="absolute bottom-4 right-4">
              <div
                className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                  showSolution ? "bg-[#84a98c]" : "bg-[#dc6b5a]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div
        className={`rounded-2xl border p-6 text-center transition-all duration-500 ${
          showSolution
            ? "border-[#84a98c]/30 bg-[#84a98c]/5"
            : "border-[#dc6b5a]/30 bg-[#dc6b5a]/5"
        }`}
      >
        <p
          className={`text-sm font-medium transition-colors duration-500 ${
            showSolution ? "text-[#84a98c]" : "text-[#dc6b5a]"
          }`}
        >
          {showSolution
            ? "Mit achtsamer Kommunikation: Mehr Klarheit, weniger Stress, bessere Ergebnisse."
            : "Ohne Training: Hoher Druck, wenig Verbindung, schnelle Erschöpfung."}
        </p>
      </div>
    </div>
  );
}
