import { Checkbox, FormControlLabel, type CheckboxProps } from '@mui/material'
import type { ChangeEvent } from 'react'

type PufziRememberMeProps = {
  label?: string
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
  checkboxProps?: CheckboxProps
}

export const PufziRememberMe = ({
  label,
  checked,
  onChange,
  checkboxProps,
}: PufziRememberMeProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          size="small"
          {...checkboxProps}
          sx={{
            color: 'divider',
            p: 0.5,

            '&.Mui-checked': {
              color: 'primary.main',
            },

            '&:hover': {
              bgcolor: 'action.hover',
            },

            ...checkboxProps?.sx,
          }}
        />
      }
      label={label}
      sx={{
        m: 0,

        '& .MuiFormControlLabel-label': {
          fontSize: 15,
          fontWeight: 500,
          color: 'text.secondary',
          fontFamily: '"Inter", sans-serif',
        },
      }}
    />
  )
}
