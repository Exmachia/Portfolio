"use client";

import Image from "next/image";
import { CountUp } from "@/components/CountUp";
import { useLocale } from "@/lib/locale-context";
import { desktopContent, isCaseStudyVisible } from "@/lib/desktop-content";
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
import type { Interest } from "@/lib/content";

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

// The home window: who I am, where to go next (Figma), and the contact card.
export function ContactsApp({ win }: { win: WinState }) {
  const { t, locale } = useLocale();
  const dc = desktopContent[locale].contacts;
  const { open } = useWM();
  const { site, sobreMi, interests, stats } = t;

  const action =
    "flex min-w-[72px] flex-col items-center gap-1 rounded-2xl bg-hover px-3 py-2 text-[11px] font-medium text-accent transition-colors hover:bg-sel";

  return (
    <Window win={win} title={site.name} width={940} height={700} glass>
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

        <div className="min-w-0 flex-1 overflow-y-auto rounded-[20px] bg-win px-6 py-7 shadow-[0_0_0_0.5px_var(--line)] max-md:rounded-none max-md:shadow-none sm:px-9">
          <div className="mx-auto max-w-[600px]">
            <div className="flex items-center gap-4">
              <span className="relative block h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full shadow-md">
                <Image
                  src="/eduardo.jpg"
                  alt={site.name}
                  fill
                  sizes="72px"
                  className="object-cover"
                  priority
                />
              </span>
              <div className="min-w-0">
                <p className="font-display text-[20px] leading-tight font-semibold tracking-tight">
                  {site.name}
                </p>
                <p className="mt-0.5 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  {site.role}
                </p>
              </div>
            </div>

            <h1 className="mt-7 font-display text-[clamp(1.9rem,4.4vw,2.7rem)] leading-[1.05] font-semibold tracking-[-0.035em]">
              {site.heroStatement}
            </h1>
            <p className="mt-4 max-w-[34rem] text-[15px] leading-relaxed text-muted">
              {site.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => open("figma")}
                className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[14px] font-semibold text-accent-fg shadow-[0_6px_18px_-4px_var(--accent)] transition-transform hover:-translate-y-0.5"
              >
                {dc.viewProjects}
                <IconArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => open("preview")}
                className="rounded-full bg-hover px-5 py-2.5 text-[14px] font-semibold transition-colors hover:bg-sel"
              >
                {dc.openCV}
              </button>
            </div>

            <ul className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {stats.map((s) => (
                <li key={s.label}>
                  <button
                    type="button"
                    disabled={!s.linkSlug || !isCaseStudyVisible(s.linkSlug)}
                    onClick={() => s.linkSlug && open("figma", { project: s.linkSlug })}
                    className="h-full w-full rounded-2xl border border-line bg-win2 p-3.5 text-left transition-colors enabled:hover:bg-sel"
                  >
                    <p className="font-display text-[28px] leading-none font-semibold tracking-tight">
                      <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </p>
                    <p className="mt-2 text-[11.5px] leading-snug text-muted">
                      {s.label}
                    </p>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
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

            <dl className="mt-5 rounded-2xl border border-line bg-win2/60 px-4">
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
                  {site.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
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
              <Field label={dc.notes}>
                <div className="space-y-3 leading-relaxed text-muted">
                  {sobreMi.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Field>
            </dl>
          </div>
        </div>
      </div>
    </Window>
  );
}
