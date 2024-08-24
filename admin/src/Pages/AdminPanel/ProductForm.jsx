import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import Testform from '../../Testform';

// ../../Components/Images/gpay.png

const ProductForm = () => {



  const [productData, setProductData] = useState({
    name: '',
    category: '',
    subcategory: '',
    description: '',
    topFabric: '',
    bottomFabric: '',
    sleeveLength: '',
    topPattern: '',
    bottomPattern: '',
    netQuantity: '',
    addOns: '',
    price: '',
    colors: [],
    stock: '',
    countryOfOrigin: '',
    brand: '',
    images: [],
  });

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };


  const imgLinker = (link) => {
    if (link != '') {

      setProductData({
        ...productData,
        images: [...productData.images, link], // Append link to the images array
      });
    }

  }


  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(productData)

    try {
      const response = await axios.post('http://localhost:4001/products', productData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert("Product successfully added")
      console.log('Product added:', response.data);

      // Reset form fields
      // setProductData({
      //   name: '',
      //   description: '',
      //   topFabric: '',
      //   bottomFabric: '',
      //   sleeveLength: '',
      //   topPattern: '',
      //   bottomPattern: '',
      //   netQuantity: '',
      //   addOns: '',
      //   price: '',
      //   category: '',
      //   colors: [],
      //   stock: '',
      //   countryOfOrigin: '',
      //   brand: '',
      //   images: [],
      // });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Container>
      <div className="back-button-container">
        <Button variant="outline-primary" onClick={handleBack} className="back-button">
          Back
        </Button>
      </div>
      <Form onSubmit={handleSubmit} style={{ padding: '1%' }}>
        <h2>Add Product</h2>
        <Form.Group controlId="productName">
          <Form.Label>Product Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Product category:</Form.Label>
          <select name="category" value={productData.category} onChange={handleInputChange}>
            <option value=""></option>
            <option value="mens">Mens </option>
            <option value="womens">Womens</option>
            <option value="kids">Kids</option>
          </select>

        </Form.Group>

        <Form.Group controlId="subcategory">
          <Form.Label>Product subcategory:</Form.Label>
          <select name="subcategory" value={productData.subcategory} onChange={handleInputChange}>
            {productData.category == "mens" &&
              (<>
                <option value="men-formal-shirts">Formal Shirts</option>
                <option value="men-casual-shirts">Casual Shirts</option>
                <option value="men-polo-tshirts">Polo T-Shirts</option>
                <option value="men-roundneck-tshirts">Round Neck T-shirts</option>
                <option value="men-graphic-tshirts">Graphic T-Shirts</option>
                <option value="men-formal-suits">Formal Suits</option>
                <option value="men-wedding-suits">Wedding Suits</option>
                <option value="men-formal-blazers">Formal Blazers</option>
                <option value="men-casual-blazers">Casual & Party Blazers</option>
                <option value="men-wedding-blazers">Wedding Blazers</option>
                <option value="men-sweatshirts">Sweatshirts</option>
                <option value="men-jackets">Jackets</option>
                <option value="men-sweaters">Sweaters</option>
                <option value="men-formal-trousers">Formal Trousers</option>
                <option value="men-casual-trousers">Casual Trousers</option>
                <option value="men-skinny-jeans">Skinny Fit Jeans</option>
                <option value="men-slim-jeans">Slim Fit Jeans</option>
                <option value="men-regular-jeans">Regular Straight Fit Jeans</option>
                <option value="men-tapered-jeans">Classic Tapered Fit Jeans</option>
                <option value="men-combos">Combos</option>
                <option value="men-trackpants">Track Pants</option>
                <option value="men-shorts">Shorts</option>
                <option value="men-kurtas">Kurtas</option>
                <option value="men-nehru-jackets">Nehru Jackets</option>
                <option value="men-briefs">Briefs</option>
                <option value="men-trunks">Trunks</option>
                <option value="men-vests">Vests</option>
                <option value="men-boxers">Boxers</option>
              </>)
            }
            {
              productData.category === "womens" &&
              (
                <>
                  <option value="women-collections">Collections</option>
                  <option value="women-exclusives">Exclusives</option>
                  <option value="women-styledbyand">#StyledbyAND</option>
                  <option value="women-bestseller">Bestseller</option>
                  <option value="women-workwear">Work Wear</option>
                  <option value="women-casualwear">Casual Wear</option>
                  <option value="women-eveningwear">Evening Wear</option>
                  <option value="women-winterwear">Winter Wear</option>
                  <option value="women-essentials">Everyday Essentials</option>
                  <option value="women-gifting">Gifting</option>
                  <option value="women-all">All Women</option>
                  <option value="women-newarrivals">New Arrivals</option>
                  <option value="women-allclothing">All Clothing</option>
                  <option value="women-dresses">Dresses/Jumpsuits</option>
                  <option value="women-tops">Tops/Shirts</option>
                  <option value="women-coords">Co-ords Sets</option>
                  <option value="women-bottoms">Bottoms</option>
                  <option value="women-jackets">Jackets/Blazers</option>
                  <option value="women-sweaters">Sweater/Cardigan</option>
                </>
              )
            }
            {productData.category === "kids" &&
              (
                <>
                  <option value="kids-boys">Boys</option>
                  <option value="kids-girls">Girls</option>
                  <option value="kids-baby">Baby</option>
                </>
              )
            }

          </select>


        </Form.Group>

        <Form.Group controlId="productDescription">
          <Form.Label>Product Description:</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productTopFabric">
          <Form.Label>Top Fabric:</Form.Label>
          <Form.Control
            type="text"
            name="topFabric"
            value={productData.topFabric}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productBottomFabric">
          <Form.Label>Bottom Fabric:</Form.Label>
          <Form.Control
            type="text"
            name="bottomFabric"
            value={productData.bottomFabric}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productSleeveLength">
          <Form.Label>Sleeve Length:</Form.Label>
          <Form.Control
            type="text"
            name="sleeveLength"
            value={productData.sleeveLength}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productTopPattern">
          <Form.Label>Top Pattern:</Form.Label>
          <Form.Control
            type="text"
            name="topPattern"
            value={productData.topPattern}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productBottomPattern">
          <Form.Label>Bottom Pattern:</Form.Label>
          <Form.Control
            type="text"
            name="bottomPattern"
            value={productData.bottomPattern}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productNetQuantity">
          <Form.Label>Net Quantity:</Form.Label>
          <Form.Control
            type="text"
            name="netQuantity"
            value={productData.netQuantity}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productAddOns">
          <Form.Label>Add Ons:</Form.Label>
          <Form.Control
            type="text"
            name="addOns"
            value={productData.addOns}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productColors">
          <Form.Label>Colors:</Form.Label>
          <Form.Control
            type="text"
            name="colors"
            value={productData.colors}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Testform imgLinker={imgLinker} />


        <Form.Group controlId="productStock">
          <Form.Label>Stock:</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            value={productData.stock}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productCountryOfOrigin">
          <Form.Label>Country of Origin:</Form.Label>
          <Form.Control
            type="text"
            name="countryOfOrigin"
            value={productData.countryOfOrigin}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="productBrand">
          <Form.Label>Brand:</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ margin: '1%' }}>
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
