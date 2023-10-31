import { Typography } from '@mui/material'
import { useState } from 'react'
import { PersianTexts } from '../../utils/persianTexts'
import { ContainedButton, TextField } from '../common'

interface Props {
  handleCreateUser: ({
    username,
    password,
  }: {
    username: string
    password: string
  }) => unknown
}

export function CreateUser({ handleCreateUser }: Props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (

    <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%', padding: '0 300px', boxSizing: 'border-box'}}>
      {/* <Typography color="primary" fontWeight="700">
        {PersianTexts.createNewUser}
      </Typography> */}
      <div style={{ margin: '20px 0 40px' }}>
        <TextField
          label={PersianTexts.username}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label={PersianTexts.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <ContainedButton
        variant="contained"
        onClick={() => handleCreateUser({ username, password })}
      >
        {PersianTexts.create}
      </ContainedButton>
    </div>
  )
}
