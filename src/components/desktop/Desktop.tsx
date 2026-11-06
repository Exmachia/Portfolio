"use client";

import { useEffect, type ComponentType } from "react";
import { useLocale } from "@/lib/locale-context";
import type { CaseStudy } from "@/lib/content";
import {
  desktopContent,
  featuredCaseStudies,
  isCaseStudyVisible,
  type AppId,
} from "@/lib/desktop-content";
import {
  AppIcon,
  FigFileIcon,
  PdfFileIcon,
} from "@/components/desktop/AppIcons";
import { DeskObjects } from "@/components/desktop/DeskObjects";
import { DesktopFile } from "@/components/desktop/DesktopFile";
import { Dock } from "@/components/desktop/Dock";
import { MenuBar } from "@/components/desktop/MenuBar";
import { SystemAlert } from "@/components/desktop/SystemAlert";
import { Wallpaper } from "@/components/desktop/Wallpaper";
import {
  WMProvider,
  useWM,
  type InitialWindow,
  type WinProps,
  type WinState,
} from "@/components/desktop/wm";
import { ClaudeApp } from "@/components/desktop/apps/ClaudeApp";
import { ContactsApp } from "@/components/desktop/apps/ContactsApp";
import { FigmaApp } from "@/components/desktop/apps/FigmaApp";
import { FinderApp } from "@/components/desktop/apps/FinderApp";
import { NotionApp } from "@/components/desktop/apps/NotionApp";
import { PhotoBoothApp } from "@/components/desktop/apps/PhotoBoothApp";
import { PreviewApp } from "@/components/desktop/apps/PreviewApp";
import { TrashApp } from "@/components/desktop/apps/TrashApp";

const APP_COMPONENTS: Record<AppId, ComponentType<{ win: WinState }>> = {
  finder: FinderApp,
  figma: FigmaApp,
  claude: ClaudeApp,
  notion: NotionApp,
  photobooth: PhotoBoothApp,
  contacts: ContactsApp,
  preview: PreviewApp,
  trash: TrashApp,
};

const MOBILE_APPS: AppId[] = [
  "figma",
  "claude",
  "notion",
  "finder",
  "contacts",
  "photobooth",
  "preview",
  "trash",
];

// Default spots for the .fig files, stacked under the CV (Tailwind needs the
// full class names written out).
const FIG_FILE_SLOTS = [
  "top-[128px] right-5",
  "top-[256px] right-5",
  "top-[384px] right-5",
  "top-[512px] right-5",
];

// Keeps the address bar shareable: the focused window decides the URL, and
// each URL also renders its window on the server (see the route pages).
function pathFor(id: AppId, props: WinProps): string {
  switch (id) {
    case "figma":
      return props.project ? `/proyectos/${props.project}` : "/proyectos";
    case "finder":
      return "/experiencia";
    case "claude":
      return "/como-trabajo";
    case "contacts":
      return "/";
    default:
      return "/";
  }
}

function useUrlSync() {
  const { wins, focused } = useWM();
  useEffect(() => {
    const w = focused ? wins[focused] : null;
    const path = w ? pathFor(w.id, w.props) : "/";
    if (window.location.pathname !== path) {
      window.history.replaceState(null, "", path);
    }
  }, [focused, wins]);
}

function DesktopLayer() {
  const { locale, t } = useLocale();
  const dc = desktopContent[locale];
  const { wins, open } = useWM();
  const figFiles = featuredCaseStudies
    .map((slug) => t.caseStudies.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy =>
      Boolean(c?.image && isCaseStudyVisible(c.slug)),
    );

  return (
    <div className="pointer-events-none absolute inset-0 pt-[calc(64px+env(safe-area-inset-top,0px))] md:pt-7">
      <div className="relative flex min-h-full flex-col px-6 pt-8 pb-40 md:block md:min-h-0 md:px-0 md:pt-0 md:pb-0">
        <DesktopFile
          id="cv"
          label={dc.preview.fileName}
          icon={<PdfFileIcon className="h-[60px] w-[60px] drop-shadow-lg" />}
          onOpen={() => open("preview")}
          defaultClassName="top-4 right-5"
        />
        {/* The featured projects as Figma files, in a column under the CV. */}
        {figFiles.map((c, i) => (
          <DesktopFile
            key={c.slug}
            id={`fig-${c.slug}`}
            label={`${c.title}.fig`}
            icon={<FigFileIcon src={c.image ?? ""} />}
            onOpen={() => open("figma", { project: c.slug })}
            defaultClassName={FIG_FILE_SLOTS[i]}
          />
        ))}

        <ul className="pointer-events-auto grid grid-cols-4 gap-x-3 gap-y-6 md:hidden">
          {MOBILE_APPS.map((id) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => open(id)}
                className="flex w-full flex-col items-center gap-1.5"
              >
                <span
                  className={`h-[62px] w-[62px] drop-shadow-lg ${
                    id === "figma" && !wins.figma ? "dock-nudge" : ""
                  }`}
                >
                  <AppIcon id={id} />
                </span>
                <span className="home-label text-[12px] font-medium whitespace-nowrap">
                  {dc.apps[id]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Keeps the phone's status bar the same color as what's right under it: the
// focused app's surface, or the desk on the home screen.
function useStatusBarColor() {
  const { wins, focused } = useWM();
  const appOpen = Object.values(wins).some((w) => w && !w.minimized);

  useEffect(() => {
    const apply = () => {
      const root = document.documentElement;
      const win = appOpen && focused
        ? document.querySelector(`.win[data-app="${focused}"]`)
        : null;
      const source = win ? getComputedStyle(win) : getComputedStyle(root);
      const color = source.getPropertyValue(win ? "--win" : "--desk-bg").trim();
      if (!color) return;
      let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "theme-color";
        document.head.appendChild(meta);
      }
      meta.content = color;
    };
    apply();
    // The theme toggle changes data-theme without touching React state here.
    const observer = new MutationObserver(apply);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, [appOpen, focused]);
}

function Shell() {
  const { wins } = useWM();
  useUrlSync();
  useStatusBarColor();

  return (
    <div className="fixed inset-0 overflow-hidden">
      <Wallpaper />
      <DeskObjects />
      <MenuBar />
      <DesktopLayer />
      {Object.values(wins).map((w) => {
        if (!w) return null;
        const App = APP_COMPONENTS[w.id];
        return <App key={w.id} win={w} />;
      })}
      <SystemAlert />
      <Dock />
    </div>
  );
}

export function Desktop({ initial }: { initial?: InitialWindow }) {
  return (
    <WMProvider initial={initial ?? { app: "contacts" }}>
      <Shell />
    </WMProvider>
  );
}
