import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <Stack>
      <Typography>{t('Text din Footer')}</Typography>
    </Stack>
  )
}
