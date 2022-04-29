import Link from "next/link";
import { ExportToExcel } from "../utilities/ExportToExcel";
import { useState, useEffect } from "react";
import axios from "axios";

const PartList = ({ parts }) => {
  const [data, setData] = useState([]);
  const fileName = "Progress plus import"; // filename for excel file

  useEffect(() => {
    const fetchData = () => {
      axios.get(`/parts`).then((r) => setData(r.data));
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="App">
        <ExportToExcel apiData={data} fileName={fileName} />
      </div>
      <div className="form-list">
        {/* filter by parts id */}
        {parts.map((part, key) => {
          return (
            <div className="form-preview" key={part._id}>
              <Link to={`/parts/${part._id}`}>
                <h2>uiqueId: {part.uiqueId}</h2>
                <p>stampCasting: {part.stampCastinge}</p>
                <p>blast: {part.blast}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartList;
