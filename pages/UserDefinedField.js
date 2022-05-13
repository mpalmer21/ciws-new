import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Step1 from "../Steps_2/Step1";
import Step2 from "../Steps_2/Step2";
import Step3 from "../Steps_2/Step3";
import Step4 from "../Steps_2/Step4";
import Step5 from "../Steps_2/Step5";
import Step6 from "../Steps_2/Step6";
import Step7 from "../Steps_2/Step7";
import FinalStep from "../Steps_2/FinalStep";

const UserDefinedField = () => {
  //

  const [values2, setValues2] = useState({});

  const [step, setStep] = useState(1);

  //conditions for next step
  const nextStep = () => {
    if (step < 8) {
      setStep(step + 1);
    } else if (step === 8) {
      console.log(values2);
    }
  };

  //conditons for previous step
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e) => {
    setValues2({
      ...values2,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newForm = { ...values2 };

    await fetch(`http://localhost:3000/api/part`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm),
    }).then(() => {
      console.log(newForm);
      // history.go(-1);

      alert("Your file is being uploaded!");
      window.localStorage.clear();
    });
    setValues2({
      uiqueId: "",
      stampCasting: "",
      blast: "",
      seatsRemoved: "",
      pt10Bar: "",
      TestMPI: "",
      VGuides: "",
      Componentsremoved: "",
      waterPlatesSupplied: "",
      injectorSleeveFitted: "",
      combustionFace: "",
      sampleTaken: "",
      materialSpecification: "",
      specialMaterialInstructions: "",
      otherCastingMarks: "",
      additionalNotes: "",
      inspectionResults: "",
      FIR1: "",
      FIR1Comments: "",
      FIR2: "",
      FIR2Comments: "",
      FIR3: "",
      FIR3Comments: "",
      FIR4: "",
      FIR4Comments: "",
      FIR5: "",
      FIR5Comments: "",
      FIR6: "",
      FIR6Comments: "",
      FIR7: "",
      FIR7Comments: "",
      FIR8: "",
      FIR8Comments: "",
      FIR9: "",
      FIR9Comments: "",
      FIR10: "",
      FIR10Comments: "",
      FIR11: "",
      FIR11Comments: "",
      FIR12: "",
      FIR12Comments: "",
    });
  };
  console.log(setValues2);
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <div className="multistep-form">
          <h1>Fields</h1>
        </div>

        <div className="user">
          <div>
            <h2>User Defined Fields</h2>
            {/* passisng props */}
            {
              {
                1: <Step1 handleChange={handleChange} item={values2} />,
                2: <Step2 handleChange={handleChange} item={values2} />,
                3: <Step3 handleChange={handleChange} item={values2} />,
                4: <Step4 handleChange={handleChange} item={values2} />,
                5: <Step5 handleChange={handleChange} item={values2} />,
                6: <Step6 handleChange={handleChange} item={values2} />,
                7: <Step7 handleChange={handleChange} item={values2} />,
                8: (
                  <FinalStep
                    handleChange={handleChange}
                    item={values2}
                    handleSubmit={handleSubmit}
                  />
                ),
              }[step]
            }
          </div>
          {/* tertionary for handing next and previous steps */}
          {step > 1 ? <button onClick={prevStep}>Back</button> : null}
          {step < 8 ? <button onClick={nextStep}>Next</button> : null}
        </div>
      </div>
    );
  }
  return (
    <>
      Content protected sign in to access <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default UserDefinedField;
