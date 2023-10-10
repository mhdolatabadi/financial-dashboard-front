import { useState } from 'react'
import './App.css'
import { AdminPage } from './pages/AdminPage'
import { LoginPage } from './pages/LoginPage'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'

enum Page {
  login,
  user,
  admin,
}

function App() {
  const [currentPage, setCurrentPage] = useState(Page.admin)
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography>شرکت سرمایه گذاری حسیب</Typography>
        </Toolbar>
      </AppBar>
      <Button onClick={() => setCurrentPage(Page.login)}>صفحه‌ی ورود</Button>
      <Button onClick={() => setCurrentPage(Page.admin)}>صفحه‌ی مدیر</Button>
      {currentPage === Page.login ? <LoginPage /> : null}
      {currentPage === Page.admin ? <AdminPage /> : null}
    </div>
  )
}

export default App
