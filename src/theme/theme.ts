import { createTheme } from '@mui/material/styles'

import { orangeColors, sageColors } from './colors'

export type ThemeColor = 'orange' | 'sage'
export type ThemeMode = 'light' | 'dark'

const themes = {
  orange: orangeColors,
  sage: sageColors,
}

export const getTheme = (themeColor: ThemeColor, mode: ThemeMode) => {
  const colors = themes[themeColor][mode]

  return createTheme({
    palette: {
      mode,

      primary: {
        main: colors.primary.main,
        contrastText: colors.primary.contrastText,
        light: colors.primary.light,
      },

      secondary: {
        main: colors.secondary.main,
        contrastText: colors.secondary.contrastText,
      },

      background: {
        default: colors.background.default,
        paper: colors.background.paper,
      },

      text: {
        primary: colors.text.primary,
        secondary: colors.text.secondary,
        disabled: colors.text.disabled,
      },

      success: {
        main: colors.success.main,
      },

      warning: {
        main: colors.warning.main,
      },

      error: {
        main: colors.error.main,
      },

      info:
        'info' in colors
          ? {
              main: colors.info.main,
            }
          : undefined,

      divider: colors.divider,

      action: {
        hover: colors.action.hover,
        selected: colors.action.selected,
      },
    },

    shape: {
      borderRadius: 14,
    },

    typography: {
      fontFamily: '"Inter", sans-serif',

      h1: {
        fontFamily: '"Nunito", sans-serif',
        fontWeight: 900,
      },

      h2: {
        fontFamily: '"Nunito", sans-serif',
        fontWeight: 800,
      },

      h3: {
        fontFamily: '"Nunito", sans-serif',
        fontWeight: 700,
      },

      h4: {
        fontFamily: '"Nunito", sans-serif',
        fontWeight: 700,
      },

      h5: {
        fontFamily: '"Nunito", sans-serif',
        fontWeight: 600,
      },

      h6: {
        fontFamily: '"Nunito", sans-serif',
        fontWeight: 600,
      },

      button: {
        fontFamily: '"Nunito", sans-serif',
        fontWeight: 700,
        textTransform: 'none',
      },

      body1: {
        fontFamily: '"Inter", sans-serif',
      },

      body2: {
        fontFamily: '"Inter", sans-serif',
      },

      caption: {
        fontFamily: '"Inter", sans-serif',
      },

      overline: {
        fontFamily: '"Inter", sans-serif',
      },

      subtitle1: {
        fontFamily: '"Inter", sans-serif',
      },

      subtitle2: {
        fontFamily: '"Inter", sans-serif',
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: '"Inter", sans-serif',
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.06)',
            border: `1px solid ${theme.palette.divider}`,
          }),
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 14,
            textTransform: 'none',
            fontFamily: '"Nunito", sans-serif',
            fontWeight: 700,
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 99,
          },
        },
      },

      MuiInputBase: {
        styleOverrides: {
          root: {
            fontFamily: '"Inter", sans-serif',
          },
        },
      },

      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily: '"Inter", sans-serif',
          },
        },
      },

      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontFamily: '"Inter", sans-serif',
          },
        },
      },
    },
  })
}
