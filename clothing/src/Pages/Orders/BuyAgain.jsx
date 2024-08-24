import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const BuyAgain = ({ userId }) => {

  const [orders, setorders] = useState([])

  useEffect(() => {

    if (userId) {
      const fetchorders = async () => {
        try {


          const response = await axios.get(`http://localhost:4001/orders/order/success/${userId}`)
          setorders(response.data)
          console.log(response.data)
        } catch (err) {
          console.log(err)
        }
      }
      fetchorders()
    }
    else {
      alert("Login First")
    }
  }, [])


  const navigate=useNavigate()
  const navigateto =(id)=>{

    navigate("../../ProductDetails/"+id)
  }


  return (
    <Container>
      <h1 className="my-4">Buy Again</h1>
      <Row>
        {orders.map(order => (
          <Col key={order._id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={"http://localhost:4001/Images/" + order.image} alt={order.productname} />
              <Card.Body>
                <Card.Title>{order.productname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <del>MRP: ₹{order.price}</del>
                </Card.Subtitle>
                <Card.Text>Get it in 7 days</Card.Text>
                <Button variant="primary" className="me-2" onClick={() => navigateto(order.product_id)} >Buy Again</Button>
                <Button variant="primary" className="me-2" onClick={() => navigate("../../reviewform/"+order.product_id)} >Review</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyAgain;
