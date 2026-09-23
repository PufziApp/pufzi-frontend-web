import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

import { PufziButton } from '../../../../components/PufziButton/PufziButton'
import { PufziLinkButton } from '../../../../components/PufziLinkButton/PufziLinkButton'
import { useTranslation } from 'react-i18next'
import { ThemeSwitcher } from '../../../../components/ThemeSwitcher/ThemeSwitcher'
import { LanguageSwitcher } from '../../../../components/LanguageSwitcher/LanguageSwitcher'
import { MENU_OPTIONS } from './types/menuOptions'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const { t } = useTranslation(['LandingPage', 'Common'])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleCloseMenu = () => {
    setMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    window.location.href = '/'
  }

  return (
    <>
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
        <Container
          maxWidth="xl"
          sx={{
            px: {
              xs: 2,
              sm: 3,
              md: 3,
              lg: 3,
            },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              height: {
                xs: 64,
                sm: 68,
                md: 72,
                lg: 76,
              },

              minHeight: {
                xs: '64px !important',
                sm: '68px !important',
                md: '72px !important',
                lg: '76px !important',
              },

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            {/* LOGO */}
            <Stack
              direction="row"
              spacing={{
                xs: 0.7,
                sm: 1,
                lg: 1.2,
              }}
              onClick={handleLogoClick}
              sx={{
                cursor: 'pointer',
                height: '100%',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: 42,
                    sm: 44,
                    md: 46,
                    lg: 48,
                  },

                  height: {
                    xs: 42,
                    sm: 44,
                    md: 46,
                    lg: 48,
                  },

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
                    width: {
                      xs: 60,
                      sm: 64,
                      md: 66,
                      lg: 70,
                    },

                    height: {
                      xs: 60,
                      sm: 64,
                      md: 66,
                      lg: 70,
                    },

                    objectFit: 'contain',
                    display: 'block',
                    transform: 'scale(1.12)',
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: {
                    xs: 21,
                    sm: 22,
                    md: 23,
                    lg: 24,
                  },

                  fontWeight: 800,
                  lineHeight: 1,
                  color: 'text.secondary',
                  fontFamily: '"Nunito", sans-serif',
                }}
              >
                {t('Common:appName')}
              </Typography>
            </Stack>

            {/* DESKTOP MENU */}
            <Stack
              direction="row"
              spacing={{
                md: 2,
                lg: 4,
              }}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },

                position: {
                  md: 'static',
                  lg: 'absolute',
                },

                left: {
                  lg: '50%',
                },

                transform: {
                  lg: 'translateX(-50%)',
                },

                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              {MENU_OPTIONS.map((item) => (
                <PufziLinkButton key={item.id} label={t(item.translationKey)} href={item.href} />
              ))}
            </Stack>

            {/* DESKTOP ACTIONS */}
            <Stack
              direction="row"
              spacing={{
                md: 0.7,
                lg: 2,
              }}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },

                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <LanguageSwitcher />

              <ThemeSwitcher />

              <Button
                component={Link}
                to="/login"
                sx={{
                  color: 'text.primary',
                  textTransform: 'none',
                  fontSize: {
                    md: 14,
                    lg: 16,
                  },
                  fontWeight: 600,
                  px: {
                    md: 1,
                    lg: 1.5,
                  },
                  minWidth: 'auto',
                }}
              >
                {t('Common:login')}
              </Button>

              <PufziButton label={t('Common:register')} component={Link} to="/register" />
            </Stack>

            {/* MOBILE / TABLET */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },

                alignItems: 'center',
              }}
            >
              {/* TABLET */}
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'block',
                  },
                }}
              >
                <LanguageSwitcher />
              </Box>

              <Box
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'block',
                  },
                }}
              >
                <ThemeSwitcher />
              </Box>

              <IconButton
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                sx={{
                  width: 42,
                  height: 42,
                  color: 'text.primary',
                }}
              >
                <MenuRoundedIcon
                  sx={{
                    fontSize: 30,
                  }}
                />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleCloseMenu}
        slotProps={{
          paper: {
            sx: {
              width: {
                xs: '100%',
                sm: 360,
              },

              maxWidth: '100vw',
              bgcolor: 'background.paper',
            },
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',

            p: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          {/* HEADER DRAWER */}
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack
              direction="row"
              spacing={0.8}
              onClick={handleLogoClick}
              sx={{
                cursor: 'pointer',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src="/LogoPufziColor.png"
                  alt="Pufzi"
                  sx={{
                    width: 64,
                    height: 64,
                    objectFit: 'contain',
                    transform: 'scale(1.12)',
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 800,
                  lineHeight: 1,
                  color: 'text.secondary',
                  fontFamily: '"Nunito", sans-serif',
                }}
              >
                {t('Common:appName')}
              </Typography>
            </Stack>

            <IconButton
              onClick={handleCloseMenu}
              aria-label="Close menu"
              sx={{
                color: 'text.primary',
              }}
            >
              <CloseRoundedIcon
                sx={{
                  fontSize: 30,
                }}
              />
            </IconButton>
          </Stack>

          <Divider sx={{ my: 2.5 }} />

          {/* LINKS */}
          <Stack spacing={1}>
            {MENU_OPTIONS.map((item) => (
              <Box
                key={item.id}
                onClick={handleCloseMenu}
                sx={{
                  width: '100%',

                  '& > *': {
                    width: '100%',
                    justifyContent: 'flex-start',
                  },
                }}
              >
                <PufziLinkButton label={t(item.translationKey)} href={item.href} />
              </Box>
            ))}
          </Stack>

          <Divider sx={{ my: 2.5 }} />

          {/* MOBILE SWITCHERS */}
          <Stack
            direction="row"
            sx={{
              display: {
                xs: 'flex',
                sm: 'none',
              },
              mb: 2.5,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <LanguageSwitcher />
            <ThemeSwitcher />
          </Stack>

          {/* LOGIN / REGISTER */}
          <Stack
            spacing={1.5}
            sx={{
              mt: 'auto',
            }}
          >
            <Button
              fullWidth
              sx={{
                color: 'text.primary',
                textTransform: 'none',
                fontSize: 16,
                fontWeight: 600,
                minHeight: 46,
              }}
            >
              {t('Common:login')}
            </Button>

            <Box
              sx={{
                width: '100%',
                '& > *': {
                  width: '100%',
                },
              }}
            >
              <PufziButton label={t('Common:register')} to="/register" />
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </>
  )
}
