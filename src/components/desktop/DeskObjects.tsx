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

type Item = {
  obj: DeskObject;
  x: number;
  y: number;
  rot: number;
  z: number;
  // While a painter's cursor carries it: how long the move takes, in ms.
  carry?: number;
};

// Figma multiplayer cursors, named after painters. After a while without
// activity one of them carries a random object off the desk, and another one
// brings a different object to the same spot. Desktop only.
type Painter = { name: string; color: string; ink: string };
const PAINTERS: Painter[] = [
  { name: "Frida Kahlo", color: "#F24822", ink: "#fff" },
  { name: "Vincent van Gogh", color: "#FFCD29", ink: "#1e1e1e" },
  { name: "Claude Monet", color: "#14AE5C", ink: "#fff" },
  { name: "Pablo Picasso", color: "#0D99FF", ink: "#fff" },
  { name: "Salvador Dalí", color: "#9747FF", ink: "#fff" },
  { name: "Remedios Varo", color: "#FF24BD", ink: "#fff" },
  { name: "Johannes Vermeer", color: "#1E6BFF", ink: "#fff" },
  { name: "Leonora Carrington", color: "#FF8A00", ink: "#1e1e1e" },
  { name: "Gustav Klimt", color: "#B98A00", ink: "#fff" },
  { name: "Diego Rivera", color: "#00A3A3", ink: "#fff" },
];
type Cursor = Painter & { x: number; y: number; ms: number };

const HEIST_IDLE_MS = 18_000;
const EASE = "cubic-bezier(0.45, 0.05, 0.3, 1)";
// How far past the edge a cursor has to go for its name tag to be gone too.
const CURSOR_CLEARANCE = 180;
// What a lifted object's shadow adds around it (see SHADOW_LIFT).
const SHADOW_REACH = 50;

const sleep = (ms: number) => new Promise((r) => window.setTimeout(r, ms));
// Two frames, so a transition starts from the position just rendered.
const nextFrame = () =>
  new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
const pick = <T,>(list: T[]) => list[Math.floor(Math.random() * list.length)];

// How far past the edge the center of a carried object has to be for all of it
// to be out of sight, at any rotation and lifted (scale 1.05).
const objectClearance = ({ w, h }: { w: number; h: number }) =>
  Math.max(CURSOR_CLEARANCE, (Math.hypot(w, h) / 2) * 1.05 + SHADOW_REACH);

// A point `margin` px outside the left, right or bottom edge of the screen.
function offscreen(margin: number, avoid?: "l" | "r" | "b") {
  const side = pick((["l", "r", "b"] as const).filter((s) => s !== avoid));
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const y = vh * (0.2 + Math.random() * 0.5);
  if (side === "l") return { side, x: -margin, y };
  if (side === "r") return { side, x: vw + margin, y };
  return { side, x: vw * (0.2 + Math.random() * 0.6), y: vh + margin };
}

