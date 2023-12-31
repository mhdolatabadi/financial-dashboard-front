import React, { useState } from 'react'
import { ContainedButton, TextField } from '../common'
import { Credential } from '../../models/Credential'
import { MenuItem } from '@mui/material'
import { Units } from '../../models/units'
import { useTranslation } from 'react-i18next'
import { usersView } from '../../pages/user/main.slice'
import { useSelector } from 'react-redux'

interface Props {
  handleCreateUser: ({
    username,
    password,
    unit,
  }: Credential & { unit: string }) => unknown
}

export function CreateUser({ handleCreateUser }: Props) {
  const { t } = useTranslation()

  const users = useSelector(usersView)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [unit, setUnit] = useState<string>(Units.dollar)

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
      }}
      onSubmit={() => handleCreateUser({ username, password, unit })}
    >
      <div>
        <TextField
          label={t('user.username')}
          value={username}
          error={users.map(u => u.username).includes(username)}
          helperText={users.map(u => u.username).includes(username) ? 'نام کاربری باید یکتا باشد' : ''} 
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label={t('user.password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          select
          label="واحد تراکنش‌های کاربر"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <MenuItem value={Units.rial}>{t('units.rial')}</MenuItem>
          <MenuItem value={Units.derham}>{t('units.derham')}</MenuItem>
          <MenuItem value={Units.dollar}>{t('units.dollar')}</MenuItem>
          <MenuItem value={Units.euro}>{t('units.euro')}</MenuItem>
        </TextField>
      </div>
      <ContainedButton
        onClick={() => handleCreateUser({ username, password, unit })}
      >
        {t('common.create')}
      </ContainedButton>
    </form>
  )
}
