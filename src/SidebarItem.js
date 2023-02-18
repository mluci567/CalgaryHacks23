import { Link } from "react-router-dom";

const SidebarItem = ({ title, onClick }) => {
  const location = "/dashboard/" + onClick;
  const noUnderline = { textDecoration: "none" };
  return (
    <Link to={location} style={noUnderline}>
      <div className="sidebarItem" style={noUnderline}>
        <h2 style={noUnderline}>{title}</h2>
      </div>
    </Link>
  );
};

export default SidebarItem;
