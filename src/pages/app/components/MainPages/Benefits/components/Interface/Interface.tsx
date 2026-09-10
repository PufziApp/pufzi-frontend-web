import { Box, Grid, Typography } from '@mui/material'
import { INFO_INTERFACE } from './types/types.info'
import { InfoInterface } from './components/InfoInterface/InfoInterface'
import { useTranslation } from 'react-i18next'

export const Interface = () => {
  const { t } = useTranslation('Benefits')
  return (
    <Grid container spacing={2} sx={{ pt: 3, px: 25 }}>
      <Grid size={6} sx={{ pr: 4 }}>
        <Box
          component="img"
          src="/src/assets/demoDashboard.png"
          alt="Demo Image"
          sx={{
            display: 'block',
            maxWidth: '100%',
            border: '1px solid',
            borderColor: 'text.primary',
            borderRadius: '20px',
            objectFit: 'contain',
            transformOrigin: 'center bottom',
            animation: 'logoWobble 4.5s ease-in-out infinite',
            '@keyframes logoWobble': {
              '0%': {
                transform: 'rotate(0deg)',
              },
              '20%': {
                transform: 'rotate(-4deg)',
              },
              '40%': {
                transform: 'rotate(0deg)',
              },
              '60%': {
                transform: 'rotate(4deg)',
              },
              '80%': {
                transform: 'rotate(0deg)',
              },
              '100%': {
                transform: 'rotate(0deg)',
              },
            },
          }}
          height="auto"
        />
      </Grid>
      <Grid size={6}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          {t('interface.dashboard.title')}
        </Typography>
        {INFO_INTERFACE.map((inter, index) => (
          <InfoInterface key={index} icon={inter.icon} description={inter.description} />
        ))}
      </Grid>
    </Grid>
  )
}
