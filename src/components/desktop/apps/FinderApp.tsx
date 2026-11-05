"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent } from "@/lib/desktop-content";
import { Window } from "@/components/desktop/Window";
import { useWM, type WinState } from "@/components/desktop/wm";
import { IconStar } from "@/components/icons";
import type { Skill } from "@/lib/content";

type Tab = "experience" | "tools" | "skills";

const hueOf = (s: string) =>
  [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 360, 7);

const initials = (s: string) => {
  const words = s.replace(/[^\p{L}\p{N} ]/gu, " ").split(/\s+/).filter(Boolean);
  return words.length > 1
    ? (words[0][0] + words[1][0]).toUpperCase()
    : s.slice(0, 2).replace(/^./, (c) => c.toUpperCase());
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

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <IconStar
          key={i}
          filled={i < rating}
          className={`h-5 w-5 ${i < rating ? "text-accent" : "text-muted/40"}`}
        />
      ))}
    </div>
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
  const [selected, setSelected] = useState<Record<Tab, number | null>>({
    experience: 0,
    tools: null,
    skills: null,
  });

  const select = (i: number) => setSelected((s) => ({ ...s, [tab]: i }));
  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "experience", label: dc.experience, count: t.experience.length },
    { id: "tools", label: dc.tools, count: t.site.skills.length },
    { id: "skills", label: dc.skills, count: t.site.expertise.length },
  ];

  const skills: Skill[] = tab === "tools" ? t.site.skills : t.site.expertise;
  const sel = selected[tab];
  const exp = tab === "experience" && sel !== null ? t.experience[sel] : null;
  const skill = tab !== "experience" && sel !== null ? skills[sel] : null;

  return (
    <Window win={win} title={tabs.find((x) => x.id === tab)!.label} width={960} height={600} glass>
      <div className="flex h-full gap-2 p-2 pt-0 max-md:gap-0 max-md:p-0 max-md:flex-col">
        <nav
          aria-label={dc.favorites}
          className="flex w-[188px] shrink-0 flex-col gap-0.5 p-1.5 max-md:w-full max-md:flex-row max-md:overflow-x-auto"
        >
          <p className="px-2 pt-1 pb-1.5 text-[11px] font-semibold text-muted max-md:hidden">
            {dc.favorites}
          </p>
          {tabs.map((x) => (
            <button
              key={x.id}
              type="button"
              onClick={() => setProps("finder", { tab: x.id })}
              aria-current={tab === x.id}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] whitespace-nowrap ${
                tab === x.id ? "bg-sel font-medium" : "hover:bg-hover"
              }`}
            >
              <span className="text-accent">
                <SidebarIcon tab={x.id} />
              </span>
              {x.label}
              <span className="ml-auto pl-3 text-[11px] text-muted max-md:hidden">
                {x.count}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden rounded-[20px] bg-win shadow-[0_0_0_0.5px_var(--line)] max-md:rounded-none max-md:shadow-none max-lg:flex-col">
          <div className="min-h-0 min-w-0 flex-1 overflow-y-auto">
            {tab === "experience" ? (
              <>
                <div className="sticky top-0 z-10 grid grid-cols-[1.05fr_1fr_1.45fr] border-b border-line bg-win px-4 py-1.5 text-[11px] font-semibold text-muted max-sm:grid-cols-[1.3fr_1fr]">
                  <span>{dc.name}</span>
                  <span>{dc.role}</span>
                  <span className="max-sm:hidden">{dc.dates}</span>
                </div>
                <ul>
                  {t.experience.map((e, i) => (
                    <li key={e.company + e.dates}>
                      <button
                        type="button"
                        onClick={() => select(i)}
                        className={`grid w-full grid-cols-[1.05fr_1fr_1.45fr] items-center gap-2 px-4 py-2 text-left text-[13px] max-sm:grid-cols-[1.3fr_1fr] ${
                          sel === i
                            ? "bg-accent text-accent-fg"
                            : i % 2
                              ? "bg-hover/50 hover:bg-hover"
                              : "hover:bg-hover"
                        }`}
                      >
                        <span className="truncate font-medium">{e.company}</span>
                        <span
                          className={`truncate ${sel === i ? "opacity-90" : "text-muted"}`}
                        >
                          {e.role}
                        </span>
                        <span
                          className={`truncate text-[12px] max-sm:hidden ${sel === i ? "opacity-90" : "text-muted"}`}
                        >
                          {e.dates}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(104px,1fr))] gap-2 p-4">
                {skills.map((s, i) => (
                  <li key={s.name}>
                    <button
                      type="button"
                      onClick={() => select(i)}
                      className={`flex w-full flex-col items-center gap-2 rounded-xl px-2 py-3 text-center ${
                        sel === i ? "bg-sel" : "hover:bg-hover"
                      }`}
                    >
                      <SkillTile name={s.name} size={56} />
                      <span
                        className={`line-clamp-2 text-[12px] leading-tight ${
                          sel === i ? "font-semibold" : ""
                        }`}
                      >
                        {s.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <aside className="w-[300px] shrink-0 overflow-y-auto border-l border-line bg-win2 p-6 max-lg:max-h-[42%] max-lg:w-full max-lg:border-t max-lg:border-l-0">
            {exp ? (
              <div>
                <p className="font-mono text-[11px] tracking-wide text-muted uppercase">
                  {exp.dates}
                </p>
                <h2 className="mt-2 font-display text-[24px] leading-tight font-semibold tracking-tight">
                  {exp.company}
                </h2>
                <p className="mt-1 text-[13px] font-medium text-accent">
                  {exp.role}
                </p>
                <p className="mt-4 text-[13px] leading-relaxed text-muted">
                  {exp.description}
                </p>
              </div>
            ) : skill ? (
              <div className="flex flex-col items-center gap-3 pt-4 text-center">
                <SkillTile name={skill.name} size={88} />
                <h2 className="font-display text-[22px] font-semibold tracking-tight">
                  {skill.name}
                </h2>
                <p className="font-mono text-[11px] tracking-wide text-accent uppercase">
                  {skill.years} {t.ui.yearsOfExperience}
                </p>
                <p className="mt-2 text-[11px] tracking-wide text-muted uppercase">
                  {t.ui.proficiency}
                </p>
                <Stars rating={skill.rating} />
              </div>
            ) : (
              <p className="mt-20 text-center text-[12px] text-muted">
                {dc.pick}
              </p>
            )}
          </aside>
        </div>
      </div>
    </Window>
  );
}
