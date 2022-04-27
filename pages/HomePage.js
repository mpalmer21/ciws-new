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
            <a href="/">
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
            <Link to="/">
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
            <a href="/">
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
            <a href="/">
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
            <a href="/">
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
