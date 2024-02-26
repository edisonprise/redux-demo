import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  productsList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.productsList = [...state.productsList, action.payload];
      state.totalCount += 1 ;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;