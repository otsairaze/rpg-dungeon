import clsx from "clsx";
import React from "react";
import styles from "./Button.module.css";

type ButtonVariant = "default";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export const Button = ({ children, variant = "default", className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
