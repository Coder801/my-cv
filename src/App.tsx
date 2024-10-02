import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

import { MainPage } from "@pages/MainPage";
import { useCallback, useEffect } from "react";

const Theme = ({ children }: { children: JSX.Element }) => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );
  // TODO: Move this in a separate file
  const defaultTheme = {
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
    },
    fonts: ["sans-serif", "Roboto"],
  };

  const defaultColors = {
    primary: "#f98c64",
    secondary: "#7ff9ef",
    text: "#757183",
    error: "#ff5655",
    background: "#2b293c",
  };

  const darkColors = {
    primary: "#2b268d",
    secondary: "#7ff9ef",
    text: "#4c4653",
    error: "#ff5655",
    background: "#2b293c",
  };

  const theme = {
    default: {
      colors: defaultColors,
      ...defaultTheme,
    },
    dark: {
      colors: darkColors,
      ...defaultTheme,
    },
  };

  const getTheme = theme[currentTheme];
  console.log(getTheme);

  return <ThemeProvider theme={getTheme}>{children}</ThemeProvider>;
};

const App = () => (
  <Theme>
    <MainPage />
  </Theme>
);

export default App;
