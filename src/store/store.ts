"use client"
import { configureStore } from '@reduxjs/toolkit'
import user from './feature/SignUpSlice'
import adminSidebar from './feature/Sidebar.Slice'
import getAllCategory from './feature/Category.Slice'
export const store = configureStore({
  reducer: {
    createUser: user,
    sidebar:adminSidebar,
    category:getAllCategory
  },
})