import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RootState } from "@/store";
import { defaultTheme } from "./constants";

export const defaultColors = {
  background: "##2D3047",
  primary: "#E0CA3C",
  secondary: "#048A81",
  text: "#93B7BE",
  highlight: "#A799B7",
  info: "#414958",
  warning: "#EDC25E",
  error: "#E24536",
};

export const darkColors = {
  primary: "#2b268d",
  secondary: "#7ff9ef",
  text: "#4c4653",
  info: "#ff5655",
  warning: "#ff5655",
  error: "#ff5655",
  background: "#2b293c",
};

export const Theme = ({ children }: { children: JSX.Element }) => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

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

  return <ThemeProvider theme={getTheme}>{children}</ThemeProvider>;
};
