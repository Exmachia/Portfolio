"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent } from "@/lib/desktop-content";
import { useWM, type WinState } from "@/components/desktop/wm";

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

type Dir = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";
const DIRS: Dir[] = ["n", "s", "e", "w", "ne", "nw", "se", "sw"];

const MIN_W = 380;
const MIN_H = 280;
const MENU_BAR = 28;

function Glyph({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 8 8" fill="none" strokeWidth="1.3" strokeLinecap="round">
      <path d={d} />
    </svg>
  );
}

// iPhone-style chevron for the nav bar's back button.
function BackChevron() {
  return (
    <svg viewBox="0 0 12 21" width="12" height="21" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 2 2 10.5 10 19" />
    </svg>
  );
}

export type MobileNav = {
  // Centered title; defaults to the window title.
  title?: string;
  // Replaces the default back button (close the window, "Home").
  back?: { label: string; onClick: () => void };
  // Trailing buttons, e.g. Share or Download.
  actions?: ReactNode;
};

export function Window({
  win,
  title,
  toolbar,
  mobile,
  width,
  height,
  gutter = 32,
  glass = false,
  children,
}: {
  win: WinState;
  title: string;
  // Replaces the centered title (e.g. Figma's file tab or Claude's header).
  // Desktop only: phones get the iPhone nav bar instead.
  toolbar?: ReactNode;
  mobile?: MobileNav;
  width: number;
  height: number;
  // Space kept free beside the window by default (e.g. for desktop files).
  gutter?: number;
  // Liquid Glass window (system apps): the wallpaper shows through the frame.
  glass?: boolean;
  children: ReactNode;
}) {
  const { locale } = useLocale();
  const labels = desktopContent[locale].menu;
  const { focused, close, minimize, toggleMax, focus, move, resize } = useWM();
  const ref = useRef<HTMLElement>(null);
  const drag = useRef<{ dx: number; dy: number } | null>(null);
  const resizing = useRef<{
    dir: Dir;
    sx: number;
    sy: number;
    rect: DOMRect;
  } | null>(null);
  const isFocused = focused === win.id;

  const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    focus(win.id);
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest("button, a, input, textarea")) return;
    if (win.maximized || window.innerWidth < 768 || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    drag.current = { dx: e.clientX - rect.left, dy: e.clientY - rect.top };
    e.currentTarget.setPointerCapture(e.pointerId);
    if (!win.pos) move(win.id, { x: rect.left, y: rect.top });
  };

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!drag.current || !ref.current) return;
    const w = ref.current.offsetWidth;
    move(win.id, {
      x: clamp(e.clientX - drag.current.dx, 120 - w, window.innerWidth - 120),
      y: clamp(e.clientY - drag.current.dy, MENU_BAR, window.innerHeight - 70),
    });
  };

  const endDrag = (e: React.PointerEvent<HTMLElement>) => {
    if (!drag.current) return;
    drag.current = null;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const onResizeDown = (dir: Dir) => (e: React.PointerEvent<HTMLElement>) => {
    if (e.button !== 0 || win.maximized || !ref.current) return;
    e.preventDefault();
    e.stopPropagation();
    focus(win.id);
    e.currentTarget.setPointerCapture(e.pointerId);
    resizing.current = {
      dir,
      sx: e.clientX,
      sy: e.clientY,
      rect: ref.current.getBoundingClientRect(),
    };
  };

  const onResizeMove = (e: React.PointerEvent<HTMLElement>) => {
    const r = resizing.current;
    if (!r) return;
    const dx = e.clientX - r.sx;
    const dy = e.clientY - r.sy;
    let left = r.rect.left;
    let top = r.rect.top;
    let w = r.rect.width;
    let h = r.rect.height;

    if (r.dir.includes("e")) w = Math.max(MIN_W, r.rect.width + dx);
    if (r.dir.includes("s")) h = Math.max(MIN_H, r.rect.height + dy);
    if (r.dir.includes("w")) {
      w = Math.max(MIN_W, r.rect.width - dx);
      left = r.rect.right - w;
    }
    if (r.dir.includes("n")) {
      top = Math.max(MENU_BAR, Math.min(r.rect.bottom - MIN_H, r.rect.top + dy));
      h = r.rect.bottom - top;
    }
    resize(win.id, { x: left, y: top, w, h });
  };

  const endResize = (e: React.PointerEvent<HTMLElement>) => {
    if (!resizing.current) return;
    resizing.current = null;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const style = {
    "--ww": win.size
      ? `${win.size.w}px`
      : `min(${width}px, calc(100vw - ${gutter}px))`,
    "--wh": win.size
      ? `${win.size.h}px`
      : `min(${height}px, calc(100dvh - 150px))`,
    "--cas": win.cascade,
    "--px": `${win.pos?.x ?? 0}px`,
    "--py": `${win.pos?.y ?? 0}px`,
    zIndex: 10 + win.z,
  } as CSSProperties;

  return (
    <section
      ref={ref}
      role="dialog"
      aria-label={title}
      data-app={win.id}
      data-focused={isFocused}
      data-free={win.pos !== null}
      data-max={win.maximized}
      data-min={win.minimized}
      data-glass={glass}
      className="win"
      style={style}
      onPointerDown={() => focus(win.id)}
    >
      <div className="win-surface">
        <header
          className="titlebar"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onDoubleClick={(e) => {
            if (!(e.target as HTMLElement).closest("button, a, input")) {
              toggleMax(win.id);
            }
          }}
        >
          <div className="lights">
            <button
              type="button"
              className="light"
              data-k="close"
              aria-label={labels.close}
              onClick={() => close(win.id)}
            >
              <Glyph d="M1.5 1.5l5 5M6.5 1.5l-5 5" />
            </button>
            <button
              type="button"
              className="light"
              data-k="min"
              aria-label={labels.minimize}
              onClick={() => minimize(win.id)}
            >
              <Glyph d="M1.2 4h5.6" />
            </button>
            <button
              type="button"
              className="light"
              data-k="zoom"
              aria-label={labels.zoom}
              onClick={() => toggleMax(win.id)}
            >
              <Glyph d="M1.8 6.2V1.8h4.4M6.2 1.8v4.4H1.8" />
            </button>
          </div>

          {toolbar ? (
            <div className="flex min-w-0 flex-1 items-center">{toolbar}</div>
          ) : (
            <h2
              className={`pointer-events-none absolute inset-x-24 truncate text-center text-[13px] font-semibold ${
                isFocused ? "text-fg" : "text-muted"
              }`}
            >
              {title}
            </h2>
          )}
        </header>

        <nav className="ios-nav">
          <button
            type="button"
            onClick={mobile?.back?.onClick ?? (() => close(win.id))}
            className="ios-back"
          >
            <BackChevron />
            <span className="truncate">{mobile?.back?.label ?? labels.home}</span>
          </button>
          <h2 className="truncate text-center text-[17px] font-semibold tracking-[-0.01em]">
            {mobile?.title ?? title}
          </h2>
          <div className="flex min-w-0 items-center justify-end gap-1">
            {mobile?.actions}
          </div>
        </nav>
        <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
      </div>

      {!win.maximized &&
        DIRS.map((d) => (
          <div
            key={d}
            className={`rz rz-${d}`}
            onPointerDown={onResizeDown(d)}
            onPointerMove={onResizeMove}
            onPointerUp={endResize}
            onPointerCancel={endResize}
          />
        ))}
    </section>
  );
}
