import { Box, Divider, Stack, Typography } from '@mui/material'

import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'
import { PufziFormSubtitle } from '../../../../../../components/PufziFormSubtitle/PufziFormSubtitle'
import { PufziFormTitle } from '../../../../../../components/PufziFormTitle/PufziFormTitle'

import type { RegisterFormData } from '../RegisterForm'
import { SummaryColumn } from './SummaryColumn'
import { SummaryItem } from './SummaryItem'

type SummaryStepProps = {
  formData: RegisterFormData
  handleBack: () => void
  handleRegister: () => void
}

export const SummaryStep = ({ formData, handleBack, handleRegister }: SummaryStepProps) => {
  return (
    <Stack spacing={2.5}>
      <Stack spacing={1}>
        <PufziFormTitle text="Totul este pregătit! 🐾" />
        <PufziFormSubtitle text="Verifică informațiile înainte de crearea contului." />
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, 1fr)',
          },
          gap: 2,
        }}
      >
        <SummaryColumn title="Date personale">
          <SummaryItem label="Nume" value={formData.fullName} />
          <SummaryItem label="Email" value={formData.email} />
          <SummaryItem label="Parolă" value="••••••••" />
        </SummaryColumn>

        <SummaryColumn title="Date salon">
          <SummaryItem label="Salon" value={formData.salonName} />
          <SummaryItem label="Telefon" value={formData.phone} />
        </SummaryColumn>

        <SummaryColumn title="Pachet ales">
          <Typography
            sx={{
              color: 'primary.main',
              fontSize: 22,
              fontWeight: 900,
              fontFamily: '"Nunito", sans-serif',
            }}
          >
            PRO
          </Typography>

          <Typography
            sx={{
              color: 'text.primary',
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            200 RON/lună
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>7 zile gratuit</Typography>

          <Typography sx={{ color: 'text.secondary' }}>Toate funcțiile incluse</Typography>
        </SummaryColumn>
      </Box>

      <Box
        sx={{
          p: 2,
          borderRadius: 3,
          bgcolor: 'action.hover',
          border: '1px solid',
          borderColor: 'divider',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 800,
            color: 'text.primary',
          }}
        >
          Activează contul prin confirmarea adresei de email
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            color: 'text.secondary',
            fontSize: 14.5,
          }}
        >
          După crearea contului vei primi un email cu un link de confirmare. Accesează linkul pentru
          a-ți activa contul Pufzi.
        </Typography>
      </Box>

      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={2}
      >
        <PufziButton
          label="← Înapoi"
          fullWidth
          onClick={handleBack}
          sx={{
            bgcolor: 'background.paper',
            color: 'text.primary',
            border: '1px solid',
            borderColor: 'divider',

            '&:hover': {
              bgcolor: 'action.hover',
              color: 'primary.main',
              borderColor: 'primary.main',
              transform: 'translateY(-2px)',
            },
          }}
        />

        <PufziButton label="Creează contul 🎉" fullWidth onClick={handleRegister} />
      </Stack>
    </Stack>
  )
}
