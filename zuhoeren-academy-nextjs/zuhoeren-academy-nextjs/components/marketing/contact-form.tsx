"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export function ContactForm() {
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setState((s) => ({ ...s, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Platzhalter: hier später API Route / CRM / Mailer anbinden.
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur md:grid-cols-2">
      <div className="md:col-span-2">
        <div className="text-sm font-medium text-neutral-900">Kontakt aufnehmen</div>
        <p className="mt-1 text-sm text-neutral-700">
          (Aktuell Dummy-Submit — binde danach deine Mail-/CRM-Lösung an.)
        </p>
      </div>

      <label className="grid gap-2 text-sm">
        <span className="font-medium">Name</span>
        <input
          className="rounded-xl border border-neutral-200 bg-white px-3 py-2"
          value={state.name}
          onChange={(e) => update("name", e.target.value)}
          required
        />
      </label>

      <label className="grid gap-2 text-sm">
        <span className="font-medium">E-Mail</span>
        <input
          className="rounded-xl border border-neutral-200 bg-white px-3 py-2"
          value={state.email}
          onChange={(e) => update("email", e.target.value)}
          type="email"
          required
        />
      </label>

      <label className="grid gap-2 text-sm">
        <span className="font-medium">Unternehmen</span>
        <input
          className="rounded-xl border border-neutral-200 bg-white px-3 py-2"
          value={state.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </label>

      <label className="grid gap-2 text-sm md:col-span-2">
        <span className="font-medium">Worum geht’s?</span>
        <textarea
          className="min-h-[120px] rounded-xl border border-neutral-200 bg-white px-3 py-2"
          value={state.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Use Case, Teamgröße, Ziel…"
          required
        />
      </label>

      <div className="md:col-span-2 flex items-center gap-3">
        <Button type="submit">Absenden</Button>
        {status === "sent" ? <span className="text-sm text-neutral-700">Gesendet (Dummy). Danke! 🙂</span> : null}
      </div>
    </form>
  );
}
