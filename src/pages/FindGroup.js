import { useOutletContext } from "react-router-dom";

const FindGroup = () => {
  useOutletContext();
  return (
    <div className="FindGroup">
      <h1>Find a Group</h1>
    </div>
  );
};

export default FindGroup;
