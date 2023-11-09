import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userSlice from "./userSlice";
import userLoggedSlice from "./userLoggedSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    users: userSlice,
    usersLogged: userLoggedSlice,
  },
});

export default store;
