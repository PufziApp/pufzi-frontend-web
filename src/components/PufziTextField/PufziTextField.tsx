import { TextField, type TextFieldProps } from '@mui/material'

type PufziTextFieldProps = TextFieldProps

export const PufziTextField = ({ sx, ...props }: PufziTextFieldProps) => {
  return (
    <TextField
      fullWidth
      {...props}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '14px',
          bgcolor: 'background.paper',
        },
        '& .MuiInputLabel-root': {
          color: 'text.secondary',
        },
        ...sx,
      }}
    />
  )
}
