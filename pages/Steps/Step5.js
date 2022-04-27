import React from "react";
import { ProgressBar } from "react-bootstrap";

const Step5 = (props) => {
  const { data, handleChange, prevStep, nextStep, step } = props;
  return (
    <div className="create">
      <div>
        <h2>Components Booking In Form</h2>
        <div className="form-step">
          <div className="td">
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
                  <td id="row6">
                    <div className="form-group ">
                      <select
                        onChange={handleChange}
                        name="compname6"
                        className="form-select"
                        value={data.compname6}
                      >
                        <option value="default" hidden>
                          Select Valve Guides
                        </option>
                        <option value="">N/a</option>
                        <option>Inlet Valve Guides</option>
                        <option>Valve Guide</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="norecieved6"
                      onChange={handleChange}
                      value={data.norecieved6}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="compsize6"
                      onChange={handleChange}
                      value={data.compsize6}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="storelocation6"
                      onChange={handleChange}
                      value={data.storelocation6}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="damagecheck6"
                      onChange={handleChange}
                      value={data.damagecheck6}
                    />
                  </td>
                </tr>
                <tr>
                  <td id="row7">
                    <div className="form-group ">
                      <select
                        onChange={handleChange}
                        name="compname7"
                        className="form-select"
                        value={data.compname7}
                      >
                        <option value="default" hidden>
                          Select O-ring
                        </option>
                        <option value="">N/a</option>
                        <option>O-ring for Inlet Valve Guides</option>
                        <option>O-ring for Valve Guides</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="norecieved7"
                      onChange={handleChange}
                      value={data.norecieved7}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="compsize7"
                      onChange={handleChange}
                      value={data.compsize7}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="storelocation7"
                      onChange={handleChange}
                      value={data.storelocation7}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="damagecheck7"
                      onChange={handleChange}
                      value={data.damagecheck7}
                    />
                  </td>
                </tr>
                <tr>
                  <td id="row8">
                    <div className="form-group ">
                      <select
                        onChange={handleChange}
                        value={data.compname8}
                        name="compname8"
                        className="form-select"
                      >
                        <option value="default" hidden>
                          Select Valve Guides
                        </option>
                        <option value="">N/a</option>
                        <option>Exhaust Valve Guides</option>
                        <option>Valve Guide</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="norecieved8"
                      onChange={handleChange}
                      value={data.norecieved8}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="compsize8"
                      onChange={handleChange}
                      value={data.compsize8}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="storelocation8"
                      onChange={handleChange}
                      value={data.storelocation8}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="damagecheck8"
                      onChange={handleChange}
                      value={data.damagecheck8}
                    />
                  </td>
                </tr>
                <tr>
                  <td id="row9">
                    <div className="form-group ">
                      <select
                        onChange={handleChange}
                        value={data.compname9}
                        name="compname9"
                        className="form-select"
                      >
                        <option value="default" hidden>
                          Select O-ring
                        </option>
                        <option value="">N/a</option>
                        <option>O-ring for Exhaust Valve Guides</option>
                        <option>O-ring for Valve Guide</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="norecieved9"
                      onChange={handleChange}
                      value={data.norecieved9}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="compsize9"
                      onChange={handleChange}
                      value={data.compsize9}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="storelocation9"
                      onChange={handleChange}
                      value={data.storelocation9}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="damagecheck9"
                      onChange={handleChange}
                      value={data.damagecheck9}
                    />
                  </td>
                </tr>
                <tr>
                  <td id="row10">
                    <div className="form-group ">
                      <select
                        onChange={handleChange}
                        value={data.compname10}
                        name="compname10"
                        className="form-select"
                      >
                        <option value="default" hidden>
                          Select Bolts/Yoke Pins
                        </option>
                        <option value="">N/a</option>
                        <option>Guide Bolts/Yoke Pins</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="norecieved10"
                      onChange={handleChange}
                      value={data.norecieved10}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="compsize10"
                      onChange={handleChange}
                      value={data.compsize10}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="storelocation10"
                      onChange={handleChange}
                      value={data.storelocation10}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="damagecheck10"
                      onChange={handleChange}
                      value={data.damagecheck10}
                    />
                  </td>
                </tr>
                <tr>
                  <td id="row11">
                    <div className="form-group ">
                      <select
                        onChange={handleChange}
                        value={data.compname11}
                        name="compname11"
                        className="form-select"
                      >
                        <option value="default" hidden>
                          Select O-ring
                        </option>
                        <option value="">N/a</option>
                        <option>O-ring for Guide Bolts/Yoke Pins</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="norecieved11"
                      onChange={handleChange}
                      value={data.norecieved11}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="compsize11"
                      onChange={handleChange}
                      value={data.compsize11}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="storelocation11"
                      onChange={handleChange}
                      value={data.storelocation11}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="damagecheck11"
                      onChange={handleChange}
                      value={data.damagecheck11}
                    />
                  </td>
                </tr>
                <tr>
                  <td id="row12">
                    <div className="form-group ">
                      <select
                        onChange={handleChange}
                        value={data.compname12}
                        name="compname12"
                        className="form-select"
                      >
                        <option value="default" hidden>
                          Select Air Start
                        </option>
                        <option value="">N/a</option>
                        <option>Air Start Sleeve/Valve Seat Ring</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="norecieved12"
                      onChange={handleChange}
                      value={data.norecieved12}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="compsize12"
                      onChange={handleChange}
                      value={data.compsize12}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="storelocation12"
                      onChange={handleChange}
                      value={data.storelocation12}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="damagecheck12"
                      onChange={handleChange}
                      value={data.damagecheck12}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {step > 1 ? <button onClick={prevStep}>Back</button> : null}
      {step < 8 ? <button onClick={nextStep}>Next</button> : null}
    </div>
  );
};
export default Step5;
