import React from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./style.module.scss";
import { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE="outline"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string | undefined;
  theme?: ButtonTheme;
}

const Button: React.FC<ButtonProps> = (props) => {
    const {
        className = "",
        children,
        onClick,
        theme = "",
        ...otherProps
    } = props;
    return (
        <button
            onClick={onClick}
            {...otherProps}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};
export default Button;
