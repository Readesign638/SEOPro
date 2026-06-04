import React from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css';
import products from '../data/products';
import { YourProvider } from '../context/Provider';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
};

const FeaturedProducts = () => (
  <YourProvider>
    <div className="product-list">
      <h2>Our Featured Products</h2>
      <p>Explore our handpicked selection of quality products designed to meet your needs.</p>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} description={product.description} price={product.price} image={product.image} />
        ))}
      </div>
    </div>
  </YourProvider>
);

export const Products = () => <FeaturedProducts />;
