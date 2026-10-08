import { useState } from 'react'

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTranslation } from 'react-i18next'

import { QUESTION_INFO } from '../types/questions.info'

export const QuestionsAccordion = () => {
  const { t } = useTranslation('Faq')

  const [expanded, setExpanded] = useState<number | false>(false)

  const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box
      sx={{
        width: '100%',
        minWidth: 0,

        display: 'grid',

        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr',
          md: '1fr',
          xl: 'repeat(2, minmax(0, 1fr))',
        },

        gap: {
          xs: 1.25,
          sm: 1.5,
          md: 1.75,
          xl: 2,
        },
      }}
    >
      {QUESTION_INFO.map((item) => {
        const isExpanded = expanded === item.id

        return (
          <Accordion
            key={item.id}
            expanded={isExpanded}
            onChange={handleChange(item.id)}
            disableGutters
            elevation={0}
            sx={{
              width: '100%',
              minWidth: 0,

              bgcolor: 'background.paper',

              border: '1.5px solid',
              borderColor: isExpanded ? 'primary.main' : 'divider',

              borderRadius: {
                xs: '18px !important',
                sm: '20px !important',
              },

              overflow: 'hidden',

              boxShadow: 'none',

              '&::before': {
                display: 'none',
              },

              '@media (hover: hover)': {
                '&:hover': {
                  borderColor: 'primary.main',
                },
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: isExpanded ? 'primary.main' : 'text.secondary',

                    fontSize: {
                      xs: 20,
                      sm: 21,
                      md: 22,
                    },
                  }}
                />
              }
              sx={{
                minHeight: {
                  xs: 58,
                  sm: 60,
                  md: 64,
                },

                px: {
                  xs: 1.75,
                  sm: 2,
                  md: 2.25,
                },

                py: {
                  xs: 0.5,
                  sm: 0.5,
                },

                '&.Mui-expanded': {
                  minHeight: {
                    xs: 58,
                    sm: 60,
                    md: 64,
                  },
                },

                '& .MuiAccordionSummary-content': {
                  my: 0,
                  minWidth: 0,
                  alignItems: 'center',
                },

                '& .MuiAccordionSummary-content.Mui-expanded': {
                  my: 0,
                },

                '& .MuiAccordionSummary-expandIconWrapper': {
                  width: {
                    xs: 32,
                    sm: 34,
                    md: 36,
                  },

                  height: {
                    xs: 32,
                    sm: 34,
                    md: 36,
                  },

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  flexShrink: 0,

                  border: '1.5px solid',

                  borderColor: isExpanded ? 'primary.main' : 'divider',

                  borderRadius: '50%',
                },

                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'rotate(180deg)',
                  borderColor: 'primary.main',
                },
              }}
            >
              <Typography
                sx={{
                  minWidth: 0,

                  pr: {
                    xs: 1,
                    sm: 1.25,
                  },

                  fontWeight: 700,

                  lineHeight: 1.25,

                  color: 'text.primary',

                  fontSize: {
                    xs: '0.9rem',
                    sm: '0.95rem',
                    md: '1rem',
                  },

                  overflowWrap: 'break-word',
                }}
              >
                {t(item.question)}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                px: {
                  xs: 1.75,
                  sm: 2,
                  md: 2.25,
                },

                pt: 0,

                pb: {
                  xs: 1.5,
                  sm: 1.75,
                  md: 2,
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 400,

                  lineHeight: 1.5,

                  color: 'text.secondary',

                  fontSize: {
                    xs: '0.875rem',
                    sm: '0.9rem',
                    md: '0.95rem',
                  },
                }}
              >
                {t(item.answer)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </Box>
  )
}
