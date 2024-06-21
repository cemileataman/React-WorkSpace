import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSlice';
import userReducer from '../redux/userSlice';
//Product Slice
//Application Slice

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    user:userReducer
  },
})