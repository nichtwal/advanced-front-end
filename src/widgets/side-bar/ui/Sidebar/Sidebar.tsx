import React from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./style.module.scss";
import { Button } from "../../../../shared/ui/Button";
import { ThemeSwitcher } from "../../../../shared/ui/theme-switcher";
import { LangSwitcher } from "../../../../shared/ui/language-switcher";
import { ButtonSize, ButtonTheme } from "../../../../shared/ui/Button/ui/Button";
import Applink, { ApplinkTheme } from "../../../../shared/ui/app-link/Applink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "../../../../shared/config/route-config/routeConfig";
interface SidebarProps {
  className?: string;
}
const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
      const { t } = useTranslation();
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
      <Button
        onClick={onToggle}
        className={cls.button_collapsed}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square={true}
        size={ButtonSize.L}
      >
        {!collapsed ? "<" : ">"}
      </Button>
      <div className={cls.items}>
        <Applink theme={ApplinkTheme.SECONDARY} to={RoutePath.main} className={cls.link}>{t('Main')}</Applink>
        <Applink theme={ApplinkTheme.SECONDARY} to={RoutePath.about} className={cls.link}>{t('About')}</Applink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher isShort={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
export default Sidebar;
