import React from 'react';
const Button = ({ label, onClick, type = "button" }) => (
  <button type={type} onClick={onClick} className="custom-btn">
    {label}
  </button>
);
export default Button;