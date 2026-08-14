import type { Metadata } from "next";
import { ComoTrabajoView } from "@/components/views/ComoTrabajoView";
import { content, defaultLocale } from "@/lib/content";

const { site, comoTrabajo } = content[defaultLocale];

export const metadata: Metadata = {
  title: `${comoTrabajo.title} — ${site.name}`,
  description: comoTrabajo.kicker,
};

export default function ComoTrabajoPage() {
  return <ComoTrabajoView />;
}
