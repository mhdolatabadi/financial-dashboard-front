import { Stack, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { PersianTexts } from '../../utils/persianTexts'
import { User } from '../../models/user'
import { unitToPersian } from '../../utils/unitToPersian'
import { updateUserInformation } from '../../utils/dataManipulation'
import {
  ContainedButton,
  DataDisplayWithEdit,
  SectionWithHeader,
  SuccessToast,
} from '../common'
import { useDispatch, useSelector } from 'react-redux'
import { currentIsAdminView } from '../../pages/current-user.slice'
import {
  selectedUserView,
  setSelectedUser,
} from '../../pages/selected-user.slice'
import { Person, PersonPinCircleOutlined, SupervisedUserCircleOutlined } from '@mui/icons-material'

const DataFieldRow = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '100%',
}))

export function UserInformation() {
  const dispatch = useDispatch()
  const selectedUser = useSelector(selectedUserView)
  const isAdmin = useSelector(currentIsAdminView)

  const [editMode, setEditMode] = useState(false)

  const handleEditUser = (partialUser: Partial<User>) => {
    updateUserInformation(selectedUser.id, partialUser)
      .then(() => {
        SuccessToast(PersianTexts.successful).showToast()
        setSelectedUser
        dispatch(setSelectedUser({ ...selectedUser, ...partialUser }))
      })
      .catch(console.warn)
  }

  return (
    <SectionWithHeader
      header={PersianTexts.userInformation}
      Icon={<Person color="primary" />}
      onEdit={console.log}
    >
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.username}
        value={selectedUser?.username}
        onEdit={(username) => handleEditUser({ username })}
      />
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.nationalNo}
        value={
          selectedUser?.nationalNo
            ? Intl.NumberFormat('fa-IR', { useGrouping: false }).format(
                selectedUser?.nationalNo ?? 0,
              )
            : undefined
        }
        onEdit={(nationalNo) =>
          handleEditUser({ nationalNo: Number(nationalNo) })
        }
      />
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.firstname}
        value={selectedUser?.firstname}
        onEdit={(firstname) => handleEditUser({ firstname })}
      />
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.lastname}
        value={selectedUser?.lastname}
        onEdit={(lastname) => handleEditUser({ lastname })}
      />
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.lastTransactionDate}
        value={
          selectedUser?.lastTransactionDate
            ? Intl.DateTimeFormat('fa-IR')
                .format(new Date(selectedUser?.lastTransactionDate))
                .toString()
            : PersianTexts.thereIsNoTransactionYet
        }
      />
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.totalFinance}
        value={
          selectedUser?.financial && selectedUser?.unit
            ? `${Intl.NumberFormat('fa-IR').format(
                +selectedUser?.financial,
              )} ${unitToPersian(selectedUser?.unit)}`
            : undefined
        }
        onEdit={(financial) => handleEditUser({ financial: +financial })}
      />
      {editMode && (
        <DataDisplayWithEdit
          editMode={editMode}
          label={PersianTexts.password}
          value={''}
          onEdit={(password) => handleEditUser({ password })}
        />
      )}
    </SectionWithHeader>
  )
}
