import { useState } from 'react'
import { PersianTexts } from '../../utils/persianTexts'
import {
  ContainedButton,
  ErrorToast,
  Section,
  SuccessToast,
  TextField,
} from '../../components/common'
import { loginUser } from '../../utils/dataManipulation'
import { useDispatch } from 'react-redux'
import { setAccessToken, setCurrentPage } from '../user/main.slice'
import { Page } from '../../models/Page'
import {
  setCurrentIsAdmin,
  setCurrentUsername,
} from '../user/current-user.slice'
import { setSelectedUsername } from '../user/selected-user.slice'

export function LoginPage() {
  const [username, setUsernameState] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useDispatch()
  const loginHandler = () => {
    loginUser(username, password)
      .then(({ data }) => {
        localStorage.setItem('username', username)
        localStorage.setItem('accessToken', data.access_token)
        dispatch(setCurrentPage(Page.admin))
        dispatch(setAccessToken(data.access_token))
        dispatch(setCurrentIsAdmin(data.isAdmin))
        dispatch(setSelectedUsername(username))
        dispatch(setCurrentUsername(username))
        SuccessToast(PersianTexts.successfulLogin).showToast()
      })
      .catch(() => {
        ErrorToast('مشکلی پیش آمد').showToast()
      })
  }

  return (
    <Section sx={{ width: '500px', margin: '200px auto' }}>
      <div
        style={{
          width: '100%',
          background: '#fff5',
          padding: '20px',
          boxSizing: 'border-box',
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            marginBottom: '20px',
            width: '100%',
            background: '#fff5',
            padding: '20px',
            boxSizing: 'border-box',
            borderRadius: '20px',
          }}
        >
          <TextField
            label={PersianTexts.username}
            onChange={(e) => setUsernameState(e.target.value)}
          />
          <TextField
            label={PersianTexts.password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <ContainedButton variant="contained" onClick={loginHandler}>
          {PersianTexts.enter}
        </ContainedButton>
      </div>
    </Section>
  )
}
