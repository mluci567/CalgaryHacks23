import Sidebar from "../Sidebar";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // if there's no user in local storage, redirect to login page

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      console.log("no user in local storage");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Sidebar />
      <Outlet context="dashboard" />
    </>
  );
};

export default Home;
