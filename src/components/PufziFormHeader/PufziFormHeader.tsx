import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const PufziFormHeader = () => {
  const { t } = useTranslation('Common')

  return (
    <Stack
      direction="row"
      spacing={0.8}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="/LogoPufziColor.png"
          alt="Pufzi"
          sx={{
            width: 64,
            height: 64,
            objectFit: 'contain',
            transform: 'scale(1.12)',
          }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: 22,
          fontWeight: 800,
          lineHeight: 1,
          color: 'text.secondary',
          fontFamily: '"Nunito", sans-serif',
        }}
      >
        {t('appName')}
      </Typography>
    </Stack>
  )
}
