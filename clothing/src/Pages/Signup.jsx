// src/SignupForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Components/Style/Signup.css'; // Import the custom CSS file
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignupForm = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4001/signup", formData);

            //clearing fields
            setFormData({
                name: '',
                phone: '',
                email: '',
                password: ''
            })

            navigate('/login');

            console.log('Response:', response);
        } catch (error) {
            console.error(error);
        }
        console.log('Form Data:', formData);
    };

    const handleBack = () => {
        window.history.back(); // Navigate back to the previous page in history
    };

    return (
        <>
            <div className="signup-background"></div>
            <div className="signup-container">
                <Container className="form-container">
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8}>
                            <div className="back-button-container">
                                <Button variant="outline-primary" onClick={handleBack} className="back-button">
                                    Back
                                </Button>
                            </div>
                            <h2>Signup</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                                </Form.Group>

                                <Form.Group controlId="formNumber" className="mt-3">
                                    <Form.Label>Number with Country Code</Form.Label>
                                    <Form.Control name="phone" type="tel" placeholder="Enter your number with country code" value={formData.phone} onChange={handleChange} required />
                                </Form.Group>

                                <Form.Group controlId="formEmail" className="mt-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mt-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-4">
                                    Signup
                                </Button>
                                <Button variant="secondary" className="mt-4 btn-gap" onClick={handleLoginClick}>
                                    Login
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SignupForm;
