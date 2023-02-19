// import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userData from "../users.json";

import "../Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData.find((user) => user.email === email);
    if (user && user.password === password) {
      console.log("Logged in successfully!");

      localStorage.setItem("username", user.name);
      localStorage.setItem("email", user.email);
      localStorage.setItem("institution", user.institution);

      navigate("/dashboard");
    } else {
      setErrorMessage("Incorrect username or password");
    }
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
            {errorMessage && (
              <p className="errorLoggingIn">
                {errorIcon}
                {errorMessage}
              </p>
            )}

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
