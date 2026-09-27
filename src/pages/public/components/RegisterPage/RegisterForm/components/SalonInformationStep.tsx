import { Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import type { ChangeEvent } from 'react'

import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'
import { PufziFormSubtitle } from '../../../../../../components/PufziFormSubtitle/PufziFormSubtitle'
import { PufziFormTitle } from '../../../../../../components/PufziFormTitle/PufziFormTitle'
import { PufziTextField } from '../../../../../../components/PufziTextField/PufziTextField'

import type { RegisterFormData } from '../RegisterForm'
import { PufziBackButton } from './PufziBackButton'

type SalonInformationStepProps = {
  formData: RegisterFormData

  handleChange: (field: keyof RegisterFormData) => (event: ChangeEvent<HTMLInputElement>) => void

  handleBack: () => void
  handleNext: () => void
}

export const SalonInformationStep = ({
  formData,
  handleChange,
  handleBack,
  handleNext,
}: SalonInformationStepProps) => {
  const { t } = useTranslation('Register')

  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <PufziFormTitle text={t('salonInformationStep.formTitle')} />

        <PufziFormSubtitle text={t('salonInformationStep.formSubtitle')} />
      </Stack>

      <Stack spacing={2}>
        <PufziTextField
          label={t('salonInformationStep.fields.salonName')}
          value={formData.salonName}
          onChange={handleChange('salonName')}
        />

        <PufziTextField
          label={t('common.fields.phone')}
          type="tel"
          value={formData.phone}
          onChange={handleChange('phone')}
        />

        <PufziTextField
          label={t('salonInformationStep.fields.address')}
          value={formData.address}
          onChange={handleChange('address')}
        />

        <PufziTextField
          label={t('salonInformationStep.fields.city')}
          value={formData.city}
          onChange={handleChange('city')}
        />

        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={2}
        >
          <PufziTextField
            label={t('salonInformationStep.fields.county')}
            value={formData.county}
            onChange={handleChange('county')}
          />

          <PufziTextField
            label={t('salonInformationStep.fields.postalCode')}
            value={formData.postalCode}
            onChange={handleChange('postalCode')}
          />
        </Stack>
      </Stack>

      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={2}
      >
        <PufziBackButton label={t('common.buttons.back')} onClick={handleBack} />

        <PufziButton label={t('common.buttons.continue')} fullWidth onClick={handleNext} />
      </Stack>
    </Stack>
  )
}
