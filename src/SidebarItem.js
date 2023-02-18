const SidebarItem = ({ title, onClick }) => {
  return (
    <div className="sidebarItem" onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
};

export default SidebarItem;
