import type { MetadataRoute } from "next";
import { content, defaultLocale, siteUrl } from "@/lib/content";
import { visibleCaseStudies } from "@/lib/desktop-content";

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

  const projectRoutes = visibleCaseStudies(
    content[defaultLocale].caseStudies,
  ).map((project) => ({
    url: `${siteUrl}/proyectos/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
