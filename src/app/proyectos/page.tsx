import type { Metadata } from "next";
import { ProyectosView } from "@/components/views/ProyectosView";
import { content, defaultLocale } from "@/lib/content";

const { site } = content[defaultLocale];

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
  description: "Product case studies: context, process, and results.",
};

export default function ProyectosPage() {
  return <ProyectosView />;
}
