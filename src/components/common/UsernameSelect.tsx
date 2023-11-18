import { MenuItem } from '@mui/material'
import { TextField } from './index'
import { User } from '../../models/user'
import { useTranslation } from 'react-i18next'

interface Props {
  username: string | undefined
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => unknown
  users: Partial<User>[]
}

export function UsernameSelect({ username, onChange, users }: Props) {
  const { t } = useTranslation()
  return (
    <div style={{ width: '100%' }}>
      <TextField
        select
        required
        value={username}
        label={t('user.username')}
        onChange={onChange}
      >
        {users.map((u) => (
          <MenuItem value={u.username}>{u.username}</MenuItem>
        ))}
      </TextField>
    </div>
  )
}
