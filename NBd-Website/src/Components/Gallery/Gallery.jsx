import React from 'react';
import { Card,Image,Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Gallery = () => {
    return (
        <Container className='my-2'>
            <Row className='my-3'>
                <Col xs={10} md={3}>
                    <Card border="primary" style={{ width: '20rem', height: '25rem',backgroundColor:'rgb(236, 249, 255)' }}>
                        <Card.Header>#A045</Card.Header>
                        <Card.Body>
                                <Image style={{ width: '18rem', height: '20rem' }} src='/public/8.jpeg'  rounded></Image>  
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={10} md={3}>
                    <Card border="secondary" style={{ width: '20rem', height: '25rem' ,backgroundColor:'rgb(205, 245, 253)'}}>
                        <Card.Header>#C208</Card.Header>
                        <Card.Body>
                        <Image style={{ width: '18rem', height: '20rem' }} src='/public/10.jpeg'  rounded></Image> 
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={10} md={3} ><Card border="success" style={{ width: '20rem', height: '25rem' }}>
                    <Card.Header>#E221</Card.Header>
                    <Card.Body>
                    <Image style={{ width: '18rem', height: '20rem' }} src='/public/11.jpeg'  rounded></Image> 
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={10} md={3} >
                    <Card border="success" style={{ width: '20rem', height: '25rem',backgroundColor:'rgb(236, 249, 255)' }}>
                        <Card.Header >#T663</Card.Header>
                        <Card.Body>
                        <Image style={{ width: '18rem', height: '20rem' }} src='/public/6.jpeg'  rounded></Image> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={10} md={3}>
                    <Card border="warning" style={{ width: '20rem', height: '25rem',backgroundColor:'rgb(247, 230, 196)'}}>
                        <Card.Header>#P989</Card.Header>
                        <Card.Body>
                        <Image style={{ width: '18rem', height: '20rem' }} src='/public/9.jpeg'  rounded></Image> 
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={10} md={3}>
                    <Card border="secondary" style={{ width: '20rem', height: '25rem' }}>
                        <Card.Header>#Y733</Card.Header>
                        <Card.Body>
                        <Image style={{ width: '18rem', height: '20rem' }} src='/public/3.jpeg'  rounded></Image> 
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={10} md={3} ><Card border="info" style={{ width: '20rem', height: '25rem' }}>
                    <Card.Header>#W331</Card.Header>
                    <Card.Body>
                    <Image style={{ width: '18rem', height: '20rem' }} src='/public/13.jpeg'  rounded></Image> 
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={10} md={3}>
                    <Card border="dark" style={{ width: '20rem', height: '25rem' ,backgroundColor:'rgb(236, 249, 255)' }}>
                        <Card.Header>#E776</Card.Header>
                        <Card.Body>
                        <Image style={{ width: '18rem', height: '20rem' }} src='/public/2.jpeg'  rounded></Image> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
};

export default Gallery;