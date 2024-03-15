import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Booking.css";

// Yup validation schema
const BookingSchema = Yup.object().shape({
  service: Yup.string().required("Required"),
  date: Yup.date().required("Required").nullable(),
  time: Yup.string().required("Required"),
  notes: Yup.string(),
});

const Booking = () => {
  return (
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
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Book a Time at Our Workshop</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
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
              </div>

              <div className="form-group">
                <label htmlFor="date">Date</label>
                <DatePicker
                  className="form-control"
                  selected={values.date}
                  onChange={(date) => setFieldValue("date", date)}
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
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
              </div>

              <div className="form-group">
                <label htmlFor="notes">Additional Notes (optional)</label>
                <Field as="textarea" name="notes" className="form-control" />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Book Now
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Form>
      )}
    </Formik>
  );
};

export default Booking;
