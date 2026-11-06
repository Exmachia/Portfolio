"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { desktopContent, orderCaseStudies } from "@/lib/desktop-content";
import type { CaseStudy } from "@/lib/content";
import { PlainShell } from "@/components/plain/PlainShell";
import { IconArrowRight, IconLock } from "@/components/icons";

export const contactButton =
  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold";

function ProjectCard({ c, tag }: { c: CaseStudy; tag: string }) {
  return (
    <li>
      <Link
        href={`/pagina/${c.slug}`}
        className="group block overflow-hidden rounded-2xl border border-line bg-win2/60 transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        <span className="relative block aspect-[16/10] overflow-hidden bg-hover">
          {c.image && (
            <Image
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

const h2 = "font-display text-[28px] leading-tight font-semibold tracking-tight";

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
      <main className="mx-auto max-w-[1040px] px-5">
        <section className="py-14 max-sm:py-10">
          <div className="flex items-center gap-4">
            <span className="relative block h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full shadow-md">
              <Image src="/eduardo.jpg" alt={site.name} fill sizes="72px" priority className="object-cover" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-[20px] font-semibold tracking-tight">{site.name}</p>
              <p className="mt-0.5 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                {site.role}
              </p>
            </div>
          </div>
          <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(2.2rem,6vw,3.8rem)] leading-[1.04] font-semibold tracking-[-0.035em]">
            {site.heroStatement}
          </h1>
          <p className="mt-5 max-w-[40rem] text-[17px] leading-relaxed text-muted">{site.tagline}</p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <a href="#proyectos" className={`${contactButton} bg-accent text-accent-fg hover:opacity-90`}>
              {p.seeProjects}
              <IconArrowRight className="h-4 w-4" />
            </a>
            <a href={site.cvHref} download className={`${contactButton} bg-hover hover:bg-sel`}>
              {p.downloadCV}
            </a>
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-24 py-10">
          <h2 className={h2}>{p.projects}</h2>
          <h3 className="mt-8 mb-4 text-[13px] font-semibold tracking-wide text-muted uppercase">
            {p.real}
          </h3>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {real.map((c) => (
              <ProjectCard key={c.slug} c={c} tag={dc.contacts.realTag} />
            ))}
          </ul>
          <h3 className="mt-10 mb-4 text-[13px] font-semibold tracking-wide text-muted uppercase">
            {p.concepts}
          </h3>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((c) => (
              <ProjectCard key={c.slug} c={c} tag={dc.figma.home.conceptTag} />
            ))}
          </ul>
        </section>

        <section id="experiencia" className="scroll-mt-24 py-10">
          <h2 className={h2}>{p.experience}</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {t.experience.map((e) => (
              <li key={e.company + e.dates} className="grid gap-2 py-6 md:grid-cols-[220px_1fr] md:gap-8">
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
        </section>

        <section id="sobre-mi" className="scroll-mt-24 py-10">
          <h2 className={h2}>{p.about}</h2>
          <div className="mt-6 max-w-[62ch] space-y-4 text-[16px] leading-relaxed text-fg/85">
            {t.sobreMi.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <h3 className="mt-10 mb-3 text-[13px] font-semibold tracking-wide text-muted uppercase">
            {p.skills}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {site.expertise.map((s) => (
              <li key={s.name} className="rounded-full bg-hover px-3.5 py-1.5 text-[13px]">
                {s.name}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 mb-3 text-[13px] font-semibold tracking-wide text-muted uppercase">
            {p.tools}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {site.skills.map((s) => (
              <li key={s.name} className="rounded-full bg-hover px-3.5 py-1.5 text-[13px]">
                {s.name}
              </li>
            ))}
          </ul>
        </section>

        <section id="contacto" className="scroll-mt-24 py-12">
          <div className="rounded-3xl bg-sel p-8 max-sm:p-6">
            <h2 className={h2}>{p.contact}</h2>
            <p className="mt-3 max-w-[48ch] text-[16px] leading-relaxed text-fg/80">{p.contactBody}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a href={`mailto:${site.email}`} className={`${contactButton} bg-accent text-accent-fg hover:opacity-90`}>
                {site.email}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactButton} bg-win outline outline-1 outline-line hover:bg-hover`}
              >
                WhatsApp
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactButton} bg-win outline outline-1 outline-line hover:bg-hover`}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </PlainShell>
  );
}
