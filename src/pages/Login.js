// import axios from "axios";
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../Login.css";

const Login = () => {
  //   const [formData, setFormData] = useState({});
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
    // const { name, value } = event.target;
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));
  };
  return (
    <div className="login">
      <div className="leftSide">
        <div className="centered">
          <h1>Let's start studying.</h1>
          <p>Find a space to study that works for you.</p>
          <br />

          <form onSubmit={handleSubmit}>
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

            <button type="submit">Login</button>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
