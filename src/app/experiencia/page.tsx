import type { Metadata } from "next";
import { Desktop } from "@/components/desktop/Desktop";
import { content, defaultLocale } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const { site } = content[defaultLocale];

export const metadata: Metadata = pageMetadata({
  title: "Experiencia",
  description: `Trayectoria de ${site.name}: ${content[defaultLocale].experience
    .map((e) => e.company)
    .join(", ")}.`,
  path: "/experiencia",
});

export default function ExperienciaPage() {
  return <Desktop initial={{ app: "finder", props: { tab: "experience" } }} />;
}
