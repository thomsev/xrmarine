import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #222;
  color: #ddd;
  padding: 2rem 0;
  font-size: 0.9rem;
  margin-top: 0;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const FooterNav = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    order: 1;
  }
`;

const FooterLink = styled(Link)`
  color: #bbb;
  margin: 0 15px;
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: #fff;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #007bff;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
  }
`;

const FooterCopy = styled.p`
  color: #666;
  margin-top: 1rem;

  @media (min-width: 768px) {
    order: 2;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterNav>
          <FooterLink to="/">Hjem</FooterLink>
          <FooterLink to="/venues">Veibeskrivelse</FooterLink>
          <FooterLink to="/venues">Tilbud</FooterLink>
          <FooterLink to="/about">Om-Oss</FooterLink>
          <FooterLink to="/contact">Kontakt</FooterLink>
        </FooterNav>
        <FooterCopy>© Rogaland Marine AS. All rights reserved.</FooterCopy>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
