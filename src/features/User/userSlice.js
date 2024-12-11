import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    userCredentials: null,
  },
  reducers: {
    userLoginInfo: (state, action) => {
      console.log(state)
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { userLoginInfo } = userSlice.actions;

export default userSlice.reducer;
