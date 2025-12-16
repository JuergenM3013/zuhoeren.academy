import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://zuhoeren.academy"),
  title: {
    default: "zuhoeren.academy – KI-Training für Leadership, Sales & Dialogführung",
    template: "%s · zuhoeren.academy",
  },
  description:
    "KI-gestützte Weiterbildung für Leadership, Sales und Dialogführung. Analyse, Coaching, Simulationen, messbarer Fortschritt.",
  openGraph: {
    type: "website",
    url: "https://zuhoeren.academy",
    title: "zuhoeren.academy – KI-Training für bessere Gespräche",
    description:
      "Analysieren. Trainieren. Besser führen. Besser verkaufen. Mit KI-Coaches, Metriken & Simulationen.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "zuhoeren.academy" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-50 antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
