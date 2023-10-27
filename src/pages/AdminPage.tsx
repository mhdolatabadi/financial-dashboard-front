import {
  ProfitsTable,
  TransactionsTable,
  UserInformation,
} from '../components/admin'
import { useEffect, useState } from 'react'
import { Page } from '../App'
import { getUserWithUsername } from '../utils/dataManipulation'
import { AdminToolbox } from '../components/admin/AdminToolbox'

interface Props {
  username: string
  accessToken: string | undefined
  handleChangePage: (
    page: Page,
    username: string,
    accessToken: string,
  ) => unknown
}

export function AdminPage({ username, accessToken, handleChangePage }: Props) {
  const [selectedUser, setSelectedUser] = useState<string>()
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  useEffect(() => {
    getUserWithUsername(username).then((res) => {
      setSelectedUser(res.data.id)
      setIsAdmin(res.data.isAdmin)
    })
    if (isAdmin) {
    }
  }, [username, isAdmin])

  return (
    <div style={{ width: '100%', padding: '30px 0 0' }}>
      {isAdmin ? (
        <AdminToolbox handleChangeSelectedUser={(id) => setSelectedUser(id)} />
      ) : null}
      {selectedUser ? (
        <UserInformation isAdmin={isAdmin} id={selectedUser} />
      ) : null}
      {selectedUser ? <TransactionsTable userId={selectedUser} /> : null}
      {selectedUser ? <ProfitsTable userId={selectedUser} /> : null}
    </div>
  )
}
