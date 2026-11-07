import Image from "next/image";
import { SkeletonImage } from "@/components/SkeletonImage";
import type { AppId } from "@/lib/desktop-content";

const ICON_SRC: Partial<Record<AppId, string>> = {
  finder: "/icons/finder.webp",
  figma: "/icons/figma.webp",
  claude: "/icons/claude.webp",
  notion: "/icons/notion.webp",
  photobooth: "/icons/photobooth.webp",
  contacts: "/icons/contacts.webp",
  preview: "/icons/preview.webp",
  trash: "/icons/trash.webp",
};

export function AppIcon({
  id,
  className = "h-full w-full",
}: {
  id: AppId;
  className?: string;
}) {
  const src = ICON_SRC[id];
  if (!src) return null;

  // The trash can is a free-standing object, not an app tile: no squircle.
  if (id === "trash") {
    return (
      <Image
        src={src}
        alt=""
        width={256}
        height={256}
        unoptimized
        className={`object-contain ${className}`}
      />
    );
  }

  // Notion's logo ships without a tile, so it gets a white squircle like the
  // other apps. The rest are masked to the same corner radius.
  if (id === "notion") {
    return (
      <span
        className={`block overflow-hidden rounded-[23%] bg-white p-[13%] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_0_0_0.5px_rgba(0,0,0,0.12)] ${className}`}
      >
        <Image src={src} alt="" width={160} height={160} unoptimized className="h-full w-full object-contain" />
      </span>
    );
  }
  return (
    <Image
      src={src}
      alt=""
      width={256}
      height={256}
      unoptimized
      className={`rounded-[23%] object-cover ${className}`}
    />
  );
}

// A PDF document icon for the desktop file.
export function PdfFileIcon({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M14 6h27l11 11v38a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z"
        fill="#fff"
        stroke="#c9ced6"
        strokeWidth="1.5"
      />
      <path d="M41 6v8a3 3 0 0 0 3 3h8z" fill="#e6e9ee" stroke="#c9ced6" strokeWidth="1.5" />
      <rect x="17" y="34" width="30" height="13" rx="3" fill="#e5484d" />
      <text
        x="32"
        y="44"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="700"
        fill="#fff"
        fontFamily="ui-sans-serif, system-ui"
      >
        PDF
      </text>
      <path d="M18 22h18M18 27h24" stroke="#d3d8df" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// A Figma file on the desktop: its cover as a Quick Look-style thumbnail,
// with the Figma badge in the corner.
export function FigFileIcon({ src }: { src: string }) {
  return (
    <span className="relative block h-[80px] w-[112px]">
      <span className="absolute inset-x-0 top-[8px] block h-[63px] overflow-hidden rounded-[6px] bg-white shadow-[0_0_0_2px_#fff,0_0_0_2.5px_rgba(0,0,0,0.12),0_6px_14px_rgba(0,0,0,0.3)]">
        <SkeletonImage src={src} alt="" fill sizes="224px" className="object-cover" />
      </span>
      <span className="absolute -right-2 -bottom-0.5 block h-[28px] w-[28px] drop-shadow-md">
        <AppIcon id="figma" />
      </span>
    </span>
  );
}
