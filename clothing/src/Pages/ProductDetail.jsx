import React, { useEffect, useState } from 'react';
import '../Components/Style/ProductDetails.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Productreview from '../Components/productreview/Productreview';

const ProductDetails = ({ userId, productIdhandler, sizehandler, selectimagehandler }) => {
  const [selectedImage, setSelectedImage] = useState(null);


  const { id } = useParams()

  productIdhandler(id)
  const [productdata, setproductdata] = useState({})
  const [imagesset, setimagesset] = useState([])

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (id) {


          const response = await axios.get(`http://localhost:4001/products/${id}`);
          setproductdata(response.data)
          setimagesset(response.data.images);
          setSelectedImage(response.data.images[0])


          const addToList = await axios.post("http://localhost:4001/products/addToList", { product_id: id, user_id: userId, image: response.data.images[0], productname: response.data.name });

        }
      } catch (error) {
        console.error('Error fetching the product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const productcartclickhandle = async (product) => {

    try {
      await axios.post('http://localhost:4001/cart', {
        user_id: id,
        product_id: product._id,
        image: product.images[0],
        description: product.description,
        productname: product.name,
        price: product.price
      })

      console.log("Added to cart")
    }
    catch (err) {
      console.log('There was an error in adding the cart!', err);
    }



  }




  return (
    <div className="product-container">
      <div className="product-images-list">
        {imagesset.map((image, index) => (
          <img
            key={index}
            src={"http://localhost:4001/Images/" + image}
            alt={`Product ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            className={image === selectedImage ? 'selected' : ''}
          />
        ))}
      </div>
      <div className="product-image">
        <img src={"http://localhost:4001/Images/" + selectedImage} alt="Product" />
      </div>
      <div className="product-details">
        <h1>{productdata.name}</h1>
        <div className="product-price">
          ₹{productdata.price}
          <span className="product-old-price"> ₹{productdata.price}</span>
          <span className="discount">(9% off)</span>
        </div>
        <div className="product-rating">
          <span>4.0 ★</span>
          <span>9466 Ratings, 2411 Reviews</span>
        </div>
        <div className="size-options">
          {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map(size => (
            <button key={size} onClick={() => sizehandler(size)}>{size}</button>
          ))}
        </div>
        <button className="add-to-cart" onClick={() => { productcartclickhandle(productdata) }}>Add to Cart</button>
        <Link to="/buynow">
          <button className="buy-now" onClick={() => selectimagehandler(selectedImage)}>Buy Now</button>
        </Link>
        <div className="product-details-section">
          <h2>Product Details</h2>
          <p><strong>Name:</strong> {productdata.name}</p>
          <p><strong>Top Fabric:</strong> {productdata.topFabric}</p>
          <p><strong>Bottom Fabric:</strong> {productdata.bottomFabric}</p>
          <p><strong>Sleeve Length:</strong>  {productdata.sleeveLength}</p>
          <p><strong>Top Pattern:</strong>  {productdata.topPattern}</p>
          <p><strong>Bottom Pattern:</strong>  {productdata.bottomPattern}</p>
          <p><strong>Net Quantity (N):</strong>  {productdata.netQuantity}</p>
          <p><strong>Add-Ons:</strong>  {productdata.addOns}</p>
          <p>
            {productdata.description}
          </p>
          <p><strong>Country of Origin:</strong> India</p>
        </div>
        <Productreview productid={productdata._id} />
      </div>
    </div>
  );
};

export default ProductDetails;
