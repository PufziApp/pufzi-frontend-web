import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import PetsRoundedIcon from '@mui/icons-material/PetsRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'

export const PlanCardHeader = () => {
  const { t } = useTranslation('Register')

  return (
    <Box
      sx={{
        position: 'relative',

        overflow: 'hidden',

        bgcolor: 'primary.main',

        color: 'primary.contrastText',

        px: 2.5,
        py: 2,
      }}
    >
      <PetsRoundedIcon
        sx={{
          position: 'absolute',

          top: -28,
          right: -18,

          fontSize: 150,

          color: 'primary.contrastText',

          opacity: 0.12,

          transform: 'rotate(-12deg)',

          pointerEvents: 'none',
        }}
      />

      <Stack
        direction="row"
        sx={{
          position: 'relative',

          zIndex: 1,

          alignItems: 'center',

          justifyContent: 'space-between',

          gap: 2,
        }}
      >
        <Stack
          spacing={0.6}
          sx={{
            minWidth: 0,
          }}
        >
          <Box
            sx={{
              width: 'fit-content',

              display: 'flex',
              alignItems: 'center',

              gap: 0.5,

              px: 1.1,
              py: 0.4,

              borderRadius: 999,

              bgcolor: 'rgba(255,255,255,0.18)',

              border: '1px solid rgba(255,255,255,0.35)',
            }}
          >
            <AutoAwesomeRoundedIcon
              sx={{
                fontSize: 13,
              }}
            />

            <Typography
              sx={{
                fontSize: 11.5,

                fontWeight: 800,

                lineHeight: 1,
              }}
            >
              {t('planStep.free')}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: {
                xs: 25,
                sm: 28,
              },

              fontWeight: 900,

              fontFamily: '"Nunito", sans-serif',

              lineHeight: 1,
            }}
          >
            {t('planStep.plan.title')}
          </Typography>

          <Typography
            sx={{
              fontSize: 12,

              fontWeight: 500,

              opacity: 0.9,

              lineHeight: 1.3,
            }}
          >
            {t('planStep.plan.subtitle')}
          </Typography>
        </Stack>

        <Stack
          sx={{
            alignItems: 'flex-end',

            flexShrink: 0,
          }}
        >
          <Stack
            direction="row"
            spacing={0.4}
            sx={{
              alignItems: 'baseline',
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: 28,
                  sm: 34,
                },

                fontWeight: 900,

                lineHeight: 1,

                whiteSpace: 'nowrap',

                fontFamily: '"Nunito", sans-serif',
              }}
            >
              {t('planStep.plan.price')}
            </Typography>

            <Typography
              sx={{
                fontSize: 14,

                fontWeight: 600,

                opacity: 0.9,
              }}
            >
              {t('planStep.plan.month')}
            </Typography>
          </Stack>

          <Typography
            sx={{
              mt: 0.3,

              fontSize: 11,

              opacity: 0.85,
            }}
          >
            {t('planStep.plan.free')}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
