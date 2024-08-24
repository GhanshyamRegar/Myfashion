// BrowsingHistory.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from "axios"
import { Link } from 'react-router-dom';

const BrowsingHistory = ({ userId }) => {


  const [items, setitems] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  useEffect(() => {
    if (userId) {

      const fetchProductDetails = async () => {
        try {

          const response = await axios.get(`http://localhost:4001/products/getList/${userId}`);
          console.log(response.data)
          setitems(response.data)


        } catch (error) {
          console.error('Error fetching the list details:', error);
        }
      };

      fetchProductDetails();
    }
  },[userId])


  return (
    <Container style={{ backgroundColor: "white" }}>
      <Row className="my-4  mx-auto">
        <Col>
          <h2 style={{ textAlign: "center" }}>Your Browsing History</h2>
          <Link to="/history">View or edit your browsing history</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Slider {...settings}>
            {items.map(item => (
              <div key={item._id}>
                <img src={"http://localhost:4001/Images/" + item.image} style={{ height: "100px" }} alt={item.productname} />
                <h5>{item.productname}</h5>
              </div>
            ))}
              <div>
              
              </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default BrowsingHistory;
