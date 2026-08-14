import type { Metadata } from "next";
import { ExperienciaView } from "@/components/views/ExperienciaView";
import { content, defaultLocale } from "@/lib/content";

const { site } = content[defaultLocale];

export const metadata: Metadata = {
  title: `Experience — ${site.name}`,
  description: "Professional timeline.",
};

export default function ExperienciaPage() {
  return <ExperienciaView />;
}
