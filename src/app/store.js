import { configureStore } from "@reduxjs/toolkit";

//import Reducers
import userReducer from "../reducers/user/userSlice.js";
import cartReducer from "../reducers/cart/cartSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