function FigmaCursor({ c }: { c: Cursor }) {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{
        transform: `translate(${c.x}px, ${c.y}px)`,
        transition: `transform ${c.ms}ms ${EASE}`,
        zIndex: 100000,
      }}
    >
      <svg width="18" height="22" viewBox="0 0 18 22" className="drop-shadow-md">
        <path
          d="M1.5 1.5v16.2l4.6-4.4 3 6.8 3-1.3-3-6.7h6.4z"
          fill={c.color}
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="absolute top-[18px] left-[14px] rounded-[5px] px-1.5 py-[3px] text-[12px] leading-none font-semibold whitespace-nowrap shadow-md"
        style={{ background: c.color, color: c.ink }}
      >
        {c.name}
      </span>
    </div>
  );
}

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
// the same direction. Lifting an object lengthens and softens it. The wrapper
// is moved with a GPU transform (not left/top): repainting a drop-shadow
// filter on every move leaves smeared trails behind the object on iOS Safari.
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
  const [cursor, setCursor] = useState<Cursor | null>(null);
  const [carriedId, setCarriedId] = useState<string | null>(null);
  const itemsRef = useRef<Item[]>([]);
  const pxRef = useRef(0);

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
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    pxRef.current = pxPerCm;
  }, [pxPerCm]);

  // The heist: one painter takes a random object off the desk, then another
  // drops a different one where it was.
  useEffect(() => {
    if (deskGeometry(window.innerWidth, window.innerHeight).mobile) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const moveItem = (id: string, patch: Partial<Item>) =>
      setItems((list) =>
        list.map((i) => (i.obj.id === id ? { ...i, ...patch } : i)),
      );
    const size = (o: DeskObject) => {
      const w = o.widthCm * pxRef.current;
      return { w, h: (w * o.h) / o.w };
    };

    const heist = async () => {
      const onDesk = itemsRef.current;
      const pool = DESK_OBJECTS.filter(
        (o) => !onDesk.some((i) => i.obj.id === o.id),
      );
      if (onDesk.length === 0 || pool.length === 0 || drag.current) return;
      const [thief, courier] = shuffle(PAINTERS);
      setWiggle(null);

      // 1. The thief flies in to a random object and picks it up.
      const victim = pick(onDesk);
      const vs = size(victim.obj);
      const spot = { x: victim.x + vs.w / 2, y: victim.y + vs.h / 2 };
      const exit = offscreen(objectClearance(vs));
      setCursor({ ...thief, x: exit.x, y: exit.y, ms: 0 });
      await nextFrame();
      setCursor({ ...thief, ...spot, ms: 1500 });
      await sleep(1650);
      zTop.current += 1;
      moveItem(victim.obj.id, { z: zTop.current });
      setCarriedId(victim.obj.id);
      await sleep(380);

      // 2. ...and carries it off the screen.
      moveItem(victim.obj.id, {
        x: exit.x - vs.w / 2,
        y: exit.y - vs.h / 2,
        carry: 1500,
      });
      setCursor({ ...thief, x: exit.x, y: exit.y, ms: 1500 });
      await sleep(1600);
      setItems((list) => list.filter((i) => i.obj.id !== victim.obj.id));
      setCarriedId(null);
      setCursor(null);
      await sleep(900);

      // 3. Another painter brings a different object to the same spot.
      const obj = pick(pool);
      const ns = size(obj);
      const entry = offscreen(objectClearance(ns), exit.side);
      const drop = {
        x: spot.x + (Math.random() - 0.5) * 40,
        y: spot.y + (Math.random() - 0.5) * 30,
      };
      zTop.current += 1;
      setItems((list) => [
        ...list,
        {
          obj,
          x: entry.x - ns.w / 2,
          y: entry.y - ns.h / 2,
          rot: MAT_TILT_DEG + (Math.random() - 0.5) * 34,
          z: zTop.current,
        },
      ]);
      setCarriedId(obj.id);
      setCursor({ ...courier, x: entry.x, y: entry.y, ms: 0 });
      await nextFrame();
      moveItem(obj.id, {
        x: drop.x - ns.w / 2,
        y: drop.y - ns.h / 2,
        carry: 1800,
      });
      setCursor({ ...courier, ...drop, ms: 1800 });
      await sleep(1900);
      setCarriedId(null);
      moveItem(obj.id, { carry: undefined });
      await sleep(450);

      // 4. The courier leaves.
      const away = offscreen(CURSOR_CLEARANCE);
      setCursor({ ...courier, x: away.x, y: away.y, ms: 1300 });
      await sleep(1400);
      setCursor(null);
    };

    let timer = 0;
    let running = false;
    const arm = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(async () => {
        if (document.hidden) return arm();
        running = true;
        await heist();
        running = false;
        arm();
      }, HEIST_IDLE_MS);
    };
    const onActivity = () => {
      if (!running) arm();
    };
    const events = ["pointermove", "pointerdown", "keydown", "wheel"] as const;
    events.forEach((e) =>
      window.addEventListener(e, onActivity, { passive: true }),
    );
    arm();
    return () => {
      window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, onActivity));
    };
  }, []);

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
          const lifted = dragId === it.obj.id || carriedId === it.obj.id;
          const carried = carriedId === it.obj.id;
          return (
            <div
              key={it.obj.id}
              className="absolute top-0 left-0"
              style={{
                transform: `translate3d(${it.x}px, ${it.y}px, 0)`,
                willChange: "transform",
                width: w,
                height: h,
                zIndex: it.z,
                filter: lifted ? SHADOW_LIFT : SHADOW_REST,
                transition: it.carry
                  ? `transform ${it.carry}ms ${EASE}, filter 0.18s ease`
                  : "filter 0.18s ease",
              }}
            >
              <div
                className={`desk-drop h-full w-full touch-none select-none ${
                  carried ? "pointer-events-none" : "pointer-events-auto"
                }`}
                style={{
                  transform: `rotate(${it.rot}deg) scale(${lifted ? 1.05 : 1})`,
                  transition: "transform 0.18s ease",
                  cursor: lifted ? "grabbing" : "grab",
                  // no iOS long-press menu (save image, share...) while holding
                  WebkitTouchCallout: "none",
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
      {cursor && <FigmaCursor c={cursor} />}
    </div>
  );
}
