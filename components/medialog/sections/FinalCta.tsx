export function FinalCta(props: {
  headline: string;
  cta: { label: string; href: string };
  disclaimer: string;
}) {
  return (
    <section id="kontakt" className="border-t border-[#e6edf0] bg-[#f7f9fa]/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-[#e6edf0] bg-white/90 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl font-semibold text-[#1b252a] md:text-3xl">{props.headline}</h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`mailto:hallo@zuhoerakademie.at?subject=Anfrage%20Medialog%20Masterclass&body=Guten%20Tag%2C%0A%0Awir%20interessieren%20uns%20für%20die%20Masterclass.%0A%0ABitte%20übermitteln%20Sie%20uns%20ein%20unverbindliches%20Angebot.%0A%0AOrganisation%2FKlinik%3A%20%0AOrt%3A%20%0AGewünschter%20Zeitraum%3A%20%0ATeilnehmer%3Ainnen%3A%20%0A%0AVielen%20Dank`}
              className="inline-flex rounded-2xl bg-[#2f3e46] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(47,62,70,.18)] transition hover:brightness-105"
            >
              {props.cta.label}
            </a>
            <a
              href="tel:+436643978684"
              className="inline-flex rounded-2xl border border-[#e6edf0] bg-white px-6 py-3 text-sm font-medium text-[#2f3e46] transition hover:bg-[#f7f9fa]"
            >
              Anrufen: +43 664 397 8684
            </a>
          </div>

          <p className="mt-6 text-xs text-[#53636b]">{props.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
