import { Grid } from '@mui/material'
import { GeneralInformation } from './components/GeneralInformation/GeneralInformation'
import { CardInformation } from './components/CardInformation/CardInformation'

export const Hero = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: 'center',
        px: 30,
        py: 6,
      }}
    >
      <Grid size={6}>
        <GeneralInformation />
      </Grid>

      <Grid
        size={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardInformation />
      </Grid>
    </Grid>
  )
}
