import { Box, Stack, Typography } from '@mui/material'
import type { FC } from 'react'

type IconTitleProps = {
  icon: React.ReactNode
  title: string
  sectionTitle: string
  highlightedSectionTitle: string
  sectionDescription: string
}

export const IconTitle: FC<IconTitleProps> = ({
  icon,
  title,
  sectionTitle,
  highlightedSectionTitle,
  sectionDescription,
}) => {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
      direction="column"
    >
      <Box sx={{ color: 'primary.main', fontSize: 40 }}>{icon}</Box>

      <Typography
        variant="h6"
        sx={{
          color: 'primary.main',
          fontWeight: 800,
          letterSpacing: 3,
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Typography>

      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          mt: 3,
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            lineHeight: 1.1,
            textAlign: 'center',
          }}
        >
          {sectionTitle}{' '}
          <Box
            component="span"
            sx={{
              color: 'primary.main',
            }}
          >
            {highlightedSectionTitle}
          </Box>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            my: 2,
            textAlign: 'center',
            color: 'text.secondary',
            maxWidth: '70%',
          }}
        >
          {sectionDescription}
        </Typography>
      </Stack>
    </Stack>
  )
}
