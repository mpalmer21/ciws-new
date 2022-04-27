const Step4 = (props) => {
  const { item, handleChange} = props;
  return (  
    <div>
    <label><strong>FIR 1: </strong> </label>
    <select
    type="text"
    id="FIR1"
    name="FIR1"
    className="text-center" 
    onChange={handleChange}
    value={item.FIR1}
    >
       <option>Select Option</option>
      <option>N/A</option>
        <option>No</option>
        <option>Yes</option>
      </select>
    <label><strong>FIR 1 Comments: </strong> </label>
    <input
    type="text"
    id="FIR1Comments"
    name="FIR1Comments"
    className="text-center"
    onChange={handleChange}
    value={item.FIR1Comments}
    />
  <label><strong>FIR 2: </strong> </label>
    <select
    type="text"
    id="FIR2"
    name="FIR2"
    className="text-center"
    onChange={handleChange}
    value={item.FIR2}
    >
       <option>Select Option</option>
      <option>N/A</option>
        <option>No</option>
        <option>Yes</option>
      </select>
    <label><strong>FIR 2 Comments: </strong> </label>
    <input
    type="text"
    id="FIR2Comments"
    name="FIR2Comments"
    className="text-center"
    onChange={handleChange}
    value={item.FIR2Comments}
    />
    <label><strong>FIR 3: </strong> </label>
    <select
    type="text"
    id="FIR3"
    name="FIR3"
    className="text-center"
    onChange={handleChange}
    value={item.FIR3}
    >
       <option>Select Option</option>
      <option>N/A</option>
        <option>No</option>
        <option>Yes</option>
      </select>
    <label><strong> FIR 3 Comments: </strong> </label>
    <input
    type="text"
    id="FIR3Comments"
    name="FIR3Comments"
    className="text-center"
    onChange={handleChange}
    value={item.FIR3Comments}
    />
</div>
  );
};
export default Step4;
