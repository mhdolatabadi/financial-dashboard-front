import {
  ProfitsTable,
  TransactionsTable,
  UserInformation,
} from '../components/main'
import { useEffect } from 'react'
import { getUserWithUsername } from '../utils/dataManipulation'
import { AdminToolbox } from '../components/main/admin/AdminToolbox'
import { useDispatch, useSelector } from 'react-redux'
import { currentIsAdminView } from './current-user.slice'
import { selectedUsernameView, setSelectedUser } from './selected-user.slice'

export function MainPage() {
  const dispatch = useDispatch()
  const selectedUsername = useSelector(selectedUsernameView)
  const isAdmin = useSelector(currentIsAdminView)

  useEffect(() => {
    getUserWithUsername(selectedUsername)
      .then((res) => {
        dispatch(setSelectedUser(res.data))
      })
      .catch(console.warn)
  }, [selectedUsername])

  return (
    <div style={{ padding: '30px 0 0' }}>
      <div style={{ display: 'flex' }}>
        {isAdmin && <AdminToolbox />}
        {selectedUsername && <UserInformation />}
      </div>
      {selectedUsername && <TransactionsTable />}
      {selectedUsername && <ProfitsTable />}
    </div>
  )
}
