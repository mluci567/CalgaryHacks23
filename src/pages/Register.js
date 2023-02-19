// import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userData from "../users.json";

import "../Login.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institution, setInstitution] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const errorIcon = (
    <svg
      class="octicon octicon-alert mr-2"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
      ></path>
    </svg>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const doesEmailExist = userData.find((user) => user.email === email);

    if (doesEmailExist) {
      setErrorMessage("Email already exists");
      return;
    }

    if (firstName && lastName && email && password && institution) {
      console.log("New Account Created!");

      const newUser = {
        name: firstName + " " + lastName,
        email: email,
        password: password,
        institution: institution,
      };

      userData.push(newUser);

      localStorage.setItem("username", newUser.name);
      localStorage.setItem("email", newUser.email);
      localStorage.setItem("institution", newUser.institution);

      navigate("/dashboard");
    } else {
      setErrorMessage("Please fill out all fields");
    }
  };

  return (
    <div className="register">
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
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="email">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="institution">Institution</label>
            <select
              name="institution"
              id="institution"
              placeholder="Institution"
              onChange={(e) => setInstitution(e.target.value)}
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
            {errorMessage && (
              <p className="errorLoggingIn">
                {errorIcon}
                {errorMessage}
              </p>
            )}
            <button type="submit">Register</button>
            <Link to="/login">
              <button>Back to Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
