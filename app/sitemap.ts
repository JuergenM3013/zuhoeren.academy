import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zuhoeren.academy";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/impressum`, lastModified: new Date() },
    { url: `${base}/datenschutz`, lastModified: new Date() },
  ];
}
