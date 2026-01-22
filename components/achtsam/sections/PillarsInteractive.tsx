"use client";

import { useState } from "react";

type Pillar = {
  id: number;
  name: string;
  icon: string;
  short: string;
  long: string;
  practice: string;
};

const PILLARS: Pillar[] = [
  {
    id: 1,
    name: "Achtsamkeit",
    icon: "◉",
    short: "Im Moment sein",
    long: `Bewusst wahrnehmen, was gerade ist – ohne wegzudriften oder zu bewerten.`,
    practice: "Vor einem Gespräch: 3 Atemzüge, Füße spüren, ankommen.",
  },
  {
    id: 2,
    name: "Akzeptanz",
    icon: "◎",
    short: "Annehmen, was ist",
    long: "Das Gesagte zunächst stehen lassen, ohne es sofort verändern zu wollen.",
    practice: `Innerlich sagen: „So ist es gerade für dich." – und abwarten.`,
  },
  {
    id: 3,
    name: "Präsenz",
    icon: "●",
    short: "Ganz da sein",
    long: "Mit Körper und Geist vollständig beim Gegenüber sein.",
    practice: "Blickkontakt halten, Körper leicht zuwenden, Atem ruhig.",
  },
  {
    id: 4,
    name: "Offenheit",
    icon: "○",
    short: "Neugierig bleiben",
    long: "Bereit sein für Überraschendes, auch wenn es unbequem ist.",
    practice: `Fragen stellen statt Annahmen machen: „Wie meinst du das?"`,
  },
  {
    id: 5,
    name: "Wertfreiheit",
    icon: "◇",
    short: "Nicht urteilen",
    long: "Eigene Meinungen und Bewertungen bewusst zurückstellen.",
    practice: `Bewertungen bemerken – und innerlich auf „Pause" drücken.`,
  },
  {
    id: 6,
    name: "Selbstregulation",
    icon: "◆",
    short: "Innere Balance",
    long: "Eigene Emotionen wahrnehmen, ohne von ihnen überwältigt zu werden.",
    practice: "Bei Anspannung: langer Ausatem, Schultern lösen.",
  },
  {
    id: 7,
    name: "Beziehung",
    icon: "◈",
    short: "Verbindung schaffen",
    long: "Gemeinsamer Raum, in dem sich beide sicher und gehört fühlen.",
    practice: `Kurz spiegeln: „Ich höre, dass dir … wichtig ist."`,
  },
];

export function PillarsInteractive() {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const active = PILLARS.find((p) => p.id === activePillar);

  return (
    <div className="rounded-3xl border border-[#e2e4e8] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-8">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-[#121418]">Die sieben Säulen des Zuhörens</h3>
        <p className="mt-2 text-sm text-[#616974]">
          Klicken Sie auf eine Säule, um mehr zu erfahren.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {PILLARS.map((pillar) => {
          const isActive = activePillar === pillar.id;
          return (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(isActive ? null : pillar.id)}
              className={`group flex flex-col items-center rounded-2xl border p-4 transition-all duration-300 ${
                isActive
                  ? "border-[#106278] bg-[#106278]/5 shadow-[0_8px_24px_rgba(16,98,120,0.15)]"
                  : "border-[#e2e4e8] bg-[#f8f7f4] hover:border-[#c27a49]/50 hover:bg-white"
              }`}
            >
              <span
                className={`text-2xl transition-colors ${
                  isActive ? "text-[#106278]" : "text-[#c27a49] group-hover:text-[#106278]"
                }`}
              >
                {pillar.icon}
              </span>
              <span
                className={`mt-2 text-xs font-medium transition-colors ${
                  isActive ? "text-[#106278]" : "text-[#121418]"
                }`}
              >
                {pillar.name}
              </span>
              <span className="mt-1 text-[10px] text-[#616974]">{pillar.short}</span>
            </button>
          );
        })}
      </div>

      {/* Detail Panel */}
      <div
        className={`mt-6 overflow-hidden transition-all duration-500 ${
          active ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {active && (
          <div className="rounded-2xl border border-[#106278]/20 bg-gradient-to-br from-[#106278]/5 to-[#c27a49]/5 p-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-[#106278]">{active.icon}</span>
              <div>
                <h4 className="text-lg font-semibold text-[#121418]">{active.name}</h4>
                <p className="text-sm text-[#616974]">{active.short}</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#616974]">{active.long}</p>

            <div className="mt-5 rounded-xl border border-[#e2e4e8] bg-white p-4">
              <div className="text-xs font-medium uppercase tracking-wide text-[#c27a49]">
                Übung für den Alltag
              </div>
              <p className="mt-2 text-sm text-[#121418]">{active.practice}</p>
            </div>
          </div>
        )}
      </div>

      {!active && (
        <p className="mt-6 text-center text-xs text-[#616974]">
          Im Seminar erleben Sie alle sieben Säulen in Übungen und Dialogen.
        </p>
      )}
    </div>
  );
}
