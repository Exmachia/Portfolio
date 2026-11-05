"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type { AppId } from "@/lib/desktop-content";

// Per-app state that survives minimize/restore and can be set by deep links
// (e.g. /proyectos/geest opens Figma on that page).
export type WinProps = {
  project?: string;
  chat?: string;
  tab?: "experience" | "tools" | "skills";
};

export type WinState = {
  id: AppId;
  z: number;
  minimized: boolean;
  maximized: boolean;
  // null = default centered position (pure CSS, so it also renders on the
  // server); set once the window is dragged.
  pos: { x: number; y: number } | null;
  // null = the app's default size (CSS); set once the user resizes.
  size: { w: number; h: number } | null;
  props: WinProps;
  cascade: number;
};

type State = {
  wins: Partial<Record<AppId, WinState>>;
  top: number;
  focused: AppId | null;
  // Incremented whenever an app launches from closed, so the dock can bounce.
  launches: Partial<Record<AppId, number>>;
};

type Action =
  | { type: "open"; id: AppId; props?: WinProps }
  | { type: "close"; id: AppId }
  | { type: "minimize"; id: AppId }
  | { type: "toggleMax"; id: AppId }
  | { type: "focus"; id: AppId }
  | { type: "move"; id: AppId; pos: { x: number; y: number } }
  | {
      type: "resize";
      id: AppId;
      rect: { x: number; y: number; w: number; h: number };
    }
  | { type: "setProps"; id: AppId; props: WinProps };

function nextFocus(wins: State["wins"]): AppId | null {
  let best: WinState | null = null;
  for (const w of Object.values(wins)) {
    if (w && !w.minimized && (!best || w.z > best.z)) best = w;
  }
  return best ? best.id : null;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "open": {
      const existing = state.wins[action.id];
      const z = state.top + 1;
      if (existing) {
        return {
          ...state,
          top: z,
          focused: action.id,
          wins: {
            ...state.wins,
            [action.id]: {
              ...existing,
              z,
              minimized: false,
              props: { ...existing.props, ...action.props },
            },
          },
        };
      }
      const cascade = Object.keys(state.wins).length % 6;
      return {
        ...state,
        top: z,
        focused: action.id,
        launches: {
          ...state.launches,
          [action.id]: (state.launches[action.id] ?? 0) + 1,
        },
        wins: {
          ...state.wins,
          [action.id]: {
            id: action.id,
            z,
            minimized: false,
            // Figma opens expanded; the zoom button shrinks it to its normal size.
            maximized: action.id === "figma",
            pos: null,
            size: null,
            props: action.props ?? {},
            cascade,
          },
        },
      };
    }
    case "close": {
      const wins = { ...state.wins };
      delete wins[action.id];
      return { ...state, wins, focused: nextFocus(wins) };
    }
    case "minimize": {
      const w = state.wins[action.id];
      if (!w) return state;
      const wins = { ...state.wins, [action.id]: { ...w, minimized: true } };
      return { ...state, wins, focused: nextFocus(wins) };
    }
    case "toggleMax": {
      const w = state.wins[action.id];
      if (!w) return state;
      return {
        ...state,
        wins: { ...state.wins, [action.id]: { ...w, maximized: !w.maximized } },
      };
    }
    case "focus": {
      const w = state.wins[action.id];
      if (!w || state.focused === action.id) return state;
      const z = state.top + 1;
      return {
        ...state,
        top: z,
        focused: action.id,
        wins: { ...state.wins, [action.id]: { ...w, z } },
      };
    }
    case "move": {
      const w = state.wins[action.id];
      if (!w) return state;
      return {
        ...state,
        wins: { ...state.wins, [action.id]: { ...w, pos: action.pos } },
      };
    }
    case "resize": {
      const w = state.wins[action.id];
      if (!w) return state;
      const { x, y, w: width, h: height } = action.rect;
      return {
        ...state,
        wins: {
          ...state.wins,
          [action.id]: { ...w, pos: { x, y }, size: { w: width, h: height } },
        },
      };
    }
    case "setProps": {
      const w = state.wins[action.id];
      if (!w) return state;
      return {
        ...state,
        wins: {
          ...state.wins,
          [action.id]: { ...w, props: { ...w.props, ...action.props } },
        },
      };
    }
  }
}

type WMContextValue = {
  wins: State["wins"];
  focused: AppId | null;
  launches: State["launches"];
  open: (id: AppId, props?: WinProps) => void;
  close: (id: AppId) => void;
  minimize: (id: AppId) => void;
  toggleMax: (id: AppId) => void;
  focus: (id: AppId) => void;
  move: (id: AppId, pos: { x: number; y: number }) => void;
  resize: (
    id: AppId,
    rect: { x: number; y: number; w: number; h: number },
  ) => void;
  setProps: (id: AppId, props: WinProps) => void;
};

const WMContext = createContext<WMContextValue | null>(null);

export type InitialWindow = { app: AppId; props?: WinProps };

export function WMProvider({
  initial,
  children,
}: {
  initial?: InitialWindow;
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, undefined, (): State => {
    const base: State = { wins: {}, top: 0, focused: null, launches: {} };
    return initial
      ? reducer(base, { type: "open", id: initial.app, props: initial.props })
      : base;
  });

  const open = useCallback(
    (id: AppId, props?: WinProps) => dispatch({ type: "open", id, props }),
    [],
  );
  const close = useCallback((id: AppId) => dispatch({ type: "close", id }), []);
  const minimize = useCallback(
    (id: AppId) => dispatch({ type: "minimize", id }),
    [],
  );
  const toggleMax = useCallback(
    (id: AppId) => dispatch({ type: "toggleMax", id }),
    [],
  );
  const focus = useCallback((id: AppId) => dispatch({ type: "focus", id }), []);
  const move = useCallback(
    (id: AppId, pos: { x: number; y: number }) =>
      dispatch({ type: "move", id, pos }),
    [],
  );
  const resize = useCallback(
    (id: AppId, rect: { x: number; y: number; w: number; h: number }) =>
      dispatch({ type: "resize", id, rect }),
    [],
  );
  const setProps = useCallback(
    (id: AppId, props: WinProps) => dispatch({ type: "setProps", id, props }),
    [],
  );

  const value = useMemo(
    () => ({
      wins: state.wins,
      focused: state.focused,
      launches: state.launches,
      open,
      close,
      minimize,
      toggleMax,
      focus,
      move,
      resize,
      setProps,
    }),
    [state, open, close, minimize, toggleMax, focus, move, resize, setProps],
  );

  return <WMContext.Provider value={value}>{children}</WMContext.Provider>;
}

export function useWM() {
  const ctx = useContext(WMContext);
  if (!ctx) throw new Error("useWM must be used within a WMProvider");
  return ctx;
}
