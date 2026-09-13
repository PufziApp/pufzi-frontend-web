import { Divider, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
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
        maxWidth: 460,
        borderRadius: '32px',
        px: 3,
        py: 2.5,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 2,
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: 'white',
          letterSpacing: 2,
          fontWeight: 700,
          mb: 0.5,
        }}
      >
        {t('priceCard.type')}
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: 'baseline',
          mb: 0.5,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            fontWeight: 900,
          }}
        >
          {t('priceCard.price')}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: 'white',
            fontWeight: 400,
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
          mb: 1.5,
        }}
      >
        {t('priceCard.description')}
      </Typography>

      <Divider
        sx={{
          borderColor: 'rgba(255,255,255,0.35)',
          mb: 1.5,
        }}
      />

      <Stack spacing={1}>
        {PRICES_INFO.map((info, index) => (
          <PacketInformation key={index} info={info.info} />
        ))}
      </Stack>

      <Stack sx={{ mt: 2 }}>
        <PufziButton
          label={t('priceCard.button')}
          sx={{
            bgcolor: 'background.paper',
            color: 'primary.main',
            py: 1.2,
            borderRadius: '16px',
            fontWeight: 800,
            fontSize: 18,
          }}
        />
      </Stack>
    </Stack>
  )
}
