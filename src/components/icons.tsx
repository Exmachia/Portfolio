type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconArrowRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowLeft({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

export function IconArrowUpRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function IconDownload({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}

export function IconMail({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconMessageCircle({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 20c4.97 0 9-3.8 9-8.5S16.97 3 12 3 3 6.8 3 11.5c0 1.85.62 3.56 1.68 4.95L4 21l4.9-1.55c1 .36 2.08.55 3.1.55Z" />
    </svg>
  );
}

export function IconSearch({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function IconShield({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 5 6v6c0 4.2 3 7.6 7 9 4-1.4 7-4.8 7-9V6l-7-3Z" />
    </svg>
  );
}

export function IconLayers({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

export function IconScale({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3v18M7 21h10M5 7l-3 6a3.2 3.2 0 0 0 6 0l-3-6ZM19 7l-3 6a3.2 3.2 0 0 0 6 0l-3-6ZM5 7h14" />
    </svg>
  );
}

export function IconCheckCircle({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 5-5" />
    </svg>
  );
}

export function IconSparkle({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className} fill="currentColor" stroke="none">
      <path d="M11 2c.3 3.4 1 5.4 2.2 6.6C14.4 9.9 16.5 10.6 20 11c-3.5.4-5.6 1.1-6.8 2.4C12 14.6 11.3 16.6 11 20c-.3-3.4-1-5.4-2.2-6.6C7.6 12.1 5.5 11.4 2 11c3.5-.4 5.6-1.1 6.8-2.4C10 7.4 10.7 5.4 11 2Z" />
    </svg>
  );
}

export function IconStar({ className = "h-4 w-4", filled = false }: IconProps & { filled?: boolean }) {
  return (
    <svg
      {...base}
      className={className}
      fill={filled ? "currentColor" : "none"}
      strokeWidth={filled ? 0 : 1.75}
    >
      <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
    </svg>
  );
}

export function IconClose({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconLock({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export function IconLink({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 6.5 12.6 4.9a3.5 3.5 0 0 1 5 5L16 11.5" />
      <path d="M13 17.5 11.4 19.1a3.5 3.5 0 0 1-5-5L8 12.5" />
    </svg>
  );
}

export function IconTrendingUp({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

export function IconHamburger({
  open,
  className = "h-5 w-5",
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M4 6h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="transition-transform duration-300"
        style={{
          transformOrigin: "12px 12px",
          transform: open
            ? "translateY(6px) rotate(45deg)"
            : "translateY(0) rotate(0)",
        }}
      />
      <path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="transition-opacity duration-200"
        style={{ opacity: open ? 0 : 1 }}
      />
      <path
        d="M4 18h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="transition-transform duration-300"
        style={{
          transformOrigin: "12px 12px",
          transform: open
            ? "translateY(-6px) rotate(-45deg)"
            : "translateY(0) rotate(0)",
        }}
      />
    </svg>
  );
}

export function IconFilm({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M3 15h18M8 4v16M16 4v16" />
    </svg>
  );
}

export function IconPalette({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3a9 9 0 1 0 0 18c1 0 1.6-.6 1.6-1.4 0-.4-.15-.7-.4-1-.25-.3-.4-.6-.4-1 0-.8.6-1.4 1.4-1.4H16a4 4 0 0 0 4-4c0-5-3.6-9-8-9Z" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconMusic({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </svg>
  );
}

export function IconChef({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 9a3 3 0 0 1 1-5 3.5 3.5 0 0 1 4-1.5A3.5 3.5 0 0 1 16 4a3 3 0 0 1 1 5" />
      <path d="M7 9h10v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z" />
      <path d="M9 21v-8M15 21v-8" />
    </svg>
  );
}

export function IconDumbbell({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 7v10M17.5 7v10M2 10v4M22 10v4M4.5 8.5v7M19.5 8.5v7" />
      <path d="M6.5 12h11" />
    </svg>
  );
}

export function IconUsers({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
      <path d="M16 4.5c1.5.3 2.5 1.6 2.5 3.2 0 1.6-1 2.9-2.5 3.2M19 15.2c2 .4 3.5 1.8 3.5 3.8" />
    </svg>
  );
}

export function IconTarget({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconNotebook({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 3v18M13 8h4M13 12h4M13 16h3" />
    </svg>
  );
}

export function IconPencilLine({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20h16" />
      <path d="M14.5 4.5a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8L9 20H5v-4L14.5 4.5Z" />
    </svg>
  );
}
