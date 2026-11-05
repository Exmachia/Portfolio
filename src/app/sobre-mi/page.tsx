import type { Metadata } from "next";
import { Desktop } from "@/components/desktop/Desktop";
import { content, defaultLocale } from "@/lib/content";

const { site, sobreMi } = content[defaultLocale];

export const metadata: Metadata = {
  title: `${sobreMi.title} — ${site.name}`,
  description: sobreMi.paragraphs[0],
};

export default function SobreMiPage() {
  return <Desktop initial={{ app: "contacts" }} />;
}
