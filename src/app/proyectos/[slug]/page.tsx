import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/views/CaseStudyView";
import { content, defaultLocale } from "@/lib/content";

export function generateStaticParams() {
  return content[defaultLocale].caseStudies.map((project) => ({
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
  return {
    title: `${project.title} — ${content[defaultLocale].site.name}`,
    description: project.subtitle,
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

  return <CaseStudyView slug={slug} />;
}
