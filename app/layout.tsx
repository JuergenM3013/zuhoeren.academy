import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://zuhoeren.academy"),
  title: {
    default: "zuhoeren.academy – KI-gestützte Weiterbildung für Leadership, Sales & Gesprächsführung",
    template: "%s · zuhoeren.academy",
  },
  description:
    "KI-gestützte Weiterbildung für Leadership, Sales und Gesprächsführung. Lernen durch KI Feedback: Analyse, Coaching, Simulationen, messbarer Fortschritt. DSGVO-konform aus Österreich.",
  keywords: [
    "KI Coaching",
    "Sales Training",
    "Leadership Training",
    "Gesprächsanalyse",
    "KI Feedback",
    "Verkaufstraining",
    "Führungskräfte Training",
    "Dialogtraining",
    "Kommunikationstraining",
  ],
  authors: [{ name: "Jürgen Melmuka" }],
  creator: "zuhoeren.academy",
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://zuhoeren.academy",
    siteName: "zuhoeren.academy",
    title: "zuhoeren.academy – KI-Training für bessere Gespräche",
    description:
      "Lernen durch KI Feedback. Besser führen. Besser verkaufen. Mit KI-Coaches, Metriken & Simulationen.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "zuhoeren.academy – KI-gestützte Weiterbildung" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "zuhoeren.academy – KI-Training für bessere Gespräche",
    description: "Lernen durch KI Feedback. Besser führen. Besser verkaufen.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://zuhoeren.academy",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "zuhoeren.academy",
  url: "https://zuhoeren.academy",
  logo: "https://zuhoeren.academy/og.jpg",
  description: "KI-gestützte Weiterbildung für Leadership, Sales und Gesprächsführung.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Blindengasse 46/5",
    addressLocality: "Wien",
    postalCode: "1080",
    addressCountry: "AT",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+43-664-397-8684",
    email: "hallo@zuhoeren.academy",
    contactType: "sales",
    availableLanguage: ["German", "English"],
  },
  sameAs: [
    "https://zuhoerakademie.at/",
    "https://www.linkedin.com/in/juergenmelmuka/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-50 antialiased`}>
        <Header />
        {children}
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
