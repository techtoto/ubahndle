import { Settings } from "./settings";

const gameStateKey = 'gameState';

export const saveGameStateToLocalStorage = (gameState: any) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey)
  return state ? (JSON.parse(state)) : null
}

const gameStatKey = 'gameStats'

export const saveStatsToLocalStorage = (gameStats: any) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats)) : null
}

export const isNewToGame = () => {
  return !(localStorage.getItem(gameStateKey) || localStorage.getItem(gameStatKey));
}

const gameSettingsKey = 'gameSettings'

export const saveSettingsToLocalStorage = (gameSettings: Settings) => {
  localStorage.setItem(gameSettingsKey, JSON.stringify(gameSettings))
}

export const loadSettingsFromLocalStorage = () => {
  const settings = localStorage.getItem(gameSettingsKey)
  return settings ? (JSON.parse(settings)) : null
}
