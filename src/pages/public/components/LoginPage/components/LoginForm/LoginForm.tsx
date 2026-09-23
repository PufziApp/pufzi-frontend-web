import { Box, Stack } from '@mui/material'
import { PufziLinkButton } from '../../../../../../components/PufziLinkButton/PufziLinkButton'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import googleIcon from '../../../../../../assets/googleIcon.png'
import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'
import { PufziFormCard } from '../../../../../../components/PufziFormCard/PufziFormCard'
import { PufziFormHeader } from '../../../../../../components/PufziFormHeader/PufziFormHeader'
import { PufziFormTitle } from '../../../../../../components/PufziFormTitle/PufziFormTitle'
import { PufziTextField } from '../../../../../../components/PufziTextField/PufziTextField'
import { PufziDividerText } from '../../../../../../components/PufziDividerText/PufziDividerText'
import { PufziFormSubtitle } from '../../../../../../components/PufziFormSubtitle/PufziFormSubtitle'
import { useState } from 'react'
import { PufziRememberMe } from '../../../../../../components/PufziRememberMe/PufziRememberMe'

export const LoginForm = () => {
  const { t } = useTranslation(['LoginPage', 'Common'])
  const [rememberMe, setRememberMe] = useState(false)

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

      <Stack spacing={3} sx={{ mt: 3 }}>
        <PufziFormHeader />

        <Stack spacing={1}>
          <PufziFormTitle text={t('LoginPage:title')} />
          <PufziFormSubtitle text={t('LoginPage:subtitle')} />
        </Stack>

        <Stack spacing={2}>
          <PufziTextField label={t('LoginPage:email')} type="email" />

          <Stack spacing={0.75}>
            <PufziTextField label={t('LoginPage:password')} type="password" />

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

        <PufziButton label={t('Common:login')} fullWidth sx={{ fontSize: 18 }} />

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
            sx={{
              minWidth: 170,
              height: 54,
              bgcolor: 'background.paper',
              color: 'text.primary',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
              fontSize: 15,
              fontWeight: 600,
              transition: 'all 0.2s ease',

              '&:hover': {
                bgcolor: 'background.paper',
                color: 'text.primary',
                transform: 'translateY(-2px)',
                borderColor: 'primary.main',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
              },
            }}
          />
        </Stack>
      </Stack>
    </PufziFormCard>
  )
}
