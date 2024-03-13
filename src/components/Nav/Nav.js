import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/logo.png";
import styles from "./Nav.css"; // Ensure that the file is named Nav.module.css

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className={styles.logo} alt="Rogaland Marine logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded((expanded) => !expanded)}
        >
          <FontAwesomeIcon
            icon={expanded ? faTimes : faBars}
            className="white-icon"
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={() => setExpanded(false)}>
              Hjem
            </Nav.Link>
            <Nav.Link href="/about" onClick={() => setExpanded(false)}>
              Om Oss
            </Nav.Link>
            <Nav.Link href="/finn" onClick={() => setExpanded(false)}>
              Finn Annonser
            </Nav.Link>
            <Nav.Link href="/nettbutikk" onClick={() => setExpanded(false)}>
              Nettbutikk
            </Nav.Link>
            <Nav.Link href="/contact" onClick={() => setExpanded(false)}>
              Bestill Time
            </Nav.Link>
            <Nav.Link href="/contact" onClick={() => setExpanded(false)}>
              Verksted
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
