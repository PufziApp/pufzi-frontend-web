import { Box } from '@mui/material'

import { INFO_STEPS } from '../../types/types.info'
import { InfoSteps } from './components/InfoSteps/InfoSteps'

export const Steps = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1600px',
        minWidth: 0,

        mx: 'auto',

        pt: {
          xs: 4,
          sm: 5,
          md: 6,
        },

        px: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 6,
          xl: 8,
        },

        boxSizing: 'border-box',

        display: 'grid',

        gridTemplateColumns: {
          xs: 'minmax(0, 1fr)',
          sm: 'repeat(2, minmax(0, 1fr))',
          lg: 'repeat(4, minmax(0, 1fr))',
        },

        gap: {
          xs: 4,
          sm: 4,
          md: 5,
        },
      }}
    >
      {INFO_STEPS.map((step, index) => (
        <Box
          key={index}
          sx={{
            minWidth: 0,
            width: '100%',
            display: 'flex',
          }}
        >
          <InfoSteps
            stepIcon={step.stepIcon}
            stepName={step.stepName}
            stepTitle={step.stepTitle}
            stepDescription={step.stepDescription}
          />
        </Box>
      ))}
    </Box>
  )
}
