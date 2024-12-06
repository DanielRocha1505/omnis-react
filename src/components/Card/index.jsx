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
      <div className={cardClass} role="region" aria-labelledby={`card-title-${title}`}>
        <div className="card-icon" aria-hidden="true">
          <i className={icon}></i>
        </div>
        <div className="card-content">
          <h2 id={`card-title-${title}`} className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  }

  if (type === 2) {
    return (
      <div className={cardClass} role="region" aria-labelledby={`card-title-${title}`}>
        <div
          className="card-image"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={title}
        ></div>
        <div className="card-overlay">
          <h2 id={`card-title-${title}`} className="card-title">{title}</h2>
        </div>
      </div>
    );
  }

  if (type === 3) {
    return (
      <div className={cardClass} role="region" aria-labelledby={`card-title-${title}`}>
        <div
          className="card-image"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={title}
        ></div>
        <div className="card-content">
          <h2 id={`card-title-${title}`} className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  }

  if (type === 4) {
    return (
      <div className={cardClass} role="region" aria-labelledby={`card-title-${title}`}>
        <div id={`card-title-${title}`} className="card-title">{title}</div>
        
        <div className="card-price-main">
          <span className="price" aria-label={`Preço: ${price}`}>{price}</span>
          <span className="price-lifetime" aria-label={`Preço vitalício: ${priceLifetime}`}>{priceLifetime}</span>
        </div>

        <div className="card-benefits">
          {benefits && benefits.map((benefit, index) => (
            <p key={index} className="card-benefit">{benefit}</p>
          ))}
        </div>

        <div className="card-button">
          <Button to={buttonLink} aria-label={`Saiba mais sobre ${title}`}>{buttonText}</Button>
        </div>
      </div>
    );
  }

  return null;
};

export default Card;
