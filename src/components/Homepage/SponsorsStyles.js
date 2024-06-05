import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-260px * 14)); /* Adjust for padding */
  }
`;

export const SponsorSection = styled.div`
  text-align: center;
  overflow: hidden;
  background: #f8f9fa; /* Light background color */
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  padding: 20px 0;
  position: relative;
  width: 100%;
  margin: auto;

  &::before,
  &::after {
    background: linear-gradient(
      to right,
      #f8f9fa 0%,
      rgba(248, 249, 250, 0) 100%
    );
    content: "";
    height: 100px;
    position: absolute;
    width: 100px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
`;

export const SlideTrack = styled.div`
  display: flex;
  animation: ${scroll} 30s linear infinite; /* Default animation speed */
  width: calc(260px * 28); /* Adjust for padding and duplicated logos */

  @media (max-width: 1200px) {
    animation-duration: 40s; /* Slower animation for smaller screens */
  }

  @media (max-width: 768px) {
    animation-duration: 50s; /* Even slower animation for smaller screens */
  }

  @media (max-width: 576px) {
    animation-duration: 60s; /* Slowest animation for the smallest screens */
  }
`;

export const Slide = styled.div`
  height: 100px;
  width: 250px;
  padding: 0 10px; /* Add padding between logos */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Slightly enlarge the logo on hover */
  }
`;

export const SponsorLogo = styled.img`
  height: 80px; /* Reduced height for better alignment */
  width: auto;
  padding: 10px;
`;
