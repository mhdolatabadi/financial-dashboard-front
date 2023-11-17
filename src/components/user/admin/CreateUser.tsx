import React, { useState } from 'react'
import { PersianTexts } from '../../../utils/persianTexts'
import { ContainedButton, TextField } from '../../common'
import { Credential } from '../../../models/Credential'
import { MenuItem } from '@mui/material'
import { Units } from '../../../models/units'

interface Props {
  handleCreateUser: ({
    username,
    password,
    unit,
  }: Credential & { unit: string }) => unknown
}

export function CreateUser({ handleCreateUser }: Props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [unit, setUnit] = useState<string>(Units.dollar)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div>
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
        <TextField
          select
          label="واحد تراکنش‌های کاربر"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <MenuItem value={Units.rial}>{PersianTexts.rial}</MenuItem>
          <MenuItem value={Units.derham}>{PersianTexts.derham}</MenuItem>
          <MenuItem value={Units.dollar}>{PersianTexts.dollar}</MenuItem>
          <MenuItem value={Units.euro}>{PersianTexts.euro}</MenuItem>
        </TextField>
      </div>
      <ContainedButton
        variant="contained"
        onClick={() => handleCreateUser({ username, password, unit })}
      >
        {PersianTexts.create}
      </ContainedButton>
    </div>
  )
}
