import { Box, Chip, Divider, Stack, Typography } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'

import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'
import { PufziFormSubtitle } from '../../../../../../components/PufziFormSubtitle/PufziFormSubtitle'
import { PufziFormTitle } from '../../../../../../components/PufziFormTitle/PufziFormTitle'

type PlanStepProps = {
  handleBack: () => void
  handleNext: () => void
}

const HIGHLIGHTS = [
  'Clienți nelimitați',
  'Animale nelimitate',
  'Calendar complet',
  'Mesaje directe',
]

const FEATURES = [
  'Programări & calendar complet',
  'Clienți & animale nelimitate',
  'Servicii & prețuri personalizate',
  'Echipă & disponibilitate',
  'Booking online 24/7',
  'Mesaje directe cu clienții',
  'Notificări & remindere automate',
  'Istoric grooming pentru animale',
  'Recenzii & feedback clienți',
  'Statistici & rapoarte complete',
]

export const PlanStep = ({ handleBack, handleNext }: PlanStepProps) => {
  return (
    <Stack
      spacing={3}
      sx={{
        height: '100%',
      }}
    >
      <Stack spacing={1}>
        <PufziFormTitle text="Alege planul tău" />
        <PufziFormSubtitle text="Un singur plan complet, creat pentru saloanele care vor să lucreze modern și organizat." />
      </Stack>

      <Box
        sx={{
          borderRadius: 4,
          border: '2px solid',
          borderColor: 'primary.main',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          boxShadow: '0 10px 24px rgba(0, 0, 0, 0.08)',
        }}
      >
        <Box
          sx={{
            px: 2.5,
            py: 1.5,
            bgcolor: 'action.hover',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              rowGap: 1,
            }}
          >
            <Chip
              icon={<AutoAwesomeRoundedIcon />}
              label="Plan recomandat"
              sx={{
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                fontWeight: 700,
                '& .MuiChip-icon': {
                  color: 'primary.contrastText',
                },
              }}
            />

            <Typography
              sx={{
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              7 zile gratuit
            </Typography>
          </Stack>
        </Box>

        <Stack spacing={2.5} sx={{ p: 2.5 }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              rowGap: 1.5,
            }}
          >
            <Stack spacing={0.5}>
              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 900,
                  color: 'text.primary',
                  fontFamily: '"Nunito", sans-serif',
                }}
              >
                Pufzi PRO
              </Typography>

              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: 15,
                }}
              >
                Pentru saloane în creștere
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                alignItems: 'baseline',
              }}
            >
              <Typography
                sx={{
                  fontSize: 34,
                  fontWeight: 900,
                  color: 'primary.main',
                  lineHeight: 1,
                  whiteSpace: 'nowrap',
                  fontFamily: '"Nunito", sans-serif',
                }}
              >
                200 RON
              </Typography>

              <Typography
                sx={{
                  fontSize: 18,
                  color: 'text.secondary',
                  fontWeight: 600,
                }}
              >
                /lună
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {HIGHLIGHTS.map((item) => (
              <Chip
                key={item}
                label={item}
                size="small"
                sx={{
                  bgcolor: 'secondary.main',
                  color: 'secondary.contrastText',
                  fontWeight: 600,
                }}
              />
            ))}
          </Stack>

          <Divider />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
              },
              gap: 1.25,
            }}
          >
            {FEATURES.map((feature) => (
              <Stack
                key={feature}
                direction="row"
                spacing={1}
                sx={{
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    bgcolor: 'action.hover',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    mt: '2px',
                  }}
                >
                  <CheckRoundedIcon sx={{ fontSize: 16 }} />
                </Box>

                <Typography
                  sx={{
                    color: 'text.primary',
                    fontSize: 14.5,
                    fontWeight: 500,
                  }}
                >
                  {feature}
                </Typography>
              </Stack>
            ))}
          </Box>

          <Box
            sx={{
              borderRadius: 3,
              bgcolor: 'secondary.main',
              color: 'secondary.contrastText',
              p: 2,
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              Încearcă gratuit 7 zile ✨
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 14,
              }}
            >
              După perioada de trial, planul continuă cu 200 RON/lună.
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={2}
        sx={{
          mt: 'auto',
        }}
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

        <PufziButton label="Continuă →" fullWidth onClick={handleNext} />
      </Stack>
    </Stack>
  )
}
