"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { desktopContent, orderCaseStudies } from "@/lib/desktop-content";
import { PlainShell } from "@/components/plain/PlainShell";
import { contactButton } from "@/components/plain/PlainSite";
import { CaseGallery } from "@/components/case/CaseGallery";
import { IconArrowRight, IconArrowUpRight, IconLock } from "@/components/icons";

const eyebrow = "font-mono text-[11px] font-medium tracking-[0.12em] text-accent uppercase";
const body = "mt-3 max-w-[64ch] text-[16px] leading-[1.75] whitespace-pre-line text-fg/85";

// One case study as a regular article, in the same order as the Figma frames.
export function PlainCase({ slug }: { slug: string }) {
  const { t, locale } = useLocale();
  const dc = desktopContent[locale];
  const { ui, site } = t;
  const all = orderCaseStudies(t.caseStudies);
  const project = all.find((c) => c.slug === slug);
  if (!project) return null;
  const next = all[(all.indexOf(project) + 1) % all.length];
  const img = project.images;

  const steps = [
    { key: "research", label: ui.research, value: project.proceso.research },
    { key: "constraints", label: ui.constraints, value: project.proceso.restricciones },
    { key: "iterations", label: ui.iterations, value: project.proceso.iteraciones },
    { key: "decisions", label: ui.decisions, value: project.proceso.decisiones },
    { key: "validation", label: ui.validation, value: project.proceso.validacion },
  ].filter((s) => Boolean(s.value));

  return (
    <PlainShell>
      <main className="relative mx-auto max-w-[880px] px-6 pb-16 sm:px-8">
        <Link
          href="/pagina#proyectos"
          className="mt-8 inline-flex items-center gap-1.5 text-[14px] text-muted hover:text-fg"
        >
          <IconArrowRight className="h-4 w-4 rotate-180" />
          {dc.plain.back}
        </Link>

        <header className="py-8">
          <h1 className="font-display text-[clamp(2.2rem,6vw,3.6rem)] leading-[1.04] font-semibold tracking-[-0.035em]">
            {project.title}
          </h1>
          <p className="mt-3 text-[19px] text-muted">{project.subtitle}</p>
          <p className="mt-6 max-w-[34ch] font-display text-[22px] leading-snug tracking-tight">
            {project.homeTeaser}
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${contactButton} mt-6 bg-accent text-accent-fg hover:opacity-90`}
            >
              {dc.figma.visit}
              <IconArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.concept && (
            <p className="mt-6 flex items-start gap-2.5 text-[13px] leading-relaxed text-muted">
              <span className="mt-0.5 shrink-0 rounded bg-sel px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-wide whitespace-nowrap text-accent uppercase">
                {ui.conceptLabel}
              </span>
              <span className="italic">{ui.conceptNote}</span>
            </p>
          )}
          {project.confidential && (
            <p className="mt-6 flex items-start gap-2 text-[13px] leading-relaxed text-muted italic">
              <IconLock className="mt-0.5 h-3.5 w-3.5 shrink-0 not-italic" />
              {ui.confidentialNote}
            </p>
          )}
        </header>

        {project.image && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-hover outline outline-1 outline-line">
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.title}
              fill
              sizes="(max-width: 880px) 100vw, 880px"
              quality={85}
              priority
              className="object-cover"
            />
          </div>
        )}

        {project.meta && project.meta.length > 0 && (
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-y border-line py-6 max-sm:grid-cols-1">
            {project.meta.map((m) => (
              <div key={m.label} className="min-w-0">
                <dt className="font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">{m.label}</dt>
                <dd className="mt-1 text-[15px] leading-snug">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <section className="mt-12 border-t border-line pt-8">
          <p className={eyebrow}>{ui.context}</p>
          <p className={body}>{project.contexto}</p>
        </section>
        <section className="mt-10 border-t border-line pt-8">
          <p className={eyebrow}>{ui.problem}</p>
          <p className={body}>{project.problema}</p>
        </section>
        {project.miRol && (
          <section className="mt-10 border-t border-line pt-8">
            <p className={eyebrow}>{ui.role}</p>
            <p className={body}>{project.miRol}</p>
          </section>
        )}
        {img?.overview && img.overview.length > 0 && (
          <div className="mt-8">
            <CaseGallery images={img.overview} />
          </div>
        )}

        <h2 className="mt-16 border-t border-line pt-8 font-display text-[30px] font-semibold tracking-tight">{ui.process}</h2>
        <ol className="mt-4 space-y-10">
          {steps.map((s) => (
            <li key={s.key}>
              <p className={eyebrow}>{s.label}</p>
              <p className={body}>{s.value}</p>
              {s.key === "iterations" && img?.process && img.process.length > 0 && (
                <div className="mt-6">
                  <CaseGallery images={img.process} />
                </div>
              )}
            </li>
          ))}
        </ol>
        {!project.proceso.iteraciones && img?.process && img.process.length > 0 && (
          <div className="mt-8">
            <CaseGallery images={img.process} />
          </div>
        )}

        <h2 className="mt-16 border-t border-line pt-8 font-display text-[30px] font-semibold tracking-tight">{ui.finalSolution}</h2>
        <p className={body}>{project.solucionFinal}</p>
        {img?.solution && img.solution.length > 0 && (
          <div className="mt-8">
            <CaseGallery images={img.solution} />
          </div>
        )}

        <section className="mt-16 border-t border-line pt-8">
          <p className={eyebrow}>{ui.result}</p>
          <p className="mt-3 border-l-2 border-accent pl-5 font-display text-[26px] leading-[1.25] font-medium tracking-tight">
            {project.resultado}
          </p>
          {project.aprendizaje && (
            <div className="mt-8">
              <p className={eyebrow}>{ui.takeaway}</p>
              <p className={body}>{project.aprendizaje}</p>
            </div>
          )}
        </section>

        <div className="mt-14 space-y-3 border-t border-line pt-8">
          <Link
            href={`/pagina/${next.slug}`}
            className="group flex items-center gap-4 rounded-2xl border border-line bg-win p-3 hover:bg-hover"
          >
            <span className="relative block h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-hover">
              {next.image && <Image src={next.image} alt="" fill sizes="96px" className="object-cover" />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">
                {dc.plain.nextProject}
              </span>
              <span className="mt-0.5 block truncate text-[16px] font-semibold">{next.title}</span>
            </span>
            <IconArrowRight className="mr-1 h-4 w-4 shrink-0 text-muted" />
          </Link>
          <div className="rounded-2xl border border-line bg-sel p-6">
            <p className="font-display text-[22px] font-semibold tracking-tight">{dc.figma.cta.title}</p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-fg/80">{dc.figma.cta.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={`mailto:${site.email}`} className={`${contactButton} bg-accent text-accent-fg hover:opacity-90`}>
                {dc.figma.cta.email}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactButton} bg-win outline outline-1 outline-line hover:bg-hover`}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </PlainShell>
  );
}
