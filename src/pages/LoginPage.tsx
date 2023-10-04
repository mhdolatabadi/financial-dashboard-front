import { Button, Stack, TextField } from '@mui/material'

export function LoginPage() {
  return (
    <div>
      <Stack
        sx={{
          width: '100%',
          padding: '50px',
          direction: 'rtl',
        }}
      >
        <TextField label="نام کاربری" />
        <TextField label="رمز عبور" type="password" />
        <Button>ورود</Button>
      </Stack>
    </div>
  )
}
