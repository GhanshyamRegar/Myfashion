import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



export default function Productreview({ productid }) {

  const [reviews,setreviews] = useState([])
  const [imagecount,setimgcount] = useState(1)

  useEffect(()=>{

 
      const fetchreviews=async()=>{
        try{

          
          const response =await axios.get(`http://localhost:4001/review/${productid}`)
          setreviews(response.data)
          console.log(response.data)
        }catch(err)
        {
          console.log(err)
        }
      }
      fetchreviews()
    

  },[])


  const changeimg = (images)=>{
    if(images>imagecount)
    {
      setimgcount(imagecount+1)
    }
    else{
      setimgcount(1)
    }

  }


  return (
    <div>
      <h2>Productreview</h2>

      <Container className="mt-4">
        <h2 className="mb-4">Cancelled Orders</h2>
        {reviews.map(order => (     
          <Row key={order._id}>
            <Card className='mb-4'>
              <Row className='g-0'>
                <Col xs={12} md={2} className="text-center">
                  <Card.Img

                    onClick={()=>changeimg(order.images.length)}
                    variant="top"
                    src={"http://localhost:4001/Images/" + order.images[imagecount]}
                    alt={order.productname}
                    className="my-3"
                    style={{ width: '80%', objectFit: 'cover', maxHeight: '150px' }} // Adjusted image size and styling
                  />
                </Col>
                <Col xs={12} md={10}> {/* Adjusted column size for content */}
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="fs-6 mb-3">Order ID: {order._id}</Card.Title> {/* Reduced font size */}
                    <div className="fs-8">
                      <Card.Text className='mb-1'>Product Name: {order.pname}</Card.Text>
                      <Card.Text className='mb-1'>Product description: {order.pdescription}</Card.Text>
                      <Card.Text className='mb-1'>Product rice: {order.pprice}</Card.Text>
                      <Card.Text className='mb-1'>Product review: {order.review}</Card.Text>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Row>
        ))}
      </Container>


    </div>
  )
}
