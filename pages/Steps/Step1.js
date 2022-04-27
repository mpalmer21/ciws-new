import React from "react";
import { ProgressBar } from "react-bootstrap";

const Step1 = (props) => {
  const { data, handleChange, nextStep, step } = props;
  return (
    <div className="create">
      <div>
        <h2>Components Booking In Form</h2>
        <div class="form-step form-step-active">
          <label for="worksOrder">
            <strong>WorkOrder:</strong>
          </label>
          <input
            placeholder="Enter works order number"
            type="text"
            minlength="1"
            required
            id="worksOrder"
            name="worksOrder"
            className="text-center"
            value={data.worksOrder}
            onChange={handleChange}
          />
        </div>
      </div>
      {step < 8 ? <button onClick={nextStep}>Next</button> : null}
    </div>
  );
};
export default Step1;
