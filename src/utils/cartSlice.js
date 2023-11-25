import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.length = 0;
      state.items.concat(
        state.items.filter((item) => item?.card?.info?.id === action.payload.id)
      );
    },
    clearCart: (state) => {
      // either mutate the state
      state.items.length = 0;
      // or return a new state
      //   return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
