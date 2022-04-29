import React from "react";
import compnametable from "../data/headTypeData.json";

const Step2 = (props) => {
  const { data, handleChange, prevStep, nextStep, step } = props;
  return (
    <div className="create">
      <div>
        <h2>Components Booking In Form</h2>
        <div className="form-step">
          <div className="head">
            <label for="headType">
              <strong>Cylinder Head Type:</strong>{" "}
            </label>
            <select
              name="headType"
              id="headType"
              onChange={handleChange}
              value={data.headType}
              className="form-select center-text"
            >
              {compnametable.map((cylinderheadtype, data) => (
                <option htmlFor="headType" key={data}>
                  {cylinderheadtype.headtype}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {step > 1 ? <button onClick={prevStep}>Back</button> : null}
      {step < 8 ? <button onClick={nextStep}>Next</button> : null}
    </div>
  );
};
export default Step2;
