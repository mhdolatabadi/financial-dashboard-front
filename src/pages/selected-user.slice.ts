import { createSlice } from '@reduxjs/toolkit'
import { User } from '../models/user'
import { RootState } from '../setup/store'

const selectedUserSlice = createSlice({
  name: 'selectedUser',
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
    setSelectedUser: (state, action) => {
        const {id, username, firstname, lastname, nationalNo, financial, lastTransactionDate, isAdmin, unit, totalProfit} = action.payload
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
    }
  },
})

const { actions, reducer } = selectedUserSlice

export const selectedUserReducer = reducer

export const { setSelectedUser, setSelectedUsername } = actions

export const selectedUserIdView = (state: RootState) => state.selectedUser.id
export const selectedUsernameView = (state: RootState) => state.selectedUser.username
export const selectedUserView = (state: RootState) => state.selectedUser