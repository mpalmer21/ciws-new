import FormList from "../utilities/FormList";
import useFetch from "../utilities/useFetch";

const CompletedForms = () => {
  const { error, isPending, data: forms } = useFetch(`/forms`); // using custome fetch to fecth from API end point

  return (
    //tertionary comkditions if one of the conditions are met
    <div className="home">
      {/* {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {forms && <FormList forms={forms} />} */}
    </div>
  );
};

export default CompletedForms;
