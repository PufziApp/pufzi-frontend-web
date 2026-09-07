import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      heroCard: string
      decoration: string
      border: string
    }
  }

  interface PaletteOptions {
    custom?: {
      heroCard: string
      decoration: string
      border: string
    }
  }
}
