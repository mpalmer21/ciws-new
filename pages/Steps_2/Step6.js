const Step6 = (props) => {
  const { item, handleChange } = props;
  return (
    <div >
    <label><strong>FIR 7: </strong> </label>
    <select
    type="text"
    id="FIR7"
    name="FIR7"
    className="text-center"
    onChange={handleChange}
    value={item.FIR7}
    >
       <option>Select Option</option>
      <option>N/A</option>
        <option>No</option>
        <option>Yes</option>
      </select>
    <label><strong>FIR 7 Comments: </strong> </label>
    <input
    type="text"
    id="FIR7Comments"
    name="FIR7Comments"
    className="text-center"
    onChange={handleChange}
    value={item.FIR7Comments}
    />
  <label><strong>FIR 8: </strong> </label>
    <select
    type="text"
    id="FIR8"
    name="FIR8"
    className="text-center"
    onChange={handleChange}
    value={item.FIR8}
    >
       <option>Select Option</option>
      <option>N/A</option>
        <option>No</option>
        <option>Yes</option>
      </select>
    <label><strong>FIR 8 Comments: </strong> </label>
    <input
    type="text"
    id="FIR8Comments"
    name="FIR8Comments"
    className="text-center"
    onChange={handleChange}
    value={item.FIR8Comments}
    />
    <label><strong>FIR 9: </strong> </label>
    <select
    type="text"
    id="FIR9"
    name="FIR9"
    className="text-center"
    onChange={handleChange}
    value={item.FIR9}
    >
       <option>Select Option</option>
      <option>N/A</option>
        <option>No</option>
        <option>Yes</option>
      </select>
    <label><strong> FIR 9 Comments: </strong> </label>
    <input
    type="text"
    id="FIR9Comments"
    name="FIR9Comments"
    className="text-center"
    onChange={handleChange}
    value={item.FIR9Comments}
    />
</div>
  );
};
export default Step6;
