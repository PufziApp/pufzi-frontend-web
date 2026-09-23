import { Divider, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'

type SummaryColumnProps = {
  title: string
  children: ReactNode
}

export const SummaryColumn = ({ title, children }: SummaryColumnProps) => {
  return (
    <Stack
      spacing={1.25}
      sx={{
        p: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
        bgcolor: 'background.default',
        minHeight: {
          xs: 'auto',
          md: 210,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 800,
          color: 'text.primary',
          fontFamily: '"Nunito", sans-serif',
        }}
      >
        {title}
      </Typography>

      <Divider />

      <Stack spacing={1.1}>{children}</Stack>
    </Stack>
  )
}
