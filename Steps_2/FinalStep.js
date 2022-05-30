import React from "react";
import Email from "../utilities/Email";

const Finalstep = (props) => {
  const { item, handleSubmit } = props;
  const listItems = Object.entries(item).map(([key, value]) => (
    <div className="preview">
      <li>
        <strong>{key}:</strong> {value}
      </li>
    </div>
  ));
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>{listItems}</ul>
        <button type="submit">Submit</button>
       
      </form>
       <Email />
    </div>
  );
};
export default Finalstep;
