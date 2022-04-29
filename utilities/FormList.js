import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

//search filter for entered valuex
const FormList = ({ forms }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = forms.filter((value) => {
      return value.worksOrder.includes(searchWord);
    });
    console.log(newFilter);

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="form-list">
      <div className="filter">
        <button>
          <AiOutlineSearch
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              fill: "white",
            }}
          />
          <input
            placeholder="Search Works Order"
            type="text"
            value={wordEntered}
            onChange={handleFilter}
          />
        </button>
      </div>
      <div>
        {/* this filters array to only show maximum 7 values from enteredword */}
        {filteredData.slice(0, 7).map((form, key) => {
          return (
            <div className="search-preview" key={form._id}>
              <Link to={`/forms/${form._id}`}>
                <h2>Work Order: {form.worksOrder}</h2>
                <p>Head Type: {form.headType}</p>
                <p>Date: {form.date}</p>
              </Link>
            </div>
          );
        })}
        {forms.slice(0, 7).map((form, key) => {
          return (
            <div className="form-preview" key={form._id}>
              <Link to={`/forms/${form._id}`}>
                <h2>Work Order: {form.worksOrder} </h2>
                <p>Head Type: {form.headType}</p>
                <p>Date: {form.date}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormList;
