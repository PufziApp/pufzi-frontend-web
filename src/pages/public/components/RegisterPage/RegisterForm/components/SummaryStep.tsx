import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded'
import MapRoundedIcon from '@mui/icons-material/MapRounded'
import LocalPostOfficeRoundedIcon from '@mui/icons-material/LocalPostOfficeRounded'
import PetsRoundedIcon from '@mui/icons-material/PetsRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded'

import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'
import { PufziFormSubtitle } from '../../../../../../components/PufziFormSubtitle/PufziFormSubtitle'
import { PufziFormTitle } from '../../../../../../components/PufziFormTitle/PufziFormTitle'

import type { RegisterFormData } from '../RegisterForm'

import { TicketFieldRow } from './TicketFieldRow'
import { PufziBackButton } from './PufziBackButton'

type SummaryStepProps = {
  formData: RegisterFormData
  handleBack: () => void
  handleRegister: () => void
}

const NOTCH_SIZE = 18

export const SummaryStep = ({ formData, handleBack, handleRegister }: SummaryStepProps) => {
  const { t } = useTranslation('Register')

  return (
    <Stack spacing={2}>
      {/* HEADER */}
      <Stack spacing={1}>
        <PufziFormTitle text={t('summaryStep.formTitle')} />

        <PufziFormSubtitle text={t('summaryStep.formSubtitle')} />
      </Stack>

      {/* BOARDING PASS */}
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        sx={{
          position: 'relative',

          borderRadius: 3,

          overflow: 'hidden',

          border: '1px solid',
          borderColor: 'divider',

          bgcolor: 'background.paper',
        }}
      >
        {/* LEFT SIDE */}
        <Stack
          spacing={1.6}
          sx={{
            flex: {
              xs: 'none',
              sm: '1 1 68%',
            },

            p: 2,

            minWidth: 0,
          }}
        >
          {/* PERSONAL INFORMATION */}
          <Stack spacing={1}>
            <Typography
              sx={{
                fontSize: 11,

                fontWeight: 800,

                letterSpacing: 0.5,

                textTransform: 'uppercase',

                color: 'primary.main',
              }}
            >
              {t('summaryStep.columns.personalInformation')}
            </Typography>

            <Box
              sx={{
                display: 'grid',

                gridTemplateColumns: {
                  xs: '1fr',
                  md: '1fr 1fr',
                },

                columnGap: 2,
                rowGap: 1.1,
              }}
            >
              <TicketFieldRow
                icon={
                  <PersonRoundedIcon
                    sx={{
                      fontSize: 16,
                    }}
                  />
                }
                label={t('personalInformationStep.fields.firstName')}
                value={formData.firstName}
              />

              <TicketFieldRow
                icon={
                  <PersonRoundedIcon
                    sx={{
                      fontSize: 16,
                    }}
                  />
                }
                label={t('personalInformationStep.fields.lastName')}
                value={formData.lastName}
              />

              <Box
                sx={{
                  gridColumn: {
                    xs: 'auto',
                    md: '1 / -1',
                  },
                }}
              >
                <TicketFieldRow
                  icon={
                    <EmailRoundedIcon
                      sx={{
                        fontSize: 16,
                      }}
                    />
                  }
                  label={t('common.fields.email')}
                  value={formData.email}
                />
              </Box>
            </Box>
          </Stack>

          <Box
            sx={{
              borderTop: '1px dashed',
              borderColor: 'divider',
            }}
          />

          {/* SALON INFORMATION */}
          <Stack spacing={1}>
            <Typography
              sx={{
                fontSize: 11,

                fontWeight: 800,

                letterSpacing: 0.5,

                textTransform: 'uppercase',

                color: 'primary.main',
              }}
            >
              {t('summaryStep.columns.salonInformation')}
            </Typography>

            <Box
              sx={{
                display: 'grid',

                gridTemplateColumns: {
                  xs: '1fr',
                  md: '1fr 1fr',
                },

                columnGap: 2,
                rowGap: 1.1,
              }}
            >
              <TicketFieldRow
                icon={
                  <StorefrontRoundedIcon
                    sx={{
                      fontSize: 16,
                    }}
                  />
                }
                label={t('salonInformationStep.fields.salonName')}
                value={formData.salonName}
              />

              <TicketFieldRow
                icon={
                  <PhoneRoundedIcon
                    sx={{
                      fontSize: 16,
                    }}
                  />
                }
                label={t('common.fields.phone')}
                value={formData.phone}
              />

              <Box
                sx={{
                  gridColumn: {
                    xs: 'auto',
                    md: '1 / -1',
                  },
                }}
              >
                <TicketFieldRow
                  icon={
                    <HomeRoundedIcon
                      sx={{
                        fontSize: 16,
                      }}
                    />
                  }
                  label={t('salonInformationStep.fields.address')}
                  value={formData.address}
                />
              </Box>

              <TicketFieldRow
                icon={
                  <LocationCityRoundedIcon
                    sx={{
                      fontSize: 16,
                    }}
                  />
                }
                label={t('salonInformationStep.fields.city')}
                value={formData.city}
              />

              <TicketFieldRow
                icon={
                  <MapRoundedIcon
                    sx={{
                      fontSize: 16,
                    }}
                  />
                }
                label={t('salonInformationStep.fields.county')}
                value={formData.county}
              />

              <TicketFieldRow
                icon={
                  <LocalPostOfficeRoundedIcon
                    sx={{
                      fontSize: 16,
                    }}
                  />
                }
                label={t('salonInformationStep.fields.postalCode')}
                value={formData.postalCode}
              />
            </Box>
          </Stack>
        </Stack>

        {/* PERFORATED DIVIDER */}
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },

            position: 'relative',

            width: 0,

            borderLeft: '1.5px dashed',

            borderColor: 'divider',

            my: 1.5,
          }}
        >
          <Box
            sx={{
              position: 'absolute',

              top: -NOTCH_SIZE / 2 - 1.5 * 8,
              left: -NOTCH_SIZE / 2,

              width: NOTCH_SIZE,
              height: NOTCH_SIZE,

              borderRadius: '50%',

              bgcolor: 'background.default',

              border: '1px solid',
              borderColor: 'divider',
            }}
          />

          <Box
            sx={{
              position: 'absolute',

              bottom: -NOTCH_SIZE / 2 - 1.5 * 8,
              left: -NOTCH_SIZE / 2,

              width: NOTCH_SIZE,
              height: NOTCH_SIZE,

              borderRadius: '50%',

              bgcolor: 'background.default',

              border: '1px solid',
              borderColor: 'divider',
            }}
          />
        </Box>

        {/* RIGHT — PLAN */}
        <Stack
          sx={{
            position: 'relative',

            overflow: 'hidden',

            flex: {
              xs: 'none',
              sm: '1 1 32%',
            },

            bgcolor: 'primary.main',

            color: 'primary.contrastText',

            px: 2,
            py: 2.4,

            alignItems: 'center',
            justifyContent: 'center',

            textAlign: 'center',
          }}
        >
          <PetsRoundedIcon
            sx={{
              position: 'absolute',

              bottom: -20,
              right: -16,

              fontSize: 110,

              color: 'inherit',

              opacity: 0.12,

              transform: 'rotate(12deg)',

              pointerEvents: 'none',
            }}
          />

          <Stack
            spacing={0.7}
            sx={{
              position: 'relative',

              zIndex: 1,

              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',

                gap: 0.5,

                px: 1.1,
                py: 0.35,

                borderRadius: 999,

                bgcolor: 'rgba(255,255,255,0.18)',

                border: '1px solid rgba(255,255,255,0.35)',
              }}
            >
              <AutoAwesomeRoundedIcon
                sx={{
                  fontSize: 13,
                  color: 'inherit',
                }}
              />

              <Typography
                sx={{
                  fontSize: 11.5,

                  fontWeight: 800,

                  lineHeight: 1,

                  color: 'inherit',
                }}
              >
                {t('planStep.free')}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: 22,

                fontWeight: 900,

                color: 'inherit',

                fontFamily: '"Nunito", sans-serif',

                lineHeight: 1.1,

                mt: 0.3,
              }}
            >
              {t('planStep.plan.title')}
            </Typography>

            <Stack
              spacing={0.1}
              sx={{
                alignItems: 'center',

                mt: 0.4,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 26,
                    sm: 24,
                    md: 26,
                  },

                  fontWeight: 900,

                  color: 'inherit',

                  lineHeight: 1,

                  whiteSpace: 'nowrap',

                  fontFamily: '"Nunito", sans-serif',
                }}
              >
                {t('planStep.plan.price')}
              </Typography>

              <Typography
                sx={{
                  fontSize: 12.5,

                  fontWeight: 600,

                  color: 'inherit',

                  opacity: 0.85,
                }}
              >
                {t('planStep.plan.month')}
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: 11.5,

                color: 'inherit',

                opacity: 0.85,

                mt: 0.4,
              }}
            >
              {t('planStep.plan.allFeatures')}
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* EMAIL CONFIRMATION */}
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          p: 2,

          borderRadius: 3,

          bgcolor: 'action.hover',

          border: '1px solid',
          borderColor: 'divider',

          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,

            flexShrink: 0,

            borderRadius: '50%',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            bgcolor: 'primary.main',

            color: 'primary.contrastText',
          }}
        >
          <MarkEmailReadRoundedIcon
            sx={{
              fontSize: 20,
            }}
          />
        </Box>

        <Stack spacing={0.2}>
          <Typography
            sx={{
              fontSize: 15,

              fontWeight: 800,

              color: 'text.primary',
            }}
          >
            {t('summaryStep.activation.title')}
          </Typography>

          <Typography
            sx={{
              color: 'text.secondary',

              fontSize: 13.5,
            }}
          >
            {t('summaryStep.activation.description')}
          </Typography>
        </Stack>
      </Stack>

      {/* ACTIONS */}
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={2}
      >
        <PufziBackButton label={t('common.buttons.back')} onClick={handleBack} />

        <PufziButton label={t('summaryStep.createAccount')} fullWidth onClick={handleRegister} />
      </Stack>
    </Stack>
  )
}
