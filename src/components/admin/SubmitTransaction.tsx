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

export function SubmitTransaction() {
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
      <TextField
        label="نام کاربری"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <TextField
        label="مبلغ"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <InputLabel id="demo-simple-select-label">واحد</InputLabel>
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
      <TextField
        label="توضیحات"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={handleSubmitTransaction}>ثبت</Button>
    </div>
  )
}
