import { Stack, Typography, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { DataDisplayWithEdit } from '../common/DataDisplayWithEdit'
import { Section } from '../common'
import { PersianTexts } from '../../persianTexts'
import { User } from '../../models/user'

const DataFieldRow = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '100%',
}))

interface Props {
  id: string
  isAdmin: boolean
}
export function UserInformation({ id, isAdmin }: Props) {
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
    <Section>
      <Typography color="primary" fontWeight="600">
        {PersianTexts.userInformation}
      </Typography>
      <DataFieldRow>
        <DataDisplayWithEdit
          isAdmin={isAdmin}
          label={PersianTexts.username}
          value={user?.username}
          onEdit={(username) => handleEditUser({ username })}
        />
        <DataDisplayWithEdit
          isAdmin={isAdmin}
          label={PersianTexts.nationalNo}
          value={user?.nationalNo}
          onEdit={(nationalNo) =>
            handleEditUser({ nationalNo: Number(nationalNo) })
          }
        />
      </DataFieldRow>
      <DataFieldRow>
        <DataDisplayWithEdit
          isAdmin={isAdmin}
          label={PersianTexts.firstname}
          value={user?.firstname}
          onEdit={(firstname) => handleEditUser({ firstname })}
        />
        <DataDisplayWithEdit
          isAdmin={isAdmin}
          label={PersianTexts.lastname}
          value={user?.lastname}
          onEdit={(lastname) => handleEditUser({ lastname })}
        />
      </DataFieldRow>
      <DataFieldRow>
        <DataDisplayWithEdit
          isAdmin={isAdmin}
          label={PersianTexts.lastTransactionDate}
          value={Date.now().toString()}
          onEdit={() => console.log('edited')}
        />
        <DataDisplayWithEdit
          isAdmin={isAdmin}
          label={PersianTexts.totalFinance}
          value={user?.financial}
          onEdit={() => console.log('edited')}
        />
      </DataFieldRow>
    </Section>
  )
}
