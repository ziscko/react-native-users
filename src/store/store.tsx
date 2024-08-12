import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import counterSlice from './counterSlice'
import tasksSlice from './tasksSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    counter: counterSlice,
    tasks: tasksSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
