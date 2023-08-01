import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    error: false,
    errorMessage: "",
    users: [],
  },

  reducers: {
    loadUsers: (state) => {
      state.loading = true;
    },
    getUsers: (state) => {
      state.users = ["shehab", "Iman", "Youssif", "Mohammed"];
    },
  },
});

export const { loadUsers, getUsers } = usersSlice.actions;

export default usersSlice.reducer;
