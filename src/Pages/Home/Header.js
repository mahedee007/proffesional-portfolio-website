import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import img from '../../Images/mh-logo3.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand><img src={img} width="250" height="150" alt="logo"/> </Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Skills">Skills</Nav.Link>
      <Nav.Link href="#Projects">Projects</Nav.Link>
      <Nav.Link href="#Contacts">Contact-Me</Nav.Link>
      <Nav.Link href="#Hire">Hire me</Nav.Link>
      <Nav.Link href="#Download">Download Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;