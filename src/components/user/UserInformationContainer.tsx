import { useState } from 'react'
import { PersianTexts } from '../../utils/persianTexts'
import { SectionWithHeader, SuccessToast } from '../common'
import { useSelector } from 'react-redux'
import { currentIsAdminView } from '../../pages/user/current-user.slice'
import { Person } from '@mui/icons-material'
import { UserInformation } from './UserInformation'
import { selectedUserView } from '../../pages/user/selected-user.slice'
import { UserInformationForm } from './UserInformationForm'

export function UserInformationContainer() {
  const isAdmin = useSelector(currentIsAdminView)
  const selectedUser = useSelector(selectedUserView)

  const [editMode, setEditMode] = useState(false)

  return (
    <SectionWithHeader
      header={PersianTexts.userInformation}
      Icon={<Person color="primary" />}
      action={isAdmin ? (editMode ? undefined : PersianTexts.edit) : undefined}
      onAction={editMode ? undefined : () => setEditMode(true)}
    >
      {editMode ? (
        <UserInformationForm handleClose={(state) => setEditMode(state)} />
      ) : (
        <UserInformation editMode={editMode} />
      )}
    </SectionWithHeader>
  )
}
