import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../pages/public/components/Navbar/Navbar'
import { Footer } from '../pages/public/components/Footer/Footer'

export const PublicLayout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />

      <Box
        component="main"
        sx={{
          flex: 1,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
