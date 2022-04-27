const Step2 = (props) => {
  const { item, handleChange } = props;
  return (
    <div>
      <label>
        <strong>Dye Pen Test-MPI test: </strong>{" "}
      </label>
      <select
        type="text"
        id="TestMPI"
        name="TestMPI"
        className="text-center"
        onChange={handleChange}
        value={item.TestMPI}
      >
        <option>Select Option</option>
        <option>NO</option>
        <option>See Report</option>
        <option>Yes</option>
      </select>
      <label>
        <strong>V Guides Fitted: </strong>{" "}
      </label>
      <select
        type="text"
        id="VGuides"
        name="VGuides"
        className="text-center"
        onChange={handleChange}
        value={item.VGuides}
      >
        <option>Select Option</option>
        <option>NO</option>
        <option>See Report</option>
        <option>Yes</option>
      </select>

      <label>
        <strong>Components removed: </strong>{" "}
      </label>
      <select
        type="text"
        id="Componentsremoved"
        name="Componentsremoved"
        className="text-center"
        onChange={handleChange}
        value={item.Componentsremoved}
      >
        <option>Select Option</option>
        <option>NO</option>
        <option>See Report</option>
        <option>Yes</option>
      </select>
      <label>
        <strong>Water Plates Supplied: </strong>{" "}
      </label>
      <select
        type="text"
        id="waterPlatesSupplied"
        name="waterPlatesSupplied"
        className="text-center"
        onChange={handleChange}
        value={item.waterPlatesSupplied}
      >
        <option>Select Option</option>
        <option>All</option>
        <option>None</option>
        <option>See Report</option>
        <option>Some</option>
      </select>
      <label>
        <strong>Injector Sleeve Fitted: </strong>{" "}
      </label>
      <select
        type="text"
        id="injectorSleeveFitted"
        name="injectorSleeveFitted"
        className="text-center"
        onChange={handleChange}
        value={item.injectorSleeveFitted}
      >
        <option>Select Option</option>
        <option>NO</option>
        <option>See Report</option>
        <option>Yes</option>
      </select>
      <label>
        <strong>Combustion Face: </strong>{" "}
      </label>
      <select
        type="text"
        id="combustionFace"
        name="combustionFace"
        className="text-center"
        onChange={handleChange}
        value={item.combustionFace}
      >
        <option>Select Option</option>
        <option>Eroded</option>
        <option>Mechanical Damage</option>
        <option>N/A</option>
        <option>Serviceable</option>
        <option>Skim</option>
        <option>SR</option>
        <option>W +MC</option>
      </select>
    </div>
  );
};
export default Step2;
