import React from 'react';
import './card.scss';
import Button from './../../components/Button';

const Card = ({ 
  type = 1, 
  icon, 
  title, 
  description, 
  image, 
  widthType = 'default', 
  price, 
  priceLifetime, 
  benefits, 
  buttonText, 
  buttonLink, 
  className = '' 
}) => {
  const cardClass = `card 
    ${widthType === 'large' ? 'card-large' : ''} 
    ${type === 2 ? 'card-with-image' : ''} 
    ${type === 3 ? 'card-grayscale' : ''} 
    ${type === 4 ? 'card-price' : ''} 
    ${widthType === 'small' ? 'card-small' : ''} 
    ${className}`;

  if (type === 1) {
    return (
      <div className={cardClass}>
        <div className="card-icon">
          <i className={icon}></i>
        </div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  }

  if (type === 2) {
    return (
      <div className={cardClass}>
        <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="card-overlay">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    );
  }

  if (type === 3) {
    return (
      <div className={cardClass}>
        <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  }

  if (type === 4) {
    return (
      <div className={cardClass}>
        <div className="card-title">{title}</div>
        
        <div className="card-price-main">
          <span className="price">{price}</span>
          <span className="price-lifetime">{priceLifetime}</span>
        </div>

        <div className="card-benefits">
          {benefits && benefits.map((benefit, index) => (
            <p key={index} className="card-benefit">{benefit}</p>
          ))}
        </div>

        <div className="card-button">
          <Button to={buttonLink}>{buttonText}</Button>
        </div>
      </div>
    );
  }

  return null;
};

export default Card;
