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
      <label>
        Require:
        {filterOptions.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedFilters.includes(option)}
              onChange={handleFilterChange}
            />
            {option}
          </label>
        ))}
      </label>
      <label>Sort by:</label>
      <select onChange={handleSortChange}>
        <option value="noise">Noise Level</option>
        <option value="access">Accessibility</option>
        <option value="floor">Floor</option>
        <option value="a">Capacity</option>
      </select>
    </div>
  );
};

export default RoomSearcher;
