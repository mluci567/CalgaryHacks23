import { useOutletContext } from "react-router-dom";

const FindRoom = () => {
  useOutletContext();
  return (
    <div className="FindRoom">
      <h1>Find a Room</h1>
    </div>
  );
};

export default FindRoom;
