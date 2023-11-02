import { useState } from 'react'
import { PersianTexts } from '../../utils/persianTexts'
import { SuccessToast } from '../../components/common/toast/SuccessToast'
import { ErrorToast } from '../../components/common/toast/ErrorToast'
import { getUserWithUsername, loginUser } from '../../utils/dataManipulation'
import { ContainedButton, Section, TextField } from '../../components/common'
import { useDispatch } from 'react-redux'
import { setAccessToken, setCurrentPage } from '../main/main.slice'
import { Page } from '../../models/Page'
import { setCurrentIsAdmin, setCurrentUser, setCurrentUsername } from '../main/current-user.slice'
import { setSelectedUser, setSelectedUsername } from '../main/selected-user.slice'

export function LoginPage() {
  const [username, setUsernameState] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useDispatch()
  const loginHandler = () => {
    loginUser(username, password)
      .then(({ data }) => {
        dispatch(setCurrentPage(Page.admin))
        dispatch(setAccessToken(data.access_token))
        dispatch(setCurrentIsAdmin(data.isAdmin))
        dispatch(setSelectedUsername(username))
        dispatch(setCurrentUsername(username))
        SuccessToast(PersianTexts.successfullLogin).showToast()
      })
      .catch(() => {
        ErrorToast.showToast()
      })
  }

  return (
    <Section sx={{ width: '500px', margin: '200px auto' }}>
      <div style={{ marginBottom: '20px', width: '100%' }}>
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
    </Section>
  )
}
