import { useState } from 'react'

import { Button, Menu, MenuItem, Stack, Typography } from '@mui/material'

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'

import { useTranslation } from 'react-i18next'

type LanguageCode = 'ro' | 'en' | 'hu'

const LANGUAGE_OPTIONS: {
  code: LanguageCode
  label: string
  shortLabel: string
}[] = [
  {
    code: 'ro',
    label: 'Română',
    shortLabel: 'RO',
  },
  {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
  },
  {
    code: 'hu',
    label: 'Magyar',
    shortLabel: 'HU',
  },
]

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const open = Boolean(anchorEl)

  const normalizedLanguage = i18n.language?.split('-')[0] as LanguageCode

  const currentLanguage =
    LANGUAGE_OPTIONS.find((language) => language.code === normalizedLanguage) ?? LANGUAGE_OPTIONS[0]

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
          minWidth: 72,
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
        {currentLanguage.shortLabel}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              width: 170,
              border: '1px solid',
              borderColor: 'divider',
            },
          },
        }}
      >
        {LANGUAGE_OPTIONS.map((language) => (
          <MenuItem key={language.code} onClick={() => handleLanguageChange(language.code)}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                width: '100%',
                alignItems: 'center',
              }}
            >
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
        ))}
      </Menu>
    </>
  )
}
