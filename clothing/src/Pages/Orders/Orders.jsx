import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Orders = ({userId}) => {


  const [orders,setorders] =useState([])
  const navigate =useNavigate()

  useEffect(()=>{

    if(userId)
    {
      const fetchorders=async()=>{
        try{

          
          const response =await axios.get(`http://localhost:4001/orders/order/${userId}`)
          setorders(response.data)
          
          console.log(response.data[0]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     )
        }catch(err)
        {
          console.log(err)
        }
      }
      fetchorders()
    }
    else
    {
     
    }
  },[])


  const deliverydatehandler = (date)=>{
    try
    {

      console.log(date)
      const orgdate = new Date(date)
      const newdate = `${orgdate.getFullYear()} / ${orgdate.getMonth()} / ${orgdate.getDay()+7}`
      console.log(newdate)
      return newdate
    }
    catch(err){
    console.log("error "+err)

    }
  }

  const navigateto =(id)=>{

    navigate("../../ProductDetails/"+id)
  }

  return (
    <Container>
      <h1 className="my-4">Your Orders</h1>
      <Row>
        {orders.map(product => (
          <Col key={product._id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" style={{width:"200px"}} src={"http://localhost:4001/Images/"+product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>Product Name : {product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Delivered on: {deliverydatehandler(product.order_date)}
                </Card.Subtitle>
                <Card.Text>Product Size : {product.size}</Card.Text>
                <Card.Text>Product Price : {product.price}</Card.Text>
                <Button variant="primary" className="me-2" onClick={()=>navigateto(product.product_id)} >Buy Again</Button>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Orders;
