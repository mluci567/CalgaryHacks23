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
          disableDefaultUI: true,
          minZoom: 17,
          maxZoom: 21,
          restriction: {
            latLngBounds: {
              north: 51.014468,
              south: 51.009813,
              east: -114.123462,
              west: -114.137163,
            },
          },
        }}

 



        onMapLoad={(map) => {
          new window.google.maps.Marker({
            position: { lat:51.012235, lng:-114.128293  },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat:51.012162, lng:-114.128088  },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat:51.012105, lng: -114.127906 },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat:51.012055, lng:-114.127726  },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat:51.011993, lng: -114.127545  },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat:51.01194, lng:-114.127384  },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat: 51.012511, lng: -114.127983 },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat:51.012457 ,lng:-114.127825  },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat: 51.012415 ,lng:-114.127683 },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat: 51.012366 , lng:-114.127522 },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat: 51.012305, lng:-114.127361 },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat:51.012256, lng:-114.127171  },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat:51.012276, lng:-114.127812  },
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });
          new window.google.maps.Marker({
            position: { lat:51.0122, lng:-114.127552},
            map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
          });

          const georssLayer = new window.google.maps.KmlLayer({
            url: "https://www.google.com/maps/d/u/0/kml?forcekml=1&mid=13hcoDvLGU3e82WwLqdwffIeQSPTCku0&lid=w0vhAiWaJx0",
            suppressInfoWindows: false,
            map:map,
            
          });
        
          georssLayer.setMap(map);
        }
        }
      />
    </div>
  );
};

export default ViewCampus;
