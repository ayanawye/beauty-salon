"use client";
import React, { FC } from "react";
import s from "./Button.module.scss";

export enum IVariant {
  primary = "primary",
  outlined = "outlined",
  black = "black",
  outlined_white = "outlined_white",
  outlined_pink = "outlined_pink",
}

interface ButtonProps {
  children: React.ReactNode;
  padding: string;
  variant: IVariant;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  padding,
  variant,
  type,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      className={
        variant === IVariant.primary
          ? `${s.active} ${s.btn}`
          : variant === IVariant.outlined
          ? `${s.outlined} ${s.btn}`
          : variant === IVariant.outlined_white
          ? `${s.outlined_white} ${s.btn}`
          : variant === IVariant.black
          ? `${s.black} ${s.btn}`
          : variant === IVariant.outlined_pink
          ? `${s.outlined_pink} ${s.btn}`
          : s.btn
      }
      style={{ padding: padding }}
    >
      {children}
    </button>
  );
};

export default Button;
