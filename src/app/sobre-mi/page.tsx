import type { Metadata } from "next";
import { Desktop } from "@/components/desktop/Desktop";
import { content, defaultLocale } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const { sobreMi } = content[defaultLocale];

export const metadata: Metadata = pageMetadata({
  title: sobreMi.title,
  description: sobreMi.paragraphs[0],
  path: "/sobre-mi",
});

export default function SobreMiPage() {
  return <Desktop initial={{ app: "contacts" }} />;
}
