import React from "react";
import { ProgressBar } from "react-bootstrap";

const Step6 = (props) => {
  const { data, handleChange, prevStep, nextStep, step } = props;
  return (
    <></>
    // <div className="create">
    //   <div>
    //     <h2>Components Booking In Form</h2>
    //     <div className="form-step">
    //       <div className="td">
    //         <table>
    //           <thead>
    //             <tr>
    //               <th>Component Name.</th>
    //               <th>Number recieved.</th>
    //               <th>Component size.</th>
    //               <th>Stores Location.</th>
    //               <th>Damage Check.</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <td id="row13">
    //                 <div className="form-group ">
    //                   <select
    //                     onChange={handleChange}
    //                     name="compname13"
    //                     value={data.compname13}
    //                     className="form-select"
    //                   >
    //                     <option value="default" hidden>
    //                       Select If additional O-ring are supplied
    //                     </option>
    //                     <option value="">N/a</option>
    //                     <option>
    //                       O-rings (If additional O-ring are supplied, please
    //                       state which part they are to be fitted on and list
    //                       diferent sizes separately as they need to be booked in
    //                       on the system as a different part)
    //                     </option>
    //                   </select>
    //                 </div>
    //               </td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   className="form-control"
    //                   name="norecieved13"
    //                   onChange={handleChange}
    //                   value={data.norecieved13}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="compsize13"
    //                   onChange={handleChange}
    //                   value={data.compsize13}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="storelocation13"
    //                   onChange={handleChange}
    //                   value={data.storelocation13}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="damagecheck13"
    //                   onChange={handleChange}
    //                   value={data.damagecheck13}
    //                 />
    //               </td>
    //             </tr>
    //             <tr>
    //               <td id="row14">
    //                 <div className="form-group ">
    //                   <select
    //                     onChange={handleChange}
    //                     name="compname14"
    //                     value={data.compname14}
    //                     className="form-select"
    //                   >
    //                     <option value="default" hidden>
    //                       Select Seat Sleeve/Bush
    //                     </option>
    //                     <option value="">N/a</option>
    //                     <option>Seat Sleeve/Bush</option>
    //                   </select>
    //                 </div>
    //               </td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   className="form-control"
    //                   name="norecieved14"
    //                   onChange={handleChange}
    //                   value={data.norecieved14}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="compsize14"
    //                   onChange={handleChange}
    //                   value={data.compsize14}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="storelocation14"
    //                   onChange={handleChange}
    //                   value={data.storelocation14}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="damagecheck14"
    //                   onChange={handleChange}
    //                   value={data.damagecheck14}
    //                 />
    //               </td>
    //             </tr>
    //             <tr>
    //               <td id="row15">
    //                 <input
    //                   onChange={handleChange}
    //                   placeholder="Enter additional information"
    //                   name="compname15"
    //                   value={data.compname15}
    //                   className="form-select"
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   className="form-control"
    //                   name="norecieved15"
    //                   value={data.norecieved15}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="compsize15"
    //                   value={data.compsize15}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="storelocation15"
    //                   value={data.storelocation15}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="damagecheck15"
    //                   value={data.damagecheck15}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //             </tr>
    //             <tr>
    //               <td id="row16">
    //                 <input
    //                   onChange={handleChange}
    //                   placeholder="Enter additional information"
    //                   name="compname16"
    //                   value={data.compname16}
    //                   className="form-select"
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   className="form-control"
    //                   name="norecieved16"
    //                   value={data.norecieved16}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="compsize16"
    //                   value={data.compsize16}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="storelocation16"
    //                   value={data.storelocation16}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="damagecheck16"
    //                   value={data.damagecheck16}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //             </tr>

    //             <tr>
    //               <td id="row17">
    //                 <input
    //                   onChange={handleChange}
    //                   name="compname17"
    //                   placeholder="Enter additional information"
    //                   value={data.compname17}
    //                   className="form-select"
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   className="form-control"
    //                   name="norecieved17"
    //                   value={data.norecieved17}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="compsize17"
    //                   value={data.compsize17}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="storelocation17"
    //                   value={data.storelocation17}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="damagecheck17"
    //                   value={data.damagecheck17}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //             </tr>
    //             <tr>
    //               <td id="row18">
    //                 <input
    //                   onChange={handleChange}
    //                   name="compname18"
    //                   placeholder="Enter additional information"
    //                   value={data.compname18}
    //                   className="form-select"
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   className="form-control"
    //                   name="norecieved18"
    //                   value={data.norecieved18}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="compsize18"
    //                   value={data.compsize18}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="storelocation18"
    //                   value={data.storelocation18}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="damagecheck18"
    //                   value={data.damagecheck18}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    //   {step > 1 ? <button onClick={prevStep}>Back</button> : null}
    //   {step < 8 ? <button onClick={nextStep}>Next</button> : null}
    // </div>
  );
};
export default Step6;
