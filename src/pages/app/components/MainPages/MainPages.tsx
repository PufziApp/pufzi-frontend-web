import { Stack } from '@mui/material'
import { Functionalities } from './Functionalities/Functionalities'
import { Benefits } from './Benefits/Benefits'
import { Prices } from './Prices/Prices'
import { Questions } from './Questions/Questions'

export const MainPages = () => {
  return (
    <Stack spacing={2} sx={{ minWidth: '100vh' }}>
      <Functionalities />
      {/* <Divider sx={{ borderColor: 'divider', borderWidth: 1 }} /> */}
      <Benefits />
      {/* <Divider sx={{ borderColor: 'divider', borderWidth: 1 }} /> */}
      <Prices />
      {/* <Divider sx={{ borderColor: 'divider', borderWidth: 1 }} /> */}
      <Questions />
    </Stack>
  )
}
