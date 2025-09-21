import React, { useState } from "react";
import "../scss/components/SearchBar.scss";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    console.log("Searching for:", e.target.value); // Replace with your search logic
  };

  return (
    <div className="search-bar">
      <span className="search-icon"> <img src="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/search1.png"  alt="seaarch1" />  </span>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleSearch}
      />
      <span className="shortcut"> <img src="https://saddamkhanlavani.github.io/Juspay-dashboard/assets/search2.png"  alt="seaarch2" />  </span>

    </div>
  );
};

export default SearchBar;
