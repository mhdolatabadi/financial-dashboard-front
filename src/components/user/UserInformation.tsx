import { useDispatch, useSelector } from 'react-redux'
import { DataDisplayWithEdit } from '../common'
import { PersianTexts } from '../../utils/persianTexts'
import { unitToPersian } from '../../utils/unitToPersian'
import {
  selectedUserView,
  setSelectedFinancial,
  setSelectedFirstname,
  setSelectedLastname,
  setSelectedNationalNo,
  setSelectedPassword,
  setSelectedUsername,
} from '../../pages/user/selected-user.slice'
import { Box, Stack } from '@mui/material'
import { User } from '../../models/user'

interface Props {
  editMode: boolean
  user: User
}

export function UserInformation({ user, editMode }: Props) {
  const dispatch = useDispatch()
  return (
    <Stack
      sx={{
        width: '100%',
        padding: '15px 0',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.username}
        value={user?.username}
        onEdit={(username) => dispatch(setSelectedUsername(username))}
      />
      {editMode && (
        <DataDisplayWithEdit
          editMode={editMode}
          label={PersianTexts.password}
          value={''}
          onEdit={(password) => dispatch(setSelectedPassword(password))}
        />
      )}
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.nationalNo}
        value={user?.nationalNo ? user?.nationalNo : undefined}
        onEdit={(nationalNo) => dispatch(setSelectedNationalNo(nationalNo))}
      />
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.firstname}
        value={user?.firstname}
        onEdit={(firstname) => dispatch(setSelectedFirstname(firstname))}
      />
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.lastname}
        value={user?.lastname}
        onEdit={(lastname) => dispatch(setSelectedLastname(lastname))}
      />
      {!editMode && (
        <DataDisplayWithEdit
          label={PersianTexts.lastTransactionDate}
          value={
            user?.lastTransactionDate
              ? Intl.DateTimeFormat('fa-IR')
                  .format(new Date(user?.lastTransactionDate))
                  .toString()
              : PersianTexts.thereIsNoTransactionYet
          }
        />
      )}
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.totalFinance}
        value={
          user.financial && user.unit
            ? editMode
              ? String(user.financial)
              : `${Intl.NumberFormat('fa-IR').format(
                  +user.financial,
                )} ${unitToPersian(user.unit)}`
            : undefined
        }
        onEdit={(financial) => dispatch(setSelectedFinancial(+financial))}
      />
    </Stack>
  )
}
