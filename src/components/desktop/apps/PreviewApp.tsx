"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import { desktopContent } from "@/lib/desktop-content";
import { Window } from "@/components/desktop/Window";
import type { WinState } from "@/components/desktop/wm";
import { IconDownload, IconArrowUpRight } from "@/components/icons";

export function PreviewApp({ win }: { win: WinState }) {
  const { t, locale } = useLocale();
  const dc = desktopContent[locale].preview;
  const href = t.site.cvHref;
  // Phones get page 1 as an image (see scripts/cv-to-image.swift): mobile
  // browsers show PDFs in an iframe poorly or not at all.
  const image = href.replace(/\.pdf$/, ".webp");

  const btn =
    "flex h-7 items-center gap-1.5 rounded-md bg-hover px-2.5 text-[12px] font-medium text-fg hover:bg-sel";

  return (
    <Window
      win={win}
      title={dc.fileName}
      width={840}
      height={780}
      glass
      mobile={{
        actions: (
          <a href={href} download aria-label={dc.download} className="ios-action">
            <IconDownload className="h-[22px] w-[22px]" />
          </a>
        ),
      }}
      toolbar={
        <div className="flex w-full items-center justify-between gap-3">
          <span className="truncate text-[13px] font-semibold">
            {dc.fileName}
          </span>
          <div className="flex shrink-0 gap-1.5">
            <a href={href} target="_blank" rel="noopener noreferrer" className={btn}>
              <IconArrowUpRight className="h-3.5 w-3.5" />
              <span className="max-sm:hidden">{dc.openTab}</span>
            </a>
            <a href={href} download className={btn}>
              <IconDownload className="h-3.5 w-3.5" />
              {dc.download}
            </a>
          </div>
        </div>
      }
    >
      <div className="h-full p-2 pt-0 max-md:p-0">
      <div className="relative h-full overflow-hidden rounded-[20px] bg-white shadow-[0_0_0_0.5px_var(--line)] max-md:rounded-none max-md:shadow-none">
        <iframe
          key={href}
          src={`${href}#toolbar=0&navpanes=0&view=FitH`}
          title={dc.fileName}
          className="h-full w-full border-0 bg-white max-md:hidden"
        />
        <div className="h-full overflow-y-auto bg-win2 px-3 pt-3 pb-8 md:hidden">
          <Image
            key={image}
            src={image}
            alt={dc.fileName}
            width={1836}
            height={2376}
            // full resolution, so pinch-zoom stays sharp
            unoptimized
            className="h-auto w-full rounded-md bg-white shadow-[0_1px_3px_rgba(0,0,0,0.12),0_8px_24px_-6px_rgba(0,0,0,0.18)]"
          />
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-5 flex w-fit items-center gap-1.5 rounded-full bg-hover px-4 py-2 text-[15px] font-medium text-accent"
          >
            <IconArrowUpRight className="h-4 w-4" />
            {dc.openTab}
          </a>
        </div>
      </div>
      </div>
    </Window>
  );
}
