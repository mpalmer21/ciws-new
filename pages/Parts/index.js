import connectDB from "../../lib/connectDB";
import Link from "next/link";
import Part from "../../models/partModel";
import { ExportToExcel } from "../../utilities/ExportToExcel";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

const CompletedInspection = ({ parts }) => {
  console.log(parts);
  const [data, setData] = useState([]);
  const fileName = "Progress plus import"; // filename for excel file
  // const { error, isPending, data: parts } = useFetch(`/api/part`);
  useEffect(() => {
    const fetchData = () => {
      axios.get(`http://localhost:3000/api/part`).then((r) => setData(r.data));
    };
    fetchData();
  }, []);

  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <div className="App">
          <ExportToExcel apiData={data} fileName={fileName} />
        </div>
        <div className="form-list">
          {/* filter by parts id */}
          {parts &&
            parts.map((part) => {
              return (
                <div className="form-preview" key={part._id}>
                  <Link href={`/Parts/${part._id}`}>
                    <a>
                      <h2>uiqueId: {part.uiqueId}</h2>
                      <p>stampCasting: {part.stampCasting}</p>
                      <p>blast: {part.blast}</p>
                    </a>
                  </Link>
                </div>
              );
            })}
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
};

export default CompletedInspection;

export async function getServerSideProps() {
  await connectDB();

  /* find all the data in our database */
  const result = await Part.find({});

  const parts = JSON.parse(JSON.stringify(result));
  const filtered = parts.map((part) => {
    return {
      _id: part._id,
      uiqueId: part.uiqueId,
      stampCasting: part.stampCasting,
      blast: part.blast,
    };
  });

  return { props: { parts: filtered } };
}
