import React from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "./ThemeContext";

interface UseThemeResult {
themeToggler: () => void;
theme: Themes;
}

export function useThemeResult(): UseThemeResult {
    const {theme, setTheme} = React.useContext(ThemeContext)
    const themeToggler = () => {
        const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK
        setTheme && setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
      };
      return {theme, themeToggler}
}