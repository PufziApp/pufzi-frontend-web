import { Stack, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import type { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

type InfoCardProps = {
  icon?: ReactNode
  iconColor?: string
  title?: string
  description?: string
}

export const InfoCard: FC<InfoCardProps> = ({ icon, iconColor = '', title, description }) => {
  const theme = useTheme()
  const { t } = useTranslation('Functionalities')

  const resolveColor = (color: string) => {
    if (color.includes('.')) {
      const [paletteKey, shade] = color.split('.')

      const paletteColor = theme.palette[paletteKey as keyof typeof theme.palette]

      if (paletteColor && typeof paletteColor === 'object' && shade in paletteColor) {
        return paletteColor[shade as keyof typeof paletteColor] as string
      }
    }

    return color
  }

  const resolvedColor = resolveColor(iconColor)

  return (
    <Stack
      spacing={1}
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '25px',
        p: 2,
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 2,
        },
      }}
    >
      {icon && (
        <Stack
          sx={{
            width: 48,
            height: 48,
            flexShrink: 0,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 3,
            color: resolvedColor,
            bgcolor: alpha(resolvedColor, 0.15),
            '& svg': {
              color: 'inherit',
            },
          }}
        >
          {icon}
        </Stack>
      )}

      {title && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            color: 'text.primary',
            lineHeight: 1.25,
          }}
        >
          {t(title)}
        </Typography>
      )}

      {description && (
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            fontWeight: 500,
            lineHeight: 1.5,
          }}
        >
          {t(description)}
        </Typography>
      )}
    </Stack>
  )
}
