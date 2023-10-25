import React from 'react';
import { Link} from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar expand="lg" style={{ backgroundColor:'rgb(166, 246, 255)' }}>
        <Container className='d-flex'>
        <Navbar.Brand className='fs-1 fw-bolder text-primary'><Image style={{ width: '3rem', height: '3rem' }} src='/public/letter-n.png' roundedCircle></Image>Bd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-4 ms-auto p-2">
          <ActiveLink to='/'>Home</ActiveLink>
          <ActiveLink to ='/gallery'>Gallery</ActiveLink> 
          <ActiveLink to='/about'>About</ActiveLink>
            <ActiveLink to='/contact'>Contact</ActiveLink>     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    );
};

export default Header;