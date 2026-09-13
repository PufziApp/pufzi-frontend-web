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
            animation: 'floating 7s ease-in-out infinite',
            '@keyframes floating': {
              '0%': {
                transform: 'translateY(0px) rotate(0deg)',
              },
              '25%': {
                transform: 'translateY(-12px) rotate(2deg)',
              },
              '50%': {
                transform: 'translateY(0px) rotate(0deg)',
              },
              '75%': {
                transform: 'translateY(-12px) rotate(-2deg)',
              },
              '100%': {
                transform: 'translateY(0px) rotate(0deg)',
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
