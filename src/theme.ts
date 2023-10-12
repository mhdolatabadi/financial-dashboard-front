import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import { createTheme } from '@mui/material'

// Create rtl cache
export const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

// function RTL(props) {
//   return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
// }

export const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazirmatn',
  },
  palette: {
    primary: {
      main: '#00566f',
    },
    secondary: {
      main: '#0aa',
    },
  },
})
