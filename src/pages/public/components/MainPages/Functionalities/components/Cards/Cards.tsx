import { Box } from '@mui/material'

import { InfoCard } from '../InfoCard/InfoCard'
import { INFO_CARDS } from './types/types.info'

export const Cards = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minWidth: 0,

        display: 'grid',

        gridTemplateColumns: {
          xs: 'minmax(0, 1fr)',
          sm: 'repeat(2, minmax(0, 1fr))',
          lg: 'repeat(3, minmax(0, 1fr))',
        },

        gap: {
          xs: 2,
          sm: 2.5,
          md: 3,
        },

        boxSizing: 'border-box',
      }}
    >
      {INFO_CARDS.map((card, index) => (
        <Box
          key={index}
          sx={{
            minWidth: 0,
            width: '100%',
            display: 'flex',
          }}
        >
          <InfoCard
            icon={card.icon}
            iconColor={card.iconColor}
            title={card.title}
            description={card.description}
          />
        </Box>
      ))}
    </Box>
  )
}
