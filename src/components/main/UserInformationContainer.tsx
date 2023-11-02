import { useState } from 'react'
import { PersianTexts } from '../../utils/persianTexts'
import { SectionWithHeader, SuccessToast } from '../common'
import { useSelector } from 'react-redux'
import { currentIsAdminView } from '../../pages/main/current-user.slice'
import { Person } from '@mui/icons-material'
import { UserInformation } from './UserInformation'
import { updateUserInformation } from '../../utils/dataManipulation'
import { selectedUserView } from '../../pages/main/selected-user.slice'

export function UserInformationContainer() {
  const isAdmin = useSelector(currentIsAdminView)
  const selectedUser = useSelector(selectedUserView)

  const [editMode, setEditMode] = useState(false)

  const handleEditUser = () => {
    updateUserInformation(selectedUser.id, {
      ...selectedUser,
      lastTransactionDate: undefined,
    })
      .then(() => {
        SuccessToast(PersianTexts.successful).showToast()
      })
      .catch(console.warn)
      .finally(() => setEditMode(false))
  }

  return (
    <SectionWithHeader
      header={PersianTexts.userInformation}
      Icon={<Person color="primary" />}
      action={
        isAdmin
          ? editMode
            ? PersianTexts.submit
            : PersianTexts.edit
          : undefined
      }
      onAction={editMode ? handleEditUser : () => setEditMode(true)}
    >
      <UserInformation editMode={editMode} />
    </SectionWithHeader>
  )
}
