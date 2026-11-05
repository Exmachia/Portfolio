import Image from "next/image";
import type { AppId } from "@/lib/desktop-content";

const ICON_SRC: Partial<Record<AppId, string>> = {
  finder: "/icons/finder.png",
  figma: "/icons/figma.png",
  claude: "/icons/claude.png",
  notion: "/icons/notion.webp",
  photobooth: "/icons/photobooth.png",
  contacts: "/icons/contacts.png",
  preview: "/icons/preview.png",
  trash: "/icons/trash.png",
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
