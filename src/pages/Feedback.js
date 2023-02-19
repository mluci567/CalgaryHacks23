import { useOutletContext } from "react-router-dom";

const Feedback = () => {
  useOutletContext();
  return (
    <div className="Feedback">
      <h1>Have any feedback?</h1>
    </div>
  );
};

export default Feedback;
