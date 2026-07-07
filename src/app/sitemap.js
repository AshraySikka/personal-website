import { projects } from "./data/projects";

export default function sitemap() {
  const base = "https://ashraysikka.com";

  const projectUrls = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: base, lastModified: new Date() },
    ...projectUrls,
  ];
}