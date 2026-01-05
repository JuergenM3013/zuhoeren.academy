import type { Metadata } from "next";
import "../globals.css";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zuhoeren.academy"),
  title: {
    default: "zuhoeren.academy — KI-Lernplattformen für Leadership, Sales & Dialog",
    template: "%s — zuhoeren.academy",
  },
  description:
    "Die IT-Sparte der Zuhörakademie: 5 KI-Lernplattformen für bessere Gesprächsführung, Sales-Performance, Leadership, Resilienz und Metakognition — DSGVO-konform & EU-fokussiert.",
  openGraph: {
    title: "zuhoeren.academy — KI-Lernplattformen",
    description:
      "5 KI-Lernplattformen für Leadership, Sales & Dialog — mit Trainingsstationen, Simulationen, Feedback und Analytics.",
    url: "https://zuhoeren.academy",
    siteName: "zuhoeren.academy",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
