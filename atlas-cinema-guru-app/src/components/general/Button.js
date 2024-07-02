import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import the specific icon here

// ___PROPS___
// label: String – The button label
// className: String – Button custom classes
// onClick: Function – The onClick handler for the button.
// icon(optional): FontAwesomeIcon – An icon to decorate the button with.
const Button = ({ label, className, onClick, icon }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  );
};

export default Button;
