import { Grid } from '@mui/material'

import { GeneralInformation } from './components/GeneralInformation/GeneralInformation'
import { CardInformation } from './components/CardInformation/CardInformation'

export const Hero = () => {
  return (
    <Grid
      container
      spacing={{
        xs: 5,
        sm: 6,
        md: 6,
        lg: 4,
      }}
      sx={{
        alignItems: 'center',

        px: {
          xs: 2,
          sm: 4,
          md: 6,
          lg: 10,
          xl: 20,
        },

        py: {
          xs: 5,
          sm: 6,
          md: 7,
          lg: 8,
        },

        maxWidth: '1600px',
        mx: 'auto',
      }}
    >
      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
      >
        <GeneralInformation />
      </Grid>

      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
        sx={{
          display: 'flex',

          justifyContent: {
            xs: 'center',
            md: 'center',
          },

          alignItems: 'center',
        }}
      >
        <CardInformation />
      </Grid>
    </Grid>
  )
}
