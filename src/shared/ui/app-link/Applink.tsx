import React from "react";
import cls from "./style.module.scss";
import { classNames } from "../../lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";

export enum ApplinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ApplinkProps extends LinkProps {
  className?: string;
  theme: ApplinkTheme;
}
const Applink: React.FC<ApplinkProps> = (props) => {
    const {
        className,
        children,
        theme = ApplinkTheme.PRIMARY,
        to,
        ...otherProps
    } = props;
    return (
        <Link
            className={classNames(cls.Applink, {}, [cls[theme], className ?? ""])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
export default Applink;
