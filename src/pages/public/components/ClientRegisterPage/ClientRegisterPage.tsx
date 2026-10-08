import { Box } from '@mui/material'

import clientRegisterPageBackgroundOrange from '../../../../assets/clientRegisterPageBackgroundOrange.png'
import clientRegisterPageBackgroundGreen from '../../../../assets/clientRegisterPageBackgroundGreen.png'
import darkClientRegisterPageBackgroundOrange from '../../../../assets/darkClientRegisterPageBackgroundOrange.png'
import darkClientRegisterPageBackgroundGreen from '../../../../assets/darkClientRegisterPageBackgroundGreen.png'

import { useAppTheme } from '../../../../theme/useAppTheme'
import { ClientRegisterForm } from './components/ClientRegisterForm'

export const ClientRegisterPage = () => {
  const { themeColor, mode } = useAppTheme()

  const backgroundImage = () => {
    if (themeColor === 'orange' && mode === 'light') {
      return clientRegisterPageBackgroundOrange
    } else if (themeColor === 'orange' && mode === 'dark') {
      return darkClientRegisterPageBackgroundOrange
    } else if (themeColor === 'sage' && mode === 'light') {
      return clientRegisterPageBackgroundGreen
    } else if (themeColor === 'sage' && mode === 'dark') {
      return darkClientRegisterPageBackgroundGreen
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100dvh',

        backgroundImage: `url(${backgroundImage()})`,
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
