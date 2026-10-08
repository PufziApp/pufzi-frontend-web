import { Box, Stack, Typography } from '@mui/material'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'

import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'
import { PufziLinkButton } from '../../../../../../components/PufziLinkButton/PufziLinkButton'

import appleStoreButton from '../../../../../../assets/appleStoreButton.png'
import googlePlayButton from '../../../../../../assets/googlePlayButton.png'

export const GeneralInformation = () => {
  const { t } = useTranslation('Hero')

  return (
    <Stack
      spacing={{
        xs: 3,
        sm: 3.5,
        md: 4,
      }}
      sx={{
        width: '100%',

        alignItems: {
          xs: 'center',
          md: 'flex-start',
        },

        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          width: {
            xs: '100%',
            sm: '90%',
            md: '80%',
            lg: '70%',
            xl: '60%',
          },

          color: 'text.primary',

          fontWeight: 900,

          fontSize: {
            xs: '2.2rem',
            sm: '2.8rem',
            md: '3.2rem',
            lg: '3.6rem',
            xl: '4rem',
          },

          lineHeight: {
            xs: 1.15,
            sm: 1.12,
            md: 1.1,
          },

          textAlign: {
            xs: 'center',
            md: 'left',
          },
        }}
      >
        {t('title')}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          width: {
            xs: '100%',
            sm: '90%',
            md: '100%',
          },

          color: 'text.secondary',

          fontWeight: 500,

          fontSize: {
            xs: '1rem',
            sm: '1.1rem',
            md: '1.2rem',
            lg: '1.35rem',
          },

          lineHeight: 1.6,

          textAlign: {
            xs: 'center',
            md: 'justify',
          },
        }}
      >
        {t('description')}
      </Typography>

      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={2}
        sx={{
          width: {
            xs: '100%',
            sm: 'auto',
          },

          alignItems: {
            xs: 'stretch',
            sm: 'center',
          },

          justifyContent: {
            xs: 'center',
            md: 'flex-start',
          },

          '& > *': {
            width: {
              xs: '100%',
              sm: 'auto',
            },
          },
        }}
      >
        <PufziButton
          component={Link}
          to="/register"
          label={t('startNowText')}
          sx={{
            borderRadius: '15px',

            fontSize: {
              xs: '16px',
              sm: '18px',
              md: '20px',
            },

            minHeight: {
              xs: 48,
              sm: 52,
            },

            px: {
              xs: 2,
              sm: 3,
            },
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

            fontSize: {
              xs: '16px',
              sm: '18px',
              md: '20px',
            },

            minHeight: {
              xs: 48,
              sm: 52,
            },

            px: {
              xs: 2,
              sm: 3,
            },

            '&:hover': {
              bgcolor: 'secondary.main',
              color: 'secondary.contrastText',
            },
          }}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={{
          xs: 1,
          sm: 2,
        }}
        sx={{
          width: '100%',

          alignItems: 'center',

          justifyContent: {
            xs: 'center',
            md: 'flex-start',
          },

          mt: 1,

          flexWrap: {
            xs: 'wrap',
            sm: 'nowrap',
          },
        }}
      >
        <Box
          component="img"
          src={appleStoreButton}
          alt="Download on the App Store"
          sx={{
            width: {
              xs: 135,
              sm: 150,
              md: 160,
            },

            height: {
              xs: 58,
              sm: 64,
              md: 70,
            },

            objectFit: 'contain',

            cursor: 'pointer',

            display: 'block',
          }}
        />

        <Box
          sx={{
            width: {
              xs: 150,
              sm: 165,
              md: 180,
            },

            height: {
              xs: 58,
              sm: 64,
              md: 69,
            },

            display: 'flex',

            alignItems: 'center',

            justifyContent: 'center',

            overflow: 'hidden',

            flexShrink: 0,
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
