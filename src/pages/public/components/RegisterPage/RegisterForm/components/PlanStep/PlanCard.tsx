import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { PlanCardHeader } from './PlanCardHeader'
import { PlanBenefitsButton } from './PlanBenefitsButton'

type PlanCardProps = {
  onShowBenefits: () => void
}

export const PlanCard = ({ onShowBenefits }: PlanCardProps) => {
  const { t } = useTranslation('Register')

  return (
    <Box
      sx={{
        position: 'relative',

        flexShrink: 0,

        borderRadius: 3,
        overflow: 'hidden',

        bgcolor: 'background.paper',

        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <PlanCardHeader />

      <Stack
        spacing={1.5}
        sx={{
          p: 2.2,
        }}
      >
        <Typography
          sx={{
            fontSize: 13.5,

            color: 'text.secondary',

            lineHeight: 1.5,
          }}
        >
          {t('planStep.plan.card.subtitle')}
        </Typography>

        <PlanBenefitsButton onClick={onShowBenefits} />
      </Stack>
    </Box>
  )
}
