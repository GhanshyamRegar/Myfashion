import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Card, Button, ListGroup, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Selectpayment = ({ producttotalprice, paymethod ,progressincrease}) => {

    useEffect(()=>{
        progressincrease(66)
    },[])

    const [selectpayment, setSelectpayment] = useState("");

    const handleChange = (e) => {
        setSelectpayment(e.target.value);
    };

    return (
        <Container>
            <h6 className="my-4">Select Payment Method</h6>
            <Card className="mb-4">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col>
                            <Card.Title>Cash on Delivery</Card.Title>
                        </Col>
                        <Col className="text-end">
                            <Form.Check 
                                type="radio" 
                                name="deliverytype" 
                                id="cash" 
                                value="cash" 
                                checked={selectpayment === "cash"} 
                                onChange={handleChange} 
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className="border-danger-subtle mb-4">
                <Card.Body>
                    <Card.Title className="text-center">Pay Online</Card.Title>
                    <ListGroup className="list-unstyled">
                        <ListGroup.Item>
                            <Form.Check 
                                type="radio" 
                                name="deliverytype" 
                                id="phonepay" 
                                value="phonepay" 
                                label="PhonePe" 
                                checked={selectpayment === "phonepay"} 
                                onChange={handleChange} 
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Form.Check 
                                type="radio" 
                                name="deliverytype" 
                                id="paytm" 
                                value="Paytm" 
                                label="Paytm" 
                                checked={selectpayment === "Paytm"} 
                                onChange={handleChange} 
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Form.Check 
                                type="radio" 
                                name="deliverytype" 
                                id="googlepay" 
                                value="googgle" 
                                label="Google Pay" 
                                checked={selectpayment === "googgle"} 
                                onChange={handleChange} 
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Form.Check 
                                type="radio" 
                                name="deliverytype" 
                                id="debitcredit" 
                                value="Debit/Credit" 
                                label="Debit/Credit Card" 
                                checked={selectpayment === "Debit/Credit"} 
                                onChange={handleChange} 
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Form.Check 
                                type="radio" 
                                name="deliverytype" 
                                id="netbanking" 
                                value="Netbanking" 
                                label="Netbanking" 
                                checked={selectpayment === "Netbanking"} 
                                onChange={handleChange} 
                            />
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <span>Total Price: ₹{producttotalprice}</span>
                <Link to="../QRcode">
                    <Button variant="primary" onClick={() => paymethod(selectpayment)}>
                        Place Order
                    </Button>
                </Link>
            </div>
        </Container>
    );
};

export default Selectpayment;
