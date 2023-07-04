import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./users/usersSlice";
import { saintsSlice } from "./saints/saintsSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    saints: saintsSlice.reducer,
  },
});
