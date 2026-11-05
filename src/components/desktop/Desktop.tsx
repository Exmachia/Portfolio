"use client";

import { useEffect, type ComponentType } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent, type AppId } from "@/lib/desktop-content";
import { AppIcon, PdfFileIcon } from "@/components/desktop/AppIcons";
import { DeskObjects } from "@/components/desktop/DeskObjects";
import { DesktopFile } from "@/components/desktop/DesktopFile";
import { Dock } from "@/components/desktop/Dock";
import { MenuBar } from "@/components/desktop/MenuBar";
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
  const { locale } = useLocale();
  const dc = desktopContent[locale];
  const { open } = useWM();

  return (
    <div className="pointer-events-none absolute inset-0 pt-11 md:pt-7">
      <div className="relative flex min-h-full flex-col px-6 pt-8 pb-16 md:block md:min-h-0 md:px-0 md:pt-0 md:pb-0">
        <DesktopFile
          id="cv"
          label={dc.preview.fileName}
          icon={<PdfFileIcon className="h-[60px] w-[60px] drop-shadow-lg" />}
          onOpen={() => open("preview")}
          defaultClassName="top-4 right-5"
        />

        <ul className="pointer-events-auto grid grid-cols-4 gap-x-3 gap-y-6 md:hidden">
          {MOBILE_APPS.map((id) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => open(id)}
                className="flex w-full flex-col items-center gap-1.5"
              >
                <span className="h-[62px] w-[62px] drop-shadow-lg">
                  <AppIcon id={id} />
                </span>
                <span className="rounded-md bg-black/55 px-1.5 py-0.5 text-[11px] font-medium whitespace-nowrap text-white">
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

function Shell() {
  const { wins } = useWM();
  useUrlSync();

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
