import styled from "styled-components";
import { Button, Alert } from "react-bootstrap"; // Import Button and Alert from react-bootstrap
import { Form } from "formik"; // Import Form from formik
export const ContactWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 4rem;
  width: 100%;
`;

export const ContactSection = styled.div`
  background: rgba(255, 255, 255, 0.9);
  margin: 1rem auto;
  margin-top: 7rem;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #007bff;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
    font-weight: bold;
  }

  .form-control {
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    padding: 0.5rem;
    font-size: 1rem;
  }

  .text-danger {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

export const StyledButton = styled(Button)`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s, border-color 0.2s;

  &:hover,
  &:focus {
    background-color: #0056b3;
    border-color: #004085;
  }
`;

export const StyledAlert = styled(Alert)`
  margin-top: 1rem;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;
