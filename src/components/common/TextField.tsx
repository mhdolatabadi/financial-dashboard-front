import { styled, TextField as MuiTextField } from '@mui/material'

export const TextField = styled(MuiTextField)(({ theme }) => ({
  margin: '10px 0',
  width: '100%',
  '&>div': {
    borderRadius: '20px',
    backgroundColor: '#fffc',
    fontWeight: '700',
  },
  '&>.MuiFormLabel-root': {
    color: theme.palette.primary.main,
    backgroundColor: '#ffff',
    borderRadius: '20px',
    padding: '1px 10px',
    boxSizing: 'border-box',
  },
  '&>.MuiFormHelperText-root': {
    color: theme.palette.primary.main,
  },
}))
