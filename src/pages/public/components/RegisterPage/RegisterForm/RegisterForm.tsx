import { useState } from 'react'
import type { ChangeEvent } from 'react'

import { Chip, Divider, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'

import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { PufziFormCard } from '../../../../../components/PufziFormCard/PufziFormCard'
import { PufziFormHeader } from '../../../../../components/PufziFormHeader/PufziFormHeader'
import { PufziLinkButton } from '../../../../../components/PufziLinkButton/PufziLinkButton'

import {
  personalInformationSchema,
  salonInformationSchema,
  registerSchema,
  type RegisterFormData,
} from '../types/register-page.types'

import {
  PersonalInformationStep,
  type RegisterFormErrors,
} from './components/PersonalInformationStep'

import { SalonInformationStep } from './components/SalonInformationStep'
import { PlanStep } from './components/PlanStep/PlanStep'
import { SummaryStep } from './components/SummaryStep'

const STEPS = [
  'registerForm.steps.personalInformation',
  'registerForm.steps.salon',
  'registerForm.steps.plan',
  'registerForm.steps.summary',
] as const

export const RegisterForm = () => {
  const { t } = useTranslation('Register')

  const [activeStep, setActiveStep] = useState(0)

  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    salonName: '',
    phone: '',
    address: '',
    city: '',
    county: '',
    postalCode: '',
    plan: 'pro',
  })

  const [formErrors, setFormErrors] = useState<RegisterFormErrors>({})

  const handleChange =
    (field: keyof RegisterFormData) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value

      setFormData((previous) => ({
        ...previous,
        [field]: value,
      }))

      setFormErrors((previous) => ({
        ...previous,
        [field]: undefined,
      }))

      if (field === 'password') {
        setFormErrors((previous) => ({
          ...previous,
          password: undefined,
          confirmPassword: undefined,
        }))
      }
    }

  const handlePhoneChange = (phone: string) => {
    setFormData((previous) => ({
      ...previous,
      phone,
    }))

    setFormErrors((previous) => ({
      ...previous,
      phone: undefined,
    }))
  }

  const handleNext = () => {
    if (activeStep === 0) {
      const result = personalInformationSchema.safeParse({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      })

      if (!result.success) {
        const errors: RegisterFormErrors = {}

        result.error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof RegisterFormData

          if (field && !errors[field]) {
            errors[field] = issue.message
          }
        })

        setFormErrors(errors)

        return
      }

      setFormErrors({})
    }

    if (activeStep === 1) {
      const result = salonInformationSchema.safeParse({
        salonName: formData.salonName,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        county: formData.county,
        postalCode: formData.postalCode,
      })

      if (!result.success) {
        const errors: RegisterFormErrors = {}

        result.error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof RegisterFormData

          if (field && !errors[field]) {
            errors[field] = issue.message
          }
        })

        setFormErrors(errors)

        return
      }

      setFormErrors({})
    }

    setActiveStep((previous) => previous + 1)
  }

  const handleBack = () => {
    setActiveStep((previous) => previous - 1)
  }

  const handleRegister = () => {
    const result = registerSchema.safeParse(formData)

    if (!result.success) {
      const errors: RegisterFormErrors = {}

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof RegisterFormData

        if (field && !errors[field]) {
          errors[field] = issue.message
        }
      })

      setFormErrors(errors)

      console.log('Register validation errors:', errors)

      return
    }

    setFormErrors({})

    console.log('Valid business register:', result.data)
  }

  return (
    <PufziFormCard
      sx={{
        width: {
          xs: '100%',
          sm: 520,
          md: 580,
        },
        maxWidth: '100%',
        alignSelf: {
          xs: 'center',
          md: 'flex-end',
        },
        height: {
          xs: 'auto',
          md: 800,
        },
        minHeight: {
          md: 800,
        },
        maxHeight: {
          md: 800,
        },
        overflow: 'hidden',
      }}
    >
      <Stack
        sx={{
          height: '100%',
        }}
      >
        {/* TOP */}
        <Stack spacing={2.5}>
          <Stack
            sx={{
              alignItems: 'flex-start',
            }}
          >
            <PufziLinkButton component={Link} to="/" label={t('registerForm.backToSite')} />
          </Stack>

          <PufziFormHeader />

          <Stack
            sx={{
              alignItems: 'center',
            }}
          >
            <Chip
              icon={
                <StorefrontRoundedIcon
                  sx={{
                    fontSize: '16px',
                  }}
                />
              }
              label={t('registerForm.businessAccount')}
              sx={{
                height: 42,

                px: 1.4,

                borderRadius: 999,

                bgcolor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? theme.palette.action.selected
                    : theme.palette.primary.light,

                color: 'primary.main',

                border: '1px solid',

                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? theme.palette.primary.main : 'transparent',

                fontSize: 14,
                fontWeight: 800,

                letterSpacing: 0.8,

                textTransform: 'uppercase',

                '& .MuiChip-icon': {
                  color: 'primary.main',
                  ml: 0.5,
                },

                '& .MuiChip-label': {
                  px: 1.2,
                },
              }}
            />
          </Stack>

          <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{
              px: {
                xs: 0,
                sm: 1,
              },

              '& .MuiStepLabel-label': {
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: 12,
                mt: 0.5,
              },

              '& .MuiStepLabel-label.Mui-active': {
                color: 'primary.main',
                fontWeight: 700,
              },

              '& .MuiStepLabel-label.Mui-completed': {
                color: 'success.main',
              },

              '& .MuiStepIcon-root': {
                color: 'secondary.main',
                fontSize: 30,
              },

              '& .MuiStepIcon-root.Mui-active': {
                color: 'primary.main',
              },

              '& .MuiStepIcon-root.Mui-completed': {
                color: 'success.main',
              },

              '& .MuiStepConnector-line': {
                borderColor: 'divider',
                borderTopWidth: 2,
              },

              '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
                borderColor: 'success.main',
              },
            }}
          >
            {STEPS.map((step) => (
              <Step key={step}>
                <StepLabel>{t(step)}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Divider />
        </Stack>

        {/* CONTENT */}
        <Stack
          sx={{
            flex: 1,

            minHeight: 0,

            overflowY: 'auto',

            pt: 3,
            pr: 0.5,

            '&::-webkit-scrollbar': {
              width: 5,
            },

            '&::-webkit-scrollbar-thumb': {
              bgcolor: 'divider',
              borderRadius: 999,
            },
          }}
        >
          {activeStep === 0 && (
            <PersonalInformationStep
              formData={formData}
              formErrors={formErrors}
              handleChange={handleChange}
              handleNext={handleNext}
            />
          )}

          {activeStep === 1 && (
            <SalonInformationStep
              formData={formData}
              formErrors={formErrors}
              handleChange={handleChange}
              handlePhoneChange={handlePhoneChange}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          )}

          {activeStep === 2 && <PlanStep handleBack={handleBack} handleNext={handleNext} />}

          {activeStep === 3 && (
            <SummaryStep
              formData={formData}
              handleBack={handleBack}
              handleRegister={handleRegister}
            />
          )}
        </Stack>

        {/* LOGIN */}
        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            pt: 2,

            justifyContent: 'center',
            alignItems: 'center',

            flexWrap: 'wrap',
          }}
        >
          <Typography
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
            }}
          >
            {t('registerForm.alreadyHaveAccount')}
          </Typography>

          <PufziLinkButton
            component={Link}
            to="/login"
            label={t('registerForm.login')}
            sx={{
              color: 'primary.main',
              fontWeight: 700,
            }}
          />
        </Stack>
      </Stack>
    </PufziFormCard>
  )
}
