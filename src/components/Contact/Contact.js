import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  ContactWrapper,
  ContactSection,
  Title,
  FormGroup,
  StyledButton,
  StyledAlert,
  StyledForm,
} from "./ContactStyles";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(10, "Message too short!").required("Required"),
});

const Contact = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <ContactWrapper>
      <ContactSection>
        <Title>Kontakt Us</Title>
        {showThankYou && (
          <StyledAlert variant="success">
            Takk for din melding! Vi vil svare deg så snart som mulig.
          </StyledAlert>
        )}
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={contactSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            setShowThankYou(true);
            // Simulate an API call
            setTimeout(() => {
              setShowThankYou(false);
            }, 5000); // Hide the message after 5 seconds
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <FormGroup className="form-group">
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" className="form-control" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </FormGroup>

              <FormGroup className="form-group">
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </FormGroup>

              <FormGroup className="form-group">
                <label htmlFor="message">Message</label>
                <Field
                  name="message"
                  as="textarea"
                  rows="5"
                  className="form-control"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-danger"
                />
              </FormGroup>

              <StyledButton
                type="submit"
                variant="primary"
                disabled={isSubmitting}
              >
                Submit
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
      </ContactSection>
    </ContactWrapper>
  );
};

export default Contact;
