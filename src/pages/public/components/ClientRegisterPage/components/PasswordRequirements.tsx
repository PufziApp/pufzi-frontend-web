import { Stack, Typography } from '@mui/material'

import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'

import { useTranslation } from 'react-i18next'
import { passwordRules } from '../types/client-register-page.types'

type PasswordRequirementsProps = {
  password: string
}

export const PasswordRequirements = ({ password }: PasswordRequirementsProps) => {
  const { t } = useTranslation('ClientRegisterPage')

  const hasStartedTyping = password.length > 0

  const requirements = [
    {
      key: 'minLength',
      label: t('passwordRequirements.minLength'),
      isValid: passwordRules.minLength(password),
    },
    {
      key: 'uppercase',
      label: t('passwordRequirements.uppercase'),
      isValid: passwordRules.uppercase(password),
    },
    {
      key: 'number',
      label: t('passwordRequirements.number'),
      isValid: passwordRules.number(password),
    },
    {
      key: 'specialCharacter',
      label: t('passwordRequirements.specialCharacter'),
      isValid: passwordRules.specialCharacter(password),
    },
  ]

  return (
    <Stack
      spacing={1.25}
      sx={{
        px: 1.75,
        py: 1.5,

        borderRadius: 1.5,

        bgcolor: (theme) =>
          theme.palette.mode === 'dark'
            ? theme.palette.action.hover
            : theme.palette.background.default,

        border: '1px solid',
        borderColor: 'divider',

        transition: 'all 0.2s ease',
      }}
    >
      <Typography
        sx={{
          fontSize: 12.5,
          fontWeight: 700,
          color: 'text.primary',
        }}
      >
        {t('passwordRequirements.title')}
      </Typography>

      <Stack
        sx={{
          display: 'grid',

          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
          },

          gap: 1,
        }}
      >
        {requirements.map(({ key, label, isValid }) => {
          const statusColor = !hasStartedTyping
            ? 'text.secondary'
            : isValid
              ? 'success.main'
              : 'error.main'

          return (
            <Stack
              key={key}
              direction="row"
              spacing={0.8}
              sx={{
                alignItems: 'center',
                minWidth: 0,
              }}
            >
              {!hasStartedTyping ? (
                <CircleOutlinedIcon
                  sx={{
                    fontSize: 16,
                    color: 'text.secondary',
                    flexShrink: 0,
                  }}
                />
              ) : isValid ? (
                <CheckRoundedIcon
                  sx={{
                    fontSize: 17,
                    color: 'success.main',
                    flexShrink: 0,
                  }}
                />
              ) : (
                <CloseRoundedIcon
                  sx={{
                    fontSize: 17,
                    color: 'error.main',
                    flexShrink: 0,
                  }}
                />
              )}

              <Typography
                sx={{
                  fontSize: 12.5,
                  lineHeight: 1.3,

                  fontWeight: hasStartedTyping && isValid ? 600 : 500,

                  color: statusColor,

                  transition: 'color 0.2s ease',
                }}
              >
                {label}
              </Typography>
            </Stack>
          )
        })}
      </Stack>
    </Stack>
  )
}
