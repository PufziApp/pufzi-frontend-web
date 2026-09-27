import { PufziButton } from '../../../../../../components/PufziButton/PufziButton'

type PufziBackButtonProps = {
  label: string
  onClick: () => void
  fullWidth?: boolean
}

export const PufziBackButton = ({ label, onClick, fullWidth = true }: PufziBackButtonProps) => {
  return (
    <PufziButton
      label={label}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        bgcolor: 'primary.light',
        color: 'secondary.contrastText',
        border: '1px solid',
        borderColor: 'primary.main',

        '&:hover': {
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          borderColor: 'primary.main',
          transform: 'translateY(-2px)',
          boxShadow: (theme) => `0 8px 18px ${theme.palette.action.selected}`,
        },
      }}
    />
  )
}
