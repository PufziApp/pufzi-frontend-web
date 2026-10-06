import { Box, Stack } from '@mui/material'

import { Functionalities } from './Functionalities/Functionalities'
import { Benefits } from './Benefits/Benefits'
import { Prices } from './Prices/Prices'
import { Questions } from './Questions/Questions'

export const MainPages = () => {
  return (
    <Stack
      spacing={0}
      sx={{
        width: '100%',
        maxWidth: '100%',
        minWidth: 0,

        overflowX: 'hidden',

        boxSizing: 'border-box',
      }}
    >
      <Box
        id="functionalities"
        component="section"
        sx={{
          width: '100%',
          minWidth: 0,
        }}
      >
        <Functionalities />
      </Box>

      <Box
        id="benefits"
        component="section"
        sx={{
          width: '100%',
          minWidth: 0,
        }}
      >
        <Benefits />
      </Box>

      <Box
        id="prices"
        component="section"
        sx={{
          width: '100%',
          minWidth: 0,
        }}
      >
        <Prices />
      </Box>

      <Box
        id="faq"
        component="section"
        sx={{
          width: '100%',
          minWidth: 0,
        }}
      >
        <Questions />
      </Box>
    </Stack>
  )
}
