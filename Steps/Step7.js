import React from "react";
import { Form, FormLabel } from "react-bootstrap";

const Step7 = (props) => {
  const { data, handleChange, prevStep, nextStep, step } = props;
  return (
    <div className="create">
      <div>
        <h2>Components Booking In Form</h2>
        <div className="form-step">
          <Form className="center">
            <div className="sig">
              <Form.Group className="w-75 mt-4 ">
                <FormLabel>
                  <strong>Date:</strong>
                </FormLabel>
                <Form.Control
                  type="date"
                  placeholder="Enter works order number"
                  onChange={handleChange}
                  value={data.date}
                  name="date"
                  className="text-center"
                />
              </Form.Group>
              <Form.Group className="w-75 mt-4 ">
                <FormLabel>
                  <strong>Signature:</strong>
                </FormLabel>
                <Form.Control
                  type="text"
                  placeholder="Enter Signature"
                  onChange={handleChange}
                  value={data.signature}
                  name="signature"
                  className="text-center"
                />
              </Form.Group>
            </div>
          </Form>
        </div>
      </div>
      {step > 1 ? <button onClick={prevStep}>Back</button> : null}
      {step < 8 ? <button onClick={nextStep}>Next</button> : null}
    </div>
  );
};

export default Step7;
