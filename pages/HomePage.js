import Link from "next/link";
import {
  AiOutlineEdit,
  AiFillFolderOpen,
  AiOutlineTool,
  AiOutlineDeliveredProcedure,
} from "react-icons/ai";
// import Link from "next/link";

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
            <Link to="/Create">
              <a>
                <AiOutlineEdit
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    fill: "#003f47",
                  }}
                />
                Book In Form
              </a>
            </Link>
          </li>
          <li>
            {/* navigation to the completedforms route */}
            <Link to="/CompletedForms">
              <a>
                <AiFillFolderOpen
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    fill: "#003f47",
                  }}
                />
                Completed Forms
              </a>
            </Link>
          </li>
          <li>
            {/* navigation to the user defined field route */}
            <Link to="/UserDefinedField">
              <a>
                <AiOutlineTool
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    fill: "#003f47",
                  }}
                />
                Inspection Part Details
              </a>
            </Link>
          </li>
          <li>
            {/* navigation to the completed inspection route */}
            <Link to="/CompletedInspection">
              <a>
                <AiFillFolderOpen
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    fill: "#003f47",
                  }}
                />
                Completed Inspection
              </a>
            </Link>
          </li>
          <li>
            {/* navigation to the userdefined field route */}
            <Link to="/Delivery">
              <a>
                <AiOutlineDeliveredProcedure
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    fill: "#003f47",
                  }}
                />
                Delivery
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
