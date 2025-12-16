"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("ok");
      setMsg("Danke! Wir melden uns zeitnah bei dir.");
      (e.target as HTMLFormElement).reset();
      return;
    }

    const data = await res.json().catch(() => ({}));
    setStatus("err");
    setMsg(data?.error ?? "Ups – das hat nicht geklappt. Bitte versuche es erneut.");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="E-Mail" name="email" type="email" required />
      </div>

      <Field label="Unternehmen (optional)" name="company" />
      <Field label="Interesse an" name="topic" placeholder="z. B. Salesfitness.studio, Dialogfitness.studio, Pilot" />
      <Field label="Nachricht" name="message" textarea required placeholder="Ziel, Teamgröße, Use Case, gewünschter Startzeitpunkt…" />

      {/* Honeypot (Bots) */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 w-full rounded-xl bg-violet-600 px-4 py-3 font-semibold transition hover:bg-violet-500 disabled:opacity-60"
      >
        {status === "sending" ? "Senden…" : "Anfrage senden"}
      </button>

      {msg && (
        <p className={`mt-3 text-sm ${status === "ok" ? "text-emerald-300" : "text-rose-300"}`}>
          {msg}
        </p>
      )}

      <p className="mt-3 text-xs leading-relaxed text-white/55">
        Mit dem Absenden stimmst du zu, dass wir deine Angaben zur Bearbeitung der Anfrage verwenden.
      </p>
    </form>
  );
}

function Field(props: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const common =
    "mt-1 w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-3 text-white outline-none focus:border-white/25";

  return (
    <label className="block mt-4 first:mt-0">
      <span className="text-sm font-semibold text-white/80">{props.label}</span>
      {props.textarea ? (
        <textarea
          name={props.name}
          required={props.required}
          placeholder={props.placeholder}
          className={`${common} min-h-[120px]`}
        />
      ) : (
        <input
          name={props.name}
          type={props.type ?? "text"}
          required={props.required}
          placeholder={props.placeholder}
          className={common}
        />
      )}
    </label>
  );
}
