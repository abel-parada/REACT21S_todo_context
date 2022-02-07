import React from "react";
import something from "./Button.module.css";

const Button = ({ type, click, children }) => {
  return (
    <button
      className={something.button}
      type={type || "button"}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
