import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'

type PlanBenefitsButtonProps = {
  onClick: () => void
}

export const PlanBenefitsButton = ({ onClick }: PlanBenefitsButtonProps) => {
  const { t } = useTranslation('Register')

  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      sx={{
        width: '100%',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        px: 1.8,
        py: 1.25,

        borderRadius: 2.5,

        border: '1px solid',
        borderColor: 'divider',

        bgcolor: 'action.hover',

        color: 'text.primary',

        cursor: 'pointer',

        fontFamily: 'inherit',

        transition: 'all 0.2s ease',

        '&:hover': {
          borderColor: 'primary.main',

          bgcolor: 'action.selected',

          transform: 'translateY(-1px)',
        },
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 30,

            borderRadius: '50%',

            bgcolor: 'primary.light',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            flexShrink: 0,
          }}
        >
          <CheckRoundedIcon
            sx={{
              fontSize: 18,

              color: 'primary.main',
            }}
          />
        </Box>

        <Stack
          spacing={0.1}
          sx={{
            textAlign: 'left',
          }}
        >
          <Typography
            sx={{
              fontSize: 13.5,

              fontWeight: 800,
            }}
          >
            {t('planStep.plan.card.benefits.title')}
          </Typography>

          <Typography
            sx={{
              fontSize: 11.5,

              color: 'text.secondary',
            }}
          >
            {t('planStep.plan.card.benefits.description')}
          </Typography>
        </Stack>
      </Stack>

      <KeyboardArrowRightRoundedIcon
        sx={{
          color: 'primary.main',
        }}
      />
    </Box>
  )
}
