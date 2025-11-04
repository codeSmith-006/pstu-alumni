import React, { createContext, useContext } from "react";
import { useTheme } from "../hooks/useTheme";


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themeHook = useTheme(); // { theme, setTheme }
  return (
    <ThemeContext.Provider value={themeHook}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
