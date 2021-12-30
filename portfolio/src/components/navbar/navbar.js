import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "../../assets/resume.pdf";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

function navbar() {
  return (
    <Navbar className="navbar">
      <Container className="container">
        <Navbar.Brand className="navbar name">Katie Gentel</Navbar.Brand>
        <Nav className="justify-content-end nav">
          <Nav.Link href="/about-me" className="navbar">About Me</Nav.Link>
          <Nav.Link href="/projects" className="navbar">Projects</Nav.Link>
          <Nav.Link href="/contact" className="navbar">Contact</Nav.Link>
          <Nav.Link href={Resume} target="_blank" className="navbar">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default navbar;
