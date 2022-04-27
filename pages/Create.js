import { useState } from "react";
import { useHistory } from "react-router-dom";
import { UseLocalStorage } from "../utilities/UseLocalStorage";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import Step5 from "../Steps/Step5";
import Step6 from "../Steps/Step6";
import Step7 from "../Steps/Step7";
import FinalStep from "../Steps/FinalStep";
import "./create.css";

const Create = () => {
  const history = useHistory();

  const [values, setValues] = UseLocalStorage("form", ""); //local storage to save user input

  const [step, setStep] = useState(1); //setting initial state to 1 which corresponds to Step 1

  const nextStep = () => {
    //conditions to move to the next step
    if (step < 8) {
      setStep(step + 1);
    } else if (step === 8) {
      console.log(values);
    }
  };

  const prevStep = () => {
    //conditions to move to the back a step
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e) => {
    //handling channge events for given name attribute and settting as new setValues
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newForm = { ...values };

    await fetch(`/forms`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm),
    }).then(() => {
      // history.go(-1);
      history.push("/");
      alert("Your file is being uploaded!");
      window.localStorage.clear();
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

  //props to handle events and store value are passed down

  return (
    <div>
      {/* <div className="multistep-form">
        <h1>Book In Form</h1>
      </div>

      {
        {
          1: (
            <Step1
              handleChange={handleChange}
              data={values}
              nextStep={nextStep}
              step={step}
            />
          ),
          2: (
            <Step2
              handleChange={handleChange}
              data={values}
              prevStep={prevStep}
              nextStep={nextStep}
              step={step}
            />
          ),
          3: (
            <Step3
              handleChange={handleChange}
              data={values}
              prevStep={prevStep}
              nextStep={nextStep}
              step={step}
            />
          ),
          4: (
            <Step4
              handleChange={handleChange}
              data={values}
              prevStep={prevStep}
              nextStep={nextStep}
              step={step}
            />
          ),
          5: (
            <Step5
              handleChange={handleChange}
              data={values}
              prevStep={prevStep}
              nextStep={nextStep}
              step={step}
            />
          ),
          6: (
            <Step6
              handleChange={handleChange}
              data={values}
              prevStep={prevStep}
              nextStep={nextStep}
              step={step}
            />
          ),
          7: (
            <Step7
              handleChange={handleChange}
              data={values}
              prevStep={prevStep}
              nextStep={nextStep}
              step={step}
            />
          ),
          8: (
            <FinalStep
              handleChange={handleChange}
              data={values}
              handleSubmit={handleSubmit}
              prevStep={prevStep}
              nextStep={nextStep}
              step={step}
            />
          ),
        }[step]
      } */}
    </div>
  );
};

export default Create;
