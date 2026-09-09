import { Grid } from '@mui/material'
import { InfoCard } from '../InfoCard/InfoCard'
import { INFO_CARDS } from './types/types.info'

export const Cards = () => {
  return (
    <Grid container spacing={2} sx={{ pt: 3, px: 25 }}>
      {INFO_CARDS.map((card, index) => (
        <Grid
          size={4}
          key={index}
          sx={{
            display: 'flex',
          }}
        >
          <InfoCard
            icon={card.icon}
            iconColor={card.iconColor}
            title={card.title}
            description={card.description}
          />
        </Grid>
      ))}
    </Grid>
  )
}
