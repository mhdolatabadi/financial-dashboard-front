import { Typography } from '@mui/material'
import {
  CreateUser,
  SubmitProfit,
  SubmitTransaction,
} from '../components/admin'

export function AdminPage() {
  return (
    <div style={{ width: '100%' }}>
      <Typography>صفحه‌ی مدیر</Typography>
      <CreateUser />
      <SubmitTransaction />
      <SubmitProfit />
    </div>
  )
}
