import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
  },
  reducers: {
    onLoadUsers: (state, { payload }) => {
      state.users = payload;
    },
    usersStatus: (state) => {
      state.isLoading = true;
    },
    onAddNewUser: (state, action) => {
      state.users.push(action.payload);
    },
    onDeleteUser: (state, { payload }) => {
      const userId = payload;
      state.users = state.users.filter((user) => user.id !== userId);
    },
    onUpdateUser: (state, { payload }) => {
      state.users = state.users.map((user) => {
        if (user.id === payload.id) {
          return payload;
        }
        return user;
      });
    },
  },
});

export const {
  onLoadUsers,
  usersStatus,
  onAddNewUser,
  onDeleteUser,
  onUpdateUser,
} = usersSlice.actions;
