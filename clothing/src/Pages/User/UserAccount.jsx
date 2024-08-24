import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function UserAccount({ userId }) {


    const [user, setuser] = useState('');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:4001/users/${userId}`) // Corrected URL
                .then(response => {
                    setuser(response.data);
                    setFormData({
                        name: response.data.name,
                        phone: response.data.phone,
                        email: response.data.email,
                        password: ''
                    })
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        } else {
            alert("Login First")
            navigate("../")
        }
    }, [userId]);


    const handleLoginClick = () => {
        navigate('/login');
    };

    const emailalert = () => {
        alert("You can't change your email ")
    }

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
            const response = await axios.put(`http://localhost:4001/users/${userId}`, formData);
            alert("Profile Updated")
            //clearing fields
            // setFormData({
            //     name: '',
            //     phone: '',
            //     email: '',
            //     password: ''
            // })


        } catch (error) {
            console.error("error " + error);
        }
    };

    const handleBack = () => {
        window.history.back(); // Navigate back to the previous page in history
    };

    return (
        <div>
            <h2 style={{textAlign:"center"}}>
            Your Account
            </h2>

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
                            <h2>Update Your Profile</h2>
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
                                    <Form.Control name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={emailalert} required />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mt-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-4">
                                    Update Details
                                </Button>

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>


        </div>
    )
}
