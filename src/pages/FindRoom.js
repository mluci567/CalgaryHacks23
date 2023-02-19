import { useOutletContext } from "react-router-dom";

const FindRoom = () => {
  useOutletContext();
  return (
    <div class="FindRoom">
      <h1>Find a Room</h1>
    </div>
  );
};

export default FindRoom;
