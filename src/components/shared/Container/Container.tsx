import clsx from "clsx";
import React from "react";
import styles from "./Container.module.css";

type variant = "default" | "short";

interface Props {
  children: React.ReactNode;
  variant?: variant;
  className?: string;
}

export const Container = ({ children, className, variant = "default" }: Props) => {
  return <div className={clsx(styles.container, styles[variant], className)}>{children}</div>;
};
