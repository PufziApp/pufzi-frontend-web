import { Stack } from '@mui/material'
import { useAppTheme } from '../../../../theme/useAppTheme'

import loginPageBackgroundGreen from '../../../../assets/loginPageBackgroundGreen.png'
import loginPageBackgroundOrange from '../../../../assets/loginPageBackgroundOrange.png'

import { LoginForm } from './components/LoginForm/LoginForm'

export const LoginPage = () => {
  const { themeColor } = useAppTheme()

  const backgroundImage =
    themeColor === 'orange' ? loginPageBackgroundOrange : loginPageBackgroundGreen

  return (
    <Stack
      sx={{
        minHeight: '100vh',
        width: '100%',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImage})`,
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
