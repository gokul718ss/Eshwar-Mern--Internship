import React from 'react';

const Button = ({ label, onClick, styleClass }) => {
  return (
    <button className={`btn ${styleClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
