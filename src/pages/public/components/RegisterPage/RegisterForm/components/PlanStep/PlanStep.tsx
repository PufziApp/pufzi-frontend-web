import { useState } from 'react'
import { Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { PlanCard } from './PlanCard'
import { PlanFeaturesDialog } from './PlanFeaturesDialog'
import { PufziFormTitle } from '../../../../../../../components/PufziFormTitle/PufziFormTitle'
import { PufziFormSubtitle } from '../../../../../../../components/PufziFormSubtitle/PufziFormSubtitle'
import { PufziButton } from '../../../../../../../components/PufziButton/PufziButton'
import { PufziBackButton } from '../PufziBackButton'

type PlanStepProps = {
  handleBack: () => void
  handleNext: () => void
}

export const PlanStep = ({ handleBack, handleNext }: PlanStepProps) => {
  const { t } = useTranslation('Register')

  const [featuresModalOpen, setFeaturesModalOpen] = useState(false)

  return (
    <>
      <Stack
        spacing={2}
        sx={{
          height: '100%',
          minHeight: 0,
        }}
      >
        <Stack spacing={0.6}>
          <PufziFormTitle text={t('planStep.formTitle')} />

          <PufziFormSubtitle text={t('planStep.formSubtitle')} />
        </Stack>

        <PlanCard onShowBenefits={() => setFeaturesModalOpen(true)} />

        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={2}
          sx={{
            mt: 'auto',
            flexShrink: 0,
          }}
        >
          <PufziBackButton label={t('common.buttons.back')} onClick={handleBack} />

          <PufziButton label={t('common.buttons.continue')} fullWidth onClick={handleNext} />
        </Stack>
      </Stack>

      <PlanFeaturesDialog open={featuresModalOpen} onClose={() => setFeaturesModalOpen(false)} />
    </>
  )
}
