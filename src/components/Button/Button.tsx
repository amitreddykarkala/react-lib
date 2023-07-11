import React, { FC } from "react";

import "./Button.css";
import { ButtonProps } from "./Button.types";

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "Button-primary" : "Button-secondary";

  return (
    <button
      type="button"
      className={["button", `Button-${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
