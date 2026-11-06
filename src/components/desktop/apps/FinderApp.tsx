"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent } from "@/lib/desktop-content";
import { Window } from "@/components/desktop/Window";
import { useWM, type WinState } from "@/components/desktop/wm";
import { IconLock } from "@/components/icons";
import type { ExperienceEntry, Skill } from "@/lib/content";

type Tab = "experience" | "tools" | "skills";

const hueOf = (s: string) =>
  [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 360, 7);

const initials = (s: string) => {
  const words = s.replace(/[^\p{L}\p{N} ]/gu, " ").split(/\s+/).filter(Boolean);
  return words.length > 1
    ? (words[0][0] + words[1][0]).toUpperCase()
    : s.slice(0, 2).toUpperCase();
};

function SkillTile({ name, size }: { name: string; size: number }) {
  const h = hueOf(name);
  return (
    <span
      className="grid shrink-0 place-items-center rounded-[22%] font-semibold text-white shadow-sm"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.34,
        background: `linear-gradient(160deg, hsl(${h} 68% 60%), hsl(${(h + 35) % 360} 68% 40%))`,
      }}
    >
      {initials(name)}
    </span>
  );
}

// Five segments, as many filled as the rating.
function Rating({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${label}: ${rating} / 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`h-1.5 flex-1 rounded-full ${i < rating ? "bg-accent" : "bg-line"}`}
        />
      ))}
    </div>
  );
}

// "1 año", not "1 años".
const yearsLabel = (years: number, text: string) =>
  years === 1 ? text.replace(/^años\b/, "año").replace(/^years\b/, "year") : text;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function SidebarIcon({ tab }: { tab: Tab }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 16,
    height: 16,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (tab === "experience")
    return (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
      </svg>
    );
  if (tab === "tools")
    return (
      <svg {...common}>
        <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-2.6-.6-.6-2.6z" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
    </svg>
  );
}

