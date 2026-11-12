"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { desktopContent, orderCaseStudies } from "@/lib/desktop-content";
import { processPhaseStarts } from "@/lib/content";
import type { CaseStudy } from "@/lib/content";
import { SkeletonImage } from "@/components/SkeletonImage";
import { Cross, Eyebrow, Section } from "@/components/plain/PlainParts";
import { PlainShell } from "@/components/plain/PlainShell";
import { IconArrowRight, IconLock } from "@/components/icons";

export const contactButton =
  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold";

function ProjectCard({ c, tag }: { c: CaseStudy; tag: string }) {
  return (
    <li>
      <Link
        href={`/pagina/${c.slug}`}
        className="group block overflow-hidden rounded-2xl border border-line bg-win transition hover:-translate-y-0.5 hover:border-muted/50 hover:shadow-lg"
      >
        <span className="relative block aspect-[16/10] overflow-hidden border-b border-line bg-hover">
          {c.image && (
            <SkeletonImage
              src={c.image}
              alt={c.imageAlt ?? c.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1040px) 50vw, 340px"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          )}
        </span>
        <span className="block px-4 py-3.5">
          <span className="flex items-center justify-between gap-2">
            <span className="truncate text-[15px] font-semibold">{c.title}</span>
            <span className="shrink-0 rounded-full bg-hover px-2 py-0.5 text-[11px] text-muted">
              {tag}
            </span>
          </span>
          <span className="mt-1 block text-[13px] leading-snug text-muted">{c.subtitle}</span>
        </span>
      </Link>
    </li>
  );
}

export function PlainSite() {
  const { t, locale } = useLocale();
  const dc = desktopContent[locale];
  const p = dc.plain;
  const { site } = t;
  const cases = orderCaseStudies(t.caseStudies);
  const real = cases.filter((c) => !c.concept);
  const concepts = cases.filter((c) => c.concept);

  return (
    <PlainShell>
      <main>
        <section className="relative overflow-hidden px-6 pt-10 pb-16 sm:px-10 sm:pt-14 sm:pb-20">
          {/* Faint grid that fades out from the top-left corner. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 80% 90% at 0% 0%, black, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 90% at 0% 0%, black, transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="relative block h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full shadow-md ring-1 ring-line ring-offset-4 ring-offset-win">
                <Image src="/eduardo.jpg" alt={site.name} fill sizes="68px" priority className="object-cover" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-[19px] font-semibold tracking-tight">{site.name}</p>
                <p className="mt-0.5 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  {site.role}
                </p>
              </div>
            </div>
            <h1 className="mt-9 max-w-[17ch] font-display text-[clamp(2.4rem,6.4vw,4.4rem)] leading-[1.02] font-semibold tracking-[-0.04em]">
              {site.heroStatement}
            </h1>
            <p className="mt-6 max-w-[40rem] text-[17px] leading-relaxed text-muted">{site.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <a href="#proyectos" className={`${contactButton} bg-accent text-accent-fg hover:opacity-90`}>
                {p.seeProjects}
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a href="#proceso" className={`${contactButton} border border-line hover:bg-hover`}>
                {p.process}
              </a>
              <a
                href={site.cvHref}
                download
                className="inline-flex items-center px-3 py-2.5 text-[14px] font-medium text-muted underline-offset-4 hover:text-fg hover:underline"
              >
                {p.downloadCV}
              </a>
            </div>
          </div>
        </section>

        <Section id="proyectos" index="01" title={p.projects}>
          <div className="mt-10">
            <Eyebrow>{p.real}</Eyebrow>
            <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {real.map((c) => (
                <ProjectCard key={c.slug} c={c} tag={dc.contacts.realTag} />
              ))}
            </ul>
          </div>
          <div className="mt-12">
            <Eyebrow>{p.concepts}</Eyebrow>
            <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {concepts.map((c) => (
                <ProjectCard key={c.slug} c={c} tag={dc.figma.home.conceptTag} />
              ))}
            </ul>
          </div>
        </Section>

        <Section id="experiencia" index="02" title={p.experience}>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {t.experience.map((e) => (
              <li key={e.company + e.dates} className="grid gap-2 py-7 md:grid-cols-[210px_1fr] md:gap-10">
                <p className="font-mono text-[11px] tracking-wide text-muted uppercase">{e.dates}</p>
                <div>
                  <p className="text-[18px] font-semibold tracking-tight">{e.company}</p>
                  <p className="mt-0.5 text-[14px] font-medium text-accent">{e.role}</p>
                  <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-fg/80">{e.description}</p>
                  {e.confidential && (
                    <p className="mt-3 flex items-start gap-2 text-[13px] leading-relaxed text-muted italic">
                      <IconLock className="mt-0.5 h-3.5 w-3.5 shrink-0 not-italic" />
                      {t.ui.confidentialNote}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="proceso" index="03" title={p.process}>
          <p className="mt-8 max-w-[24ch] font-display text-[clamp(1.5rem,3.6vw,2.3rem)] leading-[1.1] font-semibold tracking-[-0.03em]">
            {t.comoTrabajo.kicker}
          </p>
          <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-fg/80">
            {t.comoTrabajo.intro}
          </p>
          <div className="mt-10 space-y-10">
            {t.comoTrabajo.phases.map((phase, pi) => {
              const from = processPhaseStarts[pi];
              const to = processPhaseStarts[pi + 1] ?? t.comoTrabajo.steps.length;
              return (
                <div key={phase}>
                  <Eyebrow>{phase}</Eyebrow>
                  <ol className="mt-2 divide-y divide-line">
                    {t.comoTrabajo.steps.slice(from, to).map((st, i) => (
                      <li key={st.title} className="grid gap-1.5 py-5 md:grid-cols-[210px_1fr] md:gap-10">
                        <p className="flex items-baseline gap-3 text-[15px] font-semibold tracking-tight">
                          <span className="font-mono text-[11px] font-normal text-muted">
                            {String(from + i + 1).padStart(2, "0")}
                          </span>
                          {st.title}
                        </p>
                        <p className="max-w-[60ch] text-[15px] leading-relaxed text-fg/80">
                          {st.description}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
          <p className="mt-10 max-w-[60ch] text-[15px] leading-relaxed text-muted italic">
            {t.comoTrabajo.closing}
          </p>
        </Section>

        <Section id="ia" index="04" title={p.ai}>
          <div className="mt-8 space-y-12">
            {dc.claude.chats
              .filter((c) => c.answer.every((b) => b.type !== "process"))
              .map((chat) => (
                <div key={chat.id}>
                  <Eyebrow>{chat.title}</Eyebrow>
                  <div className="mt-4 space-y-4">
                    {chat.answer.map((b, i) =>
                      b.type === "p" ? (
                        <p key={i} className="max-w-[62ch] text-[16px] leading-relaxed text-fg/85">
                          {b.text}
                        </p>
                      ) : b.type === "list" ? (
                        <ul key={i} className="grid gap-x-10 divide-y divide-line border-y border-line md:grid-cols-2 md:divide-y-0 md:[&>li]:border-b md:[&>li]:border-line md:[&>li:nth-last-child(-n+2)]:border-b-0">
                          {b.items.map((it) => (
                            <li key={it.title} className="py-4">
                              <p className="text-[15px] font-semibold tracking-tight">{it.title}</p>
                              <p className="mt-1 text-[14.5px] leading-relaxed text-fg/80">{it.text}</p>
                            </li>
                          ))}
                        </ul>
                      ) : null,
                    )}
                  </div>
                </div>
              ))}
          </div>
        </Section>

        <Section id="sobre-mi" index="05" title={p.about}>
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
            <div className="max-w-[62ch] space-y-4 text-[16px] leading-relaxed text-fg/85">
              {t.sobreMi.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="space-y-8">
              <div>
                <Eyebrow>{p.skills}</Eyebrow>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {site.expertise.map((s) => (
                    <li key={s.name} className="rounded-full border border-line px-3.5 py-1.5 text-[13px]">
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Eyebrow>{p.tools}</Eyebrow>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {site.skills.map((s) => (
                    <li key={s.name} className="rounded-full bg-hover px-3.5 py-1.5 text-[13px]">
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contacto" index="06" title={p.contact}>
          <p className="mt-8 max-w-[22ch] font-display text-[clamp(1.8rem,4.4vw,3rem)] leading-[1.08] font-semibold tracking-[-0.03em]">
            {p.contactBody}
          </p>
          <div className="relative mt-9 border border-line">
            <Cross className="-top-2 -left-2" />
            <Cross className="-top-2 -right-2" />
            <Cross className="-bottom-2 -left-2" />
            <Cross className="-right-2 -bottom-2" />
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center justify-between gap-4 px-5 py-5 text-[clamp(1rem,2.6vw,1.4rem)] font-semibold tracking-tight hover:bg-hover sm:px-7"
            >
              <span className="min-w-0 break-all">{site.email}</span>
              <IconArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="grid divide-y divide-line border-t border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 px-5 py-4 text-[14px] font-medium hover:bg-hover sm:px-7"
              >
                WhatsApp
                <IconArrowRight className="h-4 w-4 -rotate-45 text-muted" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 px-5 py-4 text-[14px] font-medium hover:bg-hover sm:px-7"
              >
                LinkedIn
                <IconArrowRight className="h-4 w-4 -rotate-45 text-muted" />
              </a>
            </div>
          </div>
        </Section>
      </main>
    </PlainShell>
  );
}
