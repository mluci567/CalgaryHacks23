import { useOutletContext } from "react-router-dom";
import RoomData from "../RoomData";
import RoomSearcher from "./RoomSearcher";
import { useState } from "react";

const FindRoom = () => {
  useOutletContext();

  const [filters, setFilters] = useState(["food"]);
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
      food: false,
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

  const filteredSubcomponents = sortedSubcomponents.filter((subcomponent) => {
    if (filters.length === 0) {
      return true;
    }
    const filterConditions = {
      food: subcomponent.food,
      washroom: subcomponent.washroom,
      parking: subcomponent.parking,
      transit: subcomponent.transit,
      outlets: subcomponent.outlets,
      whiteboard: subcomponent.whiteboard,
      adjustablelighting: subcomponent.adjustablelighting,
    };
    return filters.every((filter) => filterConditions[filter]);
  });

  return (
    <div className="FindRoom">
      <RoomSearcher
        filterOptions={[
          "food",
          "washroom",
          "parking",
          "transit",
          "outlets",
          "whiteboard",
          "adjustablelighting",
        ]}
        selectedFilters={filters}
        onFilterChange={setFilters}
        onSortChange={setSort}
      />
      <div className="roomList">
        {/* show only the components with the given filters */}
        {filteredSubcomponents.map((subcomponent) => (
          <RoomData {...subcomponent} />
        ))}
      </div>
      {filteredSubcomponents.length === 0 && (
        <div className="noResults">No results found</div>
      )}
    </div>
  );
};

export default FindRoom;
