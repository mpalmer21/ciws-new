import React from "react";
import { ProgressBar } from "react-bootstrap";

const Step4 = (props) => {
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
    //               <th>Number received.</th>
    //               <th>Component size.</th>
    //               <th>Stores Location.</th>
    //               <th>Damage Check.</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <td id="row0">
    //                 <div className="form-group ">
    //                   <select
    //                     onChange={handleChange}
    //                     value={data.compname}
    //                     placeholder="Enter "
    //                     name="compname"
    //                     className="form-select"
    //                   >
    //                     <option value="default" hidden>
    //                       Select Inlet
    //                     </option>
    //                     <option value="">N/a</option>
    //                     <option>Inlet Valve Seats</option>
    //                   </select>
    //                 </div>
    //               </td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   className="form-control"
    //                   name="norecieved"
    //                   value={data.norecieved}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="compsize"
    //                   value={data.compsize}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="storelocation"
    //                   value={data.storelocation}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="damagecheck"
    //                   value={data.damagecheck}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //             </tr>
    //             <tr>
    //               <td id="row1">
    //                 <div className="form-group ">
    //                   <select
    //                     placeholder=" "
    //                     onChange={handleChange}
    //                     value={data.compname1}
    //                     name="compname1"
    //                     className="form-select"
    //                   >
    //                     <option value="default" hidden>
    //                       Select 0-rings
    //                     </option>
    //                     <option value="">N/a</option>
    //                     <option>0-rings for Seats</option>
    //                   </select>
    //                 </div>
    //               </td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   className="form-control"
    //                   name="norecieved1"
    //                   value={data.norecieved1}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="compsize1"
    //                   value={data.compsize1}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="storelocation1"
    //                   value={data.storelocation1}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="damagecheck1"
    //                   value={data.damagecheck1}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //             </tr>
    //             <tr>
    //               <td id="row2">
    //                 <div className="form-group ">
    //                   <select
    //                     onChange={handleChange}
    //                     name="compname2"
    //                     value={data.compname2}
    //                     className="form-select"
    //                   >
    //                     <option value="default" hidden>
    //                       Select Exhaust
    //                     </option>
    //                     <option value="">N/a</option>
    //                     <option>Exhaust Valve Seats</option>
    //                   </select>
    //                 </div>
    //               </td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   className="form-control"
    //                   name="norecieved2"
    //                   value={data.norecieved2}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="compsize2"
    //                   onChange={handleChange}
    //                   value={data.compsize2}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="storelocation2"
    //                   onChange={handleChange}
    //                   value={data.storelocation2}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="damagecheck2"
    //                   onChange={handleChange}
    //                   value={data.damagecheck2}
    //                 />
    //               </td>
    //             </tr>
    //             <tr>
    //               <td id="row3">
    //                 <div className="form-group ">
    //                   <select
    //                     onChange={handleChange}
    //                     name="compname3"
    //                     value={data.compname3}
    //                     className="form-select"
    //                   >
    //                     <option value="default" hidden>
    //                       Select O-rings
    //                     </option>
    //                     <option value="">N/a</option>
    //                     <option>O-rings</option>
    //                   </select>
    //                 </div>
    //               </td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   className="form-control"
    //                   name="norecieved3"
    //                   value={data.norecieved3}
    //                   onChange={handleChange}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="compsize3"
    //                   onChange={handleChange}
    //                   value={data.compsize3}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="storelocation3"
    //                   onChange={handleChange}
    //                   value={data.storelocation3}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="damagecheck3"
    //                   onChange={handleChange}
    //                   value={data.damagecheck3}
    //                 />
    //               </td>
    //             </tr>
    //             <tr>
    //               <td id="row4">
    //                 <div className="form-group ">
    //                   <select
    //                     onChange={handleChange}
    //                     value={data.compname4}
    //                     name="compname4"
    //                     className="form-select"
    //                   >
    //                     <option value="default" hidden>
    //                       Select Injector
    //                     </option>
    //                     <option value="">N/a</option>
    //                     <option>Injector Sleeve/Tube</option>
    //                   </select>
    //                 </div>
    //               </td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   className="form-control"
    //                   name="norecieved4"
    //                   onChange={handleChange}
    //                   value={data.norecieved4}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="compsize4"
    //                   onChange={handleChange}
    //                   value={data.compsize4}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="storelocation4"
    //                   onChange={handleChange}
    //                   value={data.storelocation4}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="damagecheck4"
    //                   onChange={handleChange}
    //                   value={data.damagecheck4}
    //                 />
    //               </td>
    //             </tr>
    //             <tr>
    //               <td id="row5">
    //                 <div className="form-group ">
    //                   <select
    //                     onChange={handleChange}
    //                     value={data.compname5}
    //                     name="compname5"
    //                     className="form-select"
    //                   >
    //                     <option value="default" hidden>
    //                       Select O-rings
    //                     </option>
    //                     <option value="">N/a</option>
    //                     <option>O-rings for Inj Sleeve</option>
    //                   </select>
    //                 </div>
    //               </td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   className="form-control"
    //                   name="norecieved5"
    //                   onChange={handleChange}
    //                   value={data.norecieved5}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="compsize5"
    //                   onChange={handleChange}
    //                   value={data.compsize5}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="textarea"
    //                   className="form-control"
    //                   name="storelocation5"
    //                   onChange={handleChange}
    //                   value={data.storelocation5}
    //                 />
    //               </td>
    //               <td>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="damagecheck5"
    //                   onChange={handleChange}
    //                   value={data.damagecheck5}
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
export default Step4;
