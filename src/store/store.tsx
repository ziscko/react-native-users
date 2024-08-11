import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import counterSlice from './counterSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    counter: counterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
