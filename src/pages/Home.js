import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Outlet context="dashboard" />
    </>
  );
};

export default Home;
