import { useState } from 'react'

import { Box, IconButton, InputAdornment, Stack, Typography } from '@mui/material'

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import googleIcon from '../../../../../../assets/googleIcon.png'

import { PufziLinkButton } from '../../../../../../components/PufziLinkButton/PufziLinkButton'
import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'
import { PufziFormCard } from '../../../../../../components/PufziFormCard/PufziFormCard'
import { PufziFormHeader } from '../../../../../../components/PufziFormHeader/PufziFormHeader'
import { PufziFormTitle } from '../../../../../../components/PufziFormTitle/PufziFormTitle'
import { PufziTextField } from '../../../../../../components/PufziTextField/PufziTextField'
import { PufziDividerText } from '../../../../../../components/PufziDividerText/PufziDividerText'
import { PufziFormSubtitle } from '../../../../../../components/PufziFormSubtitle/PufziFormSubtitle'
import { PufziRememberMe } from '../../../../../../components/PufziRememberMe/PufziRememberMe'

export const LoginForm = () => {
  const { t } = useTranslation(['LoginPage', 'Common'])

  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <PufziFormCard
      sx={{
        alignSelf: {
          xs: 'center',
          md: 'flex-start',
        },
      }}
    >
      <Stack sx={{ alignItems: 'flex-start' }}>
        <PufziLinkButton component={Link} to="/" label={t('backToWebsite')} />
      </Stack>

      <Stack
        spacing={3}
        sx={{
          mt: 3,
        }}
      >
        <PufziFormHeader />

        <Stack spacing={1}>
          <PufziFormTitle text={t('LoginPage:title')} />

          <PufziFormSubtitle text={t('LoginPage:subtitle')} />
        </Stack>

        {/* FORM */}
        <Stack spacing={2}>
          <PufziTextField label={t('LoginPage:email')} type="email" />

          <Stack spacing={0.75}>
            <PufziTextField
              label={t('LoginPage:password')}
              type={showPassword ? 'text' : 'password'}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword((previous) => !previous)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        sx={{
                          color: 'primary.main',

                          '&:hover': {
                            bgcolor: 'action.hover',
                          },
                        }}
                      >
                        {showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Stack
              direction="row"
              spacing={2}
              sx={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <PufziRememberMe
                label={t('LoginPage:rememberMe')}
                checked={rememberMe}
                onChange={(_, checked) => setRememberMe(checked)}
              />

              <PufziLinkButton
                component={Link}
                to="/forgot-password"
                label={t('LoginPage:forgotPassword')}
                sx={{
                  color: 'primary.main',
                  fontSize: 15,
                  fontWeight: 600,
                }}
              />
            </Stack>
          </Stack>
        </Stack>

        {/* LOGIN */}
        <PufziButton
          label={t('Common:login')}
          fullWidth
          sx={{
            fontSize: 18,
          }}
        />

        {/* GOOGLE */}
        <Stack spacing={2}>
          <PufziDividerText text={t('LoginPage:continueWith')} />

          <PufziButton
            label="Google"
            startIcon={
              <Box
                component="img"
                src={googleIcon}
                alt=""
                sx={{
                  width: 24,
                  height: 24,
                  objectFit: 'contain',
                }}
              />
            }
            fullWidth
            sx={{
              height: 54,

              bgcolor: (theme) =>
                theme.palette.mode === 'dark'
                  ? theme.palette.action.hover
                  : theme.palette.background.paper,

              color: 'text.primary',

              border: '1px solid',
              borderColor: 'divider',

              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',

              fontSize: 15,
              fontWeight: 600,

              transition: 'all 0.2s ease',

              '&:hover': {
                bgcolor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? theme.palette.action.selected
                    : theme.palette.background.paper,

                color: 'text.primary',

                transform: 'translateY(-2px)',

                borderColor: 'primary.main',

                boxShadow: (theme) => `0 6px 16px ${theme.palette.action.selected}`,
              },
            }}
          />
        </Stack>

        {/* REGISTER */}
        <Stack spacing={1.5}>
          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {t('LoginPage:noAccount')}
            </Typography>
          </Stack>

          <Stack
            direction={{
              xs: 'column',
              sm: 'row',
            }}
            spacing={1.5}
          >
            {/* CLIENT */}
            <PufziButton
              component={Link}
              to="/client-register"
              label={t('LoginPage:createClientAccount')}
              startIcon={
                <PersonRoundedIcon
                  sx={{
                    fontSize: 20,
                  }}
                />
              }
              fullWidth
              sx={{
                bgcolor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? theme.palette.action.selected
                    : theme.palette.primary.light,

                color: (theme) =>
                  theme.palette.mode === 'dark'
                    ? theme.palette.primary.main
                    : theme.palette.secondary.contrastText,

                border: '1px solid',

                borderColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? theme.palette.primary.main
                    : theme.palette.primary.light,

                '&:hover': {
                  bgcolor: 'primary.main',

                  color: 'primary.contrastText',

                  borderColor: 'primary.main',

                  transform: 'translateY(-2px)',

                  boxShadow: (theme) => `0 8px 18px ${theme.palette.action.selected}`,
                },
              }}
            />

            {/* BUSINESS */}
            <PufziButton
              component={Link}
              to="/register"
              label={t('LoginPage:createBusinessAccount')}
              startIcon={
                <StorefrontRoundedIcon
                  sx={{
                    fontSize: 20,
                  }}
                />
              }
              fullWidth
            />
          </Stack>
        </Stack>
      </Stack>
    </PufziFormCard>
  )
}
