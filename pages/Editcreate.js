import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../utilities/useFetch";

const Editcreate = () => {
  const { id } = useParams();

  const { error, isPending, data: form } = useFetch(`/forms/${id}`);
  const history = useHistory();

  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //edit
  const newForm = { ...values };
  const handleUpdate = async () => {
    await fetch(`/forms/` + form._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm),
    }).then(() => {
      history.push("/");
    });
    setValues({
      worksOrder: "",
      headType: "",
      customerName: "",
      partsRecievedFrom: "",
      customerSupply: "",
      purchaseOrderNumber: "",
      date: "",
      signature: "",
      compname: "",
      compname1: "",
      compname2: "",
      compname3: "",
      compname4: "",
      compname5: "",
      compname6: "",
      compname7: "",
      compname8: "",
      compname9: "",
      compname10: "",
      compname11: "",
      compname12: "",
      compname13: "",
      compname14: "",
      compname15: "",
      compname16: "",
      compname17: "",
      compname18: "",
      norecieved: "",
      norecieved1: "",
      norecieved2: "",
      norecieved3: "",
      norecieved4: "",
      norecieved5: "",
      norecieved6: "",
      norecieved7: "",
      norecieved8: "",
      norecieved9: "",
      norecieved10: "",
      norecieved11: "",
      norecieved12: "",
      norecieved13: "",
      norecieved14: "",
      norecieved15: "",
      norecieved16: "",
      norecieved17: "",
      norecieved18: "",
      compsize: "",
      compsize1: "",
      compsize2: "",
      compsize3: "",
      compsize4: "",
      compsize5: "",
      compsize6: "",
      compsize7: "",
      compsize8: "",
      compsize9: "",
      compsize10: "",
      compsize11: "",
      compsize12: "",
      compsize13: "",
      compsize14: "",
      compsize15: "",
      compsize16: "",
      compsize17: "",
      compsize18: "",
      storelocation: "",
      storelocation1: "",
      storelocation2: "",
      storelocation3: "",
      storelocation4: "",
      storelocation5: "",
      storelocation6: "",
      storelocation7: "",
      storelocation8: "",
      storelocation9: "",
      storelocation10: "",
      storelocation11: "",
      storelocation12: "",
      storelocation13: "",
      storelocation14: "",
      storelocation15: "",
      storelocation16: "",
      storelocation17: "",
      storelocation18: "",
      damagecheck: "",
      damagecheck1: "",
      damagecheck2: "",
      damagecheck3: "",
      damagecheck4: "",
      damagecheck5: "",
      damagecheck6: "",
      damagecheck7: "",
      damagecheck8: "",
      damagecheck9: "",
      damagecheck10: "",
      damagecheck11: "",
      damagecheck12: "",
      damagecheck13: "",
      damagecheck14: "",
      damagecheck15: "",
      damagecheck16: "",
      damagecheck17: "",
      damagecheck18: "",
    });
  };

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
                  <input
                    name="worksOrder"
                    onChange={handleChange}
                    placeholder={form.worksOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Head Type:</strong>

                  <input
                    name="headType"
                    onChange={handleChange}
                    placeholder={form.headType}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Customer Name:</strong> {form.customerName}
                  <input
                    name="customerName"
                    onChange={handleChange}
                    placeholder={form.customerName}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Parts Recieved From:</strong>
                  <input
                    name="partsRecievedFrom"
                    onChange={handleChange}
                    placeholder={form.partsRecievedFrom}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <strong> Customer Supply:</strong>{" "}
                  <input
                    name="customerSupply"
                    onChange={handleChange}
                    placeholder={form.customerSupply}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Purchase OrderNumber:</strong>{" "}
                  <input
                    name="purchaseOrderNumber"
                    onChange={handleChange}
                    placeholder={form.purchaseOrderNumber}
                  />
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
                <td>
                  <input
                    name="compname"
                    onChange={handleChange}
                    placeholder={form.compname}
                  />
                </td>

                <td>
                  <input
                    name="norecieved"
                    onChange={handleChange}
                    placeholder={form.norecieved}
                  />
                </td>
                <td>
                  <input
                    name="compsize"
                    onChange={handleChange}
                    placeholder={form.compsize}
                  />
                </td>
                <td>
                  <input
                    name="storelocation"
                    onChange={handleChange}
                    placeholder={form.storelocation}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck"
                    onChange={handleChange}
                    placeholder={form.damagecheck}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname1"
                    onChange={handleChange}
                    placeholder={form.compname1}
                  />
                </td>
                <td>
                  <input
                    name="norecieved1"
                    onChange={handleChange}
                    placeholder={form.norecieved1}
                  />
                </td>
                <td>
                  <input
                    name="compsize1"
                    onChange={handleChange}
                    placeholder={form.compsize1}
                  />
                </td>
                <td>
                  <input
                    name="storelocation1"
                    onChange={handleChange}
                    placeholder={form.storelocation1}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck1"
                    onChange={handleChange}
                    placeholder={form.damagecheck1}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname2"
                    onChange={handleChange}
                    placeholder={form.compname2}
                  />
                </td>
                <td>
                  <input
                    name="norecieved2"
                    onChange={handleChange}
                    placeholder={form.norecieved2}
                  />
                </td>
                <td>
                  <input
                    name="compsize2"
                    onChange={handleChange}
                    placeholder={form.compsize2}
                  />
                </td>
                <td>
                  <input
                    name="storelocation2"
                    onChange={handleChange}
                    placeholder={form.storelocation2}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck2"
                    onChange={handleChange}
                    placeholder={form.damagecheck2}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname3}"
                    onChange={handleChange}
                    placeholder={form.compname3}
                  />
                </td>
                <td>
                  <input
                    name="norecieved3"
                    onChange={handleChange}
                    placeholder={form.norecieved3}
                  />
                </td>
                <td>
                  <input
                    name="compsize3"
                    onChange={handleChange}
                    placeholder={form.compsize3}
                  />
                </td>
                <td>
                  <input
                    name="storelocation3"
                    onChange={handleChange}
                    placeholder={form.storelocation3}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck3"
                    onChange={handleChange}
                    placeholder={form.damagecheck3}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname4"
                    onChange={handleChange}
                    placeholder={form.compname4}
                  />
                </td>
                <td>
                  <input
                    name="norecieved4"
                    onChange={handleChange}
                    placeholder={form.compname4}
                  />
                </td>
                <td>
                  <input
                    name="compsize4"
                    onChange={handleChange}
                    placeholder={form.compsize4}
                  />
                </td>
                <td>
                  <input
                    name="storelocation4"
                    onChange={handleChange}
                    placeholder={form.storelocation4}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck4"
                    onChange={handleChange}
                    placeholder={form.damagecheck4}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname5"
                    onChange={handleChange}
                    placeholder={form.compname5}
                  />
                </td>
                <td>
                  <input
                    name="norecieved5"
                    onChange={handleChange}
                    placeholder={form.norecieved5}
                  />
                </td>
                <td>
                  <input
                    name="compsize5"
                    onChange={handleChange}
                    placeholder={form.compsize5}
                  />
                </td>
                <td>
                  <input
                    name="storelocation5"
                    onChange={handleChange}
                    placeholder={form.storelocation5}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck5"
                    onChange={handleChange}
                    placeholder={form.damagecheck5}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname6"
                    onChange={handleChange}
                    placeholder={form.compname6}
                  />
                </td>
                <td>
                  <input
                    name="norecieved6"
                    onChange={handleChange}
                    placeholder={form.norecieved6}
                  />
                </td>
                <td>
                  <input
                    name="compsize6"
                    onChange={handleChange}
                    placeholder={form.compsize6}
                  />
                </td>
                <td>
                  <input
                    name="storelocation6"
                    onChange={handleChange}
                    placeholder={form.storelocation6}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck6"
                    onChange={handleChange}
                    placeholder={form.damagecheck6}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname7"
                    onChange={handleChange}
                    placeholder={form.compname7}
                  />
                </td>
                <td>
                  <input
                    name="norecieved7"
                    onChange={handleChange}
                    placeholder={form.norecieved7}
                  />
                </td>
                <td>
                  <input
                    name="compsize7"
                    onChange={handleChange}
                    placeholder={form.compsize7}
                  />
                </td>
                <td>
                  <input
                    name="storelocation7"
                    onChange={handleChange}
                    placeholder={form.storelocation7}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck7"
                    onChange={handleChange}
                    placeholder={form.damagecheck7}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname8"
                    onChange={handleChange}
                    placeholder={form.compname8}
                  />
                </td>
                <td>
                  <input
                    name="norecieved8"
                    onChange={handleChange}
                    placeholder={form.norecieved8}
                  />
                </td>
                <td>
                  <input
                    name="compsize8"
                    onChange={handleChange}
                    placeholder={form.compsize8}
                  />
                </td>
                <td>
                  <input
                    name="storelocation8"
                    onChange={handleChange}
                    placeholder={form.storelocation8}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck8"
                    onChange={handleChange}
                    placeholder={form.damagecheck8}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname9"
                    onChange={handleChange}
                    placeholder={form.compname9}
                  />
                </td>
                <td>
                  <input
                    name="norecieved9"
                    onChange={handleChange}
                    placeholder={form.norecieved9}
                  />
                </td>
                <td>
                  <input
                    name="compsize9"
                    onChange={handleChange}
                    placeholder={form.compsize9}
                  />
                </td>
                <td>
                  <input
                    name="storelocation9"
                    onChange={handleChange}
                    placeholder={form.storelocation9}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck9"
                    onChange={handleChange}
                    placeholder={form.damagecheck9}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname10"
                    onChange={handleChange}
                    placeholder={form.compname10}
                  />
                </td>
                <td>
                  <input
                    name="norecieved10"
                    onChange={handleChange}
                    placeholder={form.norecieved10}
                  />
                </td>
                <td>
                  <input
                    name="compsize10"
                    onChange={handleChange}
                    placeholder={form.compsize10}
                  />
                </td>
                <td>
                  <input
                    name="storelocation10"
                    onChange={handleChange}
                    placeholder={form.storelocation10}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck10"
                    onChange={handleChange}
                    placeholder={form.damagecheck10}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname11"
                    onChange={handleChange}
                    placeholder={form.compname11}
                  />
                </td>
                <td>
                  <input
                    name="norecieved11"
                    onChange={handleChange}
                    placeholder={form.norecieved11}
                  />
                </td>
                <td>
                  <input
                    name="compsize11"
                    onChange={handleChange}
                    placeholder={form.compsize11}
                  />
                </td>
                <td>
                  <input
                    name="storelocation11"
                    onChange={handleChange}
                    placeholder={form.storelocation11}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck11"
                    onChange={handleChange}
                    placeholder={form.damagecheck11}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname12"
                    onChange={handleChange}
                    placeholder={form.compname12}
                  />
                </td>
                <td>
                  <input
                    name="norecieved12"
                    onChange={handleChange}
                    placeholder={form.norecieved12}
                  />
                </td>
                <td>
                  <input
                    name="compsize12"
                    onChange={handleChange}
                    placeholder={form.compsize12}
                  />
                </td>
                <td>
                  <input
                    name="storelocation12"
                    onChange={handleChange}
                    placeholder={form.storelocation12}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck12"
                    onChange={handleChange}
                    placeholder={form.damagecheck12}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname13"
                    onChange={handleChange}
                    placeholder={form.compname13}
                  />
                </td>
                <td>
                  <input
                    name="norecieved13"
                    onChange={handleChange}
                    placeholder={form.norecieved13}
                  />
                </td>
                <td>
                  <input
                    name="compsize13"
                    onChange={handleChange}
                    placeholder={form.compsize13}
                  />
                </td>
                <td>
                  <input
                    name="storelocation13"
                    onChange={handleChange}
                    placeholder={form.storelocation13}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck13"
                    onChange={handleChange}
                    placeholder={form.damagecheck13}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname14"
                    onChange={handleChange}
                    placeholder={form.compname14}
                  />
                </td>
                <td>
                  <input
                    name="norecieved14"
                    onChange={handleChange}
                    placeholder={form.norecieved14}
                  />
                </td>
                <td>
                  <input
                    name="compsize14"
                    onChange={handleChange}
                    placeholder={form.compsize14}
                  />
                </td>
                <td>
                  <input
                    name="storelocation14"
                    onChange={handleChange}
                    placeholder={form.storelocation14}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck14"
                    onChange={handleChange}
                    placeholder={form.damagecheck14}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname15"
                    onChange={handleChange}
                    placeholder={form.compname15}
                  />
                </td>
                <td>
                  <input
                    name="norecieved15"
                    onChange={handleChange}
                    placeholder={form.norecieved15}
                  />
                </td>
                <td>
                  <input
                    name="compsize15"
                    onChange={handleChange}
                    placeholder={form.compsize15}
                  />
                </td>
                <td>
                  <input
                    name="storelocation15"
                    onChange={handleChange}
                    placeholder={form.storelocation15}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck15"
                    onChange={handleChange}
                    placeholder={form.damagecheck15}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname16"
                    onChange={handleChange}
                    placeholder={form.compname16}
                  />
                </td>
                <td>
                  <input
                    name="norecieved16"
                    onChange={handleChange}
                    placeholder={form.norecieved16}
                  />
                </td>
                <td>
                  <input
                    name="compsize16"
                    onChange={handleChange}
                    placeholder={form.compsize16}
                  />
                </td>
                <td>
                  <input
                    name="storelocation16"
                    onChange={handleChange}
                    placeholder={form.storelocation16}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck16"
                    onChange={handleChange}
                    placeholder={form.damagecheck16}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname17"
                    onChange={handleChange}
                    placeholder={form.compname17}
                  />
                </td>
                <td>
                  <input
                    name="norecieved17"
                    onChange={handleChange}
                    placeholder={form.norecieved17}
                  />
                </td>
                <td>
                  <input
                    name="compsize17"
                    onChange={handleChange}
                    placeholder={form.compsize17}
                  />
                </td>
                <td>
                  <input
                    name="storelocation17"
                    onChange={handleChange}
                    placeholder={form.storelocation17}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck17"
                    onChange={handleChange}
                    placeholder={form.damagecheck17}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="compname18"
                    onChange={handleChange}
                    placeholder={form.compname18}
                  />
                </td>
                <td>
                  <input
                    name="norecieved18"
                    onChange={handleChange}
                    placeholder={form.norecieved18}
                  />
                </td>
                <td>
                  <input
                    name="compsize18"
                    onChange={handleChange}
                    placeholder={form.compsize18}
                  />
                </td>
                <td>
                  <input
                    name="storelocation18"
                    onChange={handleChange}
                    placeholder={form.storelocation18}
                  />
                </td>
                <td>
                  <input
                    name="damagecheck18"
                    onChange={handleChange}
                    placeholder={form.damagecheck18}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <strong>
              Date:
              <input
                name="date"
                onChange={handleChange}
                placeholder={form.date}
              />
            </strong>
            <strong>
              Signature:
              <input
                name="signature"
                onChange={handleChange}
                placeholder={form.signature}
              />
            </strong>
            {form.signature}
          </div>
          <div>
            <button onClick={handleUpdate}>Update</button>
          </div>
          <div>
            <button onClick={handleClick}>delete</button>
          </div>
        </article>
      )}
    </div>
  );
};

export default Editcreate;
