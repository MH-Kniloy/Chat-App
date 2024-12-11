import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../features/User/userSlice'

export default configureStore({
  reducer: {
    userInfo: userSlice
  },
});
