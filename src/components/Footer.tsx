"use client";

import { useLocale } from "@/lib/locale-context";
import {
  IconDownload,
  IconMail,
  IconMessageCircle,
  IconArrowUpRight,
} from "@/components/icons";

export function Footer() {
  const { t } = useLocale();
  const { site, ui } = t;

  return (
    <footer className="px-4 pb-6">
      <div className="paper mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} — {site.role}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            className="group flex items-center gap-1.5 transition-colors hover:text-accent"
            href={site.cvHref}
            download
          >
            <IconDownload className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            {ui.downloadCV}
          </a>
          <a
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
            href={`mailto:${site.email}`}
          >
            <IconMail className="h-3.5 w-3.5" />
            {site.email}
          </a>
          <a
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconMessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <a
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconArrowUpRight className="h-3.5 w-3.5" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
