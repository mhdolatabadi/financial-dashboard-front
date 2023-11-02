import { ProfitsTable, TransactionsTable, UserInformationContainer } from '../../components/user'
import { useEffect } from 'react'
import { getUserWithUsername } from '../../utils/dataManipulation'
import { AdminToolbox } from '../../components/user/admin/AdminToolbox'
import { useDispatch, useSelector } from 'react-redux'
import { currentIsAdminView, currentUsernameView, currentUserView, setCurrentUser } from './current-user.slice'
import { selectedUsernameView, setSelectedUser } from './selected-user.slice'
import { Typography } from '@mui/material'
import { unitToPersian } from '../../utils/unitToPersian'

export function MainPage() {
  const dispatch = useDispatch()
  const selectedUsername = useSelector(selectedUsernameView)
  const currentUsername = useSelector(currentUsernameView)
  const currentUser = useSelector(currentUserView)
  const isAdmin = useSelector(currentIsAdminView)

  useEffect(() => {
    getUserWithUsername(currentUsername).then((res) => {
      dispatch(setCurrentUser(res.data))
    })
  }, [currentUsername])

  useEffect(() => {
    getUserWithUsername(selectedUsername)
      .then((res) => {
        dispatch(setSelectedUser(res.data))
      })
      .catch(console.warn)
  }, [selectedUsername])

  return (
    <div style={{ padding: '130px 0 0', height: '100%' }}>
      <div style={{ padding: '20px' }}>
        <Typography
          color='white'
          fontWeight='700'
          fontSize='25px'
        >{`دارایی شما: ${Intl.NumberFormat('fa-IR').format(
          currentUser.financial ?? 0
        )} ${unitToPersian(currentUser.unit)}`}</Typography>
      </div>
      {isAdmin && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {isAdmin && <AdminToolbox />}
          {selectedUsername && <UserInformationContainer />}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        {selectedUsername && <TransactionsTable />}
        {selectedUsername && <ProfitsTable />}
      </div>
    </div>
  )
}
