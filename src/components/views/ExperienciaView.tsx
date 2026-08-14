"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { IconDownload } from "@/components/icons";
import { useLocale } from "@/lib/locale-context";

export function ExperienciaView() {
  const { t } = useLocale();

  return (
    <Container className="py-16 sm:py-20">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {t.nav.experience}
          </span>
        </div>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
          {t.ui.timelineTitle}
        </h1>
        <a
          href={t.site.cvHref}
          download
          className="group mt-6 inline-flex cursor-pointer items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:text-accent"
        >
          <IconDownload className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          <span className="underline decoration-border underline-offset-4 group-hover:decoration-accent">
            {t.ui.downloadCV}
          </span>
        </a>
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute top-2 bottom-2 left-[5px] w-px bg-border sm:left-[7px]" />
        <ol className="flex flex-col gap-14">
          {t.experience.map((entry, i) => (
            <Reveal key={entry.company + entry.dates} delay={i * 90}>
              <li className="relative grid gap-2 pl-8 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-10 sm:pl-10">
                <span className="absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background sm:h-3.5 sm:w-3.5" />
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {entry.dates}
                </p>
                <div>
                  <h2 className="font-display text-2xl font-medium">
                    {entry.company}
                  </h2>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">
                    {entry.role}
                  </p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Container>
  );
}
