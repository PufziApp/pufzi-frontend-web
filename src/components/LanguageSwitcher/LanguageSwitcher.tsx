import { useState } from 'react'

import { Button, Menu, MenuItem, Stack, Typography } from '@mui/material'

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'

import { useTranslation } from 'react-i18next'
import { RO, GB, HU } from 'country-flag-icons/react/3x2'

type LanguageCode = 'ro' | 'en' | 'hu'

const LANGUAGE_OPTIONS = [
  {
    code: 'ro' as const,
    label: 'Română',
    shortLabel: 'RO',
    Flag: RO,
  },
  {
    code: 'en' as const,
    label: 'English',
    shortLabel: 'EN',
    Flag: GB,
  },
  {
    code: 'hu' as const,
    label: 'Magyar',
    shortLabel: 'HU',
    Flag: HU,
  },
]

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const open = Boolean(anchorEl)

  const normalizedLanguage = i18n.language?.split('-')[0] as LanguageCode

  const currentLanguage =
    LANGUAGE_OPTIONS.find((language) => language.code === normalizedLanguage) ?? LANGUAGE_OPTIONS[0]

  const CurrentFlag = currentLanguage.Flag

  const handleLanguageChange = async (language: LanguageCode) => {
    await i18n.changeLanguage(language)

    localStorage.setItem('pufzi-language', language)

    setAnchorEl(null)
  }

  return (
    <>
      <Button
        onClick={(event) => setAnchorEl(event.currentTarget)}
        endIcon={<KeyboardArrowDownRoundedIcon />}
        sx={{
          minWidth: 92,
          height: 40,
          px: 1.5,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
          color: 'text.primary',
          textTransform: 'none',
          fontWeight: 600,

          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: 'center',
          }}
        >
          <CurrentFlag
            style={{
              width: 22,
              height: 16,
              borderRadius: 2,
              objectFit: 'cover',
            }}
          />

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {currentLanguage.shortLabel}
          </Typography>
        </Stack>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              width: 190,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
            },
          },
        }}
      >
        {LANGUAGE_OPTIONS.map((language) => {
          const Flag = language.Flag

          return (
            <MenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              selected={currentLanguage.code === language.code}
            >
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <Flag
                  style={{
                    width: 24,
                    height: 18,
                    borderRadius: 2,
                    objectFit: 'cover',
                  }}
                />

                <Typography
                  sx={{
                    flex: 1,
                  }}
                >
                  {language.label}
                </Typography>

                {currentLanguage.code === language.code && <CheckRoundedIcon fontSize="small" />}
              </Stack>
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}
