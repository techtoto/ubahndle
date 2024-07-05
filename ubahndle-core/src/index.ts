import { createContext } from "react"

export { TrainLabel } from "./components/TrainLabel"

export const RoutesContext = createContext<Record<string, any>>({})
