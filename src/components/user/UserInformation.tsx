import { useDispatch } from 'react-redux'
import { DataDisplay } from '../common'
import { PersianTexts } from '../../utils/persianTexts'
import { unitToPersian } from '../../utils/unitToPersian'
import { Stack } from '@mui/material'
import { User } from '../../models/user'

interface Props {
  user: User
}

export function UserInformation({ user }: Props) {
  const dispatch = useDispatch()
  return (
    <Stack
      sx={{
        width: '100%',
        padding: '15px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        height: '100%',
        background: '#fff5',
        borderRadius: '20px',
      }}
    >
      <DataDisplay label={PersianTexts.username} value={user?.username} />
      <DataDisplay label={PersianTexts.password} value={''} />
      <DataDisplay
        label={PersianTexts.nationalNo}
        value={user?.nationalNo ? user?.nationalNo : undefined}
      />
      <DataDisplay label={PersianTexts.firstname} value={user?.firstname} />
      <DataDisplay label={PersianTexts.lastname} value={user?.lastname} />
      <DataDisplay
        label={PersianTexts.lastTransactionDate}
        value={
          user?.lastTransactionDate
            ? Intl.DateTimeFormat('fa-IR')
                .format(new Date(user?.lastTransactionDate))
                .toString()
            : PersianTexts.thereIsNoTransactionYet
        }
      />
      <DataDisplay
        label={PersianTexts.financial}
        value={
          user.financial && user.unit
            ? `${Intl.NumberFormat('fa-IR').format(
                +user.financial,
              )} ${unitToPersian(user.unit)}`
            : undefined
        }
      />

      <DataDisplay
        label={PersianTexts.totalProfit}
        value={
          user.totalProfit && user.unit
            ? `${Intl.NumberFormat('fa-IR').format(
                +user.totalProfit,
              )} ${unitToPersian(user.unit)}`
            : undefined
        }
      />
    </Stack>
  )
}
