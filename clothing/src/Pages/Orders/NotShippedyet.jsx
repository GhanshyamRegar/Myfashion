import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



const NotShippedYet = ({userId}) => {

  const [orders,setorders] = useState([])

  useEffect(()=>{

    if(userId)
    {
      const fetchorders=async()=>{
        try{

          
          const response =await axios.get(`http://localhost:4001/orders/order/pending/${userId}`)
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
      alert("Login First")
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


  return (
    <Container>
      <h1 className="my-4">Products Not Shipped Yet</h1>
      {orders.map(order => (
        <Card className="mb-4" key={order._id}>
          <Row className="g-0">
            <Col md={2}>
              <Card.Img 
                variant="top" 
                src={"http://localhost:4001/Images/"+order.image}
                alt={order.productname} 
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{order.productname} </Card.Title>
                <Card.Text>Delivery Location: {order.address}</Card.Text>
                <Card.Text>Expected Arrival Date: {deliverydatehandler(order.order_date)}</Card.Text>

              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default NotShippedYet;
