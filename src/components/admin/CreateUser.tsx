import { Typography } from '@mui/material'
import { useState } from 'react'
import { PersianTexts } from '../../persianTexts'
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
    <div>
      <Typography color="primary" fontWeight="700">
        {PersianTexts.createNewUser}
      </Typography>
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
      <ContainedButton
        variant="contained"
        onClick={() => handleCreateUser({ username, password })}
      >
        {PersianTexts.create}
      </ContainedButton>
    </div>
  )
}
