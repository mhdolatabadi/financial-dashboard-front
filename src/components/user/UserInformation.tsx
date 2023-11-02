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
  setSelectedUsername
} from '../../pages/user/selected-user.slice'

export function UserInformation({ editMode }: { editMode: boolean }) {
  const dispatch = useDispatch()
  const selectedUser = useSelector(selectedUserView)
  return (
    <div style={{ width: '100%' }}>
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.username}
        value={selectedUser?.username}
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
        value={selectedUser?.nationalNo ? selectedUser?.nationalNo : undefined}
        onEdit={(nationalNo) => dispatch(setSelectedNationalNo(nationalNo))}
      />
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.firstname}
        value={selectedUser?.firstname}
        onEdit={(firstname) => dispatch(setSelectedFirstname(firstname))}
      />
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.lastname}
        value={selectedUser?.lastname}
        onEdit={(lastname) => dispatch(setSelectedLastname(lastname))}
      />
      {!editMode && (
        <DataDisplayWithEdit
          label={PersianTexts.lastTransactionDate}
          value={
            selectedUser?.lastTransactionDate
              ? Intl.DateTimeFormat('fa-IR')
                .format(new Date(selectedUser?.lastTransactionDate))
                .toString()
              : PersianTexts.thereIsNoTransactionYet
          }
        />
      )}
      <DataDisplayWithEdit
        editMode={editMode}
        label={PersianTexts.totalFinance}
        value={
          selectedUser.financial && selectedUser.unit
            ? editMode
              ? String(selectedUser.financial)
              : `${Intl.NumberFormat('fa-IR').format(
                +selectedUser.financial
              )} ${unitToPersian(selectedUser.unit)}`
            : undefined
        }
        onEdit={(financial) => dispatch(setSelectedFinancial(+financial))}
      />
    </div>
  )
}
