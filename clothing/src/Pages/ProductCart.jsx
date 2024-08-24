import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCart = () => {
    const { id } = useParams();
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                if (id !== "null") {
                    const response = await axios.get(`http://localhost:4001/cart/${id}`);
                    setCards(response.data);
                } else {
                    alert("Please login first.");
                    window.history.back();
                }
            } catch (error) {
                console.error('Error fetching the product details:', error);
            }
        };

        fetchProductDetails();
    }, [id]);

    const productDetailClickHandle = (id) => {
        navigate(`/ProductDetails/${id}`);
    };

    const removeProductCart = async (id) => {
        try {
            if (id) {
                const response = await axios.delete(`http://localhost:4001/cart/${id}`);
                console.log(response);
                // Optionally, you can update the cart state to remove the item from the list
                setCards(cards.filter(card => card._id !== id));
            }
        } catch (error) {
            console.error('Error deleting the cart details:', error);
        }
    };

    return (
        <Container className="mt-4">
            <Row>
                {!cards.length ? (
                    <Col>
                        <Alert variant="warning">Cart is empty. Please add something.</Alert>
                    </Col>
                ) : (
                    cards.map(card => (
                        <Col key={card._id} xs={12} md={6} lg={4} className="mb-4">
                            <Card>
                                <Card.Img 
                                    variant="top" 
                                    src={`http://localhost:4001/Images/${card.image}`} 
                                    style={{ height: '300px', objectFit: 'cover' }} 
                                />
                                <Card.Body>
                                    <Card.Title>{card.productname}</Card.Title>
                                    <Card.Text>{card.description}</Card.Text>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button variant="outline-danger" onClick={() => removeProductCart(card._id)}>
                                            <FontAwesomeIcon icon={faShoppingCart} /> Remove
                                        </Button>
                                        <Button variant="outline-primary" onClick={() => productDetailClickHandle(card.product_id)}>
                                            <FontAwesomeIcon icon={faEye} /> View
                                        </Button>
                                        <Button variant="outline-success">
                                            <FontAwesomeIcon icon={faHeart} /> Wishlist
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default ProductCart;
