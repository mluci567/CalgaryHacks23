const GroupData = ({
  name,
  subject,
  course,
  meettime,
  isrecurring,
  maxsize,
  purpose,
  roomnumber,
}) => {
  return (
    <div className="roomData">
      <div className="roomHeader">
        <h3>
          {name} - {subject} {course}
        </h3>
      </div>
      <hr />
      <h4>Details</h4>
      <p>
        Meets {meettime} {isrecurring && ": Recurring"}
      </p>
      <p>Max Size: {maxsize}</p>
      <hr />
      <h4>Purpose</h4>
      <p>{purpose}</p>
      <hr />
      <h4>Room</h4>
      <p>Room: {roomnumber}</p>
    </div>
  );
};

export default GroupData;
