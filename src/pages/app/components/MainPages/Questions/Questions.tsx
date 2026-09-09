import { Stack } from '@mui/material'
import { IconTitle } from '../../../../../components/IconTitle/IconTitle'
import HelpIcon from '@mui/icons-material/Help'

export const Questions = () => {
  return (
    <Stack sx={{ pb: 2 }}>
      <IconTitle icon={<HelpIcon />} title="Întrebări frecvente" />
    </Stack>
  )
}
