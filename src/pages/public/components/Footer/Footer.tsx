import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation(['Footer', 'Common'])

  return (
    <Stack
      component="footer"
      sx={{
        width: '100%',
        maxWidth: '100%',
        minWidth: 0,

        boxSizing: 'border-box',

        borderTop: '1px solid',
        borderColor: 'divider',

        bgcolor: 'background.default',

        py: {
          xs: 1.5,
          sm: 2,
          md: 2.5,
        },

        px: {
          xs: 1.5,
          sm: 2.5,
          md: 3,
        },

        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={{
          xs: 0.5,
          sm: 1,
        }}
        sx={{
          width: '100%',

          maxWidth: {
            xs: 420,
            sm: 760,
            md: 900,
          },

          mx: 'auto',

          alignItems: 'center',
          justifyContent: 'center',

          textAlign: 'center',
        }}
      >
        <Box
          component="img"
          src="/LogoPufziColor.png"
          alt={t('Common:appName')}
          sx={{
            width: {
              xs: 28,
              sm: 32,
              md: 36,
            },

            height: {
              xs: 28,
              sm: 32,
              md: 36,
            },

            objectFit: 'contain',

            flexShrink: 0,
          }}
        />

        <Typography
          variant="body2"
          sx={{
            width: {
              xs: '100%',
              sm: 'auto',
            },

            color: 'text.secondary',

            textAlign: 'center',

            whiteSpace: 'normal',

            lineHeight: {
              xs: 1.3,
              sm: 1.4,
            },

            fontSize: {
              xs: '0.68rem',
              sm: '0.78rem',
              md: '0.82rem',
            },
          }}
        >
          {t('Footer:year')} {t('Common:appName')}. {t('Footer:allRightsReserved')}{' '}
          {t('Footer:builtWithLove')}
        </Typography>
      </Stack>
    </Stack>
  )
}
