import { alpha, Stack, type StackProps } from '@mui/material'
import { useAppTheme } from '../../theme/useAppTheme'

type PufziFormCardProps = StackProps

export const PufziFormCard = ({ children, sx, ...props }: PufziFormCardProps) => {
  const { themeColor } = useAppTheme()

  const formBorderColor =
    themeColor === 'orange' ? 'rgba(249, 115, 22, 0.3)' : 'rgba(107, 143, 113, 0.3)'

  return (
    <Stack
      {...props}
      sx={{
        width: {
          xs: '100%',
          sm: 440,
          md: 480,
        },

        maxWidth: '100%',

        bgcolor: (theme) =>
          theme.palette.mode === 'dark'
            ? alpha(theme.palette.background.paper, 0.92)
            : 'transparent',

        backdropFilter: (theme) => (theme.palette.mode === 'dark' ? 'blur(22px)' : 'blur(35px)'),

        WebkitBackdropFilter: (theme) =>
          theme.palette.mode === 'dark' ? 'blur(22px)' : 'blur(35px)',

        borderRadius: 2,

        p: {
          xs: 3,
          sm: 4,
          md: 5,
        },

        border: '1.5px solid',

        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? alpha(theme.palette.primary.main, 0.45) : formBorderColor,

        boxShadow: (theme) =>
          theme.palette.mode === 'dark'
            ? `
                0 24px 60px rgba(0, 0, 0, 0.38),
                0 0 0 1px ${alpha(theme.palette.primary.main, 0.05)}
              `
            : '0 20px 50px rgba(0, 0, 0, 0.15)',

        color: 'text.primary',

        ...sx,
      }}
    >
      {children}
    </Stack>
  )
}
