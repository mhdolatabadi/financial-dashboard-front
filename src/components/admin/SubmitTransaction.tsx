import { FormControlLabel, MenuItem, Radio, RadioGroup } from '@mui/material'
import { Dayjs } from 'dayjs'
import { useState } from 'react'
import axios from 'axios'
import { ContainedButton, DatePicker, TextField } from '../common'
import { User } from '../../models/user'
import { PersianTexts } from '../../persianTexts'

interface Props {
  users: Partial<User>[]
}

export function SubmitTransaction({ users }: Props) {
  const [username, setUsername] = useState<string>()
  const [date, setDate] = useState<Dayjs | null | unknown>()
  const [type, setType] = useState<string>('in')
  const [amount, setAmount] = useState<string>()
  const [unit, setUnit] = useState<string>('rial')
  const [description, setDescription] = useState<string>()
  const handleSubmitTransaction = () => {
    axios.post('http://localhost:3456/transaction', {
      username,
      date,
      type,
      amount,
      unit,
      description,
    })
  }
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={type}
        onChange={(e) => setType(e.target.value)}
        sx={{ padding: '10px' }}
      >
        <FormControlLabel value="in" control={<Radio />} label="واریز" />
        <FormControlLabel value="out" control={<Radio />} label="برداشت" />
      </RadioGroup>
      <div style={{ width: '100%' }}>
        <TextField
          select
          value={username}
          label={PersianTexts.username}
          onChange={(e) => setUsername(e.target.value)}
        >
          {users.map((u) => (
            <MenuItem value={u.username}>{u.username}</MenuItem>
          ))}
        </TextField>
      </div>
      <DatePicker
        label={PersianTexts.date}
        value={date}
        onChange={(value) => setDate(value)}
      />
      <div style={{ width: '100%', flexDirection: 'row', display: 'flex' }}>
        <TextField
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
