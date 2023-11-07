import { useState } from 'react'
import { PersianTexts } from '../../utils/persianTexts'
import { SectionWithHeader, SuccessToast } from '../common'
import { useSelector } from 'react-redux'
import { currentIsAdminView } from '../../pages/user/current-user.slice'
import { Person } from '@mui/icons-material'
import { UserInformation } from './UserInformation'
import { selectedUserView } from '../../pages/user/selected-user.slice'
import { UserInformationForm } from './UserInformationForm'
import { User } from '../../models/user'

interface Props {
  user: User
}

export function UserInformationContainer({ user }: Props) {
  const isAdmin = useSelector(currentIsAdminView)
  const selectedUser = useSelector(selectedUserView)

  const [editMode, setEditMode] = useState(false)

  return (
    <SectionWithHeader
      header={PersianTexts.userInformation}
      Icon={<Person sx={{ color: 'primary.main' }} />}
      action={isAdmin ? (editMode ? undefined : PersianTexts.edit) : undefined}
      onAction={editMode ? undefined : () => setEditMode(true)}
      sx={{
        maxWidth: '400px',
      }}
    >
      {editMode ? (
        <UserInformationForm handleClose={(state) => setEditMode(state)} />
      ) : (
        <UserInformation editMode={editMode} user={user} />
      )}
    </SectionWithHeader>
  )
}
