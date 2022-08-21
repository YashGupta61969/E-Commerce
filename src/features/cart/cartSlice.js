import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart:[],
    totalAmount:0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        state.cart.push(action.payload)
      },
      removeFromCart: (state, action) => {
       state.cart = state.cart.filter(val=> val.id !== action.payload)
      },
      addAmount: (state, action) => {
        state.totalAmount += action.payload
      },
    }
  })
  
  export const { addToCart, removeFromCart,addAmount } = cartSlice.actions
  
  export default cartSlice.reducer