import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TCategories, TData } from "@/types/Types";

import  bakery from '../../../public/assets/bakery/bakeryDefault.png'
import  drinks from '../../../public/assets/drinks/drinksDefault.jpg'
import  foods from '../../../public/assets/foods/foodsDefault.jpg'
import  icecreams from '../../../public/assets/icecreams/icecreamsDefault.jpg'
import  junkfoods from '../../../public/assets/junkfoods/jonkfoodsDefault.jpg'

const initialState : {datas: TData[], categories: TCategories[]}= {
   datas: [],
   categories:[
      {
         categoryName:"Fırın",
         categoryPicture:bakery
      },
      {
         categoryName:"İçecekler",
         categoryPicture:drinks
      },
      {
         categoryName:"Yemek",
         categoryPicture:foods
      },
      {
         categoryName:"Dondurmalar",
         categoryPicture:icecreams
      },
      {
         categoryName:"Atıştırmalık",
         categoryPicture:junkfoods
      },
   ],
}

export const fetchProducts = createAsyncThunk("products/fetch",async (thunkAPI)=>{
   const response = await fetch("http://localhost:4000/products")
   const result = await response.json();
   return result;
})

const productsSlice = createSlice({
   name:"products",
   initialState,
   reducers:{},
   extraReducers :(builder) => {
      builder.addCase(fetchProducts.fulfilled, (state,action)=>{
         state.datas = action.payload;
      })
   },
})

export default productsSlice.reducer;
