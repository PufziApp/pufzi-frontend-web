import { Stack } from '@mui/material'

import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'
import { PufziFormSubtitle } from '../../../../../../components/PufziFormSubtitle/PufziFormSubtitle'
import { PufziFormTitle } from '../../../../../../components/PufziFormTitle/PufziFormTitle'
import { PufziTextField } from '../../../../../../components/PufziTextField/PufziTextField'

import type { RegisterFormData } from '../RegisterForm'

type PersonalInformationStepProps = {
  formData: RegisterFormData
  handleChange: (
    field: keyof RegisterFormData
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void
  handleNext: () => void
}

export const PersonalInformationStep = ({
  formData,
  handleChange,
  handleNext,
}: PersonalInformationStepProps) => {
  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <PufziFormTitle text="Datele tale" />

        <PufziFormSubtitle text="Spune-ne câteva lucruri despre tine pentru a-ți crea contul Pufzi." />
      </Stack>

      <Stack spacing={2}>
        <PufziTextField
          label="Nume complet"
          value={formData.fullName}
          onChange={handleChange('fullName')}
        />

        <PufziTextField
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
        />

        <PufziTextField
          label="Parolă"
          type="password"
          value={formData.password}
          onChange={handleChange('password')}
        />
      </Stack>

      <PufziButton
        label="Continuă →"
        fullWidth
        onClick={handleNext}
        sx={{
          fontSize: 17,
        }}
      />
    </Stack>
  )
}
