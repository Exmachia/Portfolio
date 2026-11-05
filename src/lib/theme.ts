"use client";

import { useCallback, useEffect, useState } from "react";

export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    // The inline init script already set data-theme before hydration; this
    // just syncs React's state with it.
    const current = document.documentElement.getAttribute("data-theme");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(current === "dark" ? "dark" : "light");
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem("theme", next);
    } catch {}
  }, []);

  return { theme, setTheme };
}
