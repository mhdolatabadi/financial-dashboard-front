import { useDispatch } from 'react-redux'
import { DataDisplay } from '../common'
import { Skeleton, Stack } from '@mui/material'
import { User } from '../../models/user'
import { useTranslation } from 'react-i18next'
import { toPersianNumber } from '../../utils/toPersianNumber'

interface Props {
  user: User
}

export function UserInformation({ user }: Props) {
  const { t } = useTranslation()
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
      <DataDisplay label={t('user.username')} value={user.username} />
      <DataDisplay
        label={t('user.nationalNo')}
        value={user?.nationalNo ? user?.nationalNo : undefined}
      />
      <DataDisplay label={t('user.firstname')} value={user?.firstname} />
      <DataDisplay label={t('user.lastname')} value={user?.lastname} />
      <DataDisplay
        label={t('lastTransactionDate')}
        value={
          user?.lastTransactionDate
            ? Intl.DateTimeFormat('fa-IR')
                .format(new Date(user?.lastTransactionDate))
                .toString()
            : t('inform.thereIsNoTransactionYet')
        }
      />
      <DataDisplay
        label={t('financial')}
        value={`${toPersianNumber(user.financial)} ${t(`units.${user.unit}`)}`}
      />

      <DataDisplay
        label={t('totalProfit')}
        value={`${toPersianNumber(user.totalProfit)} ${t(
          `units.${user.unit}`,
        )}`}
      />
    </Stack>
  )
}
