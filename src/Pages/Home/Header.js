import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light"  >
    <Container>
    <Navbar.Brand className='text-light'>Mahedee Hasan </Navbar.Brand>
    <Navbar.Toggle className='bg-light' aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className='text-light' href="#home">Home</Nav.Link>
      <Nav.Link className='text-light' href="#Skills">Skills</Nav.Link>
      <Nav.Link className='text-light' href="#Projects">Projects</Nav.Link>
      <Nav.Link className='text-light' href="#Contacts">Contact-Me</Nav.Link>
      <Nav.Link className='text-light' href="#Hire">Hire me</Nav.Link>
      <Nav.Link className='text-light' href="#Download">Download Resume</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;