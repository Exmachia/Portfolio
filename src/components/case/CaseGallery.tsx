"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "@/lib/locale-context";
import { desktopContent } from "@/lib/desktop-content";
import type { CaseImage } from "@/lib/content";
import { IconSearch } from "@/components/icons";

// The screens of a case study, in reading order. Each one reserves its space
// before it loads and opens in a viewer (zoom + swipe) instead of leaving the
// site.
export function CaseGallery({ images }: { images: CaseImage[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <div className="space-y-6">
      {images.map((img, i) => (
        <GalleryItem key={img.src} img={img} onOpen={() => setOpen(i)} />
      ))}
      {open !== null && (
        <Lightbox images={images} index={open} onIndex={setOpen} onClose={close} />
      )}
    </div>
  );
}

function GalleryItem({ img, onOpen }: { img: CaseImage; onOpen: () => void }) {
  const [loaded, setLoaded] = useState(false);
  const { locale } = useLocale();
  const v = desktopContent[locale].figma.viewer;

  return (
    <figure>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${v.open}: ${img.alt}`}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-md bg-hover outline outline-1 outline-line"
        style={{ aspectRatio: `${img.width} / ${img.height}` }}
      >
        {!loaded && <span className="absolute inset-0 animate-pulse bg-hover" aria-hidden />}
        <Image
          ref={(el) => {
            // Cached images can finish before hydration, so onLoad never fires.
            if (el?.complete && el.naturalWidth > 0) setLoaded(true);
          }}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          // Frames are at most 960px wide; phones get the viewport width.
          sizes="(max-width: 1000px) 100vw, 960px"
          quality={85}
          onLoad={() => setLoaded(true)}
          className={`h-auto w-full transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        <span
          aria-hidden
          className="absolute right-2 bottom-2 grid h-8 w-8 place-items-center rounded-full bg-black/55 text-white opacity-90 backdrop-blur-sm transition-opacity group-hover:opacity-100"
        >
          <IconSearch className="h-4 w-4" />
        </span>
      </button>
      {img.caption && (
        <figcaption className="mt-2 text-[12px] leading-snug text-muted italic">
          {img.caption}
        </figcaption>
      )}
    </figure>
  );
}

function Lightbox({
  images,
  index,
  onIndex,
  onClose,
}: {
  images: CaseImage[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const { locale } = useLocale();
  const v = desktopContent[locale].figma.viewer;
  const [zoomed, setZoomed] = useState(false);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const img = images[index];

  const go = useCallback(
    (dir: 1 | -1) => {
      setZoomed(false);
      onIndex((index + dir + images.length) % images.length);
    },
    [index, images.length, onIndex],
  );

  // Focus the viewer on open and give focus back on close.
  useEffect(() => {
    const before = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus();
    return () => before?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  const round =
    "grid h-11 w-11 place-items-center rounded-full bg-white/12 text-white backdrop-blur-sm hover:bg-white/22 active:bg-white/30";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      className="fixed inset-0 z-[3000] flex flex-col bg-black/92 text-white"
    >
      <div className="flex items-center justify-between px-4 pt-[max(12px,env(safe-area-inset-top))] pb-2">
        <span className="rounded-full bg-white/12 px-3 py-1.5 text-[13px] font-medium tabular-nums">
          {index + 1} / {images.length}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setZoomed((z) => !z)}
            aria-label={zoomed ? v.fit : v.zoom}
            className={round}
          >
            {zoomed ? (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" />
              </svg>
            ) : (
              <IconSearch className="h-5 w-5" />
            )}
          </button>
          <button ref={closeBtn} type="button" onClick={onClose} aria-label={v.close} className={round}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="relative flex min-h-0 flex-1 overflow-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const start = touchX.current;
          touchX.current = null;
          if (zoomed || start === null) return;
          const dx = e.changedTouches[0].clientX - start;
          if (Math.abs(dx) > 70) go(dx < 0 ? 1 : -1);
        }}
      >
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          unoptimized
          onClick={() => setZoomed((z) => !z)}
          // Fit: the whole screen. Zoom: the design at 1x (the exports are @2x).
          style={zoomed ? { width: img.width / 2, maxWidth: "none", height: "auto" } : undefined}
          className={
            zoomed
              ? "m-auto cursor-zoom-out"
              : "m-auto max-h-full max-w-full cursor-zoom-in object-contain"
          }
        />
        {images.length > 1 && !zoomed && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={v.prev}
              className={`${round} fixed top-1/2 left-3 -translate-y-1/2 max-sm:hidden`}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={v.next}
              className={`${round} fixed top-1/2 right-3 -translate-y-1/2 max-sm:hidden`}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      <p className="px-5 pt-2 pb-[max(14px,env(safe-area-inset-bottom))] text-center text-[12.5px] leading-snug text-white/75">
        {img.caption ?? img.alt}
      </p>
    </div>,
    document.body,
  );
}
