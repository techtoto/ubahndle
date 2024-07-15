import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { defaultSettings, loadSettings, saveSettings, Settings } from "./utils/settings";

const SettingsContext = createContext<{ settings: Settings, setSettings: (settings: Settings) => void }>({
  settings: defaultSettings,
  setSettings: () => { },
});

export function useDarkMode(): boolean {
  return useSettings().settings.display.darkMode;
}

export function useSettings() {
  return useContext(SettingsContext)
}

export const SettingsProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const setSettings = (settings: Settings) => {
    setState({ ...state, settings });
  };
  const initState = {
    settings: loadSettings(),
    setSettings,
  }
  const [state, setState] = useState(initState);

  useEffect(() => saveSettings(state.settings), [state.settings]);

  return <SettingsContext.Provider value={state}>
    {children}
  </SettingsContext.Provider>
}
