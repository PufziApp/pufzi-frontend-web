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

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { PufziButton } from '../../../../components/PufziButton/PufziButton'
import { PufziLinkButton } from '../../../../components/PufziLinkButton/PufziLinkButton'
import { ThemeSwitcher } from '../../../../components/ThemeSwitcher/ThemeSwitcher'
import { LanguageSwitcher } from '../../../../components/LanguageSwitcher/LanguageSwitcher'

import { MENU_OPTIONS } from './types/menuOptions'

export const Navbar = () => {
  const { t } = useTranslation(['LandingPage', 'Common'])

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleOpenMenu = () => {
    setMobileMenuOpen(true)
  }

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

          zIndex: (theme) => theme.zIndex.appBar,
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
              xl: 4,
            },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              height: {
                xs: 60,
                sm: 64,
                md: 68,
                lg: 76,
              },

              minHeight: {
                xs: '60px !important',
                sm: '64px !important',
                md: '68px !important',
                lg: '76px !important',
              },
              display: {
                xs: 'flex',
                lg: 'grid',
              },

              gridTemplateColumns: {
                lg: 'auto minmax(0, 1fr) auto',
              },

              alignItems: 'center',

              justifyContent: {
                xs: 'space-between',
                lg: 'initial',
              },

              columnGap: {
                xs: 1,
                sm: 2,
                lg: 2,
                xl: 3,
              },

              width: '100%',
            }}
          >
            {/* LOGO */}
            <Stack
              direction="row"
              spacing={{
                xs: 0.6,
                sm: 0.8,
                md: 1,
                lg: 1.2,
              }}
              onClick={handleLogoClick}
              sx={{
                cursor: 'pointer',

                height: '100%',

                alignItems: 'center',

                flexShrink: 0,

                minWidth: 0,

                mr: {
                  xs: 'auto',
                  lg: 0,
                },
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: 38,
                    sm: 42,
                    md: 44,
                    lg: 48,
                  },

                  height: {
                    xs: 38,
                    sm: 42,
                    md: 44,
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
                      xs: 56,
                      sm: 60,
                      md: 64,
                      lg: 70,
                    },

                    height: {
                      xs: 56,
                      sm: 60,
                      md: 64,
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
                    xs: 20,
                    sm: 21,
                    md: 22,
                    lg: 24,
                  },

                  fontWeight: 800,

                  lineHeight: 1,

                  color: 'text.secondary',

                  fontFamily: '"Nunito", sans-serif',

                  whiteSpace: 'nowrap',
                }}
              >
                {t('Common:appName')}
              </Typography>
            </Stack>

            {/* DESKTOP MENU */}
            <Stack
              direction="row"
              spacing={{
                lg: 1.5,
                xl: 3,
              }}
              sx={{
                display: {
                  xs: 'none',
                  lg: 'flex',
                },

                alignItems: 'center',

                justifyContent: 'center',

                minWidth: 0,

                '& > *': {
                  whiteSpace: 'nowrap',
                },
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
                lg: 0.5,
                xl: 1,
              }}
              sx={{
                display: {
                  xs: 'none',
                  lg: 'flex',
                },

                alignItems: 'center',

                justifyContent: 'flex-end',

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
                    lg: 13,
                    xl: 15,
                  },

                  fontWeight: 600,

                  px: {
                    lg: 0.7,
                    xl: 1.3,
                  },

                  minWidth: 'auto',

                  whiteSpace: 'nowrap',
                }}
              >
                {t('Common:login')}
              </Button>

              <PufziButton
                label={t('Common:clientRegister')}
                component={Link}
                to="/client-register"
                sx={{
                  whiteSpace: 'nowrap',

                  px: {
                    lg: 1.5,
                    xl: 2.5,
                  },

                  fontSize: {
                    lg: 12,
                    xl: 14,
                  },

                  bgcolor: 'primary.light',

                  color: 'secondary.contrastText',

                  '&:hover': {
                    bgcolor: 'primary.main',

                    color: 'primary.contrastText',

                    borderColor: 'primary.main',

                    transform: 'translateY(-2px)',

                    boxShadow: (theme) => `0 8px 18px ${theme.palette.action.selected}`,
                  },
                }}
              />

              <PufziButton
                label={t('Common:businessRegister')}
                component={Link}
                to="/register"
                sx={{
                  whiteSpace: 'nowrap',

                  px: {
                    lg: 1.5,
                    xl: 2.5,
                  },

                  fontSize: {
                    lg: 12,
                    xl: 14,
                  },
                }}
              />
            </Stack>

            {/* MOBILE / TABLET ACTIONS */}
            <Stack
              direction="row"
              spacing={{
                xs: 0.25,
                sm: 0.5,
                md: 0.75,
              }}
              sx={{
                display: {
                  xs: 'flex',
                  lg: 'none',
                },

                alignItems: 'center',

                justifyContent: 'flex-end',

                flexShrink: 0,

                ml: 'auto',
              }}
            >
              {/* TABLET LANGUAGE */}
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

              {/* TABLET THEME */}
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

              {/* HAMBURGER */}
              <IconButton
                onClick={handleOpenMenu}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                sx={{
                  width: {
                    xs: 40,
                    sm: 42,
                    md: 44,
                  },

                  height: {
                    xs: 40,
                    sm: 42,
                    md: 44,
                  },

                  color: 'text.primary',

                  flexShrink: 0,
                }}
              >
                <MenuRoundedIcon
                  sx={{
                    fontSize: {
                      xs: 28,
                      sm: 30,
                    },
                  }}
                />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE / TABLET DRAWER */}
      <Drawer
        id="mobile-navigation"
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleCloseMenu}
        ModalProps={{
          keepMounted: true,
        }}
        slotProps={{
          paper: {
            sx: {
              width: {
                xs: '100%',
                sm: 380,
                md: 400,
              },

              maxWidth: '100vw',

              bgcolor: 'background.paper',

              overflowX: 'hidden',
            },
          },
        }}
      >
        <Box
          sx={{
            height: '100%',

            minHeight: 0,

            display: 'flex',

            flexDirection: 'column',

            overflowY: 'auto',

            overflowX: 'hidden',

            p: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          {/* DRAWER HEADER */}
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',

              justifyContent: 'space-between',

              flexShrink: 0,

              width: '100%',
            }}
          >
            <Stack
              direction="row"
              spacing={0.8}
              onClick={handleLogoClick}
              sx={{
                cursor: 'pointer',

                alignItems: 'center',

                minWidth: 0,

                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: 40,
                    sm: 44,
                  },

                  height: {
                    xs: 40,
                    sm: 44,
                  },

                  display: 'flex',

                  justifyContent: 'center',

                  alignItems: 'center',

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
                    },

                    height: {
                      xs: 60,
                      sm: 64,
                    },

                    objectFit: 'contain',

                    transform: 'scale(1.12)',
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: {
                    xs: 21,
                    sm: 22,
                  },

                  fontWeight: 800,

                  lineHeight: 1,

                  color: 'text.secondary',

                  fontFamily: '"Nunito", sans-serif',

                  whiteSpace: 'nowrap',
                }}
              >
                {t('Common:appName')}
              </Typography>
            </Stack>

            <IconButton
              onClick={handleCloseMenu}
              aria-label="Close menu"
              sx={{
                width: 42,

                height: 42,

                color: 'text.primary',

                flexShrink: 0,
              }}
            >
              <CloseRoundedIcon
                sx={{
                  fontSize: 30,
                }}
              />
            </IconButton>
          </Stack>

          <Divider
            sx={{
              my: {
                xs: 2,
                sm: 2.5,
              },
            }}
          />

          {/* NAVIGATION LINKS */}
          <Stack
            spacing={{
              xs: 0.5,
              sm: 1,
            }}
            sx={{
              width: '100%',

              alignItems: 'center',
            }}
          >
            {MENU_OPTIONS.map((item) => (
              <Box
                key={item.id}
                onClick={handleCloseMenu}
                sx={{
                  width: '100%',

                  display: 'flex',

                  alignItems: 'center',

                  justifyContent: 'center',

                  textAlign: 'center',

                  /*
                   * Force centering regardless of theme-specific
                   * styles inside PufziLinkButton.
                   */
                  '& > *': {
                    width: '100% !important',

                    display: 'flex !important',

                    justifyContent: 'center !important',

                    alignItems: 'center !important',

                    textAlign: 'center !important',
                  },

                  '& a': {
                    justifyContent: 'center !important',

                    textAlign: 'center !important',
                  },

                  '& button': {
                    justifyContent: 'center !important',

                    textAlign: 'center !important',
                  },
                }}
              >
                <PufziLinkButton label={t(item.translationKey)} href={item.href} />
              </Box>
            ))}
          </Stack>

          <Divider
            sx={{
              my: {
                xs: 2,
                sm: 2.5,
              },
            }}
          />

          {/* PHONE SWITCHERS */}
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

              gap: 2,

              width: '100%',
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

              pt: 2,

              width: '100%',
            }}
          >
            <Button
              component={Link}
              to="/login"
              fullWidth
              onClick={handleCloseMenu}
              sx={{
                color: 'text.primary',

                textTransform: 'none',

                fontSize: 16,

                fontWeight: 600,

                minHeight: 46,

                borderRadius: 2,
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
              <PufziButton
                label={t('Common:clientRegister')}
                component={Link}
                to="/client-register"
                onClick={handleCloseMenu}
                sx={{
                  width: '100%',

                  minHeight: 46,

                  bgcolor: 'primary.light',

                  color: 'secondary.contrastText',

                  '&:hover': {
                    bgcolor: 'primary.main',

                    color: 'primary.contrastText',

                    borderColor: 'primary.main',

                    boxShadow: (theme) => `0 8px 18px ${theme.palette.action.selected}`,
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                width: '100%',

                '& > *': {
                  width: '100%',
                },
              }}
            >
              <PufziButton
                label={t('Common:businessRegister')}
                component={Link}
                to="/register"
                onClick={handleCloseMenu}
                sx={{
                  width: '100%',

                  minHeight: 46,
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </>
  )
}
