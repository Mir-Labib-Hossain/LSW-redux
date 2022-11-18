import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import filterSlice from "../features/filterSlice";
import transactionReducer from "../features/transactionSlice";
import { baseApiSlice } from "./baseApiSlice";

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    filter: filterSlice,
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(baseApiSlice.middleware),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
