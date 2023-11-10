import { useDispatch, useSelector } from 'react-redux'
import { PersianTexts } from '../../utils/persianTexts'
import { ErrorToast, SuccessToast, TextField } from '../common'
import {
  selectedUserView,
  setSelectedFinancial,
  setSelectedFirstname,
  setSelectedLastname,
  setSelectedNationalNo,
  setSelectedPassword,
  setSelectedUsername,
} from '../../pages/user/selected-user.slice'
import { Button } from '@mui/material'
import { updateUserInformation } from '../../utils/dataManipulation'

export function UserInformationForm({
  handleClose,
}: {
  handleClose: (state: boolean) => unknown
}) {
  const dispatch = useDispatch()
  const selectedUser = useSelector(selectedUserView)
  const handleEditUser = () => {
    updateUserInformation(selectedUser.id, {
      ...selectedUser,
      lastTransactionDate: undefined,
    })
      .then((res) => {
        console.log(res.data)
        SuccessToast(PersianTexts.successful).showToast()
      })
      .catch(() => {
        ErrorToast('مشکلی پیش آمد').showToast()
      })
      .finally(() => handleClose(false))
  }
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <TextField
        label={PersianTexts.username}
        value={selectedUser?.username}
        onChange={(username) =>
          dispatch(setSelectedUsername(username.target.value))
        }
      />
      <TextField
        label={PersianTexts.password}
        value={selectedUser.password}
        onChange={(password) =>
          dispatch(setSelectedPassword(password.target.value))
        }
      />
      <TextField
        label={PersianTexts.nationalNo}
        value={selectedUser?.nationalNo ? selectedUser?.nationalNo : undefined}
        onChange={(nationalNo) =>
          dispatch(setSelectedNationalNo(nationalNo.target.value))
        }
      />
      <TextField
        label={PersianTexts.firstname}
        value={selectedUser?.firstname}
        onChange={(e) => dispatch(setSelectedFirstname(e.target.value))}
      />
      <TextField
        label={PersianTexts.lastname}
        value={selectedUser?.lastname}
        onChange={(e) => dispatch(setSelectedLastname(e.target.value))}
      />
      <TextField
        label={PersianTexts.totalFinance}
        value={
          selectedUser.financial && selectedUser.unit
            ? String(selectedUser.financial)
            : undefined
        }
        onChange={(e) => dispatch(setSelectedFinancial(+e.target.value))}
      />
      <div style={{ display: 'flex', margin: '10px 0' }}>
        <Button
          sx={{ width: '100%', borderRadius: '20px', margin: '5px' }}
          color="error"
          variant="outlined"
          onClick={() => handleClose(false)}
        >
          {PersianTexts.cancel}
        </Button>
        <Button
          sx={{
            width: '100%',
            borderRadius: '20px',
            margin: '5px',
            height: '40px',
          }}
          variant="contained"
          onClick={handleEditUser}
        >
          {PersianTexts.submit}
        </Button>
      </div>
    </div>
  )
}
