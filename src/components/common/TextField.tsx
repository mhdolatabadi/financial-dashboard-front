import { styled, TextField as MuiTextField } from '@mui/material'

export const TextField = styled(MuiTextField)(() => ({
  margin: '10px 0',
  width: '100%',
  '&>div': {
    borderRadius: '20px'
  }
}))
