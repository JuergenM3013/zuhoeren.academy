"use client";

import { useState } from "react";

type Module = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  icon: string;
  color: string;
  topics: string[];
};

const MODULES: Module[] = [
  {
    id: 1,
    title: "Ankommen & Wahrnehmen",
    subtitle: "Grundlagen der Präsenz",
    description: "In diesem Modul schaffen wir die Basis: bewusste Wahrnehmung, innere Haltung und Achtsamkeit als Fundament wirksamer Kommunikation.",
    duration: "2,5-3 Std.",
    icon: "🎯",
    color: "#84a98c",
    topics: ["Achtsamkeitsübungen", "Körperwahrnehmung", "Innere Haltung entwickeln"],
  },
  {
    id: 2,
    title: "Zuhören verstehen",
    subtitle: "Muster erkennen",
    description: "Wir identifizieren den Autopilot, Filter und Bewertungen, die echtes Zuhören verhindern. Wissenschaftlich fundiert, praktisch anwendbar.",
    duration: "2,5-3 Std.",
    icon: "👂",
    color: "#52796f",
    topics: ["Autopilot-Modus", "Innere Filter", "Wirkung von Zuhören"],
  },
  {
    id: 3,
    title: "Selbstregulation & Atmung",
    subtitle: "Stabilität im Gespräch",
    description: "Atem- und Selbstregulationstechniken für mehr Ruhe unter Druck. Ruhig bleiben, offen bleiben, klar bleiben.",
    duration: "2,5-3 Std.",
    icon: "🌬️",
    color: "#354f52",
    topics: ["Atemtechniken", "Nervensystem regulieren", "Emotionale Balance"],
  },
  {
    id: 4,
    title: "Zuhören im Dialog",
    subtitle: "Anwendung & Transfer",
    description: `Förderliche Gespräche führen – ohne sich zu verlieren. Fallbeispiele aus dem Klinikalltag, Übungen und direkter Transfer.`,
    duration: "2,5-3 Std.",
    icon: "💬",
    color: "#2f3e46",
    topics: ["Dialogübungen", "Fallbeispiele", "Alltagstransfer"],
  },
];

export function ModuleTimeline() {
  const [activeModule, setActiveModule] = useState<number>(1);

  const active = MODULES.find((m) => m.id === activeModule) || MODULES[0];

  return (
    <div className="overflow-hidden rounded-3xl border border-[#e6edf0] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
      {/* Timeline Header */}
      <div className="relative border-b border-[#e6edf0] bg-gradient-to-r from-[#f7f9fa] to-white p-6">
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2">
          {MODULES.map((mod, idx) => {
            const isActive = mod.id === activeModule;
            const isPast = mod.id < activeModule;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className="group flex flex-1 flex-col items-center gap-2"
              >
                {/* Connector line */}
                {idx > 0 && (
                  <div
                    className="absolute top-[52px] h-1 transition-colors duration-300"
                    style={{
                      left: `${(idx - 1) * 25 + 12.5}%`,
                      width: "25%",
                      background: isPast || isActive ? mod.color : "#e6edf0",
                    }}
                  />
                )}

                {/* Circle */}
                <div
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl transition-all duration-300"
                  style={{
                    borderColor: isActive ? mod.color : isPast ? mod.color : "#e6edf0",
                    background: isActive ? mod.color : "white",
                    transform: isActive ? "scale(1.15)" : "scale(1)",
                    boxShadow: isActive ? `0 8px 24px ${mod.color}40` : "none",
                  }}
                >
                  <span className={isActive ? "grayscale-0" : "grayscale"}>{mod.icon}</span>
                </div>

                {/* Label */}
                <span
                  className={`whitespace-nowrap text-xs font-medium transition-colors ${
                    isActive ? "text-[#2f3e46]" : "text-[#53636b]"
                  }`}
                >
                  Modul {mod.id}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-12">
        {/* Left: Details */}
        <div className="border-b border-[#e6edf0] p-8 lg:col-span-7 lg:border-b-0 lg:border-r">
          <div className="flex items-start gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
              style={{ background: `${active.color}15` }}
            >
              {active.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2f3e46]">{active.title}</h3>
              <p className="mt-1 text-sm text-[#84a98c]">{active.subtitle}</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-[#53636b]">{active.description}</p>

          {/* Topics */}
          <div className="mt-6 flex flex-wrap gap-2">
            {active.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full px-3 py-1.5 text-xs font-medium"
                style={{ background: `${active.color}10`, color: active.color }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Meta */}
        <div className="flex flex-col justify-center p-8 lg:col-span-5">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#84a98c]/10 text-[#84a98c]">
                ⏱
              </div>
              <div>
                <div className="text-sm font-medium text-[#2f3e46]">{active.duration}</div>
                <div className="text-xs text-[#53636b]">pro Modul</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c9a24d]/10 text-[#c9a24d]">
                🏥
              </div>
              <div>
                <div className="text-sm font-medium text-[#2f3e46]">Inhouse</div>
                <div className="text-xs text-[#53636b]">in Ihrer Klinik</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#52796f]/10 text-[#52796f]">
                👥
              </div>
              <div>
                <div className="text-sm font-medium text-[#2f3e46]">Max. 8 Teilnehmer</div>
                <div className="text-xs text-[#53636b]">für intensive Betreuung</div>
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mt-8">
            <div className="flex justify-between text-xs text-[#53636b]">
              <span>Modul {activeModule} von 4</span>
              <span>{activeModule * 25}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e6edf0]">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${activeModule * 25}%`,
                  background: `linear-gradient(90deg, #84a98c, ${active.color})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
