import { alpha, TextField, type TextFieldProps } from '@mui/material'

type PufziTextFieldProps = TextFieldProps

export const PufziTextField = ({ sx, ...props }: PufziTextFieldProps) => {
  return (
    <TextField
      fullWidth
      {...props}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '14px',

          bgcolor: (theme) =>
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.common.white, 0.045)
              : theme.palette.background.paper,

          color: 'text.primary',

          transition: 'all 0.2s ease',

          '& fieldset': {
            borderColor: (theme) =>
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary.main, 0.35)
                : theme.palette.divider,
          },

          '&:hover fieldset': {
            borderColor: 'primary.main',
          },

          '&.Mui-focused': {
            bgcolor: (theme) =>
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary.main, 0.08)
                : theme.palette.background.paper,
          },

          '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
            borderWidth: '1.5px',
          },
        },

        '& .MuiInputLabel-root': {
          color: 'text.secondary',
        },

        '& .MuiInputLabel-root.Mui-focused': {
          color: 'primary.main',
        },

        '& .MuiIconButton-root': {
          color: 'primary.main',
        },

        ...sx,
      }}
    />
  )
}
