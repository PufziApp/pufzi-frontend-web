import { Box } from '@mui/material'

import clientRegisterPageBackgroundOrange from '../../../../assets/clientRegisterPageBackgroundOrange.png'
import clientRegisterPageBackgroundGreen from '../../../../assets/clientRegisterPageBackgroundGreen.png'

import { useAppTheme } from '../../../../theme/useAppTheme'
import { ClientRegisterForm } from './components/ClientRegisterForm'

export const ClientRegisterPage = () => {
  const { themeColor } = useAppTheme()

  const backgroundImage =
    themeColor === 'orange' ? clientRegisterPageBackgroundOrange : clientRegisterPageBackgroundGreen

  return (
    <Box
      sx={{
        minHeight: '100dvh',

        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        display: 'grid',

        gridTemplateColumns: {
          xs: '1fr',
          md: '1fr 1fr',
        },

        alignItems: 'center',

        px: {
          xs: 2,
          sm: 4,
          md: 3,
          lg: 4,
        },

        py: {
          xs: 3,
          md: 4,
        },
      }}
    >
      {/* LEFT SIDE - empty, background stays visible */}
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      />

      {/* RIGHT SIDE */}
      <Box
        sx={{
          width: '100%',

          display: 'flex',

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ClientRegisterForm />
      </Box>
    </Box>
  )
}
