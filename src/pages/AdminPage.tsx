import { Typography } from '@mui/material'
import {
  CreateUser,
  SubmitProfit,
  SubmitTransaction,
} from '../components/admin'
import { AllUsersTable } from '../components/admin/AllUsersTable'
import { useState } from 'react'
import {
  ProfitsTable,
  TransactionsTable,
  UserInformation,
} from '../components/user'

export function AdminPage() {
  const [selectedUser, setSelectedUser] = useState<string>()
  return (
    <div style={{ width: '100%' }}>
      <Typography>صفحه‌ی مدیر</Typography>
      <AllUsersTable selectUser={(id) => setSelectedUser(id)} />
      <CreateUser />
      {selectedUser ? <UserInformation id={selectedUser} /> : null}
      <SubmitTransaction />
      <TransactionsTable />
      <SubmitProfit />
      <ProfitsTable />
    </div>
  )
}
