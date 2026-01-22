import type { Metadata } from "next";
import MedialogPage from "@/components/medialog/MedialogPage";

export const metadata: Metadata = {
  title: "Wenn Kommunikation wirkt, wird Medizin menschlicher | Medialog Masterclass",
  description:
    "Achtsames Zuhören für Ärztinnen – für klarere Gespräche, bessere Adhärenz und mehr innere Stabilität im Klinikalltag. Inhouse-Training, 4 Module, max. 8 Teilnehmer:innen.",
  keywords: [
    "achtsames zuhören",
    "kommunikation ärzte",
    "patientenkommunikation",
    "adhärenz",
    "resilienz klinikalltag",
    "inhouse training",
    "zuhörakademie",
  ],
};

export default function Page() {
  // variant="warm" für emotionale Ansprache (Standard)
  // variant="pro" für sachliche Ansprache
  return <MedialogPage variant="warm" />;
}
