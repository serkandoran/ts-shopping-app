import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUserAuth } from "@/types/Types";

const initialState: {userAuth: TUserAuth} = {
   userAuth:{
      id: -1,
      name:'',
      isLogged: false
   }
}

const authSlice = createSlice({
   name:"auth",
   initialState,
   reducers:{
      updateUserLogin: (state, action: PayloadAction<any>) => {
         const { id,name,isLogged } = action.payload
         state.userAuth = {
            ...action.payload
         }
      }
   }
})

export const { updateUserLogin } = authSlice.actions;
export default authSlice.reducer;
