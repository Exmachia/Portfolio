"use client";

import Image from "next/image";
import Link from "next/link";
import { SkeletonImage } from "@/components/SkeletonImage";
import { useLocale } from "@/lib/locale-context";
import {
  desktopContent,
  featuredCaseStudies,
  isCaseStudyVisible,
} from "@/lib/desktop-content";
import { Window } from "@/components/desktop/Window";
import { useWM, type WinState } from "@/components/desktop/wm";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconChef,
  IconDumbbell,
  IconFilm,
  IconMail,
  IconMessageCircle,
  IconMusic,
  IconPalette,
} from "@/components/icons";
import type { CaseStudy, Interest } from "@/lib/content";

const interestIcons: Record<
  Interest["icon"],
  React.ComponentType<{ className?: string }>
> = {
  film: IconFilm,
  palette: IconPalette,
  music: IconMusic,
  chef: IconChef,
  dumbbell: IconDumbbell,
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[88px_1fr] gap-3 border-b border-line py-2.5 text-[13px] last:border-0 sm:grid-cols-[110px_1fr]">
      <dt className="text-right text-muted">{label}</dt>
      <dd className="min-w-0 break-words">{children}</dd>
    </div>
  );
}

function SectionTitle({
  children,
  action,
}: {
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-3 flex items-baseline justify-between gap-3">
      <h2 className="font-display text-[17px] font-semibold tracking-tight">
        {children}
      </h2>
      {action}
    </div>
  );
}

