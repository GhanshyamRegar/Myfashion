import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import account from "../Images/account.svg"
import cart from "../Images/cart.svg"
import axios from "axios"

const Header = ({ isLogin, userId }) => {



    const [userName, setUserName] = useState('Guest');
    const [id, setid] = useState(null);
    

    useEffect(() => {
        
        if (isLogin && userId) {
            axios.get(`http://localhost:4001/users/${userId}`)
                .then(response => {
                    setUserName(response.data.name);
                    setid(response.data._id);
                    console.log(response)
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        } else {
            setUserName('Guest');
        }
    }, [isLogin, userId]);


    return (
        <Container style={{ padding: '15px' }}>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Centered navigation links */}
                    <Nav className="m-auto" style={{ display: 'flex' }}>
                        <Nav.Link as={Link} to="/" style={{ color: '#000000' }}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" style={{ color: '#000000' }}>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" style={{ color: '#000000' }}>
                            Contact
                        </Nav.Link>
                        <Nav.Link as={Link} to="/orderpage" style={{ color: '#000000' }}>
                            Order
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login" style={{ color: '#000000' }}>
                            Login
                        </Nav.Link>
                        <Nav.Link as={Link} to="/privacyPolicy" style={{ color: '#000000' }}>
                            Privacy Policy
                        </Nav.Link>
                        <Nav.Link as={Link} to="/notification" style={{ color: '#000000' }}>
                            Notification
                        </Nav.Link>
                    </Nav>



                    <Nav className="ml-auto" style={{ display: 'flex' }}>

                    {isLogin && userName==="Admin"?(
                        <Nav.Link as={Link} to="/adminpanel" style={{margin:"2px"}}>
                            Admin Panel
                        </Nav.Link>
                    ):
                    null
                    }
                                                                        
                        <Nav>

                            <NavDropdown title={
                                <>
                                    {userName}
                                    <img src={account} alt="myaccount" style={{ width: "30px" }} />
                                </>

                            } id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/UserAccount">My Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/orderpage">Your Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/history">Your history</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav.Link as={Link} to={`/ProductCart/${id}`} style={{ color: '#000000', marginLeft: '10px' }}>
                            <img src={cart} alt="Cart" style={{ marginRight: '5px', width: '30px' }} />
                            Cart
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;
