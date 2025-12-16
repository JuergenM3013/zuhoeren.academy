export default function ProductCard(props: {
  name: string;
  tag: string;
  tagline: string;
  bullets: string[];
  ctaLabel: string;
  href?: string;
}) {
  return (
    <article className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-extrabold tracking-tight">{props.name}</h3>
          <p className="mt-2 text-white/70">{props.tagline}</p>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
          {props.tag}
        </span>
      </div>

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/75">
        {props.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {props.href && (
          <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold transition hover:bg-white/10"
          >
            Zur Seite
          </a>
        )}
        <a
          href="#kontakt"
          className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-4 py-3 font-semibold transition hover:bg-violet-500"
        >
          {props.ctaLabel}
        </a>
      </div>
    </article>
  );
}
