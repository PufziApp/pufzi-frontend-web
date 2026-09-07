import { Button, type ButtonProps } from '@mui/material'
import type { FC } from 'react'

type PufziLinkButtonType = ButtonProps & {
  label: string
}

export const PufziLinkButton: FC<PufziLinkButtonType> = ({ label, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      sx={{
        color: 'text.secondary',
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 600,
        '&:hover': {
          bgcolor: 'transparent',
          color: 'text.primary',
        },
      }}
    >
      {label}
    </Button>
  )
}
