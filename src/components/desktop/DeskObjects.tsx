"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  DESK_OBJECTS,
  MAT_TILT_DEG,
  OBJECTS_ON_DESK,
  deskGeometry,
  type DeskObject,
} from "@/lib/desk-objects";

type Item = { obj: DeskObject; x: number; y: number; rot: number; z: number };

function shuffle<T>(list: T[]): T[] {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

// The shadow lives on a non-rotated wrapper so the light always comes from
// the same direction. Lifting an object lengthens and softens it.
const SHADOW_REST =
  "drop-shadow(0 1px 1px rgba(0,0,0,0.4)) drop-shadow(0 5px 7px rgba(0,0,0,0.3))";
const SHADOW_LIFT =
  "drop-shadow(0 4px 4px rgba(0,0,0,0.28)) drop-shadow(0 20px 24px rgba(0,0,0,0.34))";

// Every now and then one object (never two at once) gives a small wiggle, a
// hint that it can be picked up. Stops for good once the visitor drags one.
const WIGGLE_FIRST_MS = 2600;
const WIGGLE_MIN_MS = 4500;
const WIGGLE_MAX_MS = 9000;

export function DeskObjects() {
  const [items, setItems] = useState<Item[]>([]);
  const [pxPerCm, setPxPerCm] = useState(0);
  const [dragId, setDragId] = useState<string | null>(null);
  const [wiggle, setWiggle] = useState<{ id: string; n: number } | null>(null);
  const zTop = useRef(10);
  const drag = useRef<{ id: string; dx: number; dy: number } | null>(null);
  const hasDragged = useRef(false);
  const ids = useRef<string[]>([]);

  useEffect(() => {
    const g = deskGeometry(window.innerWidth, window.innerHeight);
    const count = g.mobile ? 3 : OBJECTS_ON_DESK;
    const picks = shuffle(DESK_OBJECTS).slice(0, count);
    const theta = (MAT_TILT_DEG * Math.PI) / 180;

    // Desktop: spread over the tilted mat in mat-local coordinates (u across,
    // v down, both in fractions of the mat), some spilling past its edge.
    const mat = shuffle([
      { u: -0.36, v: 0.12 },
      { u: -0.16, v: 0.36 },
      { u: 0.02, v: 0.0 },
      { u: 0.2, v: 0.4 },
      { u: 0.42, v: 0.1 },
    ]);
    // Phones: a loose row near the bottom, clear of the app icons.
    const row = shuffle([
      { fx: 0.2, fy: 0.8 },
      { fx: 0.52, fy: 0.72 },
      { fx: 0.82, fy: 0.84 },
    ]);

    const placed = picks.map((obj, i): Item => {
      const w = obj.widthCm * g.pxPerCm;
      const h = (w * obj.h) / obj.w;
      let cx: number;
      let cy: number;
      if (g.mobile) {
        cx = window.innerWidth * (row[i].fx + (Math.random() - 0.5) * 0.06);
        cy = window.innerHeight * (row[i].fy + (Math.random() - 0.5) * 0.04);
      } else {
        const u = mat[i].u + (Math.random() - 0.5) * 0.08;
        const v = mat[i].v + (Math.random() - 0.5) * 0.1;
        const lx = u * g.matW;
        const ly = v * g.matH;
        cx = g.cx + lx * Math.cos(theta) - ly * Math.sin(theta);
        cy = g.cy + lx * Math.sin(theta) + ly * Math.cos(theta);
      }
      return {
        obj,
        x: cx - w / 2,
        y: Math.max(40, cy - h / 2),
        // loosely follows the mat's tilt, but each object is a bit off
        rot: (g.mobile ? 0 : MAT_TILT_DEG) + (Math.random() - 0.5) * 34,
        z: i + 1,
      };
    });

    /* eslint-disable react-hooks/set-state-in-effect */
    setPxPerCm(g.pxPerCm);
    setItems(placed);
    /* eslint-enable react-hooks/set-state-in-effect */

    const onResize = () =>
      setPxPerCm(deskGeometry(window.innerWidth, window.innerHeight).pxPerCm);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    ids.current = items.map((i) => i.obj.id);
  }, [items]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    let last: string | null = null;
    let n = 0;
    const tick = () => {
      if (hasDragged.current) return;
      const pool = ids.current.filter((id) => id !== last);
      if (!document.hidden && !drag.current && pool.length > 0) {
        last = pool[Math.floor(Math.random() * pool.length)];
        n += 1;
        setWiggle({ id: last, n });
      }
      timer = window.setTimeout(
        tick,
        WIGGLE_MIN_MS + Math.random() * (WIGGLE_MAX_MS - WIGGLE_MIN_MS),
      );
    };
    timer = window.setTimeout(tick, WIGGLE_FIRST_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const sizeOf = (o: DeskObject) => {
    const w = o.widthCm * pxPerCm;
    return { w, h: (w * o.h) / o.w };
  };

  const onDown = (id: string) => (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const it = items.find((i) => i.obj.id === id);
    if (!it) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { id, dx: e.clientX - it.x, dy: e.clientY - it.y };
    hasDragged.current = true;
    setWiggle(null);
    zTop.current += 1;
    const z = zTop.current;
    setItems((list) => list.map((i) => (i.obj.id === id ? { ...i, z } : i)));
    setDragId(id);
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    setItems((list) =>
      list.map((i) => {
        if (i.obj.id !== d.id) return i;
        const { w, h } = sizeOf(i.obj);
        return {
          ...i,
          x: clamp(e.clientX - d.dx, 60 - w, window.innerWidth - 60),
          y: clamp(e.clientY - d.dy, 28 + 60 - h, window.innerHeight - 60),
        };
      }),
    );
  };

  const onUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    drag.current = null;
    setDragId(null);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 isolate overflow-hidden">
      {pxPerCm > 0 &&
        items.map((it, idx) => {
          const { w, h } = sizeOf(it.obj);
          const lifted = dragId === it.obj.id;
          return (
            <div
              key={it.obj.id}
              className="absolute"
              style={{
                left: it.x,
                top: it.y,
                width: w,
                height: h,
                zIndex: it.z,
                filter: lifted ? SHADOW_LIFT : SHADOW_REST,
                transition: "filter 0.18s ease",
              }}
            >
              <div
                className="desk-drop pointer-events-auto h-full w-full touch-none select-none"
                style={{
                  transform: `rotate(${it.rot}deg) scale(${lifted ? 1.05 : 1})`,
                  transition: "transform 0.18s ease",
                  cursor: lifted ? "grabbing" : "grab",
                  animationDelay: `${idx * 70}ms`,
                }}
                onPointerDown={onDown(it.obj.id)}
                onPointerMove={onMove}
                onPointerUp={onUp}
                onPointerCancel={onUp}
              >
                <div
                  key={wiggle?.id === it.obj.id ? wiggle.n : 0}
                  className={`h-full w-full ${
                    wiggle?.id === it.obj.id ? "desk-wiggle" : ""
                  }`}
                >
                  <Image
                    src={it.obj.src}
                    alt={it.obj.alt}
                    width={it.obj.w}
                    height={it.obj.h}
                    draggable={false}
                    unoptimized
                    className="pointer-events-none h-full w-full select-none"
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
