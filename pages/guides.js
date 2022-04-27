import { useContext, useEffect, useState } from "react";
import styles from "../styles/Guides.module.css";
import AuthContext from "../stores/authContext";
import HomePage from "./HomePage";

export default function Guides() {
  const { user, authReady, login } = useContext(AuthContext);
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/guides",
        user && {
          headers: {
            Authorization: "Bearer " + user.token.access_token,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            login();
            throw Error("You must be logged in to view this content");
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setGuides(data);
        })
        .catch((err) => {
          setError(err.message);
          setGuides(null);
        });
    }
  }, [user, authReady]);

  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading...</div>}
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      {guides && (
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
                <Link href="/">
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
                <Link href="/"></Link>
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
              </li>
              <li>
                {/* navigation to the completed inspection route */}
                <Link href="/">
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
                <Link href="/">
                  {/* navigation to the userdefined field route */}
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
      )}
    </div>
  );
}