// The home window: who I am, featured work (opens Figma), and the contact card.
export function ContactsApp({ win }: { win: WinState }) {
  const { t, locale } = useLocale();
  const dc = desktopContent[locale].contacts;
  const conceptTag = desktopContent[locale].figma.home.conceptTag;
  const { open } = useWM();
  const { site, sobreMi, interests } = t;
  const featured = featuredCaseStudies
    .map((slug) => t.caseStudies.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c && isCaseStudyVisible(c.slug)));

  const action =
    "flex min-w-[72px] flex-col items-center gap-1 rounded-2xl bg-hover px-3 py-2 text-[11px] font-medium text-accent transition-colors hover:bg-sel";

  return (
    <Window
      win={win}
      title={site.name}
      mobile={{ title: desktopContent[locale].apps.contacts }}
      width={1240}
      // leaves the desktop files on the right in view
      gutter={360}
      height={940}
      glass
    >
      <div className="flex h-full gap-2 p-2 pt-0 max-md:p-0">
        <aside className="flex w-[216px] shrink-0 flex-col max-md:hidden">
          <p className="px-3 pt-1 pb-2 text-[11px] font-semibold text-muted">
            {dc.allContacts}
          </p>
          <div className="mx-1 flex items-center gap-2.5 rounded-xl bg-accent px-2.5 py-2 text-accent-fg shadow-sm">
            <span className="relative block h-8 w-8 shrink-0 overflow-hidden rounded-full">
              <Image src="/eduardo.jpg" alt="" fill sizes="32px" className="object-cover" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[13px] font-semibold">
                {site.name}
              </span>
              <span className="block truncate text-[11px] opacity-80">
                {site.role}
              </span>
            </span>
          </div>
        </aside>

        <div className="@container min-w-0 flex-1 overflow-x-hidden overflow-y-auto rounded-[20px] bg-win px-6 py-7 shadow-[0_0_0_0.5px_var(--line)] max-md:rounded-none max-md:shadow-none sm:px-10 sm:py-9">
          <div className="mx-auto max-w-[960px]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4">
                <span className="relative block h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full shadow-md">
                  <Image
                    src="/eduardo.jpg"
                    alt={site.name}
                    fill
                    sizes="76px"
                    className="object-cover"
                    priority
                  />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[21px] leading-tight font-semibold tracking-tight">
                    {site.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    {site.role}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className={action}>
                  <IconMessageCircle className="h-[18px] w-[18px]" />
                  {dc.message}
                </a>
                <a href={`mailto:${site.email}`} className={action}>
                  <IconMail className="h-[18px] w-[18px]" />
                  {dc.mail}
                </a>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={action}>
                  <IconArrowUpRight className="h-[18px] w-[18px]" />
                  {dc.linkedin}
                </a>
              </div>
            </div>

            <h1 className="mt-8 max-w-[44rem] font-display text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.04] font-semibold tracking-[-0.035em]">
              {site.heroStatement}
            </h1>
            <p className="mt-4 max-w-[38rem] text-[15.5px] leading-relaxed text-muted">
              {site.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => open("figma")}
                className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[14px] font-semibold whitespace-nowrap text-accent-fg transition-opacity hover:opacity-90 max-sm:px-4"
              >
                {dc.viewProjects}
                <IconArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => open("claude", { chat: "process" })}
                className="rounded-full bg-hover px-5 py-2.5 text-[14px] font-semibold whitespace-nowrap transition-colors hover:bg-sel max-sm:px-4"
              >
                {desktopContent[locale].plain.process}
              </button>
            </div>
            <Link
              href="/pagina"
              className="mt-4 inline-block text-[13px] text-muted underline-offset-4 hover:text-fg hover:underline"
            >
              {desktopContent[locale].plain.viewPlain}
            </Link>

            {featured.length > 0 && (
              <section className="mt-10">
                <SectionTitle
                  action={
                    <button
                      type="button"
                      onClick={() => open("figma")}
                      className="flex shrink-0 items-center gap-1 text-[13px] font-medium text-accent hover:underline"
                    >
                      {dc.seeAll}
                      <IconArrowRight className="h-3.5 w-3.5" />
                    </button>
                  }
                >
                  {dc.featured}
                </SectionTitle>
                <ul className="grid gap-4 @xl:grid-cols-2">
                  {featured.map((c) => (
                    <li key={c.slug}>
                      <button
                        type="button"
                        onClick={() => open("figma", { project: c.slug })}
                        className="group block w-full overflow-hidden rounded-2xl border border-line bg-win2 text-left transition hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        <span className="relative block aspect-[16/10] overflow-hidden bg-hover">
                          {c.image && (
                            <SkeletonImage
                              src={c.image}
                              alt={c.imageAlt ?? c.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 480px"
                              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          )}
                        </span>
                        <span className="block px-4 py-3.5">
                          <span className="flex items-center justify-between gap-2">
                            <span className="truncate text-[15px] font-semibold">
                              {c.title}
                            </span>
                            <span className="shrink-0 rounded-full bg-hover px-2 py-0.5 text-[11px] text-muted">
                              {c.concept ? conceptTag : dc.realTag}
                            </span>
                          </span>
                          <span className="mt-1 block text-[13px] leading-snug text-muted">
                            {c.subtitle}
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="mt-10 grid gap-8 @3xl:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
              <section>
                <SectionTitle>{dc.contact}</SectionTitle>
                <dl className="rounded-2xl border border-line bg-win2/60 px-4">
                  <Field label={dc.email}>
                    <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                      {site.email}
                    </a>
                  </Field>
                  <Field label={dc.whatsapp}>
                    <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      {site.whatsapp}
                    </a>
                  </Field>
                  <Field label={dc.linkedin}>
                    <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      {decodeURI(site.linkedin.replace(/^https?:\/\/(www\.)?/, ""))}
                    </a>
                  </Field>
                  <Field label={dc.interests}>
                    <ul className="flex flex-wrap gap-1.5">
                      {interests.map((it) => {
                        const Icon = interestIcons[it.icon];
                        return (
                          <li
                            key={it.icon}
                            className="flex items-center gap-1.5 rounded-full bg-hover px-2.5 py-1 text-[12px]"
                          >
                            <Icon className="h-3.5 w-3.5 text-muted" />
                            {it.label}
                          </li>
                        );
                      })}
                    </ul>
                  </Field>
                </dl>
              </section>
              <section>
                <SectionTitle>{dc.notes}</SectionTitle>
                <div className="space-y-3 text-[14px] leading-relaxed text-muted">
                  {sobreMi.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
