import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: false,
    errorMessage: "",
    products: [],
  },

  reducers: {
    loadProducts: (state) => {
      state.loading = true;
    },
    getProducts: (state) => {
      state.products = ["car", "laptop", "mobile", "screen"];
    },
  },
});

export const { loadProducts, getProducts } = productsSlice.actions;

export default productsSlice.reducer;
