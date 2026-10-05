import { useState, type ChangeEvent } from 'react'

import { IconButton, InputAdornment, Stack, Typography } from '@mui/material'

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'

import { useTranslation } from 'react-i18next'

import { PasswordRequirements } from '../../../../../components/PasswordRequirements/PasswordRequirements'

import { PufziFormTitle } from '../../../../../components/PufziFormTitle/PufziFormTitle'
import { PufziFormSubtitle } from '../../../../../components/PufziFormSubtitle/PufziFormSubtitle'
import { PufziTextField } from '../../../../../components/PufziTextField/PufziTextField'
import { PufziButton } from '../../../../../components/PufziButton/PufziButton'
import type { ClientRegisterFormData } from '../types/client-register-page.types'

export type ClientRegisterFormErrors = Partial<Record<keyof ClientRegisterFormData, string>>

type ClientPersonalInformationProps = {
  formData: ClientRegisterFormData

  formErrors: ClientRegisterFormErrors

  handleChange: (
    field: keyof ClientRegisterFormData
  ) => (event: ChangeEvent<HTMLInputElement>) => void

  handleRegister: () => void
}

export const ClientPersonalInformation = ({
  formData,
  formErrors,
  handleChange,
  handleRegister,
}: ClientPersonalInformationProps) => {
  const { t } = useTranslation('ClientRegisterPage')

  const [showPassword, setShowPassword] = useState(false)

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const hasConfirmPassword = formData.confirmPassword.length > 0

  const passwordsMatch = hasConfirmPassword && formData.password === formData.confirmPassword

  const passwordsDoNotMatch = hasConfirmPassword && formData.password !== formData.confirmPassword

  return (
    <Stack spacing={3}>
      {/* TITLE */}
      <Stack spacing={1}>
        <PufziFormTitle text={t('personalInformation.formTitle')} />

        <PufziFormSubtitle text={t('personalInformation.formSubtitle')} />
      </Stack>

      {/* FIELDS */}
      <Stack spacing={2}>
        {/* FIRST NAME + LAST NAME */}
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
            error={Boolean(formErrors.firstName)}
            helperText={formErrors.firstName ? t(formErrors.firstName) : undefined}
          />

          <PufziTextField
            label={t('personalInformation.fields.lastName')}
            value={formData.lastName}
            onChange={handleChange('lastName')}
            error={Boolean(formErrors.lastName)}
            helperText={formErrors.lastName ? t(formErrors.lastName) : undefined}
          />
        </Stack>

        {/* EMAIL */}
        <PufziTextField
          label={t('common.fields.email')}
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          error={Boolean(formErrors.email)}
          helperText={formErrors.email ? t(formErrors.email) : undefined}
        />

        {/* PASSWORD */}
        <Stack spacing={1}>
          <PufziTextField
            label={t('common.fields.password')}
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange('password')}
            error={Boolean(formErrors.password)}
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

          <PasswordRequirements password={formData.password} />
        </Stack>

        {/* CONFIRM PASSWORD */}
        <Stack spacing={0.75}>
          <PufziTextField
            label={t('common.fields.confirmPassword')}
            type={showConfirmPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={handleChange('confirmPassword')}
            error={Boolean(formErrors.confirmPassword) || passwordsDoNotMatch}
            helperText={formErrors.confirmPassword ? t(formErrors.confirmPassword) : undefined}
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

          {hasConfirmPassword && !formErrors.confirmPassword && (
            <Stack
              direction="row"
              spacing={0.7}
              sx={{
                alignItems: 'center',
                px: 0.25,
              }}
            >
              {passwordsMatch ? (
                <CheckCircleRoundedIcon
                  sx={{
                    fontSize: 16,
                    color: 'success.main',
                  }}
                />
              ) : (
                <ErrorRoundedIcon
                  sx={{
                    fontSize: 16,
                    color: 'error.main',
                  }}
                />
              )}

              <Typography
                sx={{
                  fontSize: 12.5,
                  fontWeight: 600,

                  color: passwordsMatch ? 'success.main' : 'error.main',
                }}
              >
                {passwordsMatch
                  ? t('passwordRequirements.passwordsMatch')
                  : t('passwordRequirements.passwordsDoNotMatch')}
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>

      {/* CREATE ACCOUNT */}
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
