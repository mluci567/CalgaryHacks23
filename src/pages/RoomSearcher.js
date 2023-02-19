const RoomSearcher = (props) => {
  const { filterOptions, selectedFilters, onFilterChange, onSortChange } =
    props;

  const handleFilterChange = (event) => {
    const value = event.target.value;
    if (selectedFilters.includes(value)) {
      onFilterChange(selectedFilters.filter((filter) => filter !== value));
    } else {
      onFilterChange([...selectedFilters, value]);
    }
  };

  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="RoomSearcher">
      <h1>Find a Room</h1>
      <div className="RoomFinderFilterStuff">
        <label className="filterLabel">
          <h4>⠀⠀Require:</h4>
          {filterOptions.map((option) => (
            <div className="filter">
              <label key={option}>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedFilters.includes(option)}
                  onChange={handleFilterChange}
                />

                {option === "adjustablelighting" ? (
                  <>
                    <br />
                    Adjustable Lighting
                  </>
                ) : (
                  option.charAt(0).toUpperCase() + option.slice(1)
                )}
              </label>
            </div>
          ))}
        </label>
        <label className="sortLabel">
          <h4>⠀Sort by:</h4>
          <select onChange={handleSortChange}>
            <option value="noise">Noise Level</option>
            <option value="access">Accessibility</option>
            <option value="floor">Floor</option>
            <option value="a">Capacity</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default RoomSearcher;
