import React from "react";
import { classNames } from "../../../../helpers/classNames/classNames";
import cls from "./style.module.scss";
import { Button } from "../../../../shared/ui/Button";
import { ThemeSwitcher } from "../../../../shared/ui/theme-switcher";
import {LangSwitcher} from "../../../../shared/ui/language-switcher";
interface SidebarProps {
  className?: string;
}
const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}>toggle</Button>
      <div className={cls.switchers}>
      <ThemeSwitcher />
      <LangSwitcher  className={cls.lang}/>
      </div>
    </div>
  );
};
export default Sidebar;
