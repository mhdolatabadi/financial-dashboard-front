import { combineReducers } from '@reduxjs/toolkit'
<<<<<<< HEAD:src/settings/store/root-reducer.ts
import { mainReducer as main } from '../../pages/user/main.slice'
import { currentUserReducer } from '../../pages/user/current-user.slice'
import { selectedUserReducer } from '../../pages/user/selected-user.slice'
=======
import { mainReducer as main } from '../../pages/main/main.slice'
import { currentUserReducer } from '../../pages/main/current-user.slice'
import { selectedUserReducer } from '../../pages/main/selected-user.slice'
>>>>>>> 54ba37360b77af2fd181cacd6acd38c29f4c6f17:src/setup/store/root-reducer.ts

export const rootReducer = combineReducers({
  main,
  currentUser: currentUserReducer,
  selectedUser: selectedUserReducer
})
export type RootState = ReturnType<typeof rootReducer>
