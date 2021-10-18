import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            
            


<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/home#doctors">Doctors</Nav.Link>
      <Nav.Link as={Link} to="/home#contactus">Contact Us</Nav.Link>
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 </>


            </div>
        
    );
};

export default Header;