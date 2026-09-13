import { Grid, Stack } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'
import { useTranslation } from 'react-i18next'

import { IconTitle } from '../../../../../components/IconTitle/IconTitle'
import { QuestionsAccordion } from './components/QuestionsAccordion'

export const Questions = () => {
  const { t } = useTranslation('Faq')

  return (
    <Stack
      sx={{
        pb: 8,
      }}
    >
      <IconTitle
        icon={<HelpIcon />}
        title={t('title')}
        sectionTitle={t('sectionTitle.main')}
        highlightedSectionTitle={t('sectionTitle.highlight')}
        sectionDescription={t('sectionDescription')}
      />

      <Grid
        container
        sx={{
          pt: 4,
          px: {
            xs: 2,
            sm: 4,
            md: 8,
            lg: 16,
            xl: 25,
          },
        }}
      >
        <Grid size={12}>
          <QuestionsAccordion />
        </Grid>
      </Grid>
    </Stack>
  )
}
