import { Stack } from '@mui/material'
import { IconTitle } from '../../../../../components/IconTitle/IconTitle'
import PaidIcon from '@mui/icons-material/Paid'

export const Prices = () => {
  return (
    <Stack sx={{ bgcolor: 'background.paper', pb: 2.5 }}>
      <IconTitle icon={<PaidIcon />} title="Preturi" />
    </Stack>
  )
}
