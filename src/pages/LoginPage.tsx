import axios from 'axios'
import { useState } from 'react'
import { ContainedButton, Section, TextField } from '../components/common'
import { PersianTexts } from '../utils/persianTexts'
import { Page } from '../App'
import { SuccessToast } from '../components/common/SuccessToast'
import { ErrorToast } from '../components/common/ErrorToast'
import { loginUser } from '../utils/dataManipulation'

interface Props {
  handleChangePage: (
    page: Page,
    username: string,
    accessToken: string,
  ) => unknown
}

export function LoginPage({ handleChangePage }: Props) {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [accessToken, setAccessToken] = useState<string>()
  const loginHandler = () => {
    loginUser(username, password)
      .then(({ data }) => {
        setAccessToken(data.access_token)
        SuccessToast(PersianTexts.successfullLogin).showToast()
        handleChangePage(Page.admin, username, data.access_token)
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
          onChange={(e) => setUsername(e.target.value)}
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
