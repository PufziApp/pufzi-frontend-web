import { Box, Stack, Typography } from '@mui/material'
import type { FC, ReactNode } from 'react'

type IconTitleProps = {
  icon: ReactNode
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
      direction="column"
      sx={{
        width: '100%',
        maxWidth: '100%',
        minWidth: 0,

        alignItems: 'center',
        justifyContent: 'center',

        textAlign: 'center',

        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },

        boxSizing: 'border-box',
      }}
    >
      {/* ICON */}
      <Box
        sx={{
          color: 'primary.main',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          '& svg': {
            fontSize: {
              xs: 28,
              sm: 32,
              md: 36,
              lg: 40,
            },
          },
        }}
      >
        {icon}
      </Box>

      {/* SMALL TITLE */}
      <Typography
        variant="h6"
        sx={{
          color: 'primary.main',

          fontWeight: 800,

          letterSpacing: {
            xs: 1.5,
            sm: 2,
            md: 3,
          },

          textTransform: 'uppercase',

          textAlign: 'center',

          fontSize: {
            xs: '0.8rem',
            sm: '0.9rem',
            md: '1rem',
            lg: '1.1rem',
          },

          lineHeight: 1.4,

          maxWidth: '100%',

          overflowWrap: 'break-word',
        }}
      >
        {title}
      </Typography>

      {/* MAIN TITLE + DESCRIPTION */}
      <Stack
        sx={{
          width: '100%',
          maxWidth: '100%',
          minWidth: 0,

          alignItems: 'center',
          justifyContent: 'center',

          mt: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          px: {
            xs: 0,
            sm: 1,
            md: 2,
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            width: '100%',

            maxWidth: {
              xs: '100%',
              sm: '95%',
              md: '90%',
              lg: '85%',
              xl: '80%',
            },

            fontWeight: 800,

            lineHeight: {
              xs: 1.15,
              sm: 1.12,
              md: 1.1,
            },

            textAlign: 'center',

            fontSize: {
              xs: '1.9rem',
              sm: '2.4rem',
              md: '2.9rem',
              lg: '3.3rem',
              xl: '3.6rem',
            },

            overflowWrap: 'break-word',

            wordBreak: 'normal',
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
            mt: {
              xs: 1.5,
              sm: 2,
            },

            mb: {
              xs: 0,
              sm: 0.5,
              md: 1,
            },

            width: '100%',

            maxWidth: {
              xs: '100%',
              sm: '90%',
              md: '75%',
              lg: '65%',
              xl: '60%',
            },

            textAlign: 'center',

            color: 'text.secondary',

            fontWeight: 500,

            lineHeight: {
              xs: 1.5,
              sm: 1.55,
            },

            fontSize: {
              xs: '0.95rem',
              sm: '1rem',
              md: '1.1rem',
              lg: '1.2rem',
            },

            overflowWrap: 'break-word',

            wordBreak: 'normal',
          }}
        >
          {sectionDescription}
        </Typography>
      </Stack>
    </Stack>
  )
}
