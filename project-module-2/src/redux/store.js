import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userSlice from "./userSlice";
import userLoggedSlice from "./userLoggedSlice";
import usersLoggedSlice from "./usersLoggedSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    users: userSlice,
    usersLogged: usersLoggedSlice,
    userLogged: userLoggedSlice,
  },
});

export default store;
