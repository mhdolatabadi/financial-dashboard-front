import {
  Button,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material'
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

export function SubmitTransaction({ users }: Props) {
  const [username, setUsername] = useState<string>()
  const [date, setDate] = useState<Dayjs | null>()
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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
      }}
    >
      <Typography>ثبت تراکنش مالی</Typography>

      <div>
        <TextField
          select
          sx={{ width: '200px' }}
          value={username}
          label="نام کاربری"
          onChange={(e) => setUsername(e.target.value)}
        >
          {users.map((u) => (
            <MenuItem value={u.id}>{u.username}</MenuItem>
          ))}
        </TextField>
      </div>
      <DatePicker
        label="تاریخ"
        value={date}
        onChange={(value) => setDate(value)}
      />
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <FormControlLabel value="in" control={<Radio />} label="واریز" />
        <FormControlLabel value="out" control={<Radio />} label="برداشت" />
      </RadioGroup>
      <div>
        <TextField
          label="مبلغ"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <MenuItem value="rial">ریال</MenuItem>
          <MenuItem value="derham">درهم</MenuItem>
          <MenuItem value="dollar">دلار</MenuItem>
          <MenuItem value="euro">یورو</MenuItem>
        </Select>
      </div>
      <TextField
        multiline
        label="توضیحات"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmitTransaction}>
        ثبت
      </Button>
    </div>
  )
}
