import './App.css'
import { MainPage } from './pages/MainPage'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { LoginPage } from './pages/LoginPage'
import { useSelector } from 'react-redux'
import { currentPageView } from './pages/main.slice'
import { Page } from './models/Page'


function App() {
  const currentPage = useSelector(currentPageView)
  return (
    <div className="App">
      <AppBar
        sx={{
          padding: '20px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <img alt="dornico" width="50px" height="50px" src="/dornico.svg" />
        <Toolbar>
          <Typography fontSize="20px" color="primary" fontWeight="700">
            صندوق سرمایه‌گذاری خصوصی درنیکو
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {currentPage === Page.login && <LoginPage />}
        {currentPage === Page.admin && <MainPage />}
      </div>
    </div>
  )
}

export default App
