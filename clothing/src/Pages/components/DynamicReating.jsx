import React, { useState, useEffect } from 'react';
import Product from './Product';
import '../../Components/Style/Reating.css'
const DynamicReating = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API or use hardcoded data
    const fetchedProducts = [
      {
        id: 1,
        name: 'Flawsome Classy Boys T-shirt',
        price: 180,
        discount: 10,
        rating: 3.7,
        reviews: 1743,
        imageUrl: 'path-to-image',
        trusted: false,
      },
      {
        id: 2,
        name: 'Tinkle Stylus Boys Top',
        price: 171,
        discount: 10,
        rating: 4.1,
        reviews: 12884,
        imageUrl: 'path-to-image',
        trusted: true,
      },
      // Add more products here...
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <div className="app">
      <h1>People also viewed</h1>
      <div className="products">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DynamicReating;
