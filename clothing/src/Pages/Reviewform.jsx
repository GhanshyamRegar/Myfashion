
import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Testform from '../Testform';




const Reviewform = ({userId}) => {

  const [product, setproduct] = useState({})
  const {id} = useParams()
  
  const [productData, setProductData] = useState({
      productid:id,
      userid:userId,
      pname: "",
      pdescription: "",
      review:"",
      pprice:"",
      images:[""],
    });

  useEffect(()=>{
    const fetchproduct =async ()=>{
      
      try {
        
        console.log(id)
        const response = await axios.get(`http://localhost:4001/products/${id}`);
        setproduct(response.data)
        setProductData({...productData,pname:response.data.name})
        setProductData({...productData,pdescription:response.data.description})
        setProductData({...productData,pprice:response.data.price})



        console.log("name : "+response.data.name)
        console.log( "description : "+response.data.description)
        console.log("price : "+ response.data.price)
        console.log(productData)
      } catch (err) {
        console.log(err)
      }
    }
    fetchproduct();

  },[])



      
      const handleInputChange = (e) => {
    
        const { name, value } = e.target;
        setProductData({
          ...productData,
          [name]: value,
        });
      };
    
    
      const imgLinker = (link)=>{
        if(link!='')
        {  if(link!=null)
          {
    
            setProductData({
              ...productData,
              images: [...productData.images, link], // Append link to the images array
            });
          }
        }
        else
          {
            setProductData({
              ...productData,
              images: [ link], // Append link to the images array
            });
          }
    
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();

    
        try {
          const response = await axios.post('http://localhost:4001/review', {
            productid:id,
            userid:userId,
            pname: product.price,
            pdescription: product.description,
            review:productData.review,
            pname:product.name,
            pprice:product.price,
            images:productData.images
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          alert("Product successfully added")
          console.log('review added:', response.data);
    
        } catch (error) {
          console.error('Error adding review:', error);
        }
      };
    
      return (
        <div>
        <Container>
          <Form onSubmit={handleSubmit} style={{ padding: '1%' }}>
            <h2>Review</h2>
              <h4> Productname :{product.name}</h4>
              <h4>Product description : {product.description}</h4>
              <h4>Product Price : {product.price}</h4>

     
            <textarea name='review' onChange={handleInputChange} value={productData.review} ></textarea>
            <Testform imgLinker={imgLinker}/>
              
 
            <Button variant="primary" type="submit" style={{ margin: '1%' }}>
              Add review
            </Button>
          </Form>
        </Container>
        </div>
      );
    };
    
    export default Reviewform;
