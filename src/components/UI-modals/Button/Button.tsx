"use client";
import React, { FC } from "react";
import s from "./Button.module.scss";

export enum IVariant {
  primary = "primary",
  outlined = "outlined",
  black = "black",
}

interface ButtonProps {
  children: React.ReactNode;
  padding: string;
  variant: IVariant;
  type?: "submit" | "button" | "reset";
}

const Button: FC<ButtonProps> = ({
  children,
  padding,
  variant,
  type,
}) => {
  return (
    <button
      type={type}
      className={
        variant === IVariant.primary
          ? `${s.active} ${s.btn}`
          : variant === IVariant.outlined
          ? `${s.outlined} ${s.btn}`
          : variant === IVariant.black
          ? `${s.black} ${s.btn}`
          : s.btn
      }
      style={{ padding: padding }}
    >
      {children}
    </button>
  );
};

export default Button;
