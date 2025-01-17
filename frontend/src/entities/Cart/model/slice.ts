import {createSlice} from "@reduxjs/toolkit";

const initialState: Record<string, number> = {}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: () => initialState,
    increment: (state, {payload}) => {
      const count = state[payload] ?? 0
      state[payload] = count + 1
    },
    decrement: (state, {payload}) => {
      const count = state[payload]

      if (!count) {
        return
      }
      if (count === 1) {
        delete state[payload]
        return;
      }

      state[payload] = count - 1
    },
    deleteItem: (state, {payload}) => {
      delete state[payload]
    }
  }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;