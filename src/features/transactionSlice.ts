import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  editing: null as ITransaction | null,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addEditing: (state, action: PayloadAction<ITransaction>) => {
      state.editing = action.payload;
    },

    removeEditing: (state) => {
      state.editing = null;
    },
  },
});

export const { addEditing, removeEditing } = transactionSlice.actions;
export default transactionSlice.reducer;
