"use client";

import { Container } from "@/components/Container";
import { HighlightedName } from "@/components/HighlightedName";
import { Reveal } from "@/components/Reveal";
import {
  IconArrowUpRight,
  IconChef,
  IconDownload,
  IconDumbbell,
  IconFilm,
  IconMail,
  IconMessageCircle,
  IconMusic,
  IconPalette,
} from "@/components/icons";
import type { Interest } from "@/lib/content";
import { useLocale } from "@/lib/locale-context";

const interestIcons: Record<Interest["icon"], React.ComponentType<{ className?: string }>> = {
  film: IconFilm,
  palette: IconPalette,
  music: IconMusic,
  chef: IconChef,
  dumbbell: IconDumbbell,
};

export function SobreMiView() {
  const { t } = useLocale();
  const { sobreMi, site, ui, interests } = t;

  return (
    <Container className="py-16 sm:py-20">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {sobreMi.title}
          </span>
        </div>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
          <HighlightedName name={site.name} highlight="Chacón" />
        </h1>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 flex max-w-2xl flex-col gap-6 border-l-2 border-border pl-8">
          {sobreMi.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={160}>
        <ul className="mt-8 flex flex-wrap gap-3">
          {interests.map((interest, i) => {
            const Icon = interestIcons[interest.icon];
            return (
              <li
                key={interest.icon}
                className="paper flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <Icon className="h-3.5 w-3.5" />
                {interest.label}
              </li>
            );
          })}
        </ul>
      </Reveal>

      <Reveal delay={220}>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={site.cvHref}
            download
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <IconDownload className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            {ui.downloadCV}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex cursor-pointer items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            <IconMail className="h-3.5 w-3.5" />
            {site.email}
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            <IconMessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            <IconArrowUpRight className="h-3.5 w-3.5" />
            LinkedIn
          </a>
        </div>
      </Reveal>
    </Container>
  );
}
