"use client";

import { useState, useEffect } from "react";

export function MedialogStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <>
      {/* Sticky Button */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#2f3e46] to-[#1b252a] px-6 py-4 text-sm font-medium text-white shadow-[0_10px_40px_rgba(47,62,70,0.4)] transition hover:shadow-[0_14px_50px_rgba(47,62,70,0.5)]"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#84a98c] opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#84a98c]" />
          </span>
          <span>Inhouse-Angebot anfragen</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed bottom-0 right-0 top-0 z-50 w-full max-w-md transform bg-white shadow-2xl transition-transform duration-500 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="border-b border-[#e6edf0] bg-gradient-to-r from-[#f7f9fa] to-white px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#2f3e46]">Medialog Masterclass</h3>
              <p className="text-sm text-[#53636b]">Inhouse-Angebot anfragen</p>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e6edf0] text-[#53636b] transition hover:bg-[#f7f9fa]"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: "calc(100vh - 90px)" }}>
          {/* Quick Facts */}
          <div className="mb-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-[#e6edf0] bg-[#f7f9fa] p-4">
              <div className="text-2xl font-bold text-[#2f3e46]">4</div>
              <div className="text-xs text-[#53636b]">Module</div>
            </div>
            <div className="rounded-xl border border-[#e6edf0] bg-[#f7f9fa] p-4">
              <div className="text-2xl font-bold text-[#2f3e46]">8</div>
              <div className="text-xs text-[#53636b]">Max. Teilnehmer</div>
            </div>
            <div className="rounded-xl border border-[#e6edf0] bg-[#f7f9fa] p-4">
              <div className="text-2xl font-bold text-[#2f3e46]">2</div>
              <div className="text-xs text-[#53636b]">Trainer:innen</div>
            </div>
            <div className="rounded-xl border border-[#e6edf0] bg-[#f7f9fa] p-4">
              <div className="text-2xl font-bold text-[#84a98c]">✓</div>
              <div className="text-xs text-[#53636b]">Inhouse</div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="mb-6 space-y-3">
            <a
              href="tel:+436643978684"
              className="flex items-center gap-4 rounded-xl border border-[#e6edf0] bg-white p-4 transition hover:border-[#84a98c]/40 hover:bg-[#f7f9fa]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#84a98c]/10 text-[#84a98c]">
                📞
              </div>
              <div>
                <div className="text-sm font-medium text-[#2f3e46]">Direkt anrufen</div>
                <div className="text-sm text-[#53636b]">+43 664 397 8684</div>
              </div>
            </a>

            <a
              href={`mailto:hallo@zuhoerakademie.at?subject=Anfrage%20Medialog%20Masterclass&body=Guten%20Tag%2C%0A%0Awir%20interessieren%20uns%20f%C3%BCr%20die%20Medialog%20Masterclass.%0A%0ABitte%20senden%20Sie%20uns%20ein%20unverbindliches%20Angebot.%0A%0AKlinik%2FOrganisation%3A%20%0AOrt%3A%20%0AGew%C3%BCnschter%20Zeitraum%3A%20%0ATeilnehmer%3Ainnen%3A%20%0A%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen`}
              className="flex items-center gap-4 rounded-xl border border-[#e6edf0] bg-white p-4 transition hover:border-[#c9a24d]/40 hover:bg-[#f7f9fa]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c9a24d]/10 text-[#c9a24d]">
                ✉
              </div>
              <div>
                <div className="text-sm font-medium text-[#2f3e46]">E-Mail schreiben</div>
                <div className="text-sm text-[#53636b]">hallo@zuhoerakademie.at</div>
              </div>
            </a>
          </div>

          <div className="relative my-6 flex items-center">
            <div className="flex-1 border-t border-[#e6edf0]" />
            <span className="px-4 text-xs text-[#53636b]">oder Formular</span>
            <div className="flex-1 border-t border-[#e6edf0]" />
          </div>

          {/* Form */}
          <form
            action="mailto:hallo@zuhoerakademie.at"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <label className="block text-sm">
              <span className="text-[#2f3e46]">Klinik / Organisation</span>
              <input
                className="mt-2 w-full rounded-xl border border-[#e6edf0] px-4 py-3 text-sm transition focus:border-[#84a98c] focus:outline-none"
                placeholder="Name der Einrichtung"
                name="klinik"
              />
            </label>

            <label className="block text-sm">
              <span className="text-[#2f3e46]">Ansprechpartner:in</span>
              <input
                className="mt-2 w-full rounded-xl border border-[#e6edf0] px-4 py-3 text-sm transition focus:border-[#84a98c] focus:outline-none"
                placeholder="Vor- und Nachname"
                name="name"
              />
            </label>

            <label className="block text-sm">
              <span className="text-[#2f3e46]">E-Mail</span>
              <input
                className="mt-2 w-full rounded-xl border border-[#e6edf0] px-4 py-3 text-sm transition focus:border-[#84a98c] focus:outline-none"
                placeholder="name@klinik.at"
                name="email"
                type="email"
              />
            </label>

            <label className="block text-sm">
              <span className="text-[#2f3e46]">Nachricht (optional)</span>
              <textarea
                className="mt-2 min-h-[80px] w-full rounded-xl border border-[#e6edf0] px-4 py-3 text-sm transition focus:border-[#84a98c] focus:outline-none"
                placeholder="Zeitraum, Teilnehmerzahl, besondere Anforderungen..."
                name="message"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-[#2f3e46] to-[#1b252a] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(47,62,70,0.2)] transition hover:opacity-95"
            >
              Angebot anfragen
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-[#53636b]">
            Unverbindlich · Antwort innerhalb von 24h
          </p>
        </div>
      </div>
    </>
  );
}
