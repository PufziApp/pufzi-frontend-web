import { type ReactNode, useEffect, useMemo, useState } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { getTheme, type ThemeColor, type ThemeMode } from './theme'

import { ThemeContext } from './ThemeContext'

type Props = {
  children: ReactNode
}

export const AppThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('pufzi-mode')

    return saved === 'dark' ? 'dark' : 'light'
  })

  const [themeColor, setThemeColor] = useState<ThemeColor>(() => {
    const saved = localStorage.getItem('pufzi-theme-color')

    return saved === 'sage' ? 'sage' : 'orange'
  })

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    localStorage.setItem('pufzi-mode', mode)
  }, [mode])

  useEffect(() => {
    localStorage.setItem('pufzi-theme-color', themeColor)
  }, [themeColor])

  const theme = useMemo(() => getTheme(themeColor, mode), [themeColor, mode])

  return (
    <ThemeContext.Provider
      value={{
        mode,
        themeColor,
        toggleMode,
        setMode,
        setThemeColor,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
