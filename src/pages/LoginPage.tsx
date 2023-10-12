import { Button } from '@mui/material'
import { Section, TextField } from '../components/common'

export function LoginPage() {
  return (
    <Section>
      <TextField label="نام کاربری" />
      <TextField label="رمز عبور" type="password" />
      <Button>ورود</Button>
    </Section>
  )
}
