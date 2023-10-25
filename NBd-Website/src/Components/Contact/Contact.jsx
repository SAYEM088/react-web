import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
const Contact = () => {
    return (
        <Container>
            <Row><Col className='text-center my-5 fs-1'>
                <h1>Meet Our Founder</h1></Col></Row>
            <Row>
                <Col xs={12} md={3} className='my-5 py-5'>
                <Image src='/public/Md-Bazlul-Mobin-Siddique.jpg' rounded></Image>
                </Col>
                <Col xs={12} md={7} className='my-5 py-5'>
                <h3>Mr. Naveed Nahdeem Siddiqui</h3>
                <h5 className='text-secondary'>Chairman & CEO</h5>
                <p>Born in the picturesque coastal city of Chittagong, Bangladesh, Mr. Naveed Nahdeem Siddiqui has carved an extraordinary path in the world of business and leadership. With unwavering determination and a relentless pursuit of excellence, he has emerged as a prominent figure in the corporate world. In 2006, Naveed Nahdeem Siddiqui founded N.Bd, a dynamic and innovative organization that has left an indelible mark in the industry. Under his visionary guidance, the company has achieved remarkable success and is at the forefront of Garments Industries.<br />
                </p>
                </Col>
            </Row>
            <div>
                <p className=' fs-3 fw-semibold'> * Notice:</p>
           <p className='text-decoration-none fs-4 fw-bold'>i. <a  className='text-decoration-none fs-5 fw-bold' href="https://forms.gle/EfLLarT1EZp1Vt5WA">Director of Administration and Compliance -form</a></p> 
        </div>
        </Container>
        
    );
};

export default Contact;