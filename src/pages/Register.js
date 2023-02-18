// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Login.css";

const Register = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate("/dashboard");
    // event.preventDefault();
    // axios
    //   .post("/api/data", formData)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="leftSide">
        <div className="centered">
          <h1>Find Your Space.</h1>
          <p>Get ready to get more done.</p>
          <br />

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />
            <label htmlFor="email">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <label htmlFor="institution">Institution</label>
            <select
              name="institution"
              id="institution"
              placeholder="Institution"
              onChange={handleChange}
            >
              <option disabled selected value="">
                Select an Institution
              </option>
              <option value="mru">Mount Royal University, Alberta</option>
              <option value="uofc">University of Calgary, Alberta</option>
              <option value="audi">
                Southern Alberta Institute of Technology
              </option>
            </select>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
