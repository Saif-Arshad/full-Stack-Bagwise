"use client"
import { configureStore } from '@reduxjs/toolkit'
import user from './feature/SignUpSlice'
export const store = configureStore({
  reducer: {
    createUser: user
  },
})