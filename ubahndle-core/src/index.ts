import { createContext, useContext } from "react"

export { TrainLabel } from "./components/TrainLabel"
export { Stats } from "./components/stats/Stats"
export { StatsHistogram } from "./components/stats/StatsHistogram"
export { StatsModal } from "./components/stats/StatsModal"

export const RoutesContext = createContext<Record<string, any>>({})

export { initI18n } from "./i18n"

export const DarkModeContext = createContext<boolean>(true);
export function useDarkMode(): boolean {
  return useContext(DarkModeContext);
}

export { TrainGrid, Train } from "./components/about/TrainGrid"

export * from "./utils/settings"
export * from "./utils/localStorage"

export { AboutModal } from "./components/about/AboutModal"

export { Keyboard } from "./components/keyboard/Keyboard"
