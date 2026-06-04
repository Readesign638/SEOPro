import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="product-card" role="region" aria-label={`Product: ${name}`}>
      <img 
        src={image} 
        alt={`Image of ${name}`} 
        role="img" 
        className="product-img" 
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>R{price}</strong>
      <a href="#" role="button" aria-label={`Buy ${name} now`} className="buy-btn">
        Buy Now
      </a>
    </div>
  );
};

export default ProductCard;
