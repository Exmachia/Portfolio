"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { CountUp } from "@/components/CountUp";
import { HighlightedName } from "@/components/HighlightedName";
import { LinkedText } from "@/components/LinkedText";
import { ProjectImage } from "@/components/ProjectImage";
import { Reveal } from "@/components/Reveal";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconDownload,
  IconMail,
  IconMessageCircle,
} from "@/components/icons";
import { featuredSlugs } from "@/lib/content";
import { useLocale } from "@/lib/locale-context";

// Bento layout for the 4 featured projects: one large tile, one wide tile,
// two small tiles — instead of a uniform grid.
const BENTO_SPANS = [
  "col-span-2 sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-3",
  "col-span-2 sm:col-start-3 sm:col-end-5 sm:row-start-1 sm:row-end-2",
  "col-span-1 sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3",
  "col-span-1 sm:col-start-4 sm:col-end-5 sm:row-start-2 sm:row-end-3",
];

// Fixed heights below `sm` so the two small tiles align even when their
// captions wrap to a different number of lines.
const MOBILE_HEIGHTS = ["h-64", "h-48", "h-40", "h-40"];

// Matches BENTO_SPANS: the big and wide tiles render noticeably larger than
// the two small ones, so request correspondingly sized images.
const BENTO_IMAGE_SIZES = [
  "(min-width: 640px) 500px, 100vw",
  "(min-width: 640px) 500px, 100vw",
  "(min-width: 640px) 240px, 50vw",
  "(min-width: 640px) 240px, 50vw",
];

export default function Home() {
  const { t } = useLocale();
  const { site, ui, caseStudies, stats } = t;

  const featured = featuredSlugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));

  return (
    <>
      <section>
        <Container className="flex flex-col gap-8 py-16 sm:py-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              {site.role}
            </span>
          </div>
          <h1 className="font-display font-semibold tracking-tight text-[clamp(2.75rem,9vw,8rem)] leading-[0.95] -ml-0.5">
            <HighlightedName name={site.name} highlight="Chacón" />
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {site.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
            <Link
              href="/proyectos"
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {ui.viewProjects}
              <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={site.cvHref}
              download
              className="group flex cursor-pointer items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:text-accent"
            >
              <IconDownload className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span className="underline decoration-border underline-offset-4 group-hover:decoration-accent">
                {ui.downloadCV}
              </span>
            </a>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {ui.contact}
            </a>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-4 sm:py-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-b border-border py-10 sm:grid-cols-4 sm:gap-x-10">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="border-l border-border pl-4 sm:pl-6">
                  <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                    <CountUp
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">
                    <LinkedText
                      text={stat.label}
                      linkText={stat.linkText}
                      href={stat.linkSlug ? `/proyectos/${stat.linkSlug}` : undefined}
                    />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <Reveal>
            <h2 className="mb-10 font-display text-2xl font-medium sm:text-3xl">
              {ui.featuredProjects}
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-[13rem_13rem] sm:gap-5">
            {featured.map((project, i) => (
              <Reveal
                key={project.slug}
                delay={i * 90}
                className={`${MOBILE_HEIGHTS[i]} sm:h-full ${BENTO_SPANS[i]}`}
              >
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl"
                >
                  <ProjectImage
                    src={project.image}
                    label={project.title}
                    seed={i}
                    pendingLabel={ui.mockupPending}
                    fill
                    priority={i === 0}
                    showLabel={false}
                    sizes={BENTO_IMAGE_SIZES[i]}
                    className="absolute inset-0"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/10" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-[linear-gradient(to_top,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.65)_25%,rgba(0,0,0,0.2)_50%,transparent_75%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3
                      className="flex items-center gap-1.5 font-display text-lg font-medium text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] sm:text-xl"
                    >
                      {project.title}
                      <IconArrowUpRight className="h-4 w-4 -translate-x-1 text-white opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-white/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)] sm:text-base">
                      {project.homeTeaser}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="paper grid gap-10 rounded-2xl px-6 py-10 sm:grid-cols-2 sm:px-10">
              <div>
                <h2 className="mb-4 font-display text-2xl font-medium sm:text-3xl">
                  {t.nav.experience}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {site.experienceSummary}
                </p>
                <Link
                  href="/experiencia"
                  className="group mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-accent hover:underline"
                >
                  {ui.viewFullTimeline}
                  <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div>
                <h2 className="mb-4 font-display text-2xl font-medium sm:text-3xl">
                  {ui.tools}
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {site.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-28">
        <Container className="flex flex-col items-start gap-6 py-16 sm:py-24">
          <Reveal>
            <h2 className="font-display text-2xl font-medium sm:text-3xl">
              {ui.letsTalk}
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {ui.letsTalkBlurb}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={`mailto:${site.email}`}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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
      </section>
    </>
  );
}
