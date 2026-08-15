"use client";

import type { ReactNode } from "react";
import { Fragment } from "react";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import {
  IconCheckCircle,
  IconLayers,
  IconNotebook,
  IconPalette,
  IconPencilLine,
  IconSearch,
  IconTarget,
  IconUsers,
} from "@/components/icons";
import { useLocale } from "@/lib/locale-context";

const STEP_ICONS: ReactNode[] = [
  <IconSearch key="research" className="h-4 w-4" />,
  <IconUsers key="ux-research" className="h-4 w-4" />,
  <IconTarget key="benchmarking" className="h-4 w-4" />,
  <IconNotebook key="notion" className="h-4 w-4" />,
  <IconPencilLine key="lofi" className="h-4 w-4" />,
  <IconLayers key="midfi" className="h-4 w-4" />,
  <IconPalette key="hifi" className="h-4 w-4" />,
  <IconCheckCircle key="testing" className="h-4 w-4" />,
];

// Which step index starts a new phase, mapped to that phase's index in
// comoTrabajo.phases (Discovery / Design / Validation).
const PHASE_STARTS: Record<number, number> = { 0: 0, 3: 1, 7: 2 };

export function ComoTrabajoView() {
  const { t } = useLocale();
  const { comoTrabajo, ui } = t;

  return (
    <Container className="py-16 sm:py-20">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent" />
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          {ui.methodology}
        </span>
      </div>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
        {comoTrabajo.title}
      </h1>
      <p className="mt-6 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">
        {comoTrabajo.kicker}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {comoTrabajo.intro}
      </p>

      <div className="relative mt-16">
        <div className="absolute top-4 bottom-4 left-4 w-px bg-border" />
        <ol className="flex flex-col gap-16">
          {comoTrabajo.steps.map((step, i) => {
            const phaseIndex = PHASE_STARTS[i];
            return (
              <Fragment key={step.title}>
                {phaseIndex !== undefined && (
                  <li className="relative pl-12">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {ui.phase} 0{phaseIndex + 1}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-accent">
                      {comoTrabajo.phases[phaseIndex]}
                    </h3>
                  </li>
                )}
                <Reveal delay={40}>
                  <li className="relative flex flex-col gap-5 pl-12 sm:flex-row sm:gap-8">
                    <span className="paper absolute top-0 left-0 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-accent">
                      {STEP_ICONS[i]}
                    </span>
                    <div className="sm:w-2/5 sm:shrink-0">
                      <p className="font-mono text-xs uppercase tracking-widest text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-1 font-display text-2xl font-medium">
                        {step.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    <div className="sm:flex-1">
                      <PlaceholderImage
                        label={step.imageLabel}
                        seed={i}
                        pendingLabel={ui.mockupPending}
                        aspect="aspect-[16/10]"
                      />
                    </div>
                  </li>
                </Reveal>
              </Fragment>
            );
          })}
        </ol>
      </div>

      <Reveal>
        <div className="mt-16 max-w-2xl border-l-2 border-accent py-1 pl-6">
          <p className="font-display text-xl leading-snug sm:text-2xl">
            {comoTrabajo.closing}
          </p>
        </div>
      </Reveal>
    </Container>
  );
}
