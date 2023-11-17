import { configureStore } from '@reduxjs/toolkit'
import { rootReducer as reducer } from './root-reducer'

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
})

export const { dispatch, getState } = store
