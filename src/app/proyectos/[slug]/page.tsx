import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Desktop } from "@/components/desktop/Desktop";
import { content, defaultLocale } from "@/lib/content";
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

  const title = `${project.title} — ${content[defaultLocale].site.name}`;
  const description = project.subtitle;
  // Case studies without a real screenshot yet (Geest, Muvi) fall back to the
  // site's default OG image instead of shipping a broken/generic preview.
  const image = project.image ?? "/og-image.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
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

  return <Desktop initial={{ app: "figma", props: { project: slug } }} />;
}
