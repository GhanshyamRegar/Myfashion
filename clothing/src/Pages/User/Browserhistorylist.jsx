import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export default function Browserhistorylist({userId}) {
    
  const [items,setitems] = useState([])

  useEffect(()=>{
    const fetchProductDetails = async () => {
      try {

          const response = await axios.get(`http://localhost:4001/products/getList/${userId}`);
         
        setitems(response.data)
          
        
      } catch (error) {
        console.error('Error fetching the list details:', error);
      }
    };

    fetchProductDetails();
  },[])
  return (
    <Container>
      <h3>
        Your Browsing History
      </h3>
        <table>
            {items.map(item => (            
              <Row key={item._id}>
                <Col>{item.productname}</Col>
                <Col>
                <img src={"http://localhost:4001/Images/" + item.image} style={{ height: "100px" }} alt={item.productname} />
                </Col>
              </Row>
            ))}
            </table>
    </Container>
  )
}
