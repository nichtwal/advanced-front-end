import React from "react";
import cls from "./style.module.scss";
import { classNames } from "../../../helpers/classNames/classNames";
import Applink, { ApplinkTheme } from "../../../shared/ui/app-link/Applink";

interface NavBarProps {
  className?: string;
}

const Navbar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar)}>
        <div className={cls.links}>
        <Applink theme={ApplinkTheme.SECONDARY} className={cls.mainLink} to="/">Main</Applink>
        <Applink theme={ApplinkTheme.SECONDARY} to="/about">About</Applink>
        </div>

    </div>
  );
};

export default Navbar;