import { Stack } from '@mui/material'
import PaidIcon from '@mui/icons-material/Paid'
import { IconTitle } from '../../../../../components/IconTitle/IconTitle'
import { useTranslation } from 'react-i18next'
import { PriceCard } from './components/PriceCard'

export const Prices = () => {
  const { t } = useTranslation('Prices')

  return (
    <Stack sx={{ bgcolor: 'background.paper', pb: 2.5 }}>
      <IconTitle
        icon={<PaidIcon />}
        title={t('title')}
        sectionTitle={t('sectionTitle.main')}
        highlightedSectionTitle={t('sectionTitle.highlight')}
        sectionDescription={t('sectionDescription')}
      />
      <Stack
        sx={{
          pt: 3,
          px: 25,
          alignItems: 'center',
        }}
      >
        <PriceCard />
      </Stack>
    </Stack>
  )
}
