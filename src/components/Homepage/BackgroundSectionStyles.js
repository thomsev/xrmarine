import styled from "styled-components";

export const BackgroundVideoSection = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  overflow: hidden;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

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

  .text-wrapper {
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

  .button-wrapper {
    margin-top: 20px;
    display: flex;
    gap: 20px;
    justify-content: center;

    @media (max-width: 768px) {
      justify-content: center;
    }

    button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 1.2em;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
      width: 30%;

      &:hover {
        background-color: #0056b3;
      }

      @media (max-width: 576px) {
        width: 30%;
        padding: 15px;
        font-size: 1em;
      }
    }
  }
`;
