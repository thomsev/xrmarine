import React, { useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  BookingWrapper,
  BookingSection,
  Title,
  FormGroup,
  StyledButton,
} from "./BookingStyles";

const BookingSchema = Yup.object().shape({
  service: Yup.string().required("Required"),
  date: Yup.date().required("Required").nullable(),
  time: Yup.string().required("Required"),
  notes: Yup.string(),
});

const Booking = () => {
  const [date, setDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (date, setFieldValue) => {
    setDate(date);
    setFieldValue("date", date);
    setShowCalendar(false); // Close the calendar after selecting a date
  };

  return (
    <BookingWrapper>
      <BookingSection>
        <Title>Book tid hos oss</Title>
        <Formik
          initialValues={{
            service: "",
            date: null,
            time: "",
            notes: "",
          }}
          validationSchema={BookingSchema}
          onSubmit={(values, actions) => {
            alert(JSON.stringify({ ...values, date }, null, 2));
            actions.setSubmitting(false);
          }}
        >
          {({ setFieldValue, values, isSubmitting }) => (
            <Form>
              <FormGroup>
                <label htmlFor="service">Tjeneste nødvendig</label>
                <Field as="select" name="service" className="form-control">
                  <option value="">Velg en tjeneste</option>
                  <option value="repair">Reparasjon</option>
                  <option value="maintenance">Vedlikehold</option>
                  <option value="inspection">Inspeksjon</option>
                </Field>

                <ErrorMessage
                  name="service"
                  component="div"
                  className="invalid-feedback"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="date">Dato</label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  value={date ? date.toLocaleDateString() : ""}
                  onFocus={() => setShowCalendar(true)}
                  onClick={() => setShowCalendar(true)}
                />
                {showCalendar && (
                  <Calendar
                    onChange={(date) => handleDateChange(date, setFieldValue)}
                    value={date}
                  />
                )}
                <ErrorMessage
                  name="date"
                  component="div"
                  className="invalid-feedback"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="time">Tid</label>
                <Field as="select" name="time" className="form-control">
                  <option value="">Velg tid</option>
                  <option value="morning">Morgen</option>
                  <option value="afternoon">Ettermiddag</option>
                  <option value="evening">Kveld</option>
                </Field>
                <ErrorMessage
                  name="time"
                  component="div"
                  className="invalid-feedback"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="notes">Ekstra informasjon (optional)</label>
                <Field as="textarea" name="notes" className="form-control" />
              </FormGroup>

              <div className="text-center">
                <StyledButton
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                >
                  Book nå
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
