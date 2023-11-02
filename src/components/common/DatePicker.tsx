import { styled } from '@mui/material'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers'
import { Moment } from 'moment-jalaali'

export const DatePicker = styled(MuiDatePicker<Moment>)(() => ({
  margin: '10px 0',
  width: '100%',
  '&>div': {
    borderRadius: '20px'
  }
}))
