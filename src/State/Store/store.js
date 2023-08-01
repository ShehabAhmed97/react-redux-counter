import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "../Slices/Users.slice";
import ProductsSlice from "../Slices/Products.slice";

const store = configureStore({
  reducer: {
    users: UsersSlice,
    products: ProductsSlice,
  },
});

export default store;
