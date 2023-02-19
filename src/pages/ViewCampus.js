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
          center: { lat: 41.0082, lng: 28.9784 },
          zoom: 8,
        }}
        onMapLoad={(map) => {
          var marker = new window.google.maps.Marker({
            position: { lat: 41.0082, lng: 28.9784 },
            map: map,
            title: "Hello Istanbul!",
          });
          marker.setMap(map);
        }}
      />
    </div>
  );
};

export default ViewCampus;
