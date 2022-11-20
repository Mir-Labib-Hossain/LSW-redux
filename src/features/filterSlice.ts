import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  type: "",
  search: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterType: (state, { payload }: PayloadAction<string>) => {
      state.type = payload;
    },

    setFilterSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },

    resetFilter: (state) => {
      state.type = "";
      state.search = "";
    },
  },
});

export const { setFilterType, setFilterSearch, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
