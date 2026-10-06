import { Box } from '@mui/material'

import heroImage from '../../../../../../assets/heroImage.png'

export const CardInformation = () => {
  return (
    <Box
      sx={{
        width: '100%',

        display: 'flex',

        justifyContent: 'center',

        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={heroImage}
        alt="Pufzi platform preview"
        sx={{
          display: 'block',

          width: '100%',

          maxWidth: {
            xs: 340,
            sm: 480,
            md: 520,
            lg: 600,
            xl: 680,
          },

          height: 'auto',

          objectFit: 'contain',
        }}
      />
    </Box>
  )
}
