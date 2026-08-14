import type { Metadata } from "next";
import { SobreMiView } from "@/components/views/SobreMiView";
import { content, defaultLocale } from "@/lib/content";

const { site, sobreMi } = content[defaultLocale];

export const metadata: Metadata = {
  title: `${sobreMi.title} — ${site.name}`,
  description: sobreMi.paragraphs[0],
};

export default function SobreMiPage() {
  return <SobreMiView />;
}
