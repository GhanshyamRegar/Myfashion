import React from 'react';
import Rating from './Rating';
import shirt from '../../Components/Images/shirt.webp';
import img1 from '../../Components/Images/img1 (1).jpg';
import img2 from '../../Components/Images/img2 (2).jpg';

const Product = ({ product }) => {
  // Map product names to images
  const imageMap = {
    'shirt': shirt,
    'product1': img1,
    'product2': img2,
    // Add more mappings as needed
  };

  // Get the image URL based on the product name, or use a default image if not found
  const imageUrl = imageMap[product.name.toLowerCase()] || product.imageUrl;

  return (
    <div className="product">
      <img src={imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price} <span>{product.discount}% off</span></p>
      <p>Free Delivery</p>
      <Rating rating={product.rating} reviews={product.reviews} productId={product.id} />
      <div className="trusted">
        {product.trusted && <span>Trusted</span>}
      </div>
    </div>
  );
};

export default Product;
