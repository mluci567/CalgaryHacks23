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
        <GroupData
          name="Bio Study Group"
          course="BIOL1001"
          meettime="Tuesdays at 2:00pm"
          isrecurring={true}
          maxsize={6}
          purpose="Just to keep up with the course"
          roomnumber="EL1120"
        />
        <GroupData
          name="Math Study Group"
          course="MATH1505"
          meettime="Wednesday 22 at 4:00pm"
          isrecurring={false}
          maxsize={4}
          purpose="Keep up with all the assignments"
          roomnumber="EB1161"
        />
        <GroupData
          name="Chem Group Project"
          course="CHEM2511"
          meettime="Thursday 2 at 6:00pm"
          isrecurring={false}
          maxsize={2}
          purpose="Looking for a partner for the chem project!"
          roomnumber="EA162"
        />
        <GroupData
          name="Physics Team"
          course="PHYS3519"
          meettime="Friday 3 at 8:00pm"
          isrecurring={false}
          maxsize={3}
          purpose="Looking for a team for physics!"
          roomnumber="EB1161"
        />
        <GroupData
          name="Hackathon Team!"
          course="WEB3511"
          meettime="Saturday 18 at 10:00am"
          isrecurring={false}
          maxsize={5}
          purpose="Looking for a team for Calgary Hacks!"
          roomnumber="B103"
        />
      </div>
    </div>
  );
};

export default FindGroup;
