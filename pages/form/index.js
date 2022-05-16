import connectDB from "../../lib/connectDB";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Form from "../../models/formModel";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const CompletedFormn = ({ forms }) => {
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

  console.log(forms);
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="gradient__bg">
        <div className="form-list">
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
                    <Link href={`/form/${form._id}`}>
                      <a>
                        <h2>worksOrder: {form.worksOrder}</h2>
                        <p>headType: {form.headType}</p>
                        <p>date: {form.date}</p>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* filter by parts id */}
          {forms &&
            forms.slice(0, 7).map((form) => {
              return (
                <div className="form-preview" key={form._id}>
                  <Link href={`/form/${form._id}`}>
                    <a>
                      <h2>worksOrder: {form.worksOrder}</h2>
                      <p>headType: {form.headType}</p>
                      <p>date: {form.date}</p>
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
    <div className="gradient__bg">
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default CompletedFormn;

export async function getServerSideProps() {
  await connectDB();

  /* find all the data in our database */
  const result = await Form.find({});

  const forms = JSON.parse(JSON.stringify(result));
  return { props: { forms: forms } };
}
