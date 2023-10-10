import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

export function CreateUser() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleCreateUser = () => {
    axios.post('http://localhost:3456/user', {
      username,
      password,
    })
  }
  return (
    <div
      dir="rtl"
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
      }}
    >
      <Typography>ساخت کاربر جدید</Typography>
      <TextField
        label="نام کاربری"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></TextField>
      <TextField
        label="رمز عبور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextField>
      <Button onClick={handleCreateUser}>ساخت</Button>
    </div>
  )
}
