import type { Metadata } from "next";
import { content, defaultLocale } from "@/lib/content";

const { site } = content[defaultLocale];

const DEFAULT_IMAGE = { url: "/og-image.png", width: 1200, height: 630 };

// Per-page metadata. Each page needs its own canonical URL (the layout's "/"
// would otherwise be inherited by every route) and its own Open Graph block,
// since a page that defines `openGraph` replaces the layout's entirely.
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = `${title} — ${site.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "es_MX",
      type,
      images: [image ? { url: image } : DEFAULT_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image ?? DEFAULT_IMAGE.url],
    },
  };
}
