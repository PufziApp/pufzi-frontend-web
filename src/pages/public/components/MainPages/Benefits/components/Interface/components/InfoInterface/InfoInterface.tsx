import { Stack, Typography } from '@mui/material'
import type { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

type InfoInterfaceProps = {
  icon?: ReactNode
  description: string
}

export const InfoInterface: FC<InfoInterfaceProps> = ({ icon, description }) => {
  const { t } = useTranslation('Benefits')

  return (
    <Stack
      direction="row"
      sx={{
        width: '100%',

        minWidth: 0,

        alignItems: 'center',

        mt: {
          xs: 2,
          sm: 2.5,
          md: 3,
        },
      }}
    >
      {icon && (
        <Stack
          sx={{
            width: {
              xs: 42,
              sm: 46,
              md: 48,
            },

            height: {
              xs: 42,
              sm: 46,
              md: 48,
            },

            flexShrink: 0,

            alignItems: 'center',

            justifyContent: 'center',

            bgcolor: 'primary.light',

            borderRadius: {
              xs: 1.5,
              md: 1,
            },

            mr: {
              xs: 1.5,
              sm: 2,
            },

            '& svg': {
              color: 'primary.main',

              fontSize: {
                xs: 22,
                sm: 24,
                md: 26,
              },
            },
          }}
        >
          {icon}
        </Stack>
      )}

      <Typography
        variant="body1"
        sx={{
          minWidth: 0,

          color: 'text.secondary',

          fontWeight: 500,

          lineHeight: 1.5,

          fontSize: {
            xs: '0.95rem',
            sm: '1rem',
          },

          textAlign: 'left',

          overflowWrap: 'break-word',
        }}
      >
        {t(description)}
      </Typography>
    </Stack>
  )
}
