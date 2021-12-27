import React from "react";
import './Header.css';
import { Nav, Navbar, Container} from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="header_bg" variant="dark">
      <Container>
        <Navbar.Brand className="logo" href="#home">Mahedee Hasan</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto px-5 nav-list">
            <Nav.Link className="menu-item" to="#about">About me</Nav.Link>
            <Nav.Link className="menu-item" to="#contact">Contact</Nav.Link>
            <Nav.Link className="menu-item" to="#portfolio">Portfolio</Nav.Link>
            <Nav.Link  href="https://drive.google.com/file/d/152EM8tdM58htSYxS-CJQ9j0mNtU_XUFh/view?usp=sharing#pricing" className=" menu-item" target= "_blank" download>Download Resume</Nav.Link>
            <Nav.Link href="https://www.fiverr.com/share/ZNLZbj" target="_blank" className=" menu-item">Hire me</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
