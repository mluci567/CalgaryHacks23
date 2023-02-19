// import axios from "axios";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import { useEffect, useState } from "react";

import settingsIcon from "./assets/settings.png";
import { Link } from "react-router-dom";

function Sidebar() {
  let formattedDay = getFormattedDay();
  let timeOfDay = getTimeOfDay();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUserName(localStorage.getItem("username"));
    }
  }, []);

  function getFormattedDay() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date();
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();

    let suffix = "th";

    if (dayOfMonth > 3 && dayOfMonth < 21) {
      suffix = "th";
    }
    switch (dayOfMonth % 10) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
        break;
    }
    console.log(`${day}, ${month} ${dayOfMonth}${suffix}`);
    return `${day}, ${month} ${dayOfMonth}${suffix}`;
  }

  function getTimeOfDay() {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 12 && hour > 5) {
      return "morning";
    } else if (hour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }

  return (
    <div>
      <div className="sidebar">
        <div className="container">
          <header>
            <h1>
              Good {timeOfDay} {userName.split(" ")[0]}.
            </h1>
            <p>Today is {formattedDay}.</p>
            <hr />
          </header>
          <SidebarItem title="View Your Campus" onClick="view-campus" />
          <SidebarItem title="Find a Room" onClick="find-room" />
          <SidebarItem title="Find a Group" onClick="find-group" />
          {/* <SidebarItem title="Create a Group" onClick="create-group" /> */}
        </div>
        <footer>
          <Link to="../feedback">
            <span>Feedback</span>
          </Link>
          <Link to="../settings">
            <img src={settingsIcon} alt="settings icon"></img>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Sidebar;
