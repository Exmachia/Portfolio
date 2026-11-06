"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import {
  desktopContent,
  figmaPublicUrl,
  visibleCaseStudies,
  featuredCaseStudies,
} from "@/lib/desktop-content";
import { siteUrl, type CaseImage, type CaseStudy } from "@/lib/content";
import { Window } from "@/components/desktop/Window";
import { useWM, type WinState } from "@/components/desktop/wm";
import {
  IconArrowLeft,
  IconArrowUpRight,
  IconCheckCircle,
  IconLink,
  IconLock,
  IconStar,
  IconShare,
} from "@/components/icons";

const FRAMES = ["cover", "overview", "process", "solution", "result"] as const;
type FrameId = (typeof FRAMES)[number];

// Frames stack vertically at one width. Cases with pictures (CaseStudy.images)
// use the wider one so the screens stay legible.
const FRAME_WIDTH = 760;
const FRAME_WIDTH_WIDE = 960;

type FilterId = "all" | "projects" | "concepts";

const isFeatured = (slug: string) => featuredCaseStudies.includes(slug);

// Canvas zoom: buttons walk these steps, ctrl/cmd + wheel (and trackpad pinch)
// zoom continuously between the limits.
const ZOOM_STEPS = [0.5, 0.67, 0.8, 1, 1.25, 1.5, 2, 3];
const ZOOM_MIN = 0.4;
const ZOOM_MAX = 3;
const clampZoom = (z: number) => Math.min(Math.max(z, ZOOM_MIN), ZOOM_MAX);

function FrameIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden>
      <path d="M4.5 1.5v13M11.5 1.5v13M1.5 4.5h13M1.5 11.5h13" />
    </svg>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium tracking-[0.12em] text-accent uppercase">
      {children}
    </p>
  );
}

