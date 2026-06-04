import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      {products.map(p => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
};

export default ProductList;