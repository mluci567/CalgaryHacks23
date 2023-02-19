import foodIcon from "./assets/cutlery.png";
import disabledIcon from "./assets/disabled.png";
import energyIcon from "./assets/energy.png";
import parkingIcon from "./assets/parking.png";
import volumeIcon from "./assets/volume.png";
import washroomIcon from "./assets/bathroom.png";
import lightIcon from "./assets/light-bulb.png";
import presentationIcon from "./assets/presentation.png";
import transitIcon from "./assets/bus-station.png";

const RoomData = ({
  roomnumber,
  floor,
  type,
  capacity,
  hours,
  accessrating,
  noiselevel,
  adjustablelighting,
  whiteboard,
  outlets,
  food,
  washroom,
  parking,
  transit,
}) => {
  return (
    <div className="roomData">
      <div className="roomHeader">
        <h3>
          {roomnumber} - {type}
        </h3>
      </div>
      <hr />
      <h4>Details</h4>
      <p>
        Floor {floor}, {hours}
      </p>
      <p>Capacity: {capacity}</p>
      <hr />
      <h4>Amenities</h4>
      {whiteboard && (
        <img
          src={presentationIcon}
          alt="presentation icon"
          title="White/Blackboards Avaliable"
        ></img>
      )}
      {food && <img src={foodIcon} alt="food icon" title="Food Nearby"></img>}
      {washroom && (
        <img
          src={washroomIcon}
          alt="washroom icon"
          title="Washrooms Nearby"
        ></img>
      )}
      {parking && (
        <img src={parkingIcon} alt="parking icon" title="Parking Nearby"></img>
      )}
      {transit && (
        <img
          src={transitIcon}
          alt="transit icon"
          title="Transit Accessable"
        ></img>
      )}
      {outlets && (
        <img src={energyIcon} alt="energy icon" title="Outlets Avaliable"></img>
      )}
      <hr />
      <h4>Noise Level</h4>
      {/* draw a volume icon for noise level */}
      {noiselevel === 1 && (
        <div className="rating">
          <img src={volumeIcon} alt="volume icon" title="Low Volume Area"></img>
        </div>
      )}
      {noiselevel === 2 && (
        <div className="rating">
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Light Volume Area"
          ></img>
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Light Volume Area"
          ></img>
        </div>
      )}
      {noiselevel === 3 && (
        <div className="rating">
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Average Volume Area"
          ></img>
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Average Volume Area"
          ></img>
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Average Volume Area"
          ></img>
        </div>
      )}
      {noiselevel === 4 && (
        <div className="rating">
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Moderate Volume Area"
          ></img>
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Moderate Volume Area"
          ></img>
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Moderate Volume Area"
          ></img>
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Moderate Volume Area"
          ></img>
        </div>
      )}
      {noiselevel === 5 && (
        <div className="rating">
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Loud Volume Area"
          ></img>
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Loud Volume Area"
          ></img>
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Loud Volume Area"
          ></img>
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Loud Volume Area"
          ></img>
          <img
            src={volumeIcon}
            alt="volume icon"
            title="Loud Volume Area"
          ></img>
        </div>
      )}
      <p className="hideMe">-</p>
      <hr />
      <h4>Accessibility</h4>

      {accessrating === 1 && (
        <div className="rating">
          <img
            src={disabledIcon}
            alt="energy icon"
            title="Poor Accessibility"
          ></img>
        </div>
      )}
      {accessrating === 2 && (
        <div className="rating">
          <img
            src={disabledIcon}
            alt="energy icon"
            title="Low Accessibility"
          ></img>
          <img
            src={disabledIcon}
            alt="energy icon"
            title="Low Accessibility"
          ></img>
        </div>
      )}
      {accessrating === 3 && (
        <div className="rating">
          <img
            src={disabledIcon}
            alt="energy icon"
            title="Average Accessibility"
          ></img>
          <img
            src={disabledIcon}
            alt="energy icon"
            title="Average Accessibility"
          ></img>
          <img
            src={disabledIcon}
            alt="energy icon"
            title="Average Accessibility"
          ></img>
        </div>
      )}
      {accessrating === 4 && (
        <div className="rating">
          <img
            src={disabledIcon}
            alt="energy icon"
            title="Good Accessibility"
          ></img>
          <img
            src={disabledIcon}
            alt="energy icon"
            title="Good Accessibility"
          ></img>
          <img
            src={disabledIcon}
            alt="energy icon"
            title="Good Accessibility"
          ></img>
          <img
            src={disabledIcon}
            alt="energy icon"
            title="Good Accessibility"
          ></img>
        </div>
      )}
      {accessrating === 5 && (
        <div className="rating">
          <img src={disabledIcon} alt="energy icon" title="Accessible"></img>
          <img src={disabledIcon} alt="energy icon" title="Accessible"></img>
          <img src={disabledIcon} alt="energy icon" title="Accessible"></img>
          <img src={disabledIcon} alt="energy icon" title="Accessible"></img>
          <img src={disabledIcon} alt="energy icon" title="Accessible"></img>
        </div>
      )}
    </div>
  );
};

export default RoomData;
