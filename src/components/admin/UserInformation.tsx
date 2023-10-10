import { Button, Stack, Typography, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { DataDisplayWithEdit } from '../common/DataDisplayWithEdit'

const DataFieldRow = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '100%',
}))

const RowFlex = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-evenly',
  color: theme.palette.secondary.main,
  border: '2px solid white',
}))

interface Props {
  id: string
}
interface User {
  id: string
  username: string
  password: string
  firstName: string | null
  lastName: string | null
  nationalNo: number | null
  financial: number | null
  unit: string
  totalProfit: number | null
  isAdmin: boolean
}
export function UserInformation({ id }: Props) {
  const [user, setUser] = useState<Partial<User>>()

  useEffect(() => {
    axios.get(`http://localhost:3456/user/${id}`).then((res) => {
      console.log(res)
      setUser(res.data)
    })
  }, [id])

  const handleEditUser = (partialUser: Partial<User>) => {
    axios.put(`http://localhost:3456/user/${id}`, partialUser)
    setUser({ ...user, ...partialUser })
  }

  return (
    <Stack
      sx={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}
    >
      <Typography>اطلاعات کاربر</Typography>
      <DataFieldRow>
        <DataDisplayWithEdit
          label="نام کاربری"
          value={user?.username}
          onEdit={(username) => handleEditUser({ username })}
        />
        <DataDisplayWithEdit
          label="شماره ملی"
          value={user?.nationalNo}
          onEdit={(nationalNo) =>
            handleEditUser({ nationalNo: Number(nationalNo) })
          }
        />
      </DataFieldRow>
      <DataFieldRow>
        <DataDisplayWithEdit
          label="نام"
          value={user?.firstName}
          onEdit={(firstName) => handleEditUser({ firstName })}
        />
        <DataDisplayWithEdit
          label="نام خانوادگی"
          value={user?.lastName}
          onEdit={(lastName) => handleEditUser({ lastName })}
        />
      </DataFieldRow>
      <DataFieldRow>
        <DataDisplayWithEdit
          label="تاریخ آخرین تراکنش"
          value={Date.now().toString()}
          onEdit={() => console.log('edited')}
        />
        <DataDisplayWithEdit
          label="دارایی فعلی در صندوق"
          value={user?.financial}
          onEdit={() => console.log('edited')}
        />
      </DataFieldRow>
    </Stack>
  )
}
