const RoomData = ({
  roomNumber,
  floor,
  type,
  capacity,
  hours,
  accessRating,
  noiseLevel,
  adjustableLighting,
  whiteboard,
  outlets,
  food,
  washroom,
  parking,
  transit,
}) => {
  <div className="roomData">
    <h3>
      {roomNumber} - {type}
    </h3>
    <p>Floor {floor}</p>
    <p>Capacity: {capacity}</p>
    <p>Hours: {hours}</p>
    <p>Access Rating: {accessRating}</p>
    <p>Noise Level: {noiseLevel}</p>
    <p>Adjustable Lighting: {adjustableLighting}</p>
    <p>Whiteboard: {whiteboard}</p>
    <p>Outlets: {outlets}</p>
    {food && <p>Food: {food}</p>}
    {washroom && <p>Washroom: {washroom}</p>}
    {parking && <p>Parking: {parking}</p>}
    {transit && <p>Transit: {transit}</p>}
  </div>;
};

export default RoomData;
