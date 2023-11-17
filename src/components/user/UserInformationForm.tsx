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
  setSelectedUnit,
  setSelectedUsername,
} from '../../pages/user/selected-user.slice'
import { Button, MenuItem } from '@mui/material'
import { updateUserInformation } from '../../utils/dataManipulation'
import { Units } from '../../models/units'
import React from 'react'

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
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
      }}
    >
      <div>
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
          helperText="تنها در صورتی که می‌خواهید رمز عبور را تغییر دهید این فیلد را پر کنید"
        />
        <TextField
          label={PersianTexts.nationalNo}
          value={
            selectedUser?.nationalNo ? selectedUser?.nationalNo : undefined
          }
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
          disabled
          label={PersianTexts.financial}
          value={
            selectedUser.financial && selectedUser.unit
              ? String(selectedUser.financial)
              : undefined
          }
          onChange={(e) => dispatch(setSelectedFinancial(+e.target.value))}
        />

        <TextField
          select
          label="واحد تراکنش‌های کاربر"
          value={selectedUser.unit}
          onChange={(e) => dispatch(setSelectedUnit(e.target.value))}
        >
          <MenuItem value={Units.rial}>{PersianTexts.rial}</MenuItem>
          <MenuItem value={Units.derham}>{PersianTexts.derham}</MenuItem>
          <MenuItem value={Units.dollar}>{PersianTexts.dollar}</MenuItem>
          <MenuItem value={Units.euro}>{PersianTexts.euro}</MenuItem>
        </TextField>
      </div>
      <div style={{ display: 'flex', margin: '10px 0' }}>
        <Button
          sx={{
            fontWeight: '700',
            fontSize: '17px',
            width: '100%',
            borderRadius: '20px',
            margin: '5px',
            background: '#fffa',
          }}
          color="error"
          variant="outlined"
          onClick={() => handleClose(false)}
        >
          {PersianTexts.cancel}
        </Button>
        <Button
          sx={{
            fontWeight: '700',
            fontSize: '17px',
            width: '100%',
            borderRadius: '20px',
            margin: '5px',
            height: '55px',
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
