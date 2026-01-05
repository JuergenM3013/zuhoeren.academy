"use client";

import { useMemo, useState } from "react";
import { platforms, type PlatformCategory } from "@/content/platforms";
import { PlatformCard } from "@/components/marketing/platform-card";
import { Badge } from "@/components/ui/badge";

const categories: (PlatformCategory | "Alle")[] = ["Alle", "Sales", "Dialog", "Leadership", "Resilienz", "Metakognition"];

export function PlatformGrid({ showFilter }: { showFilter?: boolean }) {
  const [cat, setCat] = useState<(typeof categories)[number]>("Alle");

  const list = useMemo(() => {
    if (cat === "Alle") return platforms;
    return platforms.filter((p) => p.category === cat);
  }, [cat]);

  return (
    <div>
      {showFilter ? (
        <div className="mb-5 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className="rounded-full"
              aria-pressed={cat === c}
            >
              <Badge variant={cat === c ? "default" : "soft"}>{c}</Badge>
            </button>
          ))}
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <PlatformCard key={p.slug} platform={p} />
        ))}
      </div>
    </div>
  );
}
