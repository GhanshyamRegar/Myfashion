// ForgetPasswordForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Components/Style/ForgetPass.css'; // Import the custom CSS fill
const ForgetPass = () => {



    const [formData, setFormData] = useState({
        contactInfo: '',
        otp: '',
        newPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleVerify = () => {
        // Handle verification
        // For demo purposes, assume verification succeeds
        console.log('OTP Verified');
    };

    const handleSetPassword = () => {
        // Handle setting new password
        console.log('New Password Set:', formData.newPassword);
    };

    const handleBack = () => {
        window.history.back(); // Navigate back to the previous page in history
    };

    return (
        <>
            <div className="forget-password-background"></div>
            <div className="forget-password-container">
                <Container className="forget-password-form-container">
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8}>
                        <Button variant="outline-primary" onClick={handleBack} className="back-button">
                                    Back
                                </Button>
                            <h2>Forget Password</h2>
                            <Form>
                                <Form.Group controlId="formContactInfo">
                                    <Form.Label>Enter Number or Email</Form.Label>
                                    <Form.Control name="contactInfo" type="text" placeholder="Enter your number or email" value={formData.contactInfo} onChange={handleChange} required />
                                </Form.Group>

                                <Form.Group controlId="formOTP" className="mt-3">
                                    <Form.Label>Enter OTP</Form.Label>
                                    <Form.Control name="otp" type="text" placeholder="Enter OTP" value={formData.otp} onChange={handleChange} required />
                                </Form.Group>

                                <Form.Group controlId="formNewPassword" className="mt-3">
                                    <Form.Label>Enter New Password</Form.Label>
                                    <Form.Control name="newPassword" type="password" placeholder="Enter new password" value={formData.newPassword} onChange={handleChange} required />
                                </Form.Group>

                                <Button variant="primary" className="mt-3" onClick={handleVerify}>
                                    Verify OTP
                                </Button>

                                { /* If OTP is verified, show the set password button */ }
                                { formData.otp && (
                                    <Button variant="primary" className="mt-3 btn-gap" onClick={handleSetPassword}>
                                        Set New Password
                                    </Button>
                                )}
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default ForgetPass;
