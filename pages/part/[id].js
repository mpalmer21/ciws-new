import { useRouter } from "next/router";
import connectDB from "../../lib/connectDB";
import Link from "next/link";
import Part from "../../models/partModel";
import { useSession, signIn, signOut } from "next-auth/react";

const PartDetails = ({ part }) => {
  console.log(part);
  const router = useRouter();
  const handleDelete = async () => {
    const partID = router.query.id;

    try {
      await fetch(`/api/part/${partID}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      setMessage("Failed to delete the pet.");
    }
  };

  const { data: session } = useSession();
  if (session) {
    return (
      <div className="gradient__bg">
        <div className="form-details container-fluid mt-4">
          {part && (
            <article>
              <div>
                <div>
                  <h1>Part details</h1>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <strong>uiqueId: </strong>
                        {part.uiqueId}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>stampCasting: </strong>
                        {part.stampCasting}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>blast: </strong>
                        {part.blast}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>seatsRemoved: </strong>
                        {part.seatsRemoved}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>pt10Bar: </strong>
                        {part.pt10Bar}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>TestMPI: </strong>
                        {part.TestMPI}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>VGuides: </strong>
                        {part.VGuides}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Componentsremoved: </strong>
                        {part.Componentsremoved}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>waterPlatesSupptded: </strong>
                        {part.waterPlatesSupptded}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>injectorSleeveFitted: </strong>
                        {part.injectorSleeveFitted}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>combustionFace: </strong>
                        {part.combustionFace}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>sampleTaken: </strong>
                        {part.sampleTaken}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>materialSpecification: </strong>
                        {part.materialSpecification}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>specialMateriatdnstructions: </strong>
                        {part.specialMateriatdnstructions}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>otherCastingMarks: </strong>
                        {part.otherCastingMarks}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>additionalNotes: </strong>
                        {part.additionalNotes}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>inspectionResults: </strong>
                        {part.inspectionResults}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR1: </strong>
                        {part.FIR1}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR1Comments: </strong>
                        {part.FIR1Comments}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR2: </strong>
                        {part.FIR2}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR2Comments </strong>
                        {part.FIR2Comments}
                      </td>
                    </tr>
                    <tr></tr>
                    <td>
                      <strong>FIR3: </strong>
                      {part.FIR3}
                    </td>
                    <tr>
                      <td>
                        <strong>FIR3Comments: </strong>
                        {part.FIR3Comments}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR4: </strong>
                        {part.FIR4}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR4Comments: </strong>
                        {part.FIR4Comments}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR5: </strong>
                        {part.FIR5}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR5Comments: </strong>
                        {part.FIR5Comments}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR6: </strong>
                        {part.FIR6}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR6Comments: </strong>
                        {part.FIR6Comments}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR7: </strong>
                        {part.FIR7}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR7Comments </strong>
                        {part.FIR7Comments}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR8: </strong>
                        {part.FIR8}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR8Comments:</strong>
                        {part.FIR8Comments}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR9: </strong>
                        {part.FIR9}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR9Comments: </strong>
                        {part.FIR9Comments}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR10: </strong>
                        {part.FIR10}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR10Comments </strong>
                        {part.FIR10Comments}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR11 </strong>
                        {part.FIR11}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR11Comments </strong>
                        {part.FIR11Comments}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR12: </strong>
                        {part.FIR12}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>FIR12Comments: </strong>
                        {part.FIR12Comments}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <div>
            <button onClick={handleUpdate}>Edit</button>
          </div> */}
              <div>
                <button onClick={handleDelete}>delete</button>
              </div>
            </article>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="gradient__bg">
      Content protected sign in to access <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  await connectDB();

  const result = await Part.findById(params.id).lean();
  const part = JSON.parse(JSON.stringify(result));

  //   part._id = part._id.json();
  console.log(part);

  return { props: { part } };
}

export default PartDetails;
