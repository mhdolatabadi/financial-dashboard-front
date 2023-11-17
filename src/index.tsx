import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMomentJalaali } from '@mui/x-date-pickers/AdapterMomentJalaali'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { cacheRtl, theme } from './settings/theme'
import './index.css'
import 'dayjs/locale/fa'
import { ReduxProvider } from './settings/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterMomentJalaali} adapterLocale="fa">
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <ReduxProvider>
            <App />
          </ReduxProvider>
        </ThemeProvider>
      </CacheProvider>
    </LocalizationProvider>
  </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
