import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../setup/store/root-reducer'
import { User } from '../models/user'
import { Page } from '../models/Page'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    currentPage: Page.login,
    accessToken: '',
    selectedUser: null as unknown as User,
    currentUser: {
      id: '',
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      nationalNo: 0,
      financial: 0,
      lastTransactionDate: 0,
      isAdmin: false,
      unit: '',
      totalProfit: 0,
    } as User,
    users: [] as User[],
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setUsername: (state, action) => {
      state.currentUser.username = action.payload
    },
    setSelectedUserId: (state, action) => {
      state.selectedUser.id = action.payload
    },
  },
})

const { actions, reducer } = mainSlice

export const mainReducer = reducer

export const { setAccessToken, setCurrentPage, setUsername, setSelectedUserId } = actions

export const xView = (state: RootState) => state.main
export const accessTokenView = (state: RootState) => state.main.accessToken
export const currentPageView = (state: RootState) => state.main.currentPage
