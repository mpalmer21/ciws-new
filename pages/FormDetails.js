import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const FormDetails = () => {
  const { id } = useParams();

  const { error, isPending, data: form } = useFetch(`/forms/${id}`);
  const history = useHistory();

  //deleting
  const handleClick = async () => {
    await fetch(`/forms/` + form._id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="form-details container-fluid mt-4">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {form && (
        <article>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Works Order:</strong>
                  {form.worksOrder}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Head Type:</strong>
                  {form.headType}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Customer Name:</strong> {form.customerName}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Parts Recieved From:</strong>
                  {form.partsRecievedFrom}
                </td>
              </tr>
              <tr>
                <td>
                  <strong> Customer Supply:</strong>
                  {form.customerSupply}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Purchase OrderNumber:</strong>
                  {form.purchaseOrderNumber}
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <table>
            <thead>
              <tr>
                <th>Component Name.</th>
                <th>Number recieved.</th>
                <th>Component size.</th>
                <th>Stores Location.</th>
                <th>Damage Check.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{form.compname} </td>
                <td>{form.norecieved} </td>
                <td>{form.compsize} </td>
                <td>{form.storelocation} </td>
                <td>{form.damagecheck} </td>
              </tr>
              <tr>
                <td>{form.compname1}</td>
                <td>{form.norecieved1}</td>
                <td>{form.compsize1}</td>
                <td>{form.storelocation1}</td>
                <td>{form.damagecheck1}</td>
              </tr>
              <tr>
                <td>{form.compname2}</td>
                <td>{form.norecieved2}</td>
                <td>{form.compsize2}</td>
                <td>{form.storelocation2}</td>
                <td>{form.damagecheck2}</td>
              </tr>
              <tr>
                <td>{form.compname3} </td>
                <td>{form.norecieved3} </td>
                <td>{form.compsize3} </td>
                <td>{form.storelocation3} </td>
                <td>{form.damagecheck3} </td>
              </tr>
              <tr>
                <td>{form.compname4}</td>
                <td>{form.norecieved4}</td>
                <td>{form.compsize4}</td>
                <td>{form.storelocation4}</td>
                <td>{form.damagecheck4}</td>
              </tr>
              <tr>
                <td>{form.compname5}</td>
                <td>{form.norecieved5}</td>
                <td>{form.compsize5}</td>
                <td>{form.storelocation5}</td>
                <td>{form.damagecheck5}</td>
              </tr>
              <tr>
                <td>{form.compname6} </td>
                <td>{form.norecieved6} </td>
                <td>{form.compsize6} </td>
                <td>{form.storelocation6} </td>
                <td>{form.damagecheck6} </td>
              </tr>
              <tr>
                <td>{form.compname7}</td>
                <td>{form.norecieved7}</td>
                <td>{form.compsize7}</td>
                <td>{form.storelocation7}</td>
                <td>{form.damagecheck7}</td>
              </tr>
              <tr>
                <td>{form.compname8}</td>
                <td>{form.norecieved8}</td>
                <td>{form.compsize8}</td>
                <td>{form.storelocation8}</td>
                <td>{form.damagecheck8}</td>
              </tr>
              <tr>
                <td>{form.compname7} </td>
                <td>{form.norecieved7} </td>
                <td>{form.compsize7} </td>
                <td>{form.storelocation7} </td>
                <td>{form.damagecheck7} </td>
              </tr>
              <tr>
                <td>{form.compname8}</td>
                <td>{form.norecieved8}</td>
                <td>{form.compsize8}</td>
                <td>{form.storelocation8}</td>
                <td>{form.damagecheck8}</td>
              </tr>
              <tr>
                <td>{form.compname9}</td>
                <td>{form.norecieved9}</td>
                <td>{form.compsize9}</td>
                <td>{form.storelocation9}</td>
                <td>{form.damagecheck9}</td>
              </tr>
              <tr>
                <td>{form.compname10}</td>
                <td>{form.norecieved10}</td>
                <td>{form.compsize10}</td>
                <td>{form.storelocation10}</td>
                <td>{form.damagecheck10}</td>
              </tr>
              <tr>
                <td>{form.compname11}</td>
                <td>{form.norecieved11}</td>
                <td>{form.compsize11}</td>
                <td>{form.storelocation11}</td>
                <td>{form.damagecheck11}</td>
              </tr>
              <tr>
                <td>{form.compname12}</td>
                <td>{form.norecieved12}</td>
                <td>{form.compsize12}</td>
                <td>{form.storelocation12}</td>
                <td>{form.damagecheck12}</td>
              </tr>
              <tr>
                <td>{form.compname13}</td>
                <td>{form.norecieved13}</td>
                <td>{form.compsize13}</td>
                <td>{form.storelocation13}</td>
                <td>{form.damagecheck13}</td>
              </tr>
              <tr>
                <td>{form.compname14}</td>
                <td>{form.norecieved14}</td>
                <td>{form.compsize14}</td>
                <td>{form.storelocation14}</td>
                <td>{form.damagecheck4}</td>
              </tr>
              <tr>
                <td>{form.compname15}</td>
                <td>{form.norecieved15}</td>
                <td>{form.compsize15}</td>
                <td>{form.storelocation15}</td>
                <td>{form.damagecheck15}</td>
              </tr>
              <tr>
                <td>{form.compname17}</td>
                <td>{form.norecieved17}</td>
                <td>{form.compsize17}</td>
                <td>{form.storelocation17}</td>
                <td>{form.damagecheck17}</td>
              </tr>
              <tr>
                <td>{form.compname18}</td>
                <td>{form.norecieved18}</td>
                <td>{form.compsize18}</td>
                <td>{form.storelocation18}</td>
                <td>{form.damagecheck18}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <strong>Date:</strong> {form.date}
            <strong>Signature:</strong>
            {form.signature}
          </div>
          <Link to={`/form/${form._id}`}>
            <button>edit</button>
          </Link>
          <div>
            <button onClick={handleClick}>delete</button>
          </div>
        </article>
      )}
    </div>
  );
};

export default FormDetails;
