import connectDB from "../../lib/connectDB";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Form from "../../models/formModel";

const CompletedFormn = ({ forms }) => {
  console.log(forms);
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <div className="form-list">
          {/* filter by parts id */}
          {forms &&
            forms.map((form) => {
              return (
                <div className="form-preview" key={form._id}>
                  <Link href={`/forms/${form._id}`}>
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
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default CompletedFormn;

export async function getServerSideProps() {
  await connectDB();

  /* find all the data in our database */
  const result = await Form.find({});

  const forms = JSON.parse(JSON.stringify(result));
  // const filtered = forms.map((form) => {
  //   return {
  //     _id: form._id,
  //     uiqueId: form.uiqueId,
  //     stampCasting: form.stampCasting,
  //     blast: form.blast,
  //   };
  // });

  return { props: { forms: forms } };
}
