import { configureStore } from "@reduxjs/toolkit";
import commandLineReducer from "@components/CommandLine/commandLineSlice";

export const store = configureStore({
  reducer: {
    commandLine: commandLineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
