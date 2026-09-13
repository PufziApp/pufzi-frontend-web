import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material'
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
    <Grid container spacing={2}>
      {QUESTION_INFO.map((item) => {
        const isExpanded = expanded === item.id

        return (
          <Grid
            key={item.id}
            size={{
              xs: 12,
              md: 6,
            }}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <Accordion
              expanded={isExpanded}
              onChange={handleChange(item.id)}
              disableGutters
              elevation={0}
              sx={{
                width: '100%',
                bgcolor: 'background.paper',

                border: '1.5px solid',
                borderColor: isExpanded ? 'primary.main' : 'divider',

                borderRadius: '28px !important',

                overflow: 'hidden',
                boxShadow: 'none',

                transition: (theme) =>
                  theme.transitions.create(['border-color', 'background-color'], {
                    duration: theme.transitions.duration.short,
                  }),

                '&::before': {
                  display: 'none',
                },

                '&:hover': {
                  borderColor: 'primary.main',
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: isExpanded ? 'primary.main' : 'text.secondary',
                    }}
                  />
                }
                sx={{
                  minHeight: 110,

                  px: {
                    xs: 3,
                    sm: 4,
                  },

                  '&.Mui-expanded': {
                    minHeight: 100,
                  },

                  '& .MuiAccordionSummary-content': {
                    my: 0,
                    alignItems: 'center',
                  },

                  '& .MuiAccordionSummary-content.Mui-expanded': {
                    my: 0,
                  },

                  '& .MuiAccordionSummary-expandIconWrapper': {
                    width: 48,
                    height: 48,

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    flexShrink: 0,

                    border: '1.5px solid',
                    borderColor: isExpanded ? 'primary.main' : 'divider',

                    borderRadius: '50%',

                    transition: (theme) =>
                      theme.transitions.create(['transform', 'border-color'], {
                        duration: theme.transitions.duration.short,
                      }),
                  },

                  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                    transform: 'rotate(180deg)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    pr: 2,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: 'text.primary',
                  }}
                >
                  {t(item.question)}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: {
                    xs: 3,
                    sm: 4,
                  },

                  pt: 0,

                  pb: {
                    xs: 3,
                    sm: 4,
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    lineHeight: 1.7,
                    color: 'text.secondary',
                  }}
                >
                  {t(item.answer)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        )
      })}
    </Grid>
  )
}
