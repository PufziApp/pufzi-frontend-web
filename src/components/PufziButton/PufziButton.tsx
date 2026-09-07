import { Button, type ButtonProps } from '@mui/material'
import type { FC } from 'react'

type PufziButtonType = ButtonProps & {
  label: string
}

export const PufziButton: FC<PufziButtonType> = ({ label, ...props }) => {
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        textTransform: 'none',
        borderRadius: '50px',
        px: 2.5,
        py: 1,
        fontWeight: 700,
        '&:hover': {
          bgcolor: 'secondary.main',
          color: 'secondary.contrastText',
        },
      }}
      {...props}
    >
      {label}
    </Button>
  )
}
