import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

const Button = ({ to, icon, children, onClick }) => {
  return (
    <Link to={to}>
      <button className="btn" onClick={onClick}>
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </button>
    </Link>
  );
};

export default Button;
