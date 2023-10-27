import { Button, styled, TextField as MuiTextField } from '@mui/material'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers'
import { Moment } from 'moment-jalaali'

export const TextField = styled(MuiTextField)(() => ({
  margin: '10px 0',
  width: '100%',
  '&>div': {
    borderRadius: '20px',
  },
}))

export const DatePicker = styled(MuiDatePicker<Moment>)(() => ({
  margin: '10px 0',
  width: '100%',
  '&>div': {
    borderRadius: '20px',
  },
}))

export const ContainedButton = styled(Button)(() => ({
  width: '100%',
  borderRadius: '20px',
  padding: '10px',
  fontSize: '18px',
  margin: '10px 0',
}))

export const Section = styled('div')(() => ({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '30px',
  border: '1px solid #88888849',
  borderRadius: '40px 5px 5px 5px',
  boxShadow: '3px 3px 20px #000a',
  boxSizing: 'border-box',
  margin: '20px 0',
}))
