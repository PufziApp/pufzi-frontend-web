import { Grid } from '@mui/material'
import { INFO_STEPS } from '../types/types.info'
import { InfoSteps } from './InfoSteps'

export const Steps = () => {
  return (
    <Grid container spacing={2} sx={{ pt: 3, px: 25 }}>
      {INFO_STEPS.map((step, index) => (
        <Grid
          size={3}
          key={index}
          sx={{
            display: 'flex',
          }}
        >
          <InfoSteps
            stepIcon={step.stepIcon}
            stepName={step.stepName}
            stepTitle={step.stepTitle}
            stepDescription={step.stepDescription}
          />
        </Grid>
      ))}
    </Grid>
  )
}
