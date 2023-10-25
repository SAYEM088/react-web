import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Landing.css'
const Landing = () => {
  return (
    <Container fluid >
      <Row className='my-md-5 mx-sm-4 py-md-5'>
        <Col xs={18} md={6} >
          <div className="fs-1">
            <h1>Your Global, <br /> Local Partner for Sustainable Apparel</h1>
          </div>
          <div className="fs-4 my-5 text-secondary">
            <p>We offer sustainable apparel product development and specialised global sourcing strategies, combined with compliance excellence and intuitive customer service. <br />We strive to always bring newness and innovation to our work, offering an extensive multi-category product range, manufactured in over 100 fully compliant partner factories.</p>
          </div>
          <Button variant="info text-light fw-semibold">Product and Services</Button>
        </Col>
        <Col ><Image style={{ width: '200rem', height: '45rem',padding:'1rem '}} src='/public/logo.jpg' fluid rounded></Image></Col>
      </Row>
      
    </Container>
  );
};

export default Landing;