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
      spacing={{
        xs: 1,
        sm: 1.5,
      }}
      sx={{
        width: '100%',
        minWidth: 0,

        alignItems: 'center',
      }}
    >
      <Stack
        sx={{
          width: {
            xs: 30,
            sm: 34,
            md: 36,
          },

          height: {
            xs: 30,
            sm: 34,
            md: 36,
          },

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

            fontSize: {
              xs: 18,
              sm: 20,
              md: 22,
            },
          }}
        />
      </Stack>

      <Typography
        variant="body1"
        sx={{
          minWidth: 0,

          color: 'white',

          fontSize: {
            xs: '0.9rem',
            sm: '0.95rem',
            md: '1rem',
          },

          lineHeight: 1.5,

          overflowWrap: 'break-word',
        }}
      >
        {t(info)}
      </Typography>
    </Stack>
  )
}
