import { createContext } from 'react'

import type { ThemeColor, ThemeMode } from './theme'

export type ThemeContextType = {
  mode: ThemeMode
  themeColor: ThemeColor

  toggleMode: () => void
  setMode: (mode: ThemeMode) => void
  setThemeColor: (color: ThemeColor) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
