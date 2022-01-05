import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "../../assets/resume.pdf";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

function navbar() {
  return (
    <Navbar className="navbar" sticky="top">
      <Container className="container">
        <Nav.Link className="navbar name" href="#home">Katie Gentel</Nav.Link>
        <Nav className="justify-content-end nav">
          <Nav.Link href="#about_me" className="navbar pulse">About Me</Nav.Link>
          <Nav.Link href="#projects" className="navbar pulse">Projects</Nav.Link>
          <Nav.Link href="#contact" className="navbar pulse">Contact</Nav.Link>
          <Nav.Link href={Resume} target="_blank" className="navbar pulse">Resume</Nav.Link>
        </Nav>
     
      </Container>
    </Navbar>
  );
}

export default navbar;
