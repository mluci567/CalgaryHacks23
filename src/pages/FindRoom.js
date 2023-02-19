import { useOutletContext } from "react-router-dom";
import RoomData from "../RoomData";
import RoomSearcher from "./RoomSearcher";
import { useState } from "react";

const FindRoom = () => {
  useOutletContext();

  const [filters, setFilters] = useState([]);
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
      noiselevel: 4,
      adjustablelighting: true,
      whiteboard: true,
      outlets: true,
      food: false,
      washroom: true,
      parking: false,
      transit: false,
    },
    {
      key: "b107",
      roomnumber: "b107",
      floor: 1,
      type: "Computer Lab",
      capacity: 15,
      hours: "11am-7pm",
      accessrating: 4,
      noiselevel: 1,
      adjustablelighting: true,
      whiteboard: true,
      outlets: true,
      food: false,
      washroom: true,
      parking: false,
      transit: false,
    },
    {
      key: "EL1120",
      roomnumber: "EL1120",
      floor: 1,
      type: "Classroom",
      capacity: 40,
      hours: "11:00am - 7:00pm",
      accessrating: 2,
      noiselevel: 2,
      adjustablelighting: true,
      whiteboard: false,
      outlets: true,
      food: false,
      washroom: false,
      parking: true,
      transit: false,
    },
    {
      key: "EB1161",
      roomnumber: "EB1161",
      floor: 1,
      type: "Classroom",
      capacity: 30,
      hours: "6:00am - 10:00am",
      accessrating: 3,
      noiselevel: 3,
      adjustablelighting: true,
      whiteboard: true,
      outlets: true,
      food: false,
      washroom: true,
      parking: false,
      transit: true,
    },
    {
      key: "EA162",
      roomnumber: "EA162",
      floor: 1,
      type: "Classroom",
      capacity: 20,
      hours: "8:00am - 6:00pm",
      accessrating: 1,
      noiselevel: 1,
      adjustablelighting: true,
      whiteboard: false,
      outlets: false,
      food: true,
      washroom: false,
      parking: false,
      transit: false,
    },
    {
      key: "T234",
      roomnumber: "T234",
      floor: 2,
      type: "Lecture Hall",
      capacity: 100,
      hours: "8:00am - 6:00pm",
      accessrating: 1,
      noiselevel: 2,
      adjustablelighting: false,
      whiteboard: false,
      outlets: false,
      food: true,
      washroom: false,
      parking: false,
      transit: false,
    },
    {
      key: "EL1006",
      roomnumber: "EL1006",
      floor: 1,
      type: "Group Room",
      capacity: 6,
      hours: "8:00am - 6:00pm",
      accessrating: 3,
      noiselevel: 2,
      adjustablelighting: false,
      whiteboard: true,
      outlets: true,
      food: false,
      washroom: true,
      parking: true,
      transit: true,
    },
    {
      key: "EB2024",
      roomnumber: "EB2024",
      floor: 2,
      type: "Group Room",
      capacity: 4,
      hours: "8:00am - 6:00pm",
      accessrating: 2,
      noiselevel: 1,
      adjustablelighting: false,
      whiteboard: true,
      outlets: true,
      food: false,
      washroom: true,
      parking: true,
      transit: true,
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
