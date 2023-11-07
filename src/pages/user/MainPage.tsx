import {
  ProfitsTable,
  TransactionsTable,
  UserInformationContainer,
} from '../../components/user'
import { useEffect } from 'react'
import {
  getAllUsers,
  getUserProfits,
  getUserTransactions,
  getUserWithUsername,
} from '../../utils/dataManipulation'
import { AdminToolbox } from '../../components/user/admin/AdminToolbox'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentIsAdminView,
  currentUsernameView,
  currentUserView,
  setCurrentUser,
} from './current-user.slice'
import {
  selectedUserView,
  selectedUsernameView,
  setSelectedProfits,
  setSelectedTransactions,
  setSelectedUser,
} from './selected-user.slice'
import { Typography } from '@mui/material'
import { unitToPersian } from '../../utils/unitToPersian'
import { setUsers } from './main.slice'

export function MainPage() {
  const dispatch = useDispatch()
  const selectedUsername = useSelector(selectedUsernameView)
  const currentUsername = useSelector(currentUsernameView)
  const currentUser = useSelector(currentUserView)
  const selectedUser = useSelector(selectedUserView)
  const isAdmin = useSelector(currentIsAdminView)

  const fetchData = () => {
    getAllUsers().then((res) => {
      dispatch(setUsers(res.data))
    })
    getUserWithUsername(currentUsername).then((res) => {
      dispatch(setCurrentUser(res.data))
      dispatch(setSelectedUser(res.data))
      getUserTransactions(res.data.id).then((res2) => {
        dispatch(setSelectedTransactions(res2.data))
      })
      getUserProfits(res.data.id).then((res2) => {
        dispatch(setSelectedProfits(res2.data))
      })
    })
  }

  useEffect(() => {
    fetchData()
  }, [currentUsername])

  return (
    <div style={{ padding: '130px 0 0', height: '100%', width: '100%' }}>
      <div style={{ padding: '20px' }}>
        <Typography
          color="white"
          fontWeight="700"
          fontSize="25px"
        >{`دارایی شما: ${Intl.NumberFormat('fa-IR').format(
          currentUser.financial ?? 0,
        )} ${unitToPersian(currentUser.unit)}`}</Typography>
      </div>
      {isAdmin && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {isAdmin && <AdminToolbox />}
          {selectedUsername && <UserInformationContainer user={selectedUser} />}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        {selectedUsername && <TransactionsTable />}
        {selectedUsername && <ProfitsTable />}
      </div>
    </div>
  )
}
