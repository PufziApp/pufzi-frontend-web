import { useState } from 'react'

import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  type SxProps,
  type Theme,
} from '@mui/material'

import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'

import { useTranslation } from 'react-i18next'
import { useAppTheme } from '../../theme/useAppTheme'

export const ThemeSwitcher = () => {
  const { mode, themeColor, setMode, setThemeColor } = useAppTheme()

  const { t } = useTranslation('Common')

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const checkSlotSx: SxProps<Theme> = {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }

  const menuItemSx: SxProps<Theme> = {
    width: '100%',
    minHeight: 52,
    px: 2,
    boxSizing: 'border-box',
  }

  return (
    <>
      <IconButton
        onClick={(event) => setAnchorEl(event.currentTarget)}
        sx={{
          width: 40,
          height: 40,
          border: '1px solid',
          borderColor: 'divider',
          color: 'text.primary',
          bgcolor: 'background.paper',

          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
      >
        <PaletteRoundedIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              mt: 0.5,
              width: 260,
              minWidth: 260,
              maxWidth: 260,
              border: '1px solid',
              borderColor: 'divider',
              overflow: 'hidden',
            },
          },

          list: {
            sx: {
              p: 0,
              width: '100%',
            },
          },
        }}
      >
        <Typography
          sx={{
            px: 2,
            pt: 1.5,
            pb: 0.75,
            fontSize: 13,
            fontWeight: 700,
            color: 'text.secondary',
          }}
        >
          {t('navbar.color.title')}
        </Typography>

        <MenuItem
          selected={themeColor === 'orange'}
          onClick={() => setThemeColor('orange')}
          sx={menuItemSx}
        >
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                bgcolor: '#F97316',
                flexShrink: 0,
              }}
            />

            <Typography
              sx={{
                flex: 1,
                whiteSpace: 'nowrap',
              }}
            >
              {t('navbar.color.orange')}
            </Typography>

            <Box sx={checkSlotSx}>
              {themeColor === 'orange' && <CheckRoundedIcon fontSize="small" />}
            </Box>
          </Stack>
        </MenuItem>

        <MenuItem
          selected={themeColor === 'sage'}
          onClick={() => setThemeColor('sage')}
          sx={menuItemSx}
        >
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                bgcolor: '#6B8F71',
                flexShrink: 0,
              }}
            />

            <Typography
              sx={{
                flex: 1,
                whiteSpace: 'nowrap',
              }}
            >
              {t('navbar.color.green')}
            </Typography>

            <Box sx={checkSlotSx}>
              {themeColor === 'sage' && <CheckRoundedIcon fontSize="small" />}
            </Box>
          </Stack>
        </MenuItem>

        <Divider />

        <Typography
          sx={{
            px: 2,
            pt: 1.5,
            pb: 0.75,
            fontSize: 13,
            fontWeight: 700,
            color: 'text.secondary',
          }}
        >
          {t('navbar.mode.title')}
        </Typography>

        <MenuItem selected={mode === 'light'} onClick={() => setMode('light')} sx={menuItemSx}>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <LightModeRoundedIcon fontSize="small" />
            </Box>

            <Typography
              sx={{
                flex: 1,
                whiteSpace: 'nowrap',
              }}
            >
              {t('navbar.mode.light')}
            </Typography>

            <Box sx={checkSlotSx}>{mode === 'light' && <CheckRoundedIcon fontSize="small" />}</Box>
          </Stack>
        </MenuItem>

        <MenuItem selected={mode === 'dark'} onClick={() => setMode('dark')} sx={menuItemSx}>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <DarkModeRoundedIcon fontSize="small" />
            </Box>

            <Typography
              sx={{
                flex: 1,
                whiteSpace: 'nowrap',
              }}
            >
              {t('navbar.mode.dark')}
            </Typography>

            <Box sx={checkSlotSx}>{mode === 'dark' && <CheckRoundedIcon fontSize="small" />}</Box>
          </Stack>
        </MenuItem>
      </Menu>
    </>
  )
}
