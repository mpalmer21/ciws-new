import {
  AiOutlineEdit,
  AiFillFolderOpen,
  AiOutlineTool,
  AiOutlineDeliveredProcedure,
} from "react-icons/ai";

const HomePage = () => {
  return (
    <div className="home_contain">
      <div className="home_header">
        <h1>Welcome</h1>
      </div>
      <div className="home_para">
        <p>Select an option</p>
      </div>
      <div className="home_link_contain">
        {/* navigation to the create route */}
        <ul className="home_link_block">
          <li>
            <a href="/Create">
              <AiOutlineEdit
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  fill: "#003f47",
                }}
              />
              Book In Form
            </a>
          </li>
          <li>
            {/* navigation to the completedforms route */}
            <a href="/CompletedForms">
              <AiFillFolderOpen
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  fill: "#003f47",
                }}
              />
              Completed Forms
            </a>
          </li>
          <li>
            {/* navigation to the user defined field route */}
            <a href="/UserDefinedField">
              <AiOutlineTool
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  fill: "#003f47",
                }}
              />
              Inspection Part Details
            </a>
          </li>
          <li>
            {/* navigation to the completed inspection route */}
            <a href="/CompletedInspection">
              <AiFillFolderOpen
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  fill: "#003f47",
                }}
              />
              Completed Inspection
            </a>
          </li>
          <li>
            {/* navigation to the userdefined field route */}
            <a href="/Delivery">
              <AiOutlineDeliveredProcedure
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  fill: "#003f47",
                }}
              />
              Delivery
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
