import Link from "next/link";
import { ExportToExcel } from "../utilities/ExportToExcel";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/part`);
  const parts = await res.json();

  return {
    props: {
      parts: JSON.parse(JSON.stringify(parts)),
    },
  };
};

const PartList = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      <div className="App"></div>
      <div className="form-list">
        {/* filter by parts id */}
        {parts.map((part) => {
          return (
            <div className="form-preview" key={part._id}>
              {/* <Link to={`/api/parts/${part._id}`}> */}
              <h2>uiqueId: {part.uiqueId}</h2>
              <p>stampCasting: {part.stampCastinge}</p>
              <p>blast: {part.blast}</p>
              {/* </Link> */}
            </div>
          );
        })}
        )
      </div>
    </div>
  );
};

export default PartList;
