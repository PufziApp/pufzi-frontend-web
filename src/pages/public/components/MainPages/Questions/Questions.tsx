import { Container, Stack } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'
import { useTranslation } from 'react-i18next'

import { IconTitle } from '../../../../../components/IconTitle/IconTitle'
import { QuestionsAccordion } from './components/QuestionsAccordion'

export const Questions = () => {
  const { t } = useTranslation('Faq')

  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: '100%',
        minWidth: 0,

        pb: {
          xs: 2.5,
          sm: 3,
          md: 3.5,
          lg: 4,
        },

        boxSizing: 'border-box',
      }}
    >
      <IconTitle
        icon={<HelpIcon />}
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
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          px: {
            xs: 1.5,
            sm: 2.5,
            md: 3,
            lg: 4,
            xl: 5,
          },
        }}
      >
        <QuestionsAccordion />
      </Container>
    </Stack>
  )
}
