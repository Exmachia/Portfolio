import type { Metadata } from "next";
import { content, defaultLocale } from "@/lib/content";

const { site } = content[defaultLocale];

const DEFAULT_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630 };

// Per-page metadata. Each page needs its own canonical URL (the layout's "/"
// would otherwise be inherited by every route) and its own Open Graph block,
// since a page that defines `openGraph` replaces the layout's entirely.
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  // Alternate views of a page (e.g. the regular-page version) stay out of the index.
  noindex?: boolean;
}): Metadata {
  const fullTitle = `${title} — ${site.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "es_MX",
      type,
      images: [image ? { url: image, width: 1200, height: 630 } : DEFAULT_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image ?? DEFAULT_IMAGE.url],
    },
  };
}
