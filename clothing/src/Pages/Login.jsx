import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../Components/Style/Login.css'; // Import the custom CSS file
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({changeLogin, userfetch}) => {

    
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
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
            const response = await axios.post("http://localhost:4001/login", formData);
            console.log('Response:', response.data.userId);
            userfetch( response.data.userId); 




            if (response.status === 200) {
                changeLogin()
                navigate('/');
            }
        } catch (error) {
            alert("Invalid email and password")
            console.error('Error:', error.response.data); // Log detailed error response
        }
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    const handleForgetpassClick = () => {
        navigate('/forgetpass');
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <>
            <div className="login-background"></div>
            <div className="login-container">
                <Container className="form-container">
                    <Row className="justify-content-md-center">
                        <Col xs={12}>
                            <div className="back-button-container">
                                <Button variant="outline-primary" onClick={handleBack} className="back-button">
                                    Back
                                </Button>
                            </div>
                            <h2>Login</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formEmail" className="mt-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mt-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-4">
                                    Login
                                </Button>
                                <Button variant="primary" onClick={handleForgetpassClick} className="mt-4 btn-gap">
                                    Forget Password
                                </Button>
                                <Button variant="primary" onClick={handleSignupClick} className="mt-4 btn-gap">
                                    Sign Up
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Login;
