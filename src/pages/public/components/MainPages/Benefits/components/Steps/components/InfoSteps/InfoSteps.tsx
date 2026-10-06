import { Box, Stack, Typography } from '@mui/material'
import type { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

type StepsProps = {
  stepIcon: ReactNode
  stepName: string
  stepTitle: string
  stepDescription: string
}

export const InfoSteps: FC<StepsProps> = ({ stepIcon, stepName, stepTitle, stepDescription }) => {
  const { t } = useTranslation('Benefits')

  return (
    <Stack
      sx={{
        alignItems: 'center',

        justifyContent: 'flex-start',

        textAlign: 'center',

        width: '100%',

        maxWidth: '100%',

        minWidth: 0,

        height: '100%',

        boxSizing: 'border-box',
      }}
    >
      {stepIcon && (
        <Box
          sx={{
            width: {
              xs: 58,
              sm: 62,
              md: 65,
            },

            height: {
              xs: 58,
              sm: 62,
              md: 65,
            },

            display: 'flex',

            alignItems: 'center',

            justifyContent: 'center',

            borderRadius: 3,

            bgcolor: 'primary.light',

            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.14)',

            mb: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },

            flexShrink: 0,

            transition: 'transform 0.25s ease, box-shadow 0.25s ease',

            '@media (hover: hover)': {
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: 2,
              },
            },

            '& svg': {
              fontSize: {
                xs: 26,
                sm: 28,
                md: 30,
              },

              color: 'primary.main',
            },
          }}
        >
          {stepIcon}
        </Box>
      )}

      <Typography
        variant="body1"
        sx={{
          textTransform: 'uppercase',

          color: 'primary.main',

          fontWeight: 700,

          letterSpacing: {
            xs: 1.2,
            sm: 1.5,
            md: 2,
          },

          fontSize: {
            xs: '0.8rem',
            sm: '0.9rem',
            md: '1rem',
          },

          minHeight: {
            xs: 'auto',
            md: 30,
          },

          display: 'flex',

          alignItems: 'center',

          justifyContent: 'center',

          textAlign: 'center',

          overflowWrap: 'break-word',
        }}
      >
        {t(stepName)}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,

          color: 'text.primary',

          textAlign: 'center',

          mt: {
            xs: 0.5,
            sm: 0.75,
          },

          minHeight: {
            xs: 'auto',
            md: 64,
          },

          display: 'flex',

          alignItems: 'center',

          justifyContent: 'center',

          fontSize: {
            xs: '1.05rem',
            sm: '1.1rem',
            md: '1.15rem',
          },

          lineHeight: 1.3,

          overflowWrap: 'break-word',
        }}
      >
        {t(stepTitle)}
      </Typography>

      <Typography
        sx={{
          color: 'text.secondary',

          fontWeight: 500,

          textAlign: 'center',

          lineHeight: 1.6,

          mt: {
            xs: 1,
            sm: 1.25,
          },

          minHeight: {
            xs: 'auto',
            md: 90,
          },

          display: 'flex',

          alignItems: 'flex-start',

          justifyContent: 'center',

          width: '100%',

          maxWidth: {
            xs: 340,
            sm: 360,
          },

          fontSize: {
            xs: '0.95rem',
            sm: '1rem',
          },

          overflowWrap: 'break-word',
        }}
      >
        {t(stepDescription)}
      </Typography>
    </Stack>
  )
}
