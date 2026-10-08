import { Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'

type TicketFieldRowProps = {
  icon: ReactNode
  label: string
  value: string
}

export const TicketFieldRow = ({ icon, label, value }: TicketFieldRowProps) => {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'flex-start', minWidth: 0 }}>
      <Stack
        sx={{
          width: 16,
          height: 16,
          mt: '2px',
          flexShrink: 0,
          color: 'primary.main',
        }}
      >
        {icon}
      </Stack>

      <Stack spacing={0} sx={{ minWidth: 0 }}>
        <Typography
          sx={{
            color: 'text.secondary',
            fontWeight: 600,
            fontSize: 10.5,
            letterSpacing: 0.3,
            textTransform: 'uppercase',
            lineHeight: 1.3,
          }}
        >
          {label}
        </Typography>

        <Typography
          sx={{
            color: 'text.primary',
            fontWeight: 700,
            fontSize: 13.5,
            lineHeight: 1.25,
            wordBreak: 'break-word',
          }}
        >
          {value || '—'}
        </Typography>
      </Stack>
    </Stack>
  )
}
