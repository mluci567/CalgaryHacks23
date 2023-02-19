import { Link, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Feedback.css";

const Feedback = () => {
  useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      console.log("no user in local storage");
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="Feedback">
      <div>
        <h1>Have any feedback?</h1>
        <form
          id="feedbackForm"
          action="mailto:aparm539@mtroyal.ca"
          method="POST"
        >
          <label>
            <input type="text" name="name" placeholder="Name" />
          </label>
          <label>
            <input type="text" name="email" placeholder="Email" />
          </label>
          <label>
            <textarea
              type="text"
              name="feedback"
              placeholder="Feedback"
              rows="4"
              cols="50"
            />
          </label>
          <input type="submit" value="Submit" />
          <Link to="/dashboard">
            <button clssName="backButton">Back to Dashboard</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
