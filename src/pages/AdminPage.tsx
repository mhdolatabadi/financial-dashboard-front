import { Typography } from '@mui/material'
import {
  CreateUser,
  SubmitProfit,
  SubmitTransaction,
  ProfitsTable,
  TransactionsTable,
  UserInformation,
} from '../components/admin'
import { AllUsersTable } from '../components/admin/AllUsersTable'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface User {
  id: string
  username: string
}

export function AdminPage() {
  const [selectedUser, setSelectedUser] = useState<string>()
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    axios.get('http://localhost:3456/user').then((res) => {
      setUsers(res.data)
    })
  }, [])
  return (
    <div style={{ width: '100%' }}>
      <Typography>صفحه‌ی مدیر</Typography>
      <AllUsersTable users={users} selectUser={(id) => setSelectedUser(id)} />
      <CreateUser />
      {selectedUser ? <UserInformation id={selectedUser} /> : null}
      <SubmitTransaction users={users} />
      {selectedUser ? <TransactionsTable userId={selectedUser} /> : null}
      <SubmitProfit users={users} />
      {selectedUser ? <ProfitsTable userId={selectedUser} /> : null}
    </div>
  )
}
