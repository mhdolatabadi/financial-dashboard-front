import { Button, TextField, Typography } from '@mui/material'

export function SubmitTransaction() {
  return (
    <div dir="rtl">
      <Typography>ثبت تراکنش مالی</Typography>
      <TextField label="نام کاربری" />
      <TextField label="تاریخ" />
      <TextField label="نوع" />
      <TextField label="مبلغ" />
      <TextField label="واحد" />
      <TextField label="توضیحات" />
      <Button>ثبت</Button>
    </div>
  )
}
