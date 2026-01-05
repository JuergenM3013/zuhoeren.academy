import { ShieldCheck, Server, Gauge, Users } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "DSGVO-freundlich", text: "Datenminimierung, transparente Prozesse, pilotfähig mit AVV." },
  { icon: Server, title: "EU-Fokus", text: "Setup bevorzugt in EU-Regionen — je nach Tooling/Hosting." },
  { icon: Gauge, title: "Messbar", text: "Scores, Mastery-Tracking und Team-Reports statt Bauchgefühl." },
  { icon: Users, title: "Rollout-fähig", text: "Rollen, Teams, Lernpfade — ideal für HR/L&D und Sales Enablement." },
];

export function TrustPanel() {
  return (
    <section className="container py-14 md:py-18">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Vertrauen für Entscheider</h2>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Ein Setup, das zu Unternehmen passt: Sicherheit, Messbarkeit und klare Datenflüsse.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <i.icon className="h-6 w-6" />
            <div className="mt-4 text-lg font-semibold tracking-tight">{i.title}</div>
            <p className="mt-2 text-sm text-neutral-700">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
