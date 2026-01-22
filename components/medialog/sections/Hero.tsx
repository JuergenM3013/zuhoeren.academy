type CTA = { label: string; href: string };

export function Hero(props: {
  headline: string;
  subline: string;
  chips: string[];
  ctaPrimary: CTA;
  ctaSecondary?: CTA;
  meta?: string[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full bg-[#84a98c]/10 px-3 py-1 text-xs text-[#2f3e46]">
            Medialog · Kommunikation · Resilienz
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-[#1b252a] md:text-5xl">
            {props.headline}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-[#53636b] md:text-lg">{props.subline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {props.chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-[#e6edf0] bg-white/60 px-3 py-1 text-sm text-[#2f3e46]"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={props.ctaPrimary.href}
              className="rounded-2xl bg-[#2f3e46] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(47,62,70,.18)] transition hover:brightness-105"
            >
              {props.ctaPrimary.label}
            </a>
            {props.ctaSecondary && (
              <a
                href={props.ctaSecondary.href}
                className="rounded-2xl border border-[#e6edf0] bg-white px-5 py-3 text-sm font-medium text-[#2f3e46] transition hover:bg-[#f7f9fa]"
              >
                {props.ctaSecondary.label}
              </a>
            )}
          </div>

          {props.meta?.length ? (
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#53636b]">
              {props.meta.map((m) => (
                <span key={m}>• {m}</span>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* Hintergrund-Glow */}
      <div className="pointer-events-none absolute -top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-[#84a98c] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-[-140px] h-[520px] w-[520px] rounded-full bg-[#c9a24d] opacity-15 blur-3xl" />
    </section>
  );
}
