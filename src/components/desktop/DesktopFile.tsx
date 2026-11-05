"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

const W = 124;
const H = 104;

// A file on the desktop: click to open, drag to move. The position is
// remembered per file in localStorage.
export function DesktopFile({
  id,
  label,
  icon,
  onOpen,
  defaultClassName,
}: {
  id: string;
  label: string;
  icon: ReactNode;
  onOpen: () => void;
  // Where it sits until the user moves it (e.g. top-right).
  defaultClassName: string;
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const drag = useRef<{
    dx: number;
    dy: number;
    sx: number;
    sy: number;
    moved: boolean;
  } | null>(null);
  const justDragged = useRef(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(`desktop-file:${id}`);
      if (!raw) return;
      const p = JSON.parse(raw) as { x: number; y: number };
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPos({
        x: clamp(p.x, 0, window.innerWidth - W),
        y: clamp(p.y, 28, window.innerHeight - H),
      });
    } catch {}
  }, [id]);

  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.button !== 0 || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    drag.current = {
      dx: e.clientX - rect.left,
      dy: e.clientY - rect.top,
      sx: e.clientX,
      sy: e.clientY,
      moved: false,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const d = drag.current;
    if (!d) return;
    if (!d.moved && Math.hypot(e.clientX - d.sx, e.clientY - d.sy) > 4) {
      d.moved = true;
      setDragging(true);
    }
    if (d.moved) {
      setPos({
        x: clamp(e.clientX - d.dx, 0, window.innerWidth - W),
        y: clamp(e.clientY - d.dy, 28, window.innerHeight - H),
      });
    }
  };

  const endDrag = (e: React.PointerEvent<HTMLButtonElement>) => {
    const d = drag.current;
    if (!d) return;
    drag.current = null;
    e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
    if (d.moved) {
      justDragged.current = true;
      try {
        window.localStorage.setItem(
          `desktop-file:${id}`,
          JSON.stringify({
            x: clamp(e.clientX - d.dx, 0, window.innerWidth - W),
            y: clamp(e.clientY - d.dy, 28, window.innerHeight - H),
          }),
        );
      } catch {}
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClick={() => {
        // A drag ends with a click event; don't open the file after moving it.
        if (justDragged.current) {
          justDragged.current = false;
          return;
        }
        onOpen();
      }}
      className={`pointer-events-auto absolute z-[1] hidden touch-none flex-col items-center gap-1.5 rounded-xl p-2 select-none hover:bg-black/10 md:flex ${
        dragging ? "cursor-grabbing bg-black/10" : "cursor-grab"
      } ${pos ? "" : defaultClassName}`}
      style={pos ? { left: pos.x, top: pos.y, width: W } : { width: W }}
    >
      {icon}
      <span className="rounded-md bg-black/60 px-1.5 py-0.5 text-center text-[11.5px] leading-tight font-medium whitespace-nowrap text-white">
        {label}
      </span>
    </button>
  );
}
