import { Stack } from '@mui/material'

import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'
import { PufziFormSubtitle } from '../../../../../../components/PufziFormSubtitle/PufziFormSubtitle'
import { PufziFormTitle } from '../../../../../../components/PufziFormTitle/PufziFormTitle'
import { PufziTextField } from '../../../../../../components/PufziTextField/PufziTextField'

import type { RegisterFormData } from '../RegisterForm'

type SalonInformationStepProps = {
  formData: RegisterFormData
  handleChange: (
    field: keyof RegisterFormData
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void
  handleBack: () => void
  handleNext: () => void
}

export const SalonInformationStep = ({
  formData,
  handleChange,
  handleBack,
  handleNext,
}: SalonInformationStepProps) => {
  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <PufziFormTitle text="Despre salonul tău" />

        <PufziFormSubtitle text="Completează informațiile principale ale salonului tău." />
      </Stack>

      <Stack spacing={2}>
        <PufziTextField
          label="Numele salonului"
          value={formData.salonName}
          onChange={handleChange('salonName')}
        />

        <PufziTextField
          label="Telefon"
          type="tel"
          value={formData.phone}
          onChange={handleChange('phone')}
        />
      </Stack>

      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={2}
      >
        <PufziButton
          label="← Înapoi"
          fullWidth
          onClick={handleBack}
          sx={{
            bgcolor: 'background.paper',
            color: 'text.primary',
            border: '1px solid',
            borderColor: 'divider',

            '&:hover': {
              bgcolor: 'action.hover',
              color: 'primary.main',
              borderColor: 'primary.main',
            },
          }}
        />

        <PufziButton label="Continuă →" fullWidth onClick={handleNext} />
      </Stack>
    </Stack>
  )
}
