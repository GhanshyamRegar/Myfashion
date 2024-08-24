import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Style/HomePage.css';
import BrowsingHistory from './BrowsingHistory';
import Footer from '../Components/Layout/Footer';
import SubNavbar from '../Components/Layout/Subnavbar';
import ProductCard from './ProductCard';


const mystyle = {
    backgroundColor: "#f1b9b9",
}

const Home = ({userId}) => {
    return (
        <div style={mystyle}>
            <br />
            <SubNavbar />
            <br />
            <ProductCard  userId={userId} />
            <br />


            <div className="landscape-container">
                <Container fluid className="h-100">
                    <Row className="h-100">
                        <Col md={8} className="h-100">
                            {/* Content for 70% partition */}
                            <div className="left-partition h-100">
                                {/* Your content here */}
                            </div>
                        </Col>
                        <Col md={4} className="h-100">
                            {/* Content for 30% partition */}
                            <div className="right-partition h-100">
                                {/* content */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <BrowsingHistory userId={userId}/>
            </div>

            <div>
                <br />
                <br />
                <Footer />
            </div>

        </div>
    );
}

export default Home;
