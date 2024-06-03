import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import {
  BookingWrapper,
  BookingSection,
  Title,
  FormGroup,
  StyledButton,
  StyledDatePicker,
} from "./BookingStyles";

const BookingSchema = Yup.object().shape({
  service: Yup.string().required("Required"),
  date: Yup.date().required("Required").nullable(),
  time: Yup.string().required("Required"),
  notes: Yup.string(),
});

const Booking = () => {
  return (
    <BookingWrapper>
      <BookingSection>
        <Title>Book a Time at Our Workshop</Title>
        <Formik
          initialValues={{
            service: "",
            date: null,
            time: "",
            notes: "",
          }}
          validationSchema={BookingSchema}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          {({ setFieldValue, values, isSubmitting }) => (
            <Form>
              <FormGroup>
                <label htmlFor="service">Service Required</label>
                <Field as="select" name="service" className="form-control">
                  <option value="">Select a Service</option>
                  <option value="repair">Repair</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="inspection">Inspection</option>
                </Field>
                <ErrorMessage
                  name="service"
                  component="div"
                  className="invalid-feedback"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="date">Date</label>
                <StyledDatePicker
                  selected={values.date}
                  onChange={(date) => setFieldValue("date", date)}
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="invalid-feedback"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="time">Time</label>
                <Field as="select" name="time" className="form-control">
                  <option value="">Select a Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </Field>
                <ErrorMessage
                  name="time"
                  component="div"
                  className="invalid-feedback"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="notes">Additional Notes (optional)</label>
                <Field as="textarea" name="notes" className="form-control" />
              </FormGroup>

              <div className="text-center">
                <StyledButton
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                >
                  Book Now
                </StyledButton>
              </div>
            </Form>
          )}
        </Formik>
      </BookingSection>
    </BookingWrapper>
  );
};

export default Booking;
