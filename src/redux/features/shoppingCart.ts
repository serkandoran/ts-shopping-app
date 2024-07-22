import { TData, TShoppingCartState } from "@/types/Types";
import { createSlice, PayloadAction,  } from "@reduxjs/toolkit";

const initialState: TShoppingCartState = {
   items: [],
   totalCount: 0
}

const shoppingCartSlice = createSlice({
   name: "shoppingCart",
   initialState,
   reducers: {
      addItemReducer: (state, action: PayloadAction<TData>) => {
         return{
            items: [...state.items, action.payload],
            totalCount: state.totalCount + action.payload.price
         }
      }
   },
})
export const { addItemReducer } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
