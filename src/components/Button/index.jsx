import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

const Button = ({ to, icon, children, onClick }) => {
  return (
    <Link to={to} role="button" aria-label={children || 'Botão'}>
      <button 
        className="btn" 
        onClick={onClick} 
        aria-label={icon ? `${children}, ícone incluído` : children}
      >
        {icon && <span className="btn-icon" aria-hidden="true">{icon}</span>}
        {children}
      </button>
    </Link>
  );
};

export default Button;
