"use client"
import { configureStore } from '@reduxjs/toolkit'
import user from './feature/SignUpSlice'
import adminSidebar from './feature/Sidebar.Slice'
export const store = configureStore({
  reducer: {
    createUser: user,
    sidebar:adminSidebar
  },
})