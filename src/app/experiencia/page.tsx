import type { Metadata } from "next";
import { Desktop } from "@/components/desktop/Desktop";
import { content, defaultLocale } from "@/lib/content";

const { site } = content[defaultLocale];

export const metadata: Metadata = {
  title: `Experience — ${site.name}`,
  description: "Professional timeline.",
};

export default function ExperienciaPage() {
  return <Desktop initial={{ app: "finder", props: { tab: "experience" } }} />;
}
