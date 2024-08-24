import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PrivacyPolicy = () => {
    return (
        <Container style={{ marginTop: '20px' }}>
            <Row className="justify-content-center">
                <Col md={10}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Privacy Policy</Card.Title>
                            <Card.Text>
                                <p>Welcome to My Fashion!</p>
                                <p>Your privacy is critically important to us. My Fashion is located at:</p>
                                <p>
                                    My Fashion<br />
                                    123 Fashion Street<br />
                                    Fashion City, FC 12345<br />
                                    USA
                                </p>
                                <p>
                                    It is My Fashion’s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="https://www.myfashion.com">www.myfashion.com</a> (hereinafter, "us", "we", or "www.myfashion.com"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties.
                                </p>
                                <h5>Website Visitors</h5>
                                <p>
                                    Like most website operators, My Fashion collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. My Fashion’s purpose in collecting non-personally identifying information is to better understand how My Fashion’s visitors use its website. From time to time, My Fashion may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.
                                </p>
                                <h5>Gathering of Personally-Identifying Information</h5>
                                <p>
                                    Certain visitors to My Fashion’s websites choose to interact with My Fashion in ways that require My Fashion to gather personally-identifying information. The amount and type of information that My Fashion gathers depend on the nature of the interaction. For example, we ask visitors who sign up for a blog at <a href="https://www.myfashion.com/blog">https://www.myfashion.com/blog</a> to provide a username and email address.
                                </p>
                                <h5>Security</h5>
                                <p>
                                    The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                                </p>
                                <h5>Advertisements</h5>
                                <p>
                                    Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by My Fashion and does not cover the use of cookies by any advertisers.
                                </p>
                                <h5>Privacy Policy Changes</h5>
                                <p>
                                    Although most changes are likely to be minor, My Fashion may change its Privacy Policy from time to time, and in My Fashion’s sole discretion. My Fashion encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
                                </p>
                                <p>
                                    If you have any questions about this Privacy Policy, please contact us via <a href="mailto:support@myfashion.com">email</a> or phone.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PrivacyPolicy;
