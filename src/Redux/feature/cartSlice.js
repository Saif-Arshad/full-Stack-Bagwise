"use client"

import { createSlice } from '@reduxjs/toolkit'
import data from '../../Products.json'

const initialState = {
  cart:[],
  item:data.products,
  totalPrice:0,
  cartSection:false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart:(state,action)=>{
        let find = state.cart.findIndex((item)=>item.id ===action.payload.id)
        if (find !== -1) {
            state.cart[find].quantity += 1; 
        } else {
            state.cart.push({ ...action.payload, quantity: 1 }); 
        }
        state.cartSection = true;
    state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

    },
    showCart:(state,action)=>{
        state.cartSection = action.payload
    },
    removeCartItem: (state, action) => {
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
        state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
  },
})

export const { addCart,showCart,removeCartItem} = cartSlice.actions

export default cartSlice.reducer