import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation(['Footer', 'Common'])

  return (
    <Stack
      component="footer"
      sx={{
        width: '100%',
        boxSizing: 'border-box',
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.default',
        py: 4,
        px: 3,
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '48px auto 48px',
          alignItems: 'center',
          columnGap: 1.5,
          width: 'fit-content',
          mx: 'auto',
        }}
      >
        <Box
          component="img"
          src="/LogoPufziColor.png"
          alt={t('Common:appName')}
          sx={{
            width: 42,
            height: 42,
            objectFit: 'contain',
            justifySelf: 'center',
          }}
        />

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}
        >
          {t('Footer:year')} {t('Common:appName')}. {t('Footer:allRightsReserved')}{' '}
          {t('Footer:builtWithLove')}
        </Typography>

        <Box sx={{ width: 48 }} />
      </Box>
    </Stack>
  )
}
