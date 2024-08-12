import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import authReducer from './authSlice'
import counterReducer from './counterSlice'
import tasksReducer from './tasksSlice'
import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  tasks: tasksReducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
