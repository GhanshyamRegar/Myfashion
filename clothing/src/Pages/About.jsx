// AboutUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Style/AboutUs.css'; // Import custom CSS for additional styling if needed

const AboutUs = () => {
    return (
        <Container className="about-us-container">
            <Row>
                <Col>
                    <h1>About Us</h1>
                    <p>Welcome to My-Fashion, your number one source for all things fashion. We're dedicated to providing you with the very best of trendy clothing, with a focus on quality, style, and affordability.</p>
                    <p>Founded in 20XX by [Founder's Name], My-Fashion has come a long way from its beginnings in a small room in [Location]. When [Founder's Name] first started out, their passion for fashion drove them to start their own business.</p>
                    <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                    <p>Sincerely,</p>
                    <p>The My-Fashion Team</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
