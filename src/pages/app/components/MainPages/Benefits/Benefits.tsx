import { Divider, Stack } from '@mui/material'
import { IconTitle } from '../../../../../components/IconTitle/IconTitle'
import VerifiedIcon from '@mui/icons-material/Verified'
import { useTranslation } from 'react-i18next'
import { Steps } from './components/Steps/Steps'
import DevicesIcon from '@mui/icons-material/Devices'
import { Interface } from './components/Interface/Interface'

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
      <IconTitle
        icon={<DevicesIcon />}
        title={t('interface.title')}
        sectionTitle={t('interface.sectionTitle.main')}
        highlightedSectionTitle={t('interface.sectionTitle.highlight')}
        sectionDescription={t('interface.sectionDescription')}
      />
      <Interface />
    </Stack>
  )
}
