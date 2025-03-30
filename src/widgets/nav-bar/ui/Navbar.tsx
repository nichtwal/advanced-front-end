import React from "react";
import cls from "./style.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import Applink, { ApplinkTheme } from "../../../shared/ui/app-link/Applink";

interface NavBarProps {
  className?: string;
}

const Navbar: React.FC<NavBarProps> = () => {
    return (
        <div className={classNames(cls.Navbar)}>
            <div className={cls.links}>

            </div>
        </div>
    );
};

export default Navbar;
