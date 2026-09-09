import { Stack } from '@mui/material'
import { IconTitle } from '../../../../../components/IconTitle/IconTitle'
import VerifiedIcon from '@mui/icons-material/Verified'

export const Benefits = () => {
  return (
    <Stack sx={{ pb: 2.5 }}>
      <IconTitle icon={<VerifiedIcon />} title="Beneficii" />
    </Stack>
  )
}
