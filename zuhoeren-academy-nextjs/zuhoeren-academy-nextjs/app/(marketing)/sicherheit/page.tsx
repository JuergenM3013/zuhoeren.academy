import type { Metadata } from "next";
import { ShieldCheck, Lock, Server, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Sicherheit & DSGVO",
  description: "Datenschutz, EU-Fokus und sichere Verarbeitung: Überblick über DSGVO, Datenflüsse und Best Practices.",
};

const items = [
  {
    icon: ShieldCheck,
    title: "DSGVO-freundliches Setup",
    text: "Klare Datenminimierung, Zweckbindung und transparente Prozesse für B2B-Rollouts.",
  },
  {
    icon: Server,
    title: "EU-Fokus",
    text: "Bevorzugt EU-Hosting / EU-Regionen (je nach Setup). AVV/DPAs sind pilotfähig.",
  },
  {
    icon: Lock,
    title: "Zugriff & Rollen",
    text: "Rollenbasierte Rechte (Admin/Coach/Learner), Audit-Logs optional, SSO möglich.",
  },
  {
    icon: FileText,
    title: "Datenflüsse",
    text: "Wir dokumentieren: welche Daten wo liegen, wie lange, zu welchem Zweck — und wie sie gelöscht werden.",
  },
];

export default function SecurityPage() {
  return (
    <main className="bg-glow">
      <section className="container py-14 md:py-18">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Sicherheit & DSGVO</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Diese Seite ist als Vorlage gedacht. Passe sie an dein tatsächliches Setup (Hosting, Tools, Subprozessoren) an.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <div className="flex items-start gap-3">
                <it.icon className="mt-1 h-5 w-5" />
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{it.title}</h2>
                  <p className="mt-2 text-neutral-700">{it.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
          <h2 className="text-xl font-semibold tracking-tight">Was du als Nächstes einfügst</h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>• Liste der Subprozessoren / Tools (falls relevant)</li>
            <li>• Speicherfristen & Löschkonzept</li>
            <li>• Kontakt für Datenschutzanfragen</li>
            <li>• Technische Maßnahmen (Verschlüsselung, Backup, Logging)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
