"use client";

import { useState, useEffect, useRef } from "react";

type Station = {
  id: number;
  title: string;
  duration: string;
  description: string;
  highlight: string;
};

const STATIONS: Station[] = [
  {
    id: 1,
    title: "Ankommen mit allen Sinnen",
    duration: "~30 Min",
    description: "Gegenstandsachtsamkeit: wahrnehmen, erkunden, landen. Sie kommen ganz im Raum und bei sich an.",
    highlight: "Achtsamkeitsübung",
  },
  {
    id: 2,
    title: "Zuhören bewusst erleben",
    duration: "~45 Min",
    description: "Muster und innere Verhinderer erkennen. Was passiert, wenn Sie zuhören – und was Sie ablenkt.",
    highlight: "Selbstreflexion",
  },
  {
    id: 3,
    title: "Innere Voraussetzungen stärken",
    duration: "~30 Min",
    description: "Atem & Selbstregulation als Basis von Präsenz. Einfache Tools, die Sie sofort anwenden können.",
    highlight: "Körperübung",
  },
  {
    id: 4,
    title: "Die sieben Säulen des Zuhörens",
    duration: "~60 Min",
    description: "Gemeinsam erarbeiten – Fokus auf Achtsamkeit, Akzeptanz und die Kunst des Nicht-Urteilens.",
    highlight: "Gruppenarbeit",
  },
  {
    id: 5,
    title: "Selbstmitgefühl & innere Haltung",
    duration: "~30 Min",
    description: "Übungen, die Druck rausnehmen und Mitgefühl kultivieren – für sich selbst und andere.",
    highlight: "Meditation",
  },
  {
    id: 6,
    title: "Zuhören im Dialog",
    duration: "~60 Min",
    description: "Vom Monolog zur Verbindung: förderliche Dialoge gestalten. Partnerübungen mit Reflexion.",
    highlight: "Dialogübung",
  },
  {
    id: 7,
    title: "Integration",
    duration: "~30 Min",
    description: "Transfer: Was nehme ich mit? Wo setze ich es konkret um? Persönlicher Aktionsplan.",
    highlight: "Abschluss",
  },
];

export function ScrollJourney() {
  const [activeStation, setActiveStation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStation((prev) => (prev + 1) % STATIONS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const current = STATIONS[activeStation];
  const progress = ((activeStation + 1) / STATIONS.length) * 100;

  return (
    <div
      ref={containerRef}
      className="rounded-3xl border border-[#e2e4e8] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden"
    >
      {/* Header */}
      <div className="border-b border-[#e2e4e8] bg-[#f8f7f4] p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-[#121418]">Der Weg durch das Seminar</h3>
        <p className="mt-2 text-sm text-[#616974]">
          Eine ruhige Dramaturgie: ankommen, wahrnehmen, verstehen, üben – und integrieren.
        </p>

        {/* Progress */}
        <div className="mt-6">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e2e4e8]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#106278] to-[#c27a49] transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-[#616974]">
            <span>Start</span>
            <span>Station {activeStation + 1} von {STATIONS.length}</span>
            <span>Ende</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12">
        {/* Timeline Navigation */}
        <div className="border-b border-[#e2e4e8] bg-[#f8f7f4]/50 p-4 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-6">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
            {STATIONS.map((station, idx) => {
              const isActive = idx === activeStation;
              const isPast = idx < activeStation;
              return (
                <button
                  key={station.id}
                  onClick={() => setActiveStation(idx)}
                  className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-2 text-left transition lg:w-full ${
                    isActive
                      ? "bg-[#106278]/10"
                      : "hover:bg-[#f8f7f4]"
                  }`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium transition ${
                      isActive
                        ? "bg-[#106278] text-white"
                        : isPast
                        ? "bg-[#c27a49]/20 text-[#c27a49]"
                        : "bg-[#e2e4e8] text-[#616974]"
                    }`}
                  >
                    {isPast ? "✓" : station.id}
                  </div>
                  <span
                    className={`hidden text-xs lg:block ${
                      isActive ? "font-medium text-[#106278]" : "text-[#616974]"
                    }`}
                  >
                    {station.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Panel */}
        <div className="p-6 sm:p-8 lg:col-span-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full bg-[#c27a49]/10 px-3 py-1 text-xs font-medium text-[#c27a49]">
                {current.highlight}
              </span>
              <h4 className="mt-3 text-xl font-semibold text-[#121418]">
                <span className="text-[#106278]">{String(current.id).padStart(2, "0")}</span>{" "}
                {current.title}
              </h4>
            </div>
            <span className="shrink-0 text-sm text-[#616974]">{current.duration}</span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[#616974]">{current.description}</p>

          {/* Visual indicator */}
          <div className="mt-8 flex gap-1">
            {STATIONS.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                  idx === activeStation
                    ? "bg-[#106278]"
                    : idx < activeStation
                    ? "bg-[#c27a49]/40"
                    : "bg-[#e2e4e8]"
                }`}
              />
            ))}
          </div>

          {/* Navigation hints */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => setActiveStation((prev) => (prev - 1 + STATIONS.length) % STATIONS.length)}
              className="text-sm text-[#616974] hover:text-[#106278] transition"
            >
              ← Zurück
            </button>
            <button
              onClick={() => setActiveStation((prev) => (prev + 1) % STATIONS.length)}
              className="text-sm text-[#616974] hover:text-[#106278] transition"
            >
              Weiter →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
