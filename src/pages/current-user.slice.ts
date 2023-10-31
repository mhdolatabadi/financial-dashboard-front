import { createSlice } from '@reduxjs/toolkit'
import { User } from '../models/user'
import { RootState } from '../setup/store'

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {
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
  reducers: {
    setCurrentUsername: (state, action) => {
      state.username = action.payload
    },
    setCurrentUser: (state, action) => {
      const {
        id,
        username,
        firstname,
        lastname,
        nationalNo,
        financial,
        lastTransactionDate,
        isAdmin,
        unit,
        totalProfit,
      } = action.payload
      state.id = id
      state.username = username
      state.firstname = firstname
      state.lastname = lastname
      state.isAdmin = isAdmin
      state.nationalNo = nationalNo
      state.financial = financial
      state.lastTransactionDate = lastTransactionDate
      state.unit = unit
      state.totalProfit = totalProfit
    },
    setCurrentIsAdmin: (state, action) => {
      state.isAdmin = action.payload
    },
  },
})

const { actions, reducer } = currentUserSlice

export const currentUserReducer = reducer

export const { setCurrentUsername, setCurrentUser, setCurrentIsAdmin } = actions

export const currentUsernameView = (state: RootState) =>
  state.currentUser.username
export const currentIsAdminView = (state: RootState) =>
  state.currentUser.isAdmin
