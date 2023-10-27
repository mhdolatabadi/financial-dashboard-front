import { Stack, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { DataDisplayWithEdit } from '../common/DataDisplayWithEdit'
import { PersianTexts } from '../../utils/persianTexts'
import { User } from '../../models/user'
import { SectionWithHeader } from '../common/SectionWithHeader'
import { unitToPersian } from '../../utils/unitToPersian'
import { getUserWithId, updateUserInformation } from '../../utils/dataManipulation'

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
    getUserWithId(id).then((res) => {
      console.log(res)
      setUser(res.data)
    })
  }, [id])

  const handleEditUser = (partialUser: Partial<User>) => {
    updateUserInformation(partialUser)
    setUser({ ...user, ...partialUser })
  }

  return (
    <SectionWithHeader header={PersianTexts.userInformation}>
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
          value={
            user?.lastTransactionDate
              ? Intl.DateTimeFormat('fa-IR')
                  .format(new Date(user?.lastTransactionDate))
                  .toString()
              : PersianTexts.thereIsNoTransactionYet
          }
        />
        <DataDisplayWithEdit
          isAdmin={isAdmin}
          label={PersianTexts.totalFinance}
          value={
            user?.financial && user?.unit
              ? `${Intl.NumberFormat('fa-IR').format(
                  +user?.financial,
                )} ${unitToPersian(user?.unit)}`
              : undefined
          }
          onEdit={(financial) => handleEditUser({ financial: +financial })}
        />
      </DataFieldRow>
    </SectionWithHeader>
  )
}
