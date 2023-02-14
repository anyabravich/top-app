import React from "react";
import styles from "./Button.module.scss";
import { ButtonPage } from "./Button.props";
import cn from "classnames";

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: ButtonPage) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
