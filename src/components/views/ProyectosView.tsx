"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { IconArrowUpRight } from "@/components/icons";
import { useLocale } from "@/lib/locale-context";

export function ProyectosView() {
  const { t } = useLocale();
  const { ui, caseStudies } = t;

  return (
    <Container className="py-16 sm:py-20">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {t.nav.projects}
          </span>
        </div>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
          {ui.caseStudiesTitle}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {ui.caseStudiesSubtitle}
        </p>
      </Reveal>

      <div className="mt-14 flex flex-col">
        {caseStudies.map((project, i) => (
          <Reveal key={project.slug} delay={i * 60}>
            <Link
              href={`/proyectos/${project.slug}`}
              className="group grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-4 border-t border-border py-8 transition-colors first:border-t-0 hover:border-accent/40 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.2fr)] sm:items-center sm:gap-8 sm:py-10"
            >
              <span className="font-mono text-sm text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <PlaceholderImage
                label={project.title}
                seed={i}
                pendingLabel={ui.mockupPending}
                className="col-span-2 sm:col-span-1"
              />
              <div>
                <h2 className="flex items-center gap-1.5 font-display text-2xl font-medium transition-colors group-hover:text-accent sm:text-3xl">
                  {project.title}
                  <IconArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {project.subtitle}
                </p>
                <p className="mt-3 font-mono text-sm uppercase tracking-wide text-accent">
                  {project.homeTeaser}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
