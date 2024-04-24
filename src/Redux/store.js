"use client"
import { configureStore } from '@reduxjs/toolkit'
import cartData from './feature/cartSlice'
export const store = configureStore({
  reducer: {
    cart:cartData
  },
})