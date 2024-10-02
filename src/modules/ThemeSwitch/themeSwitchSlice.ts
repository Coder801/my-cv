import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Themes = "default" | "dark";

type ThemeState = {
  currentTheme: Themes;
};

const initialState: ThemeState = {
  currentTheme: "default",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Themes>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
