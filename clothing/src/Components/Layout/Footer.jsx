import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './App.css'; // Import your CSS file for custom styling if needed
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" style={{backgroundColor:"white"}}>
    <h3 style={{textAlign:"center"}}>Footer</h3>
      <Container fluid>
        <Row>
          <Col md={3} sm={6} className="footer-col">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              {/* Add more links as needed */}
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Returns</li>
              {/* Add more links as needed */}
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h5>Policy</h5>
            <ul className="list-unstyled">
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              {/* Add more links as needed */}
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              {/* Add more links as needed */}
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md={6}>
              <p>&copy; {new Date().getFullYear()} My Fashion. All Rights Reserved.</p>
            </Col>
            <Col md={6} className="text-right">
              <ul className="list-inline">
                <li className="list-inline-item"><Link to='/privacyPolicy'> Privacy Policy </Link></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
