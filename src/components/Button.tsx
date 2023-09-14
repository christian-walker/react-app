import React, { ReactNode } from "react";

interface buttonProp {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger"; // the question mark sets this to optional,
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: buttonProp) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
