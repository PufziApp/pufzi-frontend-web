import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'
import { PufziLinkButton } from '../../../../../../components/PufziLinkButton/PufziLinkButton'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

import appleStoreButton from '../../../../../../assets/appleStoreButton.png'
import googlePlayButton from '../../../../../../assets/googlePlayButton.png'

export const GeneralInformation = () => {
  const { t } = useTranslation('Hero')

  return (
    <Stack spacing={4}>
      <Typography
        align="left"
        variant="h2"
        sx={{
          width: '60%',
          color: 'text.primary',
          fontWeight: 900,
        }}
      >
        {t('title')}
      </Typography>

      <Typography
        align="justify"
        variant="h5"
        sx={{
          color: 'text.secondary',
          fontWeight: 500,
        }}
      >
        {t('description')}
      </Typography>

      <Stack direction="row" spacing={2}>
        <PufziButton
          label={t('startNowText')}
          sx={{
            borderRadius: '15px',
            fontSize: '20px',
          }}
        />

        <PufziLinkButton
          startIcon={<PlayArrowIcon />}
          label={t('howItWorksText')}
          variant="outlined"
          href="#benefits"
          sx={{
            borderRadius: '15px',
            color: 'text.primary',
            borderColor: 'secondary.contrastText',
            fontSize: '20px',

            '&:hover': {
              bgcolor: 'secondary.main',
              color: 'secondary.contrastText',
            },
          }}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: 'center',
          mt: 1,
        }}
      >
        <Box
          component="img"
          src={appleStoreButton}
          alt="Download on the App Store"
          sx={{
            width: 160,
            height: 70,
            objectFit: 'contain',
            cursor: 'pointer',
            display: 'block',
          }}
        />

        <Box
          sx={{
            width: 180,
            height: 69,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src={googlePlayButton}
            alt="Get it on Google Play"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              transform: 'scale(2.5)',
              cursor: 'pointer',
              display: 'block',
            }}
          />
        </Box>
      </Stack>
    </Stack>
  )
}
