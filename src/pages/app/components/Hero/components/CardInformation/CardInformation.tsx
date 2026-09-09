import { Box } from '@mui/material'

export const CardInformation = () => {
  return (
    <Box
      component="img"
      src="/src/assets/heroImage.png"
      alt="Description"
      sx={{
        display: 'block',
        maxWidth: '90%',
        height: 'auto',
      }}
    />
  )
}
