import { Typography, type TypographyProps } from '@mui/material'

type PufziFormTitleProps = TypographyProps & {
  text: string
}

export const PufziFormTitle = ({ text, sx, ...props }: PufziFormTitleProps) => {
  return (
    <Typography
      variant="h4"
      {...props}
      sx={{
        fontWeight: 800,
        color: 'primary.main',
        textAlign: 'center',
        ...sx,
      }}
    >
      {text}
    </Typography>
  )
}
