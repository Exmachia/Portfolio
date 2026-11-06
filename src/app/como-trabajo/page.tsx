import type { Metadata } from "next";
import { Desktop } from "@/components/desktop/Desktop";
import { content, defaultLocale } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const { comoTrabajo } = content[defaultLocale];

export const metadata: Metadata = pageMetadata({
  title: comoTrabajo.title,
  description: comoTrabajo.kicker,
  path: "/como-trabajo",
});

export default function ComoTrabajoPage() {
  return <Desktop initial={{ app: "claude", props: { chat: "process" } }} />;
}
