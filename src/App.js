import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FindRoom from "./pages/FindRoom";
import ViewCampus from "./pages/ViewCampus";
import Feedback from "./pages/Feedback";
import FindGroup from "./pages/FindGroup";
import CreateGroup from "./pages/CreateGroup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Home />}>
            <Route path="view-campus" element={<ViewCampus />} />
            <Route path="find-room" element={<FindRoom />} />
            <Route path="find-group" element={<FindGroup />} />
            <Route path="create-group" element={<CreateGroup />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="feedback" element={<Feedback />} />

          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
