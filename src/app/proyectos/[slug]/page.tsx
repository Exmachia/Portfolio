import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Desktop } from "@/components/desktop/Desktop";
import { content, defaultLocale, siteUrl } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { isCaseStudyVisible, visibleCaseStudies } from "@/lib/desktop-content";

export function generateStaticParams() {
  return visibleCaseStudies(content[defaultLocale].caseStudies).map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = content[defaultLocale].caseStudies.find(
    (c) => c.slug === slug,
  );
  if (!project) return {};

  return pageMetadata({
    title: project.title,
    description: project.homeTeaser,
    path: `/proyectos/${project.slug}`,
    // Case studies without a real cover (Geest, Muvi) use the site's image.
    image: project.image,
    type: "article",
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = content[defaultLocale].caseStudies.some(
    (c) => c.slug === slug,
  );

  if (!exists) notFound();
  if (!isCaseStudyVisible(slug)) redirect("/proyectos");

  const project = content[defaultLocale].caseStudies.find(
    (c) => c.slug === slug,
  )!;
  const url = `${siteUrl}/proyectos/${slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWork",
              "@id": `${url}#work`,
              name: project.title,
              headline: project.subtitle,
              description: project.homeTeaser,
              url,
              image: project.image ? `${siteUrl}${project.image}` : undefined,
              inLanguage: defaultLocale,
              author: { "@id": `${siteUrl}/#person` },
              isPartOf: { "@id": `${siteUrl}/#website` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Proyectos", item: `${siteUrl}/proyectos` },
                { "@type": "ListItem", position: 3, name: project.title, item: url },
              ],
            },
          ],
        }}
      />
      <Desktop initial={{ app: "figma", props: { project: slug } }} />
    </>
  );
}
