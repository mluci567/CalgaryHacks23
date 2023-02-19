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
          zoom: 19.75,
          tilt: 100,
          heading:90,
          mapId:'897cac78f7867e60',
        }}


        onMapLoad={(map) => {

          var marker = new window.google.maps.Marker({
            position: { lat: 51.01225, lng: -114.12779 },
            map: map,
            title: "Hello Istanbul!",
          });

          const triangleCoords = [
            { lat: 51.011853582300624, lng: -114.12734838454602},
            { lat: 51.0122285112908, lng: -114.12704295502095},
            { lat: 51.012187979686914, lng: -114.1283917152849},
            { lat: 51.012579855073746, lng: -114.12807241275542},
            
          ];
          // Construct the polygon.
          const bermudaTriangle = new window.google.maps.Polygon({
            paths: triangleCoords,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
          });
          bermudaTriangle.setMap(map);

          
          marker.setMap(map);
        }}
      />
    </div>
  );
};

export default ViewCampus;
