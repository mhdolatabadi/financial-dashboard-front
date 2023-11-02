import { combineReducers } from '@reduxjs/toolkit'
import { mainReducer as main } from '../../pages/user/main.slice'
import { currentUserReducer } from '../../pages/user/current-user.slice'
import { selectedUserReducer } from '../../pages/user/selected-user.slice'

export const rootReducer = combineReducers({
  main,
  currentUser: currentUserReducer,
  selectedUser: selectedUserReducer
})
export type RootState = ReturnType<typeof rootReducer>