function Cover({ project, pending }: { project: CaseStudy; pending: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-win2 ${
        // Covers exported from Figma (cases with images) are 16:10; show them
        // whole instead of cropping.
        project.images ? "aspect-[16/10]" : "aspect-[16/9]"
      }`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt ?? project.title}
          fill
          sizes="960px"
          quality={85}
          className="object-cover"
          priority
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, var(--line) 0 1px, transparent 1px 14px)",
          }}
        >
          <span className="absolute bottom-3 left-3 rounded bg-win px-2 py-1 font-mono text-[11px] tracking-wide text-muted uppercase">
            {project.title} · {pending}
          </span>
        </div>
      )}
    </div>
  );
}

// Screens of a case, in reading order. Click opens the full-size file, since
// the wide ones (states, design system) can't be read at frame width.
function Gallery({ images }: { images: CaseImage[] }) {
  return (
    <div className="space-y-6">
      {images.map((img) => (
        <figure key={img.src}>
          <a
            href={img.src}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-md outline outline-1 outline-line"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              // Frames are at most 960px wide; phones get the viewport width.
              sizes="(max-width: 1000px) 100vw, 960px"
              quality={85}
              className="h-auto w-full"
            />
          </a>
          {img.caption && (
            <figcaption className="mt-2 text-[12px] leading-snug text-muted italic">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function Frame({
  id,
  label,
  width,
  active,
  onJump,
  onActivate,
  children,
}: {
  id: FrameId;
  label: string;
  width: number;
  active: boolean;
  onJump: (id: FrameId) => void;
  onActivate: () => void;
  children: React.ReactNode;
}) {
  return (
    <section id={`figma-frame-${id}`} className="mx-auto w-full" style={{ maxWidth: width }}>
      <button
        type="button"
        onClick={() => onJump(id)}
        className={`mb-2 flex items-center gap-1.5 text-[12px] ${
          active ? "text-accent" : "text-muted hover:text-fg"
        }`}
      >
        <FrameIcon />
        {label}
      </button>
      <div
        className={`overflow-hidden rounded-[3px] bg-win shadow-[0_1px_3px_rgba(0,0,0,0.12),0_8px_30px_rgba(0,0,0,0.08)] ${
          active ? "outline outline-2 outline-accent" : "outline outline-1 outline-line"
        }`}
        onPointerDown={onActivate}
      >
        {children}
      </div>
    </section>
  );
}

function FigmaGlyph() {
  return (
    <span className="grid h-5 w-5 shrink-0 place-items-center rounded bg-[#1e1e1e]">
      <svg viewBox="0 0 24 36" className="h-3.5" aria-hidden>
        <path d="M12 0H6a6 6 0 0 0 0 12h6z" fill="#f24e1e" />
        <path d="M12 0h6a6 6 0 0 1 0 12h-6z" fill="#ff7262" />
        <path d="M12 12H6a6 6 0 0 0 0 12h6z" fill="#a259ff" />
        <circle cx="18" cy="18" r="6" fill="#1abcfe" />
        <path d="M6 24h6v6a6 6 0 1 1-6-6z" fill="#0acf83" />
      </svg>
    </span>
  );
}

// Figma's file browser: a grid of files with a thumbnail, a title and a meta
// line. Opening one shows its pages.
function FigmaHome({
  caseStudies,
  onOpen,
}: {
  caseStudies: CaseStudy[];
  onOpen: (slug: string) => void;
}) {
  const { t, locale } = useLocale();
  const dc = desktopContent[locale].figma;
  const [filter, setFilter] = useState<FilterId>("all");

  const shown = caseStudies.filter(
    (c) =>
      filter === "all" || (filter === "concepts" ? Boolean(c.concept) : !c.concept),
  );
  const filters: { id: FilterId; label: string }[] = [
    { id: "all", label: dc.home.all },
    { id: "projects", label: dc.home.projects },
    { id: "concepts", label: dc.home.concepts },
  ];

  return (
    <div className="flex h-full">
      <aside className="flex w-[216px] shrink-0 flex-col gap-1 overflow-y-auto border-r border-line bg-win p-3 max-md:hidden">
        <div className="mb-2 flex items-center gap-2.5 px-2 py-1.5">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-fg">
            LC
          </span>
          <span className="truncate text-[13px] font-medium">{t.site.name}</span>
        </div>
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={`flex items-center gap-2 rounded px-2 py-1.5 text-left text-[13px] ${
              filter === f.id ? "bg-sel font-medium" : "hover:bg-hover"
            }`}
          >
            <FrameIcon className="h-3.5 w-3.5 text-muted" />
            {f.label}
          </button>
        ))}
      </aside>

      <div className="min-w-0 flex-1 overflow-y-auto bg-win2">
        <div className="p-6 max-sm:p-4">
          <h1 className="font-display text-[22px] font-semibold tracking-tight max-md:hidden">
            {dc.home.title}
          </h1>
          <div className="mt-3 flex gap-1.5 md:hidden">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`rounded-full px-3 py-1 text-[12px] ${
                  filter === f.id ? "bg-sel font-medium" : "bg-hover"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <ul className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-x-4 gap-y-6 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:gap-x-6 sm:gap-y-8 xl:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] xl:gap-x-8 xl:gap-y-10">
            {shown.map((c) => (
              <li key={c.slug}>
                <button
                  type="button"
                  onClick={() => onOpen(c.slug)}
                  className="group block w-full text-left"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-win outline outline-1 outline-line transition group-hover:outline-2 group-hover:outline-accent">
                    {isFeatured(c.slug) && (
                      <span
                        title={dc.home.featured}
                        className="absolute top-2 left-2 z-10 grid h-7 w-7 place-items-center rounded-full bg-black/55 text-[#ffd23f] shadow-md backdrop-blur-sm"
                      >
                        <IconStar filled className="h-4 w-4" />
                        <span className="sr-only">{dc.home.featured}</span>
                      </span>
                    )}
                    {c.image ? (
                      <Image
                        src={c.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 50vw, 440px"
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(135deg, var(--line) 0 1px, transparent 1px 14px)",
                        }}
                      >
                        <span className="absolute bottom-2 left-2 rounded bg-win px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-muted uppercase">
                          {t.ui.mockupPending}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-2.5 flex items-start gap-2">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded bg-hover text-muted">
                      <FrameIcon className="h-3 w-3" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[13px] font-medium">
                        {c.title}
                      </span>
                      <span className="block truncate text-[12px] text-muted">
                        {FRAMES.length} {dc.home.pagesUnit}
                        {c.concept && ` · ${dc.home.conceptTag}`}
                      </span>
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Page picker for phones: a big custom dropdown instead of the native select.
function PageMenu({
  label,
  pages,
  active,
  onPick,
}: {
  label: string;
  pages: { id: FrameId; label: string }[];
  active: FrameId;
  onPick: (id: FrameId) => void;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const index = pages.findIndex((p) => p.id === active);

  return (
    <div ref={root} className="relative z-20 w-full">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-3 rounded-xl bg-hover px-3.5 py-3 text-left text-[15px] font-medium"
      >
        <span className="sr-only">{label}: </span>
        <span className="font-mono text-[12px] text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>{" "}
        <span className="flex-1 truncate">{pages[index]?.label}</span>
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
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute top-full right-0 left-0 mt-1.5 overflow-hidden rounded-xl bg-win p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.28)] outline outline-1 outline-line"
        >
          {pages.map((p, i) => (
            <li key={p.id} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={p.id === active}
                onClick={() => {
                  onPick(p.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3.5 text-left text-[15px] ${
                  p.id === active ? "bg-sel font-medium" : "active:bg-hover"
                }`}
              >
                <span className="font-mono text-[12px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{p.label}</span>
                {p.id === active && (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden>
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FigmaFile({
  project,
  caseStudies,
  select,
  copied,
  copyLink,
}: {
  project: CaseStudy;
  caseStudies: CaseStudy[];
  select: (slug: string) => void;
  copied: boolean;
  copyLink: () => void;
}) {
  const { t, locale } = useLocale();
  const dc = desktopContent[locale].figma;
  const { ui } = t;

  const index = caseStudies.indexOf(project);
  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];

  const [activeBySlug, setActiveBySlug] = useState<Record<string, FrameId>>({});
  const active = activeBySlug[project.slug] ?? "cover";
  // Looked up by id (not a ref) so handlers passed down as props don't read refs.
  const canvasEl = () => document.getElementById("figma-canvas");

  useEffect(() => {
    canvasEl()?.scrollTo({ left: 0, top: 0 });
  }, [project.slug]);

  const [zoom, setZoom] = useState(1);
  // The frame under a point of the canvas (and how far down it), so zooming
  // keeps the reading position even though the text re-wraps.
  const zoomAnchor = useRef<{ y: number; id: FrameId; frac: number } | null>(null);

  const frameEl = (id: FrameId) => document.getElementById(`figma-frame-${id}`);

  const markAnchor = (y?: number) => {
    const el = canvasEl();
    if (!el) return;
    const at = y ?? el.clientHeight / 2;
    const top = el.getBoundingClientRect().top;
    zoomAnchor.current = null;
    for (const id of FRAMES) {
      const r = frameEl(id)?.getBoundingClientRect();
      if (r && r.top - top <= at) {
        zoomAnchor.current = { y: at, id, frac: (at - (r.top - top)) / r.height };
      }
    }
  };

  useLayoutEffect(() => {
    const el = canvasEl();
    const a = zoomAnchor.current;
    zoomAnchor.current = null;
    if (!el || !a) return;
    const r = frameEl(a.id)?.getBoundingClientRect();
    if (!r) return;
    const frameTop = r.top - el.getBoundingClientRect().top + el.scrollTop;
    el.scrollTop = frameTop + a.frac * r.height - a.y;
  }, [zoom]);

  // ctrl/cmd + wheel (also how trackpads send a pinch). Needs a native,
  // non-passive listener to stop the browser from zooming the whole page.
  useEffect(() => {
    const el = canvasEl();
    if (!el) return;
    const onZoomWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      markAnchor(e.clientY - el.getBoundingClientRect().top);
      const delta = Math.max(-30, Math.min(30, e.deltaY));
      setZoom((z) => clampZoom(z * Math.exp(-delta * 0.01)));
    };
    el.addEventListener("wheel", onZoomWheel, { passive: false });
    return () => el.removeEventListener("wheel", onZoomWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stepZoom = (dir: 1 | -1) => {
    markAnchor();
    setZoom((z) => {
      const eps = 0.005;
      if (dir === 1) return ZOOM_STEPS.find((s) => s > z + eps) ?? z;
      return [...ZOOM_STEPS].reverse().find((s) => s < z - eps) ?? z;
    });
  };
  const resetZoom = () => {
    markAnchor();
    setZoom(1);
  };

  const jump = (f: FrameId) => {
    setActiveBySlug((s) => ({ ...s, [project.slug]: f }));
    const el = canvasEl();
    const target = frameEl(f);
    if (!el || !target) return;
    const top =
      target.getBoundingClientRect().top - el.getBoundingClientRect().top + el.scrollTop;
    el.scrollTo({ top: top - 16, behavior: "smooth" });
  };
  const step = (dir: 1 | -1) => {
    const i = FRAMES.indexOf(active);
    jump(FRAMES[(i + dir + FRAMES.length) % FRAMES.length]);
  };

  // The page list follows the scroll position.
  const scrollRaf = useRef(0);
  const onScroll = () => {
    if (scrollRaf.current) return;
    scrollRaf.current = requestAnimationFrame(() => {
      scrollRaf.current = 0;
      const el = canvasEl();
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      let current: FrameId = "cover";
      for (const id of FRAMES) {
        const r = frameEl(id)?.getBoundingClientRect();
        if (r && r.top - top <= el.clientHeight * 0.35) current = id;
      }
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 4) current = "result";
      setActiveBySlug((m) =>
        m[project.slug] === current ? m : { ...m, [project.slug]: current },
      );
    });
  };
  useEffect(() => () => cancelAnimationFrame(scrollRaf.current), []);

  const images = project.images;
  const overviewImages = images?.overview ?? [];
  const processImages = images?.process ?? [];
  const solutionImages = images?.solution ?? [];
  const wide =
    overviewImages.length + processImages.length + solutionImages.length > 0;
  const frameWidth = wide ? FRAME_WIDTH_WIDE : FRAME_WIDTH;

  const processSteps = [
    { key: "research", label: ui.research, value: project.proceso.research },
    { key: "constraints", label: ui.constraints, value: project.proceso.restricciones },
    { key: "iterations", label: ui.iterations, value: project.proceso.iteraciones },
    { key: "decisions", label: ui.decisions, value: project.proceso.decisiones },
    { key: "validation", label: ui.validation, value: project.proceso.validacion },
  ].filter((s) => Boolean(s.value));

  const frameLabel = (f: FrameId) => dc.frames[f];

  const fp = (id: FrameId) => ({
    id,
    label: frameLabel(id),
    width: frameWidth,
    active: active === id,
    onJump: jump,
    onActivate: () => setActiveBySlug((m) => ({ ...m, [project.slug]: id })),
  });

  // Whitespace-pre-line keeps the line breaks of the longer case studies and
  // leaves single-paragraph copy unchanged.
  const body = "text-[15px] leading-[1.7] whitespace-pre-line text-fg/85";
  // Long copy next to wide pictures stays at a readable line length.
  const measure = "max-w-[640px]";

  const publicBtn = figmaPublicUrl && (
    <a
      href={figmaPublicUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-1.5 rounded-md bg-accent px-3 py-2 text-[12px] font-semibold text-accent-fg hover:opacity-90"
    >
      {dc.openPublic}
      <IconArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );

  return (
    <div className="flex h-full">
      <aside className="flex w-[232px] shrink-0 flex-col overflow-y-auto border-r border-line bg-win max-md:hidden">
        <p className="px-4 pt-3 pb-1.5 text-[11px] font-semibold text-muted">
          {dc.pages}
        </p>
        <ul className="px-2 pb-3">
          {FRAMES.map((f, i) => (
            <li key={f}>
              <button
                type="button"
                onClick={() => jump(f)}
                aria-current={active === f}
                className={`flex w-full items-center gap-2.5 rounded px-2 py-1.5 text-left text-[13px] ${
                  active === f ? "bg-sel font-medium" : "hover:bg-hover"
                }`}
              >
                <span className="w-5 font-mono text-[10px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {frameLabel(f)}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="relative flex min-w-0 flex-1 flex-col">
        <div className="relative z-20 flex items-center gap-2 bg-win px-4 pt-1 pb-3 md:hidden">
          <PageMenu
            label={dc.pages}
            pages={FRAMES.map((f) => ({ id: f, label: frameLabel(f) }))}
            active={active}
            onPick={jump}
          />
        </div>

        <div
          id="figma-canvas"
          onScroll={onScroll}
          className="canvas-grid min-h-0 flex-1 overflow-y-auto overflow-x-hidden"
        >
          <div
            className="flex flex-col gap-12 p-8 pb-28 max-sm:gap-10 max-sm:p-4 max-sm:pb-28"
            style={{ zoom }}
          >
            <Frame {...fp("cover")}>
              <Cover project={project} pending={ui.mockupPending} />
              <div className="p-8">
                <h1 className="font-display text-[44px] leading-[1.05] font-semibold tracking-[-0.03em]">
                  {project.title}
                </h1>
                <p className="mt-3 text-[18px] text-muted">{project.subtitle}</p>
                <p className="mt-6 max-w-[560px] font-display text-[20px] leading-snug tracking-tight">
                  {project.homeTeaser}
                </p>
                {project.confidential && (
                  <p className="mt-6 flex items-start gap-2 text-[13px] leading-relaxed text-muted italic">
                    <IconLock className="mt-0.5 h-3.5 w-3.5 shrink-0 not-italic" />
                    {ui.confidentialNote}
                  </p>
                )}
                {project.concept && (
                  <p className="mt-6 flex items-start gap-2.5 text-[13px] leading-relaxed text-muted">
                    <span className="mt-0.5 shrink-0 rounded bg-sel px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-wide whitespace-nowrap text-accent uppercase">
                      {ui.conceptLabel}
                    </span>
                    <span className="italic">{ui.conceptNote}</span>
                  </p>
                )}
              </div>
            </Frame>

            <Frame {...fp("overview")}>
              <div className="space-y-7 p-8">
                <div className={wide ? measure : undefined}>
                  <Label>{ui.context}</Label>
                  <p className={`mt-2 ${body}`}>{project.contexto}</p>
                </div>
                <div className={wide ? measure : undefined}>
                  <Label>{ui.problem}</Label>
                  <p className={`mt-2 ${body}`}>{project.problema}</p>
                </div>
                {project.miRol && (
                  <div className={wide ? measure : undefined}>
                    <Label>{ui.role}</Label>
                    <p className={`mt-2 ${body}`}>{project.miRol}</p>
                  </div>
                )}
                {overviewImages.length > 0 && (
                  <Gallery images={overviewImages} />
                )}
              </div>
            </Frame>

            <Frame {...fp("process")}>
              <div className="p-8">
                <h2 className="font-display text-[26px] font-semibold tracking-tight">
                  {ui.process}
                </h2>
                <ol className="mt-6 space-y-6">
                  {processSteps.map((s, i) => (
                    <li key={s.key} className="flex gap-4">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sel font-mono text-[11px] text-accent">
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className={wide ? measure : undefined}>
                          <Label>{s.label}</Label>
                          <p className={`mt-1.5 ${body}`}>{s.value}</p>
                        </div>
                        {s.key === "iterations" && processImages.length > 0 && (
                          <div className="mt-5">
                            <Gallery images={processImages} />
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
                {!project.proceso.iteraciones && processImages.length > 0 && (
                  <div className="mt-6">
                    <Gallery images={processImages} />
                  </div>
                )}
              </div>
            </Frame>

            <Frame {...fp("solution")}>
              <div className="p-8">
                <h2 className="font-display text-[26px] font-semibold tracking-tight">
                  {ui.finalSolution}
                </h2>
                <p
                  className={`mt-4 ${body} ${wide ? measure : ""}`}
                >
                  {project.solucionFinal}
                </p>
                {solutionImages.length > 0 && (
                  <div className="mt-8">
                    <Gallery images={solutionImages} />
                  </div>
                )}
              </div>
            </Frame>

            <Frame {...fp("result")}>
              <div className="p-8">
                <Label>{ui.result}</Label>
                <p className="mt-3 border-l-2 border-accent pl-5 font-display text-[26px] leading-[1.25] font-medium tracking-tight">
                  {project.resultado}
                </p>
                {project.aprendizaje && (
                  <div className="mt-8">
                    <Label>{ui.takeaway}</Label>
                    <p className={`mt-2 ${body}`}>{project.aprendizaje}</p>
                  </div>
                )}
              </div>
            </Frame>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-win px-1.5 py-1 shadow-[0_4px_18px_rgba(0,0,0,0.18)] outline outline-1 outline-line">
          <button
            type="button"
            aria-label="Previous frame"
            onClick={() => step(-1)}
            className="grid h-7 w-7 place-items-center rounded-full hover:bg-hover"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <span className="min-w-[88px] text-center text-[12px] font-medium">
            {frameLabel(active)}
            <span className="ml-1.5 text-muted">
              {FRAMES.indexOf(active) + 1}/{FRAMES.length}
            </span>
          </span>
          <button
            type="button"
            aria-label="Next frame"
            onClick={() => step(1)}
            className="grid h-7 w-7 place-items-center rounded-full hover:bg-hover"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="absolute right-4 bottom-4 flex items-center rounded-full bg-win px-1 py-1 shadow-[0_4px_18px_rgba(0,0,0,0.18)] outline outline-1 outline-line max-sm:right-1/2 max-sm:bottom-16 max-sm:translate-x-1/2">
          <button
            type="button"
            aria-label={dc.zoomOut}
            onClick={() => stepZoom(-1)}
            disabled={zoom <= ZOOM_MIN + 0.005}
            className="grid h-7 w-7 place-items-center rounded-full hover:bg-hover disabled:opacity-35 disabled:hover:bg-transparent"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden><path d="M5 12h14" /></svg>
          </button>
          <button
            type="button"
            aria-label={dc.zoomReset}
            onClick={resetZoom}
            className="min-w-[46px] rounded-full px-1 text-center text-[12px] font-medium tabular-nums hover:bg-hover"
          >
            {Math.round(zoom * 100)}%
          </button>
          <button
            type="button"
            aria-label={dc.zoomIn}
            onClick={() => stepZoom(1)}
            disabled={zoom >= ZOOM_MAX - 0.005}
            className="grid h-7 w-7 place-items-center rounded-full hover:bg-hover disabled:opacity-35 disabled:hover:bg-transparent"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden><path d="M12 5v14M5 12h14" /></svg>
          </button>
        </div>
      </div>

      <aside className="flex w-[248px] shrink-0 flex-col gap-4 overflow-y-auto border-l border-line bg-win p-4 max-xl:hidden">
        <p className="text-[11px] font-semibold text-muted">{dc.details}</p>
        <div>
          <p className="font-display text-[18px] leading-tight font-semibold tracking-tight">
            {project.title}
          </p>
          <p className="mt-1 text-[12px] leading-snug text-muted">
            {project.subtitle}
          </p>
        </div>
        <div className="space-y-2 text-[12px]">
          <div className="flex justify-between border-b border-line pb-2">
            <span className="text-muted">{dc.pages}</span>
            <span>{String(FRAMES.length).padStart(2, "0")}</span>
          </div>
          <div className="flex justify-between border-b border-line pb-2">
            <span className="text-muted">{dc.home.title}</span>
            <span>
              {String(index + 1).padStart(2, "0")}/
              {String(caseStudies.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-md bg-hover px-3 py-2 text-[12px] font-medium hover:bg-sel"
            >
              {dc.visit}
              <IconArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          <button
            type="button"
            onClick={copyLink}
            className="flex items-center justify-center gap-1.5 rounded-md bg-hover px-3 py-2 text-[12px] font-medium hover:bg-sel"
          >
            <IconLink className="h-3.5 w-3.5" />
            {copied ? t.ui.linkCopied : t.ui.shareCaseStudy}
          </button>
          {publicBtn}
        </div>
        <div className="mt-auto flex flex-col gap-1 border-t border-line pt-3 text-[12px]">
          <button type="button" onClick={() => select(prev.slug)} className="flex justify-between rounded px-1 py-1 text-left hover:bg-hover">
            <span className="text-muted">{ui.previous}</span>
            <span className="truncate pl-2">{prev.title}</span>
          </button>
          <button type="button" onClick={() => select(next.slug)} className="flex justify-between rounded px-1 py-1 text-left hover:bg-hover">
            <span className="text-muted">{ui.next}</span>
            <span className="truncate pl-2">{next.title}</span>
          </button>
        </div>
      </aside>
    </div>
  );
}

export function FigmaApp({ win }: { win: WinState }) {
  const { t, locale } = useLocale();
  const dc = desktopContent[locale].figma;
  // Featured work first (in the order of featuredCaseStudies), then the rest.
  const caseStudies = [
    ...featuredCaseStudies
      .map((slug) => visibleCaseStudies(t.caseStudies).find((c) => c.slug === slug))
      .filter((c): c is CaseStudy => Boolean(c)),
    ...visibleCaseStudies(t.caseStudies).filter(
      (c) => !isFeatured(c.slug),
    ),
  ];
  const { setProps } = useWM();
  const appLabel = desktopContent[locale].tips.figma;

  // No project selected = the file browser.
  const project = caseStudies.find((c) => c.slug === win.props.project);

  const [copied, setCopied] = useState(false);

  const select = (slug: string) => setProps("figma", { project: slug });
  const goHome = () => setProps("figma", { project: undefined });

  const copyLink = async () => {
    if (!project) return;
    try {
      await navigator.clipboard.writeText(`${siteUrl}/proyectos/${project.slug}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  // Phones open the system share sheet when there is one.
  const shareProject = async () => {
    if (!project) return;
    const url = `${siteUrl}/proyectos/${project.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: project.title, url });
      } catch {
        /* dismissed */
      }
      return;
    }
    copyLink();
  };

  return (
    <Window
      win={win}
      title={dc.file}
      width={1220}
      height={760}
      mobile={{
        title: project ? project.title : appLabel,
        // A project's cover already opens with its big title.
        largeTitle: !project,
        back: project ? { label: appLabel, onClick: goHome } : undefined,
        actions: project && (
          <button
            type="button"
            onClick={shareProject}
            aria-label={copied ? t.ui.linkCopied : t.ui.shareCaseStudy}
            className="ios-action"
          >
            {copied ? (
              <IconCheckCircle className="h-[22px] w-[22px]" />
            ) : (
              <IconShare className="h-[22px] w-[22px]" />
            )}
          </button>
        ),
      }}
      toolbar={
        <div className="flex w-full min-w-0 items-center gap-3">
          <div className="flex min-w-0 items-center gap-2 text-[13px]">
            <FigmaGlyph />
            {project ? (
              <>
                <button
                  type="button"
                  onClick={goHome}
                  aria-label={dc.home.back}
                  className="flex shrink-0 items-center gap-1 rounded px-1.5 py-0.5 text-muted hover:bg-hover hover:text-fg"
                >
                  <IconArrowLeft className="h-3.5 w-3.5" />
                  <span className="max-sm:hidden">{dc.home.back}</span>
                </button>
                <span className="text-muted max-sm:hidden" aria-hidden>
                  /
                </span>
                {isFeatured(project.slug) && (
                  <IconStar
                    filled
                    className="h-3.5 w-3.5 shrink-0 text-[#f5b800]"
                  />
                )}
                <span className="truncate font-medium">{project.title}</span>
              </>
            ) : (
              <span className="truncate font-medium">{dc.file}</span>
            )}
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-3">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-fg max-sm:hidden">
              LC
            </span>
            {project && (
              <button
                type="button"
                onClick={copyLink}
                className="rounded-md bg-accent px-3 py-1 text-[12px] font-semibold text-accent-fg hover:opacity-90"
              >
                {copied ? t.ui.linkCopied : t.ui.shareCaseStudy}
              </button>
            )}
          </div>
        </div>
      }
    >
      {project ? (
        <FigmaFile
          project={project}
          caseStudies={caseStudies}
          select={select}
          copied={copied}
          copyLink={copyLink}
        />
      ) : (
        <FigmaHome caseStudies={caseStudies} onOpen={select} />
      )}
    </Window>
  );
}
