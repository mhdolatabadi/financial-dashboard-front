import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../models/user'
import { RootState } from '../../settings/store'

const selectedUserSlice = createSlice({
  name: 'selectedUser',
  initialState: {
    id: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    nationalNo: '',
    financial: 0,
    lastTransactionDate: 0,
    isAdmin: false,
    unit: '',
    totalProfit: 0
  } as User,
  reducers: {
    setSelectedUser: (state, action) => {
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
        totalProfit
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
    setSelectedUsername: (state, action) => {
      state.username = action.payload
    },
    setSelectedFirstname: (state, action) => {
      state.firstname = action.payload
    },
    setSelectedLastname: (state, action) => {
      state.lastname = action.payload
    },
    setSelectedPassword: (state, action) => {
      state.password = action.payload
    },
    setSelectedFinancial: (state, action) => {
      state.financial = action.payload
    },
    setSelectedNationalNo: (state, action) => {
      state.nationalNo = action.payload
    }
  }
})

const { actions, reducer } = selectedUserSlice

export const selectedUserReducer = reducer

export const {
  setSelectedUser,
  setSelectedUsername,
  setSelectedFirstname,
  setSelectedLastname,
  setSelectedNationalNo,
  setSelectedPassword,
  setSelectedFinancial
} = actions

export const selectedUserIdView = (state: RootState) => state.selectedUser.id
export const selectedUsernameView = (state: RootState) =>
  state.selectedUser.username
export const selectedFirstnameView = (state: RootState) =>
  state.selectedUser.firstname
export const selectedLastnameView = (state: RootState) =>
  state.selectedUser.lastname
export const selectedNationalNo = (state: RootState) =>
  state.selectedUser.nationalNo
export const selectedTotalProfit = (state: RootState) =>
  state.selectedUser.totalProfit
export const selectedFinancialView = (state: RootState) =>
  state.selectedUser.financial
export const selectedUserView = (state: RootState) => state.selectedUser
