// OrderPage.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Nav } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Orders from './Orders';
import BuyAgain from './BuyAgain';
import NotShippedyet from './NotShippedyet';
import CancelledOrders from './CancelledOrders';
import axios from 'axios';

const OrderPage = ( {userId}) => {

  const [orders,setorders] =useState([])

  useEffect(()=>{

    if(userId)
    {
      const fetchorders=async()=>{
        try{

          
          const response =await axios.get(`http://localhost:4001/orders/order/${userId}`)
          setorders(response.data)
        }catch(err)
        {
          console.log(err)
        }
      }
      fetchorders()
    }
    else
    {
      alert("Login First  ")
      window.history.back();
    }
  },[])


  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Your Account › Your Orders</h1>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={3}>
          <h4>Your Orders</h4>
        </Col>
        <Col md={6}>
          <Form.Control type="text" placeholder="Search all orders" />
        </Col>
        <Col md={3}>
          <Form.Control type="button" value="Search Orders" className="btn btn-primary" />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <Nav variant="tabs" defaultActiveKey="/orders">
            <Nav.Item>
              <Nav.Link as={Link} to="orders">Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="buy-again">Buy Again</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="not-yet-shipped">Not Yet Shipped</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="cancelled-orders">Cancelled Orders</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Routes>
          <Route path="/orders" element={<Orders userId={userId} />} />
          <Route path="/buy-again" element={<BuyAgain userId={userId}/>} />
          <Route path="/not-yet-shipped" element={<NotShippedyet userId={userId} />} />
          <Route path="/cancelled-orders" element={<CancelledOrders userId={userId} />} />
          <Route path="/" element={<Orders  userId={userId}/>} />
      </Routes>

    </Container>
  );
};

export default OrderPage;
