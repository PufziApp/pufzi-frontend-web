import { Box } from '@mui/material'
import { Hero } from './components/Hero/Hero'
import { MainPages } from './components/MainPages/MainPages'

export const LandingPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Hero />
      <MainPages />
    </Box>
  )
}
