"use client";

import { useState, useEffect, useRef } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  icon: string;
};

const STATS: Stat[] = [
  { value: 85, suffix: "%", label: "bessere Adhärenz durch aktives Zuhören", icon: "📈" },
  { value: 4, suffix: " Module", label: "praxisnahe Trainingseinheiten", icon: "📚" },
  { value: 8, suffix: " max.", label: "Teilnehmer:innen pro Gruppe", icon: "👥" },
  { value: 2, suffix: " Trainer", label: "für individuelle Betreuung", icon: "🎯" },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function StatCard({ stat, isVisible }: { stat: Stat; isVisible: boolean }) {
  const count = useCountUp(stat.value, 1500, isVisible);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#e6edf0] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(47,62,70,0.12)]">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#84a98c]/5 to-[#c9a24d]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <span className="text-3xl">{stat.icon}</span>

        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-[#2f3e46]">{count}</span>
          <span className="text-xl font-medium text-[#84a98c]">{stat.suffix}</span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-[#53636b]">{stat.label}</p>
      </div>

      {/* Decorative corner */}
      <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#84a98c]/10 to-transparent transition-transform duration-500 group-hover:scale-150" />
    </div>
  );
}

export function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat, idx) => (
        <StatCard key={idx} stat={stat} isVisible={isVisible} />
      ))}
    </div>
  );
}
