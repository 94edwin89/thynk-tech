import React from "react";

const Button = ({ title, onClick, disabled = false, className = "" }) => {
  return (
    <button
      className={`header-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
    {title}
    </button>
  );
};

export default Button;
