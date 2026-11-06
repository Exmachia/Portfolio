import type { Metadata } from "next";
import { PlainSite } from "@/components/plain/PlainSite";
import { content, defaultLocale } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const { site } = content[defaultLocale];

// The regular-page view of the home: same content, kept out of the index
// with the desktop as the canonical version.
export const metadata: Metadata = {
  ...pageMetadata({
    title: site.role,
    description: site.tagline,
    path: "/",
    noindex: true,
  }),
  title: `${site.name} — ${site.role}`,
};

export default function PaginaPage() {
  return <PlainSite />;
}
