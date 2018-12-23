import React from 'react';

const Button = ({
  onClick = () => {},
  textColor,
  backgroundColor,
  styleButton,
  children
}) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: backgroundColor,
      color: textColor,
      border: 'none',
      ...styleButton
    }}
  >
    {children}
  </button>
);

export default Button;
