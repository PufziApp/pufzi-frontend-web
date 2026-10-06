import { Stack } from '@mui/material'

import { useAppTheme } from '../../../../theme/useAppTheme'
import { RegisterForm } from './RegisterForm/RegisterForm'

import registerPageBackgroundGreen from '../../../../assets/registerPageBackgroundGreen.png'
import registerPageBackgroundOrange from '../../../../assets/registerPageBackgroundOrange.png'
import darkRegisterPageBackgroundOrange from '../../../../assets/darkRegisterPageBackgroundOrange.png'
import darkRegisterPageBackgroundGreen from '../../../../assets/darkRegisterPageBackgroundGreen.png'

export const RegisterPage = () => {
  const { themeColor, mode } = useAppTheme()

  const backgroundImage = () => {
    if (themeColor === 'orange' && mode === 'light') {
      return registerPageBackgroundGreen
    } else if (themeColor === 'orange' && mode === 'dark') {
      return darkRegisterPageBackgroundOrange
    } else if (themeColor === 'sage' && mode === 'light') {
      return registerPageBackgroundOrange
    } else if (themeColor === 'sage' && mode === 'dark') {
      return darkRegisterPageBackgroundGreen
    }
  }

  return (
    <Stack
      sx={{
        minHeight: '100vh',
        width: '100%',
        justifyContent: 'center',

        backgroundImage: `url(${backgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        px: {
          xs: 2,
          sm: 4,
          md: 8,
          lg: 10,
        },

        py: {
          xs: 2,
          md: 4,
        },
      }}
    >
      <RegisterForm />
    </Stack>
  )
}
