import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material'

import { PufziButton } from '../../../../components/PufziButton/PufziButton'
import { PufziLinkButton } from '../../../../components/PufziLinkButton/PufziLinkButton'
import { useTranslation } from 'react-i18next'
import { ThemeSwitcher } from '../../../../components/ThemeSwitcher/ThemeSwitcher'
import { LanguageSwitcher } from '../../../../components/LanguageSwitcher/LanguageSwitcher'
import { MENU_OPTIONS } from './types/menuOptions'

export const Navbar = () => {
  const { t } = useTranslation(['LandingPage', 'Common'])

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: 76,
            minHeight: '76px !important',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Stack
            direction="row"
            spacing={1.2}
            sx={{
              cursor: 'pointer',
              height: '100%',
              alignItems: 'center',
            }}
            onClick={() => {
              window.location.href = '/'
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src="/LogoPufziColor.png"
                alt="Pufzi"
                sx={{
                  width: 70,
                  height: 70,
                  objectFit: 'contain',
                  display: 'block',
                  transform: 'scale(1.12)',
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 800,
                lineHeight: 1,
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                fontFamily: '"Nunito", sans-serif',
              }}
            >
              {t('Common:appName')}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={4}
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              alignItems: 'center',
            }}
          >
            {MENU_OPTIONS.map((item) => (
              <PufziLinkButton key={item.id} label={t(item.translationKey)} href={item.href} />
            ))}
          </Stack>

          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <LanguageSwitcher />
            <ThemeSwitcher />

            <Button
              sx={{
                color: 'text.primary',
                textTransform: 'none',
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {t('Common:login')}
            </Button>

            <PufziButton label={t('Common:register')} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
