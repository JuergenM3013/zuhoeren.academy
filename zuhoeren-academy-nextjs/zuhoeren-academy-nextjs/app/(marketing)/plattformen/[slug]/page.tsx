import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { platforms, type PlatformSlug } from "@/content/platforms";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = platforms.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.seo.title,
    description: p.seo.description,
    alternates: { canonical: `https://zuhoeren.academy/plattformen/${p.slug}` },
    openGraph: {
      title: p.seo.title,
      description: p.seo.description,
      url: `https://zuhoeren.academy/plattformen/${p.slug}`,
      type: "website",
    },
  };
}

export default function PlatformDetailPage({ params }: Props) {
  const platform = platforms.find((p) => p.slug === (params.slug as PlatformSlug));
  if (!platform) return notFound();

  return (
    <main className="bg-glow">
      <section className="container py-10 md:py-14">
        <Link href="/plattformen" className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900">
          <ArrowLeft className="h-4 w-4" />
          Zur Übersicht
        </Link>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{platform.name}</h1>
              <Badge>{platform.category}</Badge>
              {platform.status !== "live" ? <Badge variant="soft">{platform.statusLabel}</Badge> : null}
            </div>
            <p className="mt-3 text-lg text-neutral-800">{platform.tagline}</p>
            <p className="mt-3 text-neutral-700">{platform.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/kontakt">Demo anfragen</Link>
              </Button>
              <Button variant="secondary" asChild>
                <a href={platform.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  Zur Plattform <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full md:max-w-sm rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur">
            <div className="text-sm font-medium text-neutral-900">Ideal für</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {platform.audience.map((x) => (
                <Badge key={x} variant="soft">
                  {x}
                </Badge>
              ))}
            </div>

            <div className="mt-5 text-sm font-medium text-neutral-900">Top-Features</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {platform.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-neutral-900/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {platform.sections.map((s) => (
            <div key={s.title} className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h2 className="text-xl font-semibold tracking-tight">{s.title}</h2>
              <p className="mt-2 text-neutral-700">{s.lead}</p>
              {s.items?.length ? (
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
          <h2 className="text-xl font-semibold tracking-tight">Nächster Schritt</h2>
          <p className="mt-2 text-neutral-700">
            Wir empfehlen einen kurzen Pilot (2–4 Wochen) mit klaren Scores & einem Team-Report — danach Rollout.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/kontakt">Pilot / Demo anfragen</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/sicherheit">DSGVO & Sicherheit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
