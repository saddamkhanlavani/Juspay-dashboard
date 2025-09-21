import {useState, useEffect} from "react";
import "../scss/components/Header.scss"; // for styles
import SearchBar from "./SearchBar";


const Header = () => {

  //
const [theme, setTheme] = useState(
  document.documentElement.getAttribute("data-theme") || "light"
);

// Update theme dynamically
useEffect(() => {
  const observer = new MutationObserver(() => {
    setTheme(document.documentElement.getAttribute("data-theme"));
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  return () => observer.disconnect();
}, []);
//


  return (
    <header className="header">
      {/* Left section: Breadcrumb */}

      <div className="breadcrumb">
               <img src={theme === "dark"
        ? "/assets/icon-dark-bell.png" 
        : "/assets/icon-activity.png"}  className="header-icon-left" alt="Activity" />
        
        <img src={theme === "dark"
         ? "/assets/icon-dark-widgets.png"
         : "/assets/icon-sun.png"} className="header-icon-left" alt="Notifications"/>
        <span className="header-text">Dashboards  /</span> <span className="header-text">Default</span>
      </div>

      {/* Right section: Icons */}
      <div className="header-icons">
         <SearchBar />
         <div
  onClick={() => {
    document.documentElement.setAttribute(
      'data-theme',
      document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
  }}
>
  <img src={theme === "dark" 
        ? "/assets/icon-dark-theme.png" 
        : "/assets/icon-widgets.png"}
  alt="Toggle Theme" />
</div>
      
        <img src={theme === "dark"
        ? "/assets/icon-dark-activity.png" 
        : "/assets/icon-bell.png"} alt="Widgets" />
         <img src={theme === "dark"
        ? "/assets/icon-dark-bell.png" 
        : "/assets/icon-activity.png"} alt="Activity" />
        
        <img src={theme === "dark"
         ? "/assets/icon-dark-widgets.png"
         : "/assets/icon-sun.png"} alt="Notifications"/>

      </div>
    </header>
  );
};

export default Header;
