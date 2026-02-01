import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zuhoeren.academy";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/salesfitness`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/dialogfitness`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/resilienz`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/metakognitionen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
