import React from 'react';
import { Nav, Navbar, NavDropdown, Container, Col } from 'react-bootstrap';
import '../Style/Subnavbar.css'; // Import the CSS file

const SubNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="sub-navbar px-5">
      Filters
        <Container>
          <Navbar.Toggle aria-controls="sub-navbar-nav" />
          <Navbar.Collapse id="sub-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Men" id="men-dropdown" className="men-dropdown">
                <div className="dropdown-grid">
                  <Col xs={12}>
                    <NavDropdown.Item href="#men-formal-shirts">Formal Shirts</NavDropdown.Item>
                    <NavDropdown.Item href="#men-casual-shirts">Casual Shirts</NavDropdown.Item>
                    <NavDropdown.Item href="#men-polo-tshirts">Polo T-Shirts</NavDropdown.Item>
                    <NavDropdown.Item href="#men-roundneck-tshirts">Round Neck T-shirts</NavDropdown.Item>
                    <NavDropdown.Item href="#men-graphic-tshirts">Graphic T-Shirts</NavDropdown.Item>
                  </Col>
                  <Col xs={12}>
                    <NavDropdown.Item href="#men-formal-suits">Formal Suits</NavDropdown.Item>
                    <NavDropdown.Item href="#men-wedding-suits">Wedding Suits</NavDropdown.Item>
                    <NavDropdown.Item href="#men-formal-blazers">Formal Blazers</NavDropdown.Item> 
                    <NavDropdown.Item href="#men-casual-blazers">Casual & Party Blazers</NavDropdown.Item>
                    <NavDropdown.Item href="#men-wedding-blazers">Wedding Blazers</NavDropdown.Item>
                  </Col>
                  <Col xs={12}>
                    <NavDropdown.Item href="#men-sweatshirts">Sweatshirts</NavDropdown.Item>
                    <NavDropdown.Item href="#men-jackets">Jackets</NavDropdown.Item>
                    <NavDropdown.Item href="#men-sweaters">Sweaters</NavDropdown.Item>
                    <NavDropdown.Item href="#men-formal-trousers">Formal Trousers</NavDropdown.Item>
                    <NavDropdown.Item href="#men-casual-trousers">Casual Trousers</NavDropdown.Item>
                  </Col>
                  <Col xs={12}>
                    <NavDropdown.Item href="#men-skinny-jeans">Skinny Fit Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#men-slim-jeans">Slim Fit Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#men-regular-jeans">Regular Straight Fit Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#men-tapered-jeans">Classic Tapered Fit Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#men-combos">Combos</NavDropdown.Item>
                  </Col>
                  <Col xs={12}>
                    <NavDropdown.Item href="#men-trackpants">Track Pants</NavDropdown.Item>
                    <NavDropdown.Item href="#men-shorts">Shorts</NavDropdown.Item>
                    <NavDropdown.Item href="#men-kurtas">Kurtas</NavDropdown.Item>
                    <NavDropdown.Item href="#men-nehru-jackets">Nehru Jackets</NavDropdown.Item>
                    <NavDropdown.Item href="#men-briefs">Briefs</NavDropdown.Item>
                  </Col>
                  <Col xs={12}>
                    <NavDropdown.Item href="#men-trunks">Trunks</NavDropdown.Item>
                    <NavDropdown.Item href="#men-vests">Vests</NavDropdown.Item>
                    <NavDropdown.Item href="#men-boxers">Boxers</NavDropdown.Item>
                  </Col>
                </div>
              </NavDropdown>
              <NavDropdown title="Women" id="women-dropdown" className="women-dropdown">
                <div className="dropdown-grid">
                  <Col xs={12}>
                    <NavDropdown.Item href="#women-collections">Collections</NavDropdown.Item>
                    <NavDropdown.Item href="#women-exclusives">Exclusives</NavDropdown.Item>
                  </Col>
                  <Col xs={12}>
                    <NavDropdown.Item href="#women-styledbyand">#StyledbyAND</NavDropdown.Item>
                    <NavDropdown.Item href="#women-bestseller">Bestseller</NavDropdown.Item>
                    <NavDropdown.Item href="#women-workwear">Work Wear</NavDropdown.Item>
                    <NavDropdown.Item href="#women-casualwear">Casual Wear</NavDropdown.Item>
                    <NavDropdown.Item href="#women-eveningwear">Evening Wear</NavDropdown.Item>
                  </Col>
                  <Col xs={12}>
                    <NavDropdown.Item href="#women-winterwear">Winter Wear</NavDropdown.Item>
                    <NavDropdown.Item href="#women-essentials">Everyday Essentials</NavDropdown.Item>
                    <NavDropdown.Item href="#women-gifting">Gifting</NavDropdown.Item>
                  </Col>
                  <Col xs={12}>
                    <NavDropdown.Item href="#women-all">All Women</NavDropdown.Item>
                    <NavDropdown.Item href="#women-newarrivals">New Arrivals</NavDropdown.Item>
                    <NavDropdown.Item href="#women-allclothing">All Clothing</NavDropdown.Item>
                    <NavDropdown.Item href="#women-dresses">Dresses/Jumpsuits</NavDropdown.Item>
                    <NavDropdown.Item href="#women-tops">Tops/Shirts</NavDropdown.Item>
                  </Col>
                  <Col xs={12}>
                    <NavDropdown.Item href="#women-coords">Co-ords Sets</NavDropdown.Item>
                    <NavDropdown.Item href="#women-bottoms">Bottoms</NavDropdown.Item>
                    <NavDropdown.Item href="#women-jackets">Jackets/Blazers</NavDropdown.Item>
                    <NavDropdown.Item href="#women-sweaters">Sweater/Cardigan</NavDropdown.Item>
                  </Col>
                </div>
              </NavDropdown>
              <NavDropdown title="Kids" id="kids-dropdown">
                <Col xs={12}>
                  <NavDropdown.Item href="#kids-boys">Boys</NavDropdown.Item>
                  <NavDropdown.Item href="#kids-girls">Girls</NavDropdown.Item>
                </Col>
                <Col xs={12}>
                  <NavDropdown.Item href="#kids-baby">Baby</NavDropdown.Item>
                </Col>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default SubNavbar;
