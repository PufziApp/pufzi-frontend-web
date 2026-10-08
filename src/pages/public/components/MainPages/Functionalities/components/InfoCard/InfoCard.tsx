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
      spacing={{
        xs: 1.5,
        sm: 1.75,
        md: 2,
      }}
      sx={{
        width: '100%',

        maxWidth: '100%',

        minWidth: 0,

        height: '100%',

        boxSizing: 'border-box',

        bgcolor: 'background.paper',

        border: '1px solid',

        borderColor: 'divider',

        borderRadius: {
          xs: '18px',
          sm: '22px',
          md: '25px',
        },

        p: {
          xs: 2,
          sm: 2.5,
          md: 3,
        },

        overflow: 'hidden',

        transition: 'transform 0.25s ease, box-shadow 0.25s ease',

        '@media (hover: hover)': {
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: 2,
          },
        },
      }}
    >
      {/* ICON */}
      {icon && (
        <Stack
          sx={{
            width: {
              xs: 44,
              sm: 48,
              md: 52,
            },

            height: {
              xs: 44,
              sm: 48,
              md: 52,
            },

            flexShrink: 0,

            alignItems: 'center',

            justifyContent: 'center',

            borderRadius: 3,

            color: resolvedColor,

            bgcolor: alpha(resolvedColor, 0.15),

            '& svg': {
              color: 'inherit',

              fontSize: {
                xs: 24,
                sm: 26,
                md: 28,
              },
            },
          }}
        >
          {icon}
        </Stack>
      )}

      {/* TITLE */}
      {title && (
        <Typography
          variant="h6"
          sx={{
            width: '100%',

            minWidth: 0,

            fontWeight: 800,

            color: 'text.primary',

            lineHeight: 1.25,

            overflowWrap: 'break-word',

            wordBreak: 'normal',

            fontSize: {
              xs: '1.05rem',
              sm: '1.1rem',
              md: '1.15rem',
              lg: '1.2rem',
            },
          }}
        >
          {t(title)}
        </Typography>
      )}

      {/* DESCRIPTION */}
      {description && (
        <Typography
          variant="body1"
          sx={{
            width: '100%',

            minWidth: 0,

            color: 'text.secondary',

            fontWeight: 500,

            lineHeight: 1.55,

            overflowWrap: 'break-word',

            wordBreak: 'normal',

            fontSize: {
              xs: '0.9rem',
              sm: '0.95rem',
              md: '1rem',
            },
          }}
        >
          {t(description)}
        </Typography>
      )}
    </Stack>
  )
}
