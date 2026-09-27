import { useState, type ChangeEvent } from 'react'

import { IconButton, InputAdornment, Stack } from '@mui/material'

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'

import { useTranslation } from 'react-i18next'

import type { ClientRegisterFormData } from './ClientRegisterForm'
import { PufziFormTitle } from '../../../../../components/PufziFormTitle/PufziFormTitle'
import { PufziFormSubtitle } from '../../../../../components/PufziFormSubtitle/PufziFormSubtitle'
import { PufziTextField } from '../../../../../components/PufziTextField/PufziTextField'
import { PufziButton } from '../../../../../components/PufziButton/PufziButton'

type ClientPersonalInformationProps = {
  formData: ClientRegisterFormData

  handleChange: (
    field: keyof ClientRegisterFormData
  ) => (event: ChangeEvent<HTMLInputElement>) => void

  handleRegister: () => void
}

export const ClientPersonalInformation = ({
  formData,
  handleChange,
  handleRegister,
}: ClientPersonalInformationProps) => {
  const { t } = useTranslation('ClientRegisterPage')

  const [showPassword, setShowPassword] = useState(false)

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <Stack spacing={3}>
      {/* TITLE */}
      <Stack spacing={1}>
        <PufziFormTitle text={t('personalInformation.formTitle')} />

        <PufziFormSubtitle text={t('personalInformation.formSubtitle')} />
      </Stack>

      {/* FIELDS */}
      <Stack spacing={2}>
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={2}
        >
          <PufziTextField
            label={t('personalInformation.fields.firstName')}
            value={formData.firstName}
            onChange={handleChange('firstName')}
          />

          <PufziTextField
            label={t('personalInformation.fields.lastName')}
            value={formData.lastName}
            onChange={handleChange('lastName')}
          />
        </Stack>

        <PufziTextField
          label={t('common.fields.email')}
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
        />

        {/* PASSWORD */}
        <PufziTextField
          label={t('common.fields.password')}
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange('password')}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((previous) => !previous)}
                    aria-label={
                      showPassword
                        ? t('common.passwordVisibility.hide')
                        : t('common.passwordVisibility.show')
                    }
                  >
                    {showPassword ? (
                      <VisibilityRoundedIcon
                        sx={{
                          color: 'primary.main',
                        }}
                      />
                    ) : (
                      <VisibilityOffRoundedIcon
                        sx={{
                          color: 'primary.main',
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        {/* CONFIRM PASSWORD */}
        <PufziTextField
          label={t('common.fields.confirmPassword')}
          type={showConfirmPassword ? 'text' : 'password'}
          value={formData.confirmPassword}
          onChange={handleChange('confirmPassword')}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowConfirmPassword((previous) => !previous)}
                    aria-label={
                      showConfirmPassword
                        ? t('common.passwordVisibility.hide')
                        : t('common.passwordVisibility.show')
                    }
                  >
                    {showConfirmPassword ? (
                      <VisibilityRoundedIcon
                        sx={{
                          color: 'primary.main',
                        }}
                      />
                    ) : (
                      <VisibilityOffRoundedIcon
                        sx={{
                          color: 'primary.main',
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Stack>

      <PufziButton
        label={t('buttons.createAccount')}
        fullWidth
        onClick={handleRegister}
        sx={{
          fontSize: 17,
        }}
      />
    </Stack>
  )
}
