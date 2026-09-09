import { Button, type ButtonProps } from '@mui/material'
import type { FC } from 'react'

type PufziLinkButtonType = ButtonProps & {
  label: string
}

export const PufziLinkButton: FC<PufziLinkButtonType> = ({
  label,
  sx,
  variant = 'text',
  ...props
}) => {
  return (
    <Button
      {...props}
      variant={variant}
      sx={{
        color: 'text.secondary',
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 600,
        '&:hover': {
          bgcolor: 'transparent',
          color: 'text.primary',
        },
        ...sx,
      }}
    >
      {label}
    </Button>
  )
}
