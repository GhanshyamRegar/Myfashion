import React from 'react'
import { Accordion, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

const Help = () => {
  return (
    <Container>
      <Row className='my-2'>
        <h5>
          My Fashion Help Center | 24x7 Customer Care Support
        </h5>
      </Row>
      <Row>
        <p>

          The My Fashion Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The My Fashion Help Centre also lists out more information that you may need regarding My Fashion Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the My Fashion Help Centre number or even access My Fashion Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable. You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online. This information is updated on 12-Jun-24
        </p>
      </Row>
      <Container fluid>
        <Row>
          <Col md={3} >
            <h4>TYPE OF ISSUE</h4>
            <ListGroup>
              <ListGroup.Item>Help with your issues</ListGroup.Item>
              <ListGroup.Item>Help with your order</ListGroup.Item>
              <ListGroup.Item>Help with other issues</ListGroup.Item>
            </ListGroup>
            <h4 className="mt-4" >HELP TOPICS</h4>
            <ListGroup>
              <ListGroup.Item>Delivery related</ListGroup.Item>
              <ListGroup.Item>Login and my account</ListGroup.Item>
              <ListGroup.Item>Refunds related</ListGroup.Item>
              <ListGroup.Item>Flipkart Pay Later</ListGroup.Item>
              <ListGroup.Item>Payment</ListGroup.Item>
              <ListGroup.Item>Returns & Pickup related</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={9}>
            <Row className="w-100 border min-vh-100 ">
              <Col  >
                <Container className="mt-4">
                  <h2>Frequently asked questions</h2>


                  <Accordion defaultActiveKey="0">
                    <Card>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header >
                          I want to change the address for delivery of my order. Is it possible now?
                        </Accordion.Header>
                        <Accordion.Body >
                          <Card.Body>
              The delivery address for your order can be changed depending on its status. Please check Orders `{`>`}` Order Details for the below:
                            <ul>
                              <li><strong>Approved/Processing:</strong> If this is your order status, then you can change the address through your Flipkart app.</li>
                              <li><strong>Shipped:</strong> Only text change in your address will be possible. Pincode cannot be changed at this stage.</li>
                              <li><strong>Delivered:</strong> As the item would have already been delivered, the address change will not be possible.</li>
                            </ul>
                          </Card.Body>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Card>
                    <Card>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header as={Card.Header} eventKey="1">
                        How can I modify/add an alternate number for the order delivery?
                      </Accordion.Header>
                      <Accordion.Body eventKey="1">
                        <Card.Body>
                          You can modify the existing delivery contact number or add an alternate one with these simple steps:
                          <ol>
                            <li>Go to Orders</li>
                            <li>Select the desired 'Order'</li>
                            <li>Scroll down and go to shipping details tab and tap 'Edit' (Pen) option next to the phone number</li>
                          </ol>
                        </Card.Body>
                      </Accordion.Body>
                      </Accordion.Item>
                    </Card>
                    <Card>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header as={Card.Header} eventKey="2">
                        Can I get my orders delivered at a specific time?
                      </Accordion.Header>
                      <Accordion.Body eventKey="2">
                        <Card.Body>
                          Orders for a few items from certain categories like large appliances, furniture and exercise & fitness categories can be delivered at specific time slots by the sellers' partnered courier service providers:
                          You can choose your preferred time slot from the list of available ones while placing your order. For other items, the seller's partnered courier service providers currently do not support delivery at a specific time due to their varying delivery schedules.
                        </Card.Body>
                      </Accordion.Body>
                      </Accordion.Item>
                    </Card>
                    <Card>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header as={Card.Header} eventKey="3">
                        Where can I get the delivery executive's contact details?
                      </Accordion.Header>
                      <Accordion.Body eventKey="3">
                        <Card.Body>
                          Once your order is ‘Out for delivery’, you will get the delivery executive details by visiting the Orders section of your Flipkart account.
                        </Card.Body>
                      </Accordion.Body>
                    </Accordion.Item>
                    </Card>
                    <Card>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header as={Card.Header} eventKey="4">
                        Can I get my order delivered faster?
                      </Accordion.Header>
                      <Accordion.Body eventKey="4">
                        <Card.Body>
                          No, the delivery date you see after the order confirmation is provided is based on factors like your address, the seller's address and the time needed by couriers to process and ship your order. Due to these factors, they do not have the option to change the delivery date and have it reach you earlier. However, you can track your order and its movement easily from our app or website.
                        </Card.Body>
                      </Accordion.Body>
                      </Accordion.Item>
                    </Card>
                    <Card>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header as={Card.Header} eventKey="5">
                        Can I reinstate a cancelled order?
                      </Accordion.Header>
                      <Accordion.Body eventKey="5">
                        <Card.Body>
                          No, a cancelled order can not be reinstated.
                        </Card.Body>
                      </Accordion.Body>
                    </Accordion.Item>
                    </Card>
                  </Accordion>
                </Container>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Help
