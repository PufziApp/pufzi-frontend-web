import { useState } from 'react'
import { Divider, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { PufziFormCard } from '../../../../../components/PufziFormCard/PufziFormCard'
import { PufziFormHeader } from '../../../../../components/PufziFormHeader/PufziFormHeader'
import { PufziLinkButton } from '../../../../../components/PufziLinkButton/PufziLinkButton'

import { PersonalInformationStep } from './components/PersonalInformationStep'
import { SalonInformationStep } from './components/SalonInformationStep'
import { PlanStep } from './components/PlanStep'
import { SummaryStep } from './components/SummaryStep'

export type RegisterFormData = {
  fullName: string
  email: string
  password: string
  salonName: string
  phone: string
  plan: 'pro'
}

const STEPS = ['Date personale', 'Salon', 'Plan', 'Sumar']

export const RegisterForm = () => {
  const [activeStep, setActiveStep] = useState(0)

  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: '',
    email: '',
    password: '',
    salonName: '',
    phone: '',
    plan: 'pro',
  })

  const handleChange =
    (field: keyof RegisterFormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((previous) => ({
        ...previous,
        [field]: event.target.value,
      }))
    }

  const handleNext = () => {
    setActiveStep((previous) => previous + 1)
  }

  const handleBack = () => {
    setActiveStep((previous) => previous - 1)
  }

  const handleRegister = () => {
    console.log(formData)
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
          md: 760,
        },

        minHeight: {
          md: 760,
        },

        maxHeight: {
          md: 760,
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
          <Stack sx={{ alignItems: 'flex-start' }}>
            <PufziLinkButton component={Link} to="/" label="← Înapoi la site" />
          </Stack>

          <PufziFormHeader />

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
                <StepLabel>{step}</StepLabel>
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
          }}
        >
          {activeStep === 0 && (
            <PersonalInformationStep
              formData={formData}
              handleChange={handleChange}
              handleNext={handleNext}
            />
          )}

          {activeStep === 1 && (
            <SalonInformationStep
              formData={formData}
              handleChange={handleChange}
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
            Ai deja cont?
          </Typography>

          <PufziLinkButton
            component={Link}
            to="/login"
            label="Autentifică-te"
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
