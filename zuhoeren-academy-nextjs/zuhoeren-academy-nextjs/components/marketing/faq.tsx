"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Sind die Plattformen nur für große Unternehmen?",
    a: "Nein. Wir starten oft mit kleinen Piloten (z. B. 10–50 Nutzer) und skalieren danach schrittweise.",
  },
  {
    q: "Was ist der Unterschied zur klassischen E-Learning-Plattform?",
    a: "Der Fokus liegt auf Übung, Simulation und Feedback — nicht nur Videos/Tests. Fortschritt wird über Scores sichtbar.",
  },
  {
    q: "Kann man mehrere Plattformen kombinieren?",
    a: "Ja. Die Suite ist so gedacht: z. B. Dialog + Leadership für Führungskräfte, oder Sales + Dialog für Vertriebsteams.",
  },
  {
    q: "Wie schnell sieht man Ergebnisse?",
    a: "Typisch nach 2–4 Wochen Pilot: erste Score-Verbesserungen und qualitative Effekte im Gesprächsverhalten.",
  },
  {
    q: "Wie sieht es mit DSGVO aus?",
    a: "Wir setzen auf Datenminimierung, Rollen & Rechte und dokumentierte Datenflüsse. Details passen wir an dein Setup an.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="container py-14 md:py-18">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
      <div className="mt-8 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white/70 shadow-sm backdrop-blur">
        {faqs.map((f, idx) => {
          const isOpen = open === idx;
          return (
            <button
              key={f.q}
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="font-medium">{f.q}</div>
                <ChevronDown className={"h-5 w-5 transition " + (isOpen ? "rotate-180" : "")} />
              </div>
              {isOpen ? <p className="mt-3 text-sm text-neutral-700">{f.a}</p> : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}
