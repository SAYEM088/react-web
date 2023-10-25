import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card,Image } from 'react-bootstrap';
const About = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-center text-info fs-1 mt-5'>About Us</h1>
                    <p className='text-center fs-3 my-5'>We are a global apparel buying and sourcing company with over 40 years of experience in the textile industry, with production and innovation centres in Bangladesh, Türkiye, India, Pakistan, and Egypt.
                        <br />
                        Over the years, we have developed a range of pioneering solutions for global brands and retailers, while staying true to our mission to combine great product design and quality, with sustainable development, compliance excellence, and design innovation.</p>
                </Col>
            </Row>
            <Row>
            <h1 className='text-center text-info fs-1 mb-5'>Our Global Networks</h1>
                <Col>
                    <Card border="primary" style={{ width: '18rem', height:'18rem', backgroundColor:'rgb(240, 240, 240)'}}>
                        <Card.Header>Pakistan</Card.Header>
                        <Card.Body>
                            <Image style={{ width: '16rem', height:'13rem'}} src='/public/p.jpg'></Image>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="primary"  style={{ width: '18rem', height:'18rem', backgroundColor:'rgb(240, 240, 240)'}}>
                        <Card.Header>Türkiye</Card.Header>
                        <Card.Body>
                        <Image style={{ width: '16rem', height:'13rem'}} src='/public/t.png'></Image>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="primary" style={{ width: '18rem', height:'18rem', backgroundColor:'rgb(240, 240, 240)'}}>
                        <Card.Header>Egypt</Card.Header>
                        <Card.Body>
                        <Image style={{ width: '16rem', height:'13rem'}} src='/public/e.png'></Image>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="primary" style={{ width: '18rem', height:'18rem', backgroundColor:'rgb(240, 240, 240)'}}>
                        <Card.Header>India</Card.Header>
                        <Card.Body>
                        <Image style={{ width: '16rem', height:'13rem'}} src='/public/e.png'></Image>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>

    );
};

export default About;