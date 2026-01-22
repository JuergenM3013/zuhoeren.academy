"use client";

import { useState, useEffect, useCallback } from "react";

type Phase = "idle" | "inhale" | "hold1" | "exhale" | "hold2";

const PHASES: { key: Phase; label: string; duration: number }[] = [
  { key: "inhale", label: "Einatmen", duration: 4 },
  { key: "hold1", label: "Halten", duration: 4 },
  { key: "exhale", label: "Ausatmen", duration: 4 },
  { key: "hold2", label: "Halten", duration: 4 },
];

export function BreathingTimer() {
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<Phase>("idle");
  const [seconds, setSeconds] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(60);

  const getCurrentPhaseIndex = useCallback(() => {
    return PHASES.findIndex((p) => p.key === currentPhase);
  }, [currentPhase]);

  const getPhaseProgress = useCallback(() => {
    const idx = getCurrentPhaseIndex();
    if (idx === -1) return 0;
    const phaseDuration = PHASES[idx].duration;
    return ((phaseDuration - seconds) / phaseDuration) * 100;
  }, [getCurrentPhaseIndex, seconds]);

  useEffect(() => {
    if (!isActive || currentPhase === "idle") return;

    const timer = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 1) {
          setIsActive(false);
          setCurrentPhase("idle");
          return 60;
        }
        return prev - 1;
      });

      setSeconds((prev) => {
        if (prev <= 1) {
          const idx = getCurrentPhaseIndex();
          const nextIdx = (idx + 1) % PHASES.length;
          setCurrentPhase(PHASES[nextIdx].key);
          if (nextIdx === 0) {
            setCycleCount((c) => c + 1);
          }
          return PHASES[nextIdx].duration;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, currentPhase, getCurrentPhaseIndex]);

  const start = () => {
    setIsActive(true);
    setCurrentPhase("inhale");
    setSeconds(4);
    setCycleCount(0);
    setTotalSeconds(60);
  };

  const stop = () => {
    setIsActive(false);
    setCurrentPhase("idle");
    setSeconds(0);
  };

  const getCircleScale = () => {
    if (currentPhase === "inhale") return 1 + (getPhaseProgress() / 100) * 0.3;
    if (currentPhase === "exhale") return 1.3 - (getPhaseProgress() / 100) * 0.3;
    if (currentPhase === "hold1") return 1.3;
    if (currentPhase === "hold2") return 1;
    return 1;
  };

  const currentLabel = PHASES.find((p) => p.key === currentPhase)?.label || "";

  return (
    <div className="rounded-3xl border border-[#e2e4e8] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-8">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-[#121418]">1-Minute Listening Reset</h3>
        <p className="mt-2 text-sm text-[#616974]">
          Box Breathing: 4 Sekunden einatmen, halten, ausatmen, halten.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center">
        {/* Animated Circle */}
        <div className="relative flex h-48 w-48 items-center justify-center">
          {/* Outer ring */}
          <div
            className="absolute inset-0 rounded-full border-4 transition-all duration-1000 ease-in-out"
            style={{
              borderColor: isActive ? "#106278" : "#e2e4e8",
              transform: `scale(${getCircleScale()})`,
            }}
          />

          {/* Inner glow */}
          <div
            className="absolute inset-4 rounded-full transition-all duration-1000 ease-in-out"
            style={{
              background: isActive
                ? `radial-gradient(circle, rgba(16,98,120,0.15), transparent 70%)`
                : "transparent",
              transform: `scale(${getCircleScale()})`,
            }}
          />

          {/* Center content */}
          <div className="z-10 flex flex-col items-center">
            {isActive ? (
              <>
                <span className="text-3xl font-light text-[#106278]">{seconds}</span>
                <span className="mt-1 text-sm font-medium text-[#616974]">{currentLabel}</span>
              </>
            ) : (
              <span className="text-sm text-[#616974]">Bereit?</span>
            )}
          </div>
        </div>

        {/* Progress bar */}
        {isActive && (
          <div className="mt-6 w-full max-w-xs">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e2e4e8]">
              <div
                className="h-full rounded-full bg-[#106278] transition-all duration-1000"
                style={{ width: `${((60 - totalSeconds) / 60) * 100}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-[#616974]">
              <span>Zyklus {cycleCount + 1}</span>
              <span>{totalSeconds}s übrig</span>
            </div>
          </div>
        )}

        {/* Control Button */}
        <button
          onClick={isActive ? stop : start}
          className={`mt-6 rounded-2xl px-6 py-3 text-sm font-medium transition ${
            isActive
              ? "border border-[#e2e4e8] bg-white text-[#121418] hover:bg-[#f8f7f4]"
              : "bg-[#106278] text-white shadow-[0_10px_30px_rgba(16,98,120,0.2)] hover:opacity-95"
          }`}
        >
          {isActive ? "Stopp" : "Starten"}
        </button>
      </div>

      {!isActive && (
        <p className="mt-6 text-center text-xs text-[#616974]">
          Ideal vor wichtigen Gesprächen oder als kurze Pause zwischendurch.
        </p>
      )}
    </div>
  );
}
