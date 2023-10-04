import { Button, TextField, Typography } from '@mui/material'

export function CreateUser() {
  return (
    <div dir="rtl">
      <Typography>ساخت کاربر</Typography>
      <TextField label="نام کاربری"></TextField>
      <TextField label="رمز عبور"></TextField>
      <Button>ساخت</Button>
    </div>
  )
}
