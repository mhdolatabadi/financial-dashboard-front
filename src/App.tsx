import { MainPage } from './pages/main/MainPage'
import { AppBar, Button, Popover, Toolbar, Typography } from '@mui/material'
import { LoginPage } from './pages/login/LoginPage'
import { useSelector } from 'react-redux'
import { currentPageView } from './pages/main/main.slice'
import { Page } from './models/Page'
import { currentUserView } from './pages/main/current-user.slice'
import { unitToPersian } from './utils/unitToPersian'
import React from 'react'
import { UserInformation } from './components/main/UserInformation'

function App() {
  const currentPage = useSelector(currentPageView)
  const currentUser = useSelector(currentUserView)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
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
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography fontSize="20px" color="primary" fontWeight="700">
            صندوق سرمایه‌گذاری خصوصی درنیکو
          </Typography>
          <Button
            onClick={handleClick}
            variant="outlined"
            sx={{ padding: '20px', borderRadius: '20px' }}
          >
            <Typography fontWeight="500" fontSize="20">
              {currentUser.firstname || currentUser.lastname
                ? `${currentUser.firstname} ${currentUser.lastname}`
                : currentUser.username}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          '& > .MuiPaper-root': {
            borderRadius: '20px',
          },
        }}
      >
        <div
          style={{
            maxWidth: '500px',
            minWidth: '500px',
            padding: '30px',
            borderRadius: '20px',
          }}
        >
          <UserInformation editMode={false} />
        </div>
      </Popover>
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
