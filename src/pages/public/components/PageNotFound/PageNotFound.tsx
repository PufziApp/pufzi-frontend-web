import { Box, Stack, Typography } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import PetsRoundedIcon from '@mui/icons-material/PetsRounded'
import { useNavigate } from 'react-router-dom'
import { PufziButton } from '../../../../components/PufziButton/PufziButton'
import { useTranslation } from 'react-i18next'

export const PageNotFound = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('PageNotFound')

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        px: 2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <PetsRoundedIcon
        sx={{
          position: 'absolute',
          top: '14%',
          left: '10%',
          fontSize: 38,
          color: 'primary.main',
          opacity: 0.08,
          transform: 'rotate(-22deg)',
        }}
      />

      <PetsRoundedIcon
        sx={{
          position: 'absolute',
          top: '24%',
          left: '16%',
          fontSize: 28,
          color: 'primary.main',
          opacity: 0.06,
          transform: 'rotate(8deg)',
        }}
      />

      <PetsRoundedIcon
        sx={{
          position: 'absolute',
          bottom: '18%',
          right: '12%',
          fontSize: 42,
          color: 'primary.main',
          opacity: 0.07,
          transform: 'rotate(24deg)',
        }}
      />

      <PetsRoundedIcon
        sx={{
          position: 'absolute',
          bottom: '28%',
          right: '20%',
          fontSize: 26,
          color: 'primary.main',
          opacity: 0.05,
          transform: 'rotate(-12deg)',
        }}
      />

      <Stack
        spacing={2.5}
        sx={{
          maxWidth: 520,
          zIndex: 1,
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 90,
              md: 158,
            },
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: '-6px',
            color: 'primary.main',
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          {t('title')}
        </Typography>

        <Typography
          sx={{
            color: 'text.secondary',
            fontSize: 16,
            lineHeight: 1.7,
          }}
        >
          {t('description')}
        </Typography>

        <PufziButton
          startIcon={<ArrowBackRoundedIcon />}
          onClick={() => navigate('/')}
          label={t('buttonText')}
        />
      </Stack>
    </Box>
  )
}
