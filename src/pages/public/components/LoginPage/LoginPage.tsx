import { Stack } from '@mui/material'
import { useAppTheme } from '../../../../theme/useAppTheme'

import loginPageBackgroundGreen from '../../../../assets/loginPageBackgroundGreen.png'
import loginPageBackgroundOrange from '../../../../assets/loginPageBackgroundOrange.png'
import darkLoginPageBackgroundOrange from '../../../../assets/darkLoginPageBackgroundOrange.png'
import darkLoginPageBackgroundGreen from '../../../../assets/darkLoginPageBackgroundGreen.png'

import { LoginForm } from './components/LoginForm/LoginForm'

export const LoginPage = () => {
  const { themeColor, mode } = useAppTheme()

  const backgroundImage = () => {
    if (themeColor === 'orange' && mode === 'light') {
      return loginPageBackgroundOrange
    } else if (themeColor === 'orange' && mode === 'dark') {
      return darkLoginPageBackgroundOrange
    } else if (themeColor === 'sage' && mode === 'light') {
      return loginPageBackgroundGreen
    } else if (themeColor === 'sage' && mode === 'dark') {
      return darkLoginPageBackgroundGreen
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
          lg: 12,
        },
      }}
    >
      <LoginForm />
    </Stack>
  )
}
