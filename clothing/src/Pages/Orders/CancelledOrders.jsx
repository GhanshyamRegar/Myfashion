import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CancelledOrders = ({userId}) => {

  
  const [orders,setorders] = useState([])

  useEffect(()=>{

    if(userId)
    {
      const fetchorders=async()=>{
        try{

          
          const response =await axios.get(`http://localhost:4001/orders/order/cancel/${userId}`)
          setorders(response.data)
          console.log(response.data)
        }catch(err)
        {
          console.log(err)
        }
      }
      fetchorders()
    }
    else
    {
      alert("Login First")
    }
  },[])


  return (
    <Container className="mt-4">
      <h2 className="mb-4">Cancelled Orders</h2>
      {orders.map(order => (
        <Row key={order._id}>
          <Card className='mb-4'>
            <Row className='g-0'>
              <Col xs={12} md={2} className="text-center"> 
                <Card.Img
                  variant="top"
                  src={"http://localhost:4001/Images/"+order.image}
                  alt={order.productname}
                  className="my-3"
                  style={{ width: '80%', objectFit: 'cover', maxHeight: '150px' }} // Adjusted image size and styling
                />
              </Col>
              <Col xs={12} md={10}> {/* Adjusted column size for content */}
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fs-6 mb-3">Order ID: {order._id}</Card.Title> {/* Reduced font size */}
                  <div className="fs-8">
                    <Card.Text className='mb-1'>Product Name: {order.productname}</Card.Text>
                    <Card.Text className='mb-1'>Refunded Successfully: </Card.Text>
                    <Card.Text className='mb-1'>Refund Amount: </Card.Text>
                    <Card.Text className='mb-1'>Refund Date: </Card.Text>
                    <Card.Text className='mb-1'>Cancelled Date: </Card.Text>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Row>
      ))}
    </Container>
  );
};

export default CancelledOrders;
