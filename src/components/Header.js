import React from "react";
import "../styles/Header.css"; // for styles
import SearchBar from "./SearchBar";


const Header = () => {
  return (
    <header className="header">
      {/* Left section: Breadcrumb */}
      <div className="breadcrumb">
        <span>Dashboards</span> / <span>Default</span>
      </div>

      {/* Right section: Icons */}
      <div className="header-icons">
         <SearchBar />
        <img src="/assets/icon-widgets.png" alt="Notifications" />
        <img src="/assets/icon-bell.png" alt="Widgets" />
        <img src="/assets/icon-activity.png" alt="Activity" />
        <img src="/assets/icon-sun.png" alt="Toggle Theme" />

      </div>
    </header>
  );
};

export default Header;
