import PartList from "../Components/PartList";
import useFetch from "../useFetch";
import "./completedform.css";

const CompletedInspection = () => {
  const { error, isPending, data: parts } = useFetch(`/parts`); // using custome fetch to fecth from API end point

  return (
    //tertionary conditions if one of the conditions are met
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {parts && <PartList parts={parts} />}
    </div>
  );
};

export default CompletedInspection;
