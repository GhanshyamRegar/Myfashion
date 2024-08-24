import React from 'react';
import { Container, Row, Col, Form, Nav } from 'react-bootstrap';

import ProductForm from './ProductForm';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Usermanage from './Usermanage/Usermanage';
import Ordermanage from './Ordermanage/Ordermanage';
import Customersupport from './Customer/Customersupport';

const AdminPanel = ({ userName }) => {

    return (
        <div>
            {/* {
                userName === "Admin" ?
                    ( */}
                        <div>

                            Admin Panel


                            <Container>
                                <Row className="my-4">
                                    <Col>
                                        <h1>Admin Dashboard</h1>
                                    </Col>
                                </Row>
                                
                                <Row className="my-4">
                                    <Col>
                                        <Nav variant="tabs" defaultActiveKey="Dashboard">
                                            <Nav.Item>
                                                <Nav.Link as={Link} to="Dashboard">Dashboard</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link as={Link} to="user-management">User Management</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link as={Link} to="order-management">Order Management</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link as={Link} to="customer-support">Customer Support</Nav.Link>
                                            </Nav.Item>
                                          
                                        </Nav>
                                    </Col>
                                </Row>
                                <Routes>
                                    <Route index element={<Dashboard />} />
                                    <Route path="/Dashboard" element={<Dashboard />} />
                                    <Route path="/user-management" element={<Usermanage />} />
                                    <Route path="/order-management" element={<Ordermanage />} />
                                    <Route path="/customer-support" element={<Customersupport />} />
                                </Routes>
                            </Container>
                        </div>
                    {/* ):
                    alert("You are not Admin")
            } */}
        </div>

    );
}

export default AdminPanel;









