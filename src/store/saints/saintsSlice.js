import { createSlice } from "@reduxjs/toolkit";

export const saintsSlice = createSlice({
  name: "saints",
  initialState: {
    saints: [],
  },
  reducers: {
    onLoadSaints: (state, { payload }) => {
      state.saints = payload;
    },
    saintsStatus: (state) => {
      state.isLoading = true;
    },
    onAddNewSaint: (state, action) => {
      state.saints.push(action.payload);
    },
    onDeleteSaint: (state, { payload }) => {
      const saintId = payload;
      state.saints = state.saints.filter((saint) => saint.id !== saintId);
    },
    onUpdateSaint: (state, { payload }) => {
      state.saints = state.saints.map((saint) => {
        if (saint.id === payload.id) {
          return payload;
        }
        return saint;
      });
    },
  },
});

export const { onLoadSaints, onAddNewSaint, onDeleteSaint, onUpdateSaint } =
  saintsSlice.actions;
