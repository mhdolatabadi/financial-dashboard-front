import { useState } from 'react'
import './App.css'
import { AdminPage } from './pages/AdminPage'
import { LoginPage } from './pages/LoginPage'
import { UserPage } from './pages/UserPage'
import { Button } from '@mui/material'

enum Page {
  login,
  user,
  admin,
}

function App() {
  const [currentPage, setCurrentPage] = useState(Page.user)
  return (
    <div className="App">
      <Button onClick={() => setCurrentPage(Page.login)}>صفحه‌ی ورود</Button>
      <Button onClick={() => setCurrentPage(Page.user)}>صفحه‌ی کاربر</Button>
      <Button onClick={() => setCurrentPage(Page.admin)}>صفحه‌ی مدیر</Button>
      {currentPage === Page.login ? <LoginPage /> : null}
      {currentPage === Page.user ? <UserPage /> : null}
      {currentPage === Page.admin ? <AdminPage /> : null}
    </div>
  )
}

export default App
