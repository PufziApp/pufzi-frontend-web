import { Stack, Typography, useTheme } from '@mui/material'
import { PhoneInput } from 'react-international-phone'

import 'react-international-phone/style.css'

type PufziPhoneInputProps = {
  value: string
  onChange: (value: string) => void
  error?: boolean
  helperText?: string
}

export const PufziPhoneInput = ({
  value,
  onChange,
  error = false,
  helperText,
}: PufziPhoneInputProps) => {
  const theme = useTheme()

  return (
    <Stack spacing={0.5}>
      <Stack
        sx={{
          width: '100%',
          height: 56,

          border: '1px solid',
          borderColor: error ? 'error.main' : 'divider',
          borderRadius: '16px',
          bgcolor: 'background.paper',
          overflow: 'hidden',

          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',

          '&:hover': {
            borderColor: error ? 'error.main' : 'primary.main',
          },

          '&:focus-within': {
            borderColor: error ? 'error.main' : 'primary.main',
            boxShadow: (theme) =>
              error
                ? `0 0 0 1px ${theme.palette.error.main}`
                : `0 0 0 1px ${theme.palette.primary.main}`,
          },

          '& .react-international-phone-input-container': {
            width: '100%',
            height: '100%',
            display: 'flex',
            backgroundColor: 'transparent',
          },

          '& .react-international-phone-country-selector': {
            height: '100%',
          },

          '& .react-international-phone-country-selector-button': {
            height: '100%',
            minWidth: 90,
            px: 1.75,
            border: 'none',
            borderRadius: 0,
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            transition: 'background-color 0.2s ease',

            '&:hover': {
              backgroundColor: 'transparent',
            },
          },

          '& .react-international-phone-country-selector-button__button-content': {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          },

          '& .react-international-phone-country-selector-button__dropdown-arrow': {
            borderTopColor: `${theme.palette.text.secondary} !important`,
          },

          '& .react-international-phone-input': {
            flex: 1,
            width: '100% !important',
            height: '100% !important',
            border: 'none !important',
            borderRadius: '0 !important',
            outline: 'none !important',
            boxShadow: 'none !important',
            padding: '0 16px !important',
            backgroundColor: 'transparent !important',
            color: `${theme.palette.text.primary} !important`,
            fontFamily: 'inherit !important',
            fontSize: '16px !important',
            fontWeight: 500,
          },

          '& .react-international-phone-input:focus': {
            border: 'none !important',
            outline: 'none !important',
            boxShadow: 'none !important',
          },

          '& .react-international-phone-input::placeholder': {
            color: `${theme.palette.text.secondary} !important`,
            opacity: 0.75,
          },

          '& .react-international-phone-country-selector-dropdown': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: '12px',
            boxShadow: theme.shadows[8],
            overflow: 'hidden',
            zIndex: 1500,
          },

          '& .react-international-phone-country-selector-dropdown__list-item': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,

            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },

          '& .react-international-phone-country-selector-dropdown__list-item--selected': {
            backgroundColor: theme.palette.action.selected,
          },
        }}
      >
        <PhoneInput
          defaultCountry="ro"
          value={value}
          onChange={onChange}
          forceDialCode
          inputProps={{
            name: 'phone',
            autoComplete: 'tel',
          }}
        />
      </Stack>

      {helperText && (
        <Typography
          sx={{
            ml: 1.75,
            fontSize: 12,
            lineHeight: 1.5,
            color: error ? 'error.main' : 'text.secondary',
          }}
        >
          {helperText}
        </Typography>
      )}
    </Stack>
  )
}
