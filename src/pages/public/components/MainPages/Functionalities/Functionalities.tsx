import { Stack } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { useTranslation } from 'react-i18next'

import { IconTitle } from '../../../../../components/IconTitle/IconTitle'
import { Cards } from './components/Cards/Cards'

export const Functionalities = () => {
  const { t } = useTranslation('Functionalities')

  return (
    <Stack sx={{ bgcolor: 'background.paper', pb: 2.5 }}>
      <IconTitle
        icon={<AutoAwesomeIcon />}
        title={t('title')}
        sectionTitle={t('sectionTitle.main')}
        highlightedSectionTitle={t('sectionTitle.highlight')}
        sectionDescription={t('sectionDescription')}
      />

      <Cards />
    </Stack>
  )
}
