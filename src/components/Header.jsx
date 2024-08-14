function Header({ searchValue, setSearchValue }) {
  return (
    <div className="header">
      <h3>Dashboard</h3>
      <div>
        <input
          type="text"
          placeholder="Search anything..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
