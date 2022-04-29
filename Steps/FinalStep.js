import React from "react";

import Email from "../utilities/Email";

const FinalStep = (props) => {
  const { data, handleSubmit, prevStep, nextStep, step } = props;

  return (
    <div className="create">
      <div>
        <h2>Components Booking In Form</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Works Order:</strong> {data.worksOrder}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Head Type:</strong> {data.headType}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Customer Name:</strong> {data.customerName}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Parts Recieved From:</strong>{" "}
                      {data.partsRecievedFrom}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong> Customer Supply:</strong> {data.customerSupply}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Purchase OrderNumber:</strong>{" "}
                      {data.purchaseOrderNumber}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr></hr>
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
                  <td>{data.compname}</td>
                  <td>{data.norecieved}</td>
                  <td>{data.compsize}</td>
                  <td>{data.storelocation}</td>
                  <td>{data.damagecheck}</td>
                </tr>
                <tr>
                  <td>{data.compname1}</td>
                  <td>{data.norecieved1}</td>
                  <td>{data.compsize1}</td>
                  <td>{data.storelocation1}</td>
                  <td>{data.damagecheck1}</td>
                </tr>
                <tr>
                  <td>{data.compname2}</td>
                  <td>{data.norecieved2}</td>
                  <td>{data.compsize2}</td>
                  <td>{data.storelocation2}</td>
                  <td>{data.damagecheck2}</td>
                </tr>
                <tr>
                  <td>{data.compname3}</td>
                  <td>{data.norecieved3}</td>
                  <td>{data.compsize3}</td>
                  <td>{data.storelocation3}</td>
                  <td>{data.damagecheck3}</td>
                </tr>
                <tr>
                  <td>{data.compname4}</td>
                  <td>{data.norecieved4}</td>
                  <td>{data.compsize4}</td>
                  <td>{data.storelocation4}</td>
                  <td>{data.damagecheck4}</td>
                </tr>
                <tr>
                  <td>{data.compname5}</td>
                  <td>{data.norecieved5}</td>
                  <td>{data.compsize5}</td>
                  <td>{data.storelocation5}</td>
                  <td>{data.damagecheck5}</td>
                </tr>
                <tr>
                  <td>{data.compname6}</td>
                  <td>{data.norecieved6}</td>
                  <td>{data.compsize6}</td>
                  <td>{data.storelocation6}</td>
                  <td>{data.damagecheck6}</td>
                </tr>
                <tr>
                  <td>{data.compname7}</td>
                  <td>{data.norecieved7}</td>
                  <td>{data.compsize7}</td>
                  <td>{data.storelocation7}</td>
                  <td>{data.damagecheck7}</td>
                </tr>
                <tr>
                  <td>{data.compname8}</td>
                  <td>{data.norecieved8}</td>
                  <td>{data.compsize8}</td>
                  <td>{data.storelocation8}</td>
                  <td>{data.damagecheck8}</td>
                </tr>
                <tr>
                  <td>{data.compname9}</td>
                  <td>{data.norecieved9}</td>
                  <td>{data.compsize9}</td>
                  <td>{data.storelocation9}</td>
                  <td>{data.damagecheck9}</td>
                </tr>
                <tr>
                  <td>{data.compname10}</td>
                  <td>{data.norecieved10}</td>
                  <td>{data.compsize10}</td>
                  <td>{data.storelocation10}</td>
                  <td>{data.damagecheck10}</td>
                </tr>
                <tr>
                  <td>{data.compname11}</td>
                  <td>{data.norecieved11}</td>
                  <td>{data.compsize11}</td>
                  <td>{data.storelocation11}</td>
                  <td>{data.damagecheck11}</td>
                </tr>
                <tr>
                  <td>{data.compname12}</td>
                  <td>{data.norecieved12}</td>
                  <td>{data.compsize12}</td>
                  <td>{data.storelocation12}</td>
                  <td>{data.damagecheck12}</td>
                </tr>
                <tr>
                  <td>{data.compname13}</td>
                  <td>{data.norecieved13}</td>
                  <td>{data.compsize13}</td>
                  <td>{data.storelocation13}</td>
                  <td>{data.damagecheck13}</td>
                </tr>
                <tr>
                  <td>{data.compname14}</td>
                  <td>{data.norecieved14}</td>
                  <td>{data.compsize14}</td>
                  <td>{data.storelocation14}</td>
                  <td>{data.damagecheck14}</td>
                </tr>
                <tr>
                  <td>{data.compname15}</td>
                  <td>{data.norecieved15}</td>
                  <td>{data.compsize15}</td>
                  <td>{data.storelocation15}</td>
                  <td>{data.damagecheck15}</td>
                </tr>
                <tr>
                  <td>{data.compname16}</td>
                  <td>{data.norecieved16}</td>
                  <td>{data.compsize16}</td>
                  <td>{data.storelocation16}</td>
                  <td>{data.damagecheck16}</td>
                </tr>
                <tr>
                  <td>{data.compname17}</td>
                  <td>{data.norecieved17}</td>
                  <td>{data.compsize17}</td>
                  <td>{data.storelocation17}</td>
                  <td>{data.damagecheck17}</td>
                </tr>
                <tr>
                  <td>{data.compname18}</td>
                  <td>{data.norecieved18}</td>
                  <td>{data.compsize18}</td>
                  <td>{data.storelocation18}</td>
                  <td>{data.damagecheck18}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <strong>Date:</strong> {data.date}
              <strong>Signature:</strong>
              {data.signature}
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div>
          <Email />
        </div>
      </div>
      {step > 1 ? <button onClick={prevStep}>Back</button> : null}
      {step < 8 ? <button onClick={nextStep}>Next</button> : null}
    </div>
  );
};
export default FinalStep;
