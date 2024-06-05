import { createGlobalStyle } from "styled-components";
import BgImage from "../components/Assets/bakgrunn4.webp";
const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-image: url(${BgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    position: relative;
  }

  body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 4rem; /* Adjust as necessary for your design */
  }

  .modal-dialog {
    margin-top: 8rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .modal-content {
    padding: 1rem;
  }

  .form-control {
    margin-bottom: 1rem;
    border-radius: 5px;
    width: 100%;
    max-width: 100%;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  .invalid-feedback {
    display: block;
    color: red;
    margin-top: -1rem;
    margin-bottom: 1rem;
  }

  .modal-header,
  .modal-footer {
    border-bottom: none;
    border-top: none;
    background: rgba(0, 0, 0, 0.1);
  }

  .modal-title {
    color: #007bff;
  }

  [type="submit"] {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-top: 1rem;
  }

  .modal-footer .btn-secondary {
    background-color: #6c757d;
    color: white;
  }

  .modal-body {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    .modal-dialog {
      margin-top: 2rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }

    body {
      background-attachment: scroll;
      background-size: auto 100%;
    }
  }
`;

export default GlobalStyles;
