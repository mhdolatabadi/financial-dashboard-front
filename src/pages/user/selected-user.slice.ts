import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../models/user'
import { RootState } from '../../settings/store'

const selectedUserSlice = createSlice({
  name: 'selectedUser',
  initialState: {
    info: {
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
      totalProfit: 0,
    } as User,
    transactions: [] as any[],
    profits: [] as any[],
  },
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
        totalProfit,
      } = action.payload
      state.info.id = id
      state.info.password = ''
      state.info.username = username
      state.info.firstname = firstname
      state.info.lastname = lastname
      state.info.isAdmin = isAdmin
      state.info.nationalNo = nationalNo
      state.info.financial = financial
      state.info.lastTransactionDate = lastTransactionDate
      state.info.unit = unit
      state.info.totalProfit = totalProfit
    },
    setSelectedUsername: (state, action) => {
      state.info.username = action.payload
    },
    setSelectedFirstname: (state, action) => {
      state.info.firstname = action.payload
    },
    setSelectedLastname: (state, action) => {
      state.info.lastname = action.payload
    },
    setSelectedPassword: (state, action) => {
      state.info.password = action.payload
    },
    setSelectedFinancial: (state, action) => {
      state.info.financial = action.payload
    },
    setSelectedUnit: (state, action) => {
      state.info.unit = action.payload
    },
    setSelectedNationalNo: (state, action) => {
      state.info.nationalNo = action.payload
    },
    setSelectedTransactions: (state, action) => {
      state.transactions = [...action.payload]
    },
    addSelectedTransaction: (state, { payload }) => {
      state.transactions = [...state.transactions, payload]
      if (payload.type === 'in') {
        state.info.financial += payload.amount
      } else {
        state.info.financial -= payload.amount
      }
    },
    setSelectedProfits: (state, action) => {
      state.profits = [...action.payload]
    },
    addSelectedProfit: (state, { payload }) => {
      state.profits = [...state.profits, payload]
      if (payload.type === 'in') {
        state.info.financial += payload.amount
        state.info.totalProfit += payload.amount
      } else {
        state.info.financial -= payload.amount
        state.info.totalProfit -= payload.amount
      }
    },
    setDeleteTransaction: (state, action) => {
      const newTransactions = state.transactions.filter(
        (u: any) => u?.id != action.payload,
      )
      const transaction = state.transactions.find((t) => t.id == action.payload)
      state.transactions = newTransactions
      if (transaction.type === 'in') {
        state.info.financial -= transaction.amount
      } else {
        state.info.financial += transaction.amount
      }
    },

    setDeleteProfit: (state, { payload }) => {
      const newProfit = state.profits.filter((p) => p.id != payload)
      const profit = state.profits.find((p) => p.id == payload)
      state.profits = newProfit
      if (profit.type === 'in') {
        state.info.financial -= profit.amount
        state.info.totalProfit -= profit.amount
      } else {
        state.info.financial += profit.amount
        state.info.totalProfit += profit.amount
      }
    },
  },
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
  setSelectedFinancial,
  setSelectedUnit,
  setSelectedProfits,
  setSelectedTransactions,
  addSelectedTransaction,
  addSelectedProfit,
  setDeleteProfit,
  setDeleteTransaction,
} = actions

export const selectedUserIdView = (state: RootState) =>
  state.selectedUser.info.id
export const selectedUsernameView = (state: RootState) =>
  state.selectedUser.info.username
export const selectedFirstnameView = (state: RootState) =>
  state.selectedUser.info.firstname
export const selectedLastnameView = (state: RootState) =>
  state.selectedUser.info.lastname
export const selectedNationalNo = (state: RootState) =>
  state.selectedUser.info.nationalNo
export const selectedTotalProfit = (state: RootState) =>
  state.selectedUser.info.totalProfit
export const selectedFinancialView = (state: RootState) =>
  state.selectedUser.info.financial
export const selectedUserView = (state: RootState) => state.selectedUser.info
export const selectedUserTransactionsView = (state: RootState) =>
  state.selectedUser.transactions
export const selectedUserProfitsView = (state: RootState) =>
  state.selectedUser.profits
