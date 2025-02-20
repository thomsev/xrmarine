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
  min-height: 100vh;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.7)
    ),
    url("../Assets/bakgrunn4.webp") no-repeat center center;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(4px); /* optional "frosted" effect */
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  .container {
    padding: 60px 0;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .col-md-4 {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 16px;
    overflow: hidden;
    color: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    /* Fixed-size on desktop */
    width: 400px;
    height: 280px;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(31, 38, 135, 0.4);
    }

    @media (max-width: 767px) {
      width: 90%;
      height: auto; /* Let it grow on small screens */
    }

    .card-image {
      width: 100%;
      height: 160px; /* portion of the total 280px height */
      object-fit: cover;
      display: block;
    }

    .glass-body {
      /* We have 280 - 160 = 120px left for this area */
      height: calc(100% - 160px);
      padding: 10px 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .glass-title {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 5px;
      }

      .glass-text {
        font-size: 0.9rem;
        line-height: 1.4;
        margin-bottom: 10px;
      }

      /* Reserve space for the button 
         by not removing it from the layout, just make it invisible initially. */
      .glass-btn {
        /* Invisible but still takes up space */
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease, visibility 0.3s ease;

        background-color: #2196f3;
        color: #fff;
        border: none;
        padding: 8px 20px;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
          background-color: #1976d2;
        }
      }
    }

    /* On hover, reveal the button */
    &:hover .glass-btn {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
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
