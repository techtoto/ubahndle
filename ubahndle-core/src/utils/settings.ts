import {
  loadSettingsFromLocalStorage,
  saveSettingsToLocalStorage,
} from './localStorage'

const { matches: darkMode } = window.matchMedia("(prefers-color-scheme: dark)")

export const defaultSettings = {
  display: {
    showAnswerStatusBadges: false,
    darkMode,
  }
}

export type Settings = typeof defaultSettings;

export function saveSettings(gameSettings: Settings) {
  saveSettingsToLocalStorage(gameSettings);
}

export function loadSettings(): Settings {
  return loadSettingsFromLocalStorage() || defaultSettings;
}
