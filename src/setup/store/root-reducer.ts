import { combineReducers } from '@reduxjs/toolkit'
import { mainReducer as main } from '../../pages/main.slice'
import { currentUserReducer } from '../../pages/current-user.slice'
import { selectedUserReducer } from '../../pages/selected-user.slice'

export const rootReducer = combineReducers({
  main,
  currentUser: currentUserReducer,
  selectedUser: selectedUserReducer
})
export type RootState = ReturnType<typeof rootReducer>
