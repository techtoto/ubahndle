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

export const saveSettings = (gameSettings) => {
  saveSettingsToLocalStorage(gameSettings);
}

export const loadSettings = () => {
  return loadSettingsFromLocalStorage() || defaultSettings;
}