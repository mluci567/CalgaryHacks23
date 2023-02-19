import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Map from "./Map";

const ViewCampus = () => {
  useOutletContext();

  // set the width of the map to the width of the screen, adjusted for the sidebar
  useEffect(() => {
    const map = document.getElementById("myMap");

    // get our width
    const ViewCampus = document.querySelector(".ViewCampus");

    console.log(ViewCampus.offsetWidth);

    map.style.width = ViewCampus.offsetWidth + "px";
    map.style.height = ViewCampus.offsetHeight + "px";
  }, []);

  return (
    <div className="ViewCampus">
      <Map
        id="myMap"
        options={{
          center: { lat: 51.01225, lng: -114.12779 },
          zoom: 21,
          heading:90,
          mapId:'897cac78f7867e60',
        }}


        onMapLoad={(map) => {
          const georssLayer = new window.google.maps.KmlLayer({
            url: "https://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1eW-S4Ouzct9qitK6oSt_drCnFh1bGwo&lid=E7TrCQyC9tc",
          });
        
          georssLayer.setMap(map);
        }
        

        }
      />
    </div>
  );
};

export default ViewCampus;
