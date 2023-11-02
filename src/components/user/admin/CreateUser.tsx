import { useState } from 'react'
import { PersianTexts } from '../../../utils/persianTexts'
import { TextField } from '../../common'
import { ContainedButton } from '../../common'
import { Credential } from '../../../models/Credential'

interface Props {
  handleCreateUser: ({ username, password }: Credential) => unknown
}

export function CreateUser({ handleCreateUser }: Props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box'
      }}
    >
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
        variant='contained'
        onClick={() => handleCreateUser({ username, password })}
      >
        {PersianTexts.create}
      </ContainedButton>
    </div>
  )
}
