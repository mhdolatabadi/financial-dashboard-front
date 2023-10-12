import { MenuItem } from '@mui/material'
import { Dayjs } from 'dayjs'
import { useState } from 'react'
import axios from 'axios'
import { TextField, DatePicker, ContainedButton } from '../common'
import { User } from '../../models/user'
import { PersianTexts } from '../../persianTexts'

interface Props {
  users: Partial<User>[]
}

export function SubmitProfit({ users }: Props) {
  const [username, setUsername] = useState<string>()
  const [date, setDate] = useState<Dayjs | null | unknown>()
  const [amount, setAmount] = useState<string>()
  const [unit, setUnit] = useState<string>('rial')
  const [description, setDescription] = useState<string>()
  const handleSubmitTransaction = () => {
    axios.post('http://localhost:3456/profit', {
      username,
      date,
      amount,
      unit,
      description,
    })
  }
  return (
    <div>
      <div style={{ width: '100%' }}>
        <TextField
          select
          sx={{ width: '100%' }}
          label={PersianTexts.username}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        >
          {users.map((u) => (
            <MenuItem value={u.id}>{u.username}</MenuItem>
          ))}
        </TextField>
      </div>
      <DatePicker
        label={PersianTexts.date}
        value={date}
        onChange={(value) => setDate(value)}
      />
      <div style={{ display: 'flex', width: '100%' }}>
        <TextField
          sx={{ width: '100%' }}
          label={PersianTexts.amount}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <TextField
          select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <MenuItem value="rial">{PersianTexts.rial}</MenuItem>
          <MenuItem value="derham">{PersianTexts.derham}</MenuItem>
          <MenuItem value="dollar">{PersianTexts.dollar}</MenuItem>
          <MenuItem value="euro">{PersianTexts.euro}</MenuItem>
        </TextField>
      </div>
      <TextField
        sx={{ width: '100%' }}
        multiline
        label={PersianTexts.description}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <ContainedButton variant="contained" onClick={handleSubmitTransaction}>
        {PersianTexts.submit}
      </ContainedButton>
    </div>
  )
}
