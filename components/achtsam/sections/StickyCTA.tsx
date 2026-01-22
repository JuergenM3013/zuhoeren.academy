"use client";

import { useState, useEffect } from "react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when drawer is open
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
          className="group flex items-center gap-3 rounded-2xl bg-[#106278] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_rgba(16,98,120,0.35)] transition hover:shadow-[0_12px_48px_rgba(16,98,120,0.45)]"
        >
          <span>Gespräch anfragen</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
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
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#e2e4e8] bg-[#f8f7f4] px-6 py-4">
          <div>
            <h3 className="text-lg font-semibold text-[#121418]">Kontakt aufnehmen</h3>
            <p className="text-sm text-[#616974]">Wir melden uns zeitnah.</p>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e2e4e8] bg-white text-[#616974] transition hover:bg-[#f8f7f4]"
          >
            ✕
          </button>
        </div>

        {/* Drawer Content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: "calc(100vh - 80px)" }}>
          {/* Quick Contact */}
          <div className="mb-6 space-y-3">
            <a
              href="tel:+436643978684"
              className="flex items-center gap-4 rounded-2xl border border-[#e2e4e8] bg-[#f8f7f4] p-4 transition hover:border-[#106278]/30 hover:bg-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#106278]/10 text-[#106278]">
                📞
              </div>
              <div>
                <div className="text-sm font-medium text-[#121418]">Anrufen</div>
                <div className="text-sm text-[#616974]">+43 664 397 8684</div>
              </div>
            </a>

            <a
              href={`mailto:hallo@zuhoerakademie.at?subject=Anfrage%20Achtsames%20Zuh%C3%B6ren&body=Guten%20Tag%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20das%20Seminar%20%E2%80%9EAchtsames%20Zuh%C3%B6ren%E2%80%9C.%0A%0ABitte%20nehmen%20Sie%20Kontakt%20mit%20mir%20auf.%0A%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen`}
              className="flex items-center gap-4 rounded-2xl border border-[#e2e4e8] bg-[#f8f7f4] p-4 transition hover:border-[#106278]/30 hover:bg-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c27a49]/10 text-[#c27a49]">
                ✉
              </div>
              <div>
                <div className="text-sm font-medium text-[#121418]">E-Mail schreiben</div>
                <div className="text-sm text-[#616974]">hallo@zuhoerakademie.at</div>
              </div>
            </a>
          </div>

          <div className="relative my-6 flex items-center">
            <div className="flex-1 border-t border-[#e2e4e8]" />
            <span className="px-4 text-xs text-[#616974]">oder Formular ausfüllen</span>
            <div className="flex-1 border-t border-[#e2e4e8]" />
          </div>

          {/* Contact Form */}
          <form
            action="mailto:hallo@zuhoerakademie.at"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <label className="block text-sm">
              <span className="text-[#121418]">Name</span>
              <input
                className="mt-2 w-full rounded-xl border border-[#e2e4e8] px-4 py-3 text-sm transition focus:border-[#106278] focus:outline-none"
                placeholder="Vor- und Nachname"
                name="name"
              />
            </label>

            <label className="block text-sm">
              <span className="text-[#121418]">E-Mail</span>
              <input
                className="mt-2 w-full rounded-xl border border-[#e2e4e8] px-4 py-3 text-sm transition focus:border-[#106278] focus:outline-none"
                placeholder="name@beispiel.at"
                name="email"
                type="email"
              />
            </label>

            <label className="block text-sm">
              <span className="text-[#121418]">Interesse</span>
              <select
                className="mt-2 w-full rounded-xl border border-[#e2e4e8] px-4 py-3 text-sm text-[#616974] transition focus:border-[#106278] focus:outline-none"
                name="interesse"
              >
                <option value="">Bitte wählen...</option>
                <option value="seminar">Seminar „Achtsames Zuhören"</option>
                <option value="inhouse">Inhouse-Training</option>
                <option value="beratung">Beratungsgespräch</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
            </label>

            <label className="block text-sm">
              <span className="text-[#121418]">Nachricht (optional)</span>
              <textarea
                className="mt-2 min-h-[100px] w-full rounded-xl border border-[#e2e4e8] px-4 py-3 text-sm transition focus:border-[#106278] focus:outline-none"
                placeholder="Was möchten Sie uns mitteilen?"
                name="message"
              />
            </label>

            <label className="flex items-start gap-3 text-xs text-[#616974]">
              <input type="checkbox" className="mt-1" required />
              <span>
                Ich stimme zu, dass meine Angaben zur Kontaktaufnahme verarbeitet werden.
              </span>
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#106278] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(16,98,120,0.2)] transition hover:opacity-95"
            >
              Nachricht senden
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-[#616974]">
            Wir antworten in der Regel innerhalb von 24 Stunden.
          </p>
        </div>
      </div>
    </>
  );
}
