import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Section } from '../common'
import { Tab, styled } from '@mui/material'
import { CreateUser } from './CreateUser'
import { PersianTexts } from '../../utils/persianTexts'
import { AllUsersTable } from './AllUsersTable'
import { SubmitTransaction } from './SubmitTransaction'
import { SubmitProfit } from './SubmitProfit'
import { useEffect, useState } from 'react'
import { createUser, getAllUsers } from '../../utils/dataManipulation'
import { SuccessToast } from '../common/SuccessToast'
import { User } from '../../models/user'

const StyledTabPanel = styled(TabPanel)(() => ({
    padding: '10px 30px',
    boxSizing: 'border-box',
    width: '100%',
    margin: '10px 0 0',
}))

interface Props {
    handleChangeSelectedUser: (id: string) => unknown
}

export function AdminToolbox({ handleChangeSelectedUser }: Props) {
  const [selectedTab, setSelectedTab] = useState<string>('1')
  const [users, setUsers] = useState<Partial<User>[]>([])

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res.data)
    })
  }, [])

  const handleCreateUser = ({
    username,
    password,
  }: {
    username: string
    password: string
  }) => {
    createUser(username, password).then((res) => {
      SuccessToast(PersianTexts.successful).showToast()
      setUsers([
        ...users,
        {
          username,
          password,
          id: res.data,
          firstname: undefined,
          lastname: undefined,
        },
      ])
    })
  }
  return (
    <Section>
      <TabContext value={selectedTab}>
        <TabList
        sx={{ width: '100%'}}
          onChange={(e, value) => setSelectedTab(value)}
          aria-label="basic tabs example"
        >
          <Tab label={PersianTexts.usersList} value="1" />
          <Tab label={PersianTexts.createNewUser} value="2" />
          <Tab label={PersianTexts.submitTransaction} value="3" />

          <Tab label={PersianTexts.submitProfit} value="4" />
        </TabList>

        <StyledTabPanel value="1">
          <AllUsersTable
            users={users}
            selectUser={handleChangeSelectedUser}
          />
        </StyledTabPanel>
        <StyledTabPanel value="2">
          <CreateUser handleCreateUser={handleCreateUser} />
        </StyledTabPanel>
        <StyledTabPanel value="3">
          <SubmitTransaction users={users} />
        </StyledTabPanel>
        <StyledTabPanel value="4">
          <SubmitProfit users={users} />
        </StyledTabPanel>
      </TabContext>
    </Section>
  )
}
