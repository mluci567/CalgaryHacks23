import { useOutletContext } from "react-router-dom";
import RoomData from "../RoomData";
import RoomSearcher from "./RoomSearcher";
import { useState } from "react";

const FindRoom = () => {
  useOutletContext();

  const [filters, setFilters] = useState([""]);
  const [sort, setSort] = useState("name");

  const subcomponents = [
    {
      key: "b103",
      roomnumber: "b103",
      floor: 1,
      type: "Computer Lab",
      capacity: 30,
      hours: "8am-10pm",
      accessrating: 4,
      noiselevel: 5,
      adjustablelighting: true,
      whiteboard: true,
      outlets: true,
      food: true,
      washroom: false,
      parking: false,
      transit: false,
    },
    {
      key: "b104",
      roomnumber: "b104",
      floor: 3,
      type: "Computer Lab",
      capacity: 30,
      hours: "8am-10pm",
      accessrating: 4,
      noiselevel: 2,
      adjustablelighting: true,
      whiteboard: true,
      outlets: true,
      food: true,
      washroom: false,
      parking: false,
      transit: false,
    },
    {
      roomnumber: 102,
      floor: 1,
      type: "Conference room",
      capacity: 20,
      hours: "9:00am - 6:00pm",
      accessrating: 3,
      noiselevel: 4,
      adjustablelighting: false,
      whiteboard: false,
      outlets: 4,
      food: true,
      washroom: true,
      parking: true,
      transit: false,
    },
  ];

  const sortedSubcomponents = subcomponents.sort((a, b) => {
    if (sort === "noise") {
      return a.noiselevel - b.noiselevel;
    } else if (sort === "floor") {
      return a.floor - b.floor;
    } else if (sort === "capacity") {
      return b.capacity - a.capacity;
    } else if (sort === "access") {
      return b.accessrating - a.accessrating;
    }
    return a.roomnumber.localeCompare(b.roomnumber);
  });

  console.log(
    sortedSubcomponents
      //   .filter((subcomponent) => filters.includes(subcomponent.filter))
      .map((subcomponent) => <RoomData {...subcomponent} />)
  );

  return (
    <div className="FindRoom">
      <RoomSearcher
        filterOptions={["food"]}
        selectedFilters={filters}
        onFilterChange={setFilters}
        onSortChange={setSort}
      />
      <div className="roomList">
        {sortedSubcomponents
          //   .filter((subcomponent) => filters.includes(subcomponent.filter))
          .map((subcomponent) => (
            <RoomData {...subcomponent} />
          ))}
      </div>
    </div>
  );
};

export default FindRoom;
