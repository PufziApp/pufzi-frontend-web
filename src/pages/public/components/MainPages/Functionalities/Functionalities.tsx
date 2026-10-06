import { Box, Container, Stack } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { useTranslation } from 'react-i18next'

import { IconTitle } from '../../../../../components/IconTitle/IconTitle'
import { Cards } from './components/Cards/Cards'

export const Functionalities = () => {
  const { t } = useTranslation('Functionalities')

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
        bgcolor: 'background.paper',

        py: {
          xs: 5,
          sm: 6,
          md: 7,
          lg: 8,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: '100%',

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
          spacing={{
            xs: 4,
            sm: 5,
            md: 6,
          }}
          sx={{
            width: '100%',
            minWidth: 0,
          }}
        >
          {/* TITLE */}
          <Box
            sx={{
              width: '100%',
              minWidth: 0,
              overflow: 'hidden',

              '& *': {
                maxWidth: '100%',
                boxSizing: 'border-box',
              },
            }}
          >
            <IconTitle
              icon={<AutoAwesomeIcon />}
              title={t('title')}
              sectionTitle={t('sectionTitle.main')}
              highlightedSectionTitle={t('sectionTitle.highlight')}
              sectionDescription={t('sectionDescription')}
            />
          </Box>

          {/* CARDS */}
          <Cards />
        </Stack>
      </Container>
    </Box>
  )
}
