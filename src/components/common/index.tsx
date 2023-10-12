import { Button, styled, TextField as MuiTextField } from '@mui/material'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers'
import { ReactElement } from 'react'

export const TextField = styled(MuiTextField)(() => ({
  margin: '10px 0',
  width: '100%',
  '&>div': {
    borderRadius: '20px',
  },
}))

export const DatePicker = styled(MuiDatePicker)(() => ({
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
}))

export function Section({
  children,
}: {
  children: ReactElement[] | ReactElement
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        border: '1px solid #88888849',
        borderRadius: '20px',
        boxSizing: 'border-box',
        margin: '20px 0',
      }}
    >
      {children}
    </div>
  )
}
