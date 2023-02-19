import { useOutletContext } from "react-router-dom";
import GroupData from "../GroupData";

const FindGroup = () => {
  useOutletContext();
  return (
    <div className="FindGroup">
      <div className="FindGroupHeader">
        <h1>Find a Group</h1>
      </div>
      <div className="roomList">
        <GroupData
          name="Comp Buddies"
          course="COMP1502"
          meettime="Mondays at 10:00am"
          isrecurring={true}
          maxsize={10}
          purpose="Study for midterm"
          roomnumber="B103"
        />
      </div>
    </div>
  );
};

export default FindGroup;
