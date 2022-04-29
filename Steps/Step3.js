import React from "react";

function Step3(props) {
  const { data, handleChange, prevStep, nextStep, step } = props;

  return (
    <div className="create">
      <div>
        <h2>Components Booking In Form</h2>
        <div className="form-step">
          <label>
            <strong>Customer Name:</strong>
          </label>
          <input
            placeholder="Enter "
            type="text"
            id="customerName"
            name="customerName"
            className="text-center"
            value={data.customerName}
            onChange={handleChange}
          />
          <label>
            <strong>Parts received from:</strong>
          </label>
          <input
            placeholder="Enter "
            type="text"
            id="partsRecievedFrom"
            name="partsRecievedFrom"
            className="text-center"
            value={data.partsRecievedFrom}
            onChange={handleChange}
          />
          <label>
            <strong>Customer Supply or CISW Purchase components:</strong>
          </label>
          <input
            placeholder="Enter "
            type="text"
            id="customerSupply"
            name="customerSupply"
            className="text-center"
            value={data.customerSupply}
            onChange={handleChange}
          />
          <label>
            <strong>Purchase Order Number:</strong>
          </label>
          <input
            placeholder="Enter"
            type="number"
            id="purchaseOrderNumber"
            name="purchaseOrderNumber"
            className="text-center"
            value={data.purchaseOrderNumber}
            onChange={handleChange}
          />
        </div>
      </div>
      {step > 1 ? <button onClick={prevStep}>Back</button> : null}
      {step < 8 ? <button onClick={nextStep}>Next</button> : null}
    </div>
  );
}

export default Step3;
