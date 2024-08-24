import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Style/Contact.css'; // Ensure this path is correct and the CSS file exists
import axios from 'axios';

const Contact = ({userId}) => {
    const navigate = useNavigate();

    const handleHelpClick = () => {
        navigate('/help');
    };
    
    const [formData, setFormData] = useState({
        userid:userId,
        username: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission
        if(!userId)
        {
            alert("Please login to contact us");

        }
        try {
            const response = await axios.post("http://localhost:4001/contact", formData);
            console.log('Form Data:', response.data);
            alert("Message sent successfully");
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    const handleBack = () => {
        window.history.back(); // Navigate back to the previous page in history
    };

    return (
        <>
            <div className="contact-background"></div>
            <div className="contact-container">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8}>
                            <div className="back-button-container">
                                <Button variant="outline-primary" onClick={handleBack} className="back-button">
                                    Back
                                </Button>
                            </div>
                            <h2>Contact Us</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        name="username"
                                        type="text"
                                        onChange={handleChange}
                                        value={formData.username}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail" className="mt-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        onChange={handleChange}
                                        value={formData.email}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPhone" className="mt-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        name="phone"
                                        type="tel"
                                        onChange={handleChange}
                                        value={formData.phone}
                                        placeholder="Enter your phone number"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formMessage" className="mt-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        name="message"
                                        as="textarea"
                                        onChange={handleChange}
                                        value={formData.message}
                                        rows={4}
                                        placeholder="Enter your message"
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-4">
                                    Submit
                                </Button>

                                <Button variant="secondary" onClick={handleHelpClick} className="mt-4 btn-gap">
                                    Help
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Contact;
