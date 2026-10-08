import { Box, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material'

import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import PetsRoundedIcon from '@mui/icons-material/PetsRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

import { useTranslation } from 'react-i18next'

import { PRICES_INFO } from '../../../../MainPages/Prices/types/prices.info'

type PlanFeaturesDialogProps = {
  open: boolean
  onClose: () => void
}

export const PlanFeaturesDialog = ({ open, onClose }: PlanFeaturesDialogProps) => {
  const { t } = useTranslation(['Register', 'Prices'])

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: {
          sx: {
            borderRadius: 1.5,
            bgcolor: 'background.paper',

            border: '1px solid',
            borderColor: 'divider',

            boxShadow: '0 24px 70px rgba(0,0,0,0.20)',

            overflow: 'hidden',
          },
        },
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          position: 'relative',

          bgcolor: 'primary.main',
          color: 'primary.contrastText',

          px: 3,
          pt: 2.6,
          pb: 2.3,

          overflow: 'hidden',
        }}
      >
        <PetsRoundedIcon
          sx={{
            position: 'absolute',

            right: -26,
            top: -34,

            fontSize: 170,

            opacity: 0.1,

            transform: 'rotate(-15deg)',

            pointerEvents: 'none',
          }}
        />

        <IconButton
          onClick={onClose}
          aria-label={t('Register:planStep.dialog.close')}
          sx={{
            position: 'absolute',

            top: 14,
            right: 14,

            zIndex: 10,

            width: 42,
            height: 42,

            color: 'primary.contrastText',

            bgcolor: 'rgba(255,255,255,0.16)',

            border: '1px solid rgba(255,255,255,0.25)',

            backdropFilter: 'blur(10px)',

            transition: 'all 0.2s ease',

            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.26)',
              transform: 'rotate(5deg)',
            },
          }}
        >
          <CloseRoundedIcon />
        </IconButton>

        <Stack
          spacing={0.7}
          sx={{
            position: 'relative',

            zIndex: 1,

            pr: 6,
          }}
        >
          {/* PLAN BADGE */}
          <Box
            sx={{
              width: 'fit-content',

              px: 1.2,
              py: 0.45,

              borderRadius: 999,

              bgcolor: 'rgba(255,255,255,0.16)',

              border: '1px solid rgba(255,255,255,0.32)',
            }}
          >
            <Typography
              sx={{
                fontSize: 11.5,

                fontWeight: 800,

                letterSpacing: 0.4,
              }}
            >
              {t('Register:planStep.plan.title')}
            </Typography>
          </Box>

          {/* TITLE */}
          <Typography
            sx={{
              fontSize: {
                xs: 25,
                sm: 29,
              },

              fontWeight: 900,

              fontFamily: '"Nunito", sans-serif',

              lineHeight: 1.1,
            }}
          >
            {t('Register:planStep.dialog.title')}
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              fontSize: 13,

              opacity: 0.9,

              lineHeight: 1.4,

              maxWidth: 480,
            }}
          >
            {t('Register:planStep.dialog.description')}
          </Typography>
        </Stack>
      </Box>

      {/* CONTENT */}
      <DialogContent
        sx={{
          p: {
            xs: 2,
            sm: 2.6,
          },
        }}
      >
        {/* FEATURES */}
        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
            },

            gap: 1.1,
          }}
        >
          {PRICES_INFO.map((feature) => (
            <Stack
              key={feature.info}
              direction="row"
              spacing={1}
              sx={{
                alignItems: 'center',

                p: 1.2,

                borderRadius: 2.7,

                bgcolor: 'action.hover',

                border: '1px solid',
                borderColor: 'divider',

                transition: 'all 0.2s ease',

                '&:hover': {
                  borderColor: 'primary.main',

                  transform: 'translateY(-2px)',

                  boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
                },
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,

                  borderRadius: '50%',

                  bgcolor: 'primary.light',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  flexShrink: 0,
                }}
              >
                <CheckRoundedIcon
                  sx={{
                    fontSize: 18,

                    color: 'primary.main',
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 13,

                  fontWeight: 700,

                  lineHeight: 1.25,
                }}
              >
                {t(`Prices:${feature.info}`)}
              </Typography>
            </Stack>
          ))}
        </Box>

        {/* BOTTOM SUMMARY */}
        <Box
          sx={{
            mt: 2.3,

            p: 1.6,

            borderRadius: 3,

            bgcolor: 'action.hover',

            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Stack
            direction={{
              xs: 'column',
              sm: 'row',
            }}
            spacing={1.5}
            sx={{
              alignItems: {
                xs: 'flex-start',
                sm: 'center',
              },

              justifyContent: 'space-between',
            }}
          >
            <Stack spacing={0.15}>
              <Stack
                direction="row"
                spacing={0.7}
                sx={{
                  alignItems: 'center',
                }}
              >
                <AutoAwesomeRoundedIcon
                  sx={{
                    fontSize: 17,

                    color: 'primary.main',
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 14,

                    fontWeight: 800,
                  }}
                >
                  {t('Register:planStep.free')}
                </Typography>
              </Stack>

              <Typography
                sx={{
                  fontSize: 11.5,

                  color: 'text.secondary',
                }}
              >
                {t('Register:planStep.dialog.trialDescription')}
              </Typography>
            </Stack>

            {/* PRICE */}
            <Stack
              direction="row"
              spacing={0.4}
              sx={{
                alignItems: 'baseline',
              }}
            >
              <Typography
                sx={{
                  fontSize: 22,

                  fontWeight: 900,

                  color: 'primary.main',

                  fontFamily: '"Nunito", sans-serif',

                  whiteSpace: 'nowrap',
                }}
              >
                {t('Register:planStep.plan.price')}
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,

                  fontWeight: 600,

                  color: 'text.secondary',
                }}
              >
                {t('Register:planStep.plan.month')}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
