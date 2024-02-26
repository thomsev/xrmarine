import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../Assets/logo.png"; // Tell Webpack this JS file uses this image

import styles from "./Nav.css"; // Import module styles

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            className={styles.logo} // Use the class from your CSS module
            alt="Rogaland Marine logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Hjem</Nav.Link>
            <Nav.Link href="/about">Om Oss</Nav.Link>
            <Nav.Link href="/finn">Finn Annonser</Nav.Link>
            <Nav.Link href="/contact">Nettbutikk</Nav.Link>
            <Nav.Link href="/contact">Bestill Time</Nav.Link>
            <Nav.Link href="/contact">Verksted</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
