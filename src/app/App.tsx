import "./style/index.scss";
import { useThemeResult } from "./providers/ThemeProvider";
import { classNames } from "../helpers/classNames/classNames";
import { AppRouter } from "./providers/routing";
import { Navbar } from "../widgets/nav-bar";

export const App = () => {
  const { theme, themeToggler } = useThemeResult();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={themeToggler}>theme</button>
      <Navbar />
      <AppRouter />
    </div>
  );
};
