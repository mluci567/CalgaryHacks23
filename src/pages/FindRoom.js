import { useOutletContext } from "react-router-dom";
import RoomData from "../RoomData";

const FindRoom = () => {
  useOutletContext();
  return (
    <div className="FindRoom">
      <div className="roomList">
        <RoomData
          roomnumber={"B1204"}
          type={"Beeg Room"}
          floor={"3"}
          capacity={"2-6"}
          hours={"8am-10pm"}
          accessrating={"3"}
          noiselevel={"2"}
          adjustablelighting={"Yes"}
          whiteboard={"Yes"}
          outlets={"Yes"}
          washroom={"Yes"}
          transit={"Yes"}
        />
        <RoomData
          roomnumber={"T111"}
          type={"Presentation Room"}
          floor={"1"}
          capacity={"2-6"}
          hours={"8am-5pm"}
          accessrating={"5"}
          noiselevel={"1"}
          adjustablelighting={"No"}
          whiteboard={"No"}
          outlets={"Yes"}
          food={"Yes"}
          washroom={"Yes"}
          parking={"Yes"}
          transit={"Yes"}
        />
        <RoomData
          roomnumber={"EA1204"}
          type={"Smol Room"}
          floor={"3"}
          capacity={"2-6"}
          hours={"8am-10pm"}
          accessrating={"3"}
          noiselevel={"2"}
          adjustablelighting={"Yes"}
          whiteboard={"Yes"}
          outlets={"Yes"}
        />
        <RoomData
          roomnumber={"J122"}
          type={"Presentation Room"}
          floor={"1"}
          capacity={"2-6"}
          hours={"8am-5pm"}
          accessrating={"5"}
          noiselevel={"1"}
          adjustablelighting={"No"}
          whiteboard={"No"}
          outlets={"Yes"}
          food={"Yes"}
          washroom={"Yes"}
        />
      </div>
    </div>
  );
};

export default FindRoom;
