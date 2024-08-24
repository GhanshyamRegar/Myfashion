import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ReviewYourOrder from './ReviewYourOrder';
import SelectPayment from './Selectpayment';
import { Container, ProgressBar, Card, Row, Col, Button } from 'react-bootstrap';
import Qrcode from './Qrcode';
import 'bootstrap/dist/css/bootstrap.min.css';

const Buynow = ({ userName, productid, userId, size, image }) => {
    const navigate = useNavigate();

    const [address, setAddress] = useState("");
    const [deliverydate, setdeliverydate] = useState("");
    const [progress, setprogress] = useState(33);
    const [productname, setProductname] = useState("");
    const [paymentmethod, setPaymentmethod] = useState("");
    const [producttotalprice, setProducttotalprice] = useState(0);

    useEffect(() => {
        if (!userId) {
            alert("Login first");
            console.log("You are not logged in");
            navigate("../");
        }
        const deliverydatehandler = () => {
            try {
                const today = new Date();
                const deliveryDate = new Date(today);
                deliveryDate.setDate(today.getDate() + 7); // Add 7 days to the current date
        
                const formattedDate = ` ${deliveryDate.getFullYear()}-${String(deliveryDate.getMonth() + 1).padStart(2, '0')}-${String(deliveryDate.getDate()).padStart(2, '0')}`;
                
                setdeliverydate(formattedDate)
                console.log(formattedDate); // Output the formatted delivery date
                return formattedDate;
            } catch (err) {
                console.log("Error: " + err);
            }
        };
        deliverydatehandler()
    }, [userId, navigate]);

    const getProductPrice = (price, name) => {
        setProducttotalprice(price);
        setProductname(name);
    };

    const getAddress = (useraddress) => {
        setAddress(useraddress);
    };

    const payMethod = (method) => {
        setPaymentmethod(method);
    };

    const progressincrease = (newprogress)=>{
        console.log("newprogress")
        console.log(newprogress)
        setprogress(newprogress)
    }


    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Buy Now</h1>
            <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="d-flex flex-column align-items-center">
                    <div className="circle bg-secondary text-white">1</div>
                    <h6>Review</h6>
                </div>
                <div className="line mx-3"></div>
                <div className="d-flex flex-column align-items-center">
                    <div className="circle bg-secondary text-white">2</div>
                    <h6>Select payment method</h6>
                </div>
                <div className="line mx-3"></div>
                <div className="d-flex flex-column align-items-center">
                    <div className="circle bg-secondary text-white">2</div>
                    <h6>Pay</h6>
                </div>
            </div>
            <ProgressBar now={progress} className="mb-4" />

            <Card className="mb-4">
                <Card.Body>
                    <Card.Text>
                        <i className="bi bi-truck"></i>
                         Estimated delivery date  
                         {deliverydate}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Routes>
                <Route 
                    index 
                    element={<ReviewYourOrder 
                                image={image} 
                                getaddress={getAddress} 
                                productid={productid} 
                                getproductprice={getProductPrice} />} 
                />
                <Route 
                    path="reviewyourorder" 
                    element={<ReviewYourOrder 
                                image={image} 
                                getaddress={getAddress} 
                                productid={productid} 
                                getproductprice={getProductPrice} />} 
                />
                <Route 
                    path="selectpayment" 
                    element={<SelectPayment 
                                paymethod={payMethod}  
                                productid={productid} 
                                producttotalprice={producttotalprice} 
                                progressincrease={progressincrease}/>} 
                />
                <Route 
                    path="QRcode" 
                    element={<Qrcode 
                                image={image} 
                                size={size} 
                                paymentmethod={paymentmethod} 
                                productname={productname} 
                                userName={userName} 
                                address={address} 
                                userId={userId} 
                                productid={productid} 
                                producttotalprice={producttotalprice}
                                progressincrease={progressincrease} />} 
                />
            </Routes>
        </Container>
    );
};

export default Buynow;
