import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import Testform from '../../Testform';

// ../../Components/Images/gpay.png

const ProductForm = () => {


  
  const [productData, setProductData] = useState({
    name: '',
    catagory: '',
    subcatagory: '',
    description: '',
    topFabric: '',
    bottomFabric: '',
    sleeveLength: '',
    topPattern: '',
    bottomPattern: '',
    netQuantity: '',
    addOns: '',
    price: '',
    category: '',
    colors: [],
    stock: '',
    countryOfOrigin: '',
    brand: '',
    images:[],
  });
  
  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };


  const imgLinker = (link)=>{
    if(link!='')
      {

        setProductData({
          ...productData,
          images: [...productData.images, link], // Append link to the images array
        });
      }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    


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

        <Form.Group controlId="productDescription">
          <select name="category" id="">
            <option value="mens">Mens</option>
            <option value="womens">Womens</option>
            <option value="kids">Kids</option>
          </select>
          <Form.Label>Product catagory:</Form.Label>
          <Form.Control
            type="text"
            name="catagory"
            value={productData.catagory}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="productDescription">
          <Form.Label>Product subcatagory:</Form.Label>
          <Form.Control
            type="text"
            name="subcatagory"
            value={productData.subcatagory}
            onChange={handleInputChange}
            required
          />
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

        <Form.Group controlId="productCategory">
          <Form.Label>Category:</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={productData.category}
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

        <Testform imgLinker={imgLinker}/>
          

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
