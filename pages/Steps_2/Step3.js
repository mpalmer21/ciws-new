


const Step3 = (props) => {
  const { item, handleChange } = props;
  return (
    <div >
    <label><strong>Sample taken: </strong> </label>
    <input
    type="text"
    id="sampleTaken"
    name="sampleTaken"
    className="text-center"
    onChange={handleChange}
    value={item.sampleTaken}
    />
    <label><strong>Material Specification: </strong> </label>
    <select
    type="text"
    id="materialSpecification"
    name="materialSpecification"
    className="text-center"
    onChange={handleChange}
    value={item.materialSpecification}
    >
       <option>Select Option</option>
        <option>BS 1452 GR 250</option>
        <option>BS 27789 GR 420/12</option>
        <option>BS 2789 GR 450/10</option>
        <option>BS EN 1563 EN-GJS-400-15 RT</option>
        <option>Core SG</option>
        <option>EN 1561 GR 250</option>
        <option>EN 1563 EN-GJS-400-18LT</option>
        <option>EN 1563 GR 400-15</option>
        <option>EN 1563 GR-450-10 1563 GR 500-7</option>
        <option>Flake</option>
        <option>Flake / SG</option>
        <option>Flake / SG (Mostly Flake)</option>
        <option>G 250</option>
        <option>Material Spec Prior to Welding</option>
        <option>No Sample Taken</option>
        <option>Poor SG</option>
        <option>SG</option>
        <option>VER</option>
      </select>
  <label><strong>Special Material Instructions: </strong> </label>
    <input
    type="text"
    id="specialMaterialInstructions"
    name="specialMaterialInstructions"
    className="text-center"
    onChange={handleChange}
    value={item.specialMaterialInstructions}
    />
    <label><strong>Other Casting Marks: </strong> </label>
    <input
    type="text"
    id="otherCastingMarks"
    name="otherCastingMarks"
    className="text-center"
    onChange={handleChange}
    value={item.otherCastingMarks}
    />
    <label><strong>Additional Notes: </strong> </label>
    <input
    type="textarea"
    id="additionalNotes"
    name="additionalNotes"
    className="text-center"
    onChange={handleChange}
    value={item.additionalNotes}
    />
    <label><strong> Inspection Results: </strong> </label>
    <input
    type="text"
    id="inspectionResults"
    name="inspectionResults"
    className="text-center"
    onChange={handleChange}
    value={item.inspectionResults}
    />
    <label><strong>Scope of Repair: </strong> </label>
    <input
    type="text"
    id="FIR12Comments"
    name="FIR12Comments"
    className="text-center"
    onChange={handleChange}
    value={item.FIR12Comments}
    />
</div>
  );
}

export default Step3;
