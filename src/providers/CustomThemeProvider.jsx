import { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleDarkMode, isDark }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a Provider");
  return context;
};