import type { MetadataRoute } from "next";
import { content, defaultLocale, siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/proyectos",
    "/como-trabajo",
    "/experiencia",
    "/sobre-mi",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = content[defaultLocale].caseStudies.map((project) => ({
    url: `${siteUrl}/proyectos/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