export function FinderApp({ win }: { win: WinState }) {
  const { t, locale } = useLocale();
  const dc = desktopContent[locale].finder;
  const { setProps } = useWM();
  const tab: Tab = win.props.tab ?? "experience";
  // Desktop always has one job open on the right; on phones a tap toggles it.
  const [openJob, setOpenJob] = useState<number | null>(0);

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "experience", label: dc.experience, count: t.experience.length },
    { id: "tools", label: dc.tools, count: t.site.skills.length },
    { id: "skills", label: dc.skills, count: t.site.expertise.length },
  ];
  const skills: Skill[] = tab === "tools" ? t.site.skills : t.site.expertise;
  const jobs = t.experience;
  const job = openJob !== null ? jobs[openJob] : null;

  const jobMeta = (e: ExperienceEntry, open?: boolean) => (
    <span className="min-w-0 flex-1">
      <span className="block text-[14px] leading-snug font-semibold">{e.company}</span>
      <span className="mt-0.5 block text-[12.5px] leading-snug text-muted">{e.role}</span>
      <span
        className={`mt-1 block font-mono text-[10.5px] tracking-wide uppercase ${
          open ? "text-accent" : "text-muted"
        }`}
      >
        {e.dates}
      </span>
    </span>
  );

  return (
    <Window win={win} title={tabs.find((x) => x.id === tab)!.label} width={960} height={600} glass>
      <div className="flex h-full gap-2 p-2 pt-0 max-md:flex-col max-md:gap-0 max-md:p-0">
        {/* Desktop: sidebar, like the file list in Figma */}
        <nav
          aria-label={dc.favorites}
          className="flex w-[200px] shrink-0 flex-col gap-1 p-2 max-md:hidden"
        >
          <p className="px-3 pt-1 pb-2 text-[11px] font-semibold text-muted">
            {dc.favorites}
          </p>
          {tabs.map((x) => (
            <button
              key={x.id}
              type="button"
              onClick={() => setProps("finder", { tab: x.id })}
              aria-current={tab === x.id}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[13px] whitespace-nowrap ${
                tab === x.id ? "bg-sel font-medium" : "hover:bg-hover"
              }`}
            >
              <span className="text-accent">
                <SidebarIcon tab={x.id} />
              </span>
              {x.label}
              <span className="ml-auto text-[11px] text-muted">{x.count}</span>
            </button>
          ))}
        </nav>

        {/* Phones: pills, like Figma's filters */}
        <div className="flex shrink-0 gap-2 overflow-x-auto px-4 pb-3 md:hidden">
          {tabs.map((x) => (
            <button
              key={x.id}
              type="button"
              onClick={() => setProps("finder", { tab: x.id })}
              aria-pressed={tab === x.id}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-[13px] whitespace-nowrap ${
                tab === x.id ? "bg-sel font-medium" : "bg-hover"
              }`}
            >
              {x.label}
            </button>
          ))}
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden rounded-[20px] bg-win shadow-[0_0_0_0.5px_var(--line)] max-md:rounded-none max-md:shadow-none">
          {tab === "experience" ? (
            <>
              {/* Desktop: list + detail */}
              <ul className="min-h-0 w-[40%] max-w-[330px] shrink-0 space-y-1 overflow-y-auto border-r border-line p-3 max-md:hidden">
                {jobs.map((e, i) => (
                  <li key={e.company + e.dates}>
                    <button
                      type="button"
                      onClick={() => setOpenJob(i)}
                      aria-current={openJob === i}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left ${
                        openJob === i ? "bg-sel" : "hover:bg-hover"
                      }`}
                    >
                      <SkillTile name={e.company} size={40} />
                      {jobMeta(e, openJob === i)}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="min-h-0 min-w-0 flex-1 overflow-y-auto p-8 max-md:hidden">
                {job ? (
                  <div className="max-w-[520px]">
                    <div className="flex items-center gap-4">
                      <SkillTile name={job.company} size={56} />
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] tracking-wide text-muted uppercase">
                          {job.dates}
                        </p>
                        <h2 className="mt-1 font-display text-[26px] leading-tight font-semibold tracking-tight">
                          {job.company}
                        </h2>
                        <p className="mt-0.5 text-[14px] font-medium text-accent">{job.role}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-[15px] leading-[1.7] text-fg/85">{job.description}</p>
                    {job.confidential && (
                      <p className="mt-6 flex items-start gap-2 text-[13px] leading-relaxed text-muted italic">
                        <IconLock className="mt-0.5 h-3.5 w-3.5 shrink-0 not-italic" />
                        {t.ui.confidentialNote}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="mt-24 text-center text-[13px] text-muted">{dc.pick}</p>
                )}
              </div>

              {/* Phones: each job opens in place */}
              <ul className="min-h-0 flex-1 space-y-2 overflow-y-auto px-4 pb-24 md:hidden">
                {jobs.map((e, i) => {
                  const open = openJob === i;
                  return (
                    <li
                      key={e.company + e.dates}
                      className="overflow-hidden rounded-2xl border border-line bg-win2/60"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenJob(open ? null : i)}
                        aria-expanded={open}
                        className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
                      >
                        <SkillTile name={e.company} size={44} />
                        {jobMeta(e, open)}
                        <Chevron open={open} />
                      </button>
                      {open && (
                        <div className="px-4 pb-4">
                          <p className="text-[14px] leading-relaxed text-fg/85">{e.description}</p>
                          {e.confidential && (
                            <p className="mt-3 flex items-start gap-2 text-[12.5px] leading-relaxed text-muted italic">
                              <IconLock className="mt-0.5 h-3.5 w-3.5 shrink-0 not-italic" />
                              {t.ui.confidentialNote}
                            </p>
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <ul className="grid min-h-0 flex-1 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] content-start gap-3 overflow-y-auto p-5 pb-24 max-md:grid-cols-2 max-md:p-4 max-md:pb-24">
              {skills.map((s) => (
                <li
                  key={s.name}
                  className="rounded-2xl border border-line bg-win2/60 p-4"
                >
                  <SkillTile name={s.name} size={48} />
                  <p className="mt-3 text-[14px] leading-snug font-semibold">{s.name}</p>
                  <p className="mt-0.5 text-[12px] text-muted">
                    {s.years} {yearsLabel(s.years, t.ui.yearsOfExperience)}
                  </p>
                  <div className="mt-3">
                    <Rating rating={s.rating} label={t.ui.proficiency} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Window>
  );
}
