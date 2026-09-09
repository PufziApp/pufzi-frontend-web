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
        height: '100%',
      }}
    >
      {stepIcon && (
        <Box
          sx={{
            width: 65,
            height: 65,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 3,
            bgcolor: 'primary.light',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.14)',
            mb: 3,
            flexShrink: 0,
            '& svg': {
              fontSize: 30,
              color: 'primary.main',
            },
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            '&:hover': {
              transform: 'translateY(-6px)',
              boxShadow: 2,
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
          letterSpacing: 2,
          minHeight: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
          minHeight: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
          minHeight: 90,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',

          maxWidth: 340,
        }}
      >
        {t(stepDescription)}
      </Typography>
    </Stack>
  )
}
