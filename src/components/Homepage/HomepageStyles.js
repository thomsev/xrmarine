import styled from "styled-components";
import BgSectionImg from "../Assets/bakgrunn.webp";

export const BackgroundImageSection = styled.div`
  position: relative;
  background: url(${BgSectionImg}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  h1 {
    color: #ffffff;
    font-size: 6em;
    font-weight: 999;
    margin: 0 0 20px;
    padding: 0;
    margin-top: -50px;
    transition: transform 0.3s ease-out, font-size 0.3s ease-out;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 1);

    @media (max-width: 1200px) {
      font-size: 3.5em;
    }

    @media (max-width: 992px) {
      font-size: 3.5em;
      margin-top: 200px;
    }

    @media (max-width: 768px) {
      font-size: 3.2em;
      margin-top: 100px;
    }

    @media (max-width: 576px) {
      font-size: 3em;
      margin-top: 100px;
    }

    @media (max-width: 375px) {
      font-size: 2.4em;
      margin-top: 100px;
    }
  }

  h3 {
    color: #ffffff;
    font-size: 3em;
    font-weight: 800;
    margin: 0 0 20px;
    padding: 0;
    transition: transform 0.3s ease-out, font-size 0.3s ease-out;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 1);

    @media (max-width: 1200px) {
      font-size: 2em;
    }

    @media (max-width: 992px) {
      font-size: 2em;
      margin-top: 250px;
    }

    @media (max-width: 768px) {
      font-size: 1.8em;
      margin-top: 100px;
    }

    @media (max-width: 576px) {
      font-size: 1.5em;
      margin-top: 100px;
    }

    @media (max-width: 375px) {
      font-size: 1.2em;
      margin-top: 100px;
    }
  }
`;

export const CardSection = styled.div`
  position: relative;
  background: url("../Assets/bakgrunn4.webp") no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }

  .card {
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      height: 200px;
      object-fit: cover;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;

      @media (max-width: 768px) {
        height: auto;
        width: 100%;
        max-height: 200px;
      }
    }

    .card-body {
      padding: 20px;
    }

    .card-title {
      color: #007bff;
      font-weight: 600;
      margin-bottom: 15px;
      font-size: 1.5rem;
    }
  }
`;

export const SponsorSection = styled.div`
  text-align: center;
  .sponsor-logo {
    max-width: 100%;
    height: auto;
  }
`;
