import { useDispatch, useSelector } from 'react-redux'
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
import { updateUserInformation } from '../../settings/api/dataManipulation'
import { Units } from '../../models/units'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  handleClose: (state: boolean) => unknown
}

export function UserInformationForm({ handleClose }: Props) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const selectedUser = useSelector(selectedUserView)
  const handleEditUser = () => {
    updateUserInformation(selectedUser.id, {
      ...selectedUser,
      lastTransactionDate: undefined,
    })
      .then((res) => {
        console.log(res.data)
        SuccessToast(t('messages.successful')).showToast()
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
          label={t('user.username')}
          value={selectedUser?.username}
          onChange={(username) =>
            dispatch(setSelectedUsername(username.target.value))
          }
        />
        <TextField
          label={t('user.password')}
          value={selectedUser.password}
          onChange={(password) =>
            dispatch(setSelectedPassword(password.target.value))
          }
          helperText="تنها در صورتی که می‌خواهید رمز عبور را تغییر دهید این فیلد را پر کنید"
        />
        <TextField
          label={t('user.nationalNo')}
          value={
            selectedUser?.nationalNo ? selectedUser?.nationalNo : undefined
          }
          onChange={(nationalNo) =>
            dispatch(setSelectedNationalNo(nationalNo.target.value))
          }
        />
        <TextField
          label={t('user.firstname')}
          value={selectedUser?.firstname}
          onChange={(e) => dispatch(setSelectedFirstname(e.target.value))}
        />
        <TextField
          label={t('user.lastname')}
          value={selectedUser?.lastname}
          onChange={(e) => dispatch(setSelectedLastname(e.target.value))}
        />
        <TextField
          disabled
          label={t('financial')}
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
          <MenuItem value={Units.rial}>{t('units.rial')}</MenuItem>
          <MenuItem value={Units.derham}>{t('units.derham')}</MenuItem>
          <MenuItem value={Units.dollar}>{t('units.dollar')}</MenuItem>
          <MenuItem value={Units.euro}>{t('units.euro')}</MenuItem>
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
          {t('common.cancel')}
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
          {t('common.submit')}
        </Button>
      </div>
    </div>
  )
}
