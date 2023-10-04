import { Stack, Typography, styled } from '@mui/material'
import { useState } from 'react'

const DataFieldRow = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '100%',
}))

export function UserInformation() {
  const [firstName, setFirstName] = useState('jim')
  const [lastName, setLastName] = useState('carry')
  const [username, setUsername] = useState('@jimcarry')
  const [nationalNo, setNationalNo] = useState('0012345678')
  const [lastTransactionDate, setLastTransactionDate] = useState('1402-11-01')
  const [totalFinance, setTotalFinance] = useState('999,999,999,999')
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        direction: 'rtl',
      }}
    >
      <Typography>اطلاعات کاربر</Typography>
      <DataFieldRow>
        <div>
          <Typography>نام کاربری</Typography>
          <Typography>{username}</Typography>
        </div>
        <div>
          <Typography>شماره ملی</Typography>
          <Typography>{nationalNo}</Typography>
        </div>
      </DataFieldRow>
      <DataFieldRow>
        <div>
          <Typography>نام</Typography>
          <Typography>{firstName}</Typography>
        </div>
        <div>
          <Typography>نام خانوادگی</Typography>
          <Typography>{lastName}</Typography>
        </div>
      </DataFieldRow>
      <DataFieldRow>
        <div>
          <Typography>تاریخ آخرین تراکنش</Typography>
          <Typography>{lastTransactionDate}</Typography>
        </div>
        <div>
          <Typography>دارایی فعلی در صندوق</Typography>
          <Typography>{totalFinance}</Typography>
        </div>
      </DataFieldRow>
    </Stack>
  )
}
