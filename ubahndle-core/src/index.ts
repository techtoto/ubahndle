import { createContext } from "react"

export { TrainLabel } from "./components/TrainLabel"
export { Stats } from "./components/stats/Stats"
export { StatsHistogram } from "./components/stats/StatsHistogram"
export { StatsModal } from "./components/stats/StatsModal"

export const RoutesContext = createContext<Record<string, any>>({})
