import { Divider, Stack } from '@mui/material'
import { IconTitle } from '../../../../../components/IconTitle/IconTitle'
import VerifiedIcon from '@mui/icons-material/Verified'
import { useTranslation } from 'react-i18next'
import { Steps } from './components/Steps'

export const Benefits = () => {
  const { t } = useTranslation('Benefits')
  return (
    <Stack sx={{ pb: 2.5 }}>
      <IconTitle
        icon={<VerifiedIcon />}
        title={t('title')}
        sectionTitle={t('sectionTitle.main')}
        highlightedSectionTitle={t('sectionTitle.highlight')}
        sectionDescription={t('sectionDescription')}
      />
      <Steps />
      <Divider sx={{ color: 'divider', mt: 2 }} />
    </Stack>
  )
}
