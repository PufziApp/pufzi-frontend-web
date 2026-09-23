import { Typography, type TypographyProps } from '@mui/material'

type PufziFormSubtitleProps = TypographyProps & {
  text: string
}

export const PufziFormSubtitle = ({ text, sx, ...props }: PufziFormSubtitleProps) => {
  return (
    <Typography
      variant="body1"
      {...props}
      sx={{
        fontWeight: 500,
        color: 'text.secondary',
        textAlign: 'center',
        lineHeight: 1.6,
        ...sx,
      }}
    >
      {text}
    </Typography>
  )
}
