import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    userCredentials: localStorage.getItem("userLoginInfo") ? JSON.parse(localStorage.getItem("userLoginInfo")):null,
  },
  reducers: {
    userLoginInfo: (state, action) => {
      state.userCredentials = action.payload
    
     
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { userLoginInfo } = userSlice.actions;

export default userSlice.reducer;
