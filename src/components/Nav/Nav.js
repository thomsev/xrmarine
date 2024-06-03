import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/logo.png";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  position: absolute;
  z-index: 999;
  width: 100%;

  .navbar-nav .nav-link {
    font-size: 1.66rem;
    font-weight: 700;
    color: #fff;
    margin-right: 10px;
    transition: color 0.3s ease, text-decoration 0.3s ease;
    text-decoration: none;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

    &:hover,
    &:focus {
      color: #ffffff;
      text-decoration: underline;
    }

    &.active {
      color: #aaddff;
      font-weight: bold;
      text-decoration: underline;
    }
  }

  .navbar-brand {
    font-size: 1.5rem;
    color: #fff;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #ccefff;
      text-decoration: none;
    }

    img {
      width: 380px;
      height: auto;
      transition: width 0.3s ease;
    }
  }

  @media (max-width: 991px) {
    .navbar-collapse {
      background-color: rgba(255, 255, 255, 0.8);
      padding: 0;
      margin: 0;
      width: 100vw;
      top: 56px;
      z-index: 999;
    }

    .white-icon {
      color: white;
      cursor: pointer;
      font-size: 2.2rem;
    }

    .navbar-toggler {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem 0.75rem;
    }

    .navbar-toggler-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    }

    .navbar-nav .nav-link {
      background-color: rgba(30, 144, 255, 0.8);
      color: #ffffff;
      padding: 10px 15px;
      margin: 0;
      width: 100%;

      &:hover,
      &:focus {
        background-color: rgba(30, 144, 255, 1);
      }
    }

    .navbar-brand img {
      width: 275px;
    }

    @media (max-width: 374px) {
      .navbar-brand img {
        width: 100px;
      }
    }

    @media (max-width: 320px) {
      .navbar-brand img {
        width: 100px;
      }
    }
  }
`;

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledNavbar
      bg="transparent"
      variant="dark"
      expand="lg"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Rogaland Marine logo" />
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
            <Nav.Link href="/booking" onClick={() => setExpanded(false)}>
              Bestill Time
            </Nav.Link>
            <Nav.Link href="/verksted" onClick={() => setExpanded(false)}>
              Verksted
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default Navigation;
