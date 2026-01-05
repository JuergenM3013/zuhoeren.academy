import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Platform } from "@/content/platforms";

export function PlatformCard({ platform }: { platform: Platform }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-lg font-semibold tracking-tight">{platform.name}</div>
            <Badge variant="soft">{platform.category}</Badge>
            {platform.status !== "live" ? <Badge variant="soft">{platform.statusLabel}</Badge> : null}
          </div>
          <p className="mt-2 text-sm text-neutral-700">{platform.tagline}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
        {platform.bullets.slice(0, 3).map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Link
          href={`/plattformen/${platform.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline"
        >
          Details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>

        <a
          href={platform.website}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900"
        >
          Website <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
