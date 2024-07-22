import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";
import authSlices from "./features/authSlices";
import shoppingCart from "./features/shoppingCart";

export const store = configureStore({
   reducer: {
      products: productsSlice,
      auth: authSlices,
      shoppingCart,
   }
})
export type AppDispatch = typeof store.dispatch;
export default store;