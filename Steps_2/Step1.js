const Step1 = (props) => {
  const { item, handleChange } = props;
  return (
    <div>
      <label><strong>Unique ID: </strong> </label>
      <input
      type="text"
      id="uiqueId"
      name="uiqueId"
      className="text-center"
      onChange={handleChange}
      value={item.uiqueId}
      />
      <label><strong>Stamp Casting: </strong> </label>
      <select
      type="text"
      id="stampCasting"
      name="stampCasting"
      className="text-center"
      onChange={handleChange}
      value={item.stampCasting}
      >
        <option>Select Option</option>
        <option>NO</option>
        <option>SR</option>
        <option>Yes</option>
      </select>
    <label><strong>Blast: </strong> </label>
      <select
      type="text"
      id="blast"
      name="blast"
      className="text-center"
      onChange={handleChange}
      value={item.blast}
      >
         <option>Select Option</option>
      <option>NO</option>
        <option>See Report</option>
        <option>Yes</option>
      </select>
      <label><strong>Seats Removed: </strong> </label>
      <select
      type="text"
      id="seatsRemoved"
      name="seatsRemoved"
      className="text-center"
      onChange={handleChange}
      value={item.seatsRemoved}
      >
         <option>Select Option</option>
        <option>NO</option>
        <option>See Report</option>
        <option>Yes</option>
      </select>
      <label><strong>PT 10 bar hot-80 cold: </strong> </label>
      <select
      type="text"
      id="pt10Bar"
      name="pt10Bar"
      className="text-center"
      onChange={handleChange}
      value={item.pt10Bar}
      >
         <option>Select Option</option>
        <option>Cold</option>
        <option>Hot</option>
        <option>Not Carried Out</option>
        <option>See Report</option>
        <option>Unable to test</option>
      </select>
  </div>
  );
};
export default Step1;

