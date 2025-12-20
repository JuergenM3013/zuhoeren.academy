"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-950/95 backdrop-blur-md p-4 md:hidden">
      <a
        href="#kontakt"
        className="block w-full rounded-xl bg-violet-600 py-3 text-center font-semibold hover:bg-violet-500 transition"
      >
        Demo anfragen
      </a>
    </div>
  );
}
