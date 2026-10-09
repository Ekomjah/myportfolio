import type { MetadataRoute } from "next";

const baseUrl = "https://ekomjahdenis.vercel.app";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified?: string;
};

const entries: Entry[] = [
  {
    path: "",
    changeFrequency: "weekly",
    priority: 1,
    lastModified: "2026-10-01",
  },
  {
    path: "/blog",
    changeFrequency: "daily",
    priority: 0.9,
    lastModified: "2026-10-09",
  },
  {
    path: "/projects",
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: "2026-10-01",
  },
  {
    path: "/stack",
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: "2026-10-01",
  },
  {
    path: "/projects/captura",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-01",
  },
  {
    path: "/projects/huntmart",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-01",
  },
  {
    path: "/projects/penny-wise",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-01",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastModified ?? new Date(),
    changeFrequency,
    priority,
  }));
}
