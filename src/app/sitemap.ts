import type { MetadataRoute } from "next";
import { company, services } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/sobre/",
    "/solucoes/",
    ...services.map((s) => `/solucoes/${s.slug}/`),
    "/contato/",
    "/politicas/",
    "/politicas/privacidade/",
    "/politicas/seguranca/",
    "/politicas/termos/",
    "/politicas/cookies/",
  ];
  return routes.map((path) => ({
    url: new URL(path, company.url).toString(),
    priority: path === "/" ? 1 : path.startsWith("/politicas") ? 0.3 : 0.8,
  }));
}
