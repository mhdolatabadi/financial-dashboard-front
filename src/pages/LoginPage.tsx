import axios from 'axios'
import Toastify from 'toastify-js'
import { useState } from 'react'
import { ContainedButton, Section, TextField } from '../components/common'
import { PersianTexts } from '../persianTexts'
import { Page } from '../App'

interface Props {
  handleChangePage: (page: Page) => unknown
}

export function LoginPage({ handleChangePage }: Props) {
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [accessToken, setAccessToken] = useState<string>()
  const loginHandler = () => {
    console.log(accessToken)
    axios
      .post('http://localhost:3456/auth/login', { username, password })
      .then(({ data }) => {
        setAccessToken(data.access_token)
        Toastify({
          text: PersianTexts.successfullLogin,
          duration: 3000,
          gravity: 'top', // `top` or `bottom`
          position: 'right', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            display: 'flex',
            alignItems: 'center',
            color: 'green',
            padding: '20px',
            boxSizing: 'border-box',
            background: 'lightgreen',
            position: 'absolute',
            width: '300px',
            height: '50px',
            borderRadius: '10px',
          },
          offset: {
            y: '120px',
            x: '20px',
          },
        }).showToast()
        handleChangePage(Page.admin)
      })
      .catch(() => {
        Toastify({
          text: PersianTexts.wrongCredential,
          duration: 3000,
          gravity: 'top', // `top` or `bottom`
          position: 'right', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            padding: '20px',
            boxSizing: 'border-box',
            background: 'tomato',
            position: 'absolute',
            width: '300px',
            height: '50px',
            borderRadius: '10px',
          },
          offset: {
            y: '120px',
            x: '20px',
          },
        }).showToast()
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
