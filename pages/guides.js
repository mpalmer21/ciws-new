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
      <div className="gradient__bg">
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
                <Link href={"/form"}>
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
                <Link href={"/part"}>
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
      </div>
    );
  }
  return (
    <div className="gradient__bg" style={{}}>
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          fill: "#003f47",
          textAlign: "center",
        }}
      >
        Content protected sign in to access
      </h1>{" "}
      <br />
      <button
        style={{
          fontSize: "30px",

          borderRadius: "30px",

          justifyItems: "center",
          alignItems: "center",
        }}
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
}
