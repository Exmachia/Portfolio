import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { PlainCase } from "@/components/plain/PlainCase";
import { content, defaultLocale } from "@/lib/content";
import { isCaseStudyVisible, visibleCaseStudies } from "@/lib/desktop-content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return visibleCaseStudies(content[defaultLocale].caseStudies).map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = content[defaultLocale].caseStudies.find((c) => c.slug === slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.homeTeaser,
    path: `/proyectos/${project.slug}`,
    type: "article",
    noindex: true,
  });
}

export default async function PaginaCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!content[defaultLocale].caseStudies.some((c) => c.slug === slug)) notFound();
  if (!isCaseStudyVisible(slug)) redirect("/pagina");
  return <PlainCase slug={slug} />;
}
