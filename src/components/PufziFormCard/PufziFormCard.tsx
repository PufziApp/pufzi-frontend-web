import { Stack, type StackProps } from '@mui/material'
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
        bgcolor: 'transparent',
        backdropFilter: 'blur(35px)',
        borderRadius: 2,
        p: {
          xs: 3,
          sm: 4,
          md: 5,
        },
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
        border: '1.5px solid',
        borderColor: formBorderColor,
        ...sx,
      }}
    >
      {children}
    </Stack>
  )
}
