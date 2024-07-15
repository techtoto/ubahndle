import { createContext, FC, useContext } from "react"
import { Game } from "./game/Game"
import { SettingsProvider } from "./settings"
import 'maplibre-gl/dist/maplibre-gl.css';

export const DataContext = createContext<{
  routes: Record<string, any>,
  stations: Record<string, any>,
  shapes: Record<string, any>,
  answers: Record<string, any>,
  solutions: Record<string, any>,
}>({
  routes: {},
  stations: {},
  shapes: {},
  answers: {},
  solutions: {},
})

export function useData() {
  return useContext(DataContext);
}

export { initI18n } from "./i18n"

export { TrainGrid, Train } from "./components/about/TrainGrid"

export * from "./utils/settings"
export * from "./utils/localStorage"
export { AnswerValidator, type Guess, todayGameIndex } from "./utils/answerValidator"
export * from "./utils/stats"

export { AboutModal } from "./components/about/AboutModal"

type GameOptions = {
  data: {
    routes: Record<string, any>,
    stations: Record<string, any>,
    shapes: Record<string, any>,
    solutions: Record<string, any>,
    answers: Record<string, any>,
  },
  AboutComponent: FC<{ open: boolean, handleClose: () => void }>,
  initialMapSettings: {
    latitude: number,
    longitude: number,
    zoom: number,
  }
};

export const MapContext = createContext({
  latitude: 0,
  longitude: 0,
  zoom: 0
});

export function GameWrapper({ AboutComponent, data, initialMapSettings }: GameOptions) {
  return <DataContext.Provider value={data}>
    <SettingsProvider>
      <MapContext.Provider value={initialMapSettings}>
        <Game about={AboutComponent} />
      </MapContext.Provider>
    </SettingsProvider>
  </DataContext.Provider>
}
