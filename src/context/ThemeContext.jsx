import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);
const THEME_KEY = "10x-theme";
const DEFAULT_THEME = "light";

/** White theme only — dark theme disabled per brand direction. */
export function ThemeProvider({ children }) {
  const [theme] = useState(DEFAULT_THEME);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem(THEME_KEY, "light");
  }, []);

  function setTheme() {
    /* locked to light */
  }

  function toggleTheme() {
    /* locked to light */
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
