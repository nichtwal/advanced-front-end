import React, { ReactElement } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.LIGHT;
interface ThemeProviderProps {
    children: ReactElement
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = React.useState<Themes>(defaultTheme);

  const defaultProps = React.useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
