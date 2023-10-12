import './App.css'
import { AdminPage } from './pages/AdminPage'
import { AppBar, Toolbar, Typography } from '@mui/material'

enum Page {
  login,
  admin,
}

function App() {
  const currentPage = Page.admin
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
      {/* {currentPage === Page.login ? <LoginPage /> : null} */}
      {currentPage === Page.admin ? <AdminPage /> : null}
    </div>
  )
}

export default App
