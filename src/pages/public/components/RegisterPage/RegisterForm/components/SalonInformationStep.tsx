import { Stack } from '@mui/material'

import { useTranslation } from 'react-i18next'

import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'
import { PufziFormSubtitle } from '../../../../../../components/PufziFormSubtitle/PufziFormSubtitle'
import { PufziFormTitle } from '../../../../../../components/PufziFormTitle/PufziFormTitle'
import { PufziTextField } from '../../../../../../components/PufziTextField/PufziTextField'

import type { RegisterFormData, RegisterFormErrors } from '../../types/register-page.types'

import { PufziBackButton } from './PufziBackButton'
import { PufziPhoneInput } from '../../../PufziPhoneInput/PufziPhoneInput'

type SalonInformationStepProps = {
  formData: RegisterFormData

  formErrors: RegisterFormErrors

  handleChange: (
    field: keyof RegisterFormData
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void

  handlePhoneChange: (value: string) => void

  handleBack: () => void

  handleNext: () => void
}

export const SalonInformationStep = ({
  formData,
  formErrors,
  handleChange,
  handlePhoneChange,
  handleBack,
  handleNext,
}: SalonInformationStepProps) => {
  const { t } = useTranslation('Register')

  return (
    <Stack spacing={3}>
      {/* TITLE */}
      <Stack spacing={1}>
        <PufziFormTitle text={t('salonInformationStep.formTitle')} />

        <PufziFormSubtitle text={t('salonInformationStep.formSubtitle')} />
      </Stack>

      {/* FIELDS */}
      <Stack spacing={2}>
        {/* SALON NAME */}
        <PufziTextField
          label={t('salonInformationStep.fields.salonName')}
          value={formData.salonName}
          onChange={handleChange('salonName')}
          error={Boolean(formErrors.salonName)}
          helperText={formErrors.salonName ? t(formErrors.salonName) : undefined}
        />

        {/* PHONE */}
        <PufziPhoneInput
          value={formData.phone}
          onChange={handlePhoneChange}
          error={Boolean(formErrors.phone)}
          helperText={formErrors.phone ? t(formErrors.phone) : undefined}
        />

        {/* ADDRESS */}
        <PufziTextField
          label={t('salonInformationStep.fields.address')}
          value={formData.address}
          onChange={handleChange('address')}
          error={Boolean(formErrors.address)}
          helperText={formErrors.address ? t(formErrors.address) : undefined}
        />

        {/* CITY */}
        <PufziTextField
          label={t('salonInformationStep.fields.city')}
          value={formData.city}
          onChange={handleChange('city')}
          error={Boolean(formErrors.city)}
          helperText={formErrors.city ? t(formErrors.city) : undefined}
        />

        {/* COUNTY + POSTAL CODE */}
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
            error={Boolean(formErrors.county)}
            helperText={formErrors.county ? t(formErrors.county) : undefined}
          />

          <PufziTextField
            label={t('salonInformationStep.fields.postalCode')}
            value={formData.postalCode}
            onChange={handleChange('postalCode')}
            error={Boolean(formErrors.postalCode)}
            helperText={formErrors.postalCode ? t(formErrors.postalCode) : undefined}
          />
        </Stack>
      </Stack>

      {/* BUTTONS */}
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
