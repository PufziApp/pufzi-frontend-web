import { useState, type ChangeEvent } from 'react'

import { Chip, Divider, Stack, Typography } from '@mui/material'

import PersonRoundedIcon from '@mui/icons-material/PersonRounded'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  ClientPersonalInformation,
  type ClientRegisterFormErrors,
} from './ClientPersonalInformation'

import { PufziFormCard } from '../../../../../components/PufziFormCard/PufziFormCard'
import { PufziLinkButton } from '../../../../../components/PufziLinkButton/PufziLinkButton'
import { PufziFormHeader } from '../../../../../components/PufziFormHeader/PufziFormHeader'
import {
  clientRegisterSchema,
  type ClientRegisterFormData,
} from '../types/client-register-page.types'

export const ClientRegisterForm = () => {
  const { t } = useTranslation('ClientRegisterPage')

  const [formData, setFormData] = useState<ClientRegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [formErrors, setFormErrors] = useState<ClientRegisterFormErrors>({})

  const handleChange =
    (field: keyof ClientRegisterFormData) => (event: ChangeEvent<HTMLInputElement>) => {
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

  const handleRegister = () => {
    const result = clientRegisterSchema.safeParse(formData)

    if (!result.success) {
      const errors: ClientRegisterFormErrors = {}

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ClientRegisterFormData

        if (field && !errors[field]) {
          errors[field] = issue.message
        }
      })

      setFormErrors(errors)

      return
    }

    setFormErrors({})

    console.log('Valid register data:', result.data)
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

          {/* CLIENT CHIP */}
          <Stack
            sx={{
              alignItems: 'center',
            }}
          >
            <Chip
              icon={
                <PersonRoundedIcon
                  sx={{
                    fontSize: '16px',
                  }}
                />
              }
              label={t('registerForm.clientAccount')}
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

            '&::-webkit-scrollbar-track': {
              bgcolor: 'transparent',
            },
          }}
        >
          <ClientPersonalInformation
            formData={formData}
            formErrors={formErrors}
            handleChange={handleChange}
            handleRegister={handleRegister}
          />
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
