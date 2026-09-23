import { Divider, Stack, Typography } from '@mui/material'

type PufziDividerTextProps = {
  text: string
}

export const PufziDividerText = ({ text }: PufziDividerTextProps) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Divider sx={{ flex: 1 }} />

      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </Typography>

      <Divider sx={{ flex: 1 }} />
    </Stack>
  )
}
