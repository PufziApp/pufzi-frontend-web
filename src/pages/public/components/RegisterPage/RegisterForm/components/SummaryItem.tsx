import { Stack, Typography } from '@mui/material'

type SummaryItemProps = {
  label: string
  value: string
}

export const SummaryItem = ({ label, value }: SummaryItemProps) => {
  return (
    <Stack spacing={0.2}>
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          fontWeight: 500,
          fontSize: 13,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          color: 'text.primary',
          fontWeight: 600,
          wordBreak: 'break-word',
          fontSize: 15,
        }}
      >
        {value || '—'}
      </Typography>
    </Stack>
  )
}
