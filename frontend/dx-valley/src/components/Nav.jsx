import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function NavigationBar() {
  return (
    <header>
      <Navbar expand="lg" variant="light" className="bg-gradient-secondary">
        <Navbar.Brand href="index.html" className="text-white">Dx-Valley</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ml-lg-auto text-center">
            <Nav.Link href="index.html" className="active mr-lg-3">Home<span className="sr-only">(current)</span></Nav.Link>
            <Nav.Link href="#register" className="scroll mr-lg-3 mt-lg-0 mt-3">About Us</Nav.Link>
            <Nav.Link href="#services" className="scroll mr-lg-3 mt-lg-0 mt-3">Project</Nav.Link>
            <Nav.Link href="#process" className="scroll mb-lg-0 mb-3">How we work</Nav.Link>
            <Nav.Link href="#contact" className="scroll mb-lg-0 mb-3">Contact</Nav.Link>
            <Button variant="secondary" className="ml-lg-2 w3ls-btn" data-toggle="modal" data-target="#exampleModal">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavigationBar;