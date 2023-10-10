import { Button, MenuItem, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import { useState } from 'react'
import axios from 'axios'

interface User {
  id: string
  username: string
}
interface Props {
  users: User[]
}

export function SubmitProfit({ users }: Props) {
  const [username, setUsername] = useState<string>()
  const [date, setDate] = useState<Dayjs | null>()
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        width: '500px',
        height: '400px',
      }}
    >
      <Typography>ثبت تراکنش مالی</Typography>
      <div style={{ width: '100%' }}>
        <TextField
          select
          sx={{ width: '100%' }}
          label="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        >
          {users.map((u) => (
            <MenuItem value={u.id}>{u.username}</MenuItem>
          ))}
        </TextField>
      </div>
      <DatePicker
        sx={{ width: '100%' }}
        label="تاریخ"
        value={date}
        onChange={(value) => setDate(value)}
      />
      <div style={{ display: 'flex', width: '100%' }}>
        <TextField
          sx={{ width: '100%' }}
          label="مبلغ"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <TextField
          select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <MenuItem value="rial">ریال</MenuItem>
          <MenuItem value="derham">درهم</MenuItem>
          <MenuItem value="dollar">دلار</MenuItem>
          <MenuItem value="euro">یورو</MenuItem>
        </TextField>
      </div>
      <TextField
        sx={{ width: '100%' }}
        multiline
        label="توضیحات"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        sx={{ width: '100%' }}
        variant="contained"
        onClick={handleSubmitTransaction}
      >
        ثبت
      </Button>
    </div>
  )
}
