import { Stack, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

type PacketInformationProps = {
  info: string
}

export const PacketInformation: FC<PacketInformationProps> = ({ info }) => {
  const { t } = useTranslation('Prices')

  return (
    <Stack
      direction="row"
      spacing={1.5}
      sx={{
        alignItems: 'center',
      }}
    >
      <Stack
        sx={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <CheckIcon
          sx={{
            color: 'white',
            fontSize: 22,
          }}
        />
      </Stack>

      <Typography
        variant="body1"
        sx={{
          color: 'white',
        }}
      >
        {t(info)}
      </Typography>
    </Stack>
  )
}
