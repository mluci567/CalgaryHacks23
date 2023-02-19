import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      console.log("no user in local storage");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="Settings">
      <h1>Settings</h1>
      <button
        onClick={() => {
          // remove all local storage
          localStorage.clear();
          window.location.reload();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Settings;
