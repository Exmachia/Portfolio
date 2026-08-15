"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectImage } from "@/components/ProjectImage";
import { Reveal } from "@/components/Reveal";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
  IconCheckCircle,
  IconLayers,
  IconScale,
  IconSearch,
  IconShield,
} from "@/components/icons";
import { useLocale } from "@/lib/locale-context";

function Field({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
        {label}
      </h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">{value}</p>
    </div>
  );
}

export function CaseStudyView({ slug }: { slug: string }) {
  const { t } = useLocale();
  const { ui, caseStudies } = t;

  const index = caseStudies.findIndex((c) => c.slug === slug);
  const project = caseStudies[index];

  if (!project) return null;

  const prev =
    caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];

  const processSteps: { label: string; value?: string; icon: ReactNode }[] = [
    {
      label: ui.research,
      value: project.proceso.research,
      icon: <IconSearch className="h-4 w-4" />,
    },
    {
      label: ui.constraints,
      value: project.proceso.restricciones,
      icon: <IconShield className="h-4 w-4" />,
    },
    {
      label: ui.iterations,
      value: project.proceso.iteraciones,
      icon: <IconLayers className="h-4 w-4" />,
    },
    {
      label: ui.decisions,
      value: project.proceso.decisiones,
      icon: <IconScale className="h-4 w-4" />,
    },
    {
      label: ui.validation,
      value: project.proceso.validacion,
      icon: <IconCheckCircle className="h-4 w-4" />,
    },
  ].filter((step) => Boolean(step.value));

  return (
    <article>
      <Container className="py-16 sm:py-20">
        <Link
          href="/proyectos"
          className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
        >
          <IconArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
          {ui.backToProjects}
        </Link>

        <Reveal>
          <h1 className="mt-6 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {project.subtitle}
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-accent hover:underline"
            >
              {project.link.replace(/^https?:\/\//, "")}
              <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10">
            <ProjectImage
              src={project.image}
              label={project.title}
              aspect="aspect-[16/9]"
              pendingLabel={ui.mockupPending}
              priority
            />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-14 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <Reveal>
            <aside className="paper flex flex-col gap-8 rounded-2xl p-6 sm:sticky sm:top-28 sm:self-start">
              <Field label={ui.context} value={project.contexto} />
              <Field label={ui.problem} value={project.problema} />
              <Field label={ui.role} value={project.miRol} />
            </aside>
          </Reveal>

          <div className="flex flex-col gap-14">
            <div>
              <Reveal delay={80}>
                <h2 className="font-display text-2xl font-medium sm:text-3xl">
                  {ui.process}
                </h2>
              </Reveal>
              <div className="relative mt-8">
                <div className="absolute top-4 bottom-4 left-4 w-px bg-border" />
                <ol className="flex flex-col gap-8">
                  {processSteps.map((step, i) => (
                    <Reveal key={step.label} delay={120 + i * 90}>
                      <li className="relative flex gap-6">
                        <span className="paper relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-accent">
                          {step.icon}
                        </span>
                        <div className="mt-1">
                          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                            {step.label}
                          </h3>
                          <p className="mt-2 leading-relaxed text-muted-foreground">
                            {step.value}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>

            <Reveal delay={120}>
              <h2 className="font-display text-2xl font-medium sm:text-3xl">
                {ui.finalSolution}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {project.solucionFinal}
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="border-l-2 border-accent py-1 pl-6">
                <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
                  {ui.result}
                </h2>
                <p className="mt-3 font-display text-xl leading-snug sm:text-2xl">
                  {project.resultado}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="font-display text-2xl font-medium sm:text-3xl">
                {ui.takeaway}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {project.aprendizaje}
              </p>
            </Reveal>
          </div>
        </div>

        <nav className="mt-20 flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/proyectos/${prev.slug}`}
            className="group flex flex-col"
          >
            <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <IconArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              {ui.previous}
            </span>
            <span className="font-display text-lg transition-colors group-hover:text-accent">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/proyectos/${next.slug}`}
            className="group flex flex-col sm:items-end sm:text-right"
          >
            <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:justify-end">
              {ui.next}
              <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
            <span className="font-display text-lg transition-colors group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        </nav>
      </Container>
    </article>
  );
}
