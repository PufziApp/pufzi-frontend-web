import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { INFO_INTERFACE } from './types/types.info'
import { InfoInterface } from './components/InfoInterface/InfoInterface'

import demoDashboard from '../../../../../../../assets/demoDashboard.png'

export const Interface = () => {
  const { t } = useTranslation('Benefits')

  return (
    <Box
      sx={{
        width: '100%',

        maxWidth: '1600px',

        minWidth: 0,

        mx: 'auto',

        pt: {
          xs: 4,
          sm: 5,
          md: 6,
        },

        px: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 6,
          xl: 8,
        },

        boxSizing: 'border-box',

        display: 'grid',

        gridTemplateColumns: {
          xs: 'minmax(0, 1fr)',
          md: 'repeat(2, minmax(0, 1fr))',
        },

        gap: {
          xs: 4,
          sm: 5,
          md: 6,
          lg: 8,
        },

        alignItems: 'center',
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          width: '100%',

          minWidth: 0,

          display: 'flex',

          alignItems: 'center',

          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={demoDashboard}
          alt="Demo Dashboard"
          sx={{
            display: 'block',

            width: '100%',

            maxWidth: {
              xs: 520,
              sm: 650,
              md: '100%',
            },

            height: 'auto',

            border: '1px solid',

            borderColor: 'text.primary',

            borderRadius: {
              xs: '14px',
              sm: '18px',
              md: '20px',
            },

            objectFit: 'contain',

            animation: {
              xs: 'none',
              md: 'floating 7s ease-in-out infinite',
            },

            '@keyframes floating': {
              '0%': {
                transform: 'translateY(0px) rotate(0deg)',
              },

              '25%': {
                transform: 'translateY(-12px) rotate(2deg)',
              },

              '50%': {
                transform: 'translateY(0px) rotate(0deg)',
              },

              '75%': {
                transform: 'translateY(-12px) rotate(-2deg)',
              },

              '100%': {
                transform: 'translateY(0px) rotate(0deg)',
              },
            },
          }}
        />
      </Box>

      {/* INFO */}
      <Stack
        sx={{
          width: '100%',

          minWidth: 0,

          alignItems: {
            xs: 'center',
            md: 'flex-start',
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,

            width: '100%',

            textAlign: {
              xs: 'center',
              md: 'left',
            },

            fontSize: {
              xs: '1.35rem',
              sm: '1.5rem',
              md: '1.65rem',
            },

            lineHeight: 1.3,

            overflowWrap: 'break-word',
          }}
        >
          {t('interface.dashboard.title')}
        </Typography>

        <Stack
          sx={{
            width: '100%',

            mt: {
              xs: 1,
              sm: 1.5,
            },
          }}
        >
          {INFO_INTERFACE.map((inter, index) => (
            <InfoInterface key={index} icon={inter.icon} description={inter.description} />
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}
