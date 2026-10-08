import { Divider, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { PacketInformation } from './PacketInformation'
import { PRICES_INFO } from '../types/prices.info'
import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'

export const PriceCard = () => {
  const { t } = useTranslation('Prices')

  return (
    <Stack
      sx={{
        bgcolor: 'primary.main',

        width: '100%',

        maxWidth: {
          xs: '100%',
          sm: 520,
          md: 560,
          lg: 600,
        },

        minWidth: 0,

        boxSizing: 'border-box',

        borderRadius: {
          xs: '22px',
          sm: '26px',
          md: '32px',
        },

        px: {
          xs: 2,
          sm: 2.5,
          md: 3,
        },

        py: {
          xs: 2,
          sm: 2.5,
          md: 3,
        },

        transition: 'transform 0.25s ease, box-shadow 0.25s ease',

        '@media (hover: hover)': {
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: 2,
          },
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: 'white',

          letterSpacing: {
            xs: 1.3,
            sm: 1.7,
            md: 2,
          },

          fontWeight: 700,

          mb: 0.5,

          fontSize: {
            xs: '0.9rem',
            sm: '0.95rem',
            md: '1rem',
          },
        }}
      >
        {t('priceCard.type')}
      </Typography>

      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={{
          xs: 0.25,
          sm: 1,
        }}
        sx={{
          alignItems: {
            xs: 'flex-start',
            sm: 'baseline',
          },

          mb: {
            xs: 1,
            sm: 0.5,
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'white',

            fontWeight: 900,

            fontSize: {
              xs: '2.2rem',
              sm: '2.6rem',
              md: '3rem',
            },

            lineHeight: 1.1,
          }}
        >
          {t('priceCard.price')}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: 'white',

            fontWeight: 400,

            fontSize: {
              xs: '1rem',
              sm: '1.2rem',
              md: '1.35rem',
            },
          }}
        >
          {t('priceCard.month')}
        </Typography>
      </Stack>

      <Typography
        variant="body1"
        sx={{
          color: 'white',

          opacity: 0.9,

          mb: {
            xs: 1.5,
            sm: 2,
          },

          fontSize: {
            xs: '0.95rem',
            sm: '1rem',
          },

          lineHeight: 1.5,
        }}
      >
        {t('priceCard.description')}
      </Typography>

      <Divider
        sx={{
          borderColor: 'rgba(255,255,255,0.35)',

          mb: {
            xs: 1.5,
            sm: 2,
          },
        }}
      />

      <Stack
        spacing={{
          xs: 1,
          sm: 1.25,
        }}
      >
        {PRICES_INFO.map((info, index) => (
          <PacketInformation key={index} info={info.info} />
        ))}
      </Stack>

      <Stack
        sx={{
          mt: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          width: '100%',
        }}
      >
        <PufziButton
          component={Link}
          to="/register"
          label={t('priceCard.button')}
          sx={{
            width: '100%',

            bgcolor: 'background.paper',

            color: 'primary.main',

            py: {
              xs: 1.1,
              sm: 1.2,
            },

            borderRadius: {
              xs: '14px',
              sm: '16px',
            },

            fontWeight: 800,

            fontSize: {
              xs: 16,
              sm: 17,
              md: 18,
            },

            minHeight: {
              xs: 48,
              sm: 50,
            },

            '&:hover': {
              bgcolor: 'background.paper',
              opacity: 0.95,
            },
          }}
        />
      </Stack>
    </Stack>
  )
}
