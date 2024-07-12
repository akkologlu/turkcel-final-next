"use client";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Theme";

function ThemeWrapper({ children }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const currentTheme = darkMode ? darkTheme : lightTheme;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
}

export default ThemeWrapper;
