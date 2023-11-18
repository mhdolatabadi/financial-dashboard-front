import { SectionWithHeader } from '../common'
import { useSelector } from 'react-redux'
import { currentIsAdminView } from '../../pages/user/current-user.slice'
import { Person } from '@mui/icons-material'
import { UserInformation } from './UserInformation'
import { UserInformationForm } from './UserInformationForm'
import { User } from '../../models/user'
import { useTranslation } from 'react-i18next'

interface Props {
  user: User
  editMode: boolean
  handleEditMode: (b: boolean) => unknown
}

export function UserInformationContainer({
  user,
  editMode,
  handleEditMode,
}: Props) {
  const { t } = useTranslation()
  const isAdmin = useSelector(currentIsAdminView)
  return (
    <SectionWithHeader
      header={t('userInformation')}
      Icon={<Person sx={{ color: 'primary.main' }} />}
      action={isAdmin ? (editMode ? undefined : t('common.edit')) : undefined}
      onAction={editMode ? undefined : () => handleEditMode(true)}
      sx={{
        maxWidth: '400px',
      }}
    >
      {editMode ? (
        <UserInformationForm handleClose={(state) => handleEditMode(state)} />
      ) : (
        <UserInformation user={user} />
      )}
    </SectionWithHeader>
  )
}
