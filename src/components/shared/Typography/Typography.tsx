import clsx from "clsx";
import React from "react";
import styles from "./Typography.module.css";

type tag = "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TypographyVariant = "title20_bold" | "paragraph16_regular" | "paragraph20_medium" | "paragraph16_semibold";

type TypographyColor = "primary" | "subtitle" | "accent";

interface TypographyProps {
  tag: tag;
  children: React.ReactNode;
  variant: TypographyVariant;
  color?: TypographyColor;
  className?: string;
}

export const Typography = ({ tag, children, variant, color = "primary", className }: TypographyProps) => {
  const Component = tag;
  return <Component className={clsx(styles[variant], styles[color], className)}>{children}</Component>;
};
