import React from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./style.module.scss";
import { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background_inverted",
}

export enum ButtonSize {
  XL = "size_xl",
  L = "size_l",
  M = "size_m",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string | undefined;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className = "",
    children,
    onClick,
    theme = "",
    square = false,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button
      onClick={onClick}
      {...otherProps}
      className={classNames(cls.Button, mods, [className])}
    >
      {children}
    </button>
  );
};
export default Button;
