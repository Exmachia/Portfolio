import type { Metadata } from "next";
import { Desktop } from "@/components/desktop/Desktop";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Proyectos",
  description:
    "Casos de estudio de producto con contexto, proceso, decisiones y resultados: proyectos reales y conceptos en fintech, viajes, SaaS y real estate.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return <Desktop initial={{ app: "figma" }} />;
}
