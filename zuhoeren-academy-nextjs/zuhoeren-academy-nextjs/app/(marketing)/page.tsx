import { Hero } from "@/components/marketing/hero";
import { PlatformGrid } from "@/components/marketing/platform-grid";
import { Steps } from "@/components/marketing/steps";
import { UseCases } from "@/components/marketing/use-cases";
import { TrustPanel } from "@/components/marketing/trust-panel";
import { FAQ } from "@/components/marketing/faq";
import { ContactCTA } from "@/components/marketing/contact-cta";

export default function HomePage() {
  return (
    <main className="bg-glow">
      <Hero />
      <section className="container py-14 md:py-18">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          5 Plattformen. Eine Suite für bessere Gespräche & stärkere Führung.
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Trainingsstationen, interaktive KI-Simulationen, Assessments und messbarer Fortschritt — für Sales,
          Leadership und Teamkommunikation.
        </p>
        <div className="mt-8">
          <PlatformGrid />
        </div>
      </section>

      <Steps />
      <UseCases />
      <TrustPanel />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
