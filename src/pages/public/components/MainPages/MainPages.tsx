import { Stack } from '@mui/material'
import { Functionalities } from './Functionalities/Functionalities'
import { Benefits } from './Benefits/Benefits'
import { Prices } from './Prices/Prices'
import { Questions } from './Questions/Questions'

export const MainPages = () => {
  return (
    <Stack spacing={2} sx={{ minWidth: '100vh' }}>
      <Stack id="functionalities">
        <Functionalities />
      </Stack>
      <Stack id="benefits">
        <Benefits />
      </Stack>
      <Stack id="prices">
        <Prices />
      </Stack>
      <Stack id="faq">
        <Questions />
      </Stack>
    </Stack>
  )
}
