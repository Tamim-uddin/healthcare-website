import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link,  } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import UseAuth from '../../Hooks/UseAuth';
import './Header.css';

const Header = () => {
  const {user, logOut } = UseAuth();
    return (
        <div className="header-container">           
              <>
                <Navbar bg="day" variant="day" sticky="top" collapseOnSelect expand="lg">
                  <Container>
                  <Navbar.Brand href="#home" className='nav-text'>Medizoid</Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                      <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                      <Nav.Link as={HashLink} to="/home#contactus">Contact Us</Nav.Link>
                      
                      { user?.email ?
                        <Button onClick={logOut} variant="warning" className='logout-btn'>LogOut</Button>:
                      <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                      <Navbar.Text>
                      Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </>


            </div>
        
    );
};

export default Header;