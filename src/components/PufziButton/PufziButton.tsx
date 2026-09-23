import { Button, type ButtonProps } from '@mui/material'
import type { FC } from 'react'
import type { To } from 'react-router-dom'

type PufziButtonType = ButtonProps & {
  label: string
  to?: To
}

export const PufziButton: FC<PufziButtonType> = ({
  label,
  sx,
  variant = 'contained',
  ...props
}) => {
  return (
    <Button
      {...props}
      variant={variant}
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        textTransform: 'none',
        borderRadius: 1,
        px: 2.5,
        py: 1.2,
        fontWeight: 700,

        border: '1px solid',
        borderColor: 'primary.main',

        boxShadow: (theme) => `0 4px 12px ${theme.palette.action.selected}`,

        transition: 'all 0.2s ease',

        '&:hover': {
          bgcolor: 'primary.light',
          color: 'text.primary',
          borderColor: 'primary.main',
          transform: 'translateY(-2px)',

          boxShadow: (theme) => `0 8px 18px ${theme.palette.action.selected}`,
        },

        '&:active': {
          transform: 'translateY(0)',
          boxShadow: (theme) => `0 3px 8px ${theme.palette.action.hover}`,
        },

        ...sx,
      }}
    >
      {label}
    </Button>
  )
}
