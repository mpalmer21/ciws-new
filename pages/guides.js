import styles from "../styles/Guides.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import connectDB from "../lib/connectDB";

import Link from "next/link";
import {
  AiOutlineEdit,
  AiFillFolderOpen,
  AiOutlineTool,
  AiOutlineDeliveredProcedure,
} from "react-icons/ai";

export default function Guides() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="home_contain">
        <div className="home_header">
          <h1>Welcome</h1>
        </div>
        <div className="home_para">
          <p>Select an option</p>
        </div>

        <div className={styles.guides}>
          <ul className="home_link_block">
            <li>
              <Link href={"/Create"}>
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
              <Link href={"/Forms"}>
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
              <Link href={"/UserDefinedField"}>
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
              <Link href={"/Parts"}>
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
              <Link href={"/Delivery"}>
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
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
