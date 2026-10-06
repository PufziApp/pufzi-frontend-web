import { Divider, Stack } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import DevicesIcon from '@mui/icons-material/Devices'
import { useTranslation } from 'react-i18next'

import { IconTitle } from '../../../../../components/IconTitle/IconTitle'
import { Steps } from './components/Steps/Steps'
import { Interface } from './components/Interface/Interface'

export const Benefits = () => {
  const { t } = useTranslation('Benefits')

  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: '100%',
        minWidth: 0,

        py: {
          xs: 5,
          sm: 6,
          md: 7,
        },

        boxSizing: 'border-box',
      }}
    >
      <IconTitle
        icon={<VerifiedIcon />}
        title={t('title')}
        sectionTitle={t('sectionTitle.main')}
        highlightedSectionTitle={t('sectionTitle.highlight')}
        sectionDescription={t('sectionDescription')}
      />

      <Steps />

      <Divider
        sx={{
          color: 'divider',

          my: {
            xs: 5,
            sm: 6,
            md: 7,
          },
        }}
      />

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
