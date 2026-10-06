import { Container, Stack } from '@mui/material'
import PaidIcon from '@mui/icons-material/Paid'
import { useTranslation } from 'react-i18next'

import { IconTitle } from '../../../../../components/IconTitle/IconTitle'
import { PriceCard } from './components/PriceCard'

export const Prices = () => {
  const { t } = useTranslation('Prices')

  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: '100%',
        minWidth: 0,

        bgcolor: 'background.paper',

        py: {
          xs: 5,
          sm: 6,
          md: 7,
          lg: 8,
        },

        boxSizing: 'border-box',
      }}
    >
      <IconTitle
        icon={<PaidIcon />}
        title={t('title')}
        sectionTitle={t('sectionTitle.main')}
        highlightedSectionTitle={t('sectionTitle.highlight')}
        sectionDescription={t('sectionDescription')}
      />

      <Container
        maxWidth="xl"
        sx={{
          width: '100%',

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
        }}
      >
        <Stack
          sx={{
            width: '100%',
            minWidth: 0,

            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PriceCard />
        </Stack>
      </Container>
    </Stack>
  )
}
