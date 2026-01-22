"use client";

import { useState } from "react";

export function Accordion({ items }: { items: { title: string; content: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={it.title}
            className="rounded-2xl border border-[#e6edf0] bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-[#2f3e46]">{it.title}</span>
              <span className="text-lg text-[#84a98c]">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-[#53636b]">{it.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
