import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commandLineReducer from "@components/CommandLine/commandLineSlice";
import themeReducer from "@modules/ThemeSwitch/themeSwitchSlice";
import { aboutApi } from "@modules/About/api/index";

const rootReducer = combineReducers({
  commandLine: commandLineReducer,
  theme: themeReducer,
  [aboutApi.reducerPath]: aboutApi.reducer,
});

export const setupStore = () =>
  configureStore({
    preloadedState: {
      theme: {
        currentTheme: "default",
      },
    },
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(aboutApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
