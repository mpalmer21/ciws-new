import FormList from "../Components/FormList";
import useFetch from "../useFetch";
import "./completedform.css";

const CompletedForms = () => {
  const { error, isPending, data: forms } = useFetch(`/forms`); // using custome fetch to fecth from API end point

  return (
    //tertionary comkditions if one of the conditions are met
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {forms && <FormList forms={forms} />}
    </div>
  );
};

export default CompletedForms;
