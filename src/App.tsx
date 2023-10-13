import './App.css'
import { AdminPage } from './pages/AdminPage'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { LoginPage } from './pages/LoginPage'
import { useState } from 'react'

export enum Page {
  login,
  admin,
}

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentPage, setCurrentPage] = useState(Page.login)
  const handleChangePage = (page: Page) => {
    setCurrentPage(page)
  }
  return (
    <div className="App">
      <AppBar
        sx={{
          padding: '20px',
          background: 'linear-gradient(to right, #00566f, #00566f, #0aa)',
        }}
      >
        <Toolbar>
          <Typography fontSize="30px">
            صندوق سرمایه‌گذاری خصوصی درنیکو
          </Typography>
        </Toolbar>
      </AppBar>
      {currentPage === Page.login ? (
        <LoginPage handleChangePage={handleChangePage} />
      ) : null}
      {currentPage === Page.admin ? (
        <AdminPage handleChangePage={handleChangePage} />
      ) : null}
    </div>
  )
}

export default App
