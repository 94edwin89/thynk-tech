import React from "react";

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`header-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
