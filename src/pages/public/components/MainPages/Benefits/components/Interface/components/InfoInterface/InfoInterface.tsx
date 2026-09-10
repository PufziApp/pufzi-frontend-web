import { Stack, Typography } from '@mui/material'
import type { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

type InfoInterfaceProps = {
  icon?: ReactNode
  description: string
}

export const InfoInterface: FC<InfoInterfaceProps> = ({ icon, description }) => {
  const { t } = useTranslation('Benefits')
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: 'center',
        mt: 3,
      }}
    >
      {icon && (
        <Stack
          sx={{
            width: 48,
            height: 48,
            flexShrink: 0,
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'primary.light',
            borderRadius: 1,
            mr: 2,
            '& svg': {
              color: 'primary.main',
            },
          }}
        >
          {icon}
        </Stack>
      )}

      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          fontWeight: 500,
        }}
      >
        {t(description)}
      </Typography>
    </Stack>
  )
}
