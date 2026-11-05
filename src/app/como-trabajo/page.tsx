import type { Metadata } from "next";
import { Desktop } from "@/components/desktop/Desktop";
import { content, defaultLocale } from "@/lib/content";

const { site, comoTrabajo } = content[defaultLocale];

export const metadata: Metadata = {
  title: `${comoTrabajo.title} — ${site.name}`,
  description: comoTrabajo.kicker,
};

export default function ComoTrabajoPage() {
  return <Desktop initial={{ app: "claude", props: { chat: "process" } }} />;
}
