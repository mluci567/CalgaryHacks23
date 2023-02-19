import { useOutletContext } from "react-router-dom";

const CreateGroup = () => {
  useOutletContext();
  return (
    <div className="CreateGroup">
      <h1>Create a Group</h1>
    </div>
  );
};

export default CreateGroup;
