"use client";

import { useEffect, useState } from "react";

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Warm orbs */}
      <div
        className="absolute h-[600px] w-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(194,122,73,0.15), transparent 70%)",
          top: "-10%",
          right: "-5%",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute h-[500px] w-[500px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(16,98,120,0.12), transparent 70%)",
          bottom: "10%",
          left: "-10%",
          animation: "float 25s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute h-[400px] w-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(194,122,73,0.1), transparent 70%)",
          top: "40%",
          right: "20%",
          animation: "float 18s ease-in-out infinite 5s",
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
      `}</style>
    </div>
  );
}

export function MindfulQuote() {
  const quotes = [
    { text: "Zuhören ist die höchste Form der Aufmerksamkeit.", author: "Unbekannt" },
    { text: "In der Stille liegt die Kraft des Verstehens.", author: "Weisheit" },
    { text: "Wer zuhört, schenkt Zeit.", author: "Deutsches Sprichwort" },
    { text: "Präsenz ist das größte Geschenk.", author: "Thich Nhat Hanh" },
  ];

  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#e2e4e8]/50 bg-gradient-to-br from-[#f8f7f4] to-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
      {/* Decorative elements */}
      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#c27a49]/5" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#106278]/5" />

      {/* Lotus icon */}
      <div className="mb-6 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#c27a49]/10 to-[#106278]/10 text-3xl">
          🪷
        </div>
      </div>

      {/* Quote */}
      <div
        className={`text-center transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <blockquote className="text-lg font-medium italic text-[#121418] sm:text-xl">
          &ldquo;{quotes[currentQuote].text}&rdquo;
        </blockquote>
        <cite className="mt-4 block text-sm text-[#616974]">— {quotes[currentQuote].author}</cite>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {quotes.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentQuote(idx);
                setIsVisible(true);
              }, 300);
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              idx === currentQuote ? "w-6 bg-[#c27a49]" : "bg-[#e2e4e8] hover:bg-[#c27a49]/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function WarmDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c27a49]/20 to-transparent" />
      <div className="mx-4 flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c27a49]/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#c27a49]/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#c27a49]/30" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c27a49]/20 to-transparent" />
    </div>
  );
}

export function CalmingCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#e2e4e8]/50 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(16,98,120,0.1)]">
      {/* Warm gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c27a49]/5 to-[#106278]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c27a49]/10 to-[#106278]/10 text-2xl transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-[#121418]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#616974]">{description}</p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#c27a49] to-[#106278] transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
