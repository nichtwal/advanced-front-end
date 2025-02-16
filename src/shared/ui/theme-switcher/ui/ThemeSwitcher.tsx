import cls from "./style.module.scss";
import { classNames } from "../../../../helpers/classNames/classNames";
import {
  Themes,
  useThemeResult,
} from "../../../../app/providers/ThemeProvider";
import LightTheme from "../../../assets/icons/light-theme.svg";
import DarkTheme from "../../../assets/icons/dark-theme.svg";
import { Button } from "../../Button";
import { ButtonTheme } from "../../Button/ui/Button";
interface ThemeSwitcherProps {
  className?: string;
}
const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = "" }) => {
  const { theme, themeToggler } = useThemeResult();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={themeToggler}
    >
      <img
        src={theme === Themes.LIGHT ? LightTheme : DarkTheme}
        alt="theme-icon"
      />
    </Button>
  );
};
export default ThemeSwitcher;
