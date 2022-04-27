import React from "react";
import Email from "../Components/Email";
import "./finalstep.css";
const Finalstep = (props) => {
  const { item, handleSubmit } = props;
  const listItems = Object.entries(item).map(([key, value]) => (
    <div className="preview">
      <li>
        <strong key={value}>{key}:</strong> {value}
      </li>
    </div>
  ));
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>{listItems}</ul>
        <button type="submit">Submit</button>
        <Email />
      </form>
    </div>
  );
};
export default Finalstep;
